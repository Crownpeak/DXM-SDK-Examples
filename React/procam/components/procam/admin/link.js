import React from 'react'
import {CmsComponent, CmsField, CmsFieldTypes} from 'crownpeak-dxm-react-sdk';

export default class Link extends CmsComponent {
    constructor(props) {
        super(props);
        this.cmsFolder = "Admin";yarn
        this.cmsDisableDragDrop = true;

        this.title = new CmsField("Title", CmsFieldTypes.TEXT);
        this.url = new CmsField("Url", CmsFieldTypes.HREF);
    }

    render() {
        return (
            <li class="nav-item">
                <a class="nav-link" href={this.url} role="menuitem">{this.title}</a>
            </li>
        )
    }
}
