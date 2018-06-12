const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
	devtool: 'eval-source-map',
	entry: {
		path: __dirname + '/app/index.js'
	},
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
		publicPath: 'dist/'
	},
	devServer: {
		contentBase: "./dist",
		//colors: true,
		historyApiFallback: true,
		inline: true,
		hot: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/index.tpl.html'
		}),
		new webpack.HotModuleReplacementPlugin(),
		//new webpack.optimize.OccurrenceOrderPlugin(),
		//new ExtractTextPlugin("style.css"),
		/*new CleanWebpackPlugin('dist/bundle-*.js',{
			root: __dirname,
			verbose: true,
			dry: false
		})*/
	],
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader",
			query: {
				presets: ['react', 'es2015']
			}
		}, {
			test: /\.css$/,
			loader: "style!css"
		}, {
			test: /\.less/,
			loader: "style-loader!css-loader!less-loader"
		}, {
			test: /\.(jpg|png|gif|svg)$/,
			loader: 'url-loader?limit=8192'
		}]
	}

}