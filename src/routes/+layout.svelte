<script>
	import Header from './Header.svelte';
	import './styles.css';
	import { UmamiAnalytics } from '@lukulent/svelte-umami';

	let { children } = $props();
</script>

<div class="app">
	<Header />

	<UmamiAnalytics
		websiteID="0904e6a4-a410-4778-8a77-74b102499058"
		srcURL="https://eu.umami.is/script.js"
		configuration={{ 'data-auto-track': false }}
	/>

	<main>
		{@render children()}
	</main>

	<footer>
		<p>
			Feedback and suggestions are welcome on <a
				href="https://github.com/SaschaLucius/interactive-scrum-guide/issues">GitHub</a
			>
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1.5rem 1rem;
		width: 100%;
		max-width: 52rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1.5rem 1rem;
		border-top: 1px solid var(--color-border);
		margin-top: 2rem;
	}

	footer p {
		font-size: 0.8125rem;
		color: var(--color-text-muted);
		margin: 0;
	}
</style>
