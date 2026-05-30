<script lang="ts">
	let { src = '', title = '', alt = '' }: { src?: string; title?: string; alt?: string } = $props();
</script>

<img src={src.replace('../static', '')} {title} {alt} />

<style>
	img {
		max-width: 100%;
		max-height: 100%;
	}
</style>
