import { Component } from '@angular/core';
import { CmsStaticPage } from 'crownpeak-dxm-angular-sdk';

@Component({
    selector: '[component=HomePage]',
    template: `
            <div class="jumbotron" component="HeroContainer"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4" component="SecondaryContainer"></div>
                    <div class="col-md-4" component="SecondaryContainer"></div>
                    <div class="col-md-4" component="SecondaryContainer"></div>
                </div>
                <hr>
                <div class="row" component="SecondaryList"></div>
                <div class="row" component="DropZone" name="secondary"></div>
                <hr>
            </div>
    `
})
export class HomePage extends CmsStaticPage {
    constructor()
    {
        super(null);
        this.cmsAssetId = 270379;
    }

    ngOnInit()
    {
        super.ngOnInit();
    }
}
