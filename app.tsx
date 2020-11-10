import React, { ComponentType } from 'https://esm.sh/react'
import { Head } from 'https://deno.land/x/aleph/mod.ts'
// import "https://unpkg.com/tailwindcss@1.9.1/dist/tailwind.min.css"

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
    return (
        <>
            <Head>
                <title>Hello World - Aleph.js</title>
            </Head>
            <link rel="stylesheet" href="https://unpkg.com/tailwindcss@1.9.1/dist/tailwind.min.css" />
            <Page {...pageProps} />
        </>
    )
}
