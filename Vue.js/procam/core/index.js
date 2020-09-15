import Vue from "vue";
import HomePage from "../pages/homePage.vue";
import { CmsCore } from 'crownpeak-dxm-vuejs-sdk';

CmsCore.init(process.env.VUE_APP_CMS_STATIC_CONTENT_LOCATION, process.env.VUE_APP_CMS_DYNAMIC_CONTENT_LOCATION);

new Vue({
    el: "#app",
    render: h => h(HomePage)
});
