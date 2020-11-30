import {Component, Input} from '@angular/core';
import {CmsComponent, CmsField, CmsFieldTypes} from 'crownpeak-dxm-angular-sdk';

// @ts-ignore
@Component({
    selector: '[component=Link]',
    template: `
        <li class="nav-item">
            <a class="nav-link" [href]="url" role="menuitem">{{title}}</a>
        </li>
    `
})
export class Link extends CmsComponent {
    title: CmsField = new CmsField("Title", CmsFieldTypes.TEXT, null);
    url: CmsField = new CmsField("Url", CmsFieldTypes.HREF, null);
}
