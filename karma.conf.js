module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['mocha', 'chai'],
    reporters: ['progress', 'coverage'],
    files: [
      'src/index.js',
      'src/**/*spec.js'
    ],
    preprocessors: {
      'src/index.js': ['webpack', 'sourcemap'],
      'src/**/*spec.js': ['webpack', 'sourcemap']
    },
    webpack: require('./webpack.test.config.js'),
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },
    browsers: ['Chrome']
  });
};
