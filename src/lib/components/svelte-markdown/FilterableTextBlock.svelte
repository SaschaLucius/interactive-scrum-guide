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

	let plugins = $derived.by(() => {
		const base: import('svelte-exmarkdown').Plugin[] = [{ renderer: { img: ImageComponent } }];
		if ($filter) {
			base.push({ rehypePlugin: [rehypeHighlight, { term: $filter }] });
		}
		return base;
	});

	let isHeadline = $derived(block.trim().startsWith('#'));
	let rawLines = $derived(block.split('\n'));
	let lines = $derived(rawLines.map((line) => processLineTags(line, $filter, $filterStemmed)));
	let tags = $derived(rawLines.map((line) => getTags(line)));
	let stemmedLines = $derived(
		lines.map((line) =>
			line
				.toLowerCase()
				.split(/\s+/)
				.map((w) => stemmer(w))
		)
	);
	let filteredText = $derived(
		getFilteredText($filter, $filterStemmed, lines, $config_store.keepHeader)
	);

	function rehypeHighlight({ term }: { term: string }) {
		return (tree: import('svelte-exmarkdown').HastNode) => {
			highlightNode(tree, term);
		};
	}

	function highlightNode(node: import('svelte-exmarkdown').HastNode, term: string) {
		if (!('children' in node) || !node.children) return;
		if ('tagName' in node && node.tagName === 'code') return;
		const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		const regex = new RegExp(`(${escaped})`, 'gi');
		const newChildren: import('svelte-exmarkdown').HastNode[] = [];
		for (const child of node.children) {
			if (child.type === 'text') {
				const parts = child.value.split(regex);
				if (parts.length > 1) {
					for (let i = 0; i < parts.length; i++) {
						if (!parts[i]) continue;
						if (i % 2 === 1) {
							newChildren.push({
								type: 'element',
								tagName: 'mark',
								properties: {},
								children: [{ type: 'text', value: parts[i] }]
							});
						} else {
							newChildren.push({ type: 'text', value: parts[i] });
						}
					}
				} else {
					newChildren.push(child);
				}
			} else {
				highlightNode(child, term);
				newChildren.push(child);
			}
		}
		node.children = newChildren;
	}

	function getFilteredText(
		filter: string,
		filterStemmed: string,
		lines: string[],
		keepHeader: boolean
	): string {
		let tmp = '';
		for (let i = 0; i < lines.length; i++) {
			if (isVisible(lines[i], tags[i], filter, filterStemmed, keepHeader, i)) {
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

	function isFullText(
		line: string,
		filter: string,
		filterStemmed: string,
		lineIndex: number
	): boolean {
		if (line.toLowerCase().includes(filter)) return true;
		return stemmedLines[lineIndex].some((stem) => stem.includes(filterStemmed));
	}

	function isHeaderVisible(keepHeader: boolean): boolean {
		return keepHeader && isHeadline;
	}

	function isVisible(
		line: string,
		tags: string[],
		filter: string,
		filterStemmed: string,
		keepHeader: boolean,
		lineIndex: number
	): boolean {
		return (
			filter == '' ||
			isHeaderVisible(keepHeader) ||
			isFullText(line, filter, filterStemmed, lineIndex) ||
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

	function processLineTags(line: string, filter: string, filterStemmed: string): string {
		if (!filter) {
			return line.replace(regexpBrackets, '');
		}
		return line.replace(regexpBrackets, (match) => {
			const individualTags = match.substring(1, match.length - 1).split(',');
			const matchingTags = individualTags.filter((tag) => {
				const tagLower = tag.toLowerCase();
				return tagLower.includes(filter) || stemmer(tagLower).includes(filterStemmed);
			});
			if (matchingTags.length > 0) {
				return ' ' + matchingTags.map((t) => '`' + t + '`').join(' ') + ' ';
			}
			return '';
		});
	}
</script>

{#if filteredText.length != 0}
	<Markdown md={filteredText + ' '} {plugins} />
{/if}
