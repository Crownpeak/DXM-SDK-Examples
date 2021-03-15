import React from 'react'
import { CmsDropZoneComponent } from 'crownpeak-dxm-react-sdk';
import Products from "../draggable/products";

export default class DropZone extends CmsDropZoneComponent {
    constructor(props)
    {
        super(props);
        this.components = {
            Products
        };
    }
}
