import {Component, Input} from '@angular/core';
import {CmsComponent, CmsField, CmsFieldTypes} from 'crownpeak-dxm-angular-sdk';

@Component({
    selector: '[component=ProductItem]',
    template: `
        <a href="{{link}}">
            <img src="{{image}}" alt="{{alt}}" style="max-width:252px;"/>
        </a>x
        <h4>{{title}}</h4>
        <div class="button-group">
            <a class="btn btn-small btn-light-blue" href="{{link}}">{{cta_text}}</a>
        </div>
    `
})
export class ProductItem extends CmsComponent {
    @Input() data: any;
    title: CmsField = new CmsField("Title", CmsFieldTypes.TEXT, null);
    link: CmsField = new CmsField("Link", CmsFieldTypes.HREF, null);
    image: CmsField = new CmsField("Image", CmsFieldTypes.IMAGE, null);
    alt: CmsField = new CmsField("Alt", CmsFieldTypes.TEXT, null);
    cta_text: CmsField = new CmsField("CTA_Text", CmsFieldTypes.TEXT, null);
}
