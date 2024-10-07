import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
            <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/site.webmanifest" />
                <title>
                    {headTitle ? headTitle : "DNAHANI | EB5-INTERNATIONAL"}
                </title>
               
            </Head>
        </>
    )
}

export default PageHead