import * as React from "react"
import { CmsDataCache, CmsField, CmsFieldTypes } from 'crownpeak-dxm-react-sdk'

const ProductItem = (props) => {
    CmsDataCache.setComponent("ProductItem");
    const cmsDisableDragDrop = true;

    let link = new CmsField("Link", CmsFieldTypes.HREF, props && props.data ? props.data.Link : null);
    let image = new CmsField("Image", CmsFieldTypes.IMAGE, props && props.data ? props.data.Image : null);
    let alt = new CmsField("Alt", CmsFieldTypes.TEXT, props && props.data ? props.data.Alt : null);
    let title = new CmsField("Title", CmsFieldTypes.TEXT, props && props.data ? props.data.Title : null);
    let cta_text = new CmsField("CTA_Text", CmsFieldTypes.TEXT, props && props.data ? props.data.CTA_Text : null);

    return (
        <div className="list-item col-sm-6 col-lg-3">
            <a href={link}>
                <img src={image} alt={alt} style={{ maxWidth: '252px' }} />
            </a>
            <h4>{title}</h4>
            <div className="button-group">
                <a className="btn btn-small btn-light-blue" href={link}>{cta_text}</a>
            </div>
        </div>
    )
}

export default ProductItem
