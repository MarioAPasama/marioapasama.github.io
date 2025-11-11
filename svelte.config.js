// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// /** @type {import('@sveltejs/kit').Config} */
// const dev = process.env.NODE_ENV === 'development';

// const config = {
// 	// Consult https://svelte.dev/docs/kit/integrations
// 	// for more information about preprocessors
// 	preprocess: vitePreprocess(),

// 	kit: {
// 		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
// 		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
// 		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
// 		adapter: adapter()
// 	}
// };

// // export default config;

// export default {
// 	kit: {
// 		adapter: adapter(),
// 		paths: {
// 			base: dev ? '' : '/marioapasama.github.io'
// 		},
// 		prerender: {
// 			default: true
// 		}
// 	}
// };
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			fallback: 'index.html' // Menambahkan fallback
		}),
		paths: {
			base: dev ? '' : ''
		},
		prerender: {
			entries: ['*']
		}
	}
};

export default config;


