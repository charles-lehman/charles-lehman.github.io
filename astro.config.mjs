import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import starlightLinksValidator from 'starlight-links-validator';
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import starlightHeadingBadges from 'starlight-heading-badges'
//import liveCode from 'astro-live-code'



// https://astro.build/config
export default defineConfig({
    site: 'https://charles-lehman.github.io',
    //	base: 'my-repo',
    integrations: [starlight({
        plugins: [
            //liveCode(),
            starlightBlog(),
            starlightLinksValidator(),
            starlightUtils(),
            //https://starlight-utils.pages.dev/utilities/multi-sidebar/#configuration
            //https://starlight-utils.pages.dev/utilities/nav-links/
            starlightHeadingBadges()
        ],
        head: [{
            tag: 'script',
            attrs: {
                src: "https://cloud.umami.is/script.js",
                defer: true,
                'data-website-id': "6e7b9d22-c972-4096-aa1d-7b9c62aa1607",

            }


        }],
        title: "Charles Lehman - The Wiki",
        social: {
            github: 'https://github.com/charles-lehman/charles-lehman.github.io',
            linkedin: 'https://www.linkedin.com/in/charlesflehman',
            'x.com': 'https://x.com/synchpay',
        },
        sidebar: [
            // {
            //     label: 'Thoughts',
            //     collapsed: false,
            //     autogenerate: { directory: 'guides' },
            //     // items: [
            //     //     // Each item here is one entry in the navigation menu.
            //     //     { label: 'Example Guide', slug: 'guides/example' },
            //     // ],
            // },
            // {
            //     label: 'Recommendations',
            //     collapsed: false,
            //     autogenerate: { directory: 'recs' },
            // },
            {
                label: 'Links',
                collapsed: false,
                autogenerate: { directory: 'good_links' },
            },
            {
<<<<<<< HEAD
                label: 'Reference',
                collapsed: true,
                autogenerate: { directory: 'reference' },
            },
            // {
            //     label: 'Research',
            //     collapsed: false,
            //     autogenerate: { directory: 'research' },
            // },
=======
                label: 'CSS & Code Reference',
                collapsed: true,
                autogenerate: { directory: 'reference' },
            },
                        {
                label: 'Research',
                collapsed: false,
                autogenerate: { directory: 'research' },
            },
>>>>>>> 356e24714788c66b864b1839adc9410c4f7d7ce4
        ],
    })],
});
