<template>
    <div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex justify-content-between">
          <!-- cp-scaffold
            Topic List
          else -->
          <a v-for="topic in topics" :key="topic" class="p-2 text-muted" href="#">{{ topic }}</a>
          <!-- /cp-scaffold -->
        </nav>
    </div>
</template>
<script>
    import { CmsComponent, CmsStaticDataProvider } from 'crownpeak-dxm-vuejs-sdk';
    export default {
        extends: CmsComponent,
        name: "TopicList",
        data() {
            return {
                topics: new CmsStaticDataProvider().getCustomDataSync("topics.json")
            }
        }
    };
</script>
