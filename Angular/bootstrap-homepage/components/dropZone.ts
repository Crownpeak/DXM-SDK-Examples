import {CmsDropZoneComponent} from 'crownpeak-dxm-angular-sdk';
import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {DropZoneDirective} from "./dropZoneDirective";
import {HeroContainer} from "./heroContainer";
import {SecondaryContainer} from "./secondaryContainer";

@Component({
    selector: '[component=DropZone]',
    template: `<ng-template Component></ng-template>`,
    inputs: ["name", "data"]
})
export class DropZone extends CmsDropZoneComponent {
    @ViewChild(DropZoneDirective, {static: true}) dropZoneDirective: DropZoneDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
        super(null);

        this.components = {
            "HeroContainer": HeroContainer,
            "SecondaryContainer": SecondaryContainer
        };
    }

    ngOnInit() {
        super.ngOnInit();
        this.createComponents(this.dropZoneDirective.viewContainerRef);
    }
}
