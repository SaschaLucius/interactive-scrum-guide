<script lang="ts">
	import FilterableTextBlock from './FilterableTextBlock.svelte';

	let { textBlocks }: { textBlocks: string[] } = $props();
</script>

{#each textBlocks as block (block)}
	<FilterableTextBlock {block} />
{/each}
