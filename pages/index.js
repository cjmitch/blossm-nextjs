
import HomePageHeader from "../components/home/header";
import HowItWorks from "../components/home/how-it-works";
import IconGrid from "../components/home/icon-grid";
import OurMission from "../components/home/our-mission";
import BlossmHead from "../components/blossm-head"

export default function HomePage() {

    return (
        <div>
            <BlossmHead
                pageTitle={process.env.NEXT_PUBLIC_HOME_PAGE_TITLE}
                pageDescription={process.env.NEXT_PUBLIC_HOME_PAGE_DESC}
            />

            <HomePageHeader/>
            <IconGrid/>
            <HowItWorks/>
            <OurMission/>

        </div>
    )
}
