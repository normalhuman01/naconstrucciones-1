import localFont from 'next/font/local'

export const impactFont = localFont({
	src: [
		{
			path: '../../public/fonts/impact/impact.ttf',
			weight: '400',
			style: 'normal',
		},
	],
})
export const arialBlackFont = localFont({
	src: [
		{
			path: '../../public/fonts/arial-black/ariblk.ttf',
			weight: '400',
			style: 'normal',
		},
	],
})


export const calibriFont = localFont({
	src: [
		{
			path: '../../public/fonts/calibri/calibri-regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/calibri/calibri-bold.ttf',
			weight: '700',
			style: 'normal',
		}
	],
})
