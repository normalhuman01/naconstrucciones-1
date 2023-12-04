import localFont from 'next/font/local'

export const impactFont = localFont({
	src: [
		{
			path: '../../public/fonts/impact.ttf',
			weight: '400',
			style: 'normal',
		},
	],
})