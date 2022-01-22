import Head from 'next/head'

export default function BlossmHead({
    pageTitle,
    pageDescription,
 }) {
    return (
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription}/>
            <meta name="author" content={process.env.NEXT_PUBLIC_app_author}/>
            <meta name="keywords" content={process.env.NEXT_PUBLIC_app_keywords}/>
            <link rel="icon" href={process.env.NEXT_PUBLIC_app_icon}/>
        </Head>
    )
}