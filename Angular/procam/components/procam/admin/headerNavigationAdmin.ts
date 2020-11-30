import {Component, Input} from '@angular/core';
import {CmsComponent, CmsField, CmsDataCache} from 'crownpeak-dxm-angular-sdk';

// @ts-ignore
@Component({
    selector: '[component=HeaderNavigationAdmin]',
    template: `
        <div class="navbar-collapse collapse" id="navigationContent">
            <ul class="navbar-nav" role="menubar">
                <!-- <List name="NavItems" type="Link"> -->
                <li class="nav-item" *ngFor="let item of nav_items">
                    <a class="nav-link" [href]="item.Link.url" role="menuitem">{{item.Link.title}}</a>
                </li>
                <!-- </List> -->
            </ul>
        </div>
    `
})
export class HeaderNavigationAdmin extends CmsComponent {
    nav_items: CmsField = new CmsField("Nav_Items", "", CmsDataCache.get(CmsDataCache.cmsAssetId).Nav_Items.Links || []);
}
