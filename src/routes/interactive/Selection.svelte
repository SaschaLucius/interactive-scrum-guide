<script lang="ts">
	export let selectedGuide = '';
	export let options: string[];
</script>

<select bind:value={selectedGuide} on:change id="select">
	{#each options as option}
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
		width: 30rem;
	}
</style>
