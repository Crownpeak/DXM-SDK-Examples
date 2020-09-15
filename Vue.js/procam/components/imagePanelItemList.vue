<template>
  <div class="row">
    <!-- <List name="Images" type="ImagePanelItem"> -->
    <ImagePanelItem v-for="(sc, i) in images.value" :key="i" v-bind:data="sc.ImagePanelItem" />
    <!-- </List> -->
  </div>
</template>
<script>
import {CmsComponent, CmsField, CmsDataCache} from 'crownpeak-dxm-vuejs-sdk';
import ImagePanelItem from "../components/imagePanelItem.vue";

export default {
  extends: CmsComponent,
  name: "ImagePanelItemList",
  props: ['data'],
  components: {
    ImagePanelItem
  },
  data() {
    return {
      images: new CmsField("Images", "ImagePanelItem", CmsDataCache.get(CmsDataCache.cmsAssetId).ImagePanel.ImagePanelItemList || []),
    }
  }
};
</script>
