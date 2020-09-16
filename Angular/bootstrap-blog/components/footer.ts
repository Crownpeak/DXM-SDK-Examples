import {Component, Input} from '@angular/core';
import {CmsComponent} from 'crownpeak-dxm-angular-sdk';

@Component({
    selector: '[component=Footer]',
    template: `
        <footer class="blog-footer">
            <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a
                    href="https://twitter.com/mdo">@mdo</a>.</p>
            <p>
                <a href="#">Back to top</a>
            </p>
        </footer>
    `
})
export class Footer extends CmsComponent {}
