import React from 'react';
import { CmsCore } from 'crownpeak-dxm-react-sdk';
import { CMS_STATIC_CONTENT_LOCATION, CMS_DYNAMIC_CONTENT_LOCATION } from 'react-native-dotenv';
import Routing from "./routing";
import HomePage from "../pages/homePage";

CmsCore.init(CMS_STATIC_CONTENT_LOCATION, CMS_DYNAMIC_CONTENT_LOCATION);

Routing.routes = [
    {
        path: "/",
        exact: true,
        component: HomePage,
        cmsassetid: 272742
    }
];

Routing.processRoutes();
