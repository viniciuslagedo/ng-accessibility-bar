'use strict';

const gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    config = require('./config'),
    spa = require('browser-sync-spa'),
    reload = browserSync.reload,
    runSequence = require('run-sequence');

exports.reload = reload;

// Task to start a dev server
gulp.task('serve:dev', (done) => {
    runSequence('build:dev', 'serve', done);
});

// Task to simulate and start a production server
gulp.task('serve:prod', (done) => {
    runSequence('build:prod', 'serve', done);
});

// Task to start a local server
gulp.task('serve', () => {
    browserSync.use(
        spa({
            selector: `[${config.projectModule}]`,
            history: {
                index: '/index.html'
            }
        })
    );

    browserSync.init({
        server: {
            baseDir: global.pathDestination.path,
            port: config.server.port,
            ui: {
                port: config.server.portUi
            },
            ghostMode: false,
            open: false
        }
    });

    gulp.watch(config.assets.stylesBundles, ['styles:bundles']);
    gulp.watch(config.assets.scriptsBundles, ['scripts:bundles']);
    gulp.watch(config.assets.htmls, ['html']).on('change', browserSync.reload);
});
