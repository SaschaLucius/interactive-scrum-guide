import { stemmer } from 'stemmer';

function clean(word: string): string {
	return word.toLowerCase().replace(/[^a-z0-9]/g, '');
}

/** Whole word, or the same stem. "ties" does not match "thinking". "values" matches "value". */
export function wordMatches(word: string, filter: string): boolean {
	const cleanWord = clean(word);
	const cleanFilter = clean(filter);
	if (!cleanWord || !cleanFilter) return false;
	return cleanWord === cleanFilter || stemmer(cleanWord) === stemmer(cleanFilter);
}

export function textMatches(text: string, filter: string): boolean {
	const query = filter.toLowerCase().trim();
	if (!query) return true;
	if (query.includes(' ')) return text.toLowerCase().includes(query);
	return text.split(/\s+/).some((word) => wordMatches(word, query));
}

export function tagMatches(tag: string, filter: string): boolean {
	const spaced = tag.replace(/([a-z])([A-Z])/g, '$1 $2');
	return textMatches(spaced, filter);
}

export function suggestionMatches(item: string, filter: string): boolean {
	if (item.startsWith('CT:')) return tagMatches(item.slice(3), filter);
	return textMatches(item, filter);
}
