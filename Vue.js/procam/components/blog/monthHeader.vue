<template>
  <div class="col-4 text-center">
    <!-- cp-scaffold
      <a class="blog-header-logo text-dark" href="#">Current Month</a>
    else -->
    <a class="blog-header-logo text-dark" href="#">{{ $route.params.month || "Home" }}</a>
    <!-- /cp-scaffold -->
  </div>
</template>
<script>
import {CmsComponent, CmsField, CmsFieldTypes} from 'crownpeak-dxm-vuejs-sdk';

export default {
  extends: CmsComponent,
  name: "MonthHeader",
  data() {
    return {
      post_title: new CmsField("Post_Title", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.Post_Title : null),
      post_date: new CmsField("Post_Date", CmsFieldTypes.DATE, this.$props && this.$props.data ? this.$props.data.Post_Date : null),
      post_content: new CmsField("Post_Content", CmsFieldTypes.WYSIWYG, this.$props && this.$props.data ? this.$props.data.Post_Content : null),
      post_category: new CmsField("Post_Category", CmsFieldTypes.DOCUMENT, this.$props && this.$props.data ? this.$props.data.Post_Category : null)
    }
  }
};
</script>
