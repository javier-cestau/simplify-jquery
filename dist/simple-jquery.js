!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1)(),window.$=n(2)},function(e,t){var n=["submition","click","change","mouseout","mouseenter","mouseover","mouseout","keydown","keyup","keypress"];e.exports=function(){for(var e=function(){var e=n[t];HTMLElement.prototype[e]=function(t){var n="submition"===e?"submit":e;this.addEventListener(n,t)}},t=0;t<n.length;t++)e();for(var r=function(){var e=n[o];NodeList.prototype[e]=function(t){this.forEach(function(n){n.addEventListener(e,t)})}},o=0;o<n.length;o++)r()}},function(e,t){e.exports=function(e){var t=document.querySelectorAll(e);switch(t.length){case 0:return null;case 1:return t[0];default:return t}}}]);