import {Component, Input} from '@angular/core';
import {CmsComponent} from 'crownpeak-dxm-angular-sdk';

// @ts-ignore
@Component({
    selector: '[component=MonthHeader]',
    template: `
        <a class="blog-header-logo text-dark" href="#">
            <!-- cp-scaffold
                Current Month
            else -->
            {{month}}
            <!-- /cp-scaffold -->
        </a>
    `
})
export class MonthHeader extends CmsComponent {
    // @ts-ignore
    @Input() month: any;
}
