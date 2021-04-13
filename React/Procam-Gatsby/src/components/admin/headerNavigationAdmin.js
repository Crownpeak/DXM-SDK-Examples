import * as React from "react"
import { CmsDataCache, CmsField, CmsFieldTypes } from 'crownpeak-dxm-react-sdk'

const HeaderNavigationAdmin = (props) => {
    CmsDataCache.setComponent("HeaderNavigationAdmin");
    const cmsDisableDragDrop = true;
    let nav_items = new CmsField("Nav_Items", "ProductItem", (CmsFieldTypes.TEXT, props && props.data ? props.data.Products : CmsDataCache.get(CmsDataCache.cmsAssetId)[CmsDataCache.cmsComponentName].Nav_Items) || []);

    return (
        <div className="navbar-collapse collapse" id="navigationContent">
            <ul className="navbar-nav" role="menubar">
                {/* <List name="NavItems" type="Link"> */}
                {nav_items.value.map(item => {
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

export default HeaderNavigationAdmin
