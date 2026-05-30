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
		border-bottom: 1px solid #d4d4d4;
		z-index: 99;
		/*position the autocomplete items to be the same width as the container:*/
		top: 100%;
		left: 0;
		right: 0;
		padding: 10px;
		cursor: pointer;
		background-color: #fff;
	}

	li.autocomplete-items:hover {
		/*when hovering an item:*/
		background-color: #81921f;
		color: white;
	}

	li.autocomplete-items:active {
		/*when navigating through the items using the arrow keys:*/
		background-color: DodgerBlue !important;
		color: #ffffff;
	}

	.autocomplete-active {
		/*when navigating through the items using the arrow keys:*/
		background-color: DodgerBlue !important;
		color: #ffffff;
	}
</style>
