const path = require('path');
const webpack = require('webpack');
const OfflinePlugin = require('offline-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  devtool: 'inline-source-map',
  externals: {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window'
  },
  entry: {
    bundle: [
      'babel-polyfill',
      APP_DIR + '/index.js',
      APP_DIR + '/index.html'
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /sinon\.js$/,
        loader: 'imports?define=>false,require=>false'
      },
      {
        test: /\.modernizrrc(\.json)?$/,
        loader: 'modernizr!json'
      },
      {
        test: /index.html/, 
        loaders: [
          'file-loader?name=/[name].[ext]'
        ]  
      },
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
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new OfflinePlugin({
      publicLocation: '/dist'
    })
  ],
  eslint: { failOnError: true },
  devServer: { hot: true, inline: true, historyApiFallback: true },
  resolveLoader: { 
    fallback: path.join(__dirname, 'node_modules') 
  },
  resolve: {
    alias: {
      '~': path.resolve(APP_DIR),
      modernizr$: path.resolve(__dirname, 'modernizrrc.json'),
      sinon: 'sinon/pkg/sinon.js'
    },
    fallback: path.join(__dirname, 'node_modules')
  }
};
