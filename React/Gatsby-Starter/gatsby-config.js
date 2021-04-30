module.exports = {
    siteMetadata: {
        siteUrl: `https://gatsby.procam.cprd.io`,
    },
    plugins: [
        {
            resolve: 'gatsby-source-crownpeak-dxm',
            options: {
                // collection or contentLocation can be used to provide a location for content
                // the value of CMS_DYNAMIC_CONTENT_LOCATION from .env will be used if they are not specified
                // collection: "{COLLECTION_NAME}", // Optional
                // contentLocation: "//searchg2.crownpeak.net/{COLLECTION_NAME}/select/?wt=json" // Optional

                // any provided filterQueries will be appended to all queries
                //filterQueries: ["custom_is_cms_folder_id:12345"],

                // contentTypes is optional, and will be queried from the content source if not provided
                // if contentTypes is not specified, /src/templates will be checked for a matching template for each type
                // e.g. if the CMS content type is "Blog Page", /src/template/blogPage.js will be searched
                // Similarly if a template value is not provided in contentTypes, the folder will be searched
                //contentTypes: [{name: "Blog Page", template: "blog-template.js"}, "Home Page", "Admin"]
            },
        },
        {
            resolve: 'gatsby-plugin-minify'
        },
        {
            resolve: 'gatsby-plugin-sitemap'
        },
    ],
}
