import * as React from "react"
import { CmsDataCache, CmsField, CmsFieldTypes } from 'crownpeak-dxm-react-sdk'
import ImagePanelItem from '../raw/imagePanelItem'

const ImagePanel = (props) => {
    CmsDataCache.setComponent("ImagePanel");
    const cmsDisableDragDrop = false;

    let title = new CmsField("Title", CmsFieldTypes.TEXT, props && props.data ? props.data.Title : null);
    let right_image = new CmsField("Right_Image", CmsFieldTypes.IMAGE, props && props.data ? props.data.Right_Image : null);
    let right_image_alt = new CmsField("Right_Image_Alt", CmsFieldTypes.TEXT, props && props.data ? props.data.Right_Image_Alt : null);
    let images = new CmsField("Images", "ImagePanelItem", (CmsFieldTypes.TEXT, props && props.data ? props.data.Images : CmsDataCache.get(CmsDataCache.cmsAssetId)[CmsDataCache.cmsComponentName].Images) || []);
    let i = 0;
    return (
        <div className="cp-component-div">
            <section
                className="full-width listing bg-image bg-bar-bottom  bg-bar-white angle--top-left">
                <div className="container-fluid">
                    <div className="sectionHead row align-items-center">
                        <div className="col">
                            <h2>{title}</h2>
                        </div>
                        <div className="col-auto">
                            <img src={right_image} alt={right_image_alt} />
                        </div>
                    </div>
                    <div className="row">
                        {/* <List name="Images" type="ImagePanelItem"> */}
                        {images.map(sc => {
                            return <ImagePanelItem data={sc.ImagePanelItem} key={i++}/>
                        })}
                        {/* </List> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ImagePanel
