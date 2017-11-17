module.exports = {
    'extends': 'angular',
    'rules': {
        'indent': [
            'error',
            4, {
                'SwitchCase': 1
            }
        ],
        'quotes': [
            'error',
            'single'
        ],
        'linebreak-style': [
            'off'
        ],
        'semi': [
            'error',
            'always'
        ],
        'eol-last': [
            'error',
            'always'
        ],
        'func-call-spacing': [
            'error',
            'never'
        ],
        'space-before-function-paren': [
            'error',
            'never'
        ],
        'space-before-blocks': [
            'error',
            'always'
        ],
        'func-style': [
            'error',
            'declaration', {
                'allowArrowFunctions': true
            }
        ],
        'no-empty-function': [
            'error'
        ],
        'no-debugger': [
            'error'
        ],
        'no-console': [
            'error', {
                'allow': ['error']
            }
        ],
        // Regras para o angular, usando o componente eslint-plugin-angular
        'angular/controller-name': [
            'error',
            '/[A-z]/'
        ],
        'angular/no-service-method': [
            'off'
        ],
        'angular/log': [
            'off'
        ],
        'angular/document-service': [
            'off'
        ],
        'angular/window-service': [
            'off'
        ],
        'angular/controller-as-vm': [
            'off'
        ]
    },
    'env': {
        'browser': true,
        'es6': true
    },
    'plugins': [
        'react',
        'jsx-a11y',
        'import'
    ]
};
