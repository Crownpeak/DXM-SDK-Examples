import React from 'react'
import {CmsComponent, CmsField, CmsFieldTypes, CmsDataCache} from 'crownpeak-dxm-react-sdk';
import ImagePanelItem from "./imagePanelItem";

export default class ImagePanelItemList extends CmsComponent {
    constructor(props) {
        super(props);
        this.images = new CmsField("Images", "ImagePanelItem", CmsDataCache.get(CmsDataCache.cmsAssetId).ImagePanel.ImagePanelItemList || []);
    }

    render() {
        let i = 0;
        return (
            <div className="row">
                {/* <List name="Images" type="ImagePanelItem"> */}
                {this.images.value.map(sc => {
                    return <ImagePanelItem data={sc.ImagePanelItem} key={i++}/>
                })}
                {/* </List> */}
            </div>

        )
    }
}
