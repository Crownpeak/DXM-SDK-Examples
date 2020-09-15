<template>
  <div class="row text-center">
    <!-- <List name="Products" type="ProductItem"> -->
    <ProductItem v-for="(sc, i) in products.value" :key="i" v-bind:data="sc.ProductItem" />
    <!-- </List> -->
  </div>
</template>
<script>
import {CmsComponent, CmsField, CmsDataCache} from 'crownpeak-dxm-vuejs-sdk';
import ProductItem from "../components/productItem.vue";

export default {
  extends: CmsComponent,
  name: "ProductItemList",
  props: ['data'],
  components: {
    ProductItem
  },
  data() {
    return {
      products: new CmsField("Products", "ImagePanelItem", CmsDataCache.get(CmsDataCache.cmsAssetId).Products.ProductItemList || []),
    }
  }
};
</script>
