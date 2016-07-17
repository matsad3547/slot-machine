'use strict';

const gulp = require('gulp');
const notifier = require('node-notifier');
const gUtil = require("gulp-util");
const webpack = require('webpack');


module.exports = function(options) {

  return function(callback) {
    let myConfig = Object.create(options.webpackConfig);

    webpack(myConfig, function(err, stats) {
      if(err) {
        throw new gUtil.PluginError("webpack:build", err);
      }

      gUtil.log("[webpack:build]", stats.toString({
        colors: true
      }));

      callback();
    });
  }
};

