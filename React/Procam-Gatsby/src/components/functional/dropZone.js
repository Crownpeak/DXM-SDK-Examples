import { CmsDropZoneComponent } from 'crownpeak-dxm-react-sdk';
import Products from "../draggable/products";
import Events from "../draggable/events";
import HomeHero from "../draggable/homeHero";
import ImagePanel from "../draggable/imagePanel";
import TwoBluePanels from "../draggable/twoBluePanels";

export default class DropZone extends CmsDropZoneComponent {
    constructor(props)
    {
        super(props);
        this.components = {
            Products,
            Events,
            HomeHero,
            ImagePanel,
            TwoBluePanels
        };
    }
}
