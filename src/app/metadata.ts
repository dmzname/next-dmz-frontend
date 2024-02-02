import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Dmitro Zabelin',
	description: 'Javascript full stack developer.',
	keywords: 'Javascript, Node.js',
	icons: {
		icon: '/favicon.ico',
		other: [
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				url: '/apple-touch-icon.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				url: '/favicon-32x32.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				url: '/favicon-16x16.png',
			},
			{
				rel: 'mask-icon',
				color: '#5bbad5',
				url: '/safari-pinned-tab.svg',
			},
		],
	},
	manifest: '/site.webmanifest',
	other: {
		['msapplication-TileColor']: '#da532c',
	},
};
