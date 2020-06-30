import React from 'react';
import {CmsComponent, CmsField, CmsDataCache } from 'crownpeak-dxm-react-sdk';
import SecondaryContainer from "./secondaryContainer";

export default class SecondaryListContainer extends CmsComponent
{
    constructor(props)
    {
        super(props);
        this.SecondaryContainers = new CmsField("SecondaryContainer", "", CmsDataCache.get(CmsDataCache.cmsAssetId).SecondaryListContainer);
    }

    render () {
        let i = 0;
        return (
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
