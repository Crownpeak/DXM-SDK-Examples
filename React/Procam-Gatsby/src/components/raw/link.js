import * as React from "react"
import { CmsDataCache, CmsField, CmsFieldTypes } from 'crownpeak-dxm-react-sdk'

const Link = (props) => {
    CmsDataCache.setComponent("Link");
    const cmsDisableDragDrop = true;

    let title = new CmsField("Title", CmsFieldTypes.TEXT);
    let url = new CmsField("Url", CmsFieldTypes.HREF);

    return (
        <li class="nav-item">
            <a class="nav-link" href={url} role="menuitem">{title}</a>
        </li>
    )
}

export default Link
