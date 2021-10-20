const path = require('path');
const config = require('./webpack.config');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const sass = {
	test: /\.scss/,
	use: [
		MiniCssExtractPlugin.loader,
		'css-loader',
		{
			loader: 'sass-loader',
			options: {
				sassOptions: {
					includePaths: [path.resolve(__dirname, './src/scss')],
				},
			},
		},
	],
};
const htmlTemplate = new HtmlWebpackPlugin({
	template: './src/template.pug',
});

let prod = {
	mode: 'production',

	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'assets/[name].[hash][ext]',
		clean: true,
	},

	module: {
		rules: [sass],
	},
	plugins: [
		new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
		htmlTemplate,
	],
};

prod = merge(config, prod);

module.exports = prod;
