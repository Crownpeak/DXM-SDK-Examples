import { Component } from '@angular/core';
import { CmsComponent, CmsField, CmsDataCache } from 'crownpeak-dxm-angular-sdk';

@Component({
    selector: '[component=SecondaryList]',
    template: `
        <!-- <List name="SecondaryContainers" type="Widget" itemName="_widget"> -->
        <div class="col-md-4" *ngFor="let sc of secondaryContainers.value">
            <div component="SecondaryContainer" [data]="sc.SecondaryContainer"></div>
        </div>
        <!-- </List> -->
    `
})
export class SecondaryList extends CmsComponent {
    secondaryContainers: CmsField; // = new CmsField("SecondaryContainer", "SecondaryContainer", CmsDataCache.get(CmsDataCache.cmsAssetId).SecondaryList);

    ngOnInit(): void {
        this.secondaryContainers = new CmsField("SecondaryContainer", "SecondaryContainer", CmsDataCache.get(CmsDataCache.cmsAssetId).SecondaryList);
    }
}
