import React from 'react'
import { CmsDynamicPage, CmsStaticPage } from 'crownpeak-dxm-react-sdk';
import Routing from "../core/routing";
import HeaderNavigationAdmin from "../components/procam/admin/headerNavigationAdmin";

export default class Admin extends CmsDynamicPage
{
    constructor(props)
    {
        super(props);
        this.cmsSuppressFolder = true;
        this.cmsUseTmf = false;
        this.cmsWrapper = "ProCam";
        if(this.props && this.props.location) this.cmsAssetId = Routing.getCmsAssetId(this.props.location.pathname);
    }

    render() {
        super.render();
        return (
            this.state.isLoaded &&
            <HeaderNavigationAdmin/>
        )
    }
}
