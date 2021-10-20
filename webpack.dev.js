const path = require('path');
const config = require('./webpack.config');
const {merge} = require('webpack-merge');

let dev = {
	mode: 'development',
	devServer: {
		static: path.resolve(__dirname, './dist'),
		open: true,
		hot: true,
		liveReload: true,
	},

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};

dev = merge(config, dev);

module.exports = dev;
