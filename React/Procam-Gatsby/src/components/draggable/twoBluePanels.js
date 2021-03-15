import * as React from "react"
import { CmsDataCache, CmsField, CmsFieldTypes } from 'crownpeak-dxm-react-sdk'
import PanelItem from '../raw/panelItem'

const TwoBluePanels = (props) => {
    CmsDataCache.setComponent("TwoBluePanels");
    const cmsDisableDragDrop = false;

    let panels = new CmsField("TwoBluePanels", "PanelItem", (CmsFieldTypes.TEXT, props && props.data ? props.data.Panels : CmsDataCache.get(CmsDataCache.cmsAssetId)[CmsDataCache.cmsComponentName].Panels) || []);
    let i = 0;

    return (
        <div className="cp-component-div">
            <section className="full-width page-promos bg-blue">
                <div className="container-fluid">
                    <div className="row">
                        {/* <List name="Panels" type="PanelItem"> */}
                        {panels.value.map(sc => {
                            return <PanelItem data={sc.PanelItem} key={i++} />
                        })}
                        {/* </List> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TwoBluePanels
