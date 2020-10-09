import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CmsCore } from 'crownpeak-dxm-angular-sdk';
import { CoreModule } from './core/core.module';
import { environment } from '.environment';

CmsCore.init(environment.CMS_STATIC_CONTENT_LOCATION, environment.CMS_DYNAMIC_CONTENT_LOCATION);
platformBrowserDynamic().bootstrapModule(CoreModule)
    .catch(err => console.error(err));
