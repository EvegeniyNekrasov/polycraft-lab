import { getAllPosts } from '$lib/utils/posts';

export const prerender = true;

export async function load({ url }) {
	const posts = await getAllPosts();
	return { posts, url: url.pathname };
}
