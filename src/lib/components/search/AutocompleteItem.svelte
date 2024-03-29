<script lang="ts">
	export let itemLabel: string;
	export let highlighted: boolean;
	$: isTag = itemLabel.startsWith('CT:');
	$: label = isTag ? itemLabel.slice(3).replace(/([a-z])([A-Z])/g, '$1 $2') : itemLabel;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<li class="autocomplete-items" class:autocomplete-active={highlighted} on:click>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html isTag ? 'Custom Tag: ' + label : label}
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
