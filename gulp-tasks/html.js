'use strict';

const gulp = require('gulp'),
    config = require('./config'),
    htmlmin = require('gulp-htmlmin'),
    templateCache = require('gulp-angular-templatecache');

// Task To move and minify html files
gulp.task('html', () => {
    return gulp
        .src([config.assets.htmls, '!**/.index.html'])
        .pipe(htmlmin({collapseWhitespace: true, minifyCSS: true}))
        .pipe(templateCache('ng-accessibility-bar.templates.js', {
            module: 'ng-accessibility-bar'
        }))
        .pipe(gulp.dest(global.pathDestination.path));
});
