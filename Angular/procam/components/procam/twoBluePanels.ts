import {Component} from '@angular/core';
import {CmsComponent, CmsField} from 'crownpeak-dxm-angular-sdk';

@Component({
    selector: '[component=TwoBluePanels]',
    template: `
        <div class="cp-component-div">
            <section class="full-width page-promos bg-blue">
                <div class="container-fluid">
                    <div class="row">
                        <!-- cp-scaffold
                        <cp-list name="Panels">
                            <div class="promo col-md-6">{PanelItem:PanelItem}</div>
                        </cp-list>
                        else -->
                        <div class="promo col-md-6" component="PanelItem" *ngFor="let sc of panels.value"
                             [data]="sc.PanelItem"></div>
                        <!-- /cp-scaffold -->
                    </div>
                </div>
            </section>
        </div>
    `
})
export class TwoBluePanels extends CmsComponent {
    panels: CmsField = new CmsField("Panels", "PanelItem", null);
}
