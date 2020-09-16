import {Component, Input} from '@angular/core';
import {CmsComponent, CmsStaticDataProvider} from 'crownpeak-dxm-angular-sdk';

@Component({
    selector: '[component=TopicList]',
    template: `
        <nav class="nav d-flex justify-content-between">
            <a *ngFor="let topic of topics" class="p-2 text-muted" href="#">{{ topic }}</a>
        </nav>
    `
})
export class TopicList extends CmsComponent {
    @Input() data: any;
    topics: {} = new CmsStaticDataProvider().getCustomData("topics.json");
}
