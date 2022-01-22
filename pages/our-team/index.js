
import OurTeamHeader from "../../components/our-team/our-team-header";
import Contact from "../../components/our-team/contact";
import BlossmHead from "../../components/blossm-head";

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