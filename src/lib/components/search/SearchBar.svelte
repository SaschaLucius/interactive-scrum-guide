<script lang="ts">
	import AutocompleteItem from './AutocompleteItem.svelte';
	import { sorted_suggestions_store } from '$lib/stores/search';
	import { searchText as searchTerm } from '$lib/stores/searchText';
	import { stemmer } from 'stemmer';

	/* HANDLING THE INPUT */
	let searchInput: HTMLInputElement;

	/* FILTERING items DATA BASED ON INPUT */
	let filteredItems: string[] = $state([]);

	/* NAVIGATING OVER THE LIST OF ITEMS W HIGHLIGHTING */
	let hiLiteIndex: number | null = $state(null);

	$effect(() => {
		if (!$searchTerm) {
			filteredItems = [];
			hiLiteIndex = null;
		}
	});

	function filterItems() {
		let storageArr: string[] = [];
		if ($searchTerm) {
			const termLower = $searchTerm.toLowerCase();
			const termStemmed = stemmer(termLower);
			$sorted_suggestions_store.forEach((item) => {
				const itemLower = item.toLowerCase();
				if (itemLower.includes(termLower)) {
					storageArr = [...storageArr, makeMatchBold(item, $searchTerm)];
				} else {
					const words = itemLower.split(/\s+/);
					if (words.some((w) => stemmer(w).includes(termStemmed))) {
						storageArr = [...storageArr, item];
					}
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
			if (hiLiteIndex === null) {
				hiLiteIndex = 0;
			} else {
				hiLiteIndex += 1;
			}
		} else if (e.key === 'ArrowUp' && hiLiteIndex !== null) {
			if (hiLiteIndex === 0) {
				hiLiteIndex = filteredItems.length - 1;
			} else {
				hiLiteIndex -= 1;
			}
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

	function closeSuggestions() {
		setTimeout(() => {
			filteredItems = [];
			hiLiteIndex = null;
		}, 150);
	}
</script>

<svelte:window onkeydown={navigateList} />

<form autocomplete="off">
	<div class="autocomplete">
		<input
			id="item-input"
			type="search"
			placeholder="Utilize Search to narrow down the guide to the relevant sections."
			title="The guide can be narrowed down by searching with pre-defined tags or free form text."
			bind:this={searchInput}
			bind:value={$searchTerm}
			oninput={filterItems}
			onblur={closeSuggestions}
		/>
	</div>

	<!-- FILTERED LIST OF ITEMS -->
	{#if filteredItems.length > 0}
		<ul id="autocomplete-items-list">
			{#each filteredItems as item, i (item)}
				<AutocompleteItem
					itemLabel={item}
					highlighted={i === hiLiteIndex}
					onclick={() => setInputVal(item)}
				/>
			{/each}
		</ul>
	{/if}
</form>

<style>
	form {
		position: relative;
		width: 100%;
	}

	div.autocomplete {
		position: relative;
		width: 100%;
	}

	input {
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
		margin: 0;
	}

	input::placeholder {
		color: var(--color-text-muted);
		font-size: 0.875rem;
	}

	input:focus {
		outline: none;
		border-color: var(--color-theme-1);
		box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
	}

	#autocomplete-items-list {
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		margin: 0;
		padding: 0.25rem 0;
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		background: var(--color-surface);
		box-shadow: var(--shadow-md);
		z-index: 50;
		max-height: 16rem;
		overflow-y: auto;
		list-style: none;
	}
</style>
