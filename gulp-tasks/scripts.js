'use strict';

const gulp = require('gulp'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    config = require('./config'),
    eslint = require('gulp-eslint'),
    gulpIf = require('gulp-if'),
    ngAnnotate = require('gulp-ng-annotate'),
    server = require('./server'),
    reload = server.reload,
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

// Task to generate and concat carrentalz scripts
gulp.task('scripts:bundles', () => {
    return gulp
        .src(config.assets.scriptsBundles)
        .pipe(sourcemaps.init())
        .pipe(concat(`${config.projectModule}.js`))
        .pipe(ngAnnotate())
        .pipe(gulpIf(global.pathDestination === config.prod, uglify()))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(global.pathDestination.js))
        .pipe(reload({stream: true}));
});

// Task to generate and concat vendors scripts
gulp.task('scripts:vendors', () => {
    return gulp
        .src(config.assets.scriptsVendors)
        .pipe(concat('vendors.js'))
        .pipe(gulpIf(global.pathDestination === config.prod, uglify()))
        .pipe(gulp.dest(global.pathDestination.js));
});
