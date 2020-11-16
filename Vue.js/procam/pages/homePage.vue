<template>
  <div v-if="isLoaded">
    <Header/>
    <main id="main-content" className="main-content" role="main" aria-label="main content">
      <div className="cp-main-container">
        <HomeHero/>
        <ImagePanel/>
        <Products/>
        <TwoBluePanels/>
        <DropZone name="droppable"/>
      </div>
    </main>
    <Footer/>
  </div>
</template>
<script>
import Vue from 'vue';
import {CmsDynamicPage} from 'crownpeak-dxm-vuejs-sdk';
import HomeHero from "../components/homeHero.vue";
import Header from "../components/global/header.vue";
import Footer from "../components/global/footer.vue";
import ImagePanel from "../components/imagePanel.vue";
import Events from "../components/events.vue";
import Products from "../components/products.vue";
import TwoBluePanels from "../components/twoBluePanels.vue";
import DropZone from "../components/functional/dropZone.vue";

Vue.prototype.$cmsAssetId = 280550;

export default {
  extends: CmsDynamicPage,
  name: "HomePage",
  components: {
    HomeHero,
    Header,
    Footer,
    ImagePanel,
    Events,
    Products,
    TwoBluePanels,
    DropZone
  }
};
</script>
