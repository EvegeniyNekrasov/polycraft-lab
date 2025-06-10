<div class="hero">
	<h1>Build. Design. Tinker. Repeat.</h1>
	<p>
		A workshop without walls: front-end, back-end, UX, hardware, IoT—and any creative spark that
		emerges along the way.
	</p>
	<figure>
		<img alt="Programmer at work" src="/hero.png" />
		<figcaption>Made by GPT Image generator</figcaption>
	</figure>
</div>

<svelte:head>
	<title>Polycraft Lab</title>
</svelte:head>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		gap: 8px;
		align-items: center;
	}

	h1 {
		font-size: var(--text-4xl);
	}

	img {
		width: 100%;
	}

	figure {
		margin: 0px;
	}

	figure figcaption {
		font-size: var(--text-sm);
		font-style: italic;
		color: var(--color-muted);
	}
</style>
