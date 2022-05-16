var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		path.join(__dirname, '/core/index.js')
	],
	output: {
		path: path.join(__dirname, '/js/'),
		filename: 'bundle.js',
		publicPath: '/js/'
	},
	devtool: 'eval',
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	devServer: {
		hot: true,
		static: '.'
	},
        performance: {
          hints: process.env.NODE_ENV === 'production' ? "warning" : false
        },
        mode: 'production',
        resolve: {
          extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
          fallback: {
            "fs": false,
            "path": require.resolve("path-browserify"),
            "os": require.resolve('os-browserify/browser'),
            "buffer": false
          }
       }
}
