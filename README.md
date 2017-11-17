
[![npm](https://img.shields.io/npm/v/ng-accessibility-bar.svg?style=flat-square)](https://www.npmjs.com/package/ng-accessibility-bar)
[![GitHub release](https://img.shields.io/github/release/viniciuslagedo/ng-accessibility-bar.svg?style=flat-square)]()

# ng-accessibility-bar
Accessibility bar component for Angular 1.6

#### Features
- Buttons to Increment/Decrement font size
- Button to toggle high contrast version based on body class
- Button to LIBRAS (Língua brasileira de sinais)

## Quick Start

### Install

```bash
npm install ng-accessibility-bar --save
```

### Config

Add script with minified file

```html
<script type="text/javascript" src="node_modules/ng-accessibility-bar/dist/ng-accessibility-bar.js"></script>
```

(optional) Add link for css file

```html
<link rel="stylesheet" href="node_modules/ng-accessibility-bar/dist/ng-accessibility-bar.css">
```

Add component module as dependency

```javascript
angular.module('application', [
    'ng-accessibility-bar',
]);
```

### Use

Add component wherever you want

```html
<accessibility-bar></accessibility-bar>
```

## Options
Make some customization with attributes

```html
<accessibility-bar
  contrast="false"
  contrast-class="hight-contrast"
  font-adjust="true"
  font-adjust-max-size="40"
  font-adjust-min-size="12"
  font-adjust-increment-rate="5"
  libras="false"
  title="Accessibility:"
>
</accessibility-bar>
```

|Key|Description|Type|Default|
|---|---|---|---|
|contrast|Show and hide contrast button|boolean|true|
|contrast-class|Define custom class name for high contrast version|string|color-inverter|
|font-adjust|Show and hide buttons for font adjust|boolean|true|
|font-adjust-max-size|Define custom maximum size for font adjust|integer|20|
|font-adjust-min-size|Define custom minimum size for font adjust|integer|16|
|font-adjust-increment-rate|Define custom increment rate for font adjust|integer|2|
|libras|Show and hide buttons for libras|boolean|true|
|title|Define custom mititle for bar|string|Acessibilidade:|

## Authors
- [Lucas Stoque](https://github.com/stoque)
- [Vinícius Lagêdo](https://github.com/viniciuslagedo)
- [Marcelo Brito](https://github.com/marcelobritonet)
