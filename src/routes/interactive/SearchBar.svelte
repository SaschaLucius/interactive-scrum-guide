<script lang="ts">
	import AutocompleteItem from './AutocompleteItem.svelte';
	import { tags_store } from './store';

	/* FILTERING items DATA BASED ON INPUT */
	let filteredItems: string[] = [];

	const filterItems = () => {
		let storageArr: string[] = [];
		if (inputValue) {
			$tags_store.forEach((item) => {
				if (item.toLowerCase().includes(inputValue.toLowerCase())) {
					storageArr = [...storageArr, makeMatchBold(item)];
				}
			});
		}
		filteredItems = storageArr;
	};

	/* HANDLING THE INPUT */
	let searchInput: HTMLInputElement; // use with bind:this to focus element
	export let inputValue = '';

	$: if (!inputValue) {
		filteredItems = [];
		hiLiteIndex = null;
	}

	/*const clearInput = () => {
		inputValue = '';
		searchInput.focus();
	};*/

	const setInputVal = (itemName: string) => {
		inputValue = removeBold(itemName);
		filteredItems = [];
		hiLiteIndex = null;
		(document?.querySelector('#item-input') as HTMLInputElement).focus();
	};

	const makeMatchBold = (str: string): string => {
		// replace part of (item name === inputValue) with strong tags
		let matched = str.substring(0, inputValue.length);
		let makeBold = `<strong>${matched}</strong>`;
		let boldedMatch = str.replace(matched, makeBold);
		return boldedMatch;
	};

	const removeBold = (str: string): string => {
		//replace < and > all characters between
		return str.replace(/<(.)*?>/g, '');
		// return str.replace(/<(strong)>/g, "").replace(/<\/(strong)>/g, "");
	};

	/* NAVIGATING OVER THE LIST OF ITEMS W HIGHLIGHTING */
	let hiLiteIndex: number | null = null;
	$: hiLitedItem = hiLiteIndex != null ? filteredItems[hiLiteIndex] : '';

	const navigateList = (e: KeyboardEvent) => {
		if (e.key === 'ArrowDown' && (hiLiteIndex == null || hiLiteIndex <= filteredItems.length - 1)) {
			hiLiteIndex === null ? (hiLiteIndex = 0) : (hiLiteIndex += 1);
		} else if (e.key === 'ArrowUp' && hiLiteIndex !== null) {
			hiLiteIndex === 0 ? (hiLiteIndex = filteredItems.length - 1) : (hiLiteIndex -= 1);
		} else if (e.key === 'Enter') {
			if (hiLiteIndex === null) {
				setInputVal(inputValue);
			} else {
				setInputVal(filteredItems[hiLiteIndex]);
			}
		} else {
			return;
		}
	};
</script>

<svelte:window on:keydown={navigateList} />

<form autocomplete="off">
	<div class="autocomplete">
		<input
			id="item-input"
			type="text"
			placeholder="Search Terms"
			bind:this={searchInput}
			bind:value={inputValue}
			on:input={filterItems}
		/>
	</div>

	<!-- FILTERED LIST OF ITEMS -->
	{#if filteredItems.length > 0}
		<ul id="autocomplete-items-list">
			{#each filteredItems as item, i}
				<AutocompleteItem
					itemLabel={item}
					highlighted={i === hiLiteIndex}
					on:click={() => setInputVal(item)}
				/>
			{/each}
		</ul>
	{/if}
</form>

<style>
	div.autocomplete {
		/*the container must be positioned relative:*/
		position: relative;
		display: inline-block;
		width: 300px;
	}
	input {
		border: 1px solid transparent;
		background-color: #f1f1f1;
		padding: 10px;
		font-size: 16px;
		margin: 0;
	}
	input[type='text'] {
		background-color: #f1f1f1;
		width: 100%;
	}

	#autocomplete-items-list {
		position: relative;
		margin: 0;
		padding: 0;
		top: 0;
		width: 297px;
		border: 1px solid #ddd;
		background-color: #ddd;
	}
</style>
