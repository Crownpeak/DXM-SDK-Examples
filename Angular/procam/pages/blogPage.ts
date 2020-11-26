import {Component} from '@angular/core';
import {CmsDynamicPage,CmsStaticPage} from 'crownpeak-dxm-angular-sdk';
import {ActivatedRoute} from "@angular/router";

// @ts-ignore
@Component({
    template: `
        <div *ngIf="isLoaded">
            <div class="container">
                <header>
                    <div class="row flex-nowrap justify-content-between align-items-center">
                        <div class="col-4 pt-1">
                            <a class="text-muted" href="/#/">ProCam</a>
                        </div>
                        <div class="col-4 text-center" component="MonthHeader"></div>
                        <div class="col-4 d-flex justify-content-end align-items-center">
                            <a class="text-muted" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" class="mx-3">
                                    <circle cx="10.5" cy="10.5" r="7.5"></circle>
                                    <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
                                </svg>
                            </a>
                            <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                        </div>
                    </div>
                </header>
                <div class="nav-scroller py-1 mb-2" component="TopicList"></div>
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
            <footer class="blog-footer">
                <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a
                        href="https://twitter.com/mdo">@mdo</a>.</p>
                <p>
                    <a href="#">Back to top</a>
                </p>
            </footer>
        </div>
    `
})
export class BlogPage extends CmsDynamicPage {
    constructor(private route: ActivatedRoute) {
        super(null);
        this.cmsWrapper = "ProCam";
        this.cmsUseTmf = false;
        this.cmsSuppressModel = true;
        this.cmsSuppressFolder = true;
    }

    ngOnInit() {
        this.cmsAssetId = this.route.snapshot.data.cmsassetid;
        super.ngOnInit();
    }
}
