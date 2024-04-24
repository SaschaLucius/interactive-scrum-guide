<script lang="ts">
	import Selection from '$lib/components/guides/Selection.svelte';
	import TextBlocks from '$lib/components/svelte-markdown/TextBlocks.svelte';
	import * as guides from '$lib/generated/guides';
	import * as tags from '$lib/generated/tags';
	import SearchBar from '$lib/components/search/SearchBar.svelte';
	import { suggestion_store } from '$lib/stores/search';
	import { searchText as searchTerm } from '$lib/stores/searchText';
	import Config from '$lib/components/config/Config.svelte';
	import { onMount } from 'svelte';
	import { trackPageView } from '@lukulent/svelte-umami';

	let selectedGuide = 'Scrum_Guide_2020';
	$: textBlocks = getGuideText(selectedGuide).split('\n\n');
	$: initializeTags(selectedGuide);

	onMount(() => {
		trackPageView({ url: '/interactive-scrum-guide' });
	});

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
		suggestion_store.reset();
		$searchTerm = '';
	}

	function initializeTags(selectedGuide: string): void {
		getTags(selectedGuide).forEach((item) => {
			suggestion_store.add(item);
		});
	}
</script>

<svelte:head>
	<title>Interactive Agile Guides</title>
	<meta name="description" content="Interactive Agile Guides" />
</svelte:head>

<h1>Interactive Agile Guides</h1>

<div class="search-config-container">
	<SearchBar />
	<Config />
</div>

<br />

<Selection on:change={resetValues} bind:selectedGuide options={Object.keys(guides)} />

<br />

<TextBlocks bind:textBlocks />

<style>
	.search-config-container {
		display: flex;
	}
</style>
