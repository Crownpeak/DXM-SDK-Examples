import {Component} from '@angular/core';
import {CmsDynamicPage} from 'crownpeak-dxm-angular-sdk';

@Component({
    selector: '[component=BlogPage]',
    template: `
        <div>
            <div class="container">
                <header class="blog-header py-3" component="Header" month="Month Name"></header>
                <div class="nav-scroller py-1 mb-2" component="TopicList" ></div>
                <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                    <div component="FeaturedPost"></div>
                </div>
                <div class="row mb-2">
                    <div class="col-md-6">
                        <div component="SecondaryPost"></div>
                    </div>
                    <div class="col-md-6">
                        <div component="SecondaryPost"></div>
                    </div>
                </div>
            </div>
            <main role="main" class="container">
                <div class="row">
                    <div class="col-md-8 blog-main">
                        <h3 class="pb-3 mb-4 font-italic border-bottom">
                            From the Firehose
                        </h3>
                        <div component="BlogPost"></div>
                    </div>
                    <aside class="col-md-4 blog-sidebar">
                        <div component="PostArchives"></div>
                    </aside>
                </div>
            </main>
            <div component="Footer"></div>
        </div>
    `
})
export class BlogPage extends CmsDynamicPage {
    constructor() {
        super(null);
        this.cmsAssetId = 280793;
    }

    ngOnInit() {
        super.ngOnInit();
    }
}
