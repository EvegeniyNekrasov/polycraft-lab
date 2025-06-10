import { crossfade, fade } from 'svelte/transition';
import { quintOut } from 'svelte/easing';

export const [send, receive] = crossfade({
	duration: 400,
	easing: quintOut,
	fallback: (node) => fade(node, { duration: 200 })
});
