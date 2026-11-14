<script lang="ts">
	import Markdown from 'svelte-exmarkdown';
	import { tagMatches, textMatches } from '$lib/match';
	import { config as config_store } from '$lib/stores/config';
	import { searchTextLower as filter } from '$lib/stores/searchText';
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
	let lines = $derived(rawLines.map((line) => processLineTags(line, $filter)));
	let tags = $derived(rawLines.map((line) => getTags(line)));
	let filteredText = $derived(getFilteredText($filter, lines, $config_store.keepHeader));

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

	function getFilteredText(filter: string, lines: string[], keepHeader: boolean): string {
		let tmp = '';
		for (let i = 0; i < lines.length; i++) {
			if (isVisible(lines[i], tags[i], filter, keepHeader)) {
				tmp += lines[i] + '\n';
			}
		}
		return tmp.trim();
	}

	function isTag(tags: string[], filter: string): boolean {
		return tags != null && tags.some((tag) => tagMatches(tag, filter));
	}

	function isHeaderVisible(keepHeader: boolean): boolean {
		return keepHeader && isHeadline;
	}

	function isVisible(line: string, tags: string[], filter: string, keepHeader: boolean): boolean {
		return (
			filter == '' ||
			isHeaderVisible(keepHeader) ||
			textMatches(line, filter) ||
			isTag(tags, filter)
		);
	}

	function getTags(line: string): string[] {
		let temp = line.match(regexpBrackets);
		if (temp != null) {
			return temp.flatMap((t) => t.substring(1, t.length - 1).split(','));
		}
		return [];
	}

	function processLineTags(line: string, filter: string): string {
		if (!filter) {
			return line.replace(regexpBrackets, '');
		}
		return line.replace(regexpBrackets, (match) => {
			const individualTags = match.substring(1, match.length - 1).split(',');
			const matchingTags = individualTags.filter((tag) => tagMatches(tag, filter));
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
