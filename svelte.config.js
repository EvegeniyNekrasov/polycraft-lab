import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';

const config = {
	extensions: ['.svelte', '.svx'],
	preprocess: [mdsvex()],
	kit: { adapter: adapter() }
};

export default config;
