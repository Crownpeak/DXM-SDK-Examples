<script>
import { CmsDropZoneComponent } from 'crownpeak-dxm-vuejs-sdk';
import HomeHero from "../procam/homeHero.vue";
import ImagePanel from "../procam/imagePanel.vue";
import Events from "../procam/events.vue";
import Products from "../procam/products.vue";
import TwoBluePanels from "../procam/twoBluePanels.vue";

export default {
  extends: CmsDropZoneComponent,
  name: "DropZone",
  props: ['name'],
  render: function(h) {
    const componentRegistry = {
      HomeHero,
      ImagePanel,
      Events,
      Products,
      TwoBluePanels,
    }
    return h('div', { class:'row'}, this.getComponents(h, componentRegistry))
  }
};
</script>
