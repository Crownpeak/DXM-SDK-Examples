import * as React from "react"
import Header from "../components/global/header";
import Footer from "../components/global/footer";
import DropZone from '../components/functional/dropZone'
import { graphql } from 'gatsby'
import { CmsDataCache } from 'crownpeak-dxm-react-sdk'

const UnstructuredPage = ({ data, pageContext }) => {
  // CmsPage
  CmsDataCache.cmsAssetId = pageContext.assetId;
  CmsDataCache.set(CmsDataCache.cmsAssetId, data.unstructuredPage);

  return (
    <>
      <Header data={data.admin.HeaderNavigationAdmin.NavItems} />
      <h1>Hello, world!</h1>
      <main id="main-content" className="main-content" role="main" aria-label="main content">
        <div className="cp-main-container">
          <DropZone name="droppable" />
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default UnstructuredPage;

export const query = graphql`
query($assetId: String!) {
  unstructuredPage(assetid: {eq: $assetId}) {
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
