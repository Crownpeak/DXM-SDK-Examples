<template>
  <div class="list-item col-sm-6 col-lg-3">
    <a :href="link">
      <img :src="image" :alt="alt" style="max-width:252px"/>
    </a>
    <h4>{{title}}</h4>
    <div class="button-group">
      <a class="btn btn-small btn-light-blue" :href="link">{{cta_text}}</a>
    </div>
  </div>
</template>
<script>
import {CmsComponent, CmsField, CmsFieldTypes} from 'crownpeak-dxm-vuejs-sdk';

export default {
  extends: CmsComponent,
  name: "ProductItem",
  props: ['data'],
  data() {
    return {
      link: new CmsField("Link", CmsFieldTypes.HREF, this.$props && this.$props.data ? this.$props.data.Link : null),
      image: new CmsField("Image", CmsFieldTypes.IMAGE, this.$props && this.$props.data ? this.$props.data.Image : null),
      alt: new CmsField("Alt", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.Alt : null),
      title: new CmsField("Title", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.Title : null),
      cta_text: new CmsField("CTA_Text", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.CTA_Text : null),
    }
  }
};
</script>
