import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[Component]',
})
export class DropZoneDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
