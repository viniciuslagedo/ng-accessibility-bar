(function() {
    'use strict';

    angular.module('ng-accessibility-bar')
        .component('ngAccessibilityBar', AccessibilityBar());

    function AccessibilityBar() {
        return {
            templateUrl: 'ng-accessibility-bar.template.html',
            controller: AccessibilityBarComponentController,
            controllerAs: 'vm',
            bindings:{
                contrast: '<',
                contrastClass: '@',
                fontAdjust: '<',
                fontAdjustMaxSize: '<',
                fontAdjustMinSize: '<',
                fontAdjustIncrementRate: '<',
                libras: '<',
                title: '@',
            }
        };
    }

    /* @ngInject */
    function AccessibilityBarComponentController() {
        var vm = this,
            defaultFontSize = _getDefaultWindowFontSize();

        vm.config = {};

        vm.$onInit = onInit;
        vm.decreaseFontSize = decreaseFontSize;
        vm.increaseFontSize = increaseFontSize;
        vm.setContrast = setContrast;

        function onInit() {
            _setDefaultValues();
            _verifyContrast(vm.config);
        }

        function _setDefaultValues() {
            vm.config = {
                contrast: {
                    class: vm.contrastClass || 'color-inverter',
                    visibility: vm.contrast !== false
                },
                fontAdjust: {
                    incrementRate: vm.fontAdjustIncrementRate || 2,
                    maxSize: vm.fontAdjustMaxSize || 20,
                    minSize: vm.fontAdjustMinSize || 16,
                    visibility: vm.fontAdjust !== false
                },
                libras: {
                    visibility: vm.libras !== false
                },
                title: vm.title || 'Acessibilidade:'
            };
        }

        function _toggleClass(element, classe) {
            var $element = document.querySelector(element);

            if ($element.classList.contains(classe)) {
                $element.classList.remove(classe);
            } else {
                $element.classList.add(classe);
            }
        }

        function _switchClass(element, oldClass, newClass) {
            var $element = document.querySelector(element);
            
            if ($element.classList.contains(oldClass)) {
                $element.classList.remove(oldClass);
            }

            $element.classList.add(newClass);
        }

        function _verifyContrast(config) {
            if (localStorage.getItem('accessibility-contrast') === 'true' && config.contrast.visibility) {
                setContrast(config);
            }
        }

        function _getDefaultWindowFontSize() {
            var fontSize = window.getComputedStyle(document.documentElement).getPropertyValue('font-size');
            fontSize = fontSize.replace(/\D/g, '');
            fontSize = +fontSize;

            return fontSize;
        }

        function _adjustFontSize(operator) {
            var $html = document.querySelector('html'),
                prefixFontClassName = 'accessibility-font-',
                currentFontClassName = prefixFontClassName + defaultFontSize,
                isInFontSizeLimit;

            if (operator === '-') {
                isInFontSizeLimit = defaultFontSize > vm.config.fontAdjust.minSize;
            } else {
                isInFontSizeLimit = defaultFontSize < vm.config.fontAdjust.maxSize;
            }

            if (isInFontSizeLimit) {
                if (operator === '+') {
                    defaultFontSize += vm.config.fontAdjust.incrementRate;
                } else {
                    defaultFontSize -= vm.config.fontAdjust.incrementRate;
                }

                $html.setAttribute('style', 'font-size: ' + defaultFontSize + 'px;');
                _switchClass('html', currentFontClassName, prefixFontClassName + defaultFontSize);
            }
        }

        function increaseFontSize() {
            _adjustFontSize('+');
        }

        function decreaseFontSize() {
            _adjustFontSize('-');
        }

        function setContrast(config) {
            var $body = document.querySelector('body');

            _toggleClass('body', config.contrast.class);

            localStorage.setItem('accessibility-contrast', $body.classList.contains(config.contrast.class));
        }
    }
})();
