import autoAdapter from '@sveltejs/adapter-auto';
import staticAdapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const TARGET = process.env.TARGET;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter:
			TARGET === 'static'
				? staticAdapter({
						pages: 'build',
						assets: 'build',
						strict: false
					})
				: autoAdapter()
		// TODO https://kit.svelte.dev/docs/configuration#csp
	}
};

export default config;
