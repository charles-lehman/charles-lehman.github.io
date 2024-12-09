import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog'

// https://astro.build/config
export default defineConfig({
	site: 'https://charles-lehman.github.io',
//	base: 'my-repo',
	integrations: [
		starlight({
			plugins: [starlightBlog()],
			title: "Tool Recs & Rants",
			social: {
				github: 'https://github.com/charles-lehman/charles-lehman.github.io',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Recommendations',
					autogenerate: { directory: 'recs' },
				},
				{
					label: 'Cool Links',
					autogenerate: { directory: 'cool_links' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
