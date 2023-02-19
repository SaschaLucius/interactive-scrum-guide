<script lang="ts">
	import FilterableTextBlock from '$lib/svelte-markdown/FilterableTextBlock.svelte';

	export let searchTerm = '';
	export let textBlocks: string[];
</script>

{#each textBlocks as block}
	<FilterableTextBlock filter={searchTerm} {block} />
{/each}
