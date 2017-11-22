!function(){"use strict";angular.module("ng-accessibility-bar",["ngTouch"])}(),function(){"use strict";function t(){return{templateUrl:"ng-accessibility-bar.template.html",controller:i,controllerAs:"vm",bindings:{contrast:"<",contrastClass:"@",fontAdjust:"<",fontAdjustMaxSize:"<",fontAdjustMinSize:"<",fontAdjustIncrementRate:"<",libras:"<",title:"@"}}}function i(){function t(){i(),n(r.config)}function i(){r.config={contrast:{"class":r.contrastClass||"color-inverter",visibility:r.contrast!==!1},fontAdjust:{incrementRate:r.fontAdjustIncrementRate||2,maxSize:r.fontAdjustMaxSize||20,minSize:r.fontAdjustMinSize||16,visibility:r.fontAdjust!==!1},libras:{visibility:r.libras!==!1},title:r.title||"Acessibilidade:"}}function s(t,i){var s=document.querySelector(t);s.classList.contains(i)?s.classList.remove(i):s.classList.add(i)}function n(t){"true"===localStorage.getItem("accessibility-contrast")&&t.contrast.visibility&&l(t)}function e(){var t=window.getComputedStyle(document.body).getPropertyValue("font-size");return t=t.replace(/\D/g,""),t=+t}function c(t){var i,s=document.querySelector("html");i="-"===t?u>r.config.fontAdjust.minSize:u<r.config.fontAdjust.maxSize,i&&("+"===t?u+=r.config.fontAdjust.incrementRate:u-=r.config.fontAdjust.incrementRate,s.setAttribute("style","font-size: "+u+"px;"))}function o(){c("+")}function a(){c("-")}function l(t){var i=document.querySelector("body");s("body",t.contrast["class"]),localStorage.setItem("accessibility-contrast",i.classList.contains(t.contrast["class"]))}var r=this,u=e();r.config={},r.$onInit=t,r.decreaseFontSize=a,r.increaseFontSize=o,r.setContrast=l}angular.module("ng-accessibility-bar").component("ngAccessibilityBar",t())}(),angular.module("ng-accessibility-bar").run(["$templateCache",function(t){t.put("ng-accessibility-bar.template.html",'<svg style="position:absolute;width:0;height:0;overflow:hidden" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-hand" viewBox="0 0 32 32"><title>hand</title><path d="M28.593 6.769c0 1.020-0.827 1.846-1.846 1.846s-1.846-0.827-1.846-1.846c0-1.020 0.827-1.846 1.846-1.846s1.846 0.827 1.846 1.846z"></path><path d="M23.67 3.077c0 1.020-0.827 1.846-1.846 1.846s-1.846-0.827-1.846-1.846c0-1.020 0.827-1.846 1.846-1.846s1.846 0.827 1.846 1.846z"></path><path d="M18.747 1.846c0 1.020-0.827 1.846-1.846 1.846s-1.846-0.827-1.846-1.846c0-1.020 0.827-1.846 1.846-1.846s1.846 0.827 1.846 1.846z"></path><path d="M13.824 4.308c0 1.020-0.827 1.846-1.846 1.846s-1.846-0.827-1.846-1.846c0-1.020 0.827-1.846 1.846-1.846s1.846 0.827 1.846 1.846z"></path><path d="M24.901 6.769v8c0 0.34-0.276 0.615-0.615 0.615s-0.615-0.276-0.615-0.615v-11.692h-3.692v10.462c0 0.34-0.276 0.615-0.615 0.615s-0.615-0.276-0.615-0.615v-11.692h-3.692v11.692c0 0.34-0.276 0.615-0.615 0.615s-0.615-0.276-0.615-0.615v-9.231h-3.692v15.385l-2.492-3.41c-0.738-1.138-2.18-1.52-3.236-0.868-1.052 0.667-1.313 2.122-0.585 3.257 0 0 4.020 6.084 5.733 8.688s4.489 4.641 9.679 4.641c8.593 0 9.362-6.636 9.362-8.615s0-16.615 0-16.615h-3.692z"></path></symbol><symbol id="icon-contrast" viewBox="0 0 32 32"><title>contrast</title><path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM4 16c0-6.627 5.373-12 12-12v24c-6.627 0-12-5.373-12-12z"></path></symbol></defs></svg><div class="accessibility-bar-wrapper"><span class="text">{{ vm.config.title }}</span><div class="list"><div class="item" ng-if="vm.config.fontAdjust.visibility"><button class="action" type="button" ng-click="vm.decreaseFontSize()" ng-keypress="vm.decreaseFontSize()">A-</button></div><div class="item" ng-if="vm.config.fontAdjust.visibility"><button class="action" type="button" ng-click="vm.increaseFontSize()" ng-keypress="vm.increaseFontSize()">A+</button></div><div class="item" ng-if="vm.config.contrast.visibility"><button class="action" type="button" ng-click="vm.setContrast(vm.config)" ng-keypress="vm.setContrast(vm.config)"><svg class="icon"><use xlink:href="#icon-contrast"></use></svg></button></div><div class="item" ng-if="vm.config.libras.visibility"><a class="link" target="_blank" href="http://www.vlibras.gov.br/"><svg class="icon"><use xlink:href="#icon-hand"></use></svg></a></div></div></div>')}]);
//# sourceMappingURL=ng-accessibility-bar.js.map
