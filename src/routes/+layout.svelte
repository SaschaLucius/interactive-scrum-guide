<script>
	import Header from './Header.svelte';
	import './styles.css';
	import { UmamiAnalytics } from '@lukulent/svelte-umami';
</script>

<div class="app">
	<Header />

	<UmamiAnalytics
		websiteID="0904e6a4-a410-4778-8a77-74b102499058"
		srcURL="https://eu.umami.is/script.js"
		configuration={{ 'data-auto-track': false }}
	/>

	<main>
		<slot />
	</main>

	<footer>
		<p>
			Thank you for trying out my page, issues and improvement request can be submitted <a
				href="https://github.com/SaschaLucius/interactive-scrum-guide/issues">here</a
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
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
