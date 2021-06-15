import React from 'react'
import {CmsComponent, CmsField, CmsFieldTypes} from 'crownpeak-dxm-react-sdk';
import ReactHtmlParser from "react-html-parser";

export default class Events extends CmsComponent {
    constructor(props) {
        super(props);
        this.cmsFolder = "Procam";
        this.cmsZones = ["droppable"];
        this.cmsDisableDragDrop = false;

        this.title = new CmsField("Title", CmsFieldTypes.TEXT, props && props.data ? props.data.Title : null);
        this.sub_title = new CmsField("Sub_Title", CmsFieldTypes.TEXT, props && props.data ? props.data.Sub_Title : null);
        this.description = new CmsField("Description", CmsFieldTypes.WYSIWYG, props && props.data ? props.data.Description : null);
        this.cta_1_link = new CmsField("CTA_1_Link", CmsFieldTypes.HREF, props && props.data ? props.data.Cta_1_Link : null);
        this.cta_1_text = new CmsField("CTA_1_Text", CmsFieldTypes.TEXT, props && props.data ? props.data.CTA_1_Text : null);
        this.cta_2_link = new CmsField("CTA_2_Link", CmsFieldTypes.HREF, props && props.data ? props.data.Cta_2_Link : null);
        this.cta_2_text = new CmsField("CTA_2_Text", CmsFieldTypes.TEXT, props && props.data ? props.data.CTA_2_Text : null);
        this.image = new CmsField("Image", CmsFieldTypes.IMAGE, props && props.data ? props.data.Image : null);
        this.alt = new CmsField("Alt", CmsFieldTypes.TEXT, props && props.data ? props.data.Alt : null);
    }

    render() {
        return (
            <div className="cp-component-div">
                <section className="full-width two-column bg-white">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="column col">
                                <article className="content">
                                    <h2 className="text-blue">{this.title}</h2>
                                    <h3>{this.sub_title}</h3>
                                    { ReactHtmlParser(this.description) }
                                    <div className="button-group">
                                        <a className="btn btn-light-blue" href={this.cta_1_link}>{this.cta_1_text}</a>
                                        <a className="btn btn-dark-blue" href={this.cta_2_link}>{this.cta_2_text}</a>
                                    </div>
                                </article>
                            </div>
                            <div className="column col-lg-auto">
                                <figure>
                                    <img src={this.image} alt={this.alt} />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
