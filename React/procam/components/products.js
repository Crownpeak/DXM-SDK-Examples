import React from 'react'
import {CmsComponent, CmsDataCache, CmsField, CmsFieldTypes} from 'crownpeak-dxm-react-sdk';
import ProductItemList from "./productItemList";

export default class Products extends CmsComponent {
    constructor(props) {
        super(props);
        this.title = new CmsField("Title", CmsFieldTypes.TEXT, props && props.data ? props.data.Title : null);
    }

    render() {
        return (
            <div className="cp-component-div">
                <section className="full-width listing bg-grey angle--top-right">
                    <div className="container-fluid">
                        <h2 className="sectionHead">{this.title}</h2>
                        <ProductItemList />
                    </div>
                </section>
            </div>
        )
    }
}
