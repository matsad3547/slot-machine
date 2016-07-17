'use strict';

const path = require('path');

module.exports = {
  // context: __dirname + "/app",
  entry: "./src/js/main",
  output: {
    path: "./public",
    filename: "slot-machine.js",
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
