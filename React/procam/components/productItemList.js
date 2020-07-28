import React from 'react'
import {CmsComponent, CmsDataCache, CmsField, CmsFieldTypes} from 'crownpeak-dxm-react-sdk';
import ProductItem from "./productItem";

export default class ProductItemList extends CmsComponent {
    constructor(props) {
        super(props);
        this.products = new CmsField("Products", "", CmsDataCache.get(CmsDataCache.cmsAssetId).Products.ProductItemList || []);
    }

    render() {
        let i = 0;
        return (
            <div className="row text-center">
                {/* <List name="Products" type="ProductItem"> */}
                {this.products.value.map(sc => {
                    return <ProductItem data={sc.ProductItem} key={i++}/>
                })}
                {/* </List> */}
            </div>

        )
    }
}
