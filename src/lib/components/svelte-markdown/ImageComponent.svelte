<script lang="ts">
	let {
		href = '',
		title = '',
		text = ''
	}: { href?: string; title?: string; text?: string } = $props();
</script>

<img src={href.replace('../static', '')} {title} alt={text} />

<style>
	img {
		max-width: 100%;
		max-height: 100%;
	}
</style>
