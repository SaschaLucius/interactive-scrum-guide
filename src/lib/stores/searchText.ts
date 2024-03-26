import { derived, writable } from 'svelte/store';
import { stemmer } from 'stemmer';

export const searchText = writable('');
export const searchTextLower = derived(searchText, (text) => text.toLowerCase());
export const searchTextStemmed = derived(searchTextLower, (text) => stemmer(text));
