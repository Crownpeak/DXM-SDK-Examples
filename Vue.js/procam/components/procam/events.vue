<template>
  <div class="cp-component-div">
    <section class="full-width two-column bg-white">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="column col">
            <article class="content">
              <h2 class="text-blue">{{title}}</h2>
              <h3>{{sub_title}}</h3>
              <span v-html="description"/>
              <div class="button-group">
                <a class="btn btn-light-blue" :href="cta_1_link">{{cta_1_text}}</a>
                <a class="btn btn-dark-blue" :href="cta_2_link">{{cta_2_text}}</a>
              </div>
            </article>
          </div>
          <div class="column col-lg-auto">
            <figure>
              <img :src="image" :alt="alt" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import {CmsComponent, CmsField, CmsFieldTypes} from 'crownpeak-dxm-vuejs-sdk';

export default {
  extends: CmsComponent,
  name: "Events",
  data() {
    return {
      title: new CmsField("Title", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.Title : null),
      sub_title: new CmsField("Sub_Title", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.Sub_Title : null),
      description: new CmsField("Description", CmsFieldTypes.WYSIWYG, this.$props && this.$props.data ? this.$props.data.Description : null),
      cta_1_link: new CmsField("CTA_1_Link", CmsFieldTypes.HREF, this.$props && this.$props.data ? this.$props.data.Cta_1_Link : null),
      cta_1_text: new CmsField("CTA_1_Text", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.CTA_1_Text : null),
      cta_2_link: new CmsField("CTA_2_Link", CmsFieldTypes.HREF, this.$props && this.$props.data ? this.$props.data.Cta_2_Link : null),
      cta_2_text: new CmsField("CTA_2_Text", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.CTA_2_Text : null),
      image: new CmsField("Image", CmsFieldTypes.IMAGE, this.$props && this.$props.data ? this.$props.data.Image : null),
      alt: new CmsField("Alt", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.Alt : null),
    }
  }
};
</script>
