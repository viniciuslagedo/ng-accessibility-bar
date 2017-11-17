const gulp = require('gulp');

// Load gulp tasks
require('fs')
    .readdirSync('./gulp-tasks')
    .filter((file) => {
        return (/\.(js)$/i).test(file);
    })
    .map((file) => {
        require('./gulp-tasks/' + file);
    });

// Task serve is default
gulp.task('default', ['serve:dev']);
