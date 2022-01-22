import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faSeedling} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from './contact.module.css';

const Contact = props => (
    <section className="page-section" id="contact">
        <div className="container">
            <div className="text-center">
                <h2 className="page-section-heading blossm_dark_color_text d-inline-block mb-0">CONTACT</h2>
            </div>
            <div className="divider_custom">
                <div className="divider_custom_line"/>
                <div className="divider_custom_icon">
                    <FontAwesomeIcon icon={faSeedling} width={35} height={35}/>
                </div>
                <div className="divider_custom_line"/>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <div className="d-flex flex-column align-items-center">
                        <div className={`${styles.icon_contact} mb-3 blossm_secondary_color`}>
                            <FontAwesomeIcon icon={faEnvelope} width={30} height={30}/>
                        </div>
                        <div className="text-muted">Email</div>
                        <a className="lead fw-bold" href="mailto:name@example.com">{process.env.NEXT_PUBLIC_email_address}</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;