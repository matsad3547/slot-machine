'use strict';

const gulp = require('gulp');
const gutil = require("gulp-util");
const webpack = require('webpack');
const webpackConfig = require("../webpack.config.js");


module.exports = function() {

  return function(callback) {
    let myConfig = Object.create(webpackConfig);

    webpack(myConfig, function(err, stats) {

      if(err) throw new gutil.PluginError("webpack:build", err);
      gutil.log("[webpack:build]", stats.toString({
        colors: true
      }));

      callback();
    });
  }
};

