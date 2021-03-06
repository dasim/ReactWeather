var path = require("path");

module.exports = {

	entry: './app/app.jsx',

	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},

	resolve: {
		modules: [
			path.resolve(__dirname, 'app/components'),
			path.resolve(__dirname, 'app/api'),
			'node_modules'
		],
		extensions: ['.js', '.jsx']
	},

	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},

	devtool: 'cheap-module-eval-source-map'
};