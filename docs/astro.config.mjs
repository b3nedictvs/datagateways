// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'DATA GATEWAYS LLC',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/DATAGATEWAYS' },
				{ icon: 'x.com', label: 'X.COM', href: 'https://x.com/data_gateways' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/datagateways/' },
				{ icon: 'farcaster', label: 'Farcaster', href: 'https://warpcast.com/porters' },


			],
			sidebar: [
				{
					label: 'About',

					items: [
						{ label: 'Introduction', slug: 'about/mission' },
						{ label: 'Contact Us', slug: 'about/contact' },
					],
				},
				{
					label: 'Projects',
					autogenerate: { directory: 'projects' },
				},
				{
					label: 'Origins',
					autogenerate: { directory: 'origins' },
				},
			],
		}),
	],
});
