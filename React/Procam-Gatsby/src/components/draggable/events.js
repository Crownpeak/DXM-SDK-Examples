import * as React from "react"
import { CmsDataCache, CmsField, CmsFieldTypes } from 'crownpeak-dxm-react-sdk'
import ReactHtmlParser from "react-html-parser";

const Events = (props) => {
    CmsDataCache.setComponent("Events");
    const cmsDisableDragDrop = false;
    let title = new CmsField("Title", CmsFieldTypes.TEXT, props && props.data ? props.data.Title : null);
    let sub_title = new CmsField("Sub_Title", CmsFieldTypes.TEXT, props && props.data ? props.data.Sub_Title : null);
    let description = new CmsField("Description", CmsFieldTypes.WYSIWYG, props && props.data ? props.data.Description : null);
    let cta_1_link = new CmsField("CTA_1_Link", CmsFieldTypes.HREF, props && props.data ? props.data.Cta_1_Link : null);
    let cta_1_text = new CmsField("CTA_1_Text", CmsFieldTypes.TEXT, props && props.data ? props.data.CTA_1_Text : null);
    let cta_2_link = new CmsField("CTA_2_Link", CmsFieldTypes.HREF, props && props.data ? props.data.Cta_2_Link : null);
    let cta_2_text = new CmsField("CTA_2_Text", CmsFieldTypes.TEXT, props && props.data ? props.data.CTA_2_Text : null);
    let image = new CmsField("Image", CmsFieldTypes.IMAGE, props && props.data ? props.data.Image : null);
    let alt = new CmsField("Alt", CmsFieldTypes.TEXT, props && props.data ? props.data.Alt : null);

    return (
        <div className="cp-component-div">
                <section className="full-width two-column bg-white">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="column col">
                                <article className="content">
                                    <h2 className="text-blue">{title}</h2>
                                    <h3>{sub_title}</h3>
                                    { ReactHtmlParser(description) }
                                    <div className="button-group">
                                        <a className="btn btn-light-blue" href={cta_1_link}>{cta_1_text}</a>
                                        <a className="btn btn-dark-blue" href={cta_2_link}>{cta_2_text}</a>
                                    </div>
                                </article>
                            </div>
                            <div className="column col-lg-auto">
                                <figure>
                                    <img src={image} alt={alt} />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    )
}

export default Events
