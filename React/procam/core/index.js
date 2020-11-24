import React from 'react';
import { CmsCore } from 'crownpeak-dxm-react-sdk';
import { CMS_STATIC_CONTENT_LOCATION, CMS_DYNAMIC_CONTENT_LOCATION } from 'react-native-dotenv';
import Routing from "./routing";

CmsCore.init(CMS_STATIC_CONTENT_LOCATION, CMS_DYNAMIC_CONTENT_LOCATION);
Routing.processRoutes(CMS_STATIC_CONTENT_LOCATION + '/routes.json');
