<template>
    <div class="row">
        <!-- <List name="SecondaryContainers" type="SecondaryContainer"> -->
        <SecondaryContainer v-for="(sc, i) in secondaryContainers.value" :key="i" v-bind:data="sc.SecondaryContainer" />
        <!-- </List> -->
    </div>
</template>
<script>
    import { CmsComponent, CmsField, CmsDataCache } from 'crownpeak-dxm-vuejs-sdk';
    import SecondaryContainer from './secondaryContainer';
    export default {
        extends: CmsComponent,
        name: "SecondaryListContainer",
        props: ['data'],
        data() {
            return {
                secondaryContainers: new CmsField("SecondaryContainer", "", CmsDataCache.get(CmsDataCache.cmsAssetId).SecondaryListContainer.SecondaryContainers || [])
            }
        },
        components: {
            SecondaryContainer
        }
    };
</script>
