const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: [
        path.join(__dirname, '/core/index.js')
    ],
    output: {
        path: path.join(__dirname, '/js/'),
        filename: 'bundle.js',
        publicPath: '/js/'
    },
    devtool: false,
    plugins: [
        new Dotenv({path: path.resolve(__dirname, './.env'), safe: true, silent: false}),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.(scss|css)$/,
                use: ["vue-style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    devServer: {
        hot: true,
        static: '.'
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js"
        },
        extensions: ["*", ".js", ".vue", ".json"]
    },
    performance: {
      hints: process.env.NODE_ENV === 'production' ? "warning" : false
    },
    mode: 'production',
}
