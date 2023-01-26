<script lang="ts">
	import Country from './Country.svelte';
	import { tags_store } from './store';

	/* FILTERING countres DATA BASED ON INPUT */
	let filteredCountries: string[] = [];

	const filterCountries = () => {
		let storageArr: string[] = [];
		if (inputValue) {
			$tags_store.forEach((country) => {
				if (country.toLowerCase().includes(inputValue.toLowerCase())) {
					storageArr = [...storageArr, makeMatchBold(country)];
				}
			});
		}
		filteredCountries = storageArr;
	};

	/* HANDLING THE INPUT */
	let searchInput: HTMLInputElement; // use with bind:this to focus element
	export let inputValue = '';

	$: if (!inputValue) {
		filteredCountries = [];
		hiLiteIndex = null;
	}

	const clearInput = () => {
		inputValue = '';
		searchInput.focus();
	};

	const setInputVal = (countryName: string) => {
		inputValue = removeBold(countryName);
		filteredCountries = [];
		hiLiteIndex = null;
		(document?.querySelector('#country-input') as HTMLInputElement).focus();
	};

	const makeMatchBold = (str: string): string => {
		// replace part of (country name === inputValue) with strong tags
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

	/* NAVIGATING OVER THE LIST OF COUNTRIES W HIGHLIGHTING */
	let hiLiteIndex: number | null = null;
	$: hiLitedCountry = hiLiteIndex != null ? filteredCountries[hiLiteIndex] : '';

	const navigateList = (e: KeyboardEvent) => {
		if (
			e.key === 'ArrowDown' &&
			(hiLiteIndex == null || hiLiteIndex <= filteredCountries.length - 1)
		) {
			hiLiteIndex === null ? (hiLiteIndex = 0) : (hiLiteIndex += 1);
		} else if (e.key === 'ArrowUp' && hiLiteIndex !== null) {
			hiLiteIndex === 0 ? (hiLiteIndex = filteredCountries.length - 1) : (hiLiteIndex -= 1);
		} else if (e.key === 'Enter') {
			if (hiLiteIndex === null) {
				setInputVal(inputValue);
			} else {
				setInputVal(filteredCountries[hiLiteIndex]);
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
			id="country-input"
			type="text"
			placeholder="Search Scrum Terms"
			bind:this={searchInput}
			bind:value={inputValue}
			on:input={filterCountries}
		/>
	</div>

	<!-- FILTERED LIST OF COUNTRIES -->
	{#if filteredCountries.length > 0}
		<ul id="autocomplete-items-list">
			{#each filteredCountries as country, i}
				<Country
					itemLabel={country}
					highlighted={i === hiLiteIndex}
					on:click={() => setInputVal(country)}
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
