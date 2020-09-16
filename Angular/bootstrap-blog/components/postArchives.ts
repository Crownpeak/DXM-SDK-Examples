import {Component, Input} from '@angular/core';
import {CmsComponent, CmsDynamicDataProvider} from 'crownpeak-dxm-angular-sdk';

@Component({
    selector: '[component=PostArchives]',
    template: `
        <div className="p-3">
            <h4 className="font-italic">Archives</h4>
            <ol className="list-unstyled mb-0">
                <li *ngFor="let month of months" class="p-2 text-muted" href="#">{{ month | date:'MMM yyyy' }}</li>
            </ol>
        </div>
    `
})
export class PostArchives extends CmsComponent {
    months: {} = new CmsDynamicDataProvider().getDynamicQuery("q=*:*&fq=custom_s_type:\"Blog%20Page\"&rows=0&facet=true&facet.mincount=1&facet.range=custom_dt_created&f.custom_dt_created.facet.range.start=NOW/YEAR-1YEAR&f.custom_dt_created.facet.range.end=NOW/YEAR%2B1YEAR&f.custom_dt_created.facet.range.gap=%2B1MONTH")
        .facet_counts.facet_ranges.custom_dt_created.counts.filter((_c, i) => i % 2 === 0);
}
