import { writable, type Writable } from 'svelte/store';

export const tags_store: Writable<Set<string>> = writable(new Set());
