<template>
  <div v-if="isLoaded">
    <div class="container">
      <header class="blog-header py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-4 pt-1">
            <a class="text-muted" href="/">ProCam</a>
          </div>
          <MonthHeader month="this.props.match.params.month" />
          <div class="col-4 d-flex justify-content-end align-items-center">
            <a class="text-muted" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                   fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                   strokeLinejoin="round" class="mx-3">
                <circle cx="10.5" cy="10.5" r="7.5"></circle>
                <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
              </svg>
            </a>
            <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
          </div>
        </div>
      </header>
      <TopicList/>
      <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <FeaturedPost/>
      </div>
      <div class="row mb-2">
        <div class="col-md-6">
          <SecondaryPost/>
        </div>
        <div class="col-md-6">
          <SecondaryPost/>
        </div>
      </div>
    </div>
    <main role="main" class="container">
      <div class="row">
        <div class="col-md-8 blog-main">
          <h3 class="pb-3 mb-4 font-italic border-bottom">
            From the Firehose
          </h3>
          <BlogPost/>
        </div>
        <aside class="col-md-4 blog-sidebar">
          <PostArchives/>
        </aside>
      </div>
    </main>
    <footer class="blog-footer">
      <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a
          href="https://twitter.com/mdo">@mdo</a>.</p>
      <p>
        <a href="#">Back to top</a>
      </p>
    </footer>
  </div>
</template>
<script>
import {CmsStaticPage, CmsDynamicPage} from 'crownpeak-dxm-vuejs-sdk';
import TopicList from '../components/blog/topicList.vue';
import FeaturedPost from '../components/blog/featuredPost.vue';
import SecondaryPost from '../components/blog/secondaryPost.vue';
import BlogPost from '../components/blog/blogPost.vue';
import PostArchives from '../components/blog/postArchives.vue';
import MonthHeader from "../components/blog/monthHeader";

export default {
  extends: CmsDynamicPage,
  name: "BlogPage",
  components: {
    MonthHeader,
    TopicList,
    FeaturedPost,
    SecondaryPost,
    BlogPost,
    PostArchives,
  },
  cmsWrapper: "Blog",
  cmsUseTmf: false,
  cmsSuppressModel: true,
  cmsSuppressFolder: true
};
</script>
