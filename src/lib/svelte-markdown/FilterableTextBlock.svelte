<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { tags_store } from '$lib/search/store';

	export let block: string;
	export let filter: string;
	export let keepHeadlines = true;

	const regexpBrackets = /\[[#A-Za-z:,?-]+\]/gi;

	let tags: string[][] = [];
	let lines: string[] = [];
	let filteredText = '';

	$: isHeadline = block.trim().startsWith('#');
	$: rawLines = block.split('\n');

	$: {
		for (let i = 0; i < rawLines.length; i++) {
			const line = rawLines[i];
			tags[i] = getTags(line);
			tags[i].forEach((tag) => tags_store.add(tag));
			lines[i] = line.replace(/(\[[#A-Za-z:,?-]+\])/g, '');
		}
	}

	$: filteredText = getFilteredText(filter);

	function getFilteredText(filter: string): string {
		let tmp = '';
		for (let i = 0; i < lines.length; i++) {
			if (isVisible(lines[i], tags[i], filter)) {
				tmp += lines[i] + '\n';
			}
		}
		return tmp;
	}

	function isVisible(line: string, tags: string[], filter: string) {
		return (
			filter == '' ||
			(isHeadline && keepHeadlines) ||
			line.toLowerCase().includes(filter.toLowerCase()) ||
			(tags != null && tags.includes(filter)) // TODO: als Prefix
		);
	}

	function getTags(line: string): string[] {
		let temp = line?.match(regexpBrackets);
		if (temp != null) {
			return temp.flatMap((t) => t.substring(1, t.length - 1).split(','));
		}
		return [];
	}
</script>

{#if filteredText?.trim().length != 0}
	<SvelteMarkdown source={filteredText + ' '} />
{/if}
