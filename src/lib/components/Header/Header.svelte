<script lang="js">
	let isFocused = $state(false);
	let searchValue = $state('');
	let { posts } = $props();
	import { fade } from 'svelte/transition';
	import { Search, X, Link } from '@lucide/svelte';

	let hovered = $state(null);

	let filteredPosts = $derived.by(() => {
		if (!searchValue) return [];
		const query = searchValue.toLowerCase();
		return posts.filter((p) => (p.html ?? '').toLowerCase().includes(query));
	});

	function handleBlur(e) {
		if (e.relatedTarget?.closest('.search-wrapper')) return;
		isFocused = false;
	}

	function handleClearInput() {
		isFocused = false;
		searchValue = '';
		hovered = null;
	}
</script>

<header>
	<nav>
		<ul role="list">
			<li role="list">
				<div class="links-wrapper">
					<a class="link" href="/">Polycraft Lab,</a>
					<a class="link" href="/about">About,</a>
					<a class="link" href="/blog">Blog</a>
				</div>
			</li>
			<li role="list">
				<div class={`search-container ${isFocused || searchValue !== '' ? 'grow' : ''}`}>
					<Search />
					<input
						bind:value={searchValue}
						onclick={() => (isFocused = true)}
						onblur={handleBlur}
						type="text"
						placeholder="search..."
						aria-label="search post"
					/>
					{#if searchValue !== ''}
						<button onclick={handleClearInput}>
							<X />
						</button>
					{/if}
				</div>
				{#if isFocused && searchValue}
					<div class="search-wrapper">
						{#each filteredPosts as p}
							<div class="post">
								<a
									class="post-link"
									onclick={handleClearInput}
									onmouseenter={() => (hovered = p.slug)}
									onmouseleave={() => (hovered = null)}
									tabindex="0"
									href={`/blog/${p.slug}`}
								>
									<span>{p.title}</span>

									{#if hovered === p.slug}
										<span transition:fade>
											<Link size={14} class="link-icon" aria-hidden="true" />
										</span>
									{/if}
								</a>
								<span>{p.description}</span>
							</div>
						{/each}
						{#if !filteredPosts.length}
							<div class="result empty">No results</div>
						{/if}
					</div>
				{/if}
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		position: sticky;
		padding: 2px 0px;
		top: 0;
		background-color: #fff;
		z-index: 10;
	}

	ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		padding: 0;
	}

	a {
		text-decoration: none;
	}

	a:hover {
		color: var(--color-accent);
	}

	.links-wrapper {
		display: flex;
		align-items: center;
		gap: 4px;
	}

	.link {
		text-decoration: none;
		font-size: 1.4rem;
		color: var(--color-fg);
	}

	.search-container {
		display: flex;
		align-items: center;
		gap: 4px;
		width: 200px;
		transition: width 350ms cubic-bezier(0.4, 0, 0.2, 1);
		border: 1px solid black;
		padding: 6px 8px;
		border-radius: 50px;
	}

	input {
		width: 100%;
		outline: none;
		border: none;
		background: transparent;
	}

	input:focus {
		outline: none;
		border: none;
	}

	@media only screen and (max-width: 760px) {
		.search-container {
			display: none;
		}
	}

	.grow {
		width: 500px;
	}

	.search-wrapper {
		padding: 20px;
		background-color: white;
		border: var(--border-thin);
		border-radius: var(--radius-lg);
		position: absolute;
		top: 48px;
		right: 0;
		width: 500px;
		height: 400px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.post {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.post-link {
		color: var(--color-fg);
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.post-link:hover {
		color: var(--color-accent);
	}

	button {
		outline: none;
		border: none;
		background-color: transparent;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 25px;
		width: 26px;
		height: 26px;
	}

	button:hover {
		background-color: var(--color-bg-clear);
		color: var(--color-accent);
	}
</style>
