import { Component, Input } from '@angular/core';
import { CmsComponent, CmsField, CmsFieldTypes } from 'crownpeak-dxm-angular-sdk';

@Component({
    selector: '[component=SecondaryContainer]',
    template: `
        <h2>{{heading}}</h2>
        <div [innerHTML]="description"></div>
        <p><a class="btn btn-secondary" href="#" role="button">{{ button_text }}</a></p>
    `
})
export class SecondaryContainer extends CmsComponent {
    @Input() data:any;
    heading: CmsField = new CmsField("Heading", CmsFieldTypes.TEXT, null);
    description: CmsField = new CmsField("Description", CmsFieldTypes.WYSIWYG, null);
    button_text: CmsField = new CmsField("Button_Text", CmsFieldTypes.TEXT, null);
}
