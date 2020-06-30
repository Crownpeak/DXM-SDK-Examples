import {Component, Input} from '@angular/core';
import { CmsComponent, CmsField, CmsFieldTypes } from 'crownpeak-dxm-angular-sdk';

@Component({
    selector: '[component=HeroContainer]',
    template: `
        <div class="container">
            <h1 class="display-3">{{ heading }}</h1>
            <div [innerHTML]="description"></div>
            <p><a class="btn btn-primary btn-lg" href="#" role="button">{{ button_text }}</a></p>
        </div>
    `
})
export class HeroContainer extends CmsComponent {
    @Input() data:any;
    heading: CmsField = new CmsField("Heading", CmsFieldTypes.TEXT, null);
    description: CmsField = new CmsField("Description", CmsFieldTypes.WYSIWYG, null);
    button_text: CmsField = new CmsField("Button_Text", CmsFieldTypes.TEXT, null);
}
