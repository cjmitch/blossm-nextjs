
import HomePageHeader from "../components/home/header";
import HowItWorks from "../components/home/HowItWorks";
import IconGrid from "../components/home/IconGrid";
import OurMission from "../components/home/OurMission";
import BlossmHead from "../components/BlossmHead"

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
