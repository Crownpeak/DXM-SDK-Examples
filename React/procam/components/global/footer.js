import React from 'react'
import {CmsComponent} from 'crownpeak-dxm-react-sdk';

export default class Footer extends CmsComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
        )
    }
}
