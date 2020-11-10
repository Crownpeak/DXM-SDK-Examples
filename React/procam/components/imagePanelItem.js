import React from 'react'
import {CmsComponent, CmsField, CmsFieldTypes} from 'crownpeak-dxm-react-sdk';

export default class ImagePanelItem extends CmsComponent {
    constructor(props) {
        super(props);
        this.image = new CmsField("Image", CmsFieldTypes.IMAGE, props && props.data ? props.data.Image : null);
        this.alt = new CmsField("Alt", CmsFieldTypes.TEXT, props && props.data ? props.data.Alt : null);
    }

    render() {
        return (
            <div className="list-item col-sm-4">
                <figure>
                    <img src={this.image} alt={this.alt}/>
                </figure>
            </div>
        )
    }
}
