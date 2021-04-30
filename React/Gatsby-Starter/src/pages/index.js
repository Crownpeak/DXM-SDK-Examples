import * as React from 'react'
import {graphql} from 'gatsby'
import {CmsDataCache} from 'crownpeak-dxm-react-sdk'
import DropZone from '../components/functional/dropZone'

const HomePage = ({data}) => {
    //CmsPage
    CmsDataCache.cmsAssetId = 12345;
    CmsDataCache.set(CmsDataCache.cmsAssetId, data.homePage);
    const cmsSuppressModel = true;
    const cmsSuppressFolder = true;

    return (
        <>
            <DropZone name="droppable"/>
        </>
    )
}

export default HomePage

export const query = graphql`
{
  homePage(assetid: {eq: "12345"}) {
    DropZones
  }
}
`
