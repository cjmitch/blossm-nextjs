import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import {library} from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import Layout from "../components/Layout";


library.add(fab);

function MyApp({Component, pageProps}) {

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp
