import React from 'react'
import { CmsDynamicPage} from 'crownpeak-dxm-react-sdk';
import Header from '../components/global/header';
import Footer from '../components/global/footer';
import HomeHero from "../components/homeHero";
import ImagePanel from "../components/imagePanel";
import Events from '../components/events';
import Products from "../components/products";
import TwoBluePanels from "../components/twoBluePanels";
import DropZone from "../components/functional/dropZone";
import Routing from "../core/routing";

export default class HomePage extends CmsDynamicPage
{
    constructor(props)
    {
        super(props);
        this.cmsSuppressFolder = false;
        this.cmsUseTmf = false;
        this.cmsWrapper = "ProCam";
        if(this.props && this.props.location) this.cmsAssetId = Routing.getCmsAssetId(this.props.location.pathname);
    }

    render() {
        super.render();
        return (
            this.state.isLoaded &&
            <div>
                <Header/>
                <main id="main-content" className="main-content" role="main" aria-label="main content">
                    <div className="cp-main-container">
                        <HomeHero/>
                        <ImagePanel/>
                        <Events/>
                        <Products/>
                        <TwoBluePanels/>
                        <DropZone name="droppable" />
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}
