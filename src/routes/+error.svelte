<script lang="ts">
	import { page } from '$app/state';
	let error = $derived(page.error === null ? 'NOT_FOUND' : page.error.message);
	let status = $derived(page.status);
	let route = $derived(page.route);
</script>

<svelte:head>
	<title>Error</title>
	<meta name="description" content={error} />
</svelte:head>

<h1>Error: {error}</h1>
<h2>Status: {status}</h2>
<h2>Route: {route}</h2>
