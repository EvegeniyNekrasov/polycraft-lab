<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.frontmatter.title}</title>
	<meta conent={data.frontmatter.title} propperty="og:title" />
	<meta content={data.frontmatter.description} property="og:description" />
</svelte:head>

<div class="about-wrapper">
	{@html data.content}
</div>

<style>
	.about-wrapper {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	:global(.about-wrapper a) {
		color: var(--color-accent);
	}

	:global(.about-wrapper figure img) {
		width: 100%;
	}

	:global(.about-wrapper figure figcaption) {
		font-size: var(--text-sm);
		font-style: italic;
		color: var(--color-muted);
	}

	:global(.about-wrapper figure) {
		margin: 0px;
	}
</style>
