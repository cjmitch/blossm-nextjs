
import OurTeamHeader from "../../components/our-team/OurTeamHeader";
import Contact from "../../components/our-team/Contact";
import BlossmHead from "../../components/BlossmHead";

export default function OurTeam() {
    return (
        <div>
            <BlossmHead
                pageTitle={process.env.NEXT_PUBLIC_OUR_TEAM_TITLE}
                pageDescription={process.env.NEXT_PUBLIC_OUR_TEAM_DESCRIPTION}
            />
            <OurTeamHeader/>
            <Contact/>
        </div>
    )
}