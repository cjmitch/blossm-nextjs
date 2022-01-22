import React from "react";
import Link from "next/link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {Container, Nav, Navbar} from "react-bootstrap";
import styles from "./MainNavigation.module.css";



const MainNavigation = props => (

    <Navbar className={` blossm_primary_color shadow-lg`} collapseOnSelect expand="lg" fixed={"top"}>
        <Container className={`pe-xl-0`}>
        <Navbar.Brand className="py-0">
            <Link href="/">
                <a className="navbar-brand js-scroll-trigger">
                    <img id="brandImage" src="/img/logo.png" width={132} height={29} alt=""/>
                </a>
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color: "white", borderColor: "white"}}>
            <FontAwesomeIcon style={{color: "white"}} icon={faBars} width={25} height={30}/>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className=" ms-auto align-content-end">
                <Link href="/">
                    <a className={`${styles.custom_nav_links} nav-link px-0 px-lg-3 rounded`}>HOME</a>
                </Link>
                <Link href="/our-team">
                    <a className={`${styles.custom_nav_links} nav-link px-0 px-lg-3 rounded`}>OUR TEAM</a>
                </Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>

);

export default MainNavigation;