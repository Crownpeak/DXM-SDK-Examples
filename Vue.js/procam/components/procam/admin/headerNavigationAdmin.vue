<template>
  <div class="navbar-collapse collapse" id="navigationContent">
    <ul class="navbar-nav" role="menubar">
      <!-- <List name="NavItems" type="Link"> -->
      <li class="nav-item" v-for="(sc, i) in nav_items.value" :key="i">
        <a class="nav-link" href="{sc.Link.url}" role="menuitem">{sc.Link.title}</a>
      </li>
      <!-- </List> -->
    </ul>
  </div>
</template>
<script>
import {CmsComponent, CmsField} from 'crownpeak-dxm-vuejs-sdk';

export default {
  extends: CmsComponent,
  name: "HeaderNavigationAdmin",
  data() {
    return {
      nav_items: new CmsField("Nav_Items", "", CmsDataCache.get(CmsDataCache.cmsAssetId).Nav_Items.Links || [])
    }
  }
};
</script>
