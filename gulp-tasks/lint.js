'use strict';

const gulp = require('gulp'),
    config = require('./config'),
    eslint = require('gulp-eslint');

// Task to verify pattern of JS code with eslint
gulp.task('lint', () => {
    return gulp
        .src(config.assets.scriptsBundles)
        .pipe(eslint())
        .pipe(eslint.format());
});
