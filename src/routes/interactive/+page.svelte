<script lang="ts">
	import Selection from './Selection.svelte';
	import TextBlocks from './TextBlocks.svelte';
	import * as guides from './generated/guides';
	import SearchBar from '$lib/search/SearchBar.svelte';
	import { tags_store } from '$lib/search/store';

	let searchTerm = '';
	let selectedGuide = 'Scrum_Guide_2020';
	$: textBlocks = getGuideText(selectedGuide).split('\n');

	function getGuideText(guide: string): string {
		for (const [key, value] of Object.entries(guides)) {
			if (key === guide) {
				return value as string;
			}
		}
		return '# No matching Guide found';
	}

	function resetValues(): void {
		tags_store.reset();
		searchTerm = '';
	}
</script>

<svelte:head>
	<title>Interactive Agile Guides</title>
	<meta name="description" content="Interactive Agile Guides" />
</svelte:head>

<h1>Interactive Agile Guides</h1>

<SearchBar bind:searchTerm />

<br />

<Selection on:change={resetValues} bind:selectedGuide options={Object.keys(guides)} />

<br />

<TextBlocks bind:textBlocks bind:searchTerm />
