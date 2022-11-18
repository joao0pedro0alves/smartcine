import '../styles/global.css'
import 'keen-slider/keen-slider.min.css'
import 'moment/locale/pt-br'

import type { AppProps } from 'next/app'

import { Navbar } from '../components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    )
}
