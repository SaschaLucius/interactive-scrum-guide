import { browser } from '$app/environment';
import type { Writable } from 'svelte/store';
import { writable, get } from 'svelte/store';

const storage = <T>(key: string, initValue: T): Writable<T> => {
	const store = writable(initValue);
	// https://kit.svelte.dev/docs/modules#$app-environment-browser
	// true if the app is running in the browser
	if (!browser) return store;

	const storedValueStr = localStorage.getItem(key);
	const stored = readStored<T>(storedValueStr);
	if (stored !== undefined) store.set(stored);
	else if (storedValueStr != null) localStorage.removeItem(key);

	store.subscribe((val) => {
		if (val == null) {
			localStorage.removeItem(key);
		} else {
			localStorage.setItem(key, JSON.stringify(val));
		}
	});

	window.addEventListener('storage', () => {
		const next = readStored<T>(localStorage.getItem(key));
		if (next === undefined) return;
		if (next !== get(store)) store.set(next);
	});

	return store;
};

function readStored<T>(raw: string | null): T | undefined {
	if (raw == null) return undefined;
	try {
		return JSON.parse(raw) as T;
	} catch {
		return undefined;
	}
}

interface Config {
	keepHeader: boolean;
}

export const config = storage<Config>('config', {
	keepHeader: true
});
