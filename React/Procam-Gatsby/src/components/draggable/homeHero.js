import * as React from "react"
import { CmsDataCache, CmsField, CmsFieldTypes } from 'crownpeak-dxm-react-sdk'

const HomeHero = (props) => {
    CmsDataCache.setComponent("HomeHero");
    const cmsDisableDragDrop = false;

    let desktop_banner_image = new CmsField("Desktop_Banner_Image", CmsFieldTypes.IMAGE, props && props.data ? props.data.Desktop_Banner_Image : null);
    let desktop_banner_alt = new CmsField("Desktop_Banner_Alt", CmsFieldTypes.TEXT, props && props.data ? props.data.Desktop_Banner_Alt : null);
    let mobile_banner_image = new CmsField("Mobile_Banner_Image", CmsFieldTypes.IMAGE, props && props.data ? props.data.Mobile_Banner_Image : null);
    let mobile_banner_alt = new CmsField("Mobile_Banner_Alt", CmsFieldTypes.TEXT, props && props.data ? props.data.Mobile_Banner_Alt : null);
    let text = new CmsField("Text", CmsFieldTypes.TEXT, props && props.data ? props.data.Text : null);
    let image = new CmsField("Image", CmsFieldTypes.IMAGE, props && props.data ? props.data.Image : null);
    let alt = new CmsField("Alt", CmsFieldTypes.TEXT, props && props.data ? props.data.Alt : null);

    return (
        <div className="cp-component-div">
            <section className="row full-width hero-container">
                <div aria-hidden="true" className="post-cover hero-banner-image">
                    <img src={desktop_banner_image} aria-hidden="true" alt={desktop_banner_alt} />
                </div>
                <div aria-hidden="true" className="post-cover hero-banner-image mobile">
                    <img src={mobile_banner_image} aria-hidden="true" alt={mobile_banner_alt} />
                </div>
                <div className="container-fluid hero-content">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="left-column">
                                <h1 className="hero-head">{text}</h1>
                                <img src={image} alt={alt} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeHero
