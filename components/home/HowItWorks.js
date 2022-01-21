import styles from "./HowItWorks.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSeedling} from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";

const HowItWorks = props => (
    <div>
        <section className={`py-2 bg-light hidden-mobile ${styles.how_it_works_background_1}`} id="home">
            <div className="text-center mt-5">
                <h2 className="page-section-heading blossm_dark_color_text ">HOW IT WORKS</h2>
            </div>
            <div className="divider_custom">
                <div className="divider_custom_line"/>
                <div className="divider_custom_icon">
                    <FontAwesomeIcon icon={faSeedling} width={35} height={35}/>
                </div>
                <div className="divider_custom_line"/>
            </div>
            <div className={`container my-5 shadow-lg ${styles.card_background_1}`} style={{borderRadius: "1.25rem"}}>
                <div className="row ml-lg-5 gx-4 gx-lg-5 align-items-center flex-row">
                    <div className="col-sm-4">
                        <Image src="/img/ios-screenshots/ios-map-high-res.webp" priority={true} width={932} height={2016}/>
                    </div>
                    <div className="col-sm-4 flex-column" style={{borderRadius: "1.25rem"}}>
                        <h2 className="display-4 blossm_dark_color_text lh-1 mb-4">{process.env.NEXT_PUBLIC_browse_plants}</h2>
                        <p className="lead fw-normal text-muted mb-5 mb-lg-0"> {process.env.NEXT_PUBLIC_browse_plants_description}</p>
                    </div>
                </div>
            </div>
        </section>
        <section className={`py-2 bg-light hidden-mobile ${styles.how_it_works_background_2}`}>
            <div className={`container my-5 bg-gray-light shadow-lg ${styles.card_background_2}`}
                 style={{borderRadius: "1.25rem"}}>
                <div className="row ml-lg-5 gx-4 gx-lg-5 align-items-center">
                    <div className="col-sm-4">
                    </div>
                    <div className="col-sm-4">
                        <h2 className="display-4 blossm_dark_color_text lh-1 mb-4">{process.env.NEXT_PUBLIC_buy_sell_swap}</h2>
                        <p className="lead fw-normal text-muted mb-5 mb-lg-0">{process.env.NEXT_PUBLIC_buy_sell_swap_description} </p>
                    </div>
                    <div className="col-sm-4">
                        <Image src="/img/ios-screenshots/ios-item-final.webp" priority={true} width={932} height={2016}/>
                    </div>

                </div>
            </div>
        </section>
        <section className={`py-2 bg-light hidden-mobile ${styles.how_it_works_background_3}`}>
            <div className={`container my-5 bg-gray-light shadow-lg ${styles.card_background_3}`}
                 style={{borderRadius: "1.25rem"}}>
                <div className="row ml-lg-5 gx-4 gx-lg-5 align-items-center">
                    <div className="col-sm-4">
                        <Image src="/img/ios-screenshots/ios-community-high-res.webp" priority={true} width={932} height={2016}/>
                    </div>
                    <div className="col-sm-4">
                        <h2 className="display-4 blossm_dark_color_text lh-1 mb-4">{process.env.NEXT_PUBLIC_socialize}</h2>
                        <p className="lead fw-normal text-muted mb-5 mb-lg-0">{process.env.NEXT_PUBLIC_socialize_description}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default HowItWorks;