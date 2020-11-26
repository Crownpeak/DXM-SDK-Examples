import {Component, Input} from '@angular/core';
import {CmsComponent, CmsField, CmsFieldTypes} from 'crownpeak-dxm-angular-sdk';

@Component({
    selector: '[component=ImagePanelItem]',
    template: `
        <figure>
            <img src={{image}}
                 alt={{alt}}/>
        </figure>
    `
})
export class ImagePanelItem extends CmsComponent {
    @Input() data: any;
    image: CmsField = new CmsField("Image", CmsFieldTypes.IMAGE, null);
    alt: CmsField = new CmsField("Alt", CmsFieldTypes.TEXT, null);
}
