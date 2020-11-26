import {CmsCore} from 'crownpeak-dxm-angular-sdk';
import {environment} from '../.environment';
import {Routing} from "./routing";
import {CoreModule} from "./core.module";

CmsCore.init(environment.CMS_STATIC_CONTENT_LOCATION, environment.CMS_DYNAMIC_CONTENT_LOCATION);
Routing.Load(environment.CMS_STATIC_CONTENT_LOCATION + '/routes.json', CoreModule);
