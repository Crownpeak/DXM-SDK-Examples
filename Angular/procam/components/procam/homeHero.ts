import {Component, Input} from '@angular/core';
import {CmsComponent, CmsField, CmsFieldTypes} from 'crownpeak-dxm-angular-sdk';

@Component({
    selector: '[component=HomeHero]',
    template: `
        <section class="row full-width hero-container">
            <div aria-hidden="true" class="post-cover hero-banner-image">
                <img src="{{desktop_banner_image}}" aria-hidden="true" alt="{{desktop_banner_alt}}"/>
            </div>
            <div aria-hidden="true" class="post-cover hero-banner-image mobile">
                <img src="{{mobile_banner_image}}" aria-hidden="true" alt="{{mobile_banner_alt}}"/>
            </div>
            <div class="container-fluid hero-content">
                <div class="row">
                    <div class="col-md-8">
                        <div class="left-column">
                            <h1 class="hero-head">{{text}}</h1>
                            <img src="{{image}}" alt="{{alt}}"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
})
export class HomeHero extends CmsComponent {
    @Input() data: any;
    desktop_banner_image: CmsField = new CmsField("Desktop_Banner_Image", CmsFieldTypes.IMAGE, null);
    desktop_banner_alt: CmsField = new CmsField("Desktop_Banner_Alt", CmsFieldTypes.TEXT, null);
    mobile_banner_image: CmsField = new CmsField("Mobile_Banner_Image", CmsFieldTypes.IMAGE, null);
    mobile_banner_alt: CmsField = new CmsField("Mobile_Banner_Alt", CmsFieldTypes.TEXT, null);
    text: CmsField = new CmsField("Text", CmsFieldTypes.TEXT, null);
    image: CmsField = new CmsField("Image", CmsFieldTypes.IMAGE, null);
    alt: CmsField = new CmsField("Alt", CmsFieldTypes.TEXT, null);
}
