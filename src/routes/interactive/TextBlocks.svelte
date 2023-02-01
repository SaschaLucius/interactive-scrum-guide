<script lang="ts">
	import * as guides from './generated/guides';
	import SearchBar from '$lib/search/SearchBar.svelte';
	import TextBlock from '$lib/svelte-markdown/TextBlock.svelte';
	import { tags_store } from '$lib/search/store';

	export let searchTerm = '';
	export let textBlocks: string[];
</script>

{#each textBlocks as text}
	<TextBlock bind:filter={searchTerm} {text} />
{/each}
