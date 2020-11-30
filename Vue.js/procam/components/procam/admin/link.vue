<template>
  <li class="nav-item">
    <a class="nav-link" :href="url" role="menuitem">{title}</a>
  </li>
</template>
<script>
import {CmsComponent, CmsField, CmsFieldTypes} from 'crownpeak-dxm-vuejs-sdk';

export default {
  extends: CmsComponent,
  name: "Link",
  data() {
    return {
      title: new CmsField("Title", CmsFieldTypes.TEXT),
      url: new CmsField("Url", CmsFieldTypes.HREF)
    }
  }
};
</script>
