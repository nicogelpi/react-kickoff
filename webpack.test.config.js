const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src');
module.exports = {
  devtool: 'inline-source-map',
  externals: {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window'
  },
  module: {
    loaders: [
      {
        test: /sinon\.js$/,
        loader: 'imports?define=>false,require=>false'
      },
      {
        test : /\.js?/,
        exclude: /(node_modules|bower_components)/,
        loader : 'babel-loader',
        include : APP_DIR,
        query: {
          retainLines: true,
          plugins: [
            ['istanbul', {
              'exclude': [
                '**/*.spec.js'
              ]
            }]
          ]
        }
      }
    ]
  },
  resolve: {
    alias: {
      sinon: 'sinon/pkg/sinon.js'
    }
  }
};
