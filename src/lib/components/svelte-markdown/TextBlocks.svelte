<script lang="ts">
	import FilterableTextBlock from './FilterableTextBlock.svelte';

	export let textBlocks: string[];
</script>

{#each textBlocks as block}
	<FilterableTextBlock {block} />
{/each}
