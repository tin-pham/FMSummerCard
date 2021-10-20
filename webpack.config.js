const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sass = {
	test: /\.scss/,
	use: [
		'style-loader',
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

const pug = {
	test: /\.pug/,
	use: [
		{
			loader: 'simple-pug-loader',
			options: {
				root: path.resolve(__dirname, './src/pug'),
			},
		},
	],
};
const image = {
	test: /\.(png|svg|jpg|jpeg|ico|gif)$/,
	type: 'asset/resource',
};

const htmlTemplate = new HtmlWebpackPlugin({
	template: './src/template.pug',
});

module.exports = {
	mode: 'development',
	entry: './src/bundle.js',
	resolve: {
		alias: {
			Assets: path.resolve(__dirname, 'src/assets'),
		},
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'assets/[name][hash][ext]',
		clean: true,
	},

	module: {
		rules: [sass, pug, image],
	},

	plugins: [htmlTemplate],
};
