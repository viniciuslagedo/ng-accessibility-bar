'use strict';

const paths = {
    dev: '.dev',
    prod: 'dist',
    src: 'src'
};

module.exports = {
    assets: {
        htmls: `${paths.src}/**/*.html`,
        js: `${paths.src}/js/**/*`,
        stylesBundles: `${paths.src}/*.sass`,
        stylesVendors: [
        ],
        scriptsBundles: [
            `${paths.src}/ng-accessibility-bar.module.js`,
            `${paths.src}/*.js`,
            `!${paths.src}/*.spec.js`
        ],
        scriptsVendors: [
            './node_modules/angular/angular.js',
            './node_modules/angular-touch/angular-touch.js',
        ]
    },
    base: __dirname.replace(require('path').basename(__dirname), ''),
    dev: {
        js: `${paths.dev}/`,
        path: `${paths.dev}/`,
        styles: `${paths.dev}/`
    },
    prod: {
        js: `${paths.prod}/`,
        path: `${paths.prod}/`,
        styles: `${paths.prod}/`
    },
    paths: paths,
    projectModule: 'ng-accessibility-bar',
    server: {
        browser: require('os').platform() === 'win32' ? 'chrome' : 'google chrome',
        mainHTML: `${paths.src}/index.html`,
        port: 3000,
        portUi: 3001,
        uri: 'http://localhost:3000/'
    }
};
