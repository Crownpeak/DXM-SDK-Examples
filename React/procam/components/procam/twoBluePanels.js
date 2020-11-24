import React from 'react'
import {CmsComponent, CmsDataCache, CmsField} from 'crownpeak-dxm-react-sdk';
import PanelItem from "./panelItem";

export default class TwoBluePanels extends CmsComponent {
    constructor(props) {
        super(props);
        this.panels = new CmsField("Panels", "", CmsDataCache.get(CmsDataCache.cmsAssetId).TwoBluePanels.Panels || []);
    }

    render() {
        let i = 0;
        return (
            <div className="cp-component-div">
                <section className="full-width page-promos bg-blue">
                    <div className="container-fluid">
                        <div className="row">
                            {/* <List name="Panels" type="PanelItem"> */}
                            {this.panels.value.map(sc => {
                                return <PanelItem data={sc.PanelItem} key={i++}/>
                            })}
                            {/* </List> */}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
