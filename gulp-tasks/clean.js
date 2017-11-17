'use strict';

const gulp = require('gulp'),
    del = require('del'),
    config = require('./config');

// Task to delete the dev or production folder
gulp.task('clean', () => {
    return del(global.pathDestination.path);
});

// Task to delete the folder js inside /src/assets to constants
gulp.task('clean:js', () => {
    return del(`${config.paths.assets}/js`);
});
