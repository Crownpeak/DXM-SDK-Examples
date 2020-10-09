import {Component} from '@angular/core';
import {CmsComponent} from 'crownpeak-dxm-angular-sdk';

@Component({
    selector: '[component=Footer]',
    template: `
        <div class="container-fluid">
            <div class="row footer-nav justify-content-between">
                <div class="col-md-3">
                    <h3 class="foot-head">Contact Us</h3>
                    <ul class="foot-links">
                        <li><a class="foot-link" href="tel:">+44 345 678 903</a></li>
                        <li><a class="foot-link" href="mailto:">procam@mail.com</a></li>
                        <li><a class="foot-link" href="#">Find a Store</a></li>
                    </ul>
                </div>
                <div class="col">
                    <h3 class="foot-head">Services</h3>
                    <ul class="foot-links">
                        <li><a class="foot-link" href="#">Contact Us</a></li>
                        <li><a class="foot-link" href="#">Ordering &amp; Payment</a></li>
                        <li><a class="foot-link" href="#">Shipping</a></li>
                        <li><a class="foot-link" href="#">Returns</a></li>
                        <li><a class="foot-link" href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="col">
                    <h3 class="foot-head">Information</h3>
                    <ul class="foot-links">
                        <li><a class="foot-link" href="#">About Procam</a></li>
                        <li><a class="foot-link" href="#">Work With US</a></li>
                        <li><a class="foot-link" href="#">Privacy Policy</a></li>
                        <li><a class="foot-link" href="#">Terms &amp; Conditions</a></li>
                        <li><a class="foot-link" href="#">Press Enquiries</a></li>
                    </ul>
                </div>
                <div class="col-md-3 footer-social">
                    <div class="float-lg-right">
                        <a href="https://www.instagram.com">
                            <i aria-hidden="true" class="fab fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com/">
                            <i aria-hidden="true" class="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.facebook.com">
                            <i aria-hidden="true" class="fab fa-facebook"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col footer-disclaimer">
                    <p class="disclaimer">&copy; Procam 2020</p>
                </div>
            </div>
        </div>
    `
})
export class Footer extends CmsComponent {
}
