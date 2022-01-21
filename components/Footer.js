import styles from './Footer.module.css'
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = props => (
    <div>
        <footer className={styles.footer}>
            <div className="container text-center">
                <div className="row">
                    <div className="col-sm  mb-5 mb-lg-0">
                        <h4 className="mb-4">LOCATION</h4>
                        <p className="pre-wrap  mb-0" style={{textAlign: "center"}}>{process.env.NEXT_PUBLIC_town}</p>
                        <p className="pre-wrap  mb-0" style={{textAlign: "center"}}>{process.env.NEXT_PUBLIC_city}</p>
                    </div>
                    <div className="col-sm mb-5 mb-lg-0">
                        <h4 className="mb-4">FOLLOW US</h4>
                        <a className={`${styles.app_connect} btn btn-outline-light btn-social mx-1`}
                           href="https://facebook.com/{{ site.facebook_username }}">
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} width={25} height={25}/>
                        </a>
                        <a className={`${styles.app_connect} btn btn-outline-light btn-social mx-1`}
                           href="https://www.instagram.com/{{ site.instagram_username }}">
                            <FontAwesomeIcon icon={['fab', 'instagram']} width={25} height={25}/>
                        </a>
                        <a className={`${styles.app_connect} btn btn-outline-light btn-social mx-1`}
                           href="https://www.tiktok.com/@{{ site.tiktok_username }}">
                            <FontAwesomeIcon icon={['fab', 'twitter']} width={25} height={25}/>
                        </a>
                    </div>
                    <div className="col-sm mb-5 mb-lg-0">
                        <h4 className="mb-4">HELPFUL LINKS</h4>
                        <div className="footerLinks">
                        </div>
                    </div>
                    <div className="col-sm mb-5 mb-lg-0">
                        <h4 className="mb-4">LEGAL</h4>
                        <div className="footerLinks">
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <section className={`${styles.copyright} py-4`}>
            <div className="container text-center text-white">
        <span>
            <small className="pre-wrap">© 2021 blossm.garden, Crafted With </small>
            <FontAwesomeIcon color="red" icon={faHeart} width={15} height={15}/>
        </span>
            </div>
        </section>
    </div>
);

export default Footer;