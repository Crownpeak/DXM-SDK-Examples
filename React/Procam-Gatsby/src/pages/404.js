import * as React from 'react'
import {graphql} from 'gatsby'
import {Link} from 'gatsby'
import Header from '../components/global/header'
import Footer from '../components/global/footer'

const NotFoundPage = ({data}) => {
    return (
        <>
            <Header data={data.admin.HeaderNavigationAdmin.NavItems}/>
            <main id="main-content" className="main-content" role="main" aria-label="main content">
                <div className="cp-main-container">
                    <p>Were you looking for one of these pages instead?</p>
                    <hr/>
                    <ul>
                        {data.allUnstructuredPage.edges.map(link => {
                            return <li><Link to={link.node.slug}>{link.node.slug}</Link></li>
                        })}
                    </ul>
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
