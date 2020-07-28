import { CmsDropZoneComponent } from 'crownpeak-dxm-react-sdk';
import Events from "../events";
import HomeHero from "../homeHero";
import Products from "../products";
import ImagePanel from "../imagePanel";
import TwoBluePanels from "../twoBluePanels";

export default class DropZone extends CmsDropZoneComponent {
    constructor(props)
    {
        super(props);
        this.components = {
            "Events": Events,
            "HomeHero": HomeHero,
            "Products": Products,
            "ThreeImages": ImagePanel,
            "TwoBluePanels": TwoBluePanels
        };
    }
}
