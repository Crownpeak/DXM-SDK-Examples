import {CmsDropZoneComponent} from 'crownpeak-dxm-react-sdk';
import ExampleComponent from "../exampleComponent";

export default class DropZone extends CmsDropZoneComponent {
    constructor(props) {
        super(props);
        this.components = {
            ExampleComponent
        };
    }
}
