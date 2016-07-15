'use strict';

let gulp = require('gulp');
let path = require('path');

let helper = require('./gulp-modules/_helper'),
  config = require('./gulp-modules/_config.json');

let WATCH = config.watchPaths,
  TSK = config.tasksPaths;

gulp.task('build', [
  'babel',
]);

gulp.task('watch', function () {
  gulp.watch(
    WATCH.webpack,
    ['webpack']
  );
});

helper.lazyTask('server', './server');

helper.lazyTask('webpack', './webpack');
