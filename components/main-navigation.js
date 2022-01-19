import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./MainNavigation.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import "font-awesome/css/font-awesome.min.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
// import "./scripts";


const MainNavigation = props => (

    <header className={styles.header}>
        <nav className="navbar navbar-expand-lg blossm_primary_color fixed-top shadow-lg">
            <div className="container py-1">
                <Link className="navbar-brand js-scroll-trigger" href="/">
                    <Image id="brandImage"
                           src="/img/logo.png"
                           width={132}
                           height={29}
                           alt=""/>
                </Link>
                <button className="navbar-toggler font-weight-bold text-white rounded"
                        type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
                        aria-expanded="false" aria-label="Toggle navigation">Menu <FontAwesomeIcon icon={faBars}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1">
                            <Link class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/">HOME</Link>
                        </li>
                        <li className="mx-2"/>
                        <li className="nav-item mx-0 mx-lg-1">
                            <Link class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/our-team">OUR
                                TEAM</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);

export default MainNavigation;