import * as React from 'react'
import {CmsDataCache, CmsField, CmsFieldTypes} from 'crownpeak-dxm-react-sdk'

const ExampleComponent = (props) => {
    CmsDataCache.setComponent("ExampleComponent");

    let text = new CmsField("Text", CmsFieldTypes.TEXT, props && props.data ? props.data.Text : null);

    return (
        <h1>{text}</h1>
    )
}

export default ExampleComponent
