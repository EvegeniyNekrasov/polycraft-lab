import { getPostBySlug } from '$lib/utils/posts';

export const prerender = true;

export async function load({ params }) {
	const post = await getPostBySlug(params.slug);
	return { post };
}
