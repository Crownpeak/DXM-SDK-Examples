import {Component, Input} from '@angular/core';
import {CmsComponent, CmsStaticDataProvider, CmsDynamicDataProvider} from 'crownpeak-dxm-angular-sdk';

// @ts-ignore
@Component({
    selector: '[component=HeaderNavigation]',
    template: `
        <div class="navbar-collapse collapse" id="navigationContent">
            <ul class="navbar-nav" role="menubar">
                <!-- cp-scaffold
                    {headerNavigationPreview:HeaderNavigationPreview}
                else -->
                <li class="nav-item" *ngFor="let item of nav_items">
                    <a class="nav-link" [href]="item.Link.Url" role="menuitem">{{item.Link.Title}}</a>
                </li>
                <!-- /cp-scaffold -->
            </ul>
        </div>
    `
})
export class HeaderNavigation extends CmsComponent {
    // @ts-ignore
    @Input() dataProvider: any;
    nav_items: [];

    ngOnInit() {
        if(this.dataProvider instanceof CmsStaticDataProvider) {
            this.nav_items = new CmsStaticDataProvider().getCustomDataSync("284201.json").HeaderNavigationAdmin.NavItems; }
        else if (this.dataProvider instanceof CmsDynamicDataProvider) {
            this.nav_items = new CmsDynamicDataProvider().getDynamicQuerySync("q=284201&fl=custom_t_json:[json]").response.docs[0].custom_t_json.HeaderNavigationAdmin.NavItems;
        }
    }
}
