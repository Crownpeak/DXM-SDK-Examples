import {Component, Input} from '@angular/core';

import { CmsComponent, CmsField, CmsFieldTypes } from 'crownpeak-dxm-angular-sdk';

@Component({
    selector: '[component=SecondaryPost]',
    template: `
        <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
                <strong class="d-inline-block mb-2 text-primary">World</strong>
                <h3 class="mb-0">
                    <a class="text-dark" href="#">{{ post_title }}</a>
                </h3>
                <div class="mb-1 text-muted"><!--{{ post_date | date:'longdate' }}--></div>
                <p class="card-text mb-auto" [innerHTML]="post_content"></p>
                <a href="#">Continue reading</a>
            </div>
            <img class="card-img-right flex-auto d-none d-md-block"
                 data-src="holder.js/200x250?theme=thumb" alt="Card image cap" />
        </div>
    `
})
export class SecondaryPost extends CmsComponent {
    @Input() data:any;
    post_title: CmsField = new CmsField("Post_Title", CmsFieldTypes.TEXT, null);
    post_date: CmsField = new CmsField("Post_Date", CmsFieldTypes.DATE, null);
    post_content: CmsField = new CmsField("Post_Content", CmsFieldTypes.WYSIWYG, null);
}
