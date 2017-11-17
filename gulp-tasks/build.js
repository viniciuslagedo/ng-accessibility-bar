'use strict';

const gulp = require('gulp'),
    destination = require('./destination'),
    runSequence = require('run-sequence');

// Task to build dev environment
gulp.task('build:dev', (done) => {
    global.pathDestination = destination('dev');

    runSequence(
        'clean',
        'lint',
        'html',
        'template-cache',
        'styles:bundles',
        'styles:vendors',
        'scripts:bundles',
        'scripts:vendors',
        'clean:templates',
        done
    );
});

// Task to build production environment
gulp.task('build:prod', (done) => {
    global.pathDestination = destination('prod');

    runSequence(
        'clean',
        'lint',
        'template-cache',
        'styles:bundles',
        'scripts:bundles',
        'clean:templates',
        done
    );
});
