import React from 'react';
import MainNavigation from "./navigation/main-navigation";
import Footer from "./footer";

const Layout = props => (
    <div className="Layout">
        <MainNavigation />
        <div className="Content">
            {props.children}
        </div>
        <Footer/>
    </div>
);

export default Layout;