import * as React from "react"
import { CmsDataCache } from 'crownpeak-dxm-react-sdk'

const HeaderNavigation = (props) => {
    CmsDataCache.setComponent("HeaderNavigation");
    const cmsDisableDragDrop = false;

    let i = 0;
    return (
        <div className="navbar-collapse collapse" id="navigationContent">
            <ul className="navbar-nav" role="menubar">
                {/* cp-scaffold
                    {headerNavigationPreview:HeaderNavigationPreview}
                else */}
                    {props.data.map((item) => {
                        return <li className="nav-item" key={i++}>
                            <a className="nav-link" href={item.Link.Url} role="menuitem">{item.Link.Title}</a>
                        </li>
                    })}
                {/* /cp-scaffold */}
            </ul>
        </div>
    )
}

export default HeaderNavigation
