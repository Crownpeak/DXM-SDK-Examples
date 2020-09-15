<script>
import { CmsDropZoneComponent } from 'crownpeak-dxm-vuejs-sdk';
import HomeHero from "../homeHero.vue";
import ImagePanel from "../imagePanel.vue";
import Events from "../events.vue";
import Products from "../products.vue";
import TwoBluePanels from "../twoBluePanels.vue";

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
