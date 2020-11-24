import React from 'react'
import {CmsComponent, CmsField, CmsFieldTypes} from 'crownpeak-dxm-react-sdk';

export default class ProductItem extends CmsComponent {
    constructor(props) {
        super(props);
        this.link = new CmsField("Link", CmsFieldTypes.HREF, props && props.data ? props.data.Link : null);
        this.image = new CmsField("Image", CmsFieldTypes.IMAGE, props && props.data ? props.data.Image : null);
        this.alt = new CmsField("Alt", CmsFieldTypes.TEXT, props && props.data ? props.data.Alt : null);
        this.title = new CmsField("Title", CmsFieldTypes.TEXT, props && props.data ? props.data.Title : null);
        this.cta_text = new CmsField("CTA_Text", CmsFieldTypes.TEXT, props && props.data ? props.data.CTA_Text : null);
    }

    render() {
        return (
            <div className="list-item col-sm-6 col-lg-3">
                <a href={this.link}>
                    <img src={this.image} alt={this.alt} style={{maxWidth:'252px'}}/>
                </a>
                <h4>{this.title}</h4>
                <div className="button-group">
                    <a className="btn btn-small btn-light-blue" href={this.link}>{this.cta_text}</a>
                </div>
            </div>
        )
    }
}
