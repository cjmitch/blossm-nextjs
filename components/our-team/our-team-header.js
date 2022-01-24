import styles from './our-team-header.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSeedling} from "@fortawesome/free-solid-svg-icons";
import {
    ARI_FULL_NAME,
    ARI_HEADSHOT,
    BRIAN_FULL_NAME,
    BRIAN_HEADSHOT,
    CALVIN_FULL_NAME,
    CALVIN_HEADSHOT,
    NICK_FULL_NAME,
    NICK_HEADSHOT, TEAM_DESCRIPTION
} from "../../lib/constants";

const OurTeamHeader = props => (
    <header className={`${styles.masthead} blossm_secondary_color text-center text-white rounded-bottom`}>
        <div className="container">
            <div className="text-center">
                <h2 className="page-section-heading text-white d-inline-block mb-0">OUR BLOSSM`ING TEAM</h2>
            </div>
            <div className="divider_custom">
                <div className="divider_custom_line bg-white"/>
                <div className="divider_custom_icon">
                    <FontAwesomeIcon color="white" icon={faSeedling} width={35} height={35}/>
                </div>
                <div className="divider_custom_line bg-white"/>
            </div>
            <div className="row py-2">
                <div className="col-lg-3">
                    <div className={styles.team_member}>
                        <img className="mx-auto rounded-circle" src={NICK_HEADSHOT}
                             alt="nick-headshot"/>
                        <h4>{NICK_FULL_NAME}</h4>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className={styles.team_member}>
                        <img className="mx-auto rounded-circle" src={BRIAN_HEADSHOT}
                             alt="brian-headshot"/>
                        <h4>{BRIAN_FULL_NAME}</h4>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className={styles.team_member}>
                        <img className="mx-auto rounded-circle" src={CALVIN_HEADSHOT}
                             alt="calvin-headshot"/>
                        <h4>{CALVIN_FULL_NAME}</h4>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className={styles.team_member}>
                        <img className="mx-auto rounded-circle" src={ARI_HEADSHOT}
                             alt="calvin-headshot"/>
                        <h4>{ARI_FULL_NAME}</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg mx-auto text-center">
                    <p className={`${styles.text_small_size} text-light`}>{TEAM_DESCRIPTION}</p>
                </div>
            </div>
        </div>
    </header>
);

export default OurTeamHeader;