<template>
  <div class="cp-component-div">
    <section class="full-width page-promos bg-blue">
      <div class="container-fluid">
        <div class="row">
          <!-- <List name="Panels" type="PanelItem"> -->
          <PanelItem v-for="(sc, i) in panels.value" :key="i" v-bind:data="sc.PanelItem" />
          <!-- </List> -->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import {CmsComponent, CmsField, CmsDataCache} from 'crownpeak-dxm-vuejs-sdk';
import PanelItem from "./panelItem.vue";

export default {
  extends: CmsComponent,
  name: "TwoBluePanels",
  components: {PanelItem},
  data() {
    return {
      panels: new CmsField("Panels", "", CmsDataCache.get(CmsDataCache.cmsAssetId).TwoBluePanels || [])
    }
  }
};
</script>
