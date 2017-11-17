'use strict';

const gulp = require('gulp'),
    path = require('path'),
    karma = require('karma').Server,
    pathKarma = path.resolve('tests/karma.conf.js');

// Unit Tests
gulp.task('test', () => {
    return new karma({
        configFile: pathKarma,
        singleRun: false,
        action: 'watch'
    })
    .start();
});

// Unit Tests pre build
gulp.task('test:build', () => {
    return new karma({
        configFile: pathKarma,
        action: 'watch'
    }, (exitCode) => {
        process.exit(exitCode);
    })
    .start();
});
