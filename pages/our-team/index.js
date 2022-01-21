import MainNavigation from "../../components/navigation/main-navigation";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import HomePageHeader from "../../components/home/header";
import IconGrid from "../../components/home/IconGrid";
import HowItWorks from "../../components/home/HowItWorks";
import OurMission from "../../components/home/OurMission";
import Footer from "../../components/Footer";
import OurTeamHeader from "../../components/our-team/OurTeamHeader";

export default function OurTeam() {
    return (
        <div>
            <Head>
                <title>{process.env.NEXT_PUBLIC_HOME_PAGE_TITLE}</title>
                <meta name="description" content={process.env.NEXT_PUBLIC_HOME_PAGE_DESC}/>
                <link rel="icon" href="/img/ios_app_icon.png"/>
            </Head>

            <MainNavigation/>
            <OurTeamHeader/>

        </div>
    )
}