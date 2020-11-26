import {CmsDropZoneComponent} from 'crownpeak-dxm-angular-sdk';
import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {DropZoneDirective} from "./dropZoneDirective";
import {HomeHero} from "../procam/homeHero";
import {ImagePanel} from "../procam/imagePanel";
import {Events} from "../procam/events";
import {TwoBluePanels} from "../procam/twoBluePanels";
import {Products} from "../procam/products";

// @ts-ignore
@Component({
    selector: '[component=DropZone]',
    template: `<ng-template Component></ng-template>`,
    inputs: ["name", "data"]
})
export class DropZone extends CmsDropZoneComponent {
    // @ts-ignore
    @ViewChild(DropZoneDirective, {static: true}) dropZoneDirective: DropZoneDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
        super(null);

        this.components = {
            HomeHero, ImagePanel, Events, TwoBluePanels, Products
        };
    }

    ngOnInit() {
        super.ngOnInit();
        this.createComponents(this.dropZoneDirective.viewContainerRef);
    }
}
