import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import starlightLinksValidator from 'starlight-links-validator';
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import starlightHeadingBadges from 'starlight-heading-badges'



// https://astro.build/config
export default defineConfig({
    site: 'https://charles-lehman.github.io',
//	base: 'my-repo',
    integrations: [starlight({
        plugins: [
            starlightBlog(),
            starlightLinksValidator(), 
            starlightUtils(),
            //https://starlight-utils.pages.dev/utilities/multi-sidebar/#configuration
            //https://starlight-utils.pages.dev/utilities/nav-links/
            starlightHeadingBadges()
        ],
        title: "Charles Lehman - The Wiki",
        social: {
            github: 'https://github.com/charles-lehman/charles-lehman.github.io',
            linkedin: 'https://www.linkedin.com/in/charlesflehman',
            'x.com': 'https://x.com/synchpay',
        },
        sidebar: [
            {
                label: 'Thoughts',
                collapsed: true,
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Example Guide', slug: 'guides/example' },
                ],
            },
            {
                label: 'Recommendations',
                collapsed: true,
                autogenerate: { directory: 'recs' },
            },
            {
                label: 'Cool Links',
                collapsed: true,
                autogenerate: { directory: 'cool_links' },
            },
            {
                label: 'Reference',
                collapsed: true,
                autogenerate: { directory: 'reference' },
            },
        ],
		})],
});