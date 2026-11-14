import { derived, writable } from 'svelte/store';

export const searchText = writable('');
export const searchTextLower = derived(searchText, (text) => text.toLowerCase());
