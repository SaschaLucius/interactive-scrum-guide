<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { tags_store } from './store';
	import { onMount } from 'svelte';
	import ParagraphComponent from './ParagraphComponent.svelte';
	import TextComponent from './TextComponent.svelte';

	export let text: string;
	export let filter: string;

	const regexpBrackets = /\[[A-Za-z:,]+\]/gi;

	let visible: boolean;
	let tags: string[] | null;

	onMount(async () => {
		let temp = text.match(regexpBrackets);
		if (temp != null) {
			tags = temp;
			tags.forEach((tag) => {
				$tags_store = $tags_store.add(tag.substring(1, tag.length - 1));
			});
		}
	});

	$: visible =
		filter == '' ||
		text.toLowerCase().includes(filter.toLowerCase()) ||
		(tags != null && tags.includes(filter));
</script>

{#if visible}
	{#if text.trim().length === 0}
		<br /><br />
	{:else}
		<SvelteMarkdown
			source={text.replace(/(\[[A-Za-z:,]+\])/g, '') + ' '}
			renderers={{ paragraph: ParagraphComponent, text: TextComponent }}
		/>
	{/if}
{/if}

<style>
</style>
