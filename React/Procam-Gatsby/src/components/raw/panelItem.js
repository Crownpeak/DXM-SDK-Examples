import * as React from "react"
import { CmsDataCache, CmsField, CmsFieldTypes } from 'crownpeak-dxm-react-sdk'
import ReactHtmlParser from "react-html-parser";

const PanelItem = (props) => {
    CmsDataCache.setComponent("PanelItem");
    const cmsDisableDragDrop = true;

    let image = new CmsField("Image", CmsFieldTypes.IMAGE, props && props.data ? props.data.Image : null);
    let alt = new CmsField("Alt", CmsFieldTypes.TEXT, props && props.data ? props.data.Alt : null);
    let title = new CmsField("Title", CmsFieldTypes.TEXT, props && props.data ? props.data.Title : null);
    let sub_title = new CmsField("Sub_Title", CmsFieldTypes.TEXT, props && props.data ? props.data.Sub_Title : null);
    let description = new CmsField("Description", CmsFieldTypes.WYSIWYG, props && props.data ? props.data.Description : null);
    let cta_link = new CmsField("CTA_Link", CmsFieldTypes.HREF, props && props.data ? props.data.Cta_Link : null);
    let cta_text = new CmsField("CTA_Text", CmsFieldTypes.TEXT, props && props.data ? props.data.CTA_Text : null);

    return (
        <div className="promo col-md-6">
                <article className="content">
                    <p><img src={image} alt={alt}/></p>
                    <h2>{title}</h2>
                    <h3>{sub_title}</h3>
                    { ReactHtmlParser(description) }
                    <div className="button-group">
                        <a className="btn btn-white" href={cta_link}>{cta_text}</a>
                    </div>
                </article>
            </div>
    )
}

export default PanelItem
