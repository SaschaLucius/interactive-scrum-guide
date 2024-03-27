var natural = require('natural');
const fs = require('fs');
const readline = require('readline');

const docsFolder = './docs/';
const guidesPath = './src/lib/generated/guides.ts'
const tagsPath = './src/lib/generated/tags.ts'

const REGEX_BRACKETS = /\[[#A-Za-z:,?-]+\]/gi;

let allTags = [];

// Cleanup
fs.unlinkSync(guidesPath);
fs.unlinkSync(tagsPath);

let tags;
let guides;

tags = fs.openSync(tagsPath, 'a');
guides = fs.openSync(guidesPath, 'a');

const files = fs.readdirSync(docsFolder)

for (const file of files) {
    if(file.endsWith('.md')){
        allTags = [];
        fs.appendFileSync(guides, `export const ${file.slice(0, -3)} = \``,'utf8');
        fs.appendFileSync(tags, `export const ${file.slice(0, -3)} = [`,'utf8');
        processLineByLine(docsFolder+file);
        fs.appendFileSync(tags, `"${allTags.join('","')}"];`,'utf8');
        fs.appendFileSync(guides, "`;",'utf8');
    }
}

if (tags !== undefined)
    fs.closeSync(tags);
if (guides !== undefined)
    fs.closeSync(guides);

async function processLineByLine(file) {
	const lines = fs.readFileSync(file, 'utf-8')
    .split('\n')

	for (const line of lines) {
		const plain = line.replace(/(\[[#A-Za-z:,?-]+\])/g, '');
		const customTags = getTags(line);
		const stems = natural.PorterStemmer.tokenizeAndStem(plain);

		const all = stems.concat(customTags);
		const unique = [...new Set(all)].sort((a, b) =>
			a.localeCompare(b, undefined, { sensitivity: 'base' })
		);
        allTags = allTags.concat(unique);

		if (unique.length === 0) {
            fs.appendFileSync(guides, plain + "\n",'utf8');
		} else {
            fs.appendFileSync(guides, `${plain}[${unique.join(',')}]\n`,'utf8');
		}
	}
}



function getTags(line) {
	let temp = line.match(REGEX_BRACKETS);
	if (temp != null) {
		return temp.flatMap((t) => t.substring(1, t.length - 1).split(','));
	}
	return [];
}


