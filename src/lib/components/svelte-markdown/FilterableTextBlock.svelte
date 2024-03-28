<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { config as config_store } from '$lib/stores/config';
	import { searchTextLower as filter } from '$lib/stores/searchText';
	import ImageComponent from './ImageComponent.svelte';

	export let block: string;

	const regexpBrackets = /\[[#A-Za-z:,?-]+\]/gi;

	$: isHeadline = block.trim().startsWith('#');
	$: rawLines = block.split('\n');
	$: lines = rawLines.map((line) => line.replace(/(\[[#A-Za-z:,?-]+\])/g, ''));
	$: tags = rawLines.map((line) => getTags(line));
	$: filteredText = getFilteredText($filter, lines);

	function getFilteredText(filter: string, lines: string[]): string {
		let tmp = '';
		for (let i = 0; i < lines.length; i++) {
			if (isVisible(lines[i], tags[i], filter)) {
				tmp += lines[i] + '\n';
			}
		}
		return tmp.trim();
	}

	function isTag(tags: string[], filter: string): boolean {
		return (
			tags != null &&
			tags.filter((tag) => tag.toLowerCase().includes(filter.toLowerCase())).length > 0
		);
	}

	function isFullText(line: string, filter: string): boolean {
		return line.toLowerCase().includes(filter.toLowerCase());
	}

	function isHeaderVisible(): boolean {
		return $config_store.keepHeader && isHeadline;
	}

	function isVisible(line: string, tags: string[], filter: string): boolean {
		return filter == '' || isHeaderVisible() || isFullText(line, filter) || isTag(tags, filter);
	}

	function getTags(line: string): string[] {
		let temp = line.match(regexpBrackets);
		if (temp != null) {
			return temp.flatMap((t) => t.substring(1, t.length - 1).split(','));
		}
		return [];
	}
</script>

{#if filteredText.length != 0}
	<SvelteMarkdown source={filteredText + ' '} renderers={{ image: ImageComponent }} />
{/if}
