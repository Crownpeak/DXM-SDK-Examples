import {Component} from '@angular/core';
import {CmsDynamicPage} from 'crownpeak-dxm-angular-sdk';
import {ActivatedRoute} from "@angular/router";

// @ts-ignore
@Component({
    template: `
        <div component="HeaderNavigationAdmin" *ngIf="isLoaded"></div>
    `
})
export class Admin extends CmsDynamicPage {
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
