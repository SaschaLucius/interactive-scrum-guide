<script lang="ts">
	import Selection from '$lib/components/guides/Selection.svelte';
	import TextBlocks from '$lib/components/svelte-markdown/TextBlocks.svelte';
	import * as guides from '$lib/generated/guides';
	import * as tags from '$lib/generated/tags';
	import SearchBar from '$lib/components/search/SearchBar.svelte';
	import { tags_store } from '$lib/stores/search';
	import { config as config_store } from '$lib/stores/config';

	let searchTerm = '';
	let selectedGuide = 'Scrum_Guide_2020';
	$: textBlocks = getGuideText(selectedGuide).split('\n\n');
	$: initializeTags(selectedGuide);

	function getGuideText(guide: string): string {
		for (const [key, value] of Object.entries(guides)) {
			if (key === guide) {
				return value as string;
			}
		}
		return '# No matching Guide found';
	}

	function getTags(guide: string): string[] {
		for (const [key, value] of Object.entries(tags)) {
			if (key === guide) {
				return value as string[];
			}
		}
		return [];
	}

	function resetValues(): void {
		tags_store.reset();
		searchTerm = '';
	}

	function initializeTags(selectedGuide: string): void {
		if ($config_store.autoTagging) {
			getTags(selectedGuide).forEach((item) => {
				tags_store.add(item);
			});
		}
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
