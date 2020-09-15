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
        <ImagePanelItemList />
      </div>
    </section>
  </div>
</template>
<script>
import {CmsComponent, CmsField, CmsFieldTypes} from 'crownpeak-dxm-vuejs-sdk';
import ImagePanelItemList from "./imagePanelItemList.vue";

export default {
  extends: CmsComponent,
  name: "ImagePanel",
  components: {
    ImagePanelItemList
  },
  data() {
    return {
      title: new CmsField("Title", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.Title : null),
      right_image: new CmsField("Right_Image", CmsFieldTypes.IMAGE, this.$props && this.$props.data ? this.$props.data.Right_Image : null),
      right_image_alt: new CmsField("Right_Image_Alt", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.Right_Image_Alt : null)
    }
  }
};
</script>
