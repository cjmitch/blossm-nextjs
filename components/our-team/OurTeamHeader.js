
import styles from './OurTeamHeader.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSeedling} from "@fortawesome/free-solid-svg-icons";

const OurTeamHeader = props => (
    <header className={`${styles.masthead} blossm_secondary_color text-center text-white rounded-bottom`}>
        <div className="container">
            <div className="text-center">
                <h2 className="page-section-heading text-white d-inline-block mb-0">OUR BLOSSM'ING TEAM</h2>
            </div>
            <div className="divider_custom">
                <div className="divider_custom_line bg-white"/>
                <div className="divider_custom_icon">
                    <FontAwesomeIcon color="white" icon={faSeedling} width={35} height={35}/>
                </div>
                <div className="divider_custom_line bg-white"/>
            </div>
            <div className="row py-2">
                <div className="col-lg-4">
                    <div className={styles.team_member}>
                        <img className="mx-auto rounded-circle" src={process.env.NEXT_PUBLIC_nick_headshot} alt="..."/>
                        <h4>{process.env.NEXT_PUBLIC_nick_full_name}</h4>
                        <p className="text-muted"/>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={styles.team_member}>
                        <img className="mx-auto rounded-circle" src={process.env.NEXT_PUBLIC_brian_headshot} alt="..."/>
                        <h4>{process.env.NEXT_PUBLIC_brian_full_name}</h4>
                        <p className="text-muted"/>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={styles.team_member}>
                        <img className="mx-auto rounded-circle" src={process.env.NEXT_PUBLIC_calvin_headshot} alt="..."/>
                        <h4>{process.env.NEXT_PUBLIC_calvin_full_name}</h4>
                        <p className="text-muted"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg mx-auto text-center">
                    <p className={`${styles.text_small_size} text-light`}>{process.env.NEXT_PUBLIC_team_description}</p>
                </div>
            </div>
        </div>
    </header>
);

export default OurTeamHeader;