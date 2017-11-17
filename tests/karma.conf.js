module.exports = (config) => {
    'use strict';

    config.set({
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // testing framework to use (jasmine/mocha/qunit/...)
        // as well as any additional frameworks (requirejs/chai/sinon/...)
        frameworks: [
            'jasmine'
        ],

        // list of files / patterns to load in the browser
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/angular-touch/angular-touch.js',
            'src/ng-accessibility-bar.module.js',
            'src/ng-accessibility-bar.module.spec.js',
            'src/**/*.js'
        ],

        // list of files / patterns to exclude
        exclude: [
        ],

        // web server port
        port: 8081,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],
        //browsers: ['Chrome'],

        // Which plugins to enable
        plugins: [
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-spec-reporter',
            'karma-coverage',
            'karma-jasmine',
            'karma-threshold-reporter',
            'karma-babel-preprocessor',
            'karma-junit-reporter',
        ],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true,

        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        preprocessors: {
        // source files, that you wanna generate coverage for
        // do not include tests or libraries
        // (these files will be instrumented by Istanbul)
            'src/**/!(*.spec).js': ['coverage'],
            'src/**/*.spec.js': ['babel']
        },
        // the configure thresholds
        thresholdReporter: {
            statements: 80,
            branches: 80,
            functions: 80,
            lines: 80
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec', 'threshold', 'coverage', 'junit'],
        coverageReporter: {
            dir : 'tests/',
            reporters: [
                { type: 'html', subdir: 'coverage/' },
                { type: 'cobertura', subdir: '../coverage/', file: 'cobertura-coverage.xml' }
            ]
        },
        babelPreprocessor: {
            options: {
                presets: ['es2015']
            },
            filename: function(file) {
                return file.originalPath.replace(/\.js$/, '.es5.js');
            },
            sourceFileName: function(file) {
                return file.originalPath;
            }
        },
        junitReporter: {
            outputDir: '',
            outputFile: 'tests.xml',
            suite: '',
            useBrowserName: false,
            nameFormatter: undefined,
            classNameFormatter: undefined,
            properties: {},
            xmlVersion: null
        }
    });
};
