import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSeedling} from '@fortawesome/free-solid-svg-icons'
import styles from './our-mission.module.css';
import {MISSION} from "../../lib/constants";

const OurMission = props => (

    <section className="page-section blossm_secondary_color text-white mb-0 " id="about">
        <div className="container">
            <div className="text-center">
                <h2 className="page-section-heading d-inline-block text-white">OUR MISSION</h2>
            </div>
            <div className="divider_custom">
                <div className="divider_custom_line bg-white"/>
                <div className="divider_custom_icon">
                    <FontAwesomeIcon color="white" icon={faSeedling} width={35} height={35}/>
                </div>
                <div className="divider_custom_line bg-white"/>
            </div>
            <div className="text-center">
                <div className="p">
                    <p className={`pre-wrap lead ${styles.text_mid_size}`}>{MISSION}</p>
                </div>
            </div>
        </div>
    </section>

);

export default OurMission;