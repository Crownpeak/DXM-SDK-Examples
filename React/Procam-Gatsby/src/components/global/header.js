import * as React from "react"
import { CmsDataCache } from 'crownpeak-dxm-react-sdk'
import {Helmet} from 'react-helmet'
import HeaderNavigation from "./headerNavigation";

const Header = (props) => {
    CmsDataCache.setComponent("HomeHero");
    const cmsDisableDragDrop = true;

    return (
        <>
            <Helmet htmlAttributes={{
                lang: 'en',
            }}>
                <title>Procam-Gatsby: Powered by Crownpeak</title>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>
            <header>
                <nav id="primaryNavContainer" className="navbar navbar-expand-md">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-3">
                                <a className="navbar-brand" href="#" aria-label="Procam logo link to home page">
                                    <img src="https://s3.surety.financial.cprd.io/Skunks-Works/ProCam-React-SDK/_Assets/images/logo.svg" alt="Procam" />
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navigationContent"
                                        aria-controls="navigationContent" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <span className="navbar-toggler-line"></span>
                                    <span className="navbar-toggler-line"></span>
                                    <span className="navbar-toggler-line"></span>
                                    <i aria-hidden="true" className="fas fa-times"></i>
                                </button>
                            </div>
                            <div className="col-md-5">
                                <HeaderNavigation data={props.data} />
                            </div>
                            <div className="utilities col-md-4 d-none d-lg-block">
                                <a className="utilities-item" href="#" aria-label="Vist Instagram">
                                    <i aria-hidden="true" className="fab fa-instagram"></i>
                                </a>
                                <a className="utilities-item" href="#" aria-label="Vist Twitter">
                                    <i aria-hidden="true" className="fab fa-twitter"></i>
                                </a>
                                <a className="utilities-item" href="#" aria-label="Vist Facebook">
                                    <i aria-hidden="true" className="fab fa-facebook"></i>
                                </a>
                                <a className="language-control utilities-sm-nav-item" aria-label="Change language" href="#">
                                    <i aria-hidden="true" className="fas fa-globe-americas"></i>
                                </a>
                                <a className="login-register utilities-item" aria-label="Login/Register" href="#">
                                    <i className="fas fa-user"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
