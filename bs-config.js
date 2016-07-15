'use strict';

let fallback = require('connect-history-api-fallback');
let log = require('connect-logger');

module.exports = {
    port: 3000,
    watchOptions: {
        ignored: [
            'node_modules',
            'src',
            'gulp-modules',
            'gulpfile.js',
            'bs-config.js'
        ]
    },
    server: {
        baseDir: "./",
        directory: true,
        middleware: [
            log({format: '%date (%time) %status %method [%url]'}),
            fallback({
                index: '/index.html',
                htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'] // systemjs workaround
            })
        ]
    }
};