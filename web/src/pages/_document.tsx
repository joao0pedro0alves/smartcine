import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,700;1,400;1,700&display=swap" rel="stylesheet" />
                <link rel="shortcut icon" href="/favicon.png" />
                <title>SmartCine</title>
            </Head>
            <body className="bg-gray-800 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent scrollbar-corner-rounded-full">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}