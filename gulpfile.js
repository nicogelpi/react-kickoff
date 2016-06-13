const gulp = require('gulp');
const sass = require('gulp-sass');
const notify = require('gulp-notify');
const browserify = require('browserify');
const babelify = require('babelify');
const watchify = require('watchify');
const autoprefixer = require('gulp-autoprefixer');
const source = require('vinyl-source-stream');
const historyApiFallback = require('connect-history-api-fallback');

const browserSync = require('browser-sync');
const reload = browserSync.reload;

// Define Variables
const mainSass = './Sources/*.scss';
const initFolder = './Sources/';
const initScript = 'app.js';
const watch = './Sources/**/*';
const dest = './static/';

function buildScript(file, watch) {
  var props = {
    entries: [initFolder + file],
    debug : true,
    cache: {},
    packageCache: {},
    transform:  [babelify.configure({
      presets: ['es2015', 'react']
    })]
  };

  // watchify() if watch requested, otherwise run browserify() once
  var bundler = watch ? watchify(browserify(props)) : browserify(props);

  function rebundle() {
    var stream = bundler.bundle();
    return stream
      .on('error', function() {
        var args = Array.prototype.slice.call(arguments);
        notify.onError({
          title: 'Compile Error',
          message: '<%= error.message %>'
        }).apply(this, args);
        this.emit('end');
      })
      .pipe(source(file))
      .pipe(gulp.dest(dest))
      .pipe(reload({stream:true}));
  }

  // listen for an update and run rebundle
  bundler.on('update', function() {
    rebundle();
  });

  // run it once the first time buildScript is called
  return rebundle();
}

gulp.task('minify-styles', function() {
  return gulp.src(mainSass)
  // Pipe Sass Processor
  .pipe(sass().on('error', sass.logError))

  // Pipe CSS Autoprefixer
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  // Pipe Output
  .pipe(gulp.dest(dest));
});

gulp.task('minify-scripts', function() {
  return buildScript(initScript, false);
});

gulp.task('browser-sync', function() {
  browserSync({
    server : {},
    middleware : [ historyApiFallback() ],
    ghostMode: false
  });
});

gulp.task('watch', function() {
  gulp.watch(watch, ['minify-styles', 'minify-scripts']);
  return buildScript(initScript, true);
});

gulp.task('dev', ['build', 'browser-sync', 'watch']);

gulp.task('build', ['minify-styles', 'minify-scripts']);

gulp.task('default', ['build']);
