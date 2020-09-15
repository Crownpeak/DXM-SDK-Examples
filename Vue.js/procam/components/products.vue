<template>
  <div class="cp-component-div">
    <section class="full-width listing bg-grey angle--top-right">
      <div class="container-fluid">
        <h2 class="sectionHead">{{title}}</h2>
        <ProductItemList />
      </div>
    </section>
  </div>
</template>
<script>
import {CmsComponent, CmsField, CmsFieldTypes} from 'crownpeak-dxm-vuejs-sdk';
import ProductItemList from "./productItemList.vue";

export default {
  extends: CmsComponent,
  name: "Products",
  components: {
    ProductItemList
  },
  data() {
    return {
      title: new CmsField("Title", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.Title : null)
    }
  }
};
</script>
