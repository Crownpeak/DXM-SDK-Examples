import React from 'react'
import {CmsComponent, CmsField, CmsFieldTypes, CmsDataCache} from 'crownpeak-dxm-react-sdk';
import ImagePanelItemList from "./imagePanelItemList";

export default class ImagePanel extends CmsComponent {
    constructor(props) {
        super(props);
        this.title = new CmsField("Title", CmsFieldTypes.TEXT, props && props.data ? props.data.Title : null);
        this.right_image = new CmsField("Right_Image", CmsFieldTypes.IMAGE, props && props.data ? props.data.Right_Image : null);
        this.right_image_alt = new CmsField("Right_Image_Alt", CmsFieldTypes.TEXT, props && props.data ? props.data.Right_Image_Alt : null);
    }

    render() {
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
                        <ImagePanelItemList />
                    </div>
                </section>
            </div>
        )
    }
}
