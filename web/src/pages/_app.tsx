import '../styles/global.css'
import 'keen-slider/keen-slider.min.css'
import 'moment/locale/pt-br'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Component {...pageProps} />
    )
}
