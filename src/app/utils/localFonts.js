import localFont from 'next/font/local';

const fonts = localFont({
    src: [
        {
            path: '../assets/fonts/PloniMaccabiMLv2AAA-Bold.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../assets/fonts/PloniMaccabiMLv2AAA-Regular.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../assets/fonts/PloniMLv2AAA-Regular.woff2',
            weight: '100',
            style: 'normal',
        }
    ],
    variable: "--font-PloniMaccabiMLv2AAA"
})

export { fonts }