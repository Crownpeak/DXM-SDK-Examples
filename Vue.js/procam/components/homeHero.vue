<template>
  <div class="cp-component-div">
    <section class="row full-width hero-container">
      <div aria-hidden="true" class="post-cover hero-banner-image">
        <img :src="desktop_banner_image" aria-hidden="true" :alt="desktop_banner_alt"/>
      </div>
      <div aria-hidden="true" class="post-cover hero-banner-image mobile">
        <img :src="mobile_banner_image" aria-hidden="true" :alt="mobile_banner_alt"/>
      </div>
      <div class="container-fluid hero-content">
        <div class="row">
          <div class="col-md-8">
            <div class="left-column">
              <h1 class="hero-head" v-html="text"></h1>
              <img :src="image" :alt="alt"/>
            </div>
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
  name: "HomeHero",
  data() {
    return {
      desktop_banner_image: new CmsField("Desktop_Banner_Image", CmsFieldTypes.IMAGE, this.$props && this.$props.data ? this.$props.data.Desktop_Banner_Image : null),
      desktop_banner_alt: new CmsField("Desktop_Banner_Alt", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.Desktop_Banner_Alt : null),
      mobile_banner_image: new CmsField("Mobile_Banner_Image", CmsFieldTypes.IMAGE, this.$props && this.$props.data ? this.$props.data.Mobile_Banner_Image : null),
      mobile_banner_alt: new CmsField("Mobile_Banner_Alt", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.Mobile_Banner_Alt : null),
      text: new CmsField("Text", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.Text : null),
      image: new CmsField("Image", CmsFieldTypes.IMAGE, this.$props && this.$props.data ? this.$props.data.Image : null),
      alt: new CmsField("Alt", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.Alt : null),
    }
  }
};
</script>
