<template>
  <div class="promo col-md-6">
    <article class="content">
      <p><img :src="image" :alt="alt"/></p>
      <h2>{{ title }}</h2>
      <h3>{{ sub_title }}</h3>
      <span v-html="description"/>
      <div class="button-group">
        <a class="btn btn-white" :href="cta_link">{{ cta_text }}</a>
      </div>
    </article>
  </div>
</template>
<script>
import {CmsComponent, CmsField, CmsFieldTypes} from 'crownpeak-dxm-vuejs-sdk';

export default {
  extends: CmsComponent,
  name: "PanelItem",
  props: ['data'],
  data() {
    return {
      image: new CmsField("Image", CmsFieldTypes.IMAGE, this.$props && this.$props.data ? this.$props.data.Image : null),
      alt: new CmsField("Alt", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.Alt : null),
      title: new CmsField("Title", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.Title : null),
      sub_title: new CmsField("Sub_Title", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.Sub_Title : null),
      description: new CmsField("Description", CmsFieldTypes.WYSIWYG, this.$props && this.$props.data ? this.$props.data.Description : null),
      cta_link: new CmsField("CTA_Link", CmsFieldTypes.HREF, this.$props && this.$props.data ? this.$props.data.CTA_Link : null),
      cta_text: new CmsField("CTA_Text", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.CTA_Text : null),
    }
  }
};
</script>
