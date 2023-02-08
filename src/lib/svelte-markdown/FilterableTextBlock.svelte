<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { tags_store } from '$lib/search/store';
	import ImageComponent from './ImageComponent.svelte';

	export let block: string;
	export let filter: string;
	export let keepHeadlines = true;

	const regexpBrackets = /\[[#A-Za-z:,?-]+\]/gi;

	$: isHeadline = block.trim().startsWith('#');
	$: rawLines = block.split('\n');
	$: lines = rawLines.map((line) => line.replace(/(\[[#A-Za-z:,?-]+\])/g, ''));
	$: tags = rawLines.map((line) => getTags(line));
	$: filteredText = getFilteredText(filter, lines);
	$: tags.forEach((tagsPerLine) => tagsPerLine.forEach((tag) => tags_store.add(tag)));

	function getFilteredText(filter: string, lines: string[]): string {
		let tmp = '';
		for (let i = 0; i < lines.length; i++) {
			if (isVisible(lines[i], tags[i], filter)) {
				tmp += lines[i] + '\n';
			}
		}
		return tmp.trim();
	}

	function isVisible(line: string, tags: string[], filter: string): boolean {
		return (
			filter == '' ||
			(isHeadline && keepHeadlines) ||
			line.toLowerCase().includes(filter.toLowerCase()) ||
			(tags != null && tags.includes(filter)) // TODO: als Prefix
		);
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
