import React from 'react'
import { CmsDynamicPage, CmsStaticPage } from 'crownpeak-dxm-react-sdk';
import HomeHero from "../components/procam/homeHero";
import ImagePanel from "../components/procam/imagePanel";
import Events from '../components/procam/events';
import Products from "../components/procam/products";
import TwoBluePanels from "../components/procam/twoBluePanels";
import DropZone from "../components/functional/dropZone";
import Routing from "../core/routing";
import HeaderNavigation from "../components/procam/global/headerNavigation";

export default class HomePage extends CmsDynamicPage
{
    constructor(props)
    {
        super(props);
        this.cmsSuppressFolder = true;
        this.cmsUseTmf = false;
        this.cmsWrapper = "ProCam";
        if(this.props && this.props.location) this.cmsAssetId = Routing.getCmsAssetId(this.props.location.pathname);
    }

    render() {
        super.render();
        return (
            this.state.isLoaded &&
            <div>
                <header>
                    <nav id="primaryNavContainer" className="navbar navbar-expand-md">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-3">
                                    <a className="navbar-brand" href="#" aria-label="Procam logo link to home page">
                                        <img src="https://s3.surety.financial.cprd.io/Skunks-Works/ProCam-React-SDK/_Assets/images/logo.svg" alt="Procam"/>
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
                                    <HeaderNavigation dataProvider={this.cmsDataProvider}/>
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
                <main id="main-content" className="main-content" role="main" aria-label="main content">
                    <div className="cp-main-container">
                        <HomeHero/>
                        <ImagePanel/>
                        <Events/>
                        <Products/>
                        <TwoBluePanels/>
                        <DropZone name="droppable" />
                    </div>
                </main>
                <footer className="full-width bg-dark-blue">
                    <div className="container-fluid">
                        <div className="row footer-nav justify-content-between">
                            <div className="col-md-3">
                                <h3 className="foot-head">Contact Us</h3>
                                <ul className="foot-links">
                                    <li><a className="foot-link" href="tel:">+44 345 678 903</a></li>
                                    <li><a className="foot-link" href="mailto:">procam@mail.com</a></li>
                                    <li><a className="foot-link" href="#">Find a Store</a></li>
                                </ul>
                            </div>
                            <div className="col">
                                <h3 className="foot-head">Services</h3>
                                <ul className="foot-links">
                                    <li><a className="foot-link" href="#">Contact Us</a></li>
                                    <li><a className="foot-link" href="#">Ordering &amp; Payment</a></li>
                                    <li><a className="foot-link" href="#">Shipping</a></li>
                                    <li><a className="foot-link" href="#">Returns</a></li>
                                    <li><a className="foot-link" href="#">FAQ</a></li>
                                </ul>
                            </div>
                            <div className="col">
                                <h3 className="foot-head">Information</h3>
                                <ul className="foot-links">
                                    <li><a className="foot-link" href="#">About Procam</a></li>
                                    <li><a className="foot-link" href="#">Work With US</a></li>
                                    <li><a className="foot-link" href="#">Privacy Policy</a></li>
                                    <li><a className="foot-link" href="#">Terms &amp; Conditions</a></li>
                                    <li><a className="foot-link" href="#">Press Enquiries</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 footer-social">
                                <div className="float-lg-right">
                                    <a href="https://www.instagram.com">
                                        <i aria-hidden="true" className="fab fa-instagram"></i>
                                    </a>
                                    <a href="https://twitter.com/">
                                        <i aria-hidden="true" className="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://www.facebook.com">
                                        <i aria-hidden="true" className="fab fa-facebook"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col footer-disclaimer">
                                <p className="disclaimer">&copy; Procam 2020</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
