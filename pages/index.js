
import HomePageHeader from "../components/home/header";
import HowItWorks from "../components/home/how-it-works";
import IconGrid from "../components/home/icon-grid";
import OurMission from "../components/home/our-mission";
import BlossmHead from "../components/blossm-head"
import {HOME_PAGE_DESC, HOME_PAGE_TITLE} from "../lib/constants";

export default function HomePage() {

    return (
        <div>
            <BlossmHead
                pageTitle={HOME_PAGE_TITLE}
                pageDescription={HOME_PAGE_DESC}
            />

            <HomePageHeader/>
            <IconGrid/>
            <HowItWorks/>
            <OurMission/>

        </div>
    )
}
