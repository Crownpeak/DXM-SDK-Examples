import {Component} from '@angular/core';
import {CmsDynamicPage, CmsStaticPage} from 'crownpeak-dxm-angular-sdk';

@Component({
    selector: '[component=ProCam]',
    template: `
        <div>
            <header component="Header"></header>
            <main id="main-content" class="main-content" role="main" aria-label="main content">
                <div class="cp-main-container">
                    <div component="HomeHero" class="cp-component-div"></div>
                    <div component="ImagePanel" class="cp-component-div"></div>
                    <div component="Events" class="cp-component-div"></div>
                    <div component="Products" class="cp-component-div"></div>
                    <div component="TwoBluePanels"></div>
                </div>
            </main>
            <footer component="Footer" class="full-width bg-dark-blue"></footer>
        </div>
    `
})
export class HomePage extends CmsDynamicPage {
    constructor() {
        super(null);
        this.cmsAssetId = 281721;
    }

    ngOnInit() {
        super.ngOnInit();
    }
}
