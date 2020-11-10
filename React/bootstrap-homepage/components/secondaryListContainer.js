import React from 'react';
import {CmsComponent, CmsField, CmsDataCache } from 'crownpeak-dxm-react-sdk';
import SecondaryContainer from "./secondaryContainer";

export default class SecondaryListContainer extends CmsComponent
{
    constructor(props)
    {
        super(props);
        this.SecondaryContainers = new CmsField("SecondaryContainer", "", CmsDataCache.get(CmsDataCache.cmsAssetId).SecondaryListContainer.SecondaryContainers);
    }

    render () {
        let i = 0;
        return (
            // This method used to override default render() method from SDK, as custom className attribute required.
            <div className="row">
                {/* <List name="SecondaryContainers" type="SecondaryContainer"> */}
                {this.SecondaryContainers.value.map(sc => {
                    return <SecondaryContainer data={sc.SecondaryContainer} key={i++}/>
                })}
                {/* </List> */}
            </div>
        )
    }
}
