import {Component, Input} from '@angular/core';
import {CmsComponent, CmsStaticDataProvider} from 'crownpeak-dxm-angular-sdk';

// @ts-ignore
@Component({
    selector: '[component=TopicList]',
    template: `
        <nav class="nav d-flex justify-content-between">
            <!-- cp-scaffold
                    Topics
            else -->
                <a *ngFor="let topic of topics" class="p-2 text-muted" href="#">{{ topic }}</a>
            <!-- /cp-scaffold -->
        </nav>
    `
})
export class TopicList extends CmsComponent {
    // @ts-ignore
    @Input() data: any;
    topics: {} = new CmsStaticDataProvider().getCustomDataSync("topics.json");
}
