import React from 'react'
import {CmsComponent, CmsDynamicDataProvider, CmsStaticDataProvider} from 'crownpeak-dxm-react-sdk';

export default class HeaderNavigation extends CmsComponent {
    constructor(props) {
        super(props);
        this.nav_items = [];
        if(this.props.dataProvider instanceof CmsStaticDataProvider)
            this.nav_items = new CmsStaticDataProvider().getCustomDataSync("284076.json").HeaderNavigationAdmin.NavItems;
        else if (this.props.dataProvider instanceof CmsDynamicDataProvider)
            this.nav_items = new CmsDynamicDataProvider().getDynamicQuerySync("q=284076&fl=custom_t_json:[json]").response.docs[0].custom_t_json.HeaderNavigationAdmin.NavItems;
    }

    render() {
        let i=0;
        return (
            <div className="navbar-collapse collapse" id="navigationContent">
                <ul className="navbar-nav" role="menubar">
                    {/* cp-scaffold
                        {headerNavigationPreview:HeaderNavigationPreview}
                    else */}
                        {this.nav_items.map((item) => {
                            return <li className="nav-item" key={i++}>
                                <a className="nav-link" href={item.Link.Url} role="menuitem">{item.Link.Title}</a>
                                </li>
                        })}
                    {/* /cp-scaffold */}
                </ul>
            </div>
        )
    }
}
