<template>
    <div class="blog-post">
        <h2 class="blog-post-title">{{ post_title }}</h2>
        <p class="blog-post-meta">Date: {{ new Date(this.post_date).toLocaleDateString() }}</p>
        <span v-html="post_content"/>
        {{ /*post_category*/ }}
    </div>
</template>
<script>
    import { CmsComponent, CmsField, CmsFieldTypes } from 'crownpeak-dxm-vuejs-sdk';
    export default {
        extends: CmsComponent,
        name: "BlogPost",
        data() {
            return {
                post_title: new CmsField("Post_Title", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.Post_Title : null),
                post_date: new CmsField("Post_Date", CmsFieldTypes.DATE, this.$props && this.$props.data ? this.$props.data.Post_Date : null),
                post_content: new CmsField("Post_Content", CmsFieldTypes.WYSIWYG, this.$props && this.$props.data ? this.$props.data.Post_Content : null),
                post_category: new CmsField("Post_Category", CmsFieldTypes.DOCUMENT, this.$props && this.$props.data ? this.$props.data.Post_Category : null)
            }
        }
    };
</script>
