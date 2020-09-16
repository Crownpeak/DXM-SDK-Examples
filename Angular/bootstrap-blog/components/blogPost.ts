import {Component, Input} from '@angular/core';
import { CmsComponent, CmsField, CmsFieldTypes } from 'crownpeak-dxm-angular-sdk';

@Component({
    selector: '[component=BlogPost]',
    template: `
        <div class="blog-post">
            <h2 class="blog-post-title">{{ post_title }}</h2>
            <p class="blog-post-meta">Date: <!--{{ post_date | date:'longdate' }}--></p>
            <p [innerHTML]="post_content"></p>
            <!-- {{ /*post_category*/ }} -->
        </div>
    `
})
export class BlogPost extends CmsComponent {
    @Input() data:any;
    post_title: CmsField = new CmsField("Post_Title", CmsFieldTypes.TEXT, null);
    post_date: CmsField = new CmsField("Post_Date", CmsFieldTypes.DATE, null);
    post_content: CmsField = new CmsField("Post_Content", CmsFieldTypes.WYSIWYG, null);
    post_category: CmsField = new CmsField("Post_Category", CmsFieldTypes.DOCUMENT, null);
}
