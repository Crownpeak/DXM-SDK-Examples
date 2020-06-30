import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CmsCore } from 'crownpeak-dxm-angular-sdk';
import { CoreModule } from './core/core.module';

//TODO: Source constants from .env
CmsCore.init("/content/json", "//searchg2.crownpeak.net/demoexperience-salesengineering-stage-rti/select/?wt=json");

platformBrowserDynamic().bootstrapModule(CoreModule)
    .catch(err => console.error(err));
