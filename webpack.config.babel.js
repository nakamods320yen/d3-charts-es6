import 'babel-polyfill';
import path from 'path';
import webpack from 'webpack';

const DEBUG = !process.argv.includes('--release');
const VERBOSE = process.argv.includes('--verbose');

export default {
  cache: DEBUG,

  debug: DEBUG,

  stats: {
    colors: true,
    reasons: DEBUG,
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE,
  },

  entry: './src/app.js',

  output: {
    publicPath: '/',
    sourcePrefix: '  ',
    path: path.join(__dirname, 'public'),
    filename: 'app.js',
  },

  target: 'web',

  devtool: DEBUG ? 'cheap-module-eval-source-map' : false,

	resolve: {
		extensions: ['', '.js'],
	},

	module: {
		loaders: [
			{
				test: /\.js$/, include: [path.resolve(__dirname, 'src')],
				loader: 'babel',
			}
		],
	},
	devServer: {
		contentBase: "./public",
		noInfo: false, //  --no-info option
		hot: true,
		inline: true
	},
};
