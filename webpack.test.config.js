const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src');
module.exports = {
  devtool: 'inline-source-map',
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
    ]
  }
};
