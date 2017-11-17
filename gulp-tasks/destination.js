'use strict';

const config = require('./config'),
    environments = {
        'dev': config.dev,
        'prod': config.prod
    };

module.exports = (environment) => {
    return environments[environment];
};
