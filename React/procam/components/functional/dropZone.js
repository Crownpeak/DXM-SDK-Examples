import { CmsDropZoneComponent } from 'crownpeak-dxm-react-sdk';
import Events from "../procam/events";
import HomeHero from "../procam/homeHero";
import Products from "../procam/products";
import ImagePanel from "../procam/imagePanel";
import TwoBluePanels from "../procam/twoBluePanels";

export default class DropZone extends CmsDropZoneComponent {
    constructor(props)
    {
        super(props);
        this.components = {
            Events,
            HomeHero,
            Products,
            ImagePanel,
            TwoBluePanels
        };
    }
}
