import * as React from "react"
import { CmsDataCache, CmsField, CmsFieldTypes } from 'crownpeak-dxm-react-sdk'
import ProductItem from '../raw/productItem'

const Products = (props) => {
    CmsDataCache.setComponent("Products");
    const cmsDisableDragDrop = false;

    let title = new CmsField("Title", CmsFieldTypes.TEXT, props && props.data ? props.data.Title : null);
    let products = new CmsField("Products", "ProductItem", (CmsFieldTypes.TEXT, props && props.data ? props.data.Products : CmsDataCache.get(CmsDataCache.cmsAssetId)[CmsDataCache.cmsComponentName].Products) || []);
    let i = 0;

    return (
        <div className="cp-component-div">
                <section className="full-width listing bg-grey angle--top-right">
                    <div className="container-fluid">
                        <h2 className="sectionHead">{title}</h2>
                        <div className="row text-center">
                            {/* <List name="Products" type="ProductItem"> */}
                            {products.map(sc => {
                                return <ProductItem data={sc.ProductItem} key={i++}/>
                            })}
                            {/* </List> */}
                        </div>
                    </div>
                </section>
            </div>
    )
}

export default Products
