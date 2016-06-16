const extractTextPlugin = require('extract-text-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const glob = require('glob');
const path = require('path');

const entry = (fileLists => {
  console.log(fileLists);
  const result = {};

  fileLists.forEach(files => files.forEach(filePath => {
    const fileName = path.basename(filePath);
    const fileNameWithoutExt = fileName.substr(0, fileName.lastIndexOf('.'));
    if (result[fileNameWithoutExt] == null) {
      result[fileNameWithoutExt] = ['babel-polyfill'];
    }

    result[fileNameWithoutExt].push(filePath);
  }));

  return result;
})([
  // TypeScript or JavaScript
  ...(process.env.__JS__ ? [
    glob.sync('./app/scripts/entry_points/*.js'),
    glob.sync('./app/scripts/entry_points/*.jsx')
  ] : [
    glob.sync('./app/scripts/entry_points/*.ts'),
    glob.sync('./app/scripts/entry_points/*.tsx')
  ]),
  // SCSS
  glob.sync('./app/styles/[^_]*.scss')
]);


module.exports = {
  entry,
  output: {
    path: './dist/',
    filename: 'js/[name].js'
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
      '.js',
      '.jsx'
    ]
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader!ts-loader'
      },
      {
        // output .css file (not into JavaScript)
        test: /\.scss$/,
        loader: extractTextPlugin.extract('style', 'css!postcss!sass')
      }
    ]
  },
  plugins: [
    // new extractTextPlugin('./css/[name].css'),
    new extractTextPlugin('./css/app.css'),
    new copyWebpackPlugin([
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
