var natural = require('natural');
const fs = require('fs');
const keyword_extractor = require('keyword-extractor');
const NGrams = natural.NGrams;

const docsFolder = './docs/';
const guidesPath = './src/lib/generated/guides.ts';
const tagsPath = './src/lib/generated/tags.ts';

const REGEX_BRACKETS = /\[[#A-Za-z:,?-]+\]/gi;

const depth = 4;

let allCustomTags = [];
let allNGrams = [];

let guidesContent = '';
let tagsContent = '';

const files = fs.readdirSync(docsFolder);
for (const file of files) {
	if (file.endsWith('.md')) {
		allCustomTags = [];

		for (let i = 0; i < depth; i++) {
			allNGrams[i] = [];
		}

		const lines = fs.readFileSync(docsFolder + file, 'utf-8').split('\n');
		let guideText = '';

		for (const rawLine of lines) {
			const customTags = getCustomTags(rawLine);
			allCustomTags = allCustomTags.concat(customTags);

			const line = rawLine.replace(/(\[[#A-Za-z:,?-]+\])/g, '');
			for (let i = 0; i < depth; i++) {
				const ngrams = NGrams.ngrams(line, i + 1)
					.map((ngram) => ngram.join(' '))
					.filter((ngram) => extractKeywords(ngram).length === i + 1);
				allNGrams[i] = allNGrams[i].concat(ngrams);
			}

			guideText += rawLine + '\n';
		}

		const escapedGuide = guideText
			.replace(/\\/g, '\\\\')
			.replace(/`/g, '\\`')
			.replace(/\$\{/g, '\\${');
		guidesContent += `export const ${file.slice(0, -3)} = \`${escapedGuide}\`;\n`;

		console.log(file);

		let results = [];
		for (let i = 0; i < depth; i++) {
			const key = reduceStemmed(filterByOccurence(countOccurence(allNGrams[i]), depth - i + 2)); // + 2 because of expected amount of results
			console.log(`\t${key.length} "${i + 1}-grams" found (min ${depth - i + 2} duplicates)`);
			results = results.concat(key);
		}
		const custom = Array.from(new Set(allCustomTags)).map((tag) => 'CT:' + tag); //mark custom tags
		console.log('\t' + custom.length, '"custom tags" found');

		results = results.concat(custom);

		const tagsArray = results.length > 0 ? `"${results.join('","')}"` : '';
		tagsContent += `export const ${file.slice(0, -3)} = [${tagsArray}];\n`;
	}
}

fs.mkdirSync('./src/lib/generated', { recursive: true });
fs.writeFileSync(guidesPath, guidesContent, 'utf8');
fs.writeFileSync(tagsPath, tagsContent, 'utf8');

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
