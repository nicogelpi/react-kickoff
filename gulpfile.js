const gulp = require('gulp');
const webpack = require('webpack-stream');
const liteServer = require('lite-server');

// Define Variables
const dest = 'dist/';
const watch = 'src/**/*';
const mainJs = 'src/index.js';
const webpackFile = './webpack.config.js';

gulp.task('build', function() {
  return gulp.src(mainJs)
    .pipe(webpack(require(webpackFile)))
    .pipe(gulp.dest(dest));
});

gulp.task('browser-sync', function() {
  liteServer.defaults.files = [ dest + '*.*'];
  liteServer.server();
});

gulp.task('watch', function() {
  gulp.watch(watch, ['build']);
});

gulp.task('dev', ['build', 'browser-sync', 'watch']);

gulp.task('default', ['build']);
