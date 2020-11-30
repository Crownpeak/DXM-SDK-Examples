<template>
  <div class="navbar-collapse collapse" id="navigationContent">
    <ul class="navbar-nav" role="menubar">
      <!-- cp-scaffold
        {headerNavigationPreview:HeaderNavigationPreview}
      else -->
        <li class="nav-item" v-for="(item, i) in nav_items" :key="i">
          <a class="nav-link" :href="item.Link.Url" role="menuitem">{{item.Link.title}}</a>
        </li>
      <!-- /cp-scaffold -->
    </ul>
  </div>
</template>
<script>
import {CmsComponent,CmsStaticDataProvider, CmsDynamicDataProvider} from 'crownpeak-dxm-vuejs-sdk';

export default {
  extends: CmsComponent,
  name: "HeaderNavigation",
  props: ['dataProvider'],
  data() {
    return {
      nav_items: []
    }
  },
  mounted() {
    if(this.$props.dataProvider instanceof CmsStaticDataProvider)
      this.nav_items = new CmsStaticDataProvider().getCustomDataSync("284119.json").HeaderNavigationAdmin.NavItems;
    else if (this.$props.dataProvider instanceof CmsDynamicDataProvider)
      this.nav_items = new CmsDynamicDataProvider().getDynamicQuerySync("q=284119&fl=custom_t_json:[json]").response.docs[0].custom_t_json.HeaderNavigationAdmin.NavItems;
  }
};
</script>
