import * as React from 'react'
import {graphql} from 'gatsby'
import {CmsDataCache} from 'crownpeak-dxm-react-sdk'
import DropZone from '../components/functional/dropZone'

const ExamplePage = ({data, pageContext}) => {
    //CmsPage
    CmsDataCache.cmsAssetId = pageContext.assetId;
    CmsDataCache.set(CmsDataCache.cmsAssetId, data.examplePage);

    return (
        <>
            <DropZone name="droppable"/>
        </>
    )
}

export default ExamplePage;

export const query = graphql`
query($assetId: String!) {
  examplePage(assetid: {eq: $assetId}) {
    DropZones
  }
}
`
