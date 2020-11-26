import {Component, Input} from '@angular/core';
import {CmsComponent, CmsField, CmsFieldTypes} from 'crownpeak-dxm-angular-sdk';

@Component({
    selector: '[component=PanelItem]',
    template: `
        <article class="content">
            <p><img src="{{image}}" alt="{{alt}}"/></p>
            <h2>{{title}}</h2>
            <h3>{{sub_title}}</h3>
            <div [innerHTML]="description"></div>
            <div class="button-group">
                <a class="btn btn-white" href="{{cta_link}}">{{cta_text}}</a>
            </div>
        </article>
    `
})
export class PanelItem extends CmsComponent {
    @Input() data:any;
    image: CmsField = new CmsField("Image", CmsFieldTypes.IMAGE, null);
    alt: CmsField = new CmsField("Alt", CmsFieldTypes.TEXT, null);
    title: CmsField = new CmsField("Title", CmsFieldTypes.TEXT, null);
    sub_title: CmsField = new CmsField("Sub_Title", CmsFieldTypes.TEXT, null);
    description: CmsField = new CmsField("Description", CmsFieldTypes.WYSIWYG, null);
    cta_link: CmsField = new CmsField("CTA_Link", CmsFieldTypes.HREF, null);
    cta_text: CmsField = new CmsField("CTA_Text", CmsFieldTypes.TEXT, null);
}
