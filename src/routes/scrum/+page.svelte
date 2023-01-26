<script lang="ts">
	import { guide } from './scrum2020';
	import SearchBar from './SearchBar.svelte';
	import TextBlock from './TextBlock.svelte';

	let filter: string = '';

	let textBlocks: string[] = guide.split('\n');
</script>

<svelte:head>
	<title>Interactive Scrum Guide</title>
	<meta name="description" content="Forms" />
</svelte:head>

<h1>Interactive Scrum Guide</h1>

<SearchBar bind:inputValue={filter} />

{#each textBlocks as text}
	<TextBlock bind:filter {text} />
{/each}
