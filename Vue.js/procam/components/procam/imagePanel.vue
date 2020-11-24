<template>
  <div class="cp-component-div">
    <section
        class="full-width listing bg-image bg-bar-bottom  bg-bar-white angle--top-left">
      <div class="container-fluid">
        <div class="sectionHead row align-items-center">
          <div class="col">
            <h2>{{title}}</h2>
          </div>
          <div class="col-auto">
            <img :src="right_image" :alt="right_image_alt"/>
          </div>
        </div>
        <div class="row">
          <!-- <List name="Images" type="ImagePanelItem"> -->
          <ImagePanelItem v-for="(sc, i) in images.value" :key="i" v-bind:data="sc.ImagePanelItem" />
          <!-- </List> -->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import {CmsComponent, CmsDataCache, CmsField, CmsFieldTypes} from 'crownpeak-dxm-vuejs-sdk';
import ImagePanelItem from "./imagePanelItem.vue";

export default {
  extends: CmsComponent,
  name: "ImagePanel",
  components: {
    ImagePanelItem
  },
  data() {
    return {
      title: new CmsField("Title", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.Title : null),
      right_image: new CmsField("Right_Image", CmsFieldTypes.IMAGE, this.$props && this.$props.data ? this.$props.data.Right_Image : null),
      right_image_alt: new CmsField("Right_Image_Alt", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.Right_Image_Alt : null),
      images: new CmsField("Images", "ImagePanelItem", CmsDataCache.get(CmsDataCache.cmsAssetId).ImagePanel.Images || []),
    }
  }
};
</script>
