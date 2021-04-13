import * as React from "react"
import { graphql } from 'gatsby'
import { CmsDataCache } from 'crownpeak-dxm-react-sdk'
import Header from "../components/global/header";
import Footer from "../components/global/footer";
import DropZone from '../components/functional/dropZone'
import HomeHero from '../components/draggable/homeHero'
import ImagePanel from '../components/draggable/imagePanel'
import Events from '../components/draggable/events'
import Products from '../components/draggable/products'
import TwoBluePanels from '../components/draggable/twoBluePanels'

const HomePage = ({ data }) => {
  //CmsPage
  CmsDataCache.cmsAssetId = 290439;
  CmsDataCache.set(CmsDataCache.cmsAssetId, data.homePage);
  const cmsSuppressModel = true;
  const cmsSuppressFolder = true;
  return (
    <>
      <Header data={data.admin.HeaderNavigationAdmin.NavItems} />
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
      <Footer/>
    </>
  )
}

export default HomePage

export const query = graphql`
{
  homePage(assetid: {eq: "290439"}) {
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
  admin(assetid: {eq: "290425"}) {
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
