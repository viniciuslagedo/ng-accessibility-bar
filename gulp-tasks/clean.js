'use strict';

const gulp = require('gulp'),
    del = require('del'),
    config = require('./config');

// Task to delete the dev or production folder
gulp.task('clean', () => {
    return del(global.pathDestination.path);
});

gulp.task('clean:templates', () => {
    return del(`${config.assets.templates}`);
});
