'use strict';

const path = require('path');

module.exports = {
  // context: __dirname + "/app",
  entry: "./src/home",
  output: {
    path: "./public",
    filename: "bundle.js",
    library: 'home'
  },
  module : {
    loaders: [{
      test   : /.js$/,
      loader : 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },
  devtool: 'source-map'
};
