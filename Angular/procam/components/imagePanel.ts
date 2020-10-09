import {Component, Input} from '@angular/core';
import {CmsComponent, CmsDataCache, CmsField, CmsFieldTypes} from 'crownpeak-dxm-angular-sdk';

@Component({
    selector: '[component=ImagePanel]',
    template: `
        <section
                class="full-width listing bg-image bg-bar-bottom  bg-bar-white angle--top-left">
            <div class="container-fluid">
                <div class="sectionHead row align-items-center">
                    <div class="col">
                        <h2>{{title}}</h2>
                    </div>
                    <div class="col-auto">
                        <img src="{{right_image}}"
                             alt="{{right_image_alt}}"/>
                    </div>
                </div>
                <div class="row">
                    <!-- cp-scaffold
                        <cp-list name="Images">
                            <div class="list-item col-sm-4">
                                {ImagePanelItem:ImagePanelItem}
                            </div>
                        </cp-list>
                        else -->
                    <div class="list-item col-sm-4" component="ImagePanelItem" *ngFor="let sc of images.value"
                         [data]="sc.ImagePanelItem"></div>
                    <!-- /cp-scaffold -->
                </div>
            </div>
        </section>
    `
})
export class ImagePanel extends CmsComponent {
    @Input() data: any;
    title: CmsField = new CmsField("Title", CmsFieldTypes.TEXT, null);
    right_image: CmsField = new CmsField("Right_Image", CmsFieldTypes.IMAGE, null);
    right_image_alt: CmsField = new CmsField("Right_Image_Alt", CmsFieldTypes.TEXT, null);
    images: CmsField = new CmsField("Images", "ImagePanelItem", null);
}
