import React from 'react';
import { CmsComponent } from 'crownpeak-dxm-react-sdk';

export default class MonthHeader extends CmsComponent
{
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
