import { Component } from '@angular/core';
import { CmsStaticPage } from 'crownpeak-dxm-angular-sdk';

@Component({
    selector: '[component=SecondaryPage]',
    template: `<div component="SecondaryContainer"></div>`
})
export class SecondaryPage extends CmsStaticPage {
    constructor() {
        super(null);
        this.cmsAssetId = 266812;
    }
}
