'use strict';

var application = {
    initModule: function initModule() {
        beforeEach(() => {
            module('ng-accessibility-bar');
        });
    }
};

describe('Module: ng-accessibility-bar', () => {
    var module,
        dependencies = [];

    const hasModule = module => dependencies.indexOf(module) >= 0;

    application.initModule();

    it('Defined Modules', () => {
        expect(hasModule('ng-accessibility-bar')).toBeDefined();
    });
});
