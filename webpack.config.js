const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    'babel-polyfill',
    './app/scripts/entry_points/index.tsx',
    './app/styles/index.scss'
  ],
  output: {
    path: './dist/',
    filename: 'js/bundle.js'
  },
  // Enable sourcemaps for debugging webpack's output.
  // devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [
      '',
      '.webpack.js',
      '.web.js',
      '.ts',
      '.tsx',
      '.js'
    ]
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader!ts-loader'
      },
      {
        // output .css file (not into JavaScript)
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./css/[name].css'),
    new CopyWebpackPlugin([
      { from: './statics/' }
    ], {
      ignore: [
        '.DS_Store'
      ]
    })
  ],
  sassLoader: {
    sourceComments: true
  },
  postcss: [
    autoprefixer({
      browser: [
        'ie >= 11',               // IE
        'ie_mob >= 10',           // IE Mobile
        'last 2 edge versions',   // Microsoft Edge
        'ff >= 40',               // Firefox
        'chrome >= 44',           // Google Chrome
        'last 2 safari versions', // Safari
        'ios >= 8',               // iOS
        'android >= 4.4',         // Android
        'bb >= 10'                // BlackBerry
      ]
    })
  ]
};
