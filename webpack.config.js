const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  devtool: 'inline-source-map',
  entry: ['babel-polyfill', APP_DIR + '/index.js'],
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test : /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        include : APP_DIR,
        loader : 'babel-loader',
        query: {
          retainLines: true
        }
      }
    ]
  }
};
