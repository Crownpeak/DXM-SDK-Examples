import * as React from 'react'
import {graphql} from 'gatsby'
import {Link} from 'gatsby'
import {CmsDataCache} from "crownpeak-dxm-react-sdk";
import Header from '../components/global/header'
import Footer from '../components/global/footer'
import HomeHero from "../components/draggable/homeHero";

const NotFoundPage = ({data}) => {
    //CmsPage
    CmsDataCache.cmsAssetId = 290439;
    CmsDataCache.set(CmsDataCache.cmsAssetId, data.homePage);
    const cmsSuppressModel = true;
    const cmsSuppressFolder = true;

    return (
        <>
            <Header data={data.admin.HeaderNavigationAdmin.NavItems}/>
            <main id="main-content" className="main-content" role="main" aria-label="main content">
                <div className="cp-main-container">
                    <HomeHero/>
                    <br/>
                    <div align="center">
                        <p>Were you looking for one of these pages instead?</p>
                        <hr/>
                        <ul>
                            {data.allUnstructuredPage.edges.map(link => {
                                return <li><Link to={link.node.slug}>{link.node.slug}</Link></li>
                            })}
                        </ul>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default NotFoundPage

export const query = graphql`
query {
  allUnstructuredPage {
    edges {
      node {
        slug
      }
    }
  }
  homePage(assetid: {eq: "290439"}) {
    HomeHero {
      Desktop_Banner_Image
      Desktop_Banner_Alt
      Mobile_Banner_Image
      Mobile_Banner_Alt
      Text
      Image
      Alt
    }
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
