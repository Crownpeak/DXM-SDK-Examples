<template>
    <div v-if="isLoaded">
        <div class="jumbotron">
            <HeroContainer />
        </div>
        <div class="container">
            <div class="row">
                <SecondaryContainer/>
                <SecondaryContainer/>
                <SecondaryContainer/>
            </div>
            <DropZone name="secondary"/>
            <SecondaryListContainer/>
        </div>
        <hr/>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { CmsDynamicPage } from 'crownpeak-dxm-vuejs-sdk';
    import HeroContainer from '../components/heroContainer';
    import SecondaryContainer from '../components/secondaryContainer';
    import DropZone from "../components/dropZone";
    import SecondaryListContainer from "../components/secondaryListContainer";

    Vue.prototype.$cmsAssetId = 266437;

    export default {
        extends: CmsDynamicPage,
        name: "HomePage",
        components: {
            SecondaryListContainer,
            DropZone,
            HeroContainer,
            SecondaryContainer
        }
    };
</script>
