import {Component, Input} from '@angular/core';
import {CmsComponent, CmsField, CmsFieldTypes} from 'crownpeak-dxm-angular-sdk';

@Component({
    selector: '[component=Events]',
    template: `
        <section class="full-width two-column bg-white">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="column col">
                        <article class="content">
                            <h2 class="text-blue">{{title}}</h2>
                            <h3>{{sub_title}}</h3>
                            <div [innerHTML]="description"></div>
                            <div class="button-group">
                                <a class="btn btn-light-blue" href="{{cta_1_link}}">{{cta_1_text}}</a>
                                <a class="btn btn-dark-blue" href="{{cta_2_link}}">{{cta_2_text}}</a>
                            </div>
                        </article>
                    </div>
                    <div class="column col-lg-auto">
                        <figure>
                            <img src="{{image}}" alt="{{alt}}"/>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    `
})
export class Events extends CmsComponent {
    @Input() data: any;
    title: CmsField = new CmsField("Title", CmsFieldTypes.TEXT, null);
    sub_title: CmsField = new CmsField("Sub_Title", CmsFieldTypes.TEXT, null);
    description: CmsField = new CmsField("Description", CmsFieldTypes.WYSIWYG, null);
    cta_1_link: CmsField = new CmsField("CTA_1_Link", CmsFieldTypes.HREF, null);
    cta_1_text: CmsField = new CmsField("CTA_1_Text", CmsFieldTypes.TEXT, null);
    cta_2_link: CmsField = new CmsField("CTA_2_Link", CmsFieldTypes.HREF, null);
    cta_2_text: CmsField = new CmsField("CTA_2_Text", CmsFieldTypes.TEXT, null);
    image: CmsField = new CmsField("Image", CmsFieldTypes.IMAGE, null);
    alt: CmsField = new CmsField("Alt", CmsFieldTypes.TEXT, null);
}
