<script lang="ts">
	import FilterableTextBlock from '$lib/svelte-markdown/FilterableTextBlock.svelte';

	export let searchTerm = '';
	export let textBlocks: string[];
</script>

{#each textBlocks as text}
	<FilterableTextBlock bind:filter={searchTerm} block={text} />
{/each}
