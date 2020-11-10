import React from 'react'
import { CmsDynamicPage } from 'crownpeak-dxm-react-sdk';
import DropZone from "../components/dropZone";
import HeroContainer from "../components/heroContainer";
import SecondaryContainer from "../components/secondaryContainer";
import SecondaryListContainer from "../components/secondaryListContainer";

export default class HomePage extends CmsDynamicPage
{
    constructor(props)
    {
        super(props);
        this.cmsSuppressFolder = false;
        this.cmsUseTmf = false;
        this.cmsWrapper = "Homepage";
        this.cmsAssetId = 266812;
    }

    render() {
        super.render();
        return (
            this.state.isLoaded &&
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
