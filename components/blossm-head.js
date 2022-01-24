import Head from 'next/head'
import {APP_AUTHOR, APP_ICON, APP_KEYWORDS} from "../lib/constants";

export default function BlossmHead({
    pageTitle,
    pageDescription,
 }) {
    return (
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription}/>
            <meta name="author" content={APP_AUTHOR}/>
            <meta name="keywords" content={APP_KEYWORDS}/>
            <link rel="icon" href={APP_ICON}/>
        </Head>
    )
}