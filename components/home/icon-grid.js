
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faDollarSign, faUserFriends} from '@fortawesome/free-solid-svg-icons'
import React from "react";
import styles from "./icon-grid.module.css";
import {
    BROWSE_PLANTS, BROWSE_PLANTS_DESCRIPTION,
    BUY_SELL_SWAP,
    BUY_SELL_SWAP_DESCRIPTION,
    SOCIALIZE,
    SOCIALIZE_DESCRIPTION
} from "../../lib/constants";

const IconGrid = props => (
    <section className={`${styles.features_icons} bg-light text-center hidden-web`}>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className={`${styles.features_icons_item} mx-auto mb-5 mb-lg-0 mb-lg-3`}>
                        <div className={`${styles.features_icons_icon} d-flex`}>
                            <FontAwesomeIcon className="m-auto" icon={faSearch} width={80} height={80}/>
                        </div>
                        <h1>{BROWSE_PLANTS}</h1>
                        <p className="lead mb-0">{BROWSE_PLANTS_DESCRIPTION}</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={`${styles.features_icons_item} mx-auto mb-5 mb-lg-0 mb-lg-3`}>
                        <div className={`${styles.features_icons_icon} d-flex`}>
                            <FontAwesomeIcon className="m-auto" icon={faDollarSign} width={80} height={80}/>
                        </div>
                        <h1>{BUY_SELL_SWAP}</h1>
                        <p className="lead mb-0">{BUY_SELL_SWAP_DESCRIPTION}</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={`${styles.features_icons_item} mx-auto mb-5 mb-lg-0 mb-lg-3`}>
                        <div className={`${styles.features_icons_icon} d-flex`}>
                            <FontAwesomeIcon className="m-auto" icon={faUserFriends} width={80} height={80}/>
                        </div>
                        <h1>{SOCIALIZE}</h1>
                        <p className="lead mb-0">{SOCIALIZE_DESCRIPTION}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default IconGrid;