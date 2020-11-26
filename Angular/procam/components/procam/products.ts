import {Component, Input} from '@angular/core';
import {CmsComponent, CmsField, CmsFieldTypes} from 'crownpeak-dxm-angular-sdk';

@Component({
    selector: '[component=Products]',
    template: `
        <section class="full-width listing bg-grey angle--top-right">
            <div class="container-fluid">
                <h2 class="sectionHead">{{title}}</h2>
                <div class="row text-center">
                    <!-- cp-scaffold
                        <cp-list name="Products">
                            <div class="list-item col-sm-6 col-lg-3">
                                {ProductItem:ProductItem}
                            </div>
                        </cp-list>
                        else -->
                    <div component="ProductItem" class="list-item col-sm-6 col-lg-3" *ngFor="let sc of products.value"
                         [data]="sc.ProductItem"></div>
                    <!-- /cp-scaffold -->
                </div>
            </div>
        </section>
    `
})
export class Products extends CmsComponent {
    @Input() data: any;
    title: CmsField = new CmsField("Title", CmsFieldTypes.TEXT, null);
    products: CmsField = new CmsField("Products", "ProductItem", null);
}
