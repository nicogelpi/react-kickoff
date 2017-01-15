const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    bundle: [
      'babel-polyfill',
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
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loaders: [
          'file-loader?name=/res/[name].[ext]',
          'image-webpack?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}' 
        ]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract([
          'css-loader?sourceMap',
          'postcss-loader?sourceMap',
          'sass-loader?sourceMap'
        ])
      },
      {
        test : /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        include : APP_DIR,
        loaders : ['react-hot', 'babel-loader', 'eslint-loader']
      }
    ]
  },
  plugins: [ 
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('bundle.css')
  ],
  eslint: { failOnError: true},
  devServer: { hot:true, inline: true },
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
