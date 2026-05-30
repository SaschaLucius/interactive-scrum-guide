<script lang="ts">
	import Markdown from 'svelte-exmarkdown';
	import { config as config_store } from '$lib/stores/config';
	import {
		searchTextLower as filter,
		searchTextStemmed as filterStemmed
	} from '$lib/stores/searchText';
	import { stemmer } from 'stemmer';
	import ImageComponent from './ImageComponent.svelte';

	let { block }: { block: string } = $props();

	const regexpBrackets = /\[[#A-Za-z:,?-]+\]/gi;
	const plugins = [{ renderer: { img: ImageComponent } }];

	let isHeadline = $derived(block.trim().startsWith('#'));
	let rawLines = $derived(block.split('\n'));
	let lines = $derived(rawLines.map((line) => line.replace(/(\[[#A-Za-z:,?-]+\])/g, '')));
	let tags = $derived(rawLines.map((line) => getTags(line)));
	let filteredText = $derived(
		getFilteredText($filter, $filterStemmed, lines, $config_store.keepHeader)
	);

	function getFilteredText(
		filter: string,
		filterStemmed: string,
		lines: string[],
		keepHeader: boolean
	): string {
		let tmp = '';
		for (let i = 0; i < lines.length; i++) {
			if (isVisible(lines[i], tags[i], filter, filterStemmed, keepHeader)) {
				tmp += lines[i] + '\n';
			}
		}
		return tmp.trim();
	}

	function isTag(tags: string[], filter: string, filterStemmed: string): boolean {
		return (
			tags != null &&
			tags.filter((tag) => {
				const tagLower = tag.toLowerCase();
				return tagLower.includes(filter) || stemmer(tagLower).includes(filterStemmed);
			}).length > 0
		);
	}

	function isFullText(line: string, filter: string, filterStemmed: string): boolean {
		const lineLower = line.toLowerCase();
		if (lineLower.includes(filter)) return true;
		const words = lineLower.split(/\s+/);
		return words.some((word) => stemmer(word).includes(filterStemmed));
	}

	function isHeaderVisible(keepHeader: boolean): boolean {
		return keepHeader && isHeadline;
	}

	function isVisible(
		line: string,
		tags: string[],
		filter: string,
		filterStemmed: string,
		keepHeader: boolean
	): boolean {
		return (
			filter == '' ||
			isHeaderVisible(keepHeader) ||
			isFullText(line, filter, filterStemmed) ||
			isTag(tags, filter, filterStemmed)
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
	<Markdown md={filteredText + ' '} {plugins} />
{/if}
