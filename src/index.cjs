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

const depth = 3;

let allCustomTags = [];
let allBigramms = [];
let allTrigrams = [];
let allKeywords = [];
let allNGrams = [];

// Cleanup
try {
	fs.unlinkSync(guidesPath);
	fs.unlinkSync(tagsPath);
} catch (e) {
	console.log('Files not found, creating new ones');
}

let tags;
let guides;

tags = fs.openSync(tagsPath, 'a');
guides = fs.openSync(guidesPath, 'a');

const files = fs.readdirSync(docsFolder);

for (const file of files) {
	if (file.endsWith('.md')) {
		allCustomTags = [];
		allKeywords = [];
		allBigramms = [];
		allTrigrams = [];

		fs.appendFileSync(guides, `export const ${file.slice(0, -3)} = \``, 'utf8');
		fs.appendFileSync(tags, `export const ${file.slice(0, -3)} = [`, 'utf8');
		const lines = fs.readFileSync(docsFolder + file, 'utf-8').split('\n');

		for (const rawLine of lines) {
			const customTags = getCustomTags(rawLine);
			allCustomTags = allCustomTags.concat(customTags);

			const line = rawLine.replace(/(\[[#A-Za-z:,?-]+\])/g, '');
			const keywords = tokenizer
				.tokenize(line)
				.filter((token) => extractKeywords(token).length === 1);
			allKeywords = allKeywords.concat(keywords);
			const bigrams = NGrams.bigrams(line)
				.map((bigram) => bigram.join(' '))
				.filter((bigram) => extractKeywords(bigram).length === 2);
			allBigramms = allBigramms.concat(bigrams);
			const trigram = NGrams.trigrams(line)
				.map((trigram) => trigram.join(' '))
				.filter((trigram) => extractKeywords(trigram).length === 3);
			allTrigrams = allTrigrams.concat(trigram);
			const ngram4 = NGrams.ngrams(line, 4)
				.map((trigram) => trigram.join(' '))
				.filter((trigram) => extractKeywords(trigram).length === 4);
			// TODO

			fs.appendFileSync(guides, rawLine + '\n', 'utf8');
		}

		console.log(file);
		const tri = reduceStemmed(filterByOccurence(countOccurence(allTrigrams), 3));
		console.log('tri', tri.length);
		const bi = reduceStemmed(filterByOccurence(countOccurence(allBigramms), 4));
		console.log('bi', bi.length);
		const key = reduceStemmed(filterByOccurence(countOccurence(allKeywords), 5));
		console.log('key', key.length);
		const custom = Array.from(new Set(allCustomTags));
		console.log('custom', custom.length);

		let all = tri.concat(bi).concat(key).concat(custom);
		//all = all.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

		fs.appendFileSync(tags, `"${all.join('","')}"];\n`, 'utf8');
		fs.appendFileSync(guides, '`;', 'utf8');
	}
}

if (tags !== undefined) fs.closeSync(tags);
if (guides !== undefined) fs.closeSync(guides);

function countOccurence(arr) {
	return arr.reduce((acc, str) => {
		const lower = str.toLowerCase();
		acc[lower] = (acc[lower] || 0) + 1;
		return acc;
	}, {});
}

function filterByOccurence(counts, amount) {
	return Object.entries(counts)
		.filter((a) => a[1] >= amount)
		.map((a) => a[0]);
}

function extractKeywords(a) {
	return keyword_extractor.extract(a, {
		language: 'english',
		remove_digits: true,
		return_changed_case: true,
		remove_duplicates: false
	});
}

function reduceStemmed(arr) {
	var tokenizer = new natural.WordTokenizer();
	const stemMap = arr.reduce((acc, str) => {
		const stemmed = tokenizer
			.tokenize(str)
			.map((token) => natural.PorterStemmer.stem(token))
			.join(' ');
		if (!acc[stemmed]) {
			acc[stemmed] = [];
		}
		acc[stemmed].push(str);
		return acc;
	}, {});

	return Object.values(stemMap).map((a) => a.sort((a, b) => a.length - b.length)[0]);
}

function getCustomTags(line) {
	let temp = line.match(REGEX_BRACKETS);
	if (temp != null) {
		return temp.flatMap((t) => t.substring(1, t.length - 1).split(','));
	}
	return [];
}
