import React from 'react'
import {CmsComponent, CmsDataCache, CmsField} from 'crownpeak-dxm-react-sdk';

export default class HeaderNavigationAdmin extends CmsComponent {
    constructor(props) {
        super(props);
        this.nav_items = new CmsField("Nav_Items", "", CmsDataCache.get(CmsDataCache.cmsAssetId).Nav_Items.Links || []);
    }

    render() {
        return (
            <div className="navbar-collapse collapse" id="navigationContent">
                <ul className="navbar-nav" role="menubar">
                    {/* <List name="NavItems" type="Link"> */}
                    {this.nav_items.value.map(item => {
                        return
                            <li className="nav-item" key={i++}>
                                <a className="nav-link" href="{item.NavItem.url}" role="menuitem">{item.NavItem.title}</a>
                            </li>
                    })}
                    {/* </List> */}
                </ul>
            </div>
        )
    }
}
