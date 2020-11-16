<template>
  <div class="cp-component-div">
    <section class="full-width listing bg-grey angle--top-right">
      <div class="container-fluid">
        <h2 class="sectionHead">{{title}}</h2>
        <div class="row text-center">
          <!-- <List name="Products" type="ProductItem"> -->
          <ProductItem v-for="(sc, i) in products.value" :key="i" v-bind:data="sc.ProductItem" />
          <!-- </List> -->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import {CmsComponent, CmsDataCache, CmsField, CmsFieldTypes} from 'crownpeak-dxm-vuejs-sdk';
import ProductItem from "./productItem.vue";

export default {
  extends: CmsComponent,
  name: "Products",
  components: {
    ProductItem
  },
  data() {
    return {
      title: new CmsField("Title", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.Title : null),
      products: new CmsField("Products", "ImagePanelItem", CmsDataCache.get(CmsDataCache.cmsAssetId).Products.Products || []),
    }
  }
};
</script>
