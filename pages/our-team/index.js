
import OurTeamHeader from "../../components/our-team/our-team-header";
import Contact from "../../components/our-team/contact";
import BlossmHead from "../../components/blossm-head";
import {OUR_TEAM_DESCRIPTION, OUR_TEAM_TITLE} from "../../lib/constants";

export default function OurTeam() {
    return (
        <div>
            <BlossmHead
                pageTitle={OUR_TEAM_TITLE}
                pageDescription={OUR_TEAM_DESCRIPTION}
            />
            <OurTeamHeader/>
            <Contact/>
        </div>
    )
}