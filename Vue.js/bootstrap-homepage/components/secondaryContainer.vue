<template>
    <div class="col-md-4">
        <h2>{{ heading }}</h2>
        <span v-html="description"/>
        <p><a class="btn btn-secondary" href="#" role="button">{{ button_text }}</a></p>
    </div>
</template>
<script>
    import { CmsComponent, CmsField, CmsFieldTypes } from 'crownpeak-dxm-vuejs-sdk';
    export default {
        extends: CmsComponent,
        name: "SecondaryContainer",
        props: ['data'],
        data() {
            return {
                heading: new CmsField("Heading", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.Heading : null),
                description: new CmsField("Description", CmsFieldTypes.WYSIWYG, this.$props && this.$props.data ? this.$props.data.Description : null),
                button_text: new CmsField("Button_Text", CmsFieldTypes.TEXT, this.$props && this.$props.data ? this.$props.data.Button_Text : null)
            }
        }
    };
</script>
