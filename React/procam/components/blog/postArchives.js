import React from 'react';
import { Link } from 'react-router-dom';
import {CmsComponent, CmsDynamicDataProvider, CmsStaticDataProvider} from 'crownpeak-dxm-react-sdk';

export default class PostArchives extends CmsComponent
{
    constructor(props)
    {
        super (props);
        this.cmsFolder = "Blogs";
        this.cmsDisableDragDrop = true;

        const data = new CmsDynamicDataProvider().getDynamicQuerySync("q=*:*&fq=custom_s_type:\"Blog%20Page\"&rows=0&facet=true&facet.mincount=1&facet.range=custom_dt_created&f.custom_dt_created.facet.range.start=NOW/YEAR-1YEAR&f.custom_dt_created.facet.range.end=NOW/YEAR%2B1YEAR&f.custom_dt_created.facet.range.gap=%2B1MONTH");
        this.months = data.facet_counts.facet_ranges.custom_dt_created.counts.filter((_c, i) => i%2 === 0);
    }

    render() {
        return (
            <div className="p-3">
                <h4 className="font-italic">Archives</h4>
                <ol className="list-unstyled mb-0">
                    {/* cp-scaffold
                        Archives
                    else */}
                        {this.months.map((month) => {
                            return <li key={month.substr(0,7)}><Link to={`/blog/${month.substr(0,7)}`}>{ [new Date(month).toLocaleString('default', { month: 'long', year: 'numeric' })] }</Link></li>
                        })}
                    {/* /cp-scaffold */}
                </ol>
            </div>
        )
    }
}
