<template>
    <HeaderNavigationAdmin v-if="isLoaded" />
</template>
<script>
import {CmsDynamicPage} from 'crownpeak-dxm-vuejs-sdk';
import HeaderNavigationAdmin from "../components/procam/admin/headerNavigationAdmin";

export default {
  extends: CmsDynamicPage,
  name: "Admin",
  components: {
    HeaderNavigationAdmin
  },
  cmsWrapper: "ProCam",
  cmsUseTmf: false,
  cmsSuppressModel: true,
  cmsSuppressFolder: true
};
</script>
