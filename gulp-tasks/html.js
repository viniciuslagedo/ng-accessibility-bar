'use strict';

const gulp = require('gulp'),
    config = require('./config'),
    htmlmin = require('gulp-htmlmin'),
    templateCache = require('gulp-angular-templatecache');

// Task To move and minify html files
gulp.task('html', () => {
    return gulp
        .src([`${config.paths.src}/index.html`])
        .pipe(htmlmin({collapseWhitespace: true, minifyCSS: true}))
        .pipe(gulp.dest(global.pathDestination.path));
});

gulp.task('template-cache', () => {
    return gulp
        .src([`${config.paths.src}/${config.projectModule}.template.html`])
        .pipe(htmlmin({collapseWhitespace: true, minifyCSS: true}))
        .pipe(templateCache(`${config.projectModule}.templates.js`, {
            module: config.projectModule
        }))
        .pipe(gulp.dest(config.paths.src));
});
