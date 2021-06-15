import React from 'react';
import {CmsComponent, CmsField, CmsFieldTypes} from 'crownpeak-dxm-react-sdk';

export default class MonthHeader extends CmsComponent
{
    constructor(props)
    {
        super(props);
        this.cmsFolder = "Blogs";
        this.cmsDisableDragDrop = true;
    }

    render() {
        return (
            <div className="col-4 text-center">
                <a className="blog-header-logo text-dark" href="#">
                    {/* cp-scaffold
                        Current Month
                    else */}
                        {this.props.month}
                    {/* /cp-scaffold */}
                </a>
            </div>
        )
    }
}
