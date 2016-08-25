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
    ],
    noParse: [
      /node_modules\/sinon\//
    ]
  }
};
