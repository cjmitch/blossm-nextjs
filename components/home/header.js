import styles from "./header.module.css";
import Image from "next/image";
import homeViewApp from '../../public/img/ios-screenshots/ios-home-high-res.webp';
import iosAppIcon from '../../public/img/ios_app_icon.png';


const Header = props => (
        <header className={`${styles.header_background_plant}`}>
            <div className={`container d-flex my-auto align-items-center flex-row my-lg-1`}>
                <div className={`flex-column hidden-mobile`}>
                    <Image src={homeViewApp}
                           width={621} height={1344} priority layout={"intrinsic"} alt="ios-home-view"/>
                </div>
                <div className={`${styles.header_app_title} container d-flex align-items-center flex-column my-lg-5`}>

                    <div className="pt-2">
                            <img className="shadow-lg" style={{borderRadius: '1.75rem'}} width="120" height="120"
                                   src="/img/ios_app_icon.png" alt="Blossm"/>
                    </div>
                    <h1 className={`pt-3 ${styles.mastheadHeading}`}>{process.env.NEXT_PUBLIC_APP_TITLE}</h1>

                    <div className="divider_custom">
                        <div className="hidden-mobile divider_custom_line"/>
                        <div className="hidden-web bg-white divider_custom_line"/>
                    </div>

                    <h1 className={styles.masthead_subheading}>{process.env.NEXT_PUBLIC_APP_DESCRIPTION}</h1>
                    <div className="row my-3 pl-2 align-items-center ">
                        <a className="col pr-2" href={process.env.NEXT_PUBLIC_appstore_link}
                           aria-label="Download on the App Store.">
                            <img className="appStore shadow-lg"
                                   src="/img/appstore.png" width="190" height="64" alt="iOS"/>
                        </a>
                        <a className="col px-lg-2 my-1 " href={process.env.NEXT_PUBLIC_playstore_link}
                           aria-label="Get it on Google Play.">
                            <img className="playStore shadow-lg"
                                   src="/img/playstore.png" width="220" height="64"
                                   alt="Android"/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
;

export default Header;
