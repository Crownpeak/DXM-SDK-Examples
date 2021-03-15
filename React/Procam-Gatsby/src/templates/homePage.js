import * as React from "react"
import HeaderNavigation from '../components/global/headerNavigation'
import HomeHero from '../components/draggable/homeHero'
import ImagePanel from '../components/draggable/imagePanel'
import Events from '../components/draggable/events'
import Products from '../components/draggable/products'
import TwoBluePanels from '../components/draggable/twoBluePanels'
import DropZone from '../components/functional/dropZone'
import { graphql } from 'gatsby'
import { CmsDataCache } from 'crownpeak-dxm-react-sdk'

const HomePage = ({ data, pageContext }) => {
  // CmsPage
  CmsDataCache.cmsAssetId = pageContext.assetId;
  CmsDataCache.set(CmsDataCache.cmsAssetId, data.homePage);
  return (
    <div>
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
                <HeaderNavigation data={data.admin.HeaderNavigationAdmin.NavItems} />
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
          <HomeHero />
          <ImagePanel />
          <Events />
          <Products />
          <TwoBluePanels />
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
              <p className="disclaimer">&copy; Procam 2021</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage;

export const query = graphql`
query($assetId: String!) {
  homePage(assetid: {eq: $assetId}) {
    Events {
      Title
      Sub_Title
      Description
      CTA_1_Link
      CTA_1_Text
      CTA_2_Link
      CTA_2_Text
      Image
      Alt
    }
    HomeHero {
      Desktop_Banner_Image
      Desktop_Banner_Alt
      Mobile_Banner_Image
      Mobile_Banner_Alt
      Text
      Image
      Alt
    }
    ImagePanel {
      Title
      Right_Image
      Right_Image_Alt
      Images {
        ImagePanelItem {
          Image
          Alt
        }
      }
    }
    Products {
      Title
      Products {
        ProductItem {
          Link
          Image
          Alt
          Title
          CTA_Text
        }
      }
    }
    TwoBluePanels {
      Panels {
        PanelItem {
          Image
          Alt
          Title
          Sub_Title
          Description
          CTA_Link
          CTA_Text
        }
      }
    }
    DropZones
  }
  admin(assetid: {eq: "284076"}) {
    HeaderNavigationAdmin {
      NavItems {
        Link {
          Title
          Url
        }
      }
    }
  }
}
`