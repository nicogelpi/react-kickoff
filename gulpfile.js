const gulp = require('gulp');
const webpack = require('webpack-stream');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const liteServer = require('lite-server');

// Define Variables
const webpackFile = './webpack.config.js';
const mainSass = 'src/*.scss';
const mainJs = 'src/index.js';
const watch = 'src/**/*';
const dest = 'dist/';

gulp.task('minify-styles', function() {
  return gulp.src(mainSass)
  .pipe(sourcemaps.init())
  // Pipe Sass Processor
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))

  // Pipe CSS Autoprefixer
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(sourcemaps.write())
  // Pipe Output
  .pipe(gulp.dest(dest));
});

gulp.task('webpack', function() {
  return gulp.src(mainJs)
    .pipe(webpack(require(webpackFile)))
    .pipe(gulp.dest(dest));
});

gulp.task('browser-sync', function() {
  liteServer.defaults.files = [ dest + '*.*'];
  liteServer.server();
});

gulp.task('watch', function() {
  gulp.watch(watch, ['minify-styles', 'webpack']);
});

gulp.task('dev', ['build', 'browser-sync', 'watch']);

gulp.task('build', ['minify-styles', 'webpack']);

gulp.task('default', ['build']);
