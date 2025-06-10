<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.post.title}</title>
	<meta conent={data.post.title} propperty="og:title" />
	<meta content={data.post.description} property="og:description" />
</svelte:head>

<section>
	<div class="post-conent">
		{@html data.post.html}
	</div>
	<aside>
		<span>Autor: {data.post.author}</span>
		<span>Created: {data.post.date}</span>
		<span>Rading time: {data.post.readingTime}min</span>
	</aside>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: var(--space-4);
	}

	aside {
		background-color: var(--color-bg-clear);
		padding: var(--space-3);
		border-radius: var(--radius-sm);
		height: fit-content;
		display: flex;
		flex-direction: column;
	}
</style>
