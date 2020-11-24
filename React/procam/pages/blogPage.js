import React from 'react'
import { CmsDynamicPage, CmsStaticPage } from 'crownpeak-dxm-react-sdk';
import TopicList from "../components/blog/topicList";
import FeaturedPost from "../components/blog/featuredPost";
import SecondaryPost from "../components/blog/secondaryPost";
import BlogPost from "../components/blog/blogPost";
import PostArchives from "../components/blog/postArchives";
import Routing from "../core/routing";
import MonthHeader from "../components/blog/monthHeader";

export default class BlogPage extends CmsDynamicPage
{
    constructor(props)
    {
        super(props);
        this.cmsSuppressFolder = true
        this.cmsUseTmf = false;
        this.cmsWrapper = "Blog";
        if(this.props && this.props.location) this.cmsAssetId = Routing.getCmsAssetId(this.props.location.pathname);
    }

    render() {
        super.render();
        return (
            this.state.isLoaded &&
            <div>
                <div className="container">
                    <header className="blog-header py-3">
                        <div className="row flex-nowrap justify-content-between align-items-center">
                            <div className="col-4 pt-1">
                                <a className="text-muted" href="/">ProCam</a>
                            </div>
                            <MonthHeader month={this.props.match.params.month}/>
                            <div className="col-4 d-flex justify-content-end align-items-center">
                                <a className="text-muted" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="mx-3">
                                        <circle cx="10.5" cy="10.5" r="7.5"></circle>
                                        <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
                                    </svg>
                                </a>
                                <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                            </div>
                        </div>
                    </header>
                    <TopicList/>
                    <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                        <FeaturedPost/>
                    </div>
                    <div className="row mb-2">
                        <div className="col-md-6">
                            <SecondaryPost/>
                        </div>
                        <div className="col-md-6">
                            <SecondaryPost/>
                        </div>
                    </div>
                </div>
                <main role="main" className="container">
                    <div className="row">
                        <div className="col-md-8 blog-main">
                            <h3 className="pb-3 mb-4 font-italic border-bottom">
                                From the Firehose
                            </h3>
                            <BlogPost/>
                        </div>
                        <aside className="col-md-4 blog-sidebar">
                            <PostArchives/>
                        </aside>
                    </div>
                </main>
                <footer className="blog-footer">
                    <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a
                        href="https://twitter.com/mdo">@mdo</a>.</p>
                    <p>
                        <a href="#">Back to top</a>
                    </p>
                </footer>
            </div>
        )
    }
}
