"use strict";

let lite = require('lite-server').server;

module.exports = function(options) {
    return function () {
        lite();
    }
};