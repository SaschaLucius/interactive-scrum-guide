<script lang="ts">
	import AutocompleteItem from './AutocompleteItem.svelte';
	import { sorted_suggestions_store } from '$lib/stores/search';
	import { searchText as searchTerm } from '$lib/stores/searchText';

	/* HANDLING THE INPUT */
	let searchInput: HTMLInputElement;

	/* FILTERING items DATA BASED ON INPUT */
	let filteredItems: string[] = [];

	/* NAVIGATING OVER THE LIST OF ITEMS W HIGHLIGHTING */
	let hiLiteIndex: number | null = null;

	$: if (!$searchTerm) {
		filteredItems = [];
		hiLiteIndex = null;
	}

	function filterItems() {
		let storageArr: string[] = [];
		if ($searchTerm) {
			$sorted_suggestions_store.forEach((item) => {
				if (item.toLowerCase().includes($searchTerm.toLowerCase())) {
					storageArr = [...storageArr, makeMatchBold(item, $searchTerm)];
				}
			});
		}
		filteredItems = storageArr;
	}

	function setInputVal(itemName: string) {
		const term = removeBold(itemName);
		$searchTerm = term.startsWith('CT:') ? term.slice(3) : term;
		filteredItems = [];
		hiLiteIndex = null;
		(document?.querySelector('#item-input') as HTMLInputElement).focus();
	}

	function makeMatchBold(str: string, term: string): string {
		let startIndex = str.toLowerCase().indexOf(term.toLowerCase());
		let matched = str.substring(startIndex, startIndex + term.length);
		let makeBold = `<strong>${matched}</strong>`;
		let boldedMatch = str.replaceAll(matched, makeBold);
		return boldedMatch;
	}

	function removeBold(str: string): string {
		//replace < and > all characters between
		return str.replaceAll(/<(.)*?>/g, '');
	}

	function navigateList(e: KeyboardEvent) {
		if (e.key === 'ArrowDown' && (hiLiteIndex == null || hiLiteIndex <= filteredItems.length - 1)) {
			hiLiteIndex === null ? (hiLiteIndex = 0) : (hiLiteIndex += 1);
		} else if (e.key === 'ArrowUp' && hiLiteIndex !== null) {
			hiLiteIndex === 0 ? (hiLiteIndex = filteredItems.length - 1) : (hiLiteIndex -= 1);
		} else if (e.key === 'Enter') {
			if (hiLiteIndex === null) {
				setInputVal($searchTerm);
			} else {
				setInputVal(filteredItems[hiLiteIndex]);
			}
		} else {
			return;
		}
	}
</script>

<svelte:window on:keydown={navigateList} />

<form autocomplete="off">
	<div class="autocomplete">
		<input
			id="item-input"
			type="search"
			placeholder="Utilize Search to narrow down the guide to the relevant sections."
			title="The guide can be narrowed down by searching with pre-defined tags or free form text."
			bind:this={searchInput}
			bind:value={$searchTerm}
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
		width: 30rem;
	}
	input {
		border: 1px solid transparent;
		background-color: #f1f1f1;
		padding: 10px;
		font-size: 16px;
		margin: 0;
	}
	input[type='search'] {
		background-color: #f1f1f1;
		width: 100%;
	}

	#autocomplete-items-list {
		position: relative;
		margin: 0;
		padding: 0;
		top: 0;
		width: 30rem;
		height: 0px;
		border: 1px solid #ddd;
		background-color: #ddd;
	}
</style>
