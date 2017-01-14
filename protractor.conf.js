const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const basePort = 8080;

let server = new WebpackDevServer(webpack(require('./webpack.config')), { 
  publicPath: '/dist/'
});

require('babel-core/register');
exports.config = {
  framework: 'mocha',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['src/**/*.spec.e2e.js'],
  params: {
    baseServer: `http://localhost:${basePort}`
  },
  mochaOpts: {
    enableTimeouts: false
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    return new Promise((resolve, reject) => {
      server.listen(basePort, 'localhost', (err) => {
        if (err) {
          reject(err);
        }
        else resolve();
      });
    });
  },
  afterLaunch: () => {
    server.close();
  }
};
