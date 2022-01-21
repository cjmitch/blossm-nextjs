import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import MainNavigation from "../components/navigation/main-navigation";
import HomePageHeader from "../components/home/header";
import HowItWorks from "../components/home/HowItWorks";
import IconGrid from "../components/home/IconGrid";
import OurMission from "../components/home/OurMission";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

export default function HomePage() {

    return (
        <div>
            <Head>
                <title>{process.env.NEXT_PUBLIC_HOME_PAGE_TITLE}</title>
                <meta name="description" content={process.env.NEXT_PUBLIC_HOME_PAGE_DESC}/>
                <link rel="icon" href="/img/ios_app_icon.png"/>
            </Head>

            {/*<MainNavigation/>*/}
            <HomePageHeader/>
            <IconGrid/>
            <HowItWorks/>
            <OurMission/>
            {/*<Footer/>*/}

        </div>
    )
}
// `getStaticProps`, and similar Next.js methods like `getStaticPaths` and `getServerSideProps`
// only run in Node.js. Check the terminal to see the environment variables
export async function getStaticProps() {
    // Using the variables below in the browser will return `undefined`. Next.js doesn't
    // expose environment variables unless they start with `NEXT_PUBLIC_`
    // console.log('[Node.js only] APP_TITLE:', process.env.APP_TITLE)
    // console.log(
    //     '[Node.js only] TEST:',
    //     process.env.TEST
    // )

    return {props: {}}
}
