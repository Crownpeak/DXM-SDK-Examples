<template>
  <div class="list-item col-sm-4">
    <figure>
      <img :src="image" :alt="alt"/>
    </figure>
  </div>
</template>
<script>
import {CmsComponent, CmsField, CmsFieldTypes} from 'crownpeak-dxm-vuejs-sdk';

export default {
  extends: CmsComponent,
  name: "ImagePanelItem",
  props: ['data'],
  data() {
    return {
      image: new CmsField("Image", CmsFieldTypes.IMAGE, this.$props && this.$props.data ? this.$props.data.Image : null),
      alt: new CmsField("Alt", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.Alt : null),
    }
  }
};
</script>
