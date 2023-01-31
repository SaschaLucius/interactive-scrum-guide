<script lang="ts">
	import * as guides from './generated/guides';
	import SearchBar from './SearchBar.svelte';
	import TextBlock from './TextBlock.svelte';
	import { tags_store } from './store';

	let filter = '';
	let selectedGuide = 'Scrum_Guide_2020';
	$: guide = getGuide(selectedGuide);
	$: textBlocks = guide.split('\n');

	function getGuide(guide: string): string {
		for (const [key, value] of Object.entries(guides)) {
			if (key === guide) {
				return value as string;
			}
		}
		return '# No matching Guide found';
	}

	const onChange = () => {
		$tags_store = new Set();
		filter = '';
	};
</script>

<svelte:head>
	<title>Interactive Guides</title>
	<meta name="description" content="Interactive Guides" />
</svelte:head>

<h1>Interactive Guides</h1>

<SearchBar bind:inputValue={filter} />

<br />

<select bind:value={selectedGuide} on:change={onChange} id="select">
	{#each Object.keys(guides) as option}
		<option value={option}>{option.replaceAll('_', ' ')}</option>
	{/each}
</select>

<br />

{#each textBlocks as text}
	<TextBlock bind:filter {text} />
{/each}

<style>
	#select {
		border: 1px solid #f1f1f1;
		background-color: transparent;
		font-size: 3rem;
		color: rgba(0, 0, 0, 0.7);
		text-align: center;
		margin: 0 auto;
		font-weight: 400;
		width: 30rem;
	}
</style>
