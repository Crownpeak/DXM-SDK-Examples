import Routing from "./routing";
import { CmsCore } from 'crownpeak-dxm-vuejs-sdk';

CmsCore.init(process.env.VUE_APP_CMS_STATIC_CONTENT_LOCATION, process.env.VUE_APP_CMS_DYNAMIC_CONTENT_LOCATION);
Routing.processRoutes(process.env.VUE_APP_CMS_STATIC_CONTENT_LOCATION + '/routes.json');
