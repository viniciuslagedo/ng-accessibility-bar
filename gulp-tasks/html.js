'use strict';

const gulp = require('gulp'),
    config = require('./config'),
    htmlmin = require('gulp-htmlmin');

// Task To move and minify html files
gulp.task('html', () => {
    return gulp
        .src([config.assets.htmls, '!**/.index.html'])
        .pipe(htmlmin({collapseWhitespace: true, minifyCSS: true}))
        .pipe(gulp.dest(global.pathDestination.path));
});
