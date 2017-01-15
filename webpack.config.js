const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    bundle: [
      'babel-polyfill',
      APP_DIR + '/index.scss',
      APP_DIR + '/index.js'
    ]
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract([
          'css-loader?-url&sourceMap',
          'postcss-loader?sourceMap',
          'sass-loader?sourceMap'
        ])
      },
      {
        test : /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        include : APP_DIR,
        loaders : ['babel-loader', 'eslint-loader']
      }
    ]
  },
  plugins: [ new ExtractTextPlugin('bundle.css')],
  eslint: { failOnError: true},
  devServer: { inline: true },
  resolveLoader: { 
    fallback: path.join(__dirname, 'node_modules') 
  },
  resolve: {
    alias: {
      '~': path.resolve(APP_DIR)
    },
    fallback: path.join(__dirname, 'node_modules')
  }
};
