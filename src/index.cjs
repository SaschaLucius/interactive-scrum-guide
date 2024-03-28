var natural = require('natural');
const fs = require('fs');
const readline = require('readline');
const keyword_extractor = require('keyword-extractor');

var NGrams = natural.NGrams;
var tokenizer = new natural.WordTokenizer();

const docsFolder = './docs/';
const guidesPath = './src/lib/generated/guides.ts';
const tagsPath = './src/lib/generated/tags.ts';

const REGEX_BRACKETS = /\[[#A-Za-z:,?-]+\]/gi;

let allTags = [];
let allBigramms = [];
let allTriramms = [];
let allKeywords = [];
let allTokens = [];

// Cleanup
try{
	fs.unlinkSync(guidesPath);
	fs.unlinkSync(tagsPath);
}
catch(e){
	console.log("Files not found, creating new ones");
}


let tags;
let guides;

tags = fs.openSync(tagsPath, 'a');
guides = fs.openSync(guidesPath, 'a');

const files = fs.readdirSync(docsFolder);

for (const file of files) {
	if (file.endsWith('.md')) {
		allTags = [];
		allBigramms = [];
		allTriramms = [];
		allTokens = [];

		fs.appendFileSync(guides, `export const ${file.slice(0, -3)} = \``, 'utf8');
		fs.appendFileSync(tags, `export const ${file.slice(0, -3)} = [`, 'utf8');
		processLineByLine(docsFolder + file);

		const counts = allTokens
			.concat(allBigramms)
			.concat(allTriramms)
			.reduce((acc, str) => {
				acc[str] = (acc[str] || 0) + 1;
				return acc;
			}, {});

		const everything = Object.entries(counts)
			.filter((a) => a[1] > 2)
			.map((a) => a[0])
			.concat(allTags)
			.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

		fs.appendFileSync(tags, `"${everything.join('","')}"];`, 'utf8');
		fs.appendFileSync(guides, '`;', 'utf8');
	}
}

if (tags !== undefined) fs.closeSync(tags);
if (guides !== undefined) fs.closeSync(guides);

async function processLineByLine(file) {
	const lines = fs.readFileSync(file, 'utf-8').split('\n');

	for (const line of lines) {
		const plain = line.replace(/(\[[#A-Za-z:,?-]+\])/g, '');
		const customTags = getTags(line);

		allTags = allTags.concat(customTags);

		allTokens = allTokens.concat(
			tokenizer.tokenize(plain).filter((bigram) => extract(bigram).length === 1)
		);
		allBigramms = allBigramms.concat(
			NGrams.bigrams(plain)
				.map((bigram) => bigram.join(' '))
				.filter((bigram) => extract(bigram).length === 2)
		);
		allTriramms = allTriramms.concat(
			NGrams.trigrams(plain)
				.map((trigram) => trigram.join(' '))
				.filter((bigram) => extract(bigram).length === 3)
		);

		fs.appendFileSync(guides, plain + '\n', 'utf8');
	}
}

function extract(a) {
	return keyword_extractor.extract(a, {
		language: 'english',
		remove_digits: true,
		return_changed_case: true,
		remove_duplicates: false
	});
}

function getTags(line) {
	let temp = line.match(REGEX_BRACKETS);
	if (temp != null) {
		return temp.flatMap((t) => t.substring(1, t.length - 1).split(','));
	}
	return [];
}
