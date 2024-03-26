import { natural } from 'natural';

var text =
	'When the words “develop” and “development” are used in the Scrum Guide, they refer to complex work, such as those types identified above.';

console.log('WordTokenizer', new natural.WordTokenizer().tokenize(text));

console.log(natural.PorterStemmer.tokenizeAndStem(text));

console.log(stemmer('identified'));

var corpus = ['something', 'soothing'];
var spellcheck = new natural.Spellcheck(corpus);

console.log(spellcheck.getCorrections('soemthing', 1));
