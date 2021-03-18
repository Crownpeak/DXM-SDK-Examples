import * as React from "react"
import { CmsDataCache } from 'crownpeak-dxm-react-sdk'
import HeaderNavigationAdmin from "../components/admin/headerNavigationAdmin"

const Admin = ({ data, pageContext }) => {
  // CmsPage
  CmsDataCache.cmsAssetId = pageContext.assetId;
  CmsDataCache.set(CmsDataCache.cmsAssetId, data.homePage);
  return (
    <HeaderNavigationAdmin/>
  )
}

export default Admin;