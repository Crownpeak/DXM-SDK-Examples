import { Directive, ViewContainerRef } from '@angular/core';

// @ts-ignore
@Directive({
    selector: '[Component]',
})
export class DropZoneDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
