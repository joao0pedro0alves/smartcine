import '../styles/global.css'
import type { AppProps } from 'next/app'

import 'moment/locale/pt-br'

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
