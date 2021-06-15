import React from 'react'
import {CmsComponent, CmsField, CmsFieldTypes} from 'crownpeak-dxm-react-sdk';
import ReactHtmlParser from "react-html-parser";

export default class PanelItem extends CmsComponent {
    constructor(props) {
        super(props);
        this.cmsFolder = "Procam";
        this.cmsDisableDragDrop = true;

        this.image = new CmsField("Image", CmsFieldTypes.IMAGE, props && props.data ? props.data.Image : null);
        this.alt = new CmsField("Alt", CmsFieldTypes.TEXT, props && props.data ? props.data.Alt : null);
        this.title = new CmsField("Title", CmsFieldTypes.TEXT, props && props.data ? props.data.Title : null);
        this.sub_title = new CmsField("Sub_Title", CmsFieldTypes.TEXT, props && props.data ? props.data.Sub_Title : null);
        this.description = new CmsField("Description", CmsFieldTypes.WYSIWYG, props && props.data ? props.data.Description : null);
        this.cta_link = new CmsField("CTA_Link", CmsFieldTypes.HREF, props && props.data ? props.data.CTA_Link : null);
        this.cta_text = new CmsField("CTA_Text", CmsFieldTypes.TEXT, props && props.data ? props.data.CTA_Text : null);
    }

    render() {
        return (
            <div className="promo col-md-6">
                <article className="content">
                    <p><img src={this.image} alt={this.alt}/></p>
                    <h2>{this.title}</h2>
                    <h3>{this.sub_title}</h3>
                    { ReactHtmlParser(this.description) }
                    <div className="button-group">
                        <a className="btn btn-white" href={this.cta_link}>{this.cta_text}</a>
                    </div>
                </article>
            </div>
        )
    }
}
