import React from 'react'
import {CmsComponent, CmsField, CmsFieldTypes} from 'crownpeak-dxm-react-sdk';

export default class HomeHero extends CmsComponent {
    constructor(props) {
        super(props);
        this.cmsFolder = "Procam";
        this.cmsZones = ["droppable"];
        this.cmsDisableDragDrop = false;

        this.desktop_banner_image = new CmsField("Desktop_Banner_Image", CmsFieldTypes.IMAGE, props && props.data ? props.data.Desktop_Banner_Image : null);
        this.desktop_banner_alt = new CmsField("Desktop_Banner_Alt", CmsFieldTypes.TEXT, props && props.data ? props.data.Desktop_Banner_Alt : null);
        this.mobile_banner_image = new CmsField("Mobile_Banner_Image", CmsFieldTypes.IMAGE, props && props.data ? props.data.Mobile_Banner_Image : null);
        this.mobile_banner_alt = new CmsField("Mobile_Banner_Alt", CmsFieldTypes.TEXT, props && props.data ? props.data.Mobile_Banner_Alt : null);
        this.text = new CmsField("Text", CmsFieldTypes.TEXT, props && props.data ? props.data.Text : null);
        this.image = new CmsField("Image", CmsFieldTypes.IMAGE, props && props.data ? props.data.Image : null);
        this.alt = new CmsField("Alt", CmsFieldTypes.TEXT, props && props.data ? props.data.Alt : null);
    }

    render() {
        return (
            <div className="cp-component-div">
                <section className="row full-width hero-container">
                    <div aria-hidden="true" className="post-cover hero-banner-image">
                        <img src={this.desktop_banner_image} aria-hidden="true" alt={this.desktop_banner_alt}/>
                    </div>
                    <div aria-hidden="true" className="post-cover hero-banner-image mobile">
                        <img src={this.mobile_banner_image} aria-hidden="true" alt={this.mobile_banner_alt}/>
                    </div>
                    <div className="container-fluid hero-content">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="left-column">
                                    <h1 className="hero-head">{this.text}</h1>
                                    <img src={this.image} alt={this.alt} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
