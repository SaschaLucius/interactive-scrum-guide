<script lang="ts">
	import * as guides from './generated/guides';
	import SearchBar from './SearchBar.svelte';
	import TextBlock from './TextBlock.svelte';

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
</script>

<svelte:head>
	<title>Interactive Guides</title>
	<meta name="description" content="Interactive Scrum Guide" />
</svelte:head>

<h1>Interactive Guides</h1>

<SearchBar bind:inputValue={filter} />

<select bind:value={selectedGuide}>
	{#each Object.keys(guides) as option}
		<option value={option}>{option.replaceAll('_', ' ')}</option>
	{/each}
</select>

{#each textBlocks as text}
	<TextBlock bind:filter {text} />
{/each}
