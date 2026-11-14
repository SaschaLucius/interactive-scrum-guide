const fs = require('fs');
const { stemmer } = require('stemmer');

const docsFolder = './docs/';
const guidesPath = './src/lib/generated/guides.ts';
const tagsPath = './src/lib/generated/tags.ts';

const REGEX_BRACKETS = /\[[#A-Za-z:,?-]+\]/gi;
const depth = 4;

const STOP = new Set(
	'a an the and or but if in on at to for of as by with from into over after before about than then so such its it this that these those is are was were be been being have has had do does did will would can could should may might not no nor you your we our they them their he she his her i my me'.split(
		' '
	)
);

let guidesContent = '';
let tagsContent = '';

const files = fs.readdirSync(docsFolder);
for (const file of files) {
	if (!file.endsWith('.md')) continue;

	const allNGrams = [[], [], [], []];
	let allCustomTags = [];
	const lines = fs.readFileSync(docsFolder + file, 'utf-8').split('\n');
	let guideText = '';

	for (const rawLine of lines) {
		allCustomTags = allCustomTags.concat(getCustomTags(rawLine));
		const line = rawLine.replace(/(\[[#A-Za-z:,?-]+\])/g, '');
		for (let i = 0; i < depth; i++) {
			allNGrams[i] = allNGrams[i].concat(ngrams(line, i + 1));
		}
		guideText += rawLine + '\n';
	}

	const escapedGuide = guideText
		.replace(/\\/g, '\\\\')
		.replace(/`/g, '\\`')
		.replace(/\$\{/g, '\\${');
	const name = file.slice(0, -3);
	guidesContent += `export const ${name} = \`${escapedGuide}\`;\n`;

	console.log(file);

	let results = [];
	for (let i = 0; i < depth; i++) {
		const key = reduceStemmed(filterByOccurence(countOccurence(allNGrams[i]), depth - i + 2));
		console.log(`\t${key.length} "${i + 1}-grams" found (min ${depth - i + 2} duplicates)`);
		results = results.concat(key);
	}
	const custom = Array.from(new Set(allCustomTags)).map((tag) => 'CT:' + tag);
	console.log('\t' + custom.length, '"custom tags" found');
	results = results.concat(custom);

	const tagsArray = results.map((tag) => JSON.stringify(tag)).join(',');
	tagsContent += `export const ${name} = [${tagsArray}];\n`;
}

fs.mkdirSync('./src/lib/generated', { recursive: true });
fs.writeFileSync(guidesPath, guidesContent, 'utf8');
fs.writeFileSync(tagsPath, tagsContent, 'utf8');

function tokens(line) {
	return line.split(/\s+/).filter(Boolean);
}

function isKeyword(token) {
	const letters = token.toLowerCase().match(/[a-z]/g);
	if (!letters || letters.length < 2) return false;
	if (/\d/.test(token)) return false;
	if (letters.length / token.length < 0.6) return false;
	return !STOP.has(letters.join(''));
}

function ngrams(line, n) {
	const parts = tokens(line);
	const out = [];
	for (let i = 0; i + n <= parts.length; i++) {
		const gram = parts.slice(i, i + n);
		if (gram.every(isKeyword)) out.push(gram.join(' '));
	}
	return out;
}

function countOccurence(arr) {
	return arr.reduce((acc, str) => {
		const lower = str.toLowerCase();
		acc[lower] = (acc[lower] || 0) + 1;
		return acc;
	}, {});
}

function filterByOccurence(counts, amount) {
	return Object.entries(counts)
		.filter((entry) => entry[1] >= amount)
		.map((entry) => entry[0]);
}

function stemPhrase(str) {
	return (str.toLowerCase().match(/[a-z]+/g) ?? []).map((token) => stemmer(token)).join(' ');
}

function reduceStemmed(arr) {
	const stemMap = arr.reduce((acc, str) => {
		const stemmed = stemPhrase(str);
		if (!acc[stemmed]) acc[stemmed] = [];
		acc[stemmed].push(str);
		return acc;
	}, {});

	return Object.values(stemMap).map((group) => group.sort((a, b) => a.length - b.length)[0]);
}

function getCustomTags(line) {
	const temp = line.match(REGEX_BRACKETS);
	if (temp != null) {
		return temp.flatMap((tag) => tag.substring(1, tag.length - 1).split(','));
	}
	return [];
}
