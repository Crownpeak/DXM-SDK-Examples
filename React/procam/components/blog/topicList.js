import React from 'react';
import { CmsComponent, CmsStaticDataProvider } from 'crownpeak-dxm-react-sdk';

export default class TopicList extends CmsComponent
{
    constructor(props)
    {
        super(props);
        this.cmsFolder = "Blogs";
        this.cmsDisableDragDrop = true;

        this.topics = new CmsStaticDataProvider().getCustomDataSync("topics.json");
    }

    render() {
        return (
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    {/* cp-scaffold
                        Topic List
                    else */}
                        {this.topics.map((topic) => {
                            return <a key={topic.toString()} className="p-2 text-muted" href="#">{ topic }</a>
                        })}
                    {/* /cp-scaffold */}
                </nav>
            </div>
        )
    }
}
