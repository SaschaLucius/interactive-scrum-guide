var natural = require('natural');
const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
	const fileStream = fs.createReadStream('./docs/Scrum_Guide_2020.md');

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
		if (unique.length === 0) {
			console.log(`${plain}`);
		} else {
			console.log(`${plain}[${unique.join(',')}]`);
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

processLineByLine();
