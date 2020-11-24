import React from 'react'
import {CmsComponent, CmsDataCache, CmsField, CmsFieldTypes} from 'crownpeak-dxm-react-sdk';
import ProductItem from "./productItem";

export default class Products extends CmsComponent {
    constructor(props) {
        super(props);
        this.title = new CmsField("Title", CmsFieldTypes.TEXT, props && props.data ? props.data.Title : null);
        this.products = new CmsField("Products", "", CmsDataCache.get(CmsDataCache.cmsAssetId).Products.Products|| []);
    }

    render() {
        let i = 0;
        return (
            <div className="cp-component-div">
                <section className="full-width listing bg-grey angle--top-right">
                    <div className="container-fluid">
                        <h2 className="sectionHead">{this.title}</h2>
                        <div className="row text-center">
                            {/* <List name="Products" type="ProductItem"> */}
                            {this.products.value.map(sc => {
                                return <ProductItem data={sc.ProductItem} key={i++}/>
                            })}
                            {/* </List> */}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
