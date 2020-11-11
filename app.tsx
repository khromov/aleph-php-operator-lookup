import React, { ComponentType } from 'https://esm.sh/react'
import { Import } from 'https://deno.land/x/aleph/mod.ts'
import { Head } from 'https://deno.land/x/aleph/mod.ts'
// import "https://unpkg.com/tailwindcss@1.9.1/dist/tailwind.min.css"

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
    return (
        <>
            <Head>
                <title>Hello World - Aleph.js</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Import from="./style/index.less" />
            <link rel="stylesheet" href="" />
            <Page {...pageProps} />
        </>
    )
}
