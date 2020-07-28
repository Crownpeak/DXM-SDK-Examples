import React from 'react'
import { CmsStaticPage, CmsDynamicPage, CmsDropZoneComponent } from 'crownpeak-dxm-react-sdk';
import DropZone from "../components/dropZone";
import HeroContainer from "../components/heroContainer";
import SecondaryContainer from "../components/secondaryContainer";
import SecondaryListContainer from "../components/secondaryListContainer";

export default class HomePage extends CmsDynamicPage
{
    constructor(props)
    {
        super(props);
        this.cmsAssetId = 270021;
    }

    render() {
        super.render();
        return (
            <div>
                <div className="jumbotron">
                    <HeroContainer />
                </div>
                <div className="container">
                    <div className="row">
                        <SecondaryContainer/>
                        <SecondaryContainer/>
                        <SecondaryContainer/>
                    </div>
                    <DropZone name="secondary"/>
                    <SecondaryListContainer/>
                </div>
                <hr/>
            </div>
        )
    }
}
