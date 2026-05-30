<script lang="ts">
	import { handleEvent } from '@lukulent/svelte-umami';

	let {
		itemLabel,
		highlighted,
		onclick
	}: { itemLabel: string; highlighted: boolean; onclick?: (e: MouseEvent) => void } = $props();
	let isTag = $derived(itemLabel.startsWith('CT:'));
	let label = $derived(isTag ? itemLabel.slice(3).replace(/([a-z])([A-Z])/g, '$1 $2') : itemLabel);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<li
	class="autocomplete-items"
	data-umami-event={`autocomplete: ${label.replace(/<[^>]+>/g, '')}`}
	onclick={(e) => {
		handleEvent(e);
		onclick?.(e);
	}}
	class:autocomplete-active={highlighted}
>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html isTag ? 'Tag: ' + label : label}
</li>

<style>
	li.autocomplete-items {
		list-style: none;
		padding: 0.5rem 0.875rem;
		cursor: pointer;
		font-size: 0.875rem;
		color: var(--color-text);
		transition: background 0.1s ease;
	}

	li.autocomplete-items:hover {
		background-color: var(--color-bg-1);
		color: var(--color-theme-1);
	}

	li.autocomplete-items:active {
		background-color: var(--color-theme-1);
		color: #ffffff;
	}

	.autocomplete-active {
		background-color: var(--color-theme-1);
		color: #ffffff;
	}
</style>
