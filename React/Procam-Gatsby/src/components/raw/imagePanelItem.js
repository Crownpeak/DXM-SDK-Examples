import * as React from "react"
import { CmsDataCache, CmsField, CmsFieldTypes } from 'crownpeak-dxm-react-sdk'

const ImagePanelItem = (props) => {
    CmsDataCache.setComponent("ImagePanelItem");
    const cmsDisableDragDrop = true;

    let image = new CmsField("Image", CmsFieldTypes.IMAGE, props && props.data ? props.data.Image : null);
    let alt = new CmsField("Alt", CmsFieldTypes.TEXT, props && props.data ? props.data.Alt : null);

    return (
        <div className="list-item col-sm-4">
            <figure>
                <img src={image} alt={alt} />
            </figure>
        </div>
    )
}

export default ImagePanelItem
