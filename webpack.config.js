var path = require('path')
var webpack = require('webpack')

module.exports = {
	// context: path.resolve(__dirname, './src'),
	// 输入文件
	entry: {
		app: './src/app.js',
		about: './src/about.js',
		projects: './src/projects.js',
		process: './src/process.js',
		serves: './src/serves.js',
	},
	// 输出文件
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist/',
		filename: '[name].js'
	},
	// 压缩代码
	plugins: [
		new webpack.optimize.UglifyJsPlugin()
	],
	module : {
		rules:[
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
			test: /\.(jpg|jpeg|png|gif)$/,
			use: [
				// {
				// 	loader: 'file-loader',
				// 	options: {
				// 		publicPath: '',
				// 		outputPath: 'asset/',
				// 		useRelativePath: true
				// 	}
				// }
				{
					loader: 'url-loader',
					options: {
						limit: 5000,
						publicPath: '',
						// outputPath: 'asset/',
						useRelativePath: true
					}
				}
			]
			// loader: 'url-loader?limit=8192&name=./[name].[ext]'
			},
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader'
				},
			{
			test: /\.styl$/,
			loader: 'style-loader!css-loader!stylus-loader'
			}
		]
	}
}