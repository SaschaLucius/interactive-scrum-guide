<script lang="ts">
	import { trackEventWithProperties } from '@lukulent/svelte-umami';
	let {
		selectedGuide = $bindable(''),
		options,
		onchange
	}: { selectedGuide?: string; options: string[]; onchange?: () => void } = $props();
</script>

<select
	bind:value={selectedGuide}
	onchange={() => {
		trackEventWithProperties(selectedGuide, { url: '/interactive-scrum-guide' });
		onchange?.();
	}}
	id="select"
>
	{#each options as option (option)}
		<option value={option}>{option.replaceAll('_', ' ')}</option>
	{/each}
</select>

<style>
	#select {
		border: 1px solid #f1f1f1;
		background-color: transparent;
		font-size: 3rem;
		color: rgba(0, 0, 0, 0.7);
		text-align: center;
		margin: 0 auto;
		font-weight: 400;
		width: 60rem;
	}
</style>
