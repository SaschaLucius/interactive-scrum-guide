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
		width: 100%;
		padding: 0.625rem 0.875rem;
		font-size: 0.9375rem;
		line-height: 1.5;
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		background: var(--color-surface);
		color: var(--color-text);
		box-shadow: var(--shadow-sm);
		transition:
			border-color 0.15s ease,
			box-shadow 0.15s ease;
		box-sizing: border-box;
		cursor: pointer;
		-webkit-appearance: none;
		appearance: none;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2364748b' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: right 0.75rem center;
		padding-right: 2rem;
	}

	#select:focus {
		outline: none;
		border-color: var(--color-theme-1);
		box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
	}
</style>
