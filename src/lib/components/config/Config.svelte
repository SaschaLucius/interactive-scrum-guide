<script lang="ts">
	import { config } from '$lib/stores/config';
</script>

<form>
	<label class="toggle">
		<input type="checkbox" bind:checked={$config.keepHeader} />
		<span class="toggle-label">Keep Document Structure</span>
	</label>
</form>

<style>
	form {
		display: flex;
		align-items: center;
	}

	.toggle {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
		font-size: 0.8125rem;
		color: var(--color-text-muted);
		white-space: nowrap;
		user-select: none;
	}

	input[type='checkbox'] {
		width: 1rem;
		height: 1rem;
		border-radius: 4px;
		border: 1px solid var(--color-border);
		cursor: pointer;
		accent-color: var(--color-theme-1);
	}
</style>
