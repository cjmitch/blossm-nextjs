import React from "react";
import Link from "next/link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "./MainNavigation.module.css";



const MainNavigation = props => (

    // <Navbar className={`${styles.mainNav} blossm_primary_color shadow-lg`} collapseOnSelect expand="lg" fixed={"top"}>
    //     <Navbar.Brand className="m-lg-5 py-2">
    //         <Link href="/">
    //             <a className="navbar-brand js-scroll-trigger">
    //                 <img id="brandImage" src="/img/logo.png" width={132} height={29} alt=""/>
    //             </a>
    //         </Link>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //         <Nav className="m-lg-auto m-lg-0">
    //             {/*<Nav.Link href="#features">Features</Nav.Link>*/}
    //             {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
    //         </Nav>
    //         <Nav className="m-lg-auto ">
    //             <Link href="/">
    //                 <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">HOME</a>
    //             </Link>
    //             <Link href="/our-team">
    //                 <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">OUR TEAM</a>
    //             </Link>
    //         </Nav>
    //     </Navbar.Collapse>
    // </Navbar>

    <nav className={`${styles.mainNav} navbar navbar-expand-lg blossm_primary_color fixed-top shadow-lg`}>
        <div className="container py-2">
            <Link href="/">
                <a className="navbar-brand js-scroll-trigger">
                    <img id="brandImage"
                         src="/img/logo.png"
                         width={132}
                         height={29}
                         alt=""/>
                </a>
            </Link>
            <button
                className={`${styles.mainNav_toggler} navbar-toggler fw-bold text-white rounded blossm_secondary_color`}
                type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
                aria-expanded="false" aria-label="Toggle navigation"><FontAwesomeIcon icon={faBars} width={30} height={40}/>
            </button>
            <div className="collapse navbar-collapse " id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-lg-1">
                        <Link class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/">HOME</Link>
                    </li>
                    <li className="nav-item mx-lg-5">
                        <Link class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/our-team">OUR
                            TEAM</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default MainNavigation;