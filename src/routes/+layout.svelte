<script lang="js">
	import Header from '$lib/components/Header/Header.svelte';
	import { fly, fade } from 'svelte/transition';
	import { quintOut, quintIn } from 'svelte/easing';

	let { children, data } = $props();
</script>

<main>
	<Header posts={data.posts} />
	{#key data.url}
		<div in:fly={{ y: -50, duration: 300, easing: quintOut }}>
			{@render children()}
		</div>
	{/key}
</main>

<style>
	main {
		max-width: 1000px;
		width: 100%;
		height: 100%;
		margin: 0 auto;
		padding: 10px;
	}
</style>
