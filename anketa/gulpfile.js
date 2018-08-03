'use strict';
const gulp = require('gulp');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const svgSprite = require('gulp-svg-sprites');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const errorNotifier = require('gulp-error-notifier');
const cleanCss = require('gulp-clean-css');
const gulpIf = require('gulp-if');
const uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
const isDevelopment = true;
const Config = {
  path: {
    assets: 'src',
    build: 'dist'
  },
  reload: {
    proxy: 'anketa.sl',
    port: 3000
  },
  scripts: [
    // plugins
    'node_modules/jquery/dist/jquery.js',
    'node_modules/aos/dist/aos.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    // scripts
    'src/js/setting.js',
    'src/js/app.js'
  ]
};
//scss
gulp.task('scss', function() {
  gulp
    .src(Config.path.assets + '/scss/**/*.scss')
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
      .pipe(errorNotifier.handleError(scss({
        outputStyle: 'compressed'
      })))
    .pipe(
      autoprefixer({
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']
        // cascade: false
      })
    )
    .pipe(cssmin())
    .pipe(concat('app.min.css'))
    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
    .pipe(gulp.dest(Config.path.build + '/css'))
    .pipe(browserSync.stream());
});

// Scripts
gulp.task('scripts', function() {
  gulp
    .src(Config.scripts)
    // .pipe(sourcemaps.init())
    .pipe(errorNotifier())
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(Config.path.build + '/js'));
});

// SVG Sprites
gulp.task('sprite', function() {
  gulp
    .src(Config.path.assets + '/sprite-source/*.svg')
    .pipe(
      svgSprite({
        mode: 'symbols',
        preview: false,
        svg: {
          sprite: 'symbols.svg'
        }
      })
    )
    .pipe(gulp.dest(Config.path.build));
});

// Serve
gulp.task('serve', ['scss', 'scripts', 'sprite',], function() {
  browserSync.init({
    proxy: Config.reload.proxy
  });
  gulp.watch(Config.path.assets + '/scss/**/*.scss', ['scss']);
  gulp
    .watch(Config.path.assets + '/js/**/*.js', ['scripts'])
    .on('change', browserSync.reload);
  gulp
    .watch(Config.path.templates + '/**/*.twig')
    .on('change', browserSync.reload);
  gulp
    .watch(Config.path.assets + '/sprite-source/*.svg', ['sprite'])
    .on('change', browserSync.reload);
  gulp.watch('**/*.php').on('change', browserSync.reload);
});

// Watch
gulp.task('watch', ['scss', 'scripts', 'sprite'], function() {
  gulp.watch(Config.path.assets + '/scss/**/*.scss', ['scss']);
  gulp.watch(Config.path.assets + '/js/**/*.js', ['scripts']);
   gulp.watch(Config.path.assets + '/sprite-source/*.svg', ['sprite']);
});
