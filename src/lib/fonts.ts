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
      style: "bold",
    },
    {
      path: '../../public/fonts/calibri/calibri-light.ttf',
      weight: '100',
      style: 'light',
    }
  ],
})


export const abadiFont = localFont({
  src: [
    {
      path: '../../public/fonts/abadi/AbadiMT-ExtraLight.ttf',
      weight: '100',
      style: 'light',
    },
    {
      path: '../../public/fonts/abadi/AbadiMT-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/fonts/abadi/AbadiMT.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
})

