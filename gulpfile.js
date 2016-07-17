'use strict';

let gulp = require('gulp');

let helper = require('./gulp-modules/_helper'),
  config = require('./gulp-modules/_config.json'),
  webpackConfig = require("./webpack.config.js");

let WATCH = config.watchPaths;


gulp.task('build', [
  'clean',
  'webpack',
  'sass'
]);

gulp.task('watch', function () {
  gulp.watch(
    WATCH.webpack,
    ['webpack']
  );
  gulp.watch(
    WATCH.sass,
    ['sass']
  );
});

helper.lazyTask('clean', './clean', ['public']);

helper.lazyTask('server', './server');

helper.lazyTask('webpack', './webpack', {
  webpackConfig: webpackConfig
});

helper.lazyTask('sass', './sass', {
  src: './src/sass/main.sass',
  dst: './public/'
});
