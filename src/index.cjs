var natural = require('natural');
const fs = require('fs');
const readline = require('readline');

const docsFolder = './docs/';
const guides = './src/lib/generated/guides.ts'
const tags = './src/lib/generated/tags.ts'

let allTags = [];

// Cleanup
fs.unlinkSync(guides);
fs.unlinkSync(tags);

fs.readdir(docsFolder, async (err, files) => {
    files.forEach(async (file) => {
        if(file.endsWith('.md')){
                allTags = [];
                fs.writeFileSync(guides, `export const ${file.slice(0, -3)} = \``);
                fs.writeFileSync(tags, `export const ${file.slice(0, -3)} = [`);
                await processLineByLine(docsFolder+file);
                fs.appendFileSync(tags, `"${allTags.join('","')}"];`);
                fs.appendFileSync(guides, "`;");
        }
    });
});

async function processLineByLine(file) {
	const fileStream = fs.createReadStream(file);

	const rl = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity
	});
	// Note: we use the crlfDelay option to recognize all instances of CR LF
	// ('\r\n') in input.txt as a single line break.

	for await (const line of rl) {
		const plain = line.replace(/(\[[#A-Za-z:,?-]+\])/g, '');
		const customTags = getTags(line);
		const stems = natural.PorterStemmer.tokenizeAndStem(plain);

		const all = stems.concat(customTags);
		const unique = [...new Set(all)].sort((a, b) =>
			a.localeCompare(b, undefined, { sensitivity: 'base' })
		);
        allTags = allTags.concat(unique);

		if (unique.length === 0) {
            fs.appendFileSync(guides, plain + "\n");
		} else {
            fs.appendFileSync(guides, `${plain}[${unique.join(',')}]\n`);
		}
	}
}

const regexpBrackets = /\[[#A-Za-z:,?-]+\]/gi;

function getTags(line) {
	let temp = line.match(regexpBrackets);
	if (temp != null) {
		return temp.flatMap((t) => t.substring(1, t.length - 1).split(','));
	}
	return [];
}


