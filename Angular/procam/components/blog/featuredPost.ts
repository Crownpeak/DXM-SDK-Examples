import {Component, Input} from '@angular/core';
import {CmsComponent, CmsField, CmsFieldTypes} from 'crownpeak-dxm-angular-sdk';

// @ts-ignore
@Component({
    selector: '[component=FeaturedPost]',
    template: `
        <div class="col-md-6 px-0">
            <h1 class="display-4 font-italic">{{ post_title }}</h1>
            <p class="lead my-3" [innerHTML]="post_leader"></p>
            <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue
                reading...</a></p>
        </div>
    `
})
export class FeaturedPost extends CmsComponent {
    // @ts-ignore
    @Input() data:any;
    post_title: CmsField = new CmsField("Post_Title", CmsFieldTypes.TEXT, null);
    post_leader: CmsField = new CmsField("Post_Leader", CmsFieldTypes.WYSIWYG, null);
}
