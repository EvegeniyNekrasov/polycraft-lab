import { getPostBySlug } from "$lib/utils/posts";

export async function load({ params }) {
    const post = await getPostBySlug(params.slug);
    return { post };
}
