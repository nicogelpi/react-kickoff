let ls = require('lite-server');
let server;

// Run and Stop Lite-Server Silent for Protractor
before(function() {
  // Set Defaults
  ls.defaults.open = false;
  ls.defaults.port = 3000;
  ls.defaults.logLevel = 'silent';
  ls.defaults.server = {
    middleware: {
      0: null
    }
  };

  server = ls.server();
});

after(function() {
  server.exit();
});
