exports.config = {
  framework: 'mocha',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['protractor-lite-server.conf.js', 'src/**/*.spec.e2e.js'],
  mochaOpts: {
    enableTimeouts: false
  },
  onPrepare: function() {
    browser.ignoreSynchronization = true;
  }
};
