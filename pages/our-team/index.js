import MainNavigation from "../../components/navigation/main-navigation";
import Head from "next/head";
import Footer from "../../components/Footer";
import OurTeamHeader from "../../components/our-team/OurTeamHeader";
import Contact from "../../components/our-team/Contact";

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
            <Contact/>
            <Footer/>

        </div>
    )
}