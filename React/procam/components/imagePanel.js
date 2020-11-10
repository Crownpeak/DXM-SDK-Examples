import React from 'react'
import {CmsComponent, CmsField, CmsFieldTypes, CmsDataCache} from 'crownpeak-dxm-react-sdk';
import ImagePanelItem from "./imagePanelItem";

export default class ImagePanel extends CmsComponent {
    constructor(props) {
        super(props);
        this.title = new CmsField("Title", CmsFieldTypes.TEXT, props && props.data ? props.data.Title : null);
        this.right_image = new CmsField("Right_Image", CmsFieldTypes.IMAGE, props && props.data ? props.data.Right_Image : null);
        this.right_image_alt = new CmsField("Right_Image_Alt", CmsFieldTypes.TEXT, props && props.data ? props.data.Right_Image_Alt : null);
        this.images = new CmsField("Images", "ImagePanelItem", CmsDataCache.get(CmsDataCache.cmsAssetId).ImagePanel.Images || []);
    }

    render() {
        let i = 0;
        return (
            <div className="cp-component-div">
                <section
                    className="full-width listing bg-image bg-bar-bottom  bg-bar-white angle--top-left">
                    <div className="container-fluid">
                        <div className="sectionHead row align-items-center">
                            <div className="col">
                                <h2>{this.title}</h2>
                            </div>
                            <div className="col-auto">
                                <img src={this.right_image} alt={this.right_image_alt}/>
                            </div>
                        </div>
                        <div className="row">
                            {/* <List name="Images" type="ImagePanelItem"> */}
                            {this.images.value.map(sc => {
                                return <ImagePanelItem data={sc.ImagePanelItem} key={i++}/>
                            })}
                            {/* </List> */}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
