!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=12)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var o=function(){function e(t,r,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.group=(t||"").trim().toLowerCase(),this.name=(r||"default").trim(),this.controls=n||[],this.deepLinkParams=[],o&&o.has(this.group)&&(this.deepLinkParams=o.get(this.group)||[])}return n(e,[{key:"addControl",value:function(e){e&&e.name===this.name&&e.group===this.group&&this.controls.push(e)}},{key:"getDeepLink",value:function(){return""}},{key:"getJumpPath",value:function(){var e="",t=!0,r=!1,n=void 0;try{for(var o,i=this.controls[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;if(a.jump){if("top"===a.jump)return"top";var l=document.querySelector(a.jump);if(l){var u=l.getBoundingClientRect();if(u.width||u.height||u.getClientRects().length)if(e){var s=document.querySelector(e);if(!s)continue;var c=s.getBoundingClientRect();u.top<c.top&&(e=a.jump)}else e=a.jump}}}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}return e}}]),e}();t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t&&(this.element=t,this.type=(t.getAttribute("data-jplist-control")||"").trim().toLowerCase(),this.group=(t.getAttribute("data-group")||"").trim().toLowerCase(),this.name=(t.getAttribute("data-name")||t.getAttribute("name")||"default").trim(),this.id=(t.getAttribute("data-id")||"").trim().toLowerCase(),this.jump=(t.getAttribute("data-jump")||"").trim())}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=a(r(0)),i=a(r(6));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"getSortOptions",value:function(){var e=[],t=!0,r=!1,n=void 0;try{for(var o,i=this.controls[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;e=e.concat(a.getSortOptions())}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}return e}},{key:"addControl",value:function(e){if(e.name!==this.name||e.group!==this.group)return null;var t=new i.default(e.element);return this.controls.push(t),t}}]),t}();t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=a(r(0)),i=a(r(8));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"addControl",value:function(e){if(e.name!==this.name||e.group!==this.group)return null;var t=new i.default(e.element);return this.controls.push(t),t}},{key:"getPathFilterOptions",value:function(){var e=[],t=!0,r=!1,n=void 0;try{for(var o,i=this.controls[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;e=e.concat(a.getPathFilterOptions())}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}return e}}]),t}();t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r(46);var o=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t){if(this.element=t,!this.element)return;this.panels=this.element.querySelectorAll('[data-type="panel"]'),this.element.openedClass=(this.element.getAttribute("data-opened-class")||"jplist-dd-opened").trim();var r=!0,n=!1,o=void 0;try{for(var i,a=this.panels[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var l=i.value;l.initialContent=l.innerHTML,l.element=t}}catch(e){n=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}this.contents=this.element.querySelectorAll('[data-type="content"]'),this.handlePanelsClick()}}return n(e,[{key:"handlePanelsClick",value:function(){var e=this;if(this.panels&&!(this.panels.length<=0)){var t=!0,r=!1,n=void 0;try{for(var o,i=function(){var t=o.value;t.addEventListener("click",function(r){var n=!1,o=!0,i=!1,a=void 0;try{for(var l,u=e.contents[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){var s=l.value;s.classList.toggle(t.element.openedClass),s.classList.contains(t.element.openedClass)&&(n=!0)}}catch(e){i=!0,a=e}finally{try{!o&&u.return&&u.return()}finally{if(i)throw a}}n?(t.classList.add(t.element.openedClass),t.element.classList.add(t.element.openedClass)):(t.classList.remove(t.element.openedClass),t.element.classList.remove(t.element.openedClass))})},a=this.panels[Symbol.iterator]();!(t=(o=a.next()).done);t=!0)i()}catch(e){r=!0,n=e}finally{try{!t&&a.return&&a.return()}finally{if(r)throw n}}document.addEventListener("click",function(t){e.element.contains(t.target)||e.close()})}}},{key:"setPanelsContent",value:function(e){var t=!0,r=!1,n=void 0;try{for(var o,i=this.panels[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){o.value.innerHTML=e}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}}},{key:"restorePanelsContent",value:function(){var e=!0,t=!1,r=void 0;try{for(var n,o=this.panels[Symbol.iterator]();!(e=(n=o.next()).done);e=!0){var i=n.value;i.initialContent&&(i.innerHTML=i.initialContent)}}catch(e){t=!0,r=e}finally{try{!e&&o.return&&o.return()}finally{if(t)throw r}}}},{key:"close",value:function(){var e=!0,t=!1,r=void 0;try{for(var n,o=this.contents[Symbol.iterator]();!(e=(n=o.next()).done);e=!0){n.value.classList.remove(this.panels[0].element.openedClass)}}catch(e){t=!0,r=e}finally{try{!e&&o.return&&o.return()}finally{if(t)throw r}}var i=!0,a=!1,l=void 0;try{for(var u,s=this.panels[Symbol.iterator]();!(i=(u=s.next()).done);i=!0){var c=u.value;c.classList.remove(c.element.openedClass),c.element.classList.remove(c.element.openedClass)}}catch(e){a=!0,l=e}finally{try{!i&&s.return&&s.return()}finally{if(a)throw l}}}}]),e}();t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=a(r(0)),i=a(r(30));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"getTextFilterOptions",value:function(){var e=[],t=!0,r=!1,n=void 0;try{for(var o,i=this.controls[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;e=e.concat(a.getTextFilterOptions())}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}return e}},{key:"addControl",value:function(e){if(e.name!==this.name||e.group!==this.group)return null;var t=new i.default(e.element);return this.controls.push(t),t}},{key:"getDeepLink",value:function(){var e=this.controls.map(function(e){return e.id&&""!==e.text.trim()?e.id+"="+e.text.trim():""}).filter(function(e){return""!==e});return Array.from(new Set(e)).join("&")}}]),t}();t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(r(1));var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));if(e){r.path=(e.getAttribute("data-path")||"").trim(),r.dataType=(e.getAttribute("data-type")||"text").trim().toLowerCase(),r.order=(e.getAttribute("data-order")||"asc").trim().toLowerCase(),r.regex=e.getAttribute("data-regex")||"",r.dateTimeFormat=(e.getAttribute("data-date-format")||"").trim().toLowerCase(),r.multipleSortsNumber=r.getMultipleSortsNumber(e);for(var n=1;n<=r.multipleSortsNumber;n++)r["path"+n]=(e.getAttribute("data-path-"+n)||"").trim(),r["dataType"+n]=(e.getAttribute("data-type-"+n)||"text").trim().toLowerCase(),r["order"+n]=(e.getAttribute("data-order-"+n)||"asc").trim().toLowerCase(),r["regex"+n]=e.getAttribute("data-regex-"+n)||"",r["dateTimeFormat"+n]=(e.getAttribute("data-date-format-"+n)||"").trim().toLowerCase()}return r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"getMultipleSortsNumber",value:function(e){var t=0,r=!0,n=!1,o=void 0;try{for(var i,a=e.attributes[Symbol.iterator]();!(r=(i=a.next()).done);r=!0)for(var l=i.value,u=null,s=/^data-path-([0-9]+)$/g;u=s.exec(l.nodeName);){var c=Number(u[1]);Number.isInteger(c)&&t++}}catch(e){n=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}return t}},{key:"getSortOptions",value:function(){var e=[];if(this.path){e.push({path:this.path,dataType:this.dataType,order:this.order,ignoreRegex:this.ignoreRegex,dateTimeFormat:this.dateTimeFormat});for(var t=1;t<=this.multipleSortsNumber;t++)e.push({path:this["path"+t],dataType:this["dataType"+t],order:this["order"+t],ignoreRegex:this["ignoreRegex"+t],dateTimeFormat:this["dateTimeFormat"+t]})}return e}},{key:"isEqualTo",value:function(e){for(var t=!0,r=["path","dataType","order","regex","dateTimeFormat"],n=0;n<r.length;n++)t=t&&this[r[n]]===e[r[n]];t=t&&this.multipleSortsNumber===e.multipleSortsNumber;for(var o=1;o<=this.multipleSortsNumber;o++)for(var i=0;i<r.length;i++)t=t&&this[r[i]+o]===e[r[i]+o];return t}}]),t}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();t.default=function(e){return function(t){function r(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e,t,n,o));return i.group=e,i.name=t,i.checkboxes=[],i.radios=[],i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,e),n(r,[{key:"addControl",value:function(e){var t=this,n=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0}(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"addControl",this).call(this,e);if(n.selected="true"===n.element.getAttribute("data-selected"),n.mode=n.element.getAttribute("data-mode")||"radio",n.id){var o=this.deepLinkParams.find(function(e){return e.key===n.id});o&&(n.selected="1"===o.value)}"radio"===n.mode&&(this.radios.push(n),this.handleRadios()),"checkbox"===n.mode&&(this.checkboxes.push(n),this.handleCheckboxes()),n.element.addEventListener("click",function(e){if(e.preventDefault(),"checkbox"===n.mode&&(n.selected=!n.selected,t.checkboxes.forEach(function(e){e.isEqualTo(n)&&(e.selected=n.selected)}),t.handleCheckboxes()),"radio"===n.mode){var r=!0,o=!1,i=void 0;try{for(var a,l=t.radios[Symbol.iterator]();!(r=(a=l.next()).done);r=!0)a.value.selected=!1}catch(e){o=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}n.selected=!0,t.handleRadios()}window.jplist&&window.jplist.refresh(t.group)})}},{key:"handleCheckboxes",value:function(){var e=!0,t=!1,r=void 0;try{for(var n,o=this.checkboxes[Symbol.iterator]();!(e=(n=o.next()).done);e=!0){var i=n.value;i.selected?i.element.classList.add("jplist-selected"):i.element.classList.remove("jplist-selected"),i.element.checked=i.selected}}catch(e){t=!0,r=e}finally{try{!e&&o.return&&o.return()}finally{if(t)throw r}}}},{key:"getLastSelectedRadio",value:function(){var e=null,t=!0,r=!1,n=void 0;try{for(var o,i=this.radios[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;a.selected&&(e=a)}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}return e}},{key:"handleRadios",value:function(){if(this.radios.length>0){var e=this.getLastSelectedRadio(),t=!0,r=!1,n=void 0;try{for(var o,i=this.radios[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;a.selected=!1,a.element.classList.remove("jplist-selected")}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}e&&this.radios.forEach(function(t){t.isEqualTo(e)&&(t.selected=!0,t.element.checked=!0,t.element.classList.add("jplist-selected"))})}}},{key:"getDeepLink",value:function(){var e=this.checkboxes.map(function(e){return e.id?e.selected?e.id+"=1":e.id+"=0":""}).filter(function(e){return""!==e}),t=this.radios.map(function(e){return e.id&&e.selected?e.id+"=1":""}).filter(function(e){return""!==e}),r=e.concat(t);return Array.from(new Set(r)).join("&")}}]),r}()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(r(1));var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return e&&(r.path=(e.getAttribute("data-path")||"").trim(),r.isInverted="true"===(e.getAttribute("data-inverted")||"").toLowerCase().trim()),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"getPathFilterOptions",value:function(){return{path:this.path,isInverted:this.isInverted}}},{key:"isEqualTo",value:function(e){return this.path===e.path&&this.isInverted===e.isInverted}}]),t}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();t.default=function(e){return function(t){function r(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e,t,n,o));return i.group=e,i.name=t,i.checkboxes=[],i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,e),n(r,[{key:"addControl",value:function(e){var t=this,n=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0}(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"addControl",this).call(this,e);if(n.selected=n.element.checked,n.id){var o=this.deepLinkParams.find(function(e){return e.key===n.id});o&&(n.selected="1"===o.value)}this.checkboxes.push(n),this.handleCheckboxes(),n.element.addEventListener("change",function(e){e.preventDefault(),n.selected=!n.selected,t.checkboxes.forEach(function(e){e.isEqualTo(n)&&(e.selected=n.selected)}),t.handleCheckboxes(),window.jplist&&window.jplist.refresh(t.group)})}},{key:"handleCheckboxes",value:function(){var e=!0,t=!1,r=void 0;try{for(var n,o=this.checkboxes[Symbol.iterator]();!(e=(n=o.next()).done);e=!0){var i=n.value;i.selected?i.element.classList.add("jplist-selected"):i.element.classList.remove("jplist-selected"),i.element.checked=i.selected}}catch(e){t=!0,r=e}finally{try{!e&&o.return&&o.return()}finally{if(t)throw r}}}},{key:"getDeepLink",value:function(){var e=this.checkboxes.map(function(e){return e.id?e.selected?e.id+"=1":e.id+"=0":""}).filter(function(e){return""!==e});return Array.from(new Set(e)).join("&")}}]),r}()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();t.default=function(e){return function(t){function r(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e,t,n,o));return i.group=e,i.name=t,i.radios=[],i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,e),n(r,[{key:"addControl",value:function(e){var t=this,n=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0}(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"addControl",this).call(this,e);if(n.selected=n.element.checked,n.id){var o=this.deepLinkParams.find(function(e){return e.key===n.id});o&&(n.selected="1"===o.value)}this.radios.push(n),this.handleRadios(),n.element.addEventListener("change",function(e){e.preventDefault();var r=!0,o=!1,i=void 0;try{for(var a,l=t.radios[Symbol.iterator]();!(r=(a=l.next()).done);r=!0)a.value.selected=!1}catch(e){o=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}n.selected=!0,t.handleRadios(),window.jplist&&window.jplist.refresh(t.group)})}},{key:"getLastSelectedRadio",value:function(){var e=null,t=!0,r=!1,n=void 0;try{for(var o,i=this.radios[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;a.selected&&(e=a)}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}return e}},{key:"handleRadios",value:function(){if(this.radios.length>0){var e=this.getLastSelectedRadio(),t=!0,r=!1,n=void 0;try{for(var o,i=this.radios[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;a.selected=!1,a.element.classList.remove("jplist-selected")}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}e&&this.radios.forEach(function(t){t.isEqualTo(e)&&(t.selected=!0,t.element.checked=!0,t.element.classList.add("jplist-selected"))})}}},{key:"getDeepLink",value:function(){var e=this.radios.map(function(e){return e.id&&e.selected?e.id+"=1":""}).filter(function(e){return""!==e});return Array.from(new Set(e)).join("&")}}]),r}()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=a(r(0)),i=a(r(40));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"addControl",value:function(e){if(e.name!==this.name||e.group!==this.group)return null;var t=new i.default(e.element);return this.controls.push(t),t}},{key:"getRangeFilterOptions",value:function(){var e=[],t=!0,r=!1,n=void 0;try{for(var o,i=this.controls[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;e=e.concat(a.getRangeFilterOptions())}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}return e}}]),t}();t.default=l},function(e,t,r){"use strict";var n=x(r(13)),o=x(r(20)),i=x(r(21)),a=x(r(22)),l=x(r(23)),u=x(r(24)),s=x(r(25)),c=x(r(26)),f=x(r(29)),d=x(r(31)),p=x(r(32)),h=x(r(33)),v=x(r(34)),y=x(r(35)),b=x(r(36)),g=x(r(37)),m=x(r(38)),w=x(r(39)),O=x(r(41)),_=x(r(43)),j=x(r(4)),P=x(r(44)),k=x(r(45));function x(e){return e&&e.__esModule?e:{default:e}}!function(){if("function"!=typeof window.CustomEvent){var e=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var r=document.createEvent("CustomEvent");return r.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r};e.prototype=window.Event.prototype,window.CustomEvent=e}window.jplist=window.jplist||{},window.jplist.controlTypes=window.jplist.controlTypes||new Map([["hidden-sort",o.default],["sort-buttons",i.default],["radio-buttons-sort",a.default],["checkbox-sort",l.default],["select-sort",u.default],["dropdown-sort",s.default],["pagination",c.default],["textbox-filter",f.default],["checkbox-text-filter",d.default],["radio-buttons-text-filter",p.default],["buttons-text-filter",h.default],["select-filter",v.default],["dropdown-filter",m.default],["checkbox-path-filter",y.default],["radio-buttons-path-filter",b.default],["buttons-path-filter",g.default],["buttons-range-filter",w.default],["slider-range-filter",O.default],["no-results",_.default],["dropdown",j.default],["layout",P.default],["reset",k.default]]);var t=new n.default;window.jplist.init=t.init.bind(t),window.jplist.refresh=t.refresh.bind(t),window.jplist.resetControls=t.resetControls.bind(t)}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(o)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(e){return e&&e.__esModule?e:{default:e}}(r(14));var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"init",value:function(e){this.settings=Object.assign({},{storage:"",storageName:"jplist",cookiesExpiration:-1,deepLinking:!1,hashStart:"#"},e),this.controls=i.default.splitByGroupAndName(this.settings,document.body),this.elements=document.querySelectorAll("[data-jplist-group]"),this.groups=i.default.findGroups(this.elements);for(var t=[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(document.querySelectorAll("[data-jplist-item]"))),r=0;r<t.length;r++)t[r].jplistIndex=r;this.refresh("")}},{key:"refresh",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";i.default.apply(this.settings,this.controls,this.groups,e)}},{key:"resetControls",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(this.controls){var t=!0,r=!1,o=void 0;try{for(var a,l=this.controls[Symbol.iterator]();!(t=(a=l.next()).done);t=!0){var u=n(a.value,2),s=(u[0],u[1]),c=!0,f=!1,d=void 0;try{for(var p,h=s[Symbol.iterator]();!(c=(p=h.next()).done);c=!0){var v=p.value,y=!0,b=!1,g=void 0;try{for(var m,w=v.controls[Symbol.iterator]();!(y=(m=w.next()).done);y=!0){var O=m.value;O.element&&O.element.initialHTML&&(O.element.outerHTML=O.element.initialHTML)}}catch(e){b=!0,g=e}finally{try{!y&&w.return&&w.return()}finally{if(b)throw g}}}}catch(e){f=!0,d=e}finally{try{!c&&h.return&&h.return()}finally{if(f)throw d}}}}catch(e){r=!0,o=e}finally{try{!t&&l.return&&l.return()}finally{if(r)throw o}}}this.controls=i.default.splitByGroupAndName(this.settings,document.body),this.refresh(e)}}]),e}();t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(o)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=f(r(15)),a=f(r(16)),l=f(r(1)),u=f(r(17)),s=f(r(18)),c=f(r(19));function f(e){return e&&e.__esModule?e:{default:e}}function d(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,null,[{key:"apply",value:function(t,r,o){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(r&&o){var u=!0,f=!1,d=void 0;try{for(var p,h=o[Symbol.iterator]();!(u=(p=h.next()).done);u=!0){var v=n(p.value,2),y=v[0],b=v[1];if(l&&l===y||!l){var g=r.get(y),m=e.collectControlsOptions(g),w=!0,O=!1,_=void 0;try{for(var j,P=b[Symbol.iterator]();!(w=(j=P.next()).done);w=!0){var k=j.value,x=k.items.length,S=e.getItemsFragment(k.items);m.sortOptions&&m.sortOptions.length>0&&(i.default.sort(k.items,m.sortOptions),S=e.getItemsFragment(k.items));var C=k.items;if(m.pathFilterOptions){var E=!0,L=!1,T=void 0;try{for(var N,M=m.pathFilterOptions[Symbol.iterator]();!(E=(N=M.next()).done);E=!0){var A=N.value;x=(C=c.default.pathFilter(C,A.path,A.isInverted)).length,S=e.getItemsFragment(C)}}catch(e){L=!0,T=e}finally{try{!E&&M.return&&M.return()}finally{if(L)throw T}}}if(m.rangeFilterOptions){var F=!0,R=!1,D=void 0;try{for(var B,q=m.rangeFilterOptions[Symbol.iterator]();!(F=(B=q.next()).done);F=!0){var I=B.value;x=(C=c.default.rangeFilter(C,I.path,I.from,I.to,I.min,I.max)).length,S=e.getItemsFragment(C)}}catch(e){R=!0,D=e}finally{try{!F&&q.return&&q.return()}finally{if(R)throw D}}}if(m.textFilterOptions){var H=!0,V=!1,W=void 0;try{for(var G,z=m.textFilterOptions[Symbol.iterator]();!(H=(G=z.next()).done);H=!0){var U=G.value;x=(C=c.default.textFilter(C,U.text,U.path,U.mode,U.ignoreRegex)).length,S=e.getItemsFragment(C)}}catch(e){V=!0,W=e}finally{try{!H&&z.return&&z.return()}finally{if(V)throw W}}}if(m.paginationOptions){var Y=new a.default(m.paginationOptions.currentPage,m.paginationOptions.itemsPerPage,C.length,m.paginationOptions.range);if(g.length>0){var J=!0,X=!1,Z=void 0;try{for(var $,K=g[Symbol.iterator]();!(J=($=K.next()).done);J=!0){var Q=$.value;Q.setPaginationOptions&&Q.setPaginationOptions(Y)}}catch(e){X=!0,Z=e}finally{try{!J&&K.return&&K.return()}finally{if(X)throw Z}}}var ee=C.slice(Y.start,Y.end);x=ee.length,S=e.getItemsFragment(ee)}k.root.appendChild(S),e.sendStateEvent(m,x,g)}}catch(e){O=!0,_=e}finally{try{!w&&P.return&&P.return()}finally{if(O)throw _}}e.jump(g)}}}catch(e){f=!0,d=e}finally{try{!u&&h.return&&h.return()}finally{if(f)throw d}}t.deepLinking?e.updateDeepLink(e.getDeepLink(r,o),t.hashStart):t.storage&&s.default.set(e.getDeepLink(r,o),t.storage,t.storageName,t.cookiesExpiration)}}},{key:"jump",value:function(e){if(e&&!(e.length<=0)){var t=-1,r=!0,n=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var l=i.value.getJumpPath();if(l){if("top"===l){t=0;break}var u=document.querySelector(l);if(u){var s=u.getBoundingClientRect();if(u.width||u.height||u.getClientRects().length){var c=document.clientTop||document.body.clientTop||0;t<0?t=s.top+window.pageYOffset-c:s.top+window.pageYOffset-c<t&&(t=s.top+window.pageYOffset-c)}}}}}catch(e){n=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}t>=0&&window.scroll(0,t)}}},{key:"sendStateEvent",value:function(e,t,r){if(r){var n=new CustomEvent("jplist.state");n.jplistState={options:e,itemsNumber:t};var o=!0,i=!1,a=void 0;try{for(var l,u=r[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){var s=l.value,c=!0,f=!1,d=void 0;try{for(var p,h=s.controls[Symbol.iterator]();!(c=(p=h.next()).done);c=!0){p.value.element.dispatchEvent(n)}}catch(e){f=!0,d=e}finally{try{!c&&h.return&&h.return()}finally{if(f)throw d}}}}catch(e){i=!0,a=e}finally{try{!o&&u.return&&u.return()}finally{if(i)throw a}}}}},{key:"collectControlsOptions",value:function(e){var t={sortOptions:[],paginationOptions:null,textFilterOptions:[],pathFilterOptions:[],rangeFilterOptions:[]};if(!e)return t;var r=!0,n=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var l=i.value;l.getSortOptions&&(t.sortOptions=t.sortOptions.concat(l.getSortOptions())),l.getTextFilterOptions&&(t.textFilterOptions=t.textFilterOptions.concat(l.getTextFilterOptions())),l.getPathFilterOptions&&(t.pathFilterOptions=t.pathFilterOptions.concat(l.getPathFilterOptions())),l.getRangeFilterOptions&&(t.rangeFilterOptions=t.rangeFilterOptions.concat(l.getRangeFilterOptions())),l.getPaginationOptions&&(t.paginationOptions=l.getPaginationOptions())}}catch(e){n=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}return t}},{key:"getItemsFragment",value:function(e){var t=document.createDocumentFragment(),r=!0,n=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var l=i.value;t.appendChild(l)}}catch(e){n=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}return t}},{key:"updateDeepLink",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#",r=e.replace(t,"").trim();if(r=""===r?t:t+r,window.location.hash!==r){var n=window.location.href.indexOf(t),o=void 0;o=-1===n?window.location.href+r:window.location.href.substring(0,n)+r,"replaceState"in window.history?window.history.replaceState("","",o):window.location.replace(o)}}},{key:"getDeepLink",value:function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,l=t.keys()[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var u=a.value,s=e.get(u),c=[],f=!0,d=!1,p=void 0;try{for(var h,v=s[Symbol.iterator]();!(f=(h=v.next()).done);f=!0){var y=h.value.getDeepLink();y&&c.push(y)}}catch(e){d=!0,p=e}finally{try{!f&&v.return&&v.return()}finally{if(d)throw p}}c.length>0&&(r.push("group="+u),r=r.concat(c))}}catch(e){o=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(o)throw i}}return r.join("&")}},{key:"findGroups",value:function(e){var t=new Map;if(!e)return t;var r=[].concat(d(e)),n=!0,o=!1,i=void 0;try{for(var a,l=r[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var u=a.value,s=u.getAttribute("data-jplist-group"),c=[];t.has(s)&&(c=t.get(s)),c.push({root:u,items:[].concat(d(u.querySelectorAll("[data-jplist-item]"))),fragment:document.createDocumentFragment()}),t.set(s,c)}}catch(e){o=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(o)throw i}}return t}},{key:"findControls",value:function(e){if(!e)return[];var t=[],r=e.querySelectorAll("[data-jplist-control]");if(r){var n=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(n=(a=u.next()).done);n=!0){var s=a.value;if(s.getAttribute("data-jplist-control")){s.initialHTML=s.outerHTML;var c=new l.default(s);t.push(c)}}}catch(e){o=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}}return t}},{key:"findControlGroups",value:function(e){var t=new Map;if(e){var r=!0,n=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var l=i.value,u=[];t.has(l.group)&&(u=t.get(l.group)),u.push(l),t.set(l.group,u)}}catch(e){n=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}}return t}},{key:"findSameNameControls",value:function(e,t){var r=new Map;if(t){var n=null;if(e.deepLinking)n=u.default.getUrlParams(window.location.hash,e.hashStart);else if(e.storage){var o=s.default.get(e.storage,e.storageName);n=u.default.getUrlParams(o,"")}var i=!0,a=!1,l=void 0;try{for(var c,f=t[Symbol.iterator]();!(i=(c=f.next()).done);i=!0){var d=c.value;if(d.type&&window.jplist.controlTypes.has(d.type)){var p=window.jplist.controlTypes.get(d.type);if(p){var h=null;(h=r.has(d.name)?r.get(d.name):new p(d.group,d.name,[],n)).addControl(d),r.set(d.name,h)}}}}catch(e){a=!0,l=e}finally{try{!i&&f.return&&f.return()}finally{if(a)throw l}}}return r}},{key:"splitByGroupAndName",value:function(t,r){var o=new Map;if(!r)return o;var i=e.findControls(r),a=e.findControlGroups(i),l=!0,u=!1,s=void 0;try{for(var c,f=a[Symbol.iterator]();!(l=(c=f.next()).done);l=!0){var d=n(c.value,2),p=d[0],h=d[1],v=e.findSameNameControls(t,h),y=[],b=!0,g=!1,m=void 0;try{for(var w,O=v.values()[Symbol.iterator]();!(b=(w=O.next()).done);b=!0){var _=w.value;y.push(_)}}catch(e){g=!0,m=e}finally{try{!b&&O.return&&O.return()}finally{if(g)throw m}}o.set(p,y)}}catch(e){u=!0,s=e}finally{try{!l&&f.return&&f.return()}finally{if(u)throw s}}return o}}]),e}();t.default=p},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,null,[{key:"sort",value:function(t,r){return!r||r.length<=0?(t.sort(function(t,r){return e.sortByIndex(t,r)}),t):(t.sort(function(t,n){return e.sortHelper(t,n,r,0)}),t)}},{key:"sortHelper",value:function(t,r,n,o){if(!n||n.length<=0||o>=n.length)return 0;var i=0,a=n[o];if("default"!==a.path)switch(a.dataType){case"number":i=e.sortNumbers(t,r,a.path,a.order);break;case"datetime":i=e.sortDateTime(t,r,a.path,a.order,a.dateTimeFormat);break;default:i=e.sortText(t,r,a.path,a.order,a.ignoreRegex)}else i=e.sortByIndex(t,r);return 0===i&&o+1<n.length&&(i=e.sortHelper(t,r,n,o+1)),i}},{key:"sortText",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"asc",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if(!e||!t)return 0;var i=r?e.querySelector(r):e,a=r?t.querySelector(r):t;if(!i||!a)return 0;var l=i.textContent.trim().toLowerCase(),u=a.textContent.trim().toLowerCase();if(o){var s=new RegExp(o,"ig");l=l.replace(s,"").trim(),u=u.replace(s,"").trim()}return l===u?0:(n||(n="asc"),"".localeCompare?"asc"===n?l.localeCompare(u):u.localeCompare(l):"asc"===n?l>u?1:-1:l<u?1:-1)}},{key:"sortNumbers",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"asc";if(!e||!t)return 0;var o=r?e.querySelector(r):e,i=r?t.querySelector(r):t;if(!o||!i)return 0;var a=o.textContent.trim().toLowerCase(),l=i.textContent.trim().toLowerCase();return a=parseFloat(a.replace(/[^-0-9.]+/g,"")),l=parseFloat(l.replace(/[^-0-9.]+/g,"")),isNaN(a)||isNaN(l)?isNaN(a)&&isNaN(l)?0:isNaN(a)?1:-1:a===l?0:(n||(n="asc"),"asc"===n?a-l:l-a)}},{key:"sortByIndex",value:function(e,t){if(!e||!t)return 0;var r=Number(e.jplistIndex),n=Number(t.jplistIndex);return isNaN(r)||isNaN(n)?0:r-n}},{key:"sortDateTime",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"asc",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if(!t||!r)return 0;var a=n?t.querySelector(n):t,l=n?r.querySelector(n):r;if(!a||!l)return 0;var u=a.textContent.trim().toLowerCase(),s=l.textContent.trim().toLowerCase(),c=void 0,f=void 0;return(i=i.trim())?(c=e.getDateFromString(u,i),f=e.getDateFromString(s,i)):(c=new Date(Date.parse(u)),f=new Date(Date.parse(s))),c.getTime()===f.getTime()?0:(o||(o="asc"),"asc"===o?c.getTime()>f.getTime()?1:-1:c.getTime()<f.getTime()?1:-1)}},{key:"getDateFromString",value:function(t,r){r=(r=(r=(r=(r=r.replace(/\./g,"\\.")).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")).replace(/\[/g,"\\[")).replace(/\]/g,"\\]");var n=e.getDateWildcardValue(r,"{year}",t);n=Number(n)||1900;var o=e.getDateWildcardValue(r,"{day}",t);o=Number(o)||1;var i=e.getDateWildcardValue(r,"{month}",t);-1===(i=e.getMonthByWildcard(i))&&(i=0);var a=e.getDateWildcardValue(r,"{hour}",t);a=Number(a)||0;var l=e.getDateWildcardValue(r,"{min}",t);l=Number(l)||0;var u=e.getDateWildcardValue(r,"{sec}",t);return u=Number(u)||0,new Date(n,i,o,a,l,u)}},{key:"getDateWildcardValue",value:function(e,t,r){var n=null,o=e.replace(t,"(.*)").replace(/{year}|{month}|{day}|{hour}|{min}|{sec}/g,".*"),i=new RegExp(o,"g").exec(r);return i&&i.length>1&&(n=i[1]),n}},{key:"getMonthByWildcard",value:function(t){t=t?t.trim().toLowerCase():"";var r=Number(t);return isNaN(r)?e.months.findIndex(function(e){return e.find(function(e){return e.trim()===t})}):r-1<0?-1:r-1}},{key:"months",get:function(){return[["january","jan","jan."],["february","feb","feb."],["march","mar","mar."],["april","apr","apr."],["may"],["june","jun."],["july","jul","jul."],["august","aug","aug."],["september","sep","sep."],["october","oct","oct."],["november","nov","nov."],["december","dec","dec."]]}}]),e}();t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(t,r,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.itemsNumber=Number(n)||0,this.itemsPerPage=Number.isInteger(r)?Number(r):this.itemsNumber,0===this.itemsPerPage&&(this.itemsPerPage=n),this.pagesNumber=0===this.itemsPerPage?0:Math.ceil(this.itemsNumber/this.itemsPerPage),this.currentPage=Number(t)||0,this.currentPage>this.pagesNumber-1&&(this.currentPage=0),this.start=this.currentPage*this.itemsPerPage,this.end=this.start+this.itemsPerPage,this.end>this.itemsNumber&&(this.end=this.itemsNumber),this.prevPage=this.currentPage<=0?0:this.currentPage-1,this.nextPage=0===this.pagesNumber?0:this.currentPage>=this.pagesNumber-1?this.pagesNumber-1:this.currentPage+1,this.range=Number(o)||10;var i=Math.ceil((this.range-1)/2);this.rangeStart=this.currentPage-i,this.rangeEnd=Math.min(this.rangeStart+this.range-1,this.pagesNumber-1),this.rangeStart<=0&&(this.rangeStart=0,this.rangeEnd=Math.min(this.range-1,this.pagesNumber-1)),this.rangeEnd>=this.pagesNumber-1&&(this.rangeStart=Math.max(this.pagesNumber-this.range,0),this.rangeEnd=this.pagesNumber-1)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,null,[{key:"getParam",value:function(e){if(!e)return null;var t=e.split("=");return t.length<2?null:{key:t[0].trim().toLowerCase(),value:t[1].trim().toLowerCase()}}},{key:"getUrlParams",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#",n=new Map;if(!t)return n;var o=window.decodeURIComponent(t.replace(r,"")).trim().toLowerCase();if(!o)return n;var i=o.split("&"),a="",l=!0,u=!1,s=void 0;try{for(var c,f=i[Symbol.iterator]();!(l=(c=f.next()).done);l=!0){var d=c.value,p=e.getParam(d);if(p)if("group"===p.key)a=p.value,n.has(p.value)||n.set(p.value,[]);else{var h=n.get(a);h&&h.push(p),n.set(a,h)}}}catch(e){u=!0,s=e}finally{try{!l&&f.return&&f.return()}finally{if(u)throw s}}return n}}]),e}();t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,null,[{key:"isSupported",value:function(e){if("cookies"===e)return!0;try{return e in window&&null!==window[e]}catch(e){return!1}}},{key:"set",value:function(t,r,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-1;if("cookies"===r){var i=encodeURIComponent(t),a=new Date;-1===(o=Number(o)||-1)?document.cookie=name+"="+i+";path=/;":(a.setMinutes(a.getMinutes()+o),document.cookie=name+"="+i+";path=/; expires="+a.toUTCString())}else e.isSupported(r)&&(window[r][n]=t)}},{key:"get",value:function(t,r){var n="";if("cookies"===t)for(var o=document.cookie.split(";"),i=0;i<o.length;i++){var a=o[i].substr(0,o[i].indexOf("=")),l=o[i].substr(o[i].indexOf("=")+1);if((a=a.replace(/^\s+|\s+$/g,""))===r){n=decodeURIComponent(l);break}}else e.isSupported(t)&&(n=window[t][r]||"");return n}}]),e}();t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,null,[{key:"textFilter",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"contains",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=[];if(!e)return[];if("default"===r)return e;var a=t.replace(new RegExp(o,"ig"),"").toLowerCase().trim(),l=!0,u=!1,s=void 0;try{for(var c,f=e[Symbol.iterator]();!(l=(c=f.next()).done);l=!0){var d=c.value,p=r?d.querySelectorAll(r):[d];if(p){var h=!1,v=!0,y=!1,b=void 0;try{for(var g,m=p[Symbol.iterator]();!(v=(g=m.next()).done);v=!0){var w=g.value.textContent.replace(new RegExp(o,"ig"),"").toLowerCase().trim();switch(n){case"startsWith":w.startsWith(a)&&(h=!0);break;case"endsWith":w.endsWith(a)&&(h=!0);break;case"equal":w===a&&(h=!0);break;default:-1!==w.indexOf(a)&&(h=!0)}if(h)break}}catch(e){y=!0,b=e}finally{try{!v&&m.return&&m.return()}finally{if(y)throw b}}h&&i.push(d)}}}catch(e){u=!0,s=e}finally{try{!l&&f.return&&f.return()}finally{if(u)throw s}}return i}},{key:"pathFilter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=[];if(!e)return[];if("default"===t||!t)return e;var o=!0,i=!1,a=void 0;try{for(var l,u=e[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){var s=l.value,c=s.querySelector(t);(c&&!r||!c&&r)&&n.push(s)}}catch(e){i=!0,a=e}finally{try{!o&&u.return&&u.return()}finally{if(i)throw a}}return n}},{key:"isNumeric",value:function(e){return!isNaN(parseFloat(e))&&isFinite(e)}},{key:"rangeFilter",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments[2],o=arguments[3],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:o,l=[];if(!t)return[];if("default"===r)return t;n=Math.max(n,i),o=Math.min(o,a);var u=!0,s=!1,c=void 0;try{for(var f,d=t[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var p=f.value,h=r?p.querySelectorAll(r):[p];if(h){var v=[],y=!0,b=!1,g=void 0;try{for(var m,w=h[Symbol.iterator]();!(y=(m=w.next()).done);y=!0){var O=m.value,_=Number(O.textContent.trim().replace(/[^-0-9.]+/g,""));isNaN(_)||v.push(_)}}catch(e){b=!0,g=e}finally{try{!y&&w.return&&w.return()}finally{if(b)throw g}}if(v.length>0){var j=Math.max.apply(Math,v),P=Math.min.apply(Math,v),k=!0;e.isNumeric(n)&&n>P&&(k=!1),e.isNumeric(o)&&j>o&&(k=!1),k&&l.push(p)}}}}catch(e){s=!0,c=e}finally{try{!u&&d.return&&d.return()}finally{if(s)throw c}}return l}}]),e}();t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(2));var o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default),t}();t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(r(2));var i=function(e){function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r,n,o));return i.group=e,i.name=r,i.checkboxes=[],i.radios=[],i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"addControl",value:function(e){var r=this,n=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addControl",this).call(this,e);if(n.selected="true"===n.element.getAttribute("data-selected"),n.mode=n.element.getAttribute("data-mode")||"radio",n.id){var o=this.deepLinkParams.find(function(e){return e.key===n.id});o&&(n.selected="1"===o.value)}"radio"===n.mode&&(this.radios.push(n),this.handleRadios()),"checkbox"===n.mode&&(this.checkboxes.push(n),this.handleCheckboxes()),n.element.addEventListener("click",function(e){if(e.preventDefault(),"checkbox"===n.mode&&(n.selected=!n.selected,r.checkboxes.forEach(function(e){e.isEqualTo(n)&&(e.selected=n.selected)}),r.handleCheckboxes()),"radio"===n.mode){var t=!0,o=!1,i=void 0;try{for(var a,l=r.radios[Symbol.iterator]();!(t=(a=l.next()).done);t=!0){a.value.selected=!1}}catch(e){o=!0,i=e}finally{try{!t&&l.return&&l.return()}finally{if(o)throw i}}n.selected=!0,r.handleRadios()}window.jplist&&window.jplist.refresh(r.group)})}},{key:"handleCheckboxes",value:function(){var e=!0,t=!1,r=void 0;try{for(var n,o=this.checkboxes[Symbol.iterator]();!(e=(n=o.next()).done);e=!0){var i=n.value;i.selected?i.element.classList.add("jplist-selected"):i.element.classList.remove("jplist-selected")}}catch(e){t=!0,r=e}finally{try{!e&&o.return&&o.return()}finally{if(t)throw r}}}},{key:"getLastSelectedRadio",value:function(){var e=null,t=!0,r=!1,n=void 0;try{for(var o,i=this.radios[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;a.selected&&(e=a)}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}return e}},{key:"handleRadios",value:function(){if(this.radios.length>0){var e=this.getLastSelectedRadio(),t=!0,r=!1,n=void 0;try{for(var o,i=this.radios[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;a.selected=!1,a.element.classList.remove("jplist-selected")}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}e&&this.radios.forEach(function(t){t.isEqualTo(e)&&(t.selected=!0,t.element.checked=!0,t.element.classList.add("jplist-selected"))})}}},{key:"getSortOptions",value:function(){var e=[],t=!1,r=!0,n=!1,o=void 0;try{for(var i,a=this.checkboxes[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var l=i.value;l.selected?e=e.concat(l.getSortOptions()):t=!0}}catch(e){n=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}t&&(e=e.concat([{path:"default"}]));var u=this.getLastSelectedRadio();return u&&(e=e.concat(u.getSortOptions())),e}},{key:"getDeepLink",value:function(){var e=this.checkboxes.map(function(e){return e.id&&e.selected?e.id+"=1":""}).filter(function(e){return""!==e}),t=this.radios.map(function(e){return e.id&&e.selected?e.id+"=1":""}).filter(function(e){return""!==e}),r=e.concat(t);return Array.from(new Set(r)).join("&")}}]),t}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(r(2));var i=function(e){function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r,n,o));return i.group=e,i.name=r,i.radios=[],i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"addControl",value:function(e){var r=this,n=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addControl",this).call(this,e);if(n.selected=n.element.checked,n.id){var o=this.deepLinkParams.find(function(e){return e.key===n.id});o&&(n.selected="1"===o.value)}this.radios.push(n),this.handleRadios(),n.element.addEventListener("change",function(e){e.preventDefault();var t=!0,o=!1,i=void 0;try{for(var a,l=r.radios[Symbol.iterator]();!(t=(a=l.next()).done);t=!0){a.value.selected=!1}}catch(e){o=!0,i=e}finally{try{!t&&l.return&&l.return()}finally{if(o)throw i}}n.selected=!0,r.handleRadios(),window.jplist&&window.jplist.refresh(r.group)})}},{key:"getLastSelectedRadio",value:function(){var e=null,t=!0,r=!1,n=void 0;try{for(var o,i=this.radios[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;a.selected&&(e=a)}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}return e}},{key:"handleRadios",value:function(){if(this.radios.length>0){var e=this.getLastSelectedRadio(),t=!0,r=!1,n=void 0;try{for(var o,i=this.radios[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;a.selected=!1,a.element.classList.remove("jplist-selected")}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}e&&this.radios.forEach(function(t){t.isEqualTo(e)&&(t.selected=!0,t.element.checked=!0,t.element.classList.add("jplist-selected"))})}}},{key:"getSortOptions",value:function(){var e=[],t=this.getLastSelectedRadio();return t&&(e=e.concat(t.getSortOptions())),e}},{key:"getDeepLink",value:function(){var e=this.radios.map(function(e){return e.id&&e.selected?e.id+"=1":""}).filter(function(e){return""!==e});return Array.from(new Set(e)).join("&")}}]),t}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(r(2));var i=function(e){function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r,n,o));return i.group=e,i.name=r,i.checkboxes=[],i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"addControl",value:function(e){var r=this,n=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addControl",this).call(this,e);if(n.selected=n.element.checked,n.id){var o=this.deepLinkParams.find(function(e){return e.key===n.id});o&&(n.selected="1"===o.value)}this.checkboxes.push(n),this.handleCheckboxes(),n.element.addEventListener("change",function(e){e.preventDefault(),n.selected=!n.selected,r.checkboxes.forEach(function(e){e.isEqualTo(n)&&(e.selected=n.selected)}),r.handleCheckboxes(),window.jplist&&window.jplist.refresh(r.group)})}},{key:"handleCheckboxes",value:function(){var e=!0,t=!1,r=void 0;try{for(var n,o=this.checkboxes[Symbol.iterator]();!(e=(n=o.next()).done);e=!0){var i=n.value;i.selected?i.element.classList.add("jplist-selected"):i.element.classList.remove("jplist-selected"),i.element.checked=i.selected}}catch(e){t=!0,r=e}finally{try{!e&&o.return&&o.return()}finally{if(t)throw r}}}},{key:"getSortOptions",value:function(){var e=[],t=!1,r=!0,n=!1,o=void 0;try{for(var i,a=this.checkboxes[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var l=i.value;l.selected?e=e.concat(l.getSortOptions()):t=!0}}catch(e){n=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}return t&&(e=e.concat([{path:"default"}])),e}},{key:"getDeepLink",value:function(){var e=this.checkboxes.map(function(e){return e.id?e.selected?e.id+"=1":e.id+"=0":""}).filter(function(e){return""!==e});return Array.from(new Set(e)).join("&")}}]),t}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=a(r(2)),i=a(r(6));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r,n,o));return i.group=e,i.name=r,i.options=[],i.selected="",i.id="",i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"addControl",value:function(e){var r=this,n=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addControl",this).call(this,e),o=n.element.querySelectorAll("option"),a=!0,l=!1,u=void 0;try{for(var s,c=function(){var e=s.value;e.setAttribute("data-name",r.name),e.setAttribute("data-group",r.group),r.options.find(function(t){return t.element.value===e.value})||r.options.push(new i.default(e))},f=o[Symbol.iterator]();!(a=(s=f.next()).done);a=!0)c()}catch(e){l=!0,u=e}finally{try{!a&&f.return&&f.return()}finally{if(l)throw u}}if(this.selected=n.element.value,n.id){this.id=n.id;var d=this.deepLinkParams.find(function(e){return e.key===n.id});d&&(n.element.value=d.value,this.selected=d.value)}n.element.addEventListener("change",function(e){e.preventDefault(),r.selected=e.target.value;var t=!0,n=!1,o=void 0;try{for(var i,a=r.controls[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){i.value.element.value=r.selected}}catch(e){n=!0,o=e}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}window.jplist&&window.jplist.refresh(r.group)})}},{key:"getSortOptions",value:function(){var e=this,t=this.options.find(function(t){return t.element.value===e.selected});return t?t.getSortOptions():[]}},{key:"getDeepLink",value:function(){var e=this,t=this.options.find(function(t){return t.element.value===e.selected});return this.id?this.id+"="+t.element.value:""}}]),t}();t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=l(r(2)),i=l(r(6)),a=l(r(4));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r,n,o));return i.group=e,i.name=r,i.selected=null,i.id="",i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"addControl",value:function(e){var r=this,n=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addControl",this).call(this,e);n.dropdown=new a.default(e.element),n.buttons=[];var o=n.element.querySelectorAll("[data-path]"),l=!0,u=!1,s=void 0;try{for(var c,f=function(){var e=c.value;e.setAttribute("data-name",r.name),e.setAttribute("data-group",r.group);var t=new i.default(e);n.buttons.push(t),t.element.addEventListener("click",function(e){e.preventDefault(),r.selected=t,r.setSelectedButton(n);var o=!0,i=!1,a=void 0;try{for(var l,u=r.controls[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){var s=l.value;s.dropdown&&s.dropdown.close()}}catch(e){i=!0,a=e}finally{try{!o&&u.return&&u.return()}finally{if(i)throw a}}window.jplist&&window.jplist.refresh(r.group)})},d=o[Symbol.iterator]();!(l=(c=d.next()).done);l=!0)f()}catch(e){u=!0,s=e}finally{try{!l&&d.return&&d.return()}finally{if(u)throw s}}if(this.selected=t.getSelectedButton(n.buttons),this.setSelectedButton(n),n.id){this.id=n.id;var p=this.deepLinkParams.find(function(e){return e.key===n.id});if(p){var h=n.buttons.find(function(e){var t=e.element.getAttribute("data-value");return p.value===t?e:null});h&&(this.selected=h,this.setSelectedButton(n))}}}},{key:"getSortOptions",value:function(){return this.selected?this.selected.getSortOptions():[]}},{key:"getDeepLink",value:function(){return this.id&&this.selected&&this.id+"="+this.selected.element.getAttribute("data-value")||""}},{key:"setSelectedButton",value:function(e){var t=this,r=!0,n=!1,o=void 0;try{for(var i,a=this.controls[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var l=i.value;if(l.dropdown){var u=e.buttons.find(function(e){return t.selected.isEqualTo(e)});u&&l.dropdown.setPanelsContent(u.element.textContent)}}}catch(e){n=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}}}],[{key:"getSelectedButton",value:function(e){if(e.length<=0)return null;var t=!0,r=!1,n=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;if("true"===a.element.getAttribute("data-selected"))return a}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}return e[0]}}]),t}();t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=a(r(27)),i=a(r(4));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r,n,o));return i.currentPage=0,i.itemsPerPage=0,i.range=0,i.id="",i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"addControl",value:function(e){var r=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addControl",this).call(this,e);if(this.currentPage=r.currentPage,this.itemsPerPage=Number(r.itemsPerPage)||0,this.range=r.range,this.restoreFromDeepLink(r),r.pageButtonsHolder=r.element.querySelector('[data-type="pages"]'),r.pageButtonsHolder&&(r.btnTemplate=r.pageButtonsHolder.innerHTML),r.firstButtons=r.element.querySelectorAll('[data-type="first"]'),r.lastButtons=r.element.querySelectorAll('[data-type="last"]'),r.prevButtons=r.element.querySelectorAll('[data-type="prev"]'),r.nextButtons=r.element.querySelectorAll('[data-type="next"]'),t.bindEventHandler(r.firstButtons,"click",this.pageButtonClick.bind(this)),t.bindEventHandler(r.lastButtons,"click",this.pageButtonClick.bind(this)),t.bindEventHandler(r.prevButtons,"click",this.pageButtonClick.bind(this)),t.bindEventHandler(r.nextButtons,"click",this.pageButtonClick.bind(this)),r.itemsPerPageSelects=Array.from(r.element.querySelectorAll('[data-type="items-per-page"]')),this.updateItemsPerPageSelect(r.itemsPerPageSelects),r.itemsPerPageDD=Array.from(r.element.querySelectorAll('[data-type="items-per-page-dd"]')),this.initCustomDropdowns(r.itemsPerPageDD),t.bindEventHandler(r.itemsPerPageSelects,"change",this.selectChange.bind(this)),r.labels=r.element.querySelectorAll('[data-type="info"]'),r.labels){var n=!0,o=!1,i=void 0;try{for(var a,l=r.labels[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var u=a.value;u.template=u.innerHTML}}catch(e){o=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(o)throw i}}}}},{key:"updateItemsPerPageSelect",value:function(e){var t=this,r=!0,n=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var l=i.value,u=Array.from(l.options).find(function(e){return e.value===t.itemsPerPage.toString()});l.value=u&&Number(this.itemsPerPage)||0}}catch(e){n=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}}},{key:"initCustomDropdowns",value:function(e){var t=this;if(e&&!(e.length<=0)){var r=!0,n=!1,o=void 0;try{for(var a,l=function(){var e=a.value;e.dropdown=new i.default(e),e.buttons=Array.from(e.querySelectorAll("[data-value]"));var r=!0,n=!1,o=void 0;try{for(var l,u=function(){var r=l.value;r.addEventListener("click",function(n){n.preventDefault(),t.itemsPerPage=Number(r.getAttribute("data-value"))||0,t.setSelectedButton(),e.dropdown.close(),window.jplist&&window.jplist.refresh(t.group)})},s=e.buttons[Symbol.iterator]();!(r=(l=s.next()).done);r=!0)u()}catch(e){n=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(n)throw o}}},u=e[Symbol.iterator]();!(r=(a=u.next()).done);r=!0)l()}catch(e){n=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(n)throw o}}this.setSelectedButton()}}},{key:"setSelectedButton",value:function(){var e=this,t=!0,r=!1,n=void 0;try{for(var o,i=this.controls[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;if(a.itemsPerPageDD){var l=!0,u=!1,s=void 0;try{for(var c,f=a.itemsPerPageDD[Symbol.iterator]();!(l=(c=f.next()).done);l=!0){var d=c.value;if(d.buttons){var p=d.buttons.find(function(t){return(Number(t.getAttribute("data-value"))||0)===e.itemsPerPage});p||(p=d.buttons.find(function(e){return 0===(Number(e.getAttribute("data-value"))||0)})),p&&d.dropdown.setPanelsContent(p.textContent)}}}catch(e){u=!0,s=e}finally{try{!l&&f.return&&f.return()}finally{if(u)throw s}}}}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}}},{key:"getPaginationOptions",value:function(){return{itemsPerPage:this.itemsPerPage,currentPage:this.currentPage,range:this.range}}},{key:"setPaginationOptions",value:function(e){var r=this;if(e){this.currentPage=e.currentPage,this.itemsPerPage=e.itemsPerPage;var n=!0,o=!1,i=void 0;try{for(var a,l=this.controls[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var u=a.value;if(u.btnTemplate&&u.pageButtonsHolder){for(;u.pageButtonsHolder.firstChild;)u.pageButtonsHolder.removeChild(u.pageButtonsHolder.firstChild);for(var s=function(e){var t=document.createElement("div");t.innerHTML=u.btnTemplate.replace(new RegExp("{pageNumber}","g"),e+1).trim();var n=t.firstChild,o=n.querySelector('[data-type="page"]');o||(o=n),o.setAttribute("data-page",e.toString()),e===r.currentPage&&(o.classList.add(u.selectedClass),o.setAttribute("data-selected","true")),o.addEventListener("click",function(e){r.pageButtonClick(e,o)}),u.pageButtonsHolder.appendChild(n)},c=e.rangeStart;c<=e.rangeEnd;c++)s(c);t.setPageAttr(u.firstButtons,0,0!==this.currentPage,u.disabledClass),t.setPageAttr(u.lastButtons,e.pagesNumber-1,this.currentPage!==e.pagesNumber-1,u.disabledClass),t.setPageAttr(u.prevButtons,e.prevPage,0!==this.currentPage,u.disabledClass),t.setPageAttr(u.nextButtons,e.nextPage,this.currentPage!==e.pagesNumber-1,u.disabledClass);var f=[{key:"{pageNumber}",value:e.currentPage+1},{key:"{pagesNumber}",value:e.pagesNumber},{key:"{startItem}",value:e.start+1},{key:"{endItem}",value:e.end},{key:"{itemsNumber}",value:e.itemsNumber}];if(u.labels){var d=!0,p=!1,h=void 0;try{for(var v,y=u.labels[Symbol.iterator]();!(d=(v=y.next()).done);d=!0){var b=v.value;if(b.template){var g=b.template,m=!0,w=!1,O=void 0;try{for(var _,j=f[Symbol.iterator]();!(m=(_=j.next()).done);m=!0){var P=_.value;g=g.replace(new RegExp(P.key,"g"),P.value)}}catch(e){w=!0,O=e}finally{try{!m&&j.return&&j.return()}finally{if(w)throw O}}b.innerHTML=g}}}catch(e){p=!0,h=e}finally{try{!d&&y.return&&y.return()}finally{if(p)throw h}}}}}}catch(e){o=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(o)throw i}}}}},{key:"pageButtonClick",value:function(e,t){e&&e.preventDefault();var r=t?t.getAttribute("data-page"):e.target.getAttribute("data-page");this.currentPage=Number(r)||0,window.jplist&&window.jplist.refresh(this.group)}},{key:"selectChange",value:function(e){e.preventDefault();var t=Number(e.target.value);if(!isNaN(t)){this.itemsPerPage=t;var r=!0,n=!1,o=void 0;try{for(var i,a=this.controls[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var l=i.value;this.updateItemsPerPageSelect(l.itemsPerPageSelects)}}catch(e){n=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}}window.jplist&&window.jplist.refresh(this.group)}},{key:"restoreFromDeepLink",value:function(e){if(e.id){this.id=e.id;var t=this.deepLinkParams.find(function(t){return t.key===e.id});if(t){var r=t.value.split("-");if(2!==r.length)return;var n=Number(r[0]),o=Number(r[1]);if(isNaN(n)||isNaN(o))return;this.currentPage=n,this.itemsPerPage=o}}}},{key:"getDeepLink",value:function(){return this.id?this.id+"="+this.currentPage+"-"+this.itemsPerPage:""}}],[{key:"setPageAttr",value:function(e,t,r,n){if(e){var o=!0,i=!1,a=void 0;try{for(var l,u=e[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){var s=l.value;s.setAttribute("data-page",t),r?s.classList.remove(n):s.classList.add(n)}}catch(e){i=!0,a=e}finally{try{!o&&u.return&&u.return()}finally{if(i)throw a}}}}},{key:"bindEventHandler",value:function(e,t,r){if(e){var n=!0,o=!1,i=void 0;try{for(var a,l=function(){var e=a.value;e.addEventListener(t,function(t){r(t,e)})},u=e[Symbol.iterator]();!(n=(a=u.next()).done);n=!0)l()}catch(e){o=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}}}}]),t}();t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=a(r(0)),i=a(r(28));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"getPaginationOptions",value:function(){return this.controls.length>0?this.controls[this.controls.length-1].getPaginationOptions():null}},{key:"setPaginationOptions",value:function(e){}},{key:"addControl",value:function(e){if(e.name!==this.name||e.group!==this.group)return null;var t=new i.default(e.element);return this.controls.push(t),t}}]),t}();t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(r(1));var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return e&&(r.itemsPerPage=Number(e.getAttribute("data-items-per-page"))||10,r.currentPage=Number(e.getAttribute("data-current-page"))||0,r.range=Number(e.getAttribute("data-range"))||10,r.disabledClass=(e.getAttribute("data-disabled-class")||"jplist-disabled").trim(),r.selectedClass=(e.getAttribute("data-selected-class")||"jplist-selected").trim()),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"getPaginationOptions",value:function(){return{itemsPerPage:this.itemsPerPage,currentPage:this.currentPage,range:this.range}}}]),t}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(r(5));var i=function(e){function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r,n,o));return i.group=e,i.name=r,i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"addControl",value:function(e){var r=this,n=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addControl",this).call(this,e);if(n.id){var o=this.deepLinkParams.find(function(e){return e.key===n.id});o&&(n.text=o.value,n.element.value=o.value)}if(n.element.addEventListener("keyup",function(e){e.preventDefault(),n.text=e.target.value,r.textChanged(n)}),n.clearButtonID=(n.element.getAttribute("data-clear-btn-id")||"").trim(),n.clearButtonID){var i=document.getElementById(n.clearButtonID);i&&i.addEventListener("click",function(e){e.preventDefault(),n.text="",r.textChanged(n)})}}},{key:"textChanged",value:function(e){this.controls.forEach(function(t){t.isEqualTo(e,!1)&&(t.element.value=e.text,t.text=e.text)}),window.jplist&&window.jplist.refresh(this.group)}}]),t}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(r(1));var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return e&&(r.path=(e.getAttribute("data-path")||"").trim(),r._text=(e.getAttribute("data-text")||e.value||"").trim(),r.mode=(e.getAttribute("data-mode")||"contains").trim(),r.regex=e.getAttribute("data-regex")||""),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"getTextFilterOptions",value:function(){return{path:this.path,text:this.text,mode:this.mode,ignoreRegex:this.regex}}},{key:"isEqualTo",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=this.path===e.path&&this.mode===e.mode&&this.regex===e.regex;return t&&(r=r&&this.text===e.text),r}},{key:"text",set:function(e){this._text=(e||"").trim()},get:function(){return this._text}}]),t}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=a(r(5)),i=a(r(9));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,(0,i.default)(o.default)),n(t,[{key:"getTextFilterOptions",value:function(){var e=[],t=!0,r=!1,n=void 0;try{for(var o,i=this.checkboxes[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;a.selected&&(e=e.concat(a.getTextFilterOptions()))}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}return e}}]),t}();t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=a(r(5)),i=a(r(10));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,(0,i.default)(o.default)),n(t,[{key:"getTextFilterOptions",value:function(){var e=[],t=this.getLastSelectedRadio();return t&&(e=e.concat(t.getTextFilterOptions())),e}}]),t}();t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=a(r(5)),i=a(r(7));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,(0,i.default)(o.default)),n(t,[{key:"getTextFilterOptions",value:function(){var e=[],t=this.getLastSelectedRadio();t&&(e=e.concat(t.getTextFilterOptions()));var r=!0,n=!1,o=void 0;try{for(var i,a=this.checkboxes[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var l=i.value;l.selected&&(e=e.concat(l.getTextFilterOptions()))}}catch(e){n=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}return e}}]),t}();t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=a(r(3)),i=a(r(8));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r,n,o));return i.group=e,i.name=r,i.options=[],i.selected="",i.id="",i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"addControl",value:function(e){var r=this,n=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addControl",this).call(this,e),o=n.element.querySelectorAll("option"),a=!0,l=!1,u=void 0;try{for(var s,c=function(){var e=s.value;e.setAttribute("data-name",r.name),e.setAttribute("data-group",r.group),r.options.find(function(t){return t.element.value===e.value})||r.options.push(new i.default(e))},f=o[Symbol.iterator]();!(a=(s=f.next()).done);a=!0)c()}catch(e){l=!0,u=e}finally{try{!a&&f.return&&f.return()}finally{if(l)throw u}}if(this.selected=n.element.value,n.id){this.id=n.id;var d=this.deepLinkParams.find(function(e){return e.key===n.id});d&&(n.element.value=d.value,this.selected=d.value)}n.element.addEventListener("change",function(e){e.preventDefault(),r.selected=e.target.value;var t=!0,n=!1,o=void 0;try{for(var i,a=r.controls[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){i.value.element.value=r.selected}}catch(e){n=!0,o=e}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}window.jplist&&window.jplist.refresh(r.group)})}},{key:"getPathFilterOptions",value:function(){var e=this,t=this.options.find(function(t){return t.element.value===e.selected});return t?[t.getPathFilterOptions()]:[]}},{key:"getDeepLink",value:function(){var e=this,t=this.options.find(function(t){return t.element.value===e.selected});return this.id?this.id+"="+t.element.value:""}}]),t}();t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=a(r(3)),i=a(r(9));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,(0,i.default)(o.default)),n(t,[{key:"getPathFilterOptions",value:function(){var e=[],t=!0,r=!1,n=void 0;try{for(var o,i=this.checkboxes[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;a.selected&&(e=e.concat(a.getPathFilterOptions()))}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}return e}}]),t}();t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=a(r(3)),i=a(r(10));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,(0,i.default)(o.default)),n(t,[{key:"getPathFilterOptions",value:function(){var e=[],t=this.getLastSelectedRadio();return t&&(e=e.concat(t.getPathFilterOptions())),e}}]),t}();t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=a(r(3)),i=a(r(7));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,(0,i.default)(o.default)),n(t,[{key:"getPathFilterOptions",value:function(){var e=[],t=this.getLastSelectedRadio();t&&(e=e.concat(t.getPathFilterOptions()));var r=!0,n=!1,o=void 0;try{for(var i,a=this.checkboxes[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var l=i.value;l.selected&&(e=e.concat(l.getPathFilterOptions()))}}catch(e){n=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}return e}}]),t}();t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=l(r(3)),i=l(r(8)),a=l(r(4));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r,n,o));return i.group=e,i.name=r,i.selected="",i.id="",i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"addControl",value:function(e){var r=this,n=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addControl",this).call(this,e);n.dropdown=new a.default(e.element),n.buttons=[];var o=n.element.querySelectorAll("[data-path]"),l=!0,u=!1,s=void 0;try{for(var c,f=function(){var e=c.value;e.setAttribute("data-name",r.name),e.setAttribute("data-group",r.group);var t=new i.default(e);n.buttons.push(t),t.element.addEventListener("click",function(e){e.preventDefault(),r.selected=t,r.setSelectedButton(n),window.jplist&&window.jplist.refresh(r.group)})},d=o[Symbol.iterator]();!(l=(c=d.next()).done);l=!0)f()}catch(e){u=!0,s=e}finally{try{!l&&d.return&&d.return()}finally{if(u)throw s}}if(this.selected=t.getSelectedButton(n.buttons),this.setSelectedButton(n),n.id){this.id=n.id;var p=this.deepLinkParams.find(function(e){return e.key===n.id});if(p){var h=n.buttons.find(function(e){var t=e.element.getAttribute("data-value");return p.value===t?e:null});h&&(this.selected=h,this.setSelectedButton(n))}}}},{key:"getPathFilterOptions",value:function(){return this.selected?[this.selected.getPathFilterOptions()]:[]}},{key:"getDeepLink",value:function(){return this.id&&this.selected&&this.id+"="+this.selected.element.getAttribute("data-value")||""}},{key:"setSelectedButton",value:function(e){var t=this,r=!0,n=!1,o=void 0;try{for(var i,a=this.controls[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var l=i.value;if(l.dropdown){var u=e.buttons.find(function(e){return t.selected.isEqualTo(e)});u&&l.dropdown.setPanelsContent(u.element.textContent),l.dropdown.close()}}}catch(e){n=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}}}],[{key:"getSelectedButton",value:function(e){if(e.length<=0)return null;var t=!0,r=!1,n=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;if("true"===a.element.getAttribute("data-selected"))return a}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}return e[0]}}]),t}();t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=a(r(11)),i=a(r(7));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,(0,i.default)(o.default)),n(t,[{key:"getRangeFilterOptions",value:function(){var e=[],t=this.getLastSelectedRadio();t&&(e=e.concat(t.getRangeFilterOptions()));var r=!0,n=!1,o=void 0;try{for(var i,a=this.checkboxes[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var l=i.value;l.selected&&(e=e.concat(l.getRangeFilterOptions()))}}catch(e){n=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}return e}}]),t}();t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(r(1));var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));if(e){r.path=(e.getAttribute("data-path")||"").trim();var n=e.getAttribute("data-from");r.from=null===n?-1/0:Number(n),isNaN(r.from)&&(r.from=-1/0);var o=e.getAttribute("data-to");r.to=null===o?1/0:Number(o),isNaN(r.to)&&(r.to=1/0);var i=e.getAttribute("data-min");r.min=null===i?r.from:Number(i),isNaN(r.min)&&(r.min=r.from);var a=e.getAttribute("data-max");r.max=null===a?r.to:Number(a),isNaN(r.max)&&(r.max=r.to)}return r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"getRangeFilterOptions",value:function(){return{path:this.path,min:this.min,from:this.from,to:this.to,max:this.max}}},{key:"isEqualTo",value:function(e){return this.path===e.path&&this.from===e.from&&this.to===e.to&&this.min===e.min&&this.max===e.max}}]),t}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=a(r(11)),i=a(r(42));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r,n,o));return i.group=e,i.name=r,i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"addControl",value:function(e){var r=this,n=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addControl",this).call(this,e),o=e.element.querySelector('[data-type="slider"]');if(n.val1Elements=e.element.querySelectorAll('[data-type="value-1"]'),n.val2Elements=e.element.querySelectorAll('[data-type="value-2"]'),n.minElements=e.element.querySelectorAll('[data-type="min"]'),n.maxElements=e.element.querySelectorAll('[data-type="max"]'),o){var a=e.element.getAttribute("data-orientation")||"horizontal",l=!0,u=!1,s=void 0;try{for(var c,f=n.minElements[Symbol.iterator]();!(l=(c=f.next()).done);l=!0){c.value.textContent=n.min}}catch(e){u=!0,s=e}finally{try{!l&&f.return&&f.return()}finally{if(u)throw s}}var d=!0,p=!1,h=void 0;try{for(var v,y=n.maxElements[Symbol.iterator]();!(d=(v=y.next()).done);d=!0){v.value.textContent=n.max}}catch(e){p=!0,h=e}finally{try{!d&&y.return&&y.return()}finally{if(p)throw h}}if(n.id){var b=this.deepLinkParams.find(function(e){return e.key===n.id});if(b&&b.value){var g=b.value.split("_");2===g.length&&(n.from=Number(g[0])||0,n.to=Number(g[1])||0)}}n.slider=new i.default(o,"vertical"===a,n.min,n.from,n.to,n.max,function(e,t){var o=!0,i=!1,a=void 0;try{for(var l,u=n.val1Elements[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){l.value.textContent=Math.round(e)}}catch(e){i=!0,a=e}finally{try{!o&&u.return&&u.return()}finally{if(i)throw a}}var s=!0,c=!1,f=void 0;try{for(var d,p=n.val2Elements[Symbol.iterator]();!(s=(d=p.next()).done);s=!0){d.value.textContent=Math.round(t)}}catch(e){c=!0,f=e}finally{try{!s&&p.return&&p.return()}finally{if(c)throw f}}var h=!0,v=!1,y=void 0;try{for(var b,g=r.controls[Symbol.iterator]();!(h=(b=g.next()).done);h=!0){var m=b.value;m.slider&&m.slider.setValues(e,t,!1)}}catch(e){v=!0,y=e}finally{try{!h&&g.return&&g.return()}finally{if(v)throw y}}window.jplist&&window.jplist.refresh(r.group)})}}},{key:"getRangeFilterOptions",value:function(){var e=[],t=!0,r=!1,n=void 0;try{for(var o,i=this.controls[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;if(a.slider&&a.slider.handler1&&a.slider.handler2){var l=a.getRangeFilterOptions();l.from=a.slider.handler1.value,l.to=a.slider.handler2.value,e=e.concat(l)}}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}return e}},{key:"getDeepLink",value:function(){var e=this.controls.map(function(e){return e.id&&e.slider&&e.slider.handler1&&e.slider.handler2?e.id+"="+e.slider.handler1.value+"_"+e.slider.handler2.value:""}).filter(function(e){return""!==e});return Array.from(new Set(e)).join("&")}}]),t}();t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r(51);var o=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:function(e,t){};if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t){if(this.element=t,this.element.classList.add("jplist-slider"),!this.element)return;this.isVertical=r,this.callback=l,this.min=n,this.max=a,r&&this.element.classList.add("jplist-slider-vertical"),this.handler1=document.createElement("span"),this.handler1.classList.add("jplist-slider-holder-1"),this.element.appendChild(this.handler1),this.range=document.createElement("span"),this.range.classList.add("jplist-slider-range"),this.element.appendChild(this.range),this.handler1.left=0,this.handler1.top=0,this.handler2=document.createElement("span"),this.handler2.classList.add("jplist-slider-holder-2"),this.element.appendChild(this.handler2),this.handler2.left=0,this.handler2.top=0,this.dragging=null,this.handler1.addEventListener("mousedown",this.start.bind(this)),this.handler2.addEventListener("mousedown",this.start.bind(this)),this.handler1.addEventListener("touchstart",this.start.bind(this)),this.handler2.addEventListener("touchstart",this.start.bind(this)),document.addEventListener("mousemove",this.render.bind(this)),document.addEventListener("touchmove",this.render.bind(this)),window.addEventListener("resize",this.resize.bind(this)),document.addEventListener("mouseup",this.stop.bind(this)),document.addEventListener("touchend",this.stop.bind(this)),document.body.addEventListener("mouseleave",this.stop.bind(this)),this.element.addEventListener("mousedown",this.jump.bind(this)),this.setValues(o,i)}}return n(e,[{key:"setValues",value:function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];t<e&&(t=e);var n=this.getInnerValue(e,this.min,this.max),o=this.getInnerValue(t,this.min,this.max);this.update({x:o,y:o},this.handler2,r),this.update({x:n,y:n},this.handler1,r)}},{key:"getPreviewValue",value:function(e,t,r){var n=t,o=r;return(e-0)/(this.element.getBoundingClientRect()[this.isVertical?"height":"width"]-0)*(o-n)+n}},{key:"getInnerValue",value:function(e,t,r){return(e-t)/(r-t)*(this.element.getBoundingClientRect()[this.isVertical?"height":"width"]-0)+0}},{key:"jump",value:function(e){e.preventDefault();var t=this.getHandlerPos(e);this.isVertical?this.dragging=Math.abs(t.y-this.handler1.top)<Math.abs(t.y-this.handler2.top)?this.handler1:this.handler2:this.dragging=Math.abs(t.x-this.handler1.left)<Math.abs(t.x-this.handler2.left)?this.handler1:this.handler2,this.render(e)}},{key:"setZIndex",value:function(){var e=window.getComputedStyle&&Number(document.defaultView.getComputedStyle(this.handler1,null).getPropertyValue("z-index"))||200,t=window.getComputedStyle&&Number(document.defaultView.getComputedStyle(this.handler2,null).getPropertyValue("z-index"))||200;if(e===t)this.dragging.style["z-index"]=e+1;else{var r=Math.max(e,t),n=Math.min(e,t);this.handler1.style["z-index"]=n,this.handler2.style["z-index"]=n,this.dragging.style["z-index"]=r}}},{key:"start",value:function(e){e.preventDefault(),e.stopPropagation(),this.dragging=e.target,this.setZIndex(),this.render()}},{key:"stop",value:function(e){this.dragging=null}},{key:"resize",value:function(e){this.handler1&&this.handler2&&this.setValues(this.handler1.value,this.handler2.value)}},{key:"render",value:function(e){e&&this.dragging&&this.update(this.getHandlerPos(e),this.dragging)}},{key:"update",value:function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(t){var n=this.element.getBoundingClientRect(),o=this.isVertical?"height":"width",i=this.isVertical?"y":"x",a=this.isVertical?"top":"left";e[i]<0&&(e[i]=0),e[i]>n[o]&&(e[i]=n[o]),t===this.handler1&&e[i]>=this.handler2[a]&&(e[i]=this.handler2[a]),t===this.handler2&&e[i]<=this.handler1[a]&&(e[i]=this.handler1[a]),t[a]=e[i],t.value=this.getPreviewValue(e[i],this.min,this.max),t.style[a]=e[i]+"px",this.range.style[a]=this.handler1[a]+"px";var l=this.handler2[a]-this.handler1[a];this.range.style[o]=(l>=0?l:0)+"px",this.callback&&r&&this.callback(this.handler1.value,this.handler2.value)}}},{key:"getHandlerPos",value:function(t){var r=this.element.getBoundingClientRect(),n={x:t.touches&&t.touches.length>0?t.touches[0].pageX:t.clientX,y:t.touches&&t.touches.length>0?t.touches[0].pageY:t.clientY},o={x:r.left,y:r.top};return e.sub(n,o)}}],[{key:"sub",value:function(e,t){return{x:e.x-t.x,y:e.y-t.y}}}]),e}();t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(r(0));var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"addControl",value:function(e){(function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addControl",this).call(this,e),e.element.addEventListener("jplist.state",function(t){if(t.jplistState){var r=Number(t.jplistState.itemsNumber)||0;e.element.style.display=0===r?"":"none"}},!1)}}]),t}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(r(0));var i=function(e){function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r,n,o));return i.group=e,i.name=r,i.classNames=new Set,i.selectedClassName="",i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"addControl",value:function(e){var r=this;if(function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addControl",this).call(this,e),e.groupClassName=e.element.getAttribute("data-class")||"",e.selected="true"===e.element.getAttribute("data-selected"),e.id){var n=this.deepLinkParams.find(function(t){return t.key===e.id});n&&(e.selected="1"===n.value)}this.classNames.add(e.groupClassName),e.element.addEventListener("click",function(t){t.preventDefault(),r.handleSelectedControls(e.groupClassName),r.handleClasses(),window.jplist&&window.jplist.refresh(r.group)},!1),this.handleClasses()}},{key:"handleClasses",value:function(){var e=document.querySelectorAll('[data-jplist-group="'+this.group+'"]');this.resetAllGroups(e);var r=this.getLatestSelectedControl();r&&(this.handleSelectedControls(r.groupClassName),t.addClassToGroups(r.groupClassName,e))}},{key:"getLatestSelectedControl",value:function(){var e=null,t=!0,r=!1,n=void 0;try{for(var o,i=this.controls[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;a.selected&&(e=a)}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}return!e&&this.controls.length>0&&(e=this.controls[0]),e}},{key:"resetAllGroups",value:function(e){var t=!0,r=!1,n=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value,l=!0,u=!1,s=void 0;try{for(var c,f=this.classNames[Symbol.iterator]();!(l=(c=f.next()).done);l=!0){var d=c.value;a.classList.remove(d)}}catch(e){u=!0,s=e}finally{try{!l&&f.return&&f.return()}finally{if(u)throw s}}}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}}},{key:"handleSelectedControls",value:function(e){var t=!0,r=!1,n=void 0;try{for(var o,i=this.controls[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;a.groupClassName===e?(a.selected=!0,a.element.classList.add("jplist-selected")):(a.selected=!1,a.element.classList.remove("jplist-selected"))}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}}},{key:"getDeepLink",value:function(){var e=this.controls.map(function(e){return e.id?e.selected?e.id+"=1":e.id+"=0":""}).filter(function(e){return""!==e});return Array.from(new Set(e)).join("&")}}],[{key:"addClassToGroups",value:function(e,t){var r=!0,n=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){i.value.classList.add(e)}}catch(e){n=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}}}]),t}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(r(0));var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,[{key:"addControl",value:function(e){var r=this;(function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addControl",this).call(this,e),e.element.addEventListener("click",function(e){e.preventDefault(),window.jplist&&window.jplist.resetControls(r.group)},!1)}}]),t}();t.default=i},function(e,t){},,,,,function(e,t){}]);
//# sourceMappingURL=jplist.min.js.map
/**!
ANDREAS HANDLEBARS
 @license
 handlebars v4.0.10

Copyright (C) 2011-2016 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Handlebars"] = factory();
	else
		root["Handlebars"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap ANDREAS HANDLEBARS
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _handlebarsRuntime = __webpack_require__(2);

	var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);

	// Compiler imports

	var _handlebarsCompilerAst = __webpack_require__(35);

	var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);

	var _handlebarsCompilerBase = __webpack_require__(36);

	var _handlebarsCompilerCompiler = __webpack_require__(41);

	var _handlebarsCompilerJavascriptCompiler = __webpack_require__(42);

	var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);

	var _handlebarsCompilerVisitor = __webpack_require__(39);

	var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);

	var _handlebarsNoConflict = __webpack_require__(34);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	var _create = _handlebarsRuntime2['default'].create;
	function create() {
	  var hb = _create();

	  hb.compile = function (input, options) {
	    return _handlebarsCompilerCompiler.compile(input, options, hb);
	  };
	  hb.precompile = function (input, options) {
	    return _handlebarsCompilerCompiler.precompile(input, options, hb);
	  };

	  hb.AST = _handlebarsCompilerAst2['default'];
	  hb.Compiler = _handlebarsCompilerCompiler.Compiler;
	  hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
	  hb.Parser = _handlebarsCompilerBase.parser;
	  hb.parse = _handlebarsCompilerBase.parse;

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst.Visitor = _handlebarsCompilerVisitor2['default'];

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _handlebarsBase = __webpack_require__(4);

	var base = _interopRequireWildcard(_handlebarsBase);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _handlebarsSafeString = __webpack_require__(21);

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = __webpack_require__(6);

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = __webpack_require__(22);

	var runtime = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = __webpack_require__(34);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _helpers = __webpack_require__(10);

	var _decorators = __webpack_require__(18);

	var _logger = __webpack_require__(20);

	var _logger2 = _interopRequireDefault(_logger);

	var VERSION = '4.0.10';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};

	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: _logger2['default'],
	  log: _logger2['default'].log,

	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },

	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};

	var log = _logger2['default'].log;

	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;

	/* eslint-enable func-style */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};

	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$defineProperty = __webpack_require__(7)['default'];

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  try {
	    if (loc) {
	      this.lineNumber = line;

	      // Work around issue under safari where we can't directly set the column value
	      /* istanbul ignore next */
	      if (_Object$defineProperty) {
	        Object.defineProperty(this, 'column', {
	          value: column,
	          enumerable: true
	        });
	      } else {
	        this.column = column;
	      }
	    }
	  } catch (nop) {
	    /* Ignore if the browser is very particular */
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(8), __esModule: true };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(9);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;

	var _helpersBlockHelperMissing = __webpack_require__(11);

	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

	var _helpersEach = __webpack_require__(12);

	var _helpersEach2 = _interopRequireDefault(_helpersEach);

	var _helpersHelperMissing = __webpack_require__(13);

	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

	var _helpersIf = __webpack_require__(14);

	var _helpersIf2 = _interopRequireDefault(_helpersIf);

	var _helpersLog = __webpack_require__(15);

	var _helpersLog2 = _interopRequireDefault(_helpersLog);

	var _helpersLookup = __webpack_require__(16);

	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

	var _helpersWith = __webpack_require__(17);

	var _helpersWith2 = _interopRequireDefault(_helpersWith);

	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }

	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;

	var _decoratorsInline = __webpack_require__(19);

	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	// Build out our basic SafeString type
	'use strict';

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$seal = __webpack_require__(23)['default'];

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _utils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_utils);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _base = __webpack_require__(4);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  templateSpec.main.decorator = templateSpec.main_d;

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },
	    // An empty object to use as replacement for null-contexts
	    nullContext: _Object$seal({}),

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }

	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var currentDepths = depths;
	    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
	      currentDepths = [context].concat(depths);
	    }

	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }

	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  // Use the current closure context to save the partial-block if this partial
	  var currentPartialBlock = options.data && options.data['partial-block'];
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }

	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    (function () {
	      options.data = _base.createFrame(options.data);
	      // Wrapper function to get access to currentPartialBlock from the closure
	      var fn = options.fn;
	      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
	        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	        // Restore the partial-block from the closure for the execution of the block
	        // i.e. the part inside the block of the partial call.
	        options.data = _base.createFrame(options.data);
	        options.data['partial-block'] = currentPartialBlock;
	        return fn(context, options);
	      };
	      if (fn.partials) {
	        options.partials = Utils.extend({}, options.partials, fn.partials);
	      }
	    })();
	  }

	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }

	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(25);
	module.exports = __webpack_require__(30).Object.seal;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(26);

	__webpack_require__(27)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(28)
	  , core    = __webpack_require__(30)
	  , fails   = __webpack_require__(33);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(29)
	  , core      = __webpack_require__(30)
	  , ctx       = __webpack_require__(31)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(32);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var AST = {
	  // Public API used to evaluate derived attributes regarding AST nodes
	  helpers: {
	    // a mustache is definitely a helper if:
	    // * it is an eligible helper, and
	    // * it has at least one parameter or hash segment
	    helperExpression: function helperExpression(node) {
	      return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
	    },

	    scopedId: function scopedId(path) {
	      return (/^\.|this\b/.test(path.original)
	      );
	    },

	    // an ID is simple if it only has one part, and that part is not
	    // `..` or `this`.
	    simpleId: function simpleId(path) {
	      return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
	    }
	  }
	};

	// Must be exported as an object rather than the root of the module as the jison lexer
	// must modify the object to operate properly.
	exports['default'] = AST;
	module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	exports.__esModule = true;
	exports.parse = parse;

	var _parser = __webpack_require__(37);

	var _parser2 = _interopRequireDefault(_parser);

	var _whitespaceControl = __webpack_require__(38);

	var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);

	var _helpers = __webpack_require__(40);

	var Helpers = _interopRequireWildcard(_helpers);

	var _utils = __webpack_require__(5);

	exports.parser = _parser2['default'];

	var yy = {};
	_utils.extend(yy, Helpers);

	function parse(input, options) {
	  // Just return if an already-compiled AST was passed in.
	  if (input.type === 'Program') {
	    return input;
	  }

	  _parser2['default'].yy = yy;

	  // Altering the shared object here, but this is ok as parser is a sync operation
	  yy.locInfo = function (locInfo) {
	    return new yy.SourceLocation(options && options.srcName, locInfo);
	  };

	  var strip = new _whitespaceControl2['default'](options);
	  return strip.accept(_parser2['default'].parse(input));
	}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	// File ignored in coverage tests via setting in .istanbul.yml
	/* Jison generated parser */
	"use strict";

	exports.__esModule = true;
	var handlebars = (function () {
	    var parser = { trace: function trace() {},
	        yy: {},
	        symbols_: { "error": 2, "root": 3, "program": 4, "EOF": 5, "program_repetition0": 6, "statement": 7, "mustache": 8, "block": 9, "rawBlock": 10, "partial": 11, "partialBlock": 12, "content": 13, "COMMENT": 14, "CONTENT": 15, "openRawBlock": 16, "rawBlock_repetition_plus0": 17, "END_RAW_BLOCK": 18, "OPEN_RAW_BLOCK": 19, "helperName": 20, "openRawBlock_repetition0": 21, "openRawBlock_option0": 22, "CLOSE_RAW_BLOCK": 23, "openBlock": 24, "block_option0": 25, "closeBlock": 26, "openInverse": 27, "block_option1": 28, "OPEN_BLOCK": 29, "openBlock_repetition0": 30, "openBlock_option0": 31, "openBlock_option1": 32, "CLOSE": 33, "OPEN_INVERSE": 34, "openInverse_repetition0": 35, "openInverse_option0": 36, "openInverse_option1": 37, "openInverseChain": 38, "OPEN_INVERSE_CHAIN": 39, "openInverseChain_repetition0": 40, "openInverseChain_option0": 41, "openInverseChain_option1": 42, "inverseAndProgram": 43, "INVERSE": 44, "inverseChain": 45, "inverseChain_option0": 46, "OPEN_ENDBLOCK": 47, "OPEN": 48, "mustache_repetition0": 49, "mustache_option0": 50, "OPEN_UNESCAPED": 51, "mustache_repetition1": 52, "mustache_option1": 53, "CLOSE_UNESCAPED": 54, "OPEN_PARTIAL": 55, "partialName": 56, "partial_repetition0": 57, "partial_option0": 58, "openPartialBlock": 59, "OPEN_PARTIAL_BLOCK": 60, "openPartialBlock_repetition0": 61, "openPartialBlock_option0": 62, "param": 63, "sexpr": 64, "OPEN_SEXPR": 65, "sexpr_repetition0": 66, "sexpr_option0": 67, "CLOSE_SEXPR": 68, "hash": 69, "hash_repetition_plus0": 70, "hashSegment": 71, "ID": 72, "EQUALS": 73, "blockParams": 74, "OPEN_BLOCK_PARAMS": 75, "blockParams_repetition_plus0": 76, "CLOSE_BLOCK_PARAMS": 77, "path": 78, "dataName": 79, "STRING": 80, "NUMBER": 81, "BOOLEAN": 82, "UNDEFINED": 83, "NULL": 84, "DATA": 85, "pathSegments": 86, "SEP": 87, "$accept": 0, "$end": 1 },
	        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
	        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 1], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
	        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$
	        /**/) {

	            var $0 = $$.length - 1;
	            switch (yystate) {
	                case 1:
	                    return $$[$0 - 1];
	                    break;
	                case 2:
	                    this.$ = yy.prepareProgram($$[$0]);
	                    break;
	                case 3:
	                    this.$ = $$[$0];
	                    break;
	                case 4:
	                    this.$ = $$[$0];
	                    break;
	                case 5:
	                    this.$ = $$[$0];
	                    break;
	                case 6:
	                    this.$ = $$[$0];
	                    break;
	                case 7:
	                    this.$ = $$[$0];
	                    break;
	                case 8:
	                    this.$ = $$[$0];
	                    break;
	                case 9:
	                    this.$ = {
	                        type: 'CommentStatement',
	                        value: yy.stripComment($$[$0]),
	                        strip: yy.stripFlags($$[$0], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 10:
	                    this.$ = {
	                        type: 'ContentStatement',
	                        original: $$[$0],
	                        value: $$[$0],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 11:
	                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 12:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
	                    break;
	                case 13:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
	                    break;
	                case 14:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
	                    break;
	                case 15:
	                    this.$ = { open: $$[$0 - 5], path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 16:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 17:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 18:
	                    this.$ = { strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
	                    break;
	                case 19:
	                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
	                        program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
	                    program.chained = true;

	                    this.$ = { strip: $$[$0 - 2].strip, program: program, chain: true };

	                    break;
	                case 20:
	                    this.$ = $$[$0];
	                    break;
	                case 21:
	                    this.$ = { path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0]) };
	                    break;
	                case 22:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 23:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 24:
	                    this.$ = {
	                        type: 'PartialStatement',
	                        name: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        indent: '',
	                        strip: yy.stripFlags($$[$0 - 4], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 25:
	                    this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 26:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 4], $$[$0]) };
	                    break;
	                case 27:
	                    this.$ = $$[$0];
	                    break;
	                case 28:
	                    this.$ = $$[$0];
	                    break;
	                case 29:
	                    this.$ = {
	                        type: 'SubExpression',
	                        path: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 30:
	                    this.$ = { type: 'Hash', pairs: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 31:
	                    this.$ = { type: 'HashPair', key: yy.id($$[$0 - 2]), value: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 32:
	                    this.$ = yy.id($$[$0 - 1]);
	                    break;
	                case 33:
	                    this.$ = $$[$0];
	                    break;
	                case 34:
	                    this.$ = $$[$0];
	                    break;
	                case 35:
	                    this.$ = { type: 'StringLiteral', value: $$[$0], original: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 36:
	                    this.$ = { type: 'NumberLiteral', value: Number($$[$0]), original: Number($$[$0]), loc: yy.locInfo(this._$) };
	                    break;
	                case 37:
	                    this.$ = { type: 'BooleanLiteral', value: $$[$0] === 'true', original: $$[$0] === 'true', loc: yy.locInfo(this._$) };
	                    break;
	                case 38:
	                    this.$ = { type: 'UndefinedLiteral', original: undefined, value: undefined, loc: yy.locInfo(this._$) };
	                    break;
	                case 39:
	                    this.$ = { type: 'NullLiteral', original: null, value: null, loc: yy.locInfo(this._$) };
	                    break;
	                case 40:
	                    this.$ = $$[$0];
	                    break;
	                case 41:
	                    this.$ = $$[$0];
	                    break;
	                case 42:
	                    this.$ = yy.preparePath(true, $$[$0], this._$);
	                    break;
	                case 43:
	                    this.$ = yy.preparePath(false, $$[$0], this._$);
	                    break;
	                case 44:
	                    $$[$0 - 2].push({ part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });this.$ = $$[$0 - 2];
	                    break;
	                case 45:
	                    this.$ = [{ part: yy.id($$[$0]), original: $$[$0] }];
	                    break;
	                case 46:
	                    this.$ = [];
	                    break;
	                case 47:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 48:
	                    this.$ = [$$[$0]];
	                    break;
	                case 49:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 50:
	                    this.$ = [];
	                    break;
	                case 51:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 58:
	                    this.$ = [];
	                    break;
	                case 59:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 64:
	                    this.$ = [];
	                    break;
	                case 65:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 70:
	                    this.$ = [];
	                    break;
	                case 71:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 78:
	                    this.$ = [];
	                    break;
	                case 79:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 82:
	                    this.$ = [];
	                    break;
	                case 83:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 86:
	                    this.$ = [];
	                    break;
	                case 87:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 90:
	                    this.$ = [];
	                    break;
	                case 91:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 94:
	                    this.$ = [];
	                    break;
	                case 95:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 98:
	                    this.$ = [$$[$0]];
	                    break;
	                case 99:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 100:
	                    this.$ = [$$[$0]];
	                    break;
	                case 101:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	            }
	        },
	        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 13: 40, 15: [1, 20], 17: 39 }, { 20: 42, 56: 41, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 45, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 48, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 42, 56: 49, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 50, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 51] }, { 72: [1, 35], 86: 52 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 53, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 54, 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 55, 47: [2, 54] }, { 28: 60, 43: 61, 44: [1, 59], 47: [2, 56] }, { 13: 63, 15: [1, 20], 18: [1, 62] }, { 15: [2, 48], 18: [2, 48] }, { 33: [2, 86], 57: 64, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 65, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 66, 47: [1, 67] }, { 30: 68, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 69, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 70, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 71, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 75, 33: [2, 80], 50: 72, 63: 73, 64: 76, 65: [1, 44], 69: 74, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 80] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 51] }, { 20: 75, 53: 81, 54: [2, 84], 63: 82, 64: 76, 65: [1, 44], 69: 83, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 84, 47: [1, 67] }, { 47: [2, 55] }, { 4: 85, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 86, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 87, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 88, 47: [1, 67] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 75, 33: [2, 88], 58: 89, 63: 90, 64: 76, 65: [1, 44], 69: 91, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 92, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 93, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 31: 94, 33: [2, 60], 63: 95, 64: 76, 65: [1, 44], 69: 96, 70: 77, 71: 78, 72: [1, 79], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 66], 36: 97, 63: 98, 64: 76, 65: [1, 44], 69: 99, 70: 77, 71: 78, 72: [1, 79], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 22: 100, 23: [2, 52], 63: 101, 64: 76, 65: [1, 44], 69: 102, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 92], 62: 103, 63: 104, 64: 76, 65: [1, 44], 69: 105, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 106] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 107, 72: [1, 108], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 109], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 110] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 112, 46: 111, 47: [2, 76] }, { 33: [2, 70], 40: 113, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 114] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 75, 63: 116, 64: 76, 65: [1, 44], 67: 115, 68: [2, 96], 69: 117, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 118] }, { 32: 119, 33: [2, 62], 74: 120, 75: [1, 121] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 122, 74: 123, 75: [1, 121] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 124] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 125] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 109] }, { 20: 75, 63: 126, 64: 76, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 75, 33: [2, 72], 41: 127, 63: 128, 64: 76, 65: [1, 44], 69: 129, 70: 77, 71: 78, 72: [1, 79], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 130] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 131] }, { 33: [2, 63] }, { 72: [1, 133], 76: 132 }, { 33: [1, 134] }, { 33: [2, 69] }, { 15: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 135, 74: 136, 75: [1, 121] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 138], 77: [1, 137] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 139] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
	        defaultActions: { 4: [2, 1], 55: [2, 55], 57: [2, 20], 61: [2, 57], 74: [2, 81], 83: [2, 85], 87: [2, 18], 91: [2, 89], 102: [2, 53], 105: [2, 93], 111: [2, 19], 112: [2, 77], 117: [2, 97], 120: [2, 63], 123: [2, 69], 124: [2, 12], 136: [2, 75], 137: [2, 32] },
	        parseError: function parseError(str, hash) {
	            throw new Error(str);
	        },
	        parse: function parse(input) {
	            var self = this,
	                stack = [0],
	                vstack = [null],
	                lstack = [],
	                table = this.table,
	                yytext = "",
	                yylineno = 0,
	                yyleng = 0,
	                recovering = 0,
	                TERROR = 2,
	                EOF = 1;
	            this.lexer.setInput(input);
	            this.lexer.yy = this.yy;
	            this.yy.lexer = this.lexer;
	            this.yy.parser = this;
	            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
	            var yyloc = this.lexer.yylloc;
	            lstack.push(yyloc);
	            var ranges = this.lexer.options && this.lexer.options.ranges;
	            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
	            function popStack(n) {
	                stack.length = stack.length - 2 * n;
	                vstack.length = vstack.length - n;
	                lstack.length = lstack.length - n;
	            }
	            function lex() {
	                var token;
	                token = self.lexer.lex() || 1;
	                if (typeof token !== "number") {
	                    token = self.symbols_[token] || token;
	                }
	                return token;
	            }
	            var symbol,
	                preErrorSymbol,
	                state,
	                action,
	                a,
	                r,
	                yyval = {},
	                p,
	                len,
	                newState,
	                expected;
	            while (true) {
	                state = stack[stack.length - 1];
	                if (this.defaultActions[state]) {
	                    action = this.defaultActions[state];
	                } else {
	                    if (symbol === null || typeof symbol == "undefined") {
	                        symbol = lex();
	                    }
	                    action = table[state] && table[state][symbol];
	                }
	                if (typeof action === "undefined" || !action.length || !action[0]) {
	                    var errStr = "";
	                    if (!recovering) {
	                        expected = [];
	                        for (p in table[state]) if (this.terminals_[p] && p > 2) {
	                            expected.push("'" + this.terminals_[p] + "'");
	                        }
	                        if (this.lexer.showPosition) {
	                            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
	                        } else {
	                            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
	                        }
	                        this.parseError(errStr, { text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected });
	                    }
	                }
	                if (action[0] instanceof Array && action.length > 1) {
	                    throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
	                }
	                switch (action[0]) {
	                    case 1:
	                        stack.push(symbol);
	                        vstack.push(this.lexer.yytext);
	                        lstack.push(this.lexer.yylloc);
	                        stack.push(action[1]);
	                        symbol = null;
	                        if (!preErrorSymbol) {
	                            yyleng = this.lexer.yyleng;
	                            yytext = this.lexer.yytext;
	                            yylineno = this.lexer.yylineno;
	                            yyloc = this.lexer.yylloc;
	                            if (recovering > 0) recovering--;
	                        } else {
	                            symbol = preErrorSymbol;
	                            preErrorSymbol = null;
	                        }
	                        break;
	                    case 2:
	                        len = this.productions_[action[1]][1];
	                        yyval.$ = vstack[vstack.length - len];
	                        yyval._$ = { first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column };
	                        if (ranges) {
	                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
	                        }
	                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
	                        if (typeof r !== "undefined") {
	                            return r;
	                        }
	                        if (len) {
	                            stack = stack.slice(0, -1 * len * 2);
	                            vstack = vstack.slice(0, -1 * len);
	                            lstack = lstack.slice(0, -1 * len);
	                        }
	                        stack.push(this.productions_[action[1]][0]);
	                        vstack.push(yyval.$);
	                        lstack.push(yyval._$);
	                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
	                        stack.push(newState);
	                        break;
	                    case 3:
	                        return true;
	                }
	            }
	            return true;
	        }
	    };
	    /* Jison generated lexer */
	    var lexer = (function () {
	        var lexer = { EOF: 1,
	            parseError: function parseError(str, hash) {
	                if (this.yy.parser) {
	                    this.yy.parser.parseError(str, hash);
	                } else {
	                    throw new Error(str);
	                }
	            },
	            setInput: function setInput(input) {
	                this._input = input;
	                this._more = this._less = this.done = false;
	                this.yylineno = this.yyleng = 0;
	                this.yytext = this.matched = this.match = '';
	                this.conditionStack = ['INITIAL'];
	                this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
	                if (this.options.ranges) this.yylloc.range = [0, 0];
	                this.offset = 0;
	                return this;
	            },
	            input: function input() {
	                var ch = this._input[0];
	                this.yytext += ch;
	                this.yyleng++;
	                this.offset++;
	                this.match += ch;
	                this.matched += ch;
	                var lines = ch.match(/(?:\r\n?|\n).*/g);
	                if (lines) {
	                    this.yylineno++;
	                    this.yylloc.last_line++;
	                } else {
	                    this.yylloc.last_column++;
	                }
	                if (this.options.ranges) this.yylloc.range[1]++;

	                this._input = this._input.slice(1);
	                return ch;
	            },
	            unput: function unput(ch) {
	                var len = ch.length;
	                var lines = ch.split(/(?:\r\n?|\n)/g);

	                this._input = ch + this._input;
	                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
	                //this.yyleng -= len;
	                this.offset -= len;
	                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
	                this.match = this.match.substr(0, this.match.length - 1);
	                this.matched = this.matched.substr(0, this.matched.length - 1);

	                if (lines.length - 1) this.yylineno -= lines.length - 1;
	                var r = this.yylloc.range;

	                this.yylloc = { first_line: this.yylloc.first_line,
	                    last_line: this.yylineno + 1,
	                    first_column: this.yylloc.first_column,
	                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
	                };

	                if (this.options.ranges) {
	                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
	                }
	                return this;
	            },
	            more: function more() {
	                this._more = true;
	                return this;
	            },
	            less: function less(n) {
	                this.unput(this.match.slice(n));
	            },
	            pastInput: function pastInput() {
	                var past = this.matched.substr(0, this.matched.length - this.match.length);
	                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
	            },
	            upcomingInput: function upcomingInput() {
	                var next = this.match;
	                if (next.length < 20) {
	                    next += this._input.substr(0, 20 - next.length);
	                }
	                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
	            },
	            showPosition: function showPosition() {
	                var pre = this.pastInput();
	                var c = new Array(pre.length + 1).join("-");
	                return pre + this.upcomingInput() + "\n" + c + "^";
	            },
	            next: function next() {
	                if (this.done) {
	                    return this.EOF;
	                }
	                if (!this._input) this.done = true;

	                var token, match, tempMatch, index, col, lines;
	                if (!this._more) {
	                    this.yytext = '';
	                    this.match = '';
	                }
	                var rules = this._currentRules();
	                for (var i = 0; i < rules.length; i++) {
	                    tempMatch = this._input.match(this.rules[rules[i]]);
	                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
	                        match = tempMatch;
	                        index = i;
	                        if (!this.options.flex) break;
	                    }
	                }
	                if (match) {
	                    lines = match[0].match(/(?:\r\n?|\n).*/g);
	                    if (lines) this.yylineno += lines.length;
	                    this.yylloc = { first_line: this.yylloc.last_line,
	                        last_line: this.yylineno + 1,
	                        first_column: this.yylloc.last_column,
	                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length };
	                    this.yytext += match[0];
	                    this.match += match[0];
	                    this.matches = match;
	                    this.yyleng = this.yytext.length;
	                    if (this.options.ranges) {
	                        this.yylloc.range = [this.offset, this.offset += this.yyleng];
	                    }
	                    this._more = false;
	                    this._input = this._input.slice(match[0].length);
	                    this.matched += match[0];
	                    token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
	                    if (this.done && this._input) this.done = false;
	                    if (token) return token;else return;
	                }
	                if (this._input === "") {
	                    return this.EOF;
	                } else {
	                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), { text: "", token: null, line: this.yylineno });
	                }
	            },
	            lex: function lex() {
	                var r = this.next();
	                if (typeof r !== 'undefined') {
	                    return r;
	                } else {
	                    return this.lex();
	                }
	            },
	            begin: function begin(condition) {
	                this.conditionStack.push(condition);
	            },
	            popState: function popState() {
	                return this.conditionStack.pop();
	            },
	            _currentRules: function _currentRules() {
	                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
	            },
	            topState: function topState() {
	                return this.conditionStack[this.conditionStack.length - 2];
	            },
	            pushState: function begin(condition) {
	                this.begin(condition);
	            } };
	        lexer.options = {};
	        lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START
	        /**/) {

	            function strip(start, end) {
	                return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
	            }

	            var YYSTATE = YY_START;
	            switch ($avoiding_name_collisions) {
	                case 0:
	                    if (yy_.yytext.slice(-2) === "\\\\") {
	                        strip(0, 1);
	                        this.begin("mu");
	                    } else if (yy_.yytext.slice(-1) === "\\") {
	                        strip(0, 1);
	                        this.begin("emu");
	                    } else {
	                        this.begin("mu");
	                    }
	                    if (yy_.yytext) return 15;

	                    break;
	                case 1:
	                    return 15;
	                    break;
	                case 2:
	                    this.popState();
	                    return 15;

	                    break;
	                case 3:
	                    this.begin('raw');return 15;
	                    break;
	                case 4:
	                    this.popState();
	                    // Should be using `this.topState()` below, but it currently
	                    // returns the second top instead of the first top. Opened an
	                    // issue about it at https://github.com/zaach/jison/issues/291
	                    if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
	                        return 15;
	                    } else {
	                        yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9);
	                        return 'END_RAW_BLOCK';
	                    }

	                    break;
	                case 5:
	                    return 15;
	                    break;
	                case 6:
	                    this.popState();
	                    return 14;

	                    break;
	                case 7:
	                    return 65;
	                    break;
	                case 8:
	                    return 68;
	                    break;
	                case 9:
	                    return 19;
	                    break;
	                case 10:
	                    this.popState();
	                    this.begin('raw');
	                    return 23;

	                    break;
	                case 11:
	                    return 55;
	                    break;
	                case 12:
	                    return 60;
	                    break;
	                case 13:
	                    return 29;
	                    break;
	                case 14:
	                    return 47;
	                    break;
	                case 15:
	                    this.popState();return 44;
	                    break;
	                case 16:
	                    this.popState();return 44;
	                    break;
	                case 17:
	                    return 34;
	                    break;
	                case 18:
	                    return 39;
	                    break;
	                case 19:
	                    return 51;
	                    break;
	                case 20:
	                    return 48;
	                    break;
	                case 21:
	                    this.unput(yy_.yytext);
	                    this.popState();
	                    this.begin('com');

	                    break;
	                case 22:
	                    this.popState();
	                    return 14;

	                    break;
	                case 23:
	                    return 48;
	                    break;
	                case 24:
	                    return 73;
	                    break;
	                case 25:
	                    return 72;
	                    break;
	                case 26:
	                    return 72;
	                    break;
	                case 27:
	                    return 87;
	                    break;
	                case 28:
	                    // ignore whitespace
	                    break;
	                case 29:
	                    this.popState();return 54;
	                    break;
	                case 30:
	                    this.popState();return 33;
	                    break;
	                case 31:
	                    yy_.yytext = strip(1, 2).replace(/\\"/g, '"');return 80;
	                    break;
	                case 32:
	                    yy_.yytext = strip(1, 2).replace(/\\'/g, "'");return 80;
	                    break;
	                case 33:
	                    return 85;
	                    break;
	                case 34:
	                    return 82;
	                    break;
	                case 35:
	                    return 82;
	                    break;
	                case 36:
	                    return 83;
	                    break;
	                case 37:
	                    return 84;
	                    break;
	                case 38:
	                    return 81;
	                    break;
	                case 39:
	                    return 75;
	                    break;
	                case 40:
	                    return 77;
	                    break;
	                case 41:
	                    return 72;
	                    break;
	                case 42:
	                    yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');return 72;
	                    break;
	                case 43:
	                    return 'INVALID';
	                    break;
	                case 44:
	                    return 5;
	                    break;
	            }
	        };
	        lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
	        lexer.conditions = { "mu": { "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "inclusive": false }, "emu": { "rules": [2], "inclusive": false }, "com": { "rules": [6], "inclusive": false }, "raw": { "rules": [3, 4, 5], "inclusive": false }, "INITIAL": { "rules": [0, 1, 44], "inclusive": true } };
	        return lexer;
	    })();
	    parser.lexer = lexer;
	    function Parser() {
	        this.yy = {};
	    }Parser.prototype = parser;parser.Parser = Parser;
	    return new Parser();
	})();exports["default"] = handlebars;
	module.exports = exports["default"];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _visitor = __webpack_require__(39);

	var _visitor2 = _interopRequireDefault(_visitor);

	function WhitespaceControl() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  this.options = options;
	}
	WhitespaceControl.prototype = new _visitor2['default']();

	WhitespaceControl.prototype.Program = function (program) {
	  var doStandalone = !this.options.ignoreStandalone;

	  var isRoot = !this.isRootSeen;
	  this.isRootSeen = true;

	  var body = program.body;
	  for (var i = 0, l = body.length; i < l; i++) {
	    var current = body[i],
	        strip = this.accept(current);

	    if (!strip) {
	      continue;
	    }

	    var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
	        _isNextWhitespace = isNextWhitespace(body, i, isRoot),
	        openStandalone = strip.openStandalone && _isPrevWhitespace,
	        closeStandalone = strip.closeStandalone && _isNextWhitespace,
	        inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

	    if (strip.close) {
	      omitRight(body, i, true);
	    }
	    if (strip.open) {
	      omitLeft(body, i, true);
	    }

	    if (doStandalone && inlineStandalone) {
	      omitRight(body, i);

	      if (omitLeft(body, i)) {
	        // If we are on a standalone node, save the indent info for partials
	        if (current.type === 'PartialStatement') {
	          // Pull out the whitespace from the final line
	          current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
	        }
	      }
	    }
	    if (doStandalone && openStandalone) {
	      omitRight((current.program || current.inverse).body);

	      // Strip out the previous content node if it's whitespace only
	      omitLeft(body, i);
	    }
	    if (doStandalone && closeStandalone) {
	      // Always strip the next node
	      omitRight(body, i);

	      omitLeft((current.inverse || current.program).body);
	    }
	  }

	  return program;
	};

	WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (block) {
	  this.accept(block.program);
	  this.accept(block.inverse);

	  // Find the inverse program that is involed with whitespace stripping.
	  var program = block.program || block.inverse,
	      inverse = block.program && block.inverse,
	      firstInverse = inverse,
	      lastInverse = inverse;

	  if (inverse && inverse.chained) {
	    firstInverse = inverse.body[0].program;

	    // Walk the inverse chain to find the last inverse that is actually in the chain.
	    while (lastInverse.chained) {
	      lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
	    }
	  }

	  var strip = {
	    open: block.openStrip.open,
	    close: block.closeStrip.close,

	    // Determine the standalone candiacy. Basically flag our content as being possibly standalone
	    // so our parent can determine if we actually are standalone
	    openStandalone: isNextWhitespace(program.body),
	    closeStandalone: isPrevWhitespace((firstInverse || program).body)
	  };

	  if (block.openStrip.close) {
	    omitRight(program.body, null, true);
	  }

	  if (inverse) {
	    var inverseStrip = block.inverseStrip;

	    if (inverseStrip.open) {
	      omitLeft(program.body, null, true);
	    }

	    if (inverseStrip.close) {
	      omitRight(firstInverse.body, null, true);
	    }
	    if (block.closeStrip.open) {
	      omitLeft(lastInverse.body, null, true);
	    }

	    // Find standalone else statments
	    if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
	      omitLeft(program.body);
	      omitRight(firstInverse.body);
	    }
	  } else if (block.closeStrip.open) {
	    omitLeft(program.body, null, true);
	  }

	  return strip;
	};

	WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (mustache) {
	  return mustache.strip;
	};

	WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
	  /* istanbul ignore next */
	  var strip = node.strip || {};
	  return {
	    inlineStandalone: true,
	    open: strip.open,
	    close: strip.close
	  };
	};

	function isPrevWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = body.length;
	  }

	  // Nodes that end with newlines are considered whitespace (but are special
	  // cased for strip operations)
	  var prev = body[i - 1],
	      sibling = body[i - 2];
	  if (!prev) {
	    return isRoot;
	  }

	  if (prev.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
	  }
	}
	function isNextWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = -1;
	  }

	  var next = body[i + 1],
	      sibling = body[i + 2];
	  if (!next) {
	    return isRoot;
	  }

	  if (next.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
	  }
	}

	// Marks the node to the right of the position as omitted.
	// I.e. {{foo}}' ' will mark the ' ' node as omitted.
	//
	// If i is undefined, then the first child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitRight(body, i, multiple) {
	  var current = body[i == null ? 0 : i + 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
	    return;
	  }

	  var original = current.value;
	  current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
	  current.rightStripped = current.value !== original;
	}

	// Marks the node to the left of the position as omitted.
	// I.e. ' '{{foo}} will mark the ' ' node as omitted.
	//
	// If i is undefined then the last child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitLeft(body, i, multiple) {
	  var current = body[i == null ? body.length - 1 : i - 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
	    return;
	  }

	  // We omit the last node if it's whitespace only and not preceeded by a non-content node.
	  var original = current.value;
	  current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
	  current.leftStripped = current.value !== original;
	  return current.leftStripped;
	}

	exports['default'] = WhitespaceControl;
	module.exports = exports['default'];

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	function Visitor() {
	  this.parents = [];
	}

	Visitor.prototype = {
	  constructor: Visitor,
	  mutating: false,

	  // Visits a given value. If mutating, will replace the value if necessary.
	  acceptKey: function acceptKey(node, name) {
	    var value = this.accept(node[name]);
	    if (this.mutating) {
	      // Hacky sanity check: This may have a few false positives for type for the helper
	      // methods but will generally do the right thing without a lot of overhead.
	      if (value && !Visitor.prototype[value.type]) {
	        throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
	      }
	      node[name] = value;
	    }
	  },

	  // Performs an accept operation with added sanity check to ensure
	  // required keys are not removed.
	  acceptRequired: function acceptRequired(node, name) {
	    this.acceptKey(node, name);

	    if (!node[name]) {
	      throw new _exception2['default'](node.type + ' requires ' + name);
	    }
	  },

	  // Traverses a given array. If mutating, empty respnses will be removed
	  // for child elements.
	  acceptArray: function acceptArray(array) {
	    for (var i = 0, l = array.length; i < l; i++) {
	      this.acceptKey(array, i);

	      if (!array[i]) {
	        array.splice(i, 1);
	        i--;
	        l--;
	      }
	    }
	  },

	  accept: function accept(object) {
	    if (!object) {
	      return;
	    }

	    /* istanbul ignore next: Sanity code */
	    if (!this[object.type]) {
	      throw new _exception2['default']('Unknown type: ' + object.type, object);
	    }

	    if (this.current) {
	      this.parents.unshift(this.current);
	    }
	    this.current = object;

	    var ret = this[object.type](object);

	    this.current = this.parents.shift();

	    if (!this.mutating || ret) {
	      return ret;
	    } else if (ret !== false) {
	      return object;
	    }
	  },

	  Program: function Program(program) {
	    this.acceptArray(program.body);
	  },

	  MustacheStatement: visitSubExpression,
	  Decorator: visitSubExpression,

	  BlockStatement: visitBlock,
	  DecoratorBlock: visitBlock,

	  PartialStatement: visitPartial,
	  PartialBlockStatement: function PartialBlockStatement(partial) {
	    visitPartial.call(this, partial);

	    this.acceptKey(partial, 'program');
	  },

	  ContentStatement: function ContentStatement() /* content */{},
	  CommentStatement: function CommentStatement() /* comment */{},

	  SubExpression: visitSubExpression,

	  PathExpression: function PathExpression() /* path */{},

	  StringLiteral: function StringLiteral() /* string */{},
	  NumberLiteral: function NumberLiteral() /* number */{},
	  BooleanLiteral: function BooleanLiteral() /* bool */{},
	  UndefinedLiteral: function UndefinedLiteral() /* literal */{},
	  NullLiteral: function NullLiteral() /* literal */{},

	  Hash: function Hash(hash) {
	    this.acceptArray(hash.pairs);
	  },
	  HashPair: function HashPair(pair) {
	    this.acceptRequired(pair, 'value');
	  }
	};

	function visitSubExpression(mustache) {
	  this.acceptRequired(mustache, 'path');
	  this.acceptArray(mustache.params);
	  this.acceptKey(mustache, 'hash');
	}
	function visitBlock(block) {
	  visitSubExpression.call(this, block);

	  this.acceptKey(block, 'program');
	  this.acceptKey(block, 'inverse');
	}
	function visitPartial(partial) {
	  this.acceptRequired(partial, 'name');
	  this.acceptArray(partial.params);
	  this.acceptKey(partial, 'hash');
	}

	exports['default'] = Visitor;
	module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.SourceLocation = SourceLocation;
	exports.id = id;
	exports.stripFlags = stripFlags;
	exports.stripComment = stripComment;
	exports.preparePath = preparePath;
	exports.prepareMustache = prepareMustache;
	exports.prepareRawBlock = prepareRawBlock;
	exports.prepareBlock = prepareBlock;
	exports.prepareProgram = prepareProgram;
	exports.preparePartialBlock = preparePartialBlock;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	function validateClose(open, close) {
	  close = close.path ? close.path.original : close;

	  if (open.path.original !== close) {
	    var errorNode = { loc: open.path.loc };

	    throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
	  }
	}

	function SourceLocation(source, locInfo) {
	  this.source = source;
	  this.start = {
	    line: locInfo.first_line,
	    column: locInfo.first_column
	  };
	  this.end = {
	    line: locInfo.last_line,
	    column: locInfo.last_column
	  };
	}

	function id(token) {
	  if (/^\[.*\]$/.test(token)) {
	    return token.substr(1, token.length - 2);
	  } else {
	    return token;
	  }
	}

	function stripFlags(open, close) {
	  return {
	    open: open.charAt(2) === '~',
	    close: close.charAt(close.length - 3) === '~'
	  };
	}

	function stripComment(comment) {
	  return comment.replace(/^\{\{~?\!-?-?/, '').replace(/-?-?~?\}\}$/, '');
	}

	function preparePath(data, parts, loc) {
	  loc = this.locInfo(loc);

	  var original = data ? '@' : '',
	      dig = [],
	      depth = 0,
	      depthString = '';

	  for (var i = 0, l = parts.length; i < l; i++) {
	    var part = parts[i].part,

	    // If we have [] syntax then we do not treat path references as operators,
	    // i.e. foo.[this] resolves to approximately context.foo['this']
	    isLiteral = parts[i].original !== part;
	    original += (parts[i].separator || '') + part;

	    if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
	      if (dig.length > 0) {
	        throw new _exception2['default']('Invalid path: ' + original, { loc: loc });
	      } else if (part === '..') {
	        depth++;
	        depthString += '../';
	      }
	    } else {
	      dig.push(part);
	    }
	  }

	  return {
	    type: 'PathExpression',
	    data: data,
	    depth: depth,
	    parts: dig,
	    original: original,
	    loc: loc
	  };
	}

	function prepareMustache(path, params, hash, open, strip, locInfo) {
	  // Must use charAt to support IE pre-10
	  var escapeFlag = open.charAt(3) || open.charAt(2),
	      escaped = escapeFlag !== '{' && escapeFlag !== '&';

	  var decorator = /\*/.test(open);
	  return {
	    type: decorator ? 'Decorator' : 'MustacheStatement',
	    path: path,
	    params: params,
	    hash: hash,
	    escaped: escaped,
	    strip: strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareRawBlock(openRawBlock, contents, close, locInfo) {
	  validateClose(openRawBlock, close);

	  locInfo = this.locInfo(locInfo);
	  var program = {
	    type: 'Program',
	    body: contents,
	    strip: {},
	    loc: locInfo
	  };

	  return {
	    type: 'BlockStatement',
	    path: openRawBlock.path,
	    params: openRawBlock.params,
	    hash: openRawBlock.hash,
	    program: program,
	    openStrip: {},
	    inverseStrip: {},
	    closeStrip: {},
	    loc: locInfo
	  };
	}

	function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
	  if (close && close.path) {
	    validateClose(openBlock, close);
	  }

	  var decorator = /\*/.test(openBlock.open);

	  program.blockParams = openBlock.blockParams;

	  var inverse = undefined,
	      inverseStrip = undefined;

	  if (inverseAndProgram) {
	    if (decorator) {
	      throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
	    }

	    if (inverseAndProgram.chain) {
	      inverseAndProgram.program.body[0].closeStrip = close.strip;
	    }

	    inverseStrip = inverseAndProgram.strip;
	    inverse = inverseAndProgram.program;
	  }

	  if (inverted) {
	    inverted = inverse;
	    inverse = program;
	    program = inverted;
	  }

	  return {
	    type: decorator ? 'DecoratorBlock' : 'BlockStatement',
	    path: openBlock.path,
	    params: openBlock.params,
	    hash: openBlock.hash,
	    program: program,
	    inverse: inverse,
	    openStrip: openBlock.strip,
	    inverseStrip: inverseStrip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareProgram(statements, loc) {
	  if (!loc && statements.length) {
	    var firstLoc = statements[0].loc,
	        lastLoc = statements[statements.length - 1].loc;

	    /* istanbul ignore else */
	    if (firstLoc && lastLoc) {
	      loc = {
	        source: firstLoc.source,
	        start: {
	          line: firstLoc.start.line,
	          column: firstLoc.start.column
	        },
	        end: {
	          line: lastLoc.end.line,
	          column: lastLoc.end.column
	        }
	      };
	    }
	  }

	  return {
	    type: 'Program',
	    body: statements,
	    strip: {},
	    loc: loc
	  };
	}

	function preparePartialBlock(open, program, close, locInfo) {
	  validateClose(open, close);

	  return {
	    type: 'PartialBlockStatement',
	    name: open.path,
	    params: open.params,
	    hash: open.hash,
	    program: program,
	    openStrip: open.strip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	/* eslint-disable new-cap */

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.Compiler = Compiler;
	exports.precompile = precompile;
	exports.compile = compile;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(5);

	var _ast = __webpack_require__(35);

	var _ast2 = _interopRequireDefault(_ast);

	var slice = [].slice;

	function Compiler() {}

	// the foundHelper register will disambiguate helper lookup from finding a
	// function in a context. This is necessary for mustache compatibility, which
	// requires that context functions in blocks are evaluated by blockHelperMissing,
	// and then proceed as if the resulting value was provided to blockHelperMissing.

	Compiler.prototype = {
	  compiler: Compiler,

	  equals: function equals(other) {
	    var len = this.opcodes.length;
	    if (other.opcodes.length !== len) {
	      return false;
	    }

	    for (var i = 0; i < len; i++) {
	      var opcode = this.opcodes[i],
	          otherOpcode = other.opcodes[i];
	      if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
	        return false;
	      }
	    }

	    // We know that length is the same between the two arrays because they are directly tied
	    // to the opcode behavior above.
	    len = this.children.length;
	    for (var i = 0; i < len; i++) {
	      if (!this.children[i].equals(other.children[i])) {
	        return false;
	      }
	    }

	    return true;
	  },

	  guid: 0,

	  compile: function compile(program, options) {
	    this.sourceNode = [];
	    this.opcodes = [];
	    this.children = [];
	    this.options = options;
	    this.stringParams = options.stringParams;
	    this.trackIds = options.trackIds;

	    options.blockParams = options.blockParams || [];

	    // These changes will propagate to the other compiler components
	    var knownHelpers = options.knownHelpers;
	    options.knownHelpers = {
	      'helperMissing': true,
	      'blockHelperMissing': true,
	      'each': true,
	      'if': true,
	      'unless': true,
	      'with': true,
	      'log': true,
	      'lookup': true
	    };
	    if (knownHelpers) {
	      for (var _name in knownHelpers) {
	        /* istanbul ignore else */
	        if (_name in knownHelpers) {
	          this.options.knownHelpers[_name] = knownHelpers[_name];
	        }
	      }
	    }

	    return this.accept(program);
	  },

	  compileProgram: function compileProgram(program) {
	    var childCompiler = new this.compiler(),
	        // eslint-disable-line new-cap
	    result = childCompiler.compile(program, this.options),
	        guid = this.guid++;

	    this.usePartial = this.usePartial || result.usePartial;

	    this.children[guid] = result;
	    this.useDepths = this.useDepths || result.useDepths;

	    return guid;
	  },

	  accept: function accept(node) {
	    /* istanbul ignore next: Sanity code */
	    if (!this[node.type]) {
	      throw new _exception2['default']('Unknown type: ' + node.type, node);
	    }

	    this.sourceNode.unshift(node);
	    var ret = this[node.type](node);
	    this.sourceNode.shift();
	    return ret;
	  },

	  Program: function Program(program) {
	    this.options.blockParams.unshift(program.blockParams);

	    var body = program.body,
	        bodyLength = body.length;
	    for (var i = 0; i < bodyLength; i++) {
	      this.accept(body[i]);
	    }

	    this.options.blockParams.shift();

	    this.isSimple = bodyLength === 1;
	    this.blockParams = program.blockParams ? program.blockParams.length : 0;

	    return this;
	  },

	  BlockStatement: function BlockStatement(block) {
	    transformLiteralToPath(block);

	    var program = block.program,
	        inverse = block.inverse;

	    program = program && this.compileProgram(program);
	    inverse = inverse && this.compileProgram(inverse);

	    var type = this.classifySexpr(block);

	    if (type === 'helper') {
	      this.helperSexpr(block, program, inverse);
	    } else if (type === 'simple') {
	      this.simpleSexpr(block);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('blockValue', block.path.original);
	    } else {
	      this.ambiguousSexpr(block, program, inverse);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('ambiguousBlockValue');
	    }

	    this.opcode('append');
	  },

	  DecoratorBlock: function DecoratorBlock(decorator) {
	    var program = decorator.program && this.compileProgram(decorator.program);
	    var params = this.setupFullMustacheParams(decorator, program, undefined),
	        path = decorator.path;

	    this.useDecorators = true;
	    this.opcode('registerDecorator', params.length, path.original);
	  },

	  PartialStatement: function PartialStatement(partial) {
	    this.usePartial = true;

	    var program = partial.program;
	    if (program) {
	      program = this.compileProgram(partial.program);
	    }

	    var params = partial.params;
	    if (params.length > 1) {
	      throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
	    } else if (!params.length) {
	      if (this.options.explicitPartialContext) {
	        this.opcode('pushLiteral', 'undefined');
	      } else {
	        params.push({ type: 'PathExpression', parts: [], depth: 0 });
	      }
	    }

	    var partialName = partial.name.original,
	        isDynamic = partial.name.type === 'SubExpression';
	    if (isDynamic) {
	      this.accept(partial.name);
	    }

	    this.setupFullMustacheParams(partial, program, undefined, true);

	    var indent = partial.indent || '';
	    if (this.options.preventIndent && indent) {
	      this.opcode('appendContent', indent);
	      indent = '';
	    }

	    this.opcode('invokePartial', isDynamic, partialName, indent);
	    this.opcode('append');
	  },
	  PartialBlockStatement: function PartialBlockStatement(partialBlock) {
	    this.PartialStatement(partialBlock);
	  },

	  MustacheStatement: function MustacheStatement(mustache) {
	    this.SubExpression(mustache);

	    if (mustache.escaped && !this.options.noEscape) {
	      this.opcode('appendEscaped');
	    } else {
	      this.opcode('append');
	    }
	  },
	  Decorator: function Decorator(decorator) {
	    this.DecoratorBlock(decorator);
	  },

	  ContentStatement: function ContentStatement(content) {
	    if (content.value) {
	      this.opcode('appendContent', content.value);
	    }
	  },

	  CommentStatement: function CommentStatement() {},

	  SubExpression: function SubExpression(sexpr) {
	    transformLiteralToPath(sexpr);
	    var type = this.classifySexpr(sexpr);

	    if (type === 'simple') {
	      this.simpleSexpr(sexpr);
	    } else if (type === 'helper') {
	      this.helperSexpr(sexpr);
	    } else {
	      this.ambiguousSexpr(sexpr);
	    }
	  },
	  ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
	    var path = sexpr.path,
	        name = path.parts[0],
	        isBlock = program != null || inverse != null;

	    this.opcode('getContext', path.depth);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    path.strict = true;
	    this.accept(path);

	    this.opcode('invokeAmbiguous', name, isBlock);
	  },

	  simpleSexpr: function simpleSexpr(sexpr) {
	    var path = sexpr.path;
	    path.strict = true;
	    this.accept(path);
	    this.opcode('resolvePossibleLambda');
	  },

	  helperSexpr: function helperSexpr(sexpr, program, inverse) {
	    var params = this.setupFullMustacheParams(sexpr, program, inverse),
	        path = sexpr.path,
	        name = path.parts[0];

	    if (this.options.knownHelpers[name]) {
	      this.opcode('invokeKnownHelper', params.length, name);
	    } else if (this.options.knownHelpersOnly) {
	      throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
	    } else {
	      path.strict = true;
	      path.falsy = true;

	      this.accept(path);
	      this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
	    }
	  },

	  PathExpression: function PathExpression(path) {
	    this.addDepth(path.depth);
	    this.opcode('getContext', path.depth);

	    var name = path.parts[0],
	        scoped = _ast2['default'].helpers.scopedId(path),
	        blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

	    if (blockParamId) {
	      this.opcode('lookupBlockParam', blockParamId, path.parts);
	    } else if (!name) {
	      // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
	      this.opcode('pushContext');
	    } else if (path.data) {
	      this.options.data = true;
	      this.opcode('lookupData', path.depth, path.parts, path.strict);
	    } else {
	      this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
	    }
	  },

	  StringLiteral: function StringLiteral(string) {
	    this.opcode('pushString', string.value);
	  },

	  NumberLiteral: function NumberLiteral(number) {
	    this.opcode('pushLiteral', number.value);
	  },

	  BooleanLiteral: function BooleanLiteral(bool) {
	    this.opcode('pushLiteral', bool.value);
	  },

	  UndefinedLiteral: function UndefinedLiteral() {
	    this.opcode('pushLiteral', 'undefined');
	  },

	  NullLiteral: function NullLiteral() {
	    this.opcode('pushLiteral', 'null');
	  },

	  Hash: function Hash(hash) {
	    var pairs = hash.pairs,
	        i = 0,
	        l = pairs.length;

	    this.opcode('pushHash');

	    for (; i < l; i++) {
	      this.pushParam(pairs[i].value);
	    }
	    while (i--) {
	      this.opcode('assignToHash', pairs[i].key);
	    }
	    this.opcode('popHash');
	  },

	  // HELPERS
	  opcode: function opcode(name) {
	    this.opcodes.push({ opcode: name, args: slice.call(arguments, 1), loc: this.sourceNode[0].loc });
	  },

	  addDepth: function addDepth(depth) {
	    if (!depth) {
	      return;
	    }

	    this.useDepths = true;
	  },

	  classifySexpr: function classifySexpr(sexpr) {
	    var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);

	    var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

	    // a mustache is an eligible helper if:
	    // * its id is simple (a single part, not `this` or `..`)
	    var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);

	    // if a mustache is an eligible helper but not a definite
	    // helper, it is ambiguous, and will be resolved in a later
	    // pass or at runtime.
	    var isEligible = !isBlockParam && (isHelper || isSimple);

	    // if ambiguous, we can possibly resolve the ambiguity now
	    // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
	    if (isEligible && !isHelper) {
	      var _name2 = sexpr.path.parts[0],
	          options = this.options;

	      if (options.knownHelpers[_name2]) {
	        isHelper = true;
	      } else if (options.knownHelpersOnly) {
	        isEligible = false;
	      }
	    }

	    if (isHelper) {
	      return 'helper';
	    } else if (isEligible) {
	      return 'ambiguous';
	    } else {
	      return 'simple';
	    }
	  },

	  pushParams: function pushParams(params) {
	    for (var i = 0, l = params.length; i < l; i++) {
	      this.pushParam(params[i]);
	    }
	  },

	  pushParam: function pushParam(val) {
	    var value = val.value != null ? val.value : val.original || '';

	    if (this.stringParams) {
	      if (value.replace) {
	        value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
	      }

	      if (val.depth) {
	        this.addDepth(val.depth);
	      }
	      this.opcode('getContext', val.depth || 0);
	      this.opcode('pushStringParam', value, val.type);

	      if (val.type === 'SubExpression') {
	        // SubExpressions get evaluated and passed in
	        // in string params mode.
	        this.accept(val);
	      }
	    } else {
	      if (this.trackIds) {
	        var blockParamIndex = undefined;
	        if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
	          blockParamIndex = this.blockParamIndex(val.parts[0]);
	        }
	        if (blockParamIndex) {
	          var blockParamChild = val.parts.slice(1).join('.');
	          this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
	        } else {
	          value = val.original || value;
	          if (value.replace) {
	            value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
	          }

	          this.opcode('pushId', val.type, value);
	        }
	      }
	      this.accept(val);
	    }
	  },

	  setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
	    var params = sexpr.params;
	    this.pushParams(params);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    if (sexpr.hash) {
	      this.accept(sexpr.hash);
	    } else {
	      this.opcode('emptyHash', omitEmpty);
	    }

	    return params;
	  },

	  blockParamIndex: function blockParamIndex(name) {
	    for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
	      var blockParams = this.options.blockParams[depth],
	          param = blockParams && _utils.indexOf(blockParams, name);
	      if (blockParams && param >= 0) {
	        return [depth, param];
	      }
	    }
	  }
	};

	function precompile(input, options, env) {
	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
	  }

	  options = options || {};
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var ast = env.parse(input, options),
	      environment = new env.Compiler().compile(ast, options);
	  return new env.JavaScriptCompiler().compile(environment, options);
	}

	function compile(input, options, env) {
	  if (options === undefined) options = {};

	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
	  }

	  options = _utils.extend({}, options);
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var compiled = undefined;

	  function compileInput() {
	    var ast = env.parse(input, options),
	        environment = new env.Compiler().compile(ast, options),
	        templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
	    return env.template(templateSpec);
	  }

	  // Template is only compiled on first use and cached after that point.
	  function ret(context, execOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled.call(this, context, execOptions);
	  }
	  ret._setup = function (setupOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._setup(setupOptions);
	  };
	  ret._child = function (i, data, blockParams, depths) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._child(i, data, blockParams, depths);
	  };
	  return ret;
	}

	function argEquals(a, b) {
	  if (a === b) {
	    return true;
	  }

	  if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
	    for (var i = 0; i < a.length; i++) {
	      if (!argEquals(a[i], b[i])) {
	        return false;
	      }
	    }
	    return true;
	  }
	}

	function transformLiteralToPath(sexpr) {
	  if (!sexpr.path.parts) {
	    var literal = sexpr.path;
	    // Casting to string here to make false and 0 literal values play nicely with the rest
	    // of the system.
	    sexpr.path = {
	      type: 'PathExpression',
	      data: false,
	      depth: 0,
	      parts: [literal.original + ''],
	      original: literal.original + '',
	      loc: literal.loc
	    };
	  }
	}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _base = __webpack_require__(4);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(5);

	var _codeGen = __webpack_require__(43);

	var _codeGen2 = _interopRequireDefault(_codeGen);

	function Literal(value) {
	  this.value = value;
	}

	function JavaScriptCompiler() {}

	JavaScriptCompiler.prototype = {
	  // PUBLIC API: You can override these methods in a subclass to provide
	  // alternative compiled forms for name lookup and buffering semantics
	  nameLookup: function nameLookup(parent, name /* , type*/) {
	    if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
	      return [parent, '.', name];
	    } else {
	      return [parent, '[', JSON.stringify(name), ']'];
	    }
	  },
	  depthedLookup: function depthedLookup(name) {
	    return [this.aliasable('container.lookup'), '(depths, "', name, '")'];
	  },

	  compilerInfo: function compilerInfo() {
	    var revision = _base.COMPILER_REVISION,
	        versions = _base.REVISION_CHANGES[revision];
	    return [revision, versions];
	  },

	  appendToBuffer: function appendToBuffer(source, location, explicit) {
	    // Force a source as this simplifies the merge logic.
	    if (!_utils.isArray(source)) {
	      source = [source];
	    }
	    source = this.source.wrap(source, location);

	    if (this.environment.isSimple) {
	      return ['return ', source, ';'];
	    } else if (explicit) {
	      // This is a case where the buffer operation occurs as a child of another
	      // construct, generally braces. We have to explicitly output these buffer
	      // operations to ensure that the emitted code goes in the correct location.
	      return ['buffer += ', source, ';'];
	    } else {
	      source.appendToBuffer = true;
	      return source;
	    }
	  },

	  initializeBuffer: function initializeBuffer() {
	    return this.quotedString('');
	  },
	  // END PUBLIC API

	  compile: function compile(environment, options, context, asObject) {
	    this.environment = environment;
	    this.options = options;
	    this.stringParams = this.options.stringParams;
	    this.trackIds = this.options.trackIds;
	    this.precompile = !asObject;

	    this.name = this.environment.name;
	    this.isChild = !!context;
	    this.context = context || {
	      decorators: [],
	      programs: [],
	      environments: []
	    };

	    this.preamble();

	    this.stackSlot = 0;
	    this.stackVars = [];
	    this.aliases = {};
	    this.registers = { list: [] };
	    this.hashes = [];
	    this.compileStack = [];
	    this.inlineStack = [];
	    this.blockParams = [];

	    this.compileChildren(environment, options);

	    this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
	    this.useBlockParams = this.useBlockParams || environment.useBlockParams;

	    var opcodes = environment.opcodes,
	        opcode = undefined,
	        firstLoc = undefined,
	        i = undefined,
	        l = undefined;

	    for (i = 0, l = opcodes.length; i < l; i++) {
	      opcode = opcodes[i];

	      this.source.currentLocation = opcode.loc;
	      firstLoc = firstLoc || opcode.loc;
	      this[opcode.opcode].apply(this, opcode.args);
	    }

	    // Flush any trailing content that might be pending.
	    this.source.currentLocation = firstLoc;
	    this.pushSource('');

	    /* istanbul ignore next */
	    if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
	      throw new _exception2['default']('Compile completed with content left on stack');
	    }

	    if (!this.decorators.isEmpty()) {
	      this.useDecorators = true;

	      this.decorators.prepend('var decorators = container.decorators;\n');
	      this.decorators.push('return fn;');

	      if (asObject) {
	        this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
	      } else {
	        this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
	        this.decorators.push('}\n');
	        this.decorators = this.decorators.merge();
	      }
	    } else {
	      this.decorators = undefined;
	    }

	    var fn = this.createFunctionContext(asObject);
	    if (!this.isChild) {
	      var ret = {
	        compiler: this.compilerInfo(),
	        main: fn
	      };

	      if (this.decorators) {
	        ret.main_d = this.decorators; // eslint-disable-line camelcase
	        ret.useDecorators = true;
	      }

	      var _context = this.context;
	      var programs = _context.programs;
	      var decorators = _context.decorators;

	      for (i = 0, l = programs.length; i < l; i++) {
	        if (programs[i]) {
	          ret[i] = programs[i];
	          if (decorators[i]) {
	            ret[i + '_d'] = decorators[i];
	            ret.useDecorators = true;
	          }
	        }
	      }

	      if (this.environment.usePartial) {
	        ret.usePartial = true;
	      }
	      if (this.options.data) {
	        ret.useData = true;
	      }
	      if (this.useDepths) {
	        ret.useDepths = true;
	      }
	      if (this.useBlockParams) {
	        ret.useBlockParams = true;
	      }
	      if (this.options.compat) {
	        ret.compat = true;
	      }

	      if (!asObject) {
	        ret.compiler = JSON.stringify(ret.compiler);

	        this.source.currentLocation = { start: { line: 1, column: 0 } };
	        ret = this.objectLiteral(ret);

	        if (options.srcName) {
	          ret = ret.toStringWithSourceMap({ file: options.destName });
	          ret.map = ret.map && ret.map.toString();
	        } else {
	          ret = ret.toString();
	        }
	      } else {
	        ret.compilerOptions = this.options;
	      }

	      return ret;
	    } else {
	      return fn;
	    }
	  },

	  preamble: function preamble() {
	    // track the last context pushed into place to allow skipping the
	    // getContext opcode when it would be a noop
	    this.lastContext = 0;
	    this.source = new _codeGen2['default'](this.options.srcName);
	    this.decorators = new _codeGen2['default'](this.options.srcName);
	  },

	  createFunctionContext: function createFunctionContext(asObject) {
	    var varDeclarations = '';

	    var locals = this.stackVars.concat(this.registers.list);
	    if (locals.length > 0) {
	      varDeclarations += ', ' + locals.join(', ');
	    }

	    // Generate minimizer alias mappings
	    //
	    // When using true SourceNodes, this will update all references to the given alias
	    // as the source nodes are reused in situ. For the non-source node compilation mode,
	    // aliases will not be used, but this case is already being run on the client and
	    // we aren't concern about minimizing the template size.
	    var aliasCount = 0;
	    for (var alias in this.aliases) {
	      // eslint-disable-line guard-for-in
	      var node = this.aliases[alias];

	      if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
	        varDeclarations += ', alias' + ++aliasCount + '=' + alias;
	        node.children[0] = 'alias' + aliasCount;
	      }
	    }

	    var params = ['container', 'depth0', 'helpers', 'partials', 'data'];

	    if (this.useBlockParams || this.useDepths) {
	      params.push('blockParams');
	    }
	    if (this.useDepths) {
	      params.push('depths');
	    }

	    // Perform a second pass over the output to merge content when possible
	    var source = this.mergeSource(varDeclarations);

	    if (asObject) {
	      params.push(source);

	      return Function.apply(this, params);
	    } else {
	      return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
	    }
	  },
	  mergeSource: function mergeSource(varDeclarations) {
	    var isSimple = this.environment.isSimple,
	        appendOnly = !this.forceBuffer,
	        appendFirst = undefined,
	        sourceSeen = undefined,
	        bufferStart = undefined,
	        bufferEnd = undefined;
	    this.source.each(function (line) {
	      if (line.appendToBuffer) {
	        if (bufferStart) {
	          line.prepend('  + ');
	        } else {
	          bufferStart = line;
	        }
	        bufferEnd = line;
	      } else {
	        if (bufferStart) {
	          if (!sourceSeen) {
	            appendFirst = true;
	          } else {
	            bufferStart.prepend('buffer += ');
	          }
	          bufferEnd.add(';');
	          bufferStart = bufferEnd = undefined;
	        }

	        sourceSeen = true;
	        if (!isSimple) {
	          appendOnly = false;
	        }
	      }
	    });

	    if (appendOnly) {
	      if (bufferStart) {
	        bufferStart.prepend('return ');
	        bufferEnd.add(';');
	      } else if (!sourceSeen) {
	        this.source.push('return "";');
	      }
	    } else {
	      varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());

	      if (bufferStart) {
	        bufferStart.prepend('return buffer + ');
	        bufferEnd.add(';');
	      } else {
	        this.source.push('return buffer;');
	      }
	    }

	    if (varDeclarations) {
	      this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
	    }

	    return this.source.merge();
	  },

	  // [blockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // On stack, after: return value of blockHelperMissing
	  //
	  // The purpose of this opcode is to take a block of the form
	  // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
	  // replace it on the stack with the result of properly
	  // invoking blockHelperMissing.
	  blockValue: function blockValue(name) {
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs(name, 0, params);

	    var blockName = this.popStack();
	    params.splice(1, 0, blockName);

	    this.push(this.source.functionCall(blockHelperMissing, 'call', params));
	  },

	  // [ambiguousBlockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // Compiler value, before: lastHelper=value of last found helper, if any
	  // On stack, after, if no lastHelper: same as [blockValue]
	  // On stack, after, if lastHelper: value
	  ambiguousBlockValue: function ambiguousBlockValue() {
	    // We're being a bit cheeky and reusing the options value from the prior exec
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs('', 0, params, true);

	    this.flushInline();

	    var current = this.topStack();
	    params.splice(1, 0, current);

	    this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
	  },

	  // [appendContent]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  //
	  // Appends the string value of `content` to the current buffer
	  appendContent: function appendContent(content) {
	    if (this.pendingContent) {
	      content = this.pendingContent + content;
	    } else {
	      this.pendingLocation = this.source.currentLocation;
	    }

	    this.pendingContent = content;
	  },

	  // [append]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Coerces `value` to a String and appends it to the current buffer.
	  //
	  // If `value` is truthy, or 0, it is coerced into a string and appended
	  // Otherwise, the empty string is appended
	  append: function append() {
	    if (this.isInline()) {
	      this.replaceStack(function (current) {
	        return [' != null ? ', current, ' : ""'];
	      });

	      this.pushSource(this.appendToBuffer(this.popStack()));
	    } else {
	      var local = this.popStack();
	      this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
	      if (this.environment.isSimple) {
	        this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
	      }
	    }
	  },

	  // [appendEscaped]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Escape `value` and append it to the buffer
	  appendEscaped: function appendEscaped() {
	    this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
	  },

	  // [getContext]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  // Compiler value, after: lastContext=depth
	  //
	  // Set the value of the `lastContext` compiler value to the depth
	  getContext: function getContext(depth) {
	    this.lastContext = depth;
	  },

	  // [pushContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext, ...
	  //
	  // Pushes the value of the current context onto the stack.
	  pushContext: function pushContext() {
	    this.pushStackLiteral(this.contextName(this.lastContext));
	  },

	  // [lookupOnContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext[name], ...
	  //
	  // Looks up the value of `name` on the current context and pushes
	  // it onto the stack.
	  lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
	    var i = 0;

	    if (!scoped && this.options.compat && !this.lastContext) {
	      // The depthed query is expected to handle the undefined logic for the root level that
	      // is implemented below, so we evaluate that directly in compat mode
	      this.push(this.depthedLookup(parts[i++]));
	    } else {
	      this.pushContext();
	    }

	    this.resolvePath('context', parts, i, falsy, strict);
	  },

	  // [lookupBlockParam]
	  //
	  // On stack, before: ...
	  // On stack, after: blockParam[name], ...
	  //
	  // Looks up the value of `parts` on the given block param and pushes
	  // it onto the stack.
	  lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
	    this.useBlockParams = true;

	    this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
	    this.resolvePath('context', parts, 1);
	  },

	  // [lookupData]
	  //
	  // On stack, before: ...
	  // On stack, after: data, ...
	  //
	  // Push the data lookup operator
	  lookupData: function lookupData(depth, parts, strict) {
	    if (!depth) {
	      this.pushStackLiteral('data');
	    } else {
	      this.pushStackLiteral('container.data(data, ' + depth + ')');
	    }

	    this.resolvePath('data', parts, 0, true, strict);
	  },

	  resolvePath: function resolvePath(type, parts, i, falsy, strict) {
	    // istanbul ignore next

	    var _this = this;

	    if (this.options.strict || this.options.assumeObjects) {
	      this.push(strictLookup(this.options.strict && strict, this, parts, type));
	      return;
	    }

	    var len = parts.length;
	    for (; i < len; i++) {
	      /* eslint-disable no-loop-func */
	      this.replaceStack(function (current) {
	        var lookup = _this.nameLookup(current, parts[i], type);
	        // We want to ensure that zero and false are handled properly if the context (falsy flag)
	        // needs to have the special handling for these values.
	        if (!falsy) {
	          return [' != null ? ', lookup, ' : ', current];
	        } else {
	          // Otherwise we can use generic falsy handling
	          return [' && ', lookup];
	        }
	      });
	      /* eslint-enable no-loop-func */
	    }
	  },

	  // [resolvePossibleLambda]
	  //
	  // On stack, before: value, ...
	  // On stack, after: resolved value, ...
	  //
	  // If the `value` is a lambda, replace it on the stack by
	  // the return value of the lambda
	  resolvePossibleLambda: function resolvePossibleLambda() {
	    this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
	  },

	  // [pushStringParam]
	  //
	  // On stack, before: ...
	  // On stack, after: string, currentContext, ...
	  //
	  // This opcode is designed for use in string mode, which
	  // provides the string value of a parameter along with its
	  // depth rather than resolving it immediately.
	  pushStringParam: function pushStringParam(string, type) {
	    this.pushContext();
	    this.pushString(type);

	    // If it's a subexpression, the string result
	    // will be pushed after this opcode.
	    if (type !== 'SubExpression') {
	      if (typeof string === 'string') {
	        this.pushString(string);
	      } else {
	        this.pushStackLiteral(string);
	      }
	    }
	  },

	  emptyHash: function emptyHash(omitEmpty) {
	    if (this.trackIds) {
	      this.push('{}'); // hashIds
	    }
	    if (this.stringParams) {
	      this.push('{}'); // hashContexts
	      this.push('{}'); // hashTypes
	    }
	    this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
	  },
	  pushHash: function pushHash() {
	    if (this.hash) {
	      this.hashes.push(this.hash);
	    }
	    this.hash = { values: [], types: [], contexts: [], ids: [] };
	  },
	  popHash: function popHash() {
	    var hash = this.hash;
	    this.hash = this.hashes.pop();

	    if (this.trackIds) {
	      this.push(this.objectLiteral(hash.ids));
	    }
	    if (this.stringParams) {
	      this.push(this.objectLiteral(hash.contexts));
	      this.push(this.objectLiteral(hash.types));
	    }

	    this.push(this.objectLiteral(hash.values));
	  },

	  // [pushString]
	  //
	  // On stack, before: ...
	  // On stack, after: quotedString(string), ...
	  //
	  // Push a quoted version of `string` onto the stack
	  pushString: function pushString(string) {
	    this.pushStackLiteral(this.quotedString(string));
	  },

	  // [pushLiteral]
	  //
	  // On stack, before: ...
	  // On stack, after: value, ...
	  //
	  // Pushes a value onto the stack. This operation prevents
	  // the compiler from creating a temporary variable to hold
	  // it.
	  pushLiteral: function pushLiteral(value) {
	    this.pushStackLiteral(value);
	  },

	  // [pushProgram]
	  //
	  // On stack, before: ...
	  // On stack, after: program(guid), ...
	  //
	  // Push a program expression onto the stack. This takes
	  // a compile-time guid and converts it into a runtime-accessible
	  // expression.
	  pushProgram: function pushProgram(guid) {
	    if (guid != null) {
	      this.pushStackLiteral(this.programExpression(guid));
	    } else {
	      this.pushStackLiteral(null);
	    }
	  },

	  // [registerDecorator]
	  //
	  // On stack, before: hash, program, params..., ...
	  // On stack, after: ...
	  //
	  // Pops off the decorator's parameters, invokes the decorator,
	  // and inserts the decorator into the decorators list.
	  registerDecorator: function registerDecorator(paramSize, name) {
	    var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
	        options = this.setupHelperArgs(name, paramSize);

	    this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
	  },

	  // [invokeHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // Pops off the helper's parameters, invokes the helper,
	  // and pushes the helper's return value onto the stack.
	  //
	  // If the helper is not found, `helperMissing` is called.
	  invokeHelper: function invokeHelper(paramSize, name, isSimple) {
	    var nonHelper = this.popStack(),
	        helper = this.setupHelper(paramSize, name),
	        simple = isSimple ? [helper.name, ' || '] : '';

	    var lookup = ['('].concat(simple, nonHelper);
	    if (!this.options.strict) {
	      lookup.push(' || ', this.aliasable('helpers.helperMissing'));
	    }
	    lookup.push(')');

	    this.push(this.source.functionCall(lookup, 'call', helper.callParams));
	  },

	  // [invokeKnownHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // This operation is used when the helper is known to exist,
	  // so a `helperMissing` fallback is not required.
	  invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
	    var helper = this.setupHelper(paramSize, name);
	    this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
	  },

	  // [invokeAmbiguous]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of disambiguation
	  //
	  // This operation is used when an expression like `{{foo}}`
	  // is provided, but we don't know at compile-time whether it
	  // is a helper or a path.
	  //
	  // This operation emits more code than the other options,
	  // and can be avoided by passing the `knownHelpers` and
	  // `knownHelpersOnly` flags at compile-time.
	  invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
	    this.useRegister('helper');

	    var nonHelper = this.popStack();

	    this.emptyHash();
	    var helper = this.setupHelper(0, name, helperCall);

	    var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

	    var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
	    if (!this.options.strict) {
	      lookup[0] = '(helper = ';
	      lookup.push(' != null ? helper : ', this.aliasable('helpers.helperMissing'));
	    }

	    this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
	  },

	  // [invokePartial]
	  //
	  // On stack, before: context, ...
	  // On stack after: result of partial invocation
	  //
	  // This operation pops off a context, invokes a partial with that context,
	  // and pushes the result of the invocation back.
	  invokePartial: function invokePartial(isDynamic, name, indent) {
	    var params = [],
	        options = this.setupParams(name, 1, params);

	    if (isDynamic) {
	      name = this.popStack();
	      delete options.name;
	    }

	    if (indent) {
	      options.indent = JSON.stringify(indent);
	    }
	    options.helpers = 'helpers';
	    options.partials = 'partials';
	    options.decorators = 'container.decorators';

	    if (!isDynamic) {
	      params.unshift(this.nameLookup('partials', name, 'partial'));
	    } else {
	      params.unshift(name);
	    }

	    if (this.options.compat) {
	      options.depths = 'depths';
	    }
	    options = this.objectLiteral(options);
	    params.push(options);

	    this.push(this.source.functionCall('container.invokePartial', '', params));
	  },

	  // [assignToHash]
	  //
	  // On stack, before: value, ..., hash, ...
	  // On stack, after: ..., hash, ...
	  //
	  // Pops a value off the stack and assigns it to the current hash
	  assignToHash: function assignToHash(key) {
	    var value = this.popStack(),
	        context = undefined,
	        type = undefined,
	        id = undefined;

	    if (this.trackIds) {
	      id = this.popStack();
	    }
	    if (this.stringParams) {
	      type = this.popStack();
	      context = this.popStack();
	    }

	    var hash = this.hash;
	    if (context) {
	      hash.contexts[key] = context;
	    }
	    if (type) {
	      hash.types[key] = type;
	    }
	    if (id) {
	      hash.ids[key] = id;
	    }
	    hash.values[key] = value;
	  },

	  pushId: function pushId(type, name, child) {
	    if (type === 'BlockParam') {
	      this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
	    } else if (type === 'PathExpression') {
	      this.pushString(name);
	    } else if (type === 'SubExpression') {
	      this.pushStackLiteral('true');
	    } else {
	      this.pushStackLiteral('null');
	    }
	  },

	  // HELPERS

	  compiler: JavaScriptCompiler,

	  compileChildren: function compileChildren(environment, options) {
	    var children = environment.children,
	        child = undefined,
	        compiler = undefined;

	    for (var i = 0, l = children.length; i < l; i++) {
	      child = children[i];
	      compiler = new this.compiler(); // eslint-disable-line new-cap

	      var existing = this.matchExistingProgram(child);

	      if (existing == null) {
	        this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children
	        var index = this.context.programs.length;
	        child.index = index;
	        child.name = 'program' + index;
	        this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
	        this.context.decorators[index] = compiler.decorators;
	        this.context.environments[index] = child;

	        this.useDepths = this.useDepths || compiler.useDepths;
	        this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
	        child.useDepths = this.useDepths;
	        child.useBlockParams = this.useBlockParams;
	      } else {
	        child.index = existing.index;
	        child.name = 'program' + existing.index;

	        this.useDepths = this.useDepths || existing.useDepths;
	        this.useBlockParams = this.useBlockParams || existing.useBlockParams;
	      }
	    }
	  },
	  matchExistingProgram: function matchExistingProgram(child) {
	    for (var i = 0, len = this.context.environments.length; i < len; i++) {
	      var environment = this.context.environments[i];
	      if (environment && environment.equals(child)) {
	        return environment;
	      }
	    }
	  },

	  programExpression: function programExpression(guid) {
	    var child = this.environment.children[guid],
	        programParams = [child.index, 'data', child.blockParams];

	    if (this.useBlockParams || this.useDepths) {
	      programParams.push('blockParams');
	    }
	    if (this.useDepths) {
	      programParams.push('depths');
	    }

	    return 'container.program(' + programParams.join(', ') + ')';
	  },

	  useRegister: function useRegister(name) {
	    if (!this.registers[name]) {
	      this.registers[name] = true;
	      this.registers.list.push(name);
	    }
	  },

	  push: function push(expr) {
	    if (!(expr instanceof Literal)) {
	      expr = this.source.wrap(expr);
	    }

	    this.inlineStack.push(expr);
	    return expr;
	  },

	  pushStackLiteral: function pushStackLiteral(item) {
	    this.push(new Literal(item));
	  },

	  pushSource: function pushSource(source) {
	    if (this.pendingContent) {
	      this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
	      this.pendingContent = undefined;
	    }

	    if (source) {
	      this.source.push(source);
	    }
	  },

	  replaceStack: function replaceStack(callback) {
	    var prefix = ['('],
	        stack = undefined,
	        createdStack = undefined,
	        usedLiteral = undefined;

	    /* istanbul ignore next */
	    if (!this.isInline()) {
	      throw new _exception2['default']('replaceStack on non-inline');
	    }

	    // We want to merge the inline statement into the replacement statement via ','
	    var top = this.popStack(true);

	    if (top instanceof Literal) {
	      // Literals do not need to be inlined
	      stack = [top.value];
	      prefix = ['(', stack];
	      usedLiteral = true;
	    } else {
	      // Get or create the current stack name for use by the inline
	      createdStack = true;
	      var _name = this.incrStack();

	      prefix = ['((', this.push(_name), ' = ', top, ')'];
	      stack = this.topStack();
	    }

	    var item = callback.call(this, stack);

	    if (!usedLiteral) {
	      this.popStack();
	    }
	    if (createdStack) {
	      this.stackSlot--;
	    }
	    this.push(prefix.concat(item, ')'));
	  },

	  incrStack: function incrStack() {
	    this.stackSlot++;
	    if (this.stackSlot > this.stackVars.length) {
	      this.stackVars.push('stack' + this.stackSlot);
	    }
	    return this.topStackName();
	  },
	  topStackName: function topStackName() {
	    return 'stack' + this.stackSlot;
	  },
	  flushInline: function flushInline() {
	    var inlineStack = this.inlineStack;
	    this.inlineStack = [];
	    for (var i = 0, len = inlineStack.length; i < len; i++) {
	      var entry = inlineStack[i];
	      /* istanbul ignore if */
	      if (entry instanceof Literal) {
	        this.compileStack.push(entry);
	      } else {
	        var stack = this.incrStack();
	        this.pushSource([stack, ' = ', entry, ';']);
	        this.compileStack.push(stack);
	      }
	    }
	  },
	  isInline: function isInline() {
	    return this.inlineStack.length;
	  },

	  popStack: function popStack(wrapped) {
	    var inline = this.isInline(),
	        item = (inline ? this.inlineStack : this.compileStack).pop();

	    if (!wrapped && item instanceof Literal) {
	      return item.value;
	    } else {
	      if (!inline) {
	        /* istanbul ignore next */
	        if (!this.stackSlot) {
	          throw new _exception2['default']('Invalid stack pop');
	        }
	        this.stackSlot--;
	      }
	      return item;
	    }
	  },

	  topStack: function topStack() {
	    var stack = this.isInline() ? this.inlineStack : this.compileStack,
	        item = stack[stack.length - 1];

	    /* istanbul ignore if */
	    if (item instanceof Literal) {
	      return item.value;
	    } else {
	      return item;
	    }
	  },

	  contextName: function contextName(context) {
	    if (this.useDepths && context) {
	      return 'depths[' + context + ']';
	    } else {
	      return 'depth' + context;
	    }
	  },

	  quotedString: function quotedString(str) {
	    return this.source.quotedString(str);
	  },

	  objectLiteral: function objectLiteral(obj) {
	    return this.source.objectLiteral(obj);
	  },

	  aliasable: function aliasable(name) {
	    var ret = this.aliases[name];
	    if (ret) {
	      ret.referenceCount++;
	      return ret;
	    }

	    ret = this.aliases[name] = this.source.wrap(name);
	    ret.aliasable = true;
	    ret.referenceCount = 1;

	    return ret;
	  },

	  setupHelper: function setupHelper(paramSize, name, blockHelper) {
	    var params = [],
	        paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
	    var foundHelper = this.nameLookup('helpers', name, 'helper'),
	        callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : (container.nullContext || {})');

	    return {
	      params: params,
	      paramsInit: paramsInit,
	      name: foundHelper,
	      callParams: [callContext].concat(params)
	    };
	  },

	  setupParams: function setupParams(helper, paramSize, params) {
	    var options = {},
	        contexts = [],
	        types = [],
	        ids = [],
	        objectArgs = !params,
	        param = undefined;

	    if (objectArgs) {
	      params = [];
	    }

	    options.name = this.quotedString(helper);
	    options.hash = this.popStack();

	    if (this.trackIds) {
	      options.hashIds = this.popStack();
	    }
	    if (this.stringParams) {
	      options.hashTypes = this.popStack();
	      options.hashContexts = this.popStack();
	    }

	    var inverse = this.popStack(),
	        program = this.popStack();

	    // Avoid setting fn and inverse if neither are set. This allows
	    // helpers to do a check for `if (options.fn)`
	    if (program || inverse) {
	      options.fn = program || 'container.noop';
	      options.inverse = inverse || 'container.noop';
	    }

	    // The parameters go on to the stack in order (making sure that they are evaluated in order)
	    // so we need to pop them off the stack in reverse order
	    var i = paramSize;
	    while (i--) {
	      param = this.popStack();
	      params[i] = param;

	      if (this.trackIds) {
	        ids[i] = this.popStack();
	      }
	      if (this.stringParams) {
	        types[i] = this.popStack();
	        contexts[i] = this.popStack();
	      }
	    }

	    if (objectArgs) {
	      options.args = this.source.generateArray(params);
	    }

	    if (this.trackIds) {
	      options.ids = this.source.generateArray(ids);
	    }
	    if (this.stringParams) {
	      options.types = this.source.generateArray(types);
	      options.contexts = this.source.generateArray(contexts);
	    }

	    if (this.options.data) {
	      options.data = 'data';
	    }
	    if (this.useBlockParams) {
	      options.blockParams = 'blockParams';
	    }
	    return options;
	  },

	  setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
	    var options = this.setupParams(helper, paramSize, params);
	    options = this.objectLiteral(options);
	    if (useRegister) {
	      this.useRegister('options');
	      params.push('options');
	      return ['options=', options];
	    } else if (params) {
	      params.push(options);
	      return '';
	    } else {
	      return options;
	    }
	  }
	};

	(function () {
	  var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');

	  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

	  for (var i = 0, l = reservedWords.length; i < l; i++) {
	    compilerWords[reservedWords[i]] = true;
	  }
	})();

	JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
	  return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
	};

	function strictLookup(requireTerminal, compiler, parts, type) {
	  var stack = compiler.popStack(),
	      i = 0,
	      len = parts.length;
	  if (requireTerminal) {
	    len--;
	  }

	  for (; i < len; i++) {
	    stack = compiler.nameLookup(stack, parts[i], type);
	  }

	  if (requireTerminal) {
	    return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ')'];
	  } else {
	    return stack;
	  }
	}

	exports['default'] = JavaScriptCompiler;
	module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	/* global define */
	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var SourceNode = undefined;

	try {
	  /* istanbul ignore next */
	  if (false) {
	    // We don't support this in AMD environments. For these environments, we asusme that
	    // they are running on the browser and thus have no need for the source-map library.
	    var SourceMap = require('source-map');
	    SourceNode = SourceMap.SourceNode;
	  }
	} catch (err) {}
	/* NOP */

	/* istanbul ignore if: tested but not covered in istanbul due to dist build  */
	if (!SourceNode) {
	  SourceNode = function (line, column, srcFile, chunks) {
	    this.src = '';
	    if (chunks) {
	      this.add(chunks);
	    }
	  };
	  /* istanbul ignore next */
	  SourceNode.prototype = {
	    add: function add(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src += chunks;
	    },
	    prepend: function prepend(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src = chunks + this.src;
	    },
	    toStringWithSourceMap: function toStringWithSourceMap() {
	      return { code: this.toString() };
	    },
	    toString: function toString() {
	      return this.src;
	    }
	  };
	}

	function castChunk(chunk, codeGen, loc) {
	  if (_utils.isArray(chunk)) {
	    var ret = [];

	    for (var i = 0, len = chunk.length; i < len; i++) {
	      ret.push(codeGen.wrap(chunk[i], loc));
	    }
	    return ret;
	  } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
	    // Handle primitives that the SourceNode will throw up on
	    return chunk + '';
	  }
	  return chunk;
	}

	function CodeGen(srcFile) {
	  this.srcFile = srcFile;
	  this.source = [];
	}

	CodeGen.prototype = {
	  isEmpty: function isEmpty() {
	    return !this.source.length;
	  },
	  prepend: function prepend(source, loc) {
	    this.source.unshift(this.wrap(source, loc));
	  },
	  push: function push(source, loc) {
	    this.source.push(this.wrap(source, loc));
	  },

	  merge: function merge() {
	    var source = this.empty();
	    this.each(function (line) {
	      source.add(['  ', line, '\n']);
	    });
	    return source;
	  },

	  each: function each(iter) {
	    for (var i = 0, len = this.source.length; i < len; i++) {
	      iter(this.source[i]);
	    }
	  },

	  empty: function empty() {
	    var loc = this.currentLocation || { start: {} };
	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
	  },
	  wrap: function wrap(chunk) {
	    var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || { start: {} } : arguments[1];

	    if (chunk instanceof SourceNode) {
	      return chunk;
	    }

	    chunk = castChunk(chunk, this, loc);

	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
	  },

	  functionCall: function functionCall(fn, type, params) {
	    params = this.generateList(params);
	    return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
	  },

	  quotedString: function quotedString(str) {
	    return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028') // Per Ecma-262 7.3 + 7.8.4
	    .replace(/\u2029/g, '\\u2029') + '"';
	  },

	  objectLiteral: function objectLiteral(obj) {
	    var pairs = [];

	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        var value = castChunk(obj[key], this);
	        if (value !== 'undefined') {
	          pairs.push([this.quotedString(key), ':', value]);
	        }
	      }
	    }

	    var ret = this.generateList(pairs);
	    ret.prepend('{');
	    ret.add('}');
	    return ret;
	  },

	  generateList: function generateList(entries) {
	    var ret = this.empty();

	    for (var i = 0, len = entries.length; i < len; i++) {
	      if (i) {
	        ret.add(',');
	      }

	      ret.add(castChunk(entries[i], this));
	    }

	    return ret;
	  },

	  generateArray: function generateArray(entries) {
	    var ret = this.generateList(entries);
	    ret.prepend('[');
	    ret.add(']');

	    return ret;
	  }
	};

	exports['default'] = CodeGen;
	module.exports = exports['default'];

/***/ })
/******/ ])
});
;
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.dragdrop=e():t.dragdrop=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"start",function(){return i});var r=n(1),o=n(4),i=(n.n(o),r.a)},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"a",function(){return c});var a=n(2),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=function(t){function e(){r(this,e);var t=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));t.elements=t.getElements();for(var n=arguments.length,i=Array(n),a=0;a<n;a++)i[a]=arguments[a];return t.treatParams(i),t.targets=document.querySelectorAll(t.elements.targets),t.elements=document.querySelectorAll(t.elements.element),t.orders=[],t.onInit(),t}return i(e,t),u(e,[{key:"getElements",value:function(){return{element:".dragdrop",targets:".dragdrop-target"}}},{key:"mergeElements",value:function(t){Object.assign(this.elements,t)}},{key:"treatParams",value:function(t){1==t.length?"object"===s(t[0])?this.mergeElements(t[0]):"function"==typeof t[0]&&t[0](document,this):t.length>1&&"object"==s(t[0])&&(this.mergeElements(t[0]),t[1](document,this))}},{key:"dispatchEventsTarget",value:function(){var t=this,e=1;[].forEach.call(this.targets,function(n){n.setAttribute("dragdrop","target"),n.setAttribute("dragdrop-order",e),n.id="dragdrop-target-"+e,t.drop(n),t.dragover(n),t.dragleave(n),t.dragend(n),e++})}},{key:"dispatchEventsElements",value:function(){var t=this,e=1;[].forEach.call(this.elements,function(n){n.setAttribute("dragdrop","element"),n.setAttribute("draggable","true"),n.id="dragdrop-"+e,t.dragstart(n),e++})}},{key:"onInit",value:function(){this.dispatchEventsTarget(),this.dispatchEventsElements(),this.getOrders()}}]),e}(a.a)},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"a",function(){return u});var a=n(3),s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return i(e,t),s(e,[{key:"dragstart",value:function(t){var e=this;t.addEventListener("dragstart",function(t){var n=this.parentNode;e.opacityOn(this),t.dataTransfer.setData("parent",n.id),t.dataTransfer.setData("text/plain",this.id)})}},{key:"drop",value:function(t){var e=this;t.addEventListener("drop",function(t){var n=t.dataTransfer.getData("text"),r=document.getElementById(n);e.opacityOff(),e.changePosition(t,this.childNodes),this.appendChild(r),this.classList.contains("over")||this.classList.add("over"),e.getOrders()})}},{key:"dragover",value:function(t){t.addEventListener("dragover",function(t){t.preventDefault(),this.classList.contains("over")||this.classList.add("over")})}},{key:"dragleave",value:function(t){t.addEventListener("dragleave",function(t){this.classList.contains("over")&&this.classList.remove("over")})}},{key:"dragend",value:function(t){t.addEventListener("dragend",function(t){this.classList.contains("over")&&this.classList.remove("over")})}}]),e}(a.a)},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return i});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(){function t(){r(this,t)}return o(t,[{key:"getOrders",value:function(){var t=this;this.orders=[],[].forEach.call(this.targets,function(e){e.childNodes.length&&e.childNodes.forEach(function(n){if(n.tagName){var r=n.getAttribute("data-id")||0,o=parseInt(e.getAttribute("dragdrop-order"));t.orders.push({elementId:r,order:o})}})})}},{key:"changePosition",value:function(t,e){if(e.length){var n=t.dataTransfer.getData("parent"),r=document.getElementById(n);e.forEach(function(t){t.tagName&&r.appendChild(t)})}}},{key:"opacityOn",value:function(t){[].forEach.call(this.elements,function(e){e==t||e.classList.contains("out")||e.classList.add("out")})}},{key:"opacityOff",value:function(){[].forEach.call(this.elements,function(t){t.classList.contains("out")&&t.classList.remove("out")})}},{key:"reOrder",value:function(t){var e=event.dataTransfer.getData("parent"),n=this.getTargetPosition(t.id),r=this.getTargetPosition(e);if(n>r)for(var o=r;o<n;o++)console.log(this.targets[o]);else for(var i=r;i>n;i--)console.log(this.targets[i-1])}},{key:"getTargetPosition",value:function(t){return t.split("-")[2]}}]),t}()},function(t,e,n){var r=n(5);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0};o.transform=void 0;n(7)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(6)(void 0),e.push([t.i,"[dragdrop] {\n    transition: all 0.4s ease-out;\n    -moz-transition: all 0.4s ease-out;\n    -webkit-transition: all 0.4s ease-out;\n    cursor: move;\n}\n\n[dragdrop].out {\n    opacity: 0.5;\n}\n\n[dragdrop].over {\n    border: 3px dashed #333;\n    transform: scale(1.03);\n    -moz-transform: scale(1.03);\n    -webkit-transform: scale(1.03);\n}",""])},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(f(r.parts[i],e))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(f(r.parts[i],e));h[r.id]={id:r.id,refs:1,parts:a}}}}function o(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s=i[1],u=i[2],c=i[3],f={css:s,media:u,sourceMap:c};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}function i(t,e){var n=y(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=m[m.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),m.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=y(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=m.indexOf(t);e>=0&&m.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",c(e,t.attrs),i(t,e),e}function u(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",c(e,t.attrs),i(t,e),e}function c(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function f(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var c=b++;n=g||(g=s(e)),r=l.bind(null,n,c,!1),o=l.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(e),r=p.bind(null,n,e),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),r=d.bind(null,n),o=function(){a(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function l(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=O(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},v=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),y=function(t){var e={};return function(n){if(void 0===e[n]){var r=t.call(this,n);if(r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[n]=r}return e[n]}}(function(t){return document.querySelector(t)}),g=null,b=0,m=[],w=n(8);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=v()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=o(t,e);return r(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],u=h[s.id];u.refs--,i.push(u)}if(t){r(o(t,e),e)}for(var a=0;a<i.length;a++){var u=i[a];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete h[u.id]}}}};var O=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}])});
/*
    JavaScript autoComplete v1.0.4
    Copyright (c) 2014 Simon Steinberger / Pixabay
    GitHub: https://github.com/Pixabay/JavaScript-autoComplete
    License: http://www.opensource.org/licenses/mit-license.php
*/

var autoComplete = (function(){
    // "use strict";
    function autoComplete(options){
        if (!document.querySelector) return;

        // helpers
        function hasClass(el, className){ return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className); }

        function addEvent(el, type, handler){
            if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
        }
        function removeEvent(el, type, handler){
            // if (el.removeEventListener) not working in IE11
            if (el.detachEvent) el.detachEvent('on'+type, handler); else el.removeEventListener(type, handler);
        }
        function live(elClass, event, cb, context){
            addEvent(context || document, event, function(e){
                var found, el = e.target || e.srcElement;
                while (el && !(found = hasClass(el, elClass))) el = el.parentElement;
                if (found) cb.call(el, e);
            });
        }

        var o = {
            selector: 0,
            source: 0,
            minChars: 3,
            delay: 150,
            offsetLeft: 0,
            offsetTop: 1,
            cache: 1,
            menuClass: '',
            renderItem: function (item, search){
                // escape special characters
                search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
                return '<div class="autocomplete-suggestion" data-val="' + item + '">' + item.replace(re, "<b>$1</b>") + '</div>';
            },
            onSelect: function(e, term, item){}
        };
        for (var k in options) { if (options.hasOwnProperty(k)) o[k] = options[k]; }

        // init
        var elems = typeof o.selector == 'object' ? [o.selector] : document.querySelectorAll(o.selector);
        for (var i=0; i<elems.length; i++) {
            var that = elems[i];

            // create suggestions container "sc"
            that.sc = document.createElement('div');
            that.sc.className = 'autocomplete-suggestions '+o.menuClass;

            that.autocompleteAttr = that.getAttribute('autocomplete');
            that.setAttribute('autocomplete', 'off');
            that.cache = {};
            that.last_val = '';

            that.updateSC = function(resize, next){
                var rect = that.getBoundingClientRect();
                that.sc.style.left = Math.round(rect.left + (window.pageXOffset || document.documentElement.scrollLeft) + o.offsetLeft) + 'px';
                that.sc.style.top = Math.round(rect.bottom + (window.pageYOffset || document.documentElement.scrollTop) + o.offsetTop) + 'px';
                that.sc.style.width = Math.round(rect.right - rect.left) + 'px'; // outerWidth
                if (!resize) {
                    that.sc.style.display = 'block';
                    if (!that.sc.maxHeight) { that.sc.maxHeight = parseInt((window.getComputedStyle ? getComputedStyle(that.sc, null) : that.sc.currentStyle).maxHeight); }
                    if (!that.sc.suggestionHeight) that.sc.suggestionHeight = that.sc.querySelector('.autocomplete-suggestion').offsetHeight;
                    if (that.sc.suggestionHeight)
                        if (!next) that.sc.scrollTop = 0;
                        else {
                            var scrTop = that.sc.scrollTop, selTop = next.getBoundingClientRect().top - that.sc.getBoundingClientRect().top;
                            if (selTop + that.sc.suggestionHeight - that.sc.maxHeight > 0)
                                that.sc.scrollTop = selTop + that.sc.suggestionHeight + scrTop - that.sc.maxHeight;
                            else if (selTop < 0)
                                that.sc.scrollTop = selTop + scrTop;
                        }
                }
            }
            addEvent(window, 'resize', that.updateSC);
            document.body.appendChild(that.sc);

            live('autocomplete-suggestion', 'mouseleave', function(e){
                var sel = that.sc.querySelector('.autocomplete-suggestion.selected');
                if (sel) setTimeout(function(){ sel.className = sel.className.replace('selected', ''); }, 20);
            }, that.sc);

            live('autocomplete-suggestion', 'mouseover', function(e){
                var sel = that.sc.querySelector('.autocomplete-suggestion.selected');
                if (sel) sel.className = sel.className.replace('selected', '');
                this.className += ' selected';
            }, that.sc);

            live('autocomplete-suggestion', 'mousedown', function(e){
                if (hasClass(this, 'autocomplete-suggestion')) { // else outside click
                    var v = this.getAttribute('data-val');
                    that.value = v;
                    o.onSelect(e, v, this);
                    that.sc.style.display = 'none';
                }
            }, that.sc);

            that.blurHandler = function(){
                try { var over_sb = document.querySelector('.autocomplete-suggestions:hover'); } catch(e){ var over_sb = 0; }
                if (!over_sb) {
                    that.last_val = that.value;
                    that.sc.style.display = 'none';
                    setTimeout(function(){ that.sc.style.display = 'none'; }, 350); // hide suggestions on fast input
                } else if (that !== document.activeElement) setTimeout(function(){ that.focus(); }, 20);
            };
            addEvent(that, 'blur', that.blurHandler);

            var suggest = function(data){
                var val = that.value;
                that.cache[val] = data;
                if (data.length && val.length >= o.minChars) {
                    var s = '';
                    for (var i=0;i<data.length;i++) s += o.renderItem(data[i], val);
                    that.sc.innerHTML = s;
                    that.updateSC(0);
                }
                else
                    that.sc.style.display = 'none';
            }

            that.keydownHandler = function(e){
                var key = window.event ? e.keyCode : e.which;
                // down (40), up (38)
                if ((key == 40 || key == 38) && that.sc.innerHTML) {
                    var next, sel = that.sc.querySelector('.autocomplete-suggestion.selected');
                    if (!sel) {
                        next = (key == 40) ? that.sc.querySelector('.autocomplete-suggestion') : that.sc.childNodes[that.sc.childNodes.length - 1]; // first : last
                        next.className += ' selected';
                        that.value = next.getAttribute('data-val');
                    } else {
                        next = (key == 40) ? sel.nextSibling : sel.previousSibling;
                        if (next) {
                            sel.className = sel.className.replace('selected', '');
                            next.className += ' selected';
                            that.value = next.getAttribute('data-val');
                        }
                        else { sel.className = sel.className.replace('selected', ''); that.value = that.last_val; next = 0; }
                    }
                    that.updateSC(0, next);
                    return false;
                }
                // esc
                else if (key == 27) { that.value = that.last_val; that.sc.style.display = 'none'; }
                // enter
                else if (key == 13 || key == 9) {
                    var sel = that.sc.querySelector('.autocomplete-suggestion.selected');
                    if (sel && that.sc.style.display != 'none') { o.onSelect(e, sel.getAttribute('data-val'), sel); setTimeout(function(){ that.sc.style.display = 'none'; }, 20); }
                }
            };
            addEvent(that, 'keydown', that.keydownHandler);

            that.keyupHandler = function(e){
                var key = window.event ? e.keyCode : e.which;
                if (!key || (key < 35 || key > 40) && key != 13 && key != 27) {
                    var val = that.value;
                    if (val.length >= o.minChars) {
                        if (val != that.last_val) {
                            that.last_val = val;
                            clearTimeout(that.timer);
                            if (o.cache) {
                                if (val in that.cache) { suggest(that.cache[val]); return; }
                                // no requests if previous suggestions were empty
                                for (var i=1; i<val.length-o.minChars; i++) {
                                    var part = val.slice(0, val.length-i);
                                    if (part in that.cache && !that.cache[part].length) { suggest([]); return; }
                                }
                            }
                            that.timer = setTimeout(function(){ o.source(val, suggest) }, o.delay);
                        }
                    } else {
                        that.last_val = val;
                        that.sc.style.display = 'none';
                    }
                }
            };
            addEvent(that, 'keyup', that.keyupHandler);

            that.focusHandler = function(e){
                that.last_val = '\n';
                that.keyupHandler(e)
            };
            if (!o.minChars) addEvent(that, 'focus', that.focusHandler);
        }

        // public destroy method
        this.destroy = function(){
            for (var i=0; i<elems.length; i++) {
                var that = elems[i];
                removeEvent(window, 'resize', that.updateSC);
                removeEvent(that, 'blur', that.blurHandler);
                removeEvent(that, 'focus', that.focusHandler);
                removeEvent(that, 'keydown', that.keydownHandler);
                removeEvent(that, 'keyup', that.keyupHandler);
                if (that.autocompleteAttr)
                    that.setAttribute('autocomplete', that.autocompleteAttr);
                else
                    that.removeAttribute('autocomplete');
                document.body.removeChild(that.sc);
                that = null;
            }
        };
    }
    return autoComplete;
})();

(function(){
    if (typeof define === 'function' && define.amd)
        define('autoComplete', function () { return autoComplete; });
    else if (typeof module !== 'undefined' && module.exports)
        module.exports = autoComplete;
    else
        window.autoComplete = autoComplete;
})();

!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=12)}([function(t,e,i){var n;
/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
!function(e,i){"use strict";"object"==typeof t.exports?t.exports=e.document?i(e,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return i(t)}:i(e)}("undefined"!=typeof window?window:this,function(i,s){"use strict";var r=[],o=i.document,a=Object.getPrototypeOf,l=r.slice,u=r.concat,c=r.push,h=r.indexOf,d={},p=d.toString,f=d.hasOwnProperty,g=f.toString,m=g.call(Object),v={},_=function(t){return"function"==typeof t&&"number"!=typeof t.nodeType},b=function(t){return null!=t&&t===t.window},y={type:!0,src:!0,noModule:!0};function k(t,e,i){var n,s=(e=e||o).createElement("script");if(s.text=t,i)for(n in y)i[n]&&(s[n]=i[n]);e.head.appendChild(s).parentNode.removeChild(s)}function w(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?d[p.call(t)]||"object":typeof t}var x=function(t,e){return new x.fn.init(t,e)},C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function D(t){var e=!!t&&"length"in t&&t.length,i=w(t);return!_(t)&&!b(t)&&("array"===i||0===e||"number"==typeof e&&e>0&&e-1 in t)}x.fn=x.prototype={jquery:"3.3.1",constructor:x,length:0,toArray:function(){return l.call(this)},get:function(t){return null==t?l.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var e=x.merge(this.constructor(),t);return e.prevObject=this,e},each:function(t){return x.each(this,t)},map:function(t){return this.pushStack(x.map(this,function(e,i){return t.call(e,i,e)}))},slice:function(){return this.pushStack(l.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,i=+t+(t<0?e:0);return this.pushStack(i>=0&&i<e?[this[i]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:r.sort,splice:r.splice},x.extend=x.fn.extend=function(){var t,e,i,n,s,r,o=arguments[0]||{},a=1,l=arguments.length,u=!1;for("boolean"==typeof o&&(u=o,o=arguments[a]||{},a++),"object"==typeof o||_(o)||(o={}),a===l&&(o=this,a--);a<l;a++)if(null!=(t=arguments[a]))for(e in t)i=o[e],o!==(n=t[e])&&(u&&n&&(x.isPlainObject(n)||(s=Array.isArray(n)))?(s?(s=!1,r=i&&Array.isArray(i)?i:[]):r=i&&x.isPlainObject(i)?i:{},o[e]=x.extend(u,r,n)):void 0!==n&&(o[e]=n));return o},x.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var e,i;return!(!t||"[object Object]"!==p.call(t))&&(!(e=a(t))||"function"==typeof(i=f.call(e,"constructor")&&e.constructor)&&g.call(i)===m)},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},globalEval:function(t){k(t)},each:function(t,e){var i,n=0;if(D(t))for(i=t.length;n<i&&!1!==e.call(t[n],n,t[n]);n++);else for(n in t)if(!1===e.call(t[n],n,t[n]))break;return t},trim:function(t){return null==t?"":(t+"").replace(C,"")},makeArray:function(t,e){var i=e||[];return null!=t&&(D(Object(t))?x.merge(i,"string"==typeof t?[t]:t):c.call(i,t)),i},inArray:function(t,e,i){return null==e?-1:h.call(e,t,i)},merge:function(t,e){for(var i=+e.length,n=0,s=t.length;n<i;n++)t[s++]=e[n];return t.length=s,t},grep:function(t,e,i){for(var n=[],s=0,r=t.length,o=!i;s<r;s++)!e(t[s],s)!==o&&n.push(t[s]);return n},map:function(t,e,i){var n,s,r=0,o=[];if(D(t))for(n=t.length;r<n;r++)null!=(s=e(t[r],r,i))&&o.push(s);else for(r in t)null!=(s=e(t[r],r,i))&&o.push(s);return u.apply([],o)},guid:1,support:v}),"function"==typeof Symbol&&(x.fn[Symbol.iterator]=r[Symbol.iterator]),x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){d["[object "+e+"]"]=e.toLowerCase()});var S=
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
function(t){var e,i,n,s,r,o,a,l,u,c,h,d,p,f,g,m,v,_,b,y="sizzle"+1*new Date,k=t.document,w=0,x=0,C=ot(),D=ot(),S=ot(),T=function(t,e){return t===e&&(h=!0),0},I={}.hasOwnProperty,A=[],j=A.pop,M=A.push,P=A.push,E=A.slice,O=function(t,e){for(var i=0,n=t.length;i<n;i++)if(t[i]===e)return i;return-1},H="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",N="[\\x20\\t\\r\\n\\f]",B="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",F="\\["+N+"*("+B+")(?:"+N+"*([*^$|!~]?=)"+N+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+B+"))|)"+N+"*\\]",L=":("+B+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+F+")*)|.*)\\)|)",z=new RegExp(N+"+","g"),W=new RegExp("^"+N+"+|((?:^|[^\\\\])(?:\\\\.)*)"+N+"+$","g"),R=new RegExp("^"+N+"*,"+N+"*"),$=new RegExp("^"+N+"*([>+~]|"+N+")"+N+"*"),q=new RegExp("="+N+"*([^\\]'\"]*?)"+N+"*\\]","g"),U=new RegExp(L),K=new RegExp("^"+B+"$"),Y={ID:new RegExp("^#("+B+")"),CLASS:new RegExp("^\\.("+B+")"),TAG:new RegExp("^("+B+"|[*])"),ATTR:new RegExp("^"+F),PSEUDO:new RegExp("^"+L),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+N+"*(even|odd|(([+-]|)(\\d*)n|)"+N+"*(?:([+-]|)"+N+"*(\\d+)|))"+N+"*\\)|)","i"),bool:new RegExp("^(?:"+H+")$","i"),needsContext:new RegExp("^"+N+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+N+"*((?:-\\d)?\\d*)"+N+"*\\)|)(?=[^-]|$)","i")},V=/^(?:input|select|textarea|button)$/i,G=/^h\d$/i,X=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/[+~]/,Q=new RegExp("\\\\([\\da-f]{1,6}"+N+"?|("+N+")|.)","ig"),tt=function(t,e,i){var n="0x"+e-65536;return n!=n||i?e:n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320)},et=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,it=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},nt=function(){d()},st=_t(function(t){return!0===t.disabled&&("form"in t||"label"in t)},{dir:"parentNode",next:"legend"});try{P.apply(A=E.call(k.childNodes),k.childNodes),A[k.childNodes.length].nodeType}catch(t){P={apply:A.length?function(t,e){M.apply(t,E.call(e))}:function(t,e){for(var i=t.length,n=0;t[i++]=e[n++];);t.length=i-1}}}function rt(t,e,n,s){var r,a,u,c,h,f,v,_=e&&e.ownerDocument,w=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==w&&9!==w&&11!==w)return n;if(!s&&((e?e.ownerDocument||e:k)!==p&&d(e),e=e||p,g)){if(11!==w&&(h=J.exec(t)))if(r=h[1]){if(9===w){if(!(u=e.getElementById(r)))return n;if(u.id===r)return n.push(u),n}else if(_&&(u=_.getElementById(r))&&b(e,u)&&u.id===r)return n.push(u),n}else{if(h[2])return P.apply(n,e.getElementsByTagName(t)),n;if((r=h[3])&&i.getElementsByClassName&&e.getElementsByClassName)return P.apply(n,e.getElementsByClassName(r)),n}if(i.qsa&&!S[t+" "]&&(!m||!m.test(t))){if(1!==w)_=e,v=t;else if("object"!==e.nodeName.toLowerCase()){for((c=e.getAttribute("id"))?c=c.replace(et,it):e.setAttribute("id",c=y),a=(f=o(t)).length;a--;)f[a]="#"+c+" "+vt(f[a]);v=f.join(","),_=Z.test(t)&&gt(e.parentNode)||e}if(v)try{return P.apply(n,_.querySelectorAll(v)),n}catch(t){}finally{c===y&&e.removeAttribute("id")}}}return l(t.replace(W,"$1"),e,n,s)}function ot(){var t=[];return function e(i,s){return t.push(i+" ")>n.cacheLength&&delete e[t.shift()],e[i+" "]=s}}function at(t){return t[y]=!0,t}function lt(t){var e=p.createElement("fieldset");try{return!!t(e)}catch(t){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function ut(t,e){for(var i=t.split("|"),s=i.length;s--;)n.attrHandle[i[s]]=e}function ct(t,e){var i=e&&t,n=i&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;if(n)return n;if(i)for(;i=i.nextSibling;)if(i===e)return-1;return t?1:-1}function ht(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function dt(t){return function(e){var i=e.nodeName.toLowerCase();return("input"===i||"button"===i)&&e.type===t}}function pt(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&st(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ft(t){return at(function(e){return e=+e,at(function(i,n){for(var s,r=t([],i.length,e),o=r.length;o--;)i[s=r[o]]&&(i[s]=!(n[s]=i[s]))})})}function gt(t){return t&&void 0!==t.getElementsByTagName&&t}for(e in i=rt.support={},r=rt.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return!!e&&"HTML"!==e.nodeName},d=rt.setDocument=function(t){var e,s,o=t?t.ownerDocument||t:k;return o!==p&&9===o.nodeType&&o.documentElement?(f=(p=o).documentElement,g=!r(p),k!==p&&(s=p.defaultView)&&s.top!==s&&(s.addEventListener?s.addEventListener("unload",nt,!1):s.attachEvent&&s.attachEvent("onunload",nt)),i.attributes=lt(function(t){return t.className="i",!t.getAttribute("className")}),i.getElementsByTagName=lt(function(t){return t.appendChild(p.createComment("")),!t.getElementsByTagName("*").length}),i.getElementsByClassName=X.test(p.getElementsByClassName),i.getById=lt(function(t){return f.appendChild(t).id=y,!p.getElementsByName||!p.getElementsByName(y).length}),i.getById?(n.filter.ID=function(t){var e=t.replace(Q,tt);return function(t){return t.getAttribute("id")===e}},n.find.ID=function(t,e){if(void 0!==e.getElementById&&g){var i=e.getElementById(t);return i?[i]:[]}}):(n.filter.ID=function(t){var e=t.replace(Q,tt);return function(t){var i=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return i&&i.value===e}},n.find.ID=function(t,e){if(void 0!==e.getElementById&&g){var i,n,s,r=e.getElementById(t);if(r){if((i=r.getAttributeNode("id"))&&i.value===t)return[r];for(s=e.getElementsByName(t),n=0;r=s[n++];)if((i=r.getAttributeNode("id"))&&i.value===t)return[r]}return[]}}),n.find.TAG=i.getElementsByTagName?function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):i.qsa?e.querySelectorAll(t):void 0}:function(t,e){var i,n=[],s=0,r=e.getElementsByTagName(t);if("*"===t){for(;i=r[s++];)1===i.nodeType&&n.push(i);return n}return r},n.find.CLASS=i.getElementsByClassName&&function(t,e){if(void 0!==e.getElementsByClassName&&g)return e.getElementsByClassName(t)},v=[],m=[],(i.qsa=X.test(p.querySelectorAll))&&(lt(function(t){f.appendChild(t).innerHTML="<a id='"+y+"'></a><select id='"+y+"-\r\\' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+N+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||m.push("\\["+N+"*(?:value|"+H+")"),t.querySelectorAll("[id~="+y+"-]").length||m.push("~="),t.querySelectorAll(":checked").length||m.push(":checked"),t.querySelectorAll("a#"+y+"+*").length||m.push(".#.+[+~]")}),lt(function(t){t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e=p.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&m.push("name"+N+"*[*^$|!~]?="),2!==t.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),f.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),m.push(",.*:")})),(i.matchesSelector=X.test(_=f.matches||f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&lt(function(t){i.disconnectedMatch=_.call(t,"*"),_.call(t,"[s!='']:x"),v.push("!=",L)}),m=m.length&&new RegExp(m.join("|")),v=v.length&&new RegExp(v.join("|")),e=X.test(f.compareDocumentPosition),b=e||X.test(f.contains)?function(t,e){var i=9===t.nodeType?t.documentElement:t,n=e&&e.parentNode;return t===n||!(!n||1!==n.nodeType||!(i.contains?i.contains(n):t.compareDocumentPosition&&16&t.compareDocumentPosition(n)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},T=e?function(t,e){if(t===e)return h=!0,0;var n=!t.compareDocumentPosition-!e.compareDocumentPosition;return n||(1&(n=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1)||!i.sortDetached&&e.compareDocumentPosition(t)===n?t===p||t.ownerDocument===k&&b(k,t)?-1:e===p||e.ownerDocument===k&&b(k,e)?1:c?O(c,t)-O(c,e):0:4&n?-1:1)}:function(t,e){if(t===e)return h=!0,0;var i,n=0,s=t.parentNode,r=e.parentNode,o=[t],a=[e];if(!s||!r)return t===p?-1:e===p?1:s?-1:r?1:c?O(c,t)-O(c,e):0;if(s===r)return ct(t,e);for(i=t;i=i.parentNode;)o.unshift(i);for(i=e;i=i.parentNode;)a.unshift(i);for(;o[n]===a[n];)n++;return n?ct(o[n],a[n]):o[n]===k?-1:a[n]===k?1:0},p):p},rt.matches=function(t,e){return rt(t,null,null,e)},rt.matchesSelector=function(t,e){if((t.ownerDocument||t)!==p&&d(t),e=e.replace(q,"='$1']"),i.matchesSelector&&g&&!S[e+" "]&&(!v||!v.test(e))&&(!m||!m.test(e)))try{var n=_.call(t,e);if(n||i.disconnectedMatch||t.document&&11!==t.document.nodeType)return n}catch(t){}return rt(e,p,null,[t]).length>0},rt.contains=function(t,e){return(t.ownerDocument||t)!==p&&d(t),b(t,e)},rt.attr=function(t,e){(t.ownerDocument||t)!==p&&d(t);var s=n.attrHandle[e.toLowerCase()],r=s&&I.call(n.attrHandle,e.toLowerCase())?s(t,e,!g):void 0;return void 0!==r?r:i.attributes||!g?t.getAttribute(e):(r=t.getAttributeNode(e))&&r.specified?r.value:null},rt.escape=function(t){return(t+"").replace(et,it)},rt.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},rt.uniqueSort=function(t){var e,n=[],s=0,r=0;if(h=!i.detectDuplicates,c=!i.sortStable&&t.slice(0),t.sort(T),h){for(;e=t[r++];)e===t[r]&&(s=n.push(r));for(;s--;)t.splice(n[s],1)}return c=null,t},s=rt.getText=function(t){var e,i="",n=0,r=t.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)i+=s(t)}else if(3===r||4===r)return t.nodeValue}else for(;e=t[n++];)i+=s(e);return i},(n=rt.selectors={cacheLength:50,createPseudo:at,match:Y,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(Q,tt),t[3]=(t[3]||t[4]||t[5]||"").replace(Q,tt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||rt.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&rt.error(t[0]),t},PSEUDO:function(t){var e,i=!t[6]&&t[2];return Y.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":i&&U.test(i)&&(e=o(i,!0))&&(e=i.indexOf(")",i.length-e)-i.length)&&(t[0]=t[0].slice(0,e),t[2]=i.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(Q,tt).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=C[t+" "];return e||(e=new RegExp("(^|"+N+")"+t+"("+N+"|$)"))&&C(t,function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(t,e,i){return function(n){var s=rt.attr(n,t);return null==s?"!="===e:!e||(s+="","="===e?s===i:"!="===e?s!==i:"^="===e?i&&0===s.indexOf(i):"*="===e?i&&s.indexOf(i)>-1:"$="===e?i&&s.slice(-i.length)===i:"~="===e?(" "+s.replace(z," ")+" ").indexOf(i)>-1:"|="===e&&(s===i||s.slice(0,i.length+1)===i+"-"))}},CHILD:function(t,e,i,n,s){var r="nth"!==t.slice(0,3),o="last"!==t.slice(-4),a="of-type"===e;return 1===n&&0===s?function(t){return!!t.parentNode}:function(e,i,l){var u,c,h,d,p,f,g=r!==o?"nextSibling":"previousSibling",m=e.parentNode,v=a&&e.nodeName.toLowerCase(),_=!l&&!a,b=!1;if(m){if(r){for(;g;){for(d=e;d=d[g];)if(a?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;f=g="only"===t&&!f&&"nextSibling"}return!0}if(f=[o?m.firstChild:m.lastChild],o&&_){for(b=(p=(u=(c=(h=(d=m)[y]||(d[y]={}))[d.uniqueID]||(h[d.uniqueID]={}))[t]||[])[0]===w&&u[1])&&u[2],d=p&&m.childNodes[p];d=++p&&d&&d[g]||(b=p=0)||f.pop();)if(1===d.nodeType&&++b&&d===e){c[t]=[w,p,b];break}}else if(_&&(b=p=(u=(c=(h=(d=e)[y]||(d[y]={}))[d.uniqueID]||(h[d.uniqueID]={}))[t]||[])[0]===w&&u[1]),!1===b)for(;(d=++p&&d&&d[g]||(b=p=0)||f.pop())&&((a?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++b||(_&&((c=(h=d[y]||(d[y]={}))[d.uniqueID]||(h[d.uniqueID]={}))[t]=[w,b]),d!==e)););return(b-=s)===n||b%n==0&&b/n>=0}}},PSEUDO:function(t,e){var i,s=n.pseudos[t]||n.setFilters[t.toLowerCase()]||rt.error("unsupported pseudo: "+t);return s[y]?s(e):s.length>1?(i=[t,t,"",e],n.setFilters.hasOwnProperty(t.toLowerCase())?at(function(t,i){for(var n,r=s(t,e),o=r.length;o--;)t[n=O(t,r[o])]=!(i[n]=r[o])}):function(t){return s(t,0,i)}):s}},pseudos:{not:at(function(t){var e=[],i=[],n=a(t.replace(W,"$1"));return n[y]?at(function(t,e,i,s){for(var r,o=n(t,null,s,[]),a=t.length;a--;)(r=o[a])&&(t[a]=!(e[a]=r))}):function(t,s,r){return e[0]=t,n(e,null,r,i),e[0]=null,!i.pop()}}),has:at(function(t){return function(e){return rt(t,e).length>0}}),contains:at(function(t){return t=t.replace(Q,tt),function(e){return(e.textContent||e.innerText||s(e)).indexOf(t)>-1}}),lang:at(function(t){return K.test(t||"")||rt.error("unsupported lang: "+t),t=t.replace(Q,tt).toLowerCase(),function(e){var i;do{if(i=g?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(i=i.toLowerCase())===t||0===i.indexOf(t+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var i=t.location&&t.location.hash;return i&&i.slice(1)===e.id},root:function(t){return t===f},focus:function(t){return t===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:pt(!1),disabled:pt(!0),checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!n.pseudos.empty(t)},header:function(t){return G.test(t.nodeName)},input:function(t){return V.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:ft(function(){return[0]}),last:ft(function(t,e){return[e-1]}),eq:ft(function(t,e,i){return[i<0?i+e:i]}),even:ft(function(t,e){for(var i=0;i<e;i+=2)t.push(i);return t}),odd:ft(function(t,e){for(var i=1;i<e;i+=2)t.push(i);return t}),lt:ft(function(t,e,i){for(var n=i<0?i+e:i;--n>=0;)t.push(n);return t}),gt:ft(function(t,e,i){for(var n=i<0?i+e:i;++n<e;)t.push(n);return t})}}).pseudos.nth=n.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})n.pseudos[e]=ht(e);for(e in{submit:!0,reset:!0})n.pseudos[e]=dt(e);function mt(){}function vt(t){for(var e=0,i=t.length,n="";e<i;e++)n+=t[e].value;return n}function _t(t,e,i){var n=e.dir,s=e.next,r=s||n,o=i&&"parentNode"===r,a=x++;return e.first?function(e,i,s){for(;e=e[n];)if(1===e.nodeType||o)return t(e,i,s);return!1}:function(e,i,l){var u,c,h,d=[w,a];if(l){for(;e=e[n];)if((1===e.nodeType||o)&&t(e,i,l))return!0}else for(;e=e[n];)if(1===e.nodeType||o)if(c=(h=e[y]||(e[y]={}))[e.uniqueID]||(h[e.uniqueID]={}),s&&s===e.nodeName.toLowerCase())e=e[n]||e;else{if((u=c[r])&&u[0]===w&&u[1]===a)return d[2]=u[2];if(c[r]=d,d[2]=t(e,i,l))return!0}return!1}}function bt(t){return t.length>1?function(e,i,n){for(var s=t.length;s--;)if(!t[s](e,i,n))return!1;return!0}:t[0]}function yt(t,e,i,n,s){for(var r,o=[],a=0,l=t.length,u=null!=e;a<l;a++)(r=t[a])&&(i&&!i(r,n,s)||(o.push(r),u&&e.push(a)));return o}function kt(t,e,i,n,s,r){return n&&!n[y]&&(n=kt(n)),s&&!s[y]&&(s=kt(s,r)),at(function(r,o,a,l){var u,c,h,d=[],p=[],f=o.length,g=r||function(t,e,i){for(var n=0,s=e.length;n<s;n++)rt(t,e[n],i);return i}(e||"*",a.nodeType?[a]:a,[]),m=!t||!r&&e?g:yt(g,d,t,a,l),v=i?s||(r?t:f||n)?[]:o:m;if(i&&i(m,v,a,l),n)for(u=yt(v,p),n(u,[],a,l),c=u.length;c--;)(h=u[c])&&(v[p[c]]=!(m[p[c]]=h));if(r){if(s||t){if(s){for(u=[],c=v.length;c--;)(h=v[c])&&u.push(m[c]=h);s(null,v=[],u,l)}for(c=v.length;c--;)(h=v[c])&&(u=s?O(r,h):d[c])>-1&&(r[u]=!(o[u]=h))}}else v=yt(v===o?v.splice(f,v.length):v),s?s(null,o,v,l):P.apply(o,v)})}function wt(t){for(var e,i,s,r=t.length,o=n.relative[t[0].type],a=o||n.relative[" "],l=o?1:0,c=_t(function(t){return t===e},a,!0),h=_t(function(t){return O(e,t)>-1},a,!0),d=[function(t,i,n){var s=!o&&(n||i!==u)||((e=i).nodeType?c(t,i,n):h(t,i,n));return e=null,s}];l<r;l++)if(i=n.relative[t[l].type])d=[_t(bt(d),i)];else{if((i=n.filter[t[l].type].apply(null,t[l].matches))[y]){for(s=++l;s<r&&!n.relative[t[s].type];s++);return kt(l>1&&bt(d),l>1&&vt(t.slice(0,l-1).concat({value:" "===t[l-2].type?"*":""})).replace(W,"$1"),i,l<s&&wt(t.slice(l,s)),s<r&&wt(t=t.slice(s)),s<r&&vt(t))}d.push(i)}return bt(d)}return mt.prototype=n.filters=n.pseudos,n.setFilters=new mt,o=rt.tokenize=function(t,e){var i,s,r,o,a,l,u,c=D[t+" "];if(c)return e?0:c.slice(0);for(a=t,l=[],u=n.preFilter;a;){for(o in i&&!(s=R.exec(a))||(s&&(a=a.slice(s[0].length)||a),l.push(r=[])),i=!1,(s=$.exec(a))&&(i=s.shift(),r.push({value:i,type:s[0].replace(W," ")}),a=a.slice(i.length)),n.filter)!(s=Y[o].exec(a))||u[o]&&!(s=u[o](s))||(i=s.shift(),r.push({value:i,type:o,matches:s}),a=a.slice(i.length));if(!i)break}return e?a.length:a?rt.error(t):D(t,l).slice(0)},a=rt.compile=function(t,e){var i,s=[],r=[],a=S[t+" "];if(!a){for(e||(e=o(t)),i=e.length;i--;)(a=wt(e[i]))[y]?s.push(a):r.push(a);(a=S(t,function(t,e){var i=e.length>0,s=t.length>0,r=function(r,o,a,l,c){var h,f,m,v=0,_="0",b=r&&[],y=[],k=u,x=r||s&&n.find.TAG("*",c),C=w+=null==k?1:Math.random()||.1,D=x.length;for(c&&(u=o===p||o||c);_!==D&&null!=(h=x[_]);_++){if(s&&h){for(f=0,o||h.ownerDocument===p||(d(h),a=!g);m=t[f++];)if(m(h,o||p,a)){l.push(h);break}c&&(w=C)}i&&((h=!m&&h)&&v--,r&&b.push(h))}if(v+=_,i&&_!==v){for(f=0;m=e[f++];)m(b,y,o,a);if(r){if(v>0)for(;_--;)b[_]||y[_]||(y[_]=j.call(l));y=yt(y)}P.apply(l,y),c&&!r&&y.length>0&&v+e.length>1&&rt.uniqueSort(l)}return c&&(w=C,u=k),b};return i?at(r):r}(r,s))).selector=t}return a},l=rt.select=function(t,e,i,s){var r,l,u,c,h,d="function"==typeof t&&t,p=!s&&o(t=d.selector||t);if(i=i||[],1===p.length){if((l=p[0]=p[0].slice(0)).length>2&&"ID"===(u=l[0]).type&&9===e.nodeType&&g&&n.relative[l[1].type]){if(!(e=(n.find.ID(u.matches[0].replace(Q,tt),e)||[])[0]))return i;d&&(e=e.parentNode),t=t.slice(l.shift().value.length)}for(r=Y.needsContext.test(t)?0:l.length;r--&&(u=l[r],!n.relative[c=u.type]);)if((h=n.find[c])&&(s=h(u.matches[0].replace(Q,tt),Z.test(l[0].type)&&gt(e.parentNode)||e))){if(l.splice(r,1),!(t=s.length&&vt(l)))return P.apply(i,s),i;break}}return(d||a(t,p))(s,e,!g,i,!e||Z.test(t)&&gt(e.parentNode)||e),i},i.sortStable=y.split("").sort(T).join("")===y,i.detectDuplicates=!!h,d(),i.sortDetached=lt(function(t){return 1&t.compareDocumentPosition(p.createElement("fieldset"))}),lt(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||ut("type|href|height|width",function(t,e,i){if(!i)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),i.attributes&&lt(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||ut("value",function(t,e,i){if(!i&&"input"===t.nodeName.toLowerCase())return t.defaultValue}),lt(function(t){return null==t.getAttribute("disabled")})||ut(H,function(t,e,i){var n;if(!i)return!0===t[e]?e.toLowerCase():(n=t.getAttributeNode(e))&&n.specified?n.value:null}),rt}(i);x.find=S,x.expr=S.selectors,x.expr[":"]=x.expr.pseudos,x.uniqueSort=x.unique=S.uniqueSort,x.text=S.getText,x.isXMLDoc=S.isXML,x.contains=S.contains,x.escapeSelector=S.escape;var T=function(t,e,i){for(var n=[],s=void 0!==i;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(s&&x(t).is(i))break;n.push(t)}return n},I=function(t,e){for(var i=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&i.push(t);return i},A=x.expr.match.needsContext;function j(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}var M=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function P(t,e,i){return _(e)?x.grep(t,function(t,n){return!!e.call(t,n,t)!==i}):e.nodeType?x.grep(t,function(t){return t===e!==i}):"string"!=typeof e?x.grep(t,function(t){return h.call(e,t)>-1!==i}):x.filter(e,t,i)}x.filter=function(t,e,i){var n=e[0];return i&&(t=":not("+t+")"),1===e.length&&1===n.nodeType?x.find.matchesSelector(n,t)?[n]:[]:x.find.matches(t,x.grep(e,function(t){return 1===t.nodeType}))},x.fn.extend({find:function(t){var e,i,n=this.length,s=this;if("string"!=typeof t)return this.pushStack(x(t).filter(function(){for(e=0;e<n;e++)if(x.contains(s[e],this))return!0}));for(i=this.pushStack([]),e=0;e<n;e++)x.find(t,s[e],i);return n>1?x.uniqueSort(i):i},filter:function(t){return this.pushStack(P(this,t||[],!1))},not:function(t){return this.pushStack(P(this,t||[],!0))},is:function(t){return!!P(this,"string"==typeof t&&A.test(t)?x(t):t||[],!1).length}});var E,O=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(x.fn.init=function(t,e,i){var n,s;if(!t)return this;if(i=i||E,"string"==typeof t){if(!(n="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:O.exec(t))||!n[1]&&e)return!e||e.jquery?(e||i).find(t):this.constructor(e).find(t);if(n[1]){if(e=e instanceof x?e[0]:e,x.merge(this,x.parseHTML(n[1],e&&e.nodeType?e.ownerDocument||e:o,!0)),M.test(n[1])&&x.isPlainObject(e))for(n in e)_(this[n])?this[n](e[n]):this.attr(n,e[n]);return this}return(s=o.getElementById(n[2]))&&(this[0]=s,this.length=1),this}return t.nodeType?(this[0]=t,this.length=1,this):_(t)?void 0!==i.ready?i.ready(t):t(x):x.makeArray(t,this)}).prototype=x.fn,E=x(o);var H=/^(?:parents|prev(?:Until|All))/,N={children:!0,contents:!0,next:!0,prev:!0};function B(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}x.fn.extend({has:function(t){var e=x(t,this),i=e.length;return this.filter(function(){for(var t=0;t<i;t++)if(x.contains(this,e[t]))return!0})},closest:function(t,e){var i,n=0,s=this.length,r=[],o="string"!=typeof t&&x(t);if(!A.test(t))for(;n<s;n++)for(i=this[n];i&&i!==e;i=i.parentNode)if(i.nodeType<11&&(o?o.index(i)>-1:1===i.nodeType&&x.find.matchesSelector(i,t))){r.push(i);break}return this.pushStack(r.length>1?x.uniqueSort(r):r)},index:function(t){return t?"string"==typeof t?h.call(x(t),this[0]):h.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(x.uniqueSort(x.merge(this.get(),x(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),x.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return T(t,"parentNode")},parentsUntil:function(t,e,i){return T(t,"parentNode",i)},next:function(t){return B(t,"nextSibling")},prev:function(t){return B(t,"previousSibling")},nextAll:function(t){return T(t,"nextSibling")},prevAll:function(t){return T(t,"previousSibling")},nextUntil:function(t,e,i){return T(t,"nextSibling",i)},prevUntil:function(t,e,i){return T(t,"previousSibling",i)},siblings:function(t){return I((t.parentNode||{}).firstChild,t)},children:function(t){return I(t.firstChild)},contents:function(t){return j(t,"iframe")?t.contentDocument:(j(t,"template")&&(t=t.content||t),x.merge([],t.childNodes))}},function(t,e){x.fn[t]=function(i,n){var s=x.map(this,e,i);return"Until"!==t.slice(-5)&&(n=i),n&&"string"==typeof n&&(s=x.filter(n,s)),this.length>1&&(N[t]||x.uniqueSort(s),H.test(t)&&s.reverse()),this.pushStack(s)}});var F=/[^\x20\t\r\n\f]+/g;function L(t){return t}function z(t){throw t}function W(t,e,i,n){var s;try{t&&_(s=t.promise)?s.call(t).done(e).fail(i):t&&_(s=t.then)?s.call(t,e,i):e.apply(void 0,[t].slice(n))}catch(t){i.apply(void 0,[t])}}x.Callbacks=function(t){t="string"==typeof t?function(t){var e={};return x.each(t.match(F)||[],function(t,i){e[i]=!0}),e}(t):x.extend({},t);var e,i,n,s,r=[],o=[],a=-1,l=function(){for(s=s||t.once,n=e=!0;o.length;a=-1)for(i=o.shift();++a<r.length;)!1===r[a].apply(i[0],i[1])&&t.stopOnFalse&&(a=r.length,i=!1);t.memory||(i=!1),e=!1,s&&(r=i?[]:"")},u={add:function(){return r&&(i&&!e&&(a=r.length-1,o.push(i)),function e(i){x.each(i,function(i,n){_(n)?t.unique&&u.has(n)||r.push(n):n&&n.length&&"string"!==w(n)&&e(n)})}(arguments),i&&!e&&l()),this},remove:function(){return x.each(arguments,function(t,e){for(var i;(i=x.inArray(e,r,i))>-1;)r.splice(i,1),i<=a&&a--}),this},has:function(t){return t?x.inArray(t,r)>-1:r.length>0},empty:function(){return r&&(r=[]),this},disable:function(){return s=o=[],r=i="",this},disabled:function(){return!r},lock:function(){return s=o=[],i||e||(r=i=""),this},locked:function(){return!!s},fireWith:function(t,i){return s||(i=[t,(i=i||[]).slice?i.slice():i],o.push(i),e||l()),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return!!n}};return u},x.extend({Deferred:function(t){var e=[["notify","progress",x.Callbacks("memory"),x.Callbacks("memory"),2],["resolve","done",x.Callbacks("once memory"),x.Callbacks("once memory"),0,"resolved"],["reject","fail",x.Callbacks("once memory"),x.Callbacks("once memory"),1,"rejected"]],n="pending",s={state:function(){return n},always:function(){return r.done(arguments).fail(arguments),this},catch:function(t){return s.then(null,t)},pipe:function(){var t=arguments;return x.Deferred(function(i){x.each(e,function(e,n){var s=_(t[n[4]])&&t[n[4]];r[n[1]](function(){var t=s&&s.apply(this,arguments);t&&_(t.promise)?t.promise().progress(i.notify).done(i.resolve).fail(i.reject):i[n[0]+"With"](this,s?[t]:arguments)})}),t=null}).promise()},then:function(t,n,s){var r=0;function o(t,e,n,s){return function(){var a=this,l=arguments,u=function(){var i,u;if(!(t<r)){if((i=n.apply(a,l))===e.promise())throw new TypeError("Thenable self-resolution");u=i&&("object"==typeof i||"function"==typeof i)&&i.then,_(u)?s?u.call(i,o(r,e,L,s),o(r,e,z,s)):(r++,u.call(i,o(r,e,L,s),o(r,e,z,s),o(r,e,L,e.notifyWith))):(n!==L&&(a=void 0,l=[i]),(s||e.resolveWith)(a,l))}},c=s?u:function(){try{u()}catch(i){x.Deferred.exceptionHook&&x.Deferred.exceptionHook(i,c.stackTrace),t+1>=r&&(n!==z&&(a=void 0,l=[i]),e.rejectWith(a,l))}};t?c():(x.Deferred.getStackHook&&(c.stackTrace=x.Deferred.getStackHook()),i.setTimeout(c))}}return x.Deferred(function(i){e[0][3].add(o(0,i,_(s)?s:L,i.notifyWith)),e[1][3].add(o(0,i,_(t)?t:L)),e[2][3].add(o(0,i,_(n)?n:z))}).promise()},promise:function(t){return null!=t?x.extend(t,s):s}},r={};return x.each(e,function(t,i){var o=i[2],a=i[5];s[i[1]]=o.add,a&&o.add(function(){n=a},e[3-t][2].disable,e[3-t][3].disable,e[0][2].lock,e[0][3].lock),o.add(i[3].fire),r[i[0]]=function(){return r[i[0]+"With"](this===r?void 0:this,arguments),this},r[i[0]+"With"]=o.fireWith}),s.promise(r),t&&t.call(r,r),r},when:function(t){var e=arguments.length,i=e,n=Array(i),s=l.call(arguments),r=x.Deferred(),o=function(t){return function(i){n[t]=this,s[t]=arguments.length>1?l.call(arguments):i,--e||r.resolveWith(n,s)}};if(e<=1&&(W(t,r.done(o(i)).resolve,r.reject,!e),"pending"===r.state()||_(s[i]&&s[i].then)))return r.then();for(;i--;)W(s[i],o(i),r.reject);return r.promise()}});var R=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;x.Deferred.exceptionHook=function(t,e){i.console&&i.console.warn&&t&&R.test(t.name)&&i.console.warn("jQuery.Deferred exception: "+t.message,t.stack,e)},x.readyException=function(t){i.setTimeout(function(){throw t})};var $=x.Deferred();function q(){o.removeEventListener("DOMContentLoaded",q),i.removeEventListener("load",q),x.ready()}x.fn.ready=function(t){return $.then(t).catch(function(t){x.readyException(t)}),this},x.extend({isReady:!1,readyWait:1,ready:function(t){(!0===t?--x.readyWait:x.isReady)||(x.isReady=!0,!0!==t&&--x.readyWait>0||$.resolveWith(o,[x]))}}),x.ready.then=$.then,"complete"===o.readyState||"loading"!==o.readyState&&!o.documentElement.doScroll?i.setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",q),i.addEventListener("load",q));var U=function(t,e,i,n,s,r,o){var a=0,l=t.length,u=null==i;if("object"===w(i))for(a in s=!0,i)U(t,e,a,i[a],!0,r,o);else if(void 0!==n&&(s=!0,_(n)||(o=!0),u&&(o?(e.call(t,n),e=null):(u=e,e=function(t,e,i){return u.call(x(t),i)})),e))for(;a<l;a++)e(t[a],i,o?n:n.call(t[a],a,e(t[a],i)));return s?t:u?e.call(t):l?e(t[0],i):r},K=/^-ms-/,Y=/-([a-z])/g;function V(t,e){return e.toUpperCase()}function G(t){return t.replace(K,"ms-").replace(Y,V)}var X=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType};function J(){this.expando=x.expando+J.uid++}J.uid=1,J.prototype={cache:function(t){var e=t[this.expando];return e||(e={},X(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,i){var n,s=this.cache(t);if("string"==typeof e)s[G(e)]=i;else for(n in e)s[G(n)]=e[n];return s},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][G(e)]},access:function(t,e,i){return void 0===e||e&&"string"==typeof e&&void 0===i?this.get(t,e):(this.set(t,e,i),void 0!==i?i:e)},remove:function(t,e){var i,n=t[this.expando];if(void 0!==n){if(void 0!==e){i=(e=Array.isArray(e)?e.map(G):(e=G(e))in n?[e]:e.match(F)||[]).length;for(;i--;)delete n[e[i]]}(void 0===e||x.isEmptyObject(n))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!x.isEmptyObject(e)}};var Z=new J,Q=new J,tt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,et=/[A-Z]/g;function it(t,e,i){var n;if(void 0===i&&1===t.nodeType)if(n="data-"+e.replace(et,"-$&").toLowerCase(),"string"==typeof(i=t.getAttribute(n))){try{i=function(t){return"true"===t||"false"!==t&&("null"===t?null:t===+t+""?+t:tt.test(t)?JSON.parse(t):t)}(i)}catch(t){}Q.set(t,e,i)}else i=void 0;return i}x.extend({hasData:function(t){return Q.hasData(t)||Z.hasData(t)},data:function(t,e,i){return Q.access(t,e,i)},removeData:function(t,e){Q.remove(t,e)},_data:function(t,e,i){return Z.access(t,e,i)},_removeData:function(t,e){Z.remove(t,e)}}),x.fn.extend({data:function(t,e){var i,n,s,r=this[0],o=r&&r.attributes;if(void 0===t){if(this.length&&(s=Q.get(r),1===r.nodeType&&!Z.get(r,"hasDataAttrs"))){for(i=o.length;i--;)o[i]&&0===(n=o[i].name).indexOf("data-")&&(n=G(n.slice(5)),it(r,n,s[n]));Z.set(r,"hasDataAttrs",!0)}return s}return"object"==typeof t?this.each(function(){Q.set(this,t)}):U(this,function(e){var i;if(r&&void 0===e)return void 0!==(i=Q.get(r,t))?i:void 0!==(i=it(r,t))?i:void 0;this.each(function(){Q.set(this,t,e)})},null,e,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){Q.remove(this,t)})}}),x.extend({queue:function(t,e,i){var n;if(t)return e=(e||"fx")+"queue",n=Z.get(t,e),i&&(!n||Array.isArray(i)?n=Z.access(t,e,x.makeArray(i)):n.push(i)),n||[]},dequeue:function(t,e){e=e||"fx";var i=x.queue(t,e),n=i.length,s=i.shift(),r=x._queueHooks(t,e);"inprogress"===s&&(s=i.shift(),n--),s&&("fx"===e&&i.unshift("inprogress"),delete r.stop,s.call(t,function(){x.dequeue(t,e)},r)),!n&&r&&r.empty.fire()},_queueHooks:function(t,e){var i=e+"queueHooks";return Z.get(t,i)||Z.access(t,i,{empty:x.Callbacks("once memory").add(function(){Z.remove(t,[e+"queue",i])})})}}),x.fn.extend({queue:function(t,e){var i=2;return"string"!=typeof t&&(e=t,t="fx",i--),arguments.length<i?x.queue(this[0],t):void 0===e?this:this.each(function(){var i=x.queue(this,t,e);x._queueHooks(this,t),"fx"===t&&"inprogress"!==i[0]&&x.dequeue(this,t)})},dequeue:function(t){return this.each(function(){x.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var i,n=1,s=x.Deferred(),r=this,o=this.length,a=function(){--n||s.resolveWith(r,[r])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";o--;)(i=Z.get(r[o],t+"queueHooks"))&&i.empty&&(n++,i.empty.add(a));return a(),s.promise(e)}});var nt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,st=new RegExp("^(?:([+-])=|)("+nt+")([a-z%]*)$","i"),rt=["Top","Right","Bottom","Left"],ot=function(t,e){return"none"===(t=e||t).style.display||""===t.style.display&&x.contains(t.ownerDocument,t)&&"none"===x.css(t,"display")},at=function(t,e,i,n){var s,r,o={};for(r in e)o[r]=t.style[r],t.style[r]=e[r];for(r in s=i.apply(t,n||[]),e)t.style[r]=o[r];return s};function lt(t,e,i,n){var s,r,o=20,a=n?function(){return n.cur()}:function(){return x.css(t,e,"")},l=a(),u=i&&i[3]||(x.cssNumber[e]?"":"px"),c=(x.cssNumber[e]||"px"!==u&&+l)&&st.exec(x.css(t,e));if(c&&c[3]!==u){for(l/=2,u=u||c[3],c=+l||1;o--;)x.style(t,e,c+u),(1-r)*(1-(r=a()/l||.5))<=0&&(o=0),c/=r;c*=2,x.style(t,e,c+u),i=i||[]}return i&&(c=+c||+l||0,s=i[1]?c+(i[1]+1)*i[2]:+i[2],n&&(n.unit=u,n.start=c,n.end=s)),s}var ut={};function ct(t){var e,i=t.ownerDocument,n=t.nodeName,s=ut[n];return s||(e=i.body.appendChild(i.createElement(n)),s=x.css(e,"display"),e.parentNode.removeChild(e),"none"===s&&(s="block"),ut[n]=s,s)}function ht(t,e){for(var i,n,s=[],r=0,o=t.length;r<o;r++)(n=t[r]).style&&(i=n.style.display,e?("none"===i&&(s[r]=Z.get(n,"display")||null,s[r]||(n.style.display="")),""===n.style.display&&ot(n)&&(s[r]=ct(n))):"none"!==i&&(s[r]="none",Z.set(n,"display",i)));for(r=0;r<o;r++)null!=s[r]&&(t[r].style.display=s[r]);return t}x.fn.extend({show:function(){return ht(this,!0)},hide:function(){return ht(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){ot(this)?x(this).show():x(this).hide()})}});var dt=/^(?:checkbox|radio)$/i,pt=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ft=/^$|^module$|\/(?:java|ecma)script/i,gt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function mt(t,e){var i;return i=void 0!==t.getElementsByTagName?t.getElementsByTagName(e||"*"):void 0!==t.querySelectorAll?t.querySelectorAll(e||"*"):[],void 0===e||e&&j(t,e)?x.merge([t],i):i}function vt(t,e){for(var i=0,n=t.length;i<n;i++)Z.set(t[i],"globalEval",!e||Z.get(e[i],"globalEval"))}gt.optgroup=gt.option,gt.tbody=gt.tfoot=gt.colgroup=gt.caption=gt.thead,gt.th=gt.td;var _t,bt,yt=/<|&#?\w+;/;function kt(t,e,i,n,s){for(var r,o,a,l,u,c,h=e.createDocumentFragment(),d=[],p=0,f=t.length;p<f;p++)if((r=t[p])||0===r)if("object"===w(r))x.merge(d,r.nodeType?[r]:r);else if(yt.test(r)){for(o=o||h.appendChild(e.createElement("div")),a=(pt.exec(r)||["",""])[1].toLowerCase(),l=gt[a]||gt._default,o.innerHTML=l[1]+x.htmlPrefilter(r)+l[2],c=l[0];c--;)o=o.lastChild;x.merge(d,o.childNodes),(o=h.firstChild).textContent=""}else d.push(e.createTextNode(r));for(h.textContent="",p=0;r=d[p++];)if(n&&x.inArray(r,n)>-1)s&&s.push(r);else if(u=x.contains(r.ownerDocument,r),o=mt(h.appendChild(r),"script"),u&&vt(o),i)for(c=0;r=o[c++];)ft.test(r.type||"")&&i.push(r);return h}_t=o.createDocumentFragment().appendChild(o.createElement("div")),(bt=o.createElement("input")).setAttribute("type","radio"),bt.setAttribute("checked","checked"),bt.setAttribute("name","t"),_t.appendChild(bt),v.checkClone=_t.cloneNode(!0).cloneNode(!0).lastChild.checked,_t.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!_t.cloneNode(!0).lastChild.defaultValue;var wt=o.documentElement,xt=/^key/,Ct=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Dt=/^([^.]*)(?:\.(.+)|)/;function St(){return!0}function Tt(){return!1}function It(){try{return o.activeElement}catch(t){}}function At(t,e,i,n,s,r){var o,a;if("object"==typeof e){for(a in"string"!=typeof i&&(n=n||i,i=void 0),e)At(t,a,i,n,e[a],r);return t}if(null==n&&null==s?(s=i,n=i=void 0):null==s&&("string"==typeof i?(s=n,n=void 0):(s=n,n=i,i=void 0)),!1===s)s=Tt;else if(!s)return t;return 1===r&&(o=s,(s=function(t){return x().off(t),o.apply(this,arguments)}).guid=o.guid||(o.guid=x.guid++)),t.each(function(){x.event.add(this,e,s,n,i)})}x.event={global:{},add:function(t,e,i,n,s){var r,o,a,l,u,c,h,d,p,f,g,m=Z.get(t);if(m)for(i.handler&&(i=(r=i).handler,s=r.selector),s&&x.find.matchesSelector(wt,s),i.guid||(i.guid=x.guid++),(l=m.events)||(l=m.events={}),(o=m.handle)||(o=m.handle=function(e){return void 0!==x&&x.event.triggered!==e.type?x.event.dispatch.apply(t,arguments):void 0}),u=(e=(e||"").match(F)||[""]).length;u--;)p=g=(a=Dt.exec(e[u])||[])[1],f=(a[2]||"").split(".").sort(),p&&(h=x.event.special[p]||{},p=(s?h.delegateType:h.bindType)||p,h=x.event.special[p]||{},c=x.extend({type:p,origType:g,data:n,handler:i,guid:i.guid,selector:s,needsContext:s&&x.expr.match.needsContext.test(s),namespace:f.join(".")},r),(d=l[p])||((d=l[p]=[]).delegateCount=0,h.setup&&!1!==h.setup.call(t,n,f,o)||t.addEventListener&&t.addEventListener(p,o)),h.add&&(h.add.call(t,c),c.handler.guid||(c.handler.guid=i.guid)),s?d.splice(d.delegateCount++,0,c):d.push(c),x.event.global[p]=!0)},remove:function(t,e,i,n,s){var r,o,a,l,u,c,h,d,p,f,g,m=Z.hasData(t)&&Z.get(t);if(m&&(l=m.events)){for(u=(e=(e||"").match(F)||[""]).length;u--;)if(p=g=(a=Dt.exec(e[u])||[])[1],f=(a[2]||"").split(".").sort(),p){for(h=x.event.special[p]||{},d=l[p=(n?h.delegateType:h.bindType)||p]||[],a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),o=r=d.length;r--;)c=d[r],!s&&g!==c.origType||i&&i.guid!==c.guid||a&&!a.test(c.namespace)||n&&n!==c.selector&&("**"!==n||!c.selector)||(d.splice(r,1),c.selector&&d.delegateCount--,h.remove&&h.remove.call(t,c));o&&!d.length&&(h.teardown&&!1!==h.teardown.call(t,f,m.handle)||x.removeEvent(t,p,m.handle),delete l[p])}else for(p in l)x.event.remove(t,p+e[u],i,n,!0);x.isEmptyObject(l)&&Z.remove(t,"handle events")}},dispatch:function(t){var e,i,n,s,r,o,a=x.event.fix(t),l=new Array(arguments.length),u=(Z.get(this,"events")||{})[a.type]||[],c=x.event.special[a.type]||{};for(l[0]=a,e=1;e<arguments.length;e++)l[e]=arguments[e];if(a.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,a)){for(o=x.event.handlers.call(this,a,u),e=0;(s=o[e++])&&!a.isPropagationStopped();)for(a.currentTarget=s.elem,i=0;(r=s.handlers[i++])&&!a.isImmediatePropagationStopped();)a.rnamespace&&!a.rnamespace.test(r.namespace)||(a.handleObj=r,a.data=r.data,void 0!==(n=((x.event.special[r.origType]||{}).handle||r.handler).apply(s.elem,l))&&!1===(a.result=n)&&(a.preventDefault(),a.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,a),a.result}},handlers:function(t,e){var i,n,s,r,o,a=[],l=e.delegateCount,u=t.target;if(l&&u.nodeType&&!("click"===t.type&&t.button>=1))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&("click"!==t.type||!0!==u.disabled)){for(r=[],o={},i=0;i<l;i++)void 0===o[s=(n=e[i]).selector+" "]&&(o[s]=n.needsContext?x(s,this).index(u)>-1:x.find(s,this,null,[u]).length),o[s]&&r.push(n);r.length&&a.push({elem:u,handlers:r})}return u=this,l<e.length&&a.push({elem:u,handlers:e.slice(l)}),a},addProp:function(t,e){Object.defineProperty(x.Event.prototype,t,{enumerable:!0,configurable:!0,get:_(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(t){return t[x.expando]?t:new x.Event(t)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==It()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===It()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&j(this,"input"))return this.click(),!1},_default:function(t){return j(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},x.removeEvent=function(t,e,i){t.removeEventListener&&t.removeEventListener(e,i)},x.Event=function(t,e){if(!(this instanceof x.Event))return new x.Event(t,e);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?St:Tt,this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,e&&x.extend(this,e),this.timeStamp=t&&t.timeStamp||Date.now(),this[x.expando]=!0},x.Event.prototype={constructor:x.Event,isDefaultPrevented:Tt,isPropagationStopped:Tt,isImmediatePropagationStopped:Tt,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=St,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=St,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=St,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},x.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(t){var e=t.button;return null==t.which&&xt.test(t.type)?null!=t.charCode?t.charCode:t.keyCode:!t.which&&void 0!==e&&Ct.test(t.type)?1&e?1:2&e?3:4&e?2:0:t.which}},x.event.addProp),x.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){x.event.special[t]={delegateType:e,bindType:e,handle:function(t){var i,n=t.relatedTarget,s=t.handleObj;return n&&(n===this||x.contains(this,n))||(t.type=s.origType,i=s.handler.apply(this,arguments),t.type=e),i}}}),x.fn.extend({on:function(t,e,i,n){return At(this,t,e,i,n)},one:function(t,e,i,n){return At(this,t,e,i,n,1)},off:function(t,e,i){var n,s;if(t&&t.preventDefault&&t.handleObj)return n=t.handleObj,x(t.delegateTarget).off(n.namespace?n.origType+"."+n.namespace:n.origType,n.selector,n.handler),this;if("object"==typeof t){for(s in t)this.off(s,e,t[s]);return this}return!1!==e&&"function"!=typeof e||(i=e,e=void 0),!1===i&&(i=Tt),this.each(function(){x.event.remove(this,t,i,e)})}});var jt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Mt=/<script|<style|<link/i,Pt=/checked\s*(?:[^=]|=\s*.checked.)/i,Et=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ot(t,e){return j(t,"table")&&j(11!==e.nodeType?e:e.firstChild,"tr")&&x(t).children("tbody")[0]||t}function Ht(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function Nt(t){return"true/"===(t.type||"").slice(0,5)?t.type=t.type.slice(5):t.removeAttribute("type"),t}function Bt(t,e){var i,n,s,r,o,a,l,u;if(1===e.nodeType){if(Z.hasData(t)&&(r=Z.access(t),o=Z.set(e,r),u=r.events))for(s in delete o.handle,o.events={},u)for(i=0,n=u[s].length;i<n;i++)x.event.add(e,s,u[s][i]);Q.hasData(t)&&(a=Q.access(t),l=x.extend({},a),Q.set(e,l))}}function Ft(t,e,i,n){e=u.apply([],e);var s,r,o,a,l,c,h=0,d=t.length,p=d-1,f=e[0],g=_(f);if(g||d>1&&"string"==typeof f&&!v.checkClone&&Pt.test(f))return t.each(function(s){var r=t.eq(s);g&&(e[0]=f.call(this,s,r.html())),Ft(r,e,i,n)});if(d&&(r=(s=kt(e,t[0].ownerDocument,!1,t,n)).firstChild,1===s.childNodes.length&&(s=r),r||n)){for(a=(o=x.map(mt(s,"script"),Ht)).length;h<d;h++)l=s,h!==p&&(l=x.clone(l,!0,!0),a&&x.merge(o,mt(l,"script"))),i.call(t[h],l,h);if(a)for(c=o[o.length-1].ownerDocument,x.map(o,Nt),h=0;h<a;h++)l=o[h],ft.test(l.type||"")&&!Z.access(l,"globalEval")&&x.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?x._evalUrl&&x._evalUrl(l.src):k(l.textContent.replace(Et,""),c,l))}return t}function Lt(t,e,i){for(var n,s=e?x.filter(e,t):t,r=0;null!=(n=s[r]);r++)i||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(i&&x.contains(n.ownerDocument,n)&&vt(mt(n,"script")),n.parentNode.removeChild(n));return t}x.extend({htmlPrefilter:function(t){return t.replace(jt,"<$1></$2>")},clone:function(t,e,i){var n,s,r,o,a,l,u,c=t.cloneNode(!0),h=x.contains(t.ownerDocument,t);if(!(v.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||x.isXMLDoc(t)))for(o=mt(c),n=0,s=(r=mt(t)).length;n<s;n++)a=r[n],l=o[n],u=void 0,"input"===(u=l.nodeName.toLowerCase())&&dt.test(a.type)?l.checked=a.checked:"input"!==u&&"textarea"!==u||(l.defaultValue=a.defaultValue);if(e)if(i)for(r=r||mt(t),o=o||mt(c),n=0,s=r.length;n<s;n++)Bt(r[n],o[n]);else Bt(t,c);return(o=mt(c,"script")).length>0&&vt(o,!h&&mt(t,"script")),c},cleanData:function(t){for(var e,i,n,s=x.event.special,r=0;void 0!==(i=t[r]);r++)if(X(i)){if(e=i[Z.expando]){if(e.events)for(n in e.events)s[n]?x.event.remove(i,n):x.removeEvent(i,n,e.handle);i[Z.expando]=void 0}i[Q.expando]&&(i[Q.expando]=void 0)}}}),x.fn.extend({detach:function(t){return Lt(this,t,!0)},remove:function(t){return Lt(this,t)},text:function(t){return U(this,function(t){return void 0===t?x.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=t)})},null,t,arguments.length)},append:function(){return Ft(this,arguments,function(t){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Ot(this,t).appendChild(t)})},prepend:function(){return Ft(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=Ot(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return Ft(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return Ft(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(x.cleanData(mt(t,!1)),t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map(function(){return x.clone(this,t,e)})},html:function(t){return U(this,function(t){var e=this[0]||{},i=0,n=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;if("string"==typeof t&&!Mt.test(t)&&!gt[(pt.exec(t)||["",""])[1].toLowerCase()]){t=x.htmlPrefilter(t);try{for(;i<n;i++)1===(e=this[i]||{}).nodeType&&(x.cleanData(mt(e,!1)),e.innerHTML=t);e=0}catch(t){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=[];return Ft(this,arguments,function(e){var i=this.parentNode;x.inArray(this,t)<0&&(x.cleanData(mt(this)),i&&i.replaceChild(e,this))},t)}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){x.fn[t]=function(t){for(var i,n=[],s=x(t),r=s.length-1,o=0;o<=r;o++)i=o===r?this:this.clone(!0),x(s[o])[e](i),c.apply(n,i.get());return this.pushStack(n)}});var zt=new RegExp("^("+nt+")(?!px)[a-z%]+$","i"),Wt=function(t){var e=t.ownerDocument.defaultView;return e&&e.opener||(e=i),e.getComputedStyle(t)},Rt=new RegExp(rt.join("|"),"i");function $t(t,e,i){var n,s,r,o,a=t.style;return(i=i||Wt(t))&&(""!==(o=i.getPropertyValue(e)||i[e])||x.contains(t.ownerDocument,t)||(o=x.style(t,e)),!v.pixelBoxStyles()&&zt.test(o)&&Rt.test(e)&&(n=a.width,s=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=o,o=i.width,a.width=n,a.minWidth=s,a.maxWidth=r)),void 0!==o?o+"":o}function qt(t,e){return{get:function(){if(!t())return(this.get=e).apply(this,arguments);delete this.get}}}!function(){function t(){if(c){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",wt.appendChild(u).appendChild(c);var t=i.getComputedStyle(c);n="1%"!==t.top,l=12===e(t.marginLeft),c.style.right="60%",a=36===e(t.right),s=36===e(t.width),c.style.position="absolute",r=36===c.offsetWidth||"absolute",wt.removeChild(u),c=null}}function e(t){return Math.round(parseFloat(t))}var n,s,r,a,l,u=o.createElement("div"),c=o.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===c.style.backgroundClip,x.extend(v,{boxSizingReliable:function(){return t(),s},pixelBoxStyles:function(){return t(),a},pixelPosition:function(){return t(),n},reliableMarginLeft:function(){return t(),l},scrollboxSize:function(){return t(),r}}))}();var Ut=/^(none|table(?!-c[ea]).+)/,Kt=/^--/,Yt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:"0",fontWeight:"400"},Gt=["Webkit","Moz","ms"],Xt=o.createElement("div").style;function Jt(t){var e=x.cssProps[t];return e||(e=x.cssProps[t]=function(t){if(t in Xt)return t;for(var e=t[0].toUpperCase()+t.slice(1),i=Gt.length;i--;)if((t=Gt[i]+e)in Xt)return t}(t)||t),e}function Zt(t,e,i){var n=st.exec(e);return n?Math.max(0,n[2]-(i||0))+(n[3]||"px"):e}function Qt(t,e,i,n,s,r){var o="width"===e?1:0,a=0,l=0;if(i===(n?"border":"content"))return 0;for(;o<4;o+=2)"margin"===i&&(l+=x.css(t,i+rt[o],!0,s)),n?("content"===i&&(l-=x.css(t,"padding"+rt[o],!0,s)),"margin"!==i&&(l-=x.css(t,"border"+rt[o]+"Width",!0,s))):(l+=x.css(t,"padding"+rt[o],!0,s),"padding"!==i?l+=x.css(t,"border"+rt[o]+"Width",!0,s):a+=x.css(t,"border"+rt[o]+"Width",!0,s));return!n&&r>=0&&(l+=Math.max(0,Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-r-l-a-.5))),l}function te(t,e,i){var n=Wt(t),s=$t(t,e,n),r="border-box"===x.css(t,"boxSizing",!1,n),o=r;if(zt.test(s)){if(!i)return s;s="auto"}return o=o&&(v.boxSizingReliable()||s===t.style[e]),("auto"===s||!parseFloat(s)&&"inline"===x.css(t,"display",!1,n))&&(s=t["offset"+e[0].toUpperCase()+e.slice(1)],o=!0),(s=parseFloat(s)||0)+Qt(t,e,i||(r?"border":"content"),o,n,s)+"px"}function ee(t,e,i,n,s){return new ee.prototype.init(t,e,i,n,s)}x.extend({cssHooks:{opacity:{get:function(t,e){if(e){var i=$t(t,"opacity");return""===i?"1":i}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(t,e,i,n){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var s,r,o,a=G(e),l=Kt.test(e),u=t.style;if(l||(e=Jt(a)),o=x.cssHooks[e]||x.cssHooks[a],void 0===i)return o&&"get"in o&&void 0!==(s=o.get(t,!1,n))?s:u[e];"string"===(r=typeof i)&&(s=st.exec(i))&&s[1]&&(i=lt(t,e,s),r="number"),null!=i&&i==i&&("number"===r&&(i+=s&&s[3]||(x.cssNumber[a]?"":"px")),v.clearCloneStyle||""!==i||0!==e.indexOf("background")||(u[e]="inherit"),o&&"set"in o&&void 0===(i=o.set(t,i,n))||(l?u.setProperty(e,i):u[e]=i))}},css:function(t,e,i,n){var s,r,o,a=G(e);return Kt.test(e)||(e=Jt(a)),(o=x.cssHooks[e]||x.cssHooks[a])&&"get"in o&&(s=o.get(t,!0,i)),void 0===s&&(s=$t(t,e,n)),"normal"===s&&e in Vt&&(s=Vt[e]),""===i||i?(r=parseFloat(s),!0===i||isFinite(r)?r||0:s):s}}),x.each(["height","width"],function(t,e){x.cssHooks[e]={get:function(t,i,n){if(i)return!Ut.test(x.css(t,"display"))||t.getClientRects().length&&t.getBoundingClientRect().width?te(t,e,n):at(t,Yt,function(){return te(t,e,n)})},set:function(t,i,n){var s,r=Wt(t),o="border-box"===x.css(t,"boxSizing",!1,r),a=n&&Qt(t,e,n,o,r);return o&&v.scrollboxSize()===r.position&&(a-=Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-parseFloat(r[e])-Qt(t,e,"border",!1,r)-.5)),a&&(s=st.exec(i))&&"px"!==(s[3]||"px")&&(t.style[e]=i,i=x.css(t,e)),Zt(0,i,a)}}}),x.cssHooks.marginLeft=qt(v.reliableMarginLeft,function(t,e){if(e)return(parseFloat($t(t,"marginLeft"))||t.getBoundingClientRect().left-at(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),x.each({margin:"",padding:"",border:"Width"},function(t,e){x.cssHooks[t+e]={expand:function(i){for(var n=0,s={},r="string"==typeof i?i.split(" "):[i];n<4;n++)s[t+rt[n]+e]=r[n]||r[n-2]||r[0];return s}},"margin"!==t&&(x.cssHooks[t+e].set=Zt)}),x.fn.extend({css:function(t,e){return U(this,function(t,e,i){var n,s,r={},o=0;if(Array.isArray(e)){for(n=Wt(t),s=e.length;o<s;o++)r[e[o]]=x.css(t,e[o],!1,n);return r}return void 0!==i?x.style(t,e,i):x.css(t,e)},t,e,arguments.length>1)}}),x.Tween=ee,ee.prototype={constructor:ee,init:function(t,e,i,n,s,r){this.elem=t,this.prop=i,this.easing=s||x.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=n,this.unit=r||(x.cssNumber[i]?"":"px")},cur:function(){var t=ee.propHooks[this.prop];return t&&t.get?t.get(this):ee.propHooks._default.get(this)},run:function(t){var e,i=ee.propHooks[this.prop];return this.options.duration?this.pos=e=x.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),i&&i.set?i.set(this):ee.propHooks._default.set(this),this}},ee.prototype.init.prototype=ee.prototype,ee.propHooks={_default:{get:function(t){var e;return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(e=x.css(t.elem,t.prop,""))&&"auto"!==e?e:0},set:function(t){x.fx.step[t.prop]?x.fx.step[t.prop](t):1!==t.elem.nodeType||null==t.elem.style[x.cssProps[t.prop]]&&!x.cssHooks[t.prop]?t.elem[t.prop]=t.now:x.style(t.elem,t.prop,t.now+t.unit)}}},ee.propHooks.scrollTop=ee.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},x.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},x.fx=ee.prototype.init,x.fx.step={};var ie,ne,se=/^(?:toggle|show|hide)$/,re=/queueHooks$/;function oe(){ne&&(!1===o.hidden&&i.requestAnimationFrame?i.requestAnimationFrame(oe):i.setTimeout(oe,x.fx.interval),x.fx.tick())}function ae(){return i.setTimeout(function(){ie=void 0}),ie=Date.now()}function le(t,e){var i,n=0,s={height:t};for(e=e?1:0;n<4;n+=2-e)s["margin"+(i=rt[n])]=s["padding"+i]=t;return e&&(s.opacity=s.width=t),s}function ue(t,e,i){for(var n,s=(ce.tweeners[e]||[]).concat(ce.tweeners["*"]),r=0,o=s.length;r<o;r++)if(n=s[r].call(i,e,t))return n}function ce(t,e,i){var n,s,r=0,o=ce.prefilters.length,a=x.Deferred().always(function(){delete l.elem}),l=function(){if(s)return!1;for(var e=ie||ae(),i=Math.max(0,u.startTime+u.duration-e),n=1-(i/u.duration||0),r=0,o=u.tweens.length;r<o;r++)u.tweens[r].run(n);return a.notifyWith(t,[u,n,i]),n<1&&o?i:(o||a.notifyWith(t,[u,1,0]),a.resolveWith(t,[u]),!1)},u=a.promise({elem:t,props:x.extend({},e),opts:x.extend(!0,{specialEasing:{},easing:x.easing._default},i),originalProperties:e,originalOptions:i,startTime:ie||ae(),duration:i.duration,tweens:[],createTween:function(e,i){var n=x.Tween(t,u.opts,e,i,u.opts.specialEasing[e]||u.opts.easing);return u.tweens.push(n),n},stop:function(e){var i=0,n=e?u.tweens.length:0;if(s)return this;for(s=!0;i<n;i++)u.tweens[i].run(1);return e?(a.notifyWith(t,[u,1,0]),a.resolveWith(t,[u,e])):a.rejectWith(t,[u,e]),this}}),c=u.props;for(!function(t,e){var i,n,s,r,o;for(i in t)if(s=e[n=G(i)],r=t[i],Array.isArray(r)&&(s=r[1],r=t[i]=r[0]),i!==n&&(t[n]=r,delete t[i]),(o=x.cssHooks[n])&&"expand"in o)for(i in r=o.expand(r),delete t[n],r)i in t||(t[i]=r[i],e[i]=s);else e[n]=s}(c,u.opts.specialEasing);r<o;r++)if(n=ce.prefilters[r].call(u,t,c,u.opts))return _(n.stop)&&(x._queueHooks(u.elem,u.opts.queue).stop=n.stop.bind(n)),n;return x.map(c,ue,u),_(u.opts.start)&&u.opts.start.call(t,u),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),x.fx.timer(x.extend(l,{elem:t,anim:u,queue:u.opts.queue})),u}x.Animation=x.extend(ce,{tweeners:{"*":[function(t,e){var i=this.createTween(t,e);return lt(i.elem,t,st.exec(e),i),i}]},tweener:function(t,e){_(t)?(e=t,t=["*"]):t=t.match(F);for(var i,n=0,s=t.length;n<s;n++)i=t[n],ce.tweeners[i]=ce.tweeners[i]||[],ce.tweeners[i].unshift(e)},prefilters:[function(t,e,i){var n,s,r,o,a,l,u,c,h="width"in e||"height"in e,d=this,p={},f=t.style,g=t.nodeType&&ot(t),m=Z.get(t,"fxshow");for(n in i.queue||(null==(o=x._queueHooks(t,"fx")).unqueued&&(o.unqueued=0,a=o.empty.fire,o.empty.fire=function(){o.unqueued||a()}),o.unqueued++,d.always(function(){d.always(function(){o.unqueued--,x.queue(t,"fx").length||o.empty.fire()})})),e)if(s=e[n],se.test(s)){if(delete e[n],r=r||"toggle"===s,s===(g?"hide":"show")){if("show"!==s||!m||void 0===m[n])continue;g=!0}p[n]=m&&m[n]||x.style(t,n)}if((l=!x.isEmptyObject(e))||!x.isEmptyObject(p))for(n in h&&1===t.nodeType&&(i.overflow=[f.overflow,f.overflowX,f.overflowY],null==(u=m&&m.display)&&(u=Z.get(t,"display")),"none"===(c=x.css(t,"display"))&&(u?c=u:(ht([t],!0),u=t.style.display||u,c=x.css(t,"display"),ht([t]))),("inline"===c||"inline-block"===c&&null!=u)&&"none"===x.css(t,"float")&&(l||(d.done(function(){f.display=u}),null==u&&(c=f.display,u="none"===c?"":c)),f.display="inline-block")),i.overflow&&(f.overflow="hidden",d.always(function(){f.overflow=i.overflow[0],f.overflowX=i.overflow[1],f.overflowY=i.overflow[2]})),l=!1,p)l||(m?"hidden"in m&&(g=m.hidden):m=Z.access(t,"fxshow",{display:u}),r&&(m.hidden=!g),g&&ht([t],!0),d.done(function(){for(n in g||ht([t]),Z.remove(t,"fxshow"),p)x.style(t,n,p[n])})),l=ue(g?m[n]:0,n,d),n in m||(m[n]=l.start,g&&(l.end=l.start,l.start=0))}],prefilter:function(t,e){e?ce.prefilters.unshift(t):ce.prefilters.push(t)}}),x.speed=function(t,e,i){var n=t&&"object"==typeof t?x.extend({},t):{complete:i||!i&&e||_(t)&&t,duration:t,easing:i&&e||e&&!_(e)&&e};return x.fx.off?n.duration=0:"number"!=typeof n.duration&&(n.duration in x.fx.speeds?n.duration=x.fx.speeds[n.duration]:n.duration=x.fx.speeds._default),null!=n.queue&&!0!==n.queue||(n.queue="fx"),n.old=n.complete,n.complete=function(){_(n.old)&&n.old.call(this),n.queue&&x.dequeue(this,n.queue)},n},x.fn.extend({fadeTo:function(t,e,i,n){return this.filter(ot).css("opacity",0).show().end().animate({opacity:e},t,i,n)},animate:function(t,e,i,n){var s=x.isEmptyObject(t),r=x.speed(e,i,n),o=function(){var e=ce(this,x.extend({},t),r);(s||Z.get(this,"finish"))&&e.stop(!0)};return o.finish=o,s||!1===r.queue?this.each(o):this.queue(r.queue,o)},stop:function(t,e,i){var n=function(t){var e=t.stop;delete t.stop,e(i)};return"string"!=typeof t&&(i=e,e=t,t=void 0),e&&!1!==t&&this.queue(t||"fx",[]),this.each(function(){var e=!0,s=null!=t&&t+"queueHooks",r=x.timers,o=Z.get(this);if(s)o[s]&&o[s].stop&&n(o[s]);else for(s in o)o[s]&&o[s].stop&&re.test(s)&&n(o[s]);for(s=r.length;s--;)r[s].elem!==this||null!=t&&r[s].queue!==t||(r[s].anim.stop(i),e=!1,r.splice(s,1));!e&&i||x.dequeue(this,t)})},finish:function(t){return!1!==t&&(t=t||"fx"),this.each(function(){var e,i=Z.get(this),n=i[t+"queue"],s=i[t+"queueHooks"],r=x.timers,o=n?n.length:0;for(i.finish=!0,x.queue(this,t,[]),s&&s.stop&&s.stop.call(this,!0),e=r.length;e--;)r[e].elem===this&&r[e].queue===t&&(r[e].anim.stop(!0),r.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete i.finish})}}),x.each(["toggle","show","hide"],function(t,e){var i=x.fn[e];x.fn[e]=function(t,n,s){return null==t||"boolean"==typeof t?i.apply(this,arguments):this.animate(le(e,!0),t,n,s)}}),x.each({slideDown:le("show"),slideUp:le("hide"),slideToggle:le("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){x.fn[t]=function(t,i,n){return this.animate(e,t,i,n)}}),x.timers=[],x.fx.tick=function(){var t,e=0,i=x.timers;for(ie=Date.now();e<i.length;e++)(t=i[e])()||i[e]!==t||i.splice(e--,1);i.length||x.fx.stop(),ie=void 0},x.fx.timer=function(t){x.timers.push(t),x.fx.start()},x.fx.interval=13,x.fx.start=function(){ne||(ne=!0,oe())},x.fx.stop=function(){ne=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fn.delay=function(t,e){return t=x.fx&&x.fx.speeds[t]||t,e=e||"fx",this.queue(e,function(e,n){var s=i.setTimeout(e,t);n.stop=function(){i.clearTimeout(s)}})},function(){var t=o.createElement("input"),e=o.createElement("select").appendChild(o.createElement("option"));t.type="checkbox",v.checkOn=""!==t.value,v.optSelected=e.selected,(t=o.createElement("input")).value="t",t.type="radio",v.radioValue="t"===t.value}();var he,de=x.expr.attrHandle;x.fn.extend({attr:function(t,e){return U(this,x.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){x.removeAttr(this,t)})}}),x.extend({attr:function(t,e,i){var n,s,r=t.nodeType;if(3!==r&&8!==r&&2!==r)return void 0===t.getAttribute?x.prop(t,e,i):(1===r&&x.isXMLDoc(t)||(s=x.attrHooks[e.toLowerCase()]||(x.expr.match.bool.test(e)?he:void 0)),void 0!==i?null===i?void x.removeAttr(t,e):s&&"set"in s&&void 0!==(n=s.set(t,i,e))?n:(t.setAttribute(e,i+""),i):s&&"get"in s&&null!==(n=s.get(t,e))?n:null==(n=x.find.attr(t,e))?void 0:n)},attrHooks:{type:{set:function(t,e){if(!v.radioValue&&"radio"===e&&j(t,"input")){var i=t.value;return t.setAttribute("type",e),i&&(t.value=i),e}}}},removeAttr:function(t,e){var i,n=0,s=e&&e.match(F);if(s&&1===t.nodeType)for(;i=s[n++];)t.removeAttribute(i)}}),he={set:function(t,e,i){return!1===e?x.removeAttr(t,i):t.setAttribute(i,i),i}},x.each(x.expr.match.bool.source.match(/\w+/g),function(t,e){var i=de[e]||x.find.attr;de[e]=function(t,e,n){var s,r,o=e.toLowerCase();return n||(r=de[o],de[o]=s,s=null!=i(t,e,n)?o:null,de[o]=r),s}});var pe=/^(?:input|select|textarea|button)$/i,fe=/^(?:a|area)$/i;function ge(t){return(t.match(F)||[]).join(" ")}function me(t){return t.getAttribute&&t.getAttribute("class")||""}function ve(t){return Array.isArray(t)?t:"string"==typeof t&&t.match(F)||[]}x.fn.extend({prop:function(t,e){return U(this,x.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[x.propFix[t]||t]})}}),x.extend({prop:function(t,e,i){var n,s,r=t.nodeType;if(3!==r&&8!==r&&2!==r)return 1===r&&x.isXMLDoc(t)||(e=x.propFix[e]||e,s=x.propHooks[e]),void 0!==i?s&&"set"in s&&void 0!==(n=s.set(t,i,e))?n:t[e]=i:s&&"get"in s&&null!==(n=s.get(t,e))?n:t[e]},propHooks:{tabIndex:{get:function(t){var e=x.find.attr(t,"tabindex");return e?parseInt(e,10):pe.test(t.nodeName)||fe.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),v.optSelected||(x.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.fn.extend({addClass:function(t){var e,i,n,s,r,o,a,l=0;if(_(t))return this.each(function(e){x(this).addClass(t.call(this,e,me(this)))});if((e=ve(t)).length)for(;i=this[l++];)if(s=me(i),n=1===i.nodeType&&" "+ge(s)+" "){for(o=0;r=e[o++];)n.indexOf(" "+r+" ")<0&&(n+=r+" ");s!==(a=ge(n))&&i.setAttribute("class",a)}return this},removeClass:function(t){var e,i,n,s,r,o,a,l=0;if(_(t))return this.each(function(e){x(this).removeClass(t.call(this,e,me(this)))});if(!arguments.length)return this.attr("class","");if((e=ve(t)).length)for(;i=this[l++];)if(s=me(i),n=1===i.nodeType&&" "+ge(s)+" "){for(o=0;r=e[o++];)for(;n.indexOf(" "+r+" ")>-1;)n=n.replace(" "+r+" "," ");s!==(a=ge(n))&&i.setAttribute("class",a)}return this},toggleClass:function(t,e){var i=typeof t,n="string"===i||Array.isArray(t);return"boolean"==typeof e&&n?e?this.addClass(t):this.removeClass(t):_(t)?this.each(function(i){x(this).toggleClass(t.call(this,i,me(this),e),e)}):this.each(function(){var e,s,r,o;if(n)for(s=0,r=x(this),o=ve(t);e=o[s++];)r.hasClass(e)?r.removeClass(e):r.addClass(e);else void 0!==t&&"boolean"!==i||((e=me(this))&&Z.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===t?"":Z.get(this,"__className__")||""))})},hasClass:function(t){var e,i,n=0;for(e=" "+t+" ";i=this[n++];)if(1===i.nodeType&&(" "+ge(me(i))+" ").indexOf(e)>-1)return!0;return!1}});var _e=/\r/g;x.fn.extend({val:function(t){var e,i,n,s=this[0];return arguments.length?(n=_(t),this.each(function(i){var s;1===this.nodeType&&(null==(s=n?t.call(this,i,x(this).val()):t)?s="":"number"==typeof s?s+="":Array.isArray(s)&&(s=x.map(s,function(t){return null==t?"":t+""})),(e=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()])&&"set"in e&&void 0!==e.set(this,s,"value")||(this.value=s))})):s?(e=x.valHooks[s.type]||x.valHooks[s.nodeName.toLowerCase()])&&"get"in e&&void 0!==(i=e.get(s,"value"))?i:"string"==typeof(i=s.value)?i.replace(_e,""):null==i?"":i:void 0}}),x.extend({valHooks:{option:{get:function(t){var e=x.find.attr(t,"value");return null!=e?e:ge(x.text(t))}},select:{get:function(t){var e,i,n,s=t.options,r=t.selectedIndex,o="select-one"===t.type,a=o?null:[],l=o?r+1:s.length;for(n=r<0?l:o?r:0;n<l;n++)if(((i=s[n]).selected||n===r)&&!i.disabled&&(!i.parentNode.disabled||!j(i.parentNode,"optgroup"))){if(e=x(i).val(),o)return e;a.push(e)}return a},set:function(t,e){for(var i,n,s=t.options,r=x.makeArray(e),o=s.length;o--;)((n=s[o]).selected=x.inArray(x.valHooks.option.get(n),r)>-1)&&(i=!0);return i||(t.selectedIndex=-1),r}}}}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=x.inArray(x(t).val(),e)>-1}},v.checkOn||(x.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})}),v.focusin="onfocusin"in i;var be=/^(?:focusinfocus|focusoutblur)$/,ye=function(t){t.stopPropagation()};x.extend(x.event,{trigger:function(t,e,n,s){var r,a,l,u,c,h,d,p,g=[n||o],m=f.call(t,"type")?t.type:t,v=f.call(t,"namespace")?t.namespace.split("."):[];if(a=p=l=n=n||o,3!==n.nodeType&&8!==n.nodeType&&!be.test(m+x.event.triggered)&&(m.indexOf(".")>-1&&(v=m.split("."),m=v.shift(),v.sort()),c=m.indexOf(":")<0&&"on"+m,(t=t[x.expando]?t:new x.Event(m,"object"==typeof t&&t)).isTrigger=s?2:3,t.namespace=v.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=n),e=null==e?[t]:x.makeArray(e,[t]),d=x.event.special[m]||{},s||!d.trigger||!1!==d.trigger.apply(n,e))){if(!s&&!d.noBubble&&!b(n)){for(u=d.delegateType||m,be.test(u+m)||(a=a.parentNode);a;a=a.parentNode)g.push(a),l=a;l===(n.ownerDocument||o)&&g.push(l.defaultView||l.parentWindow||i)}for(r=0;(a=g[r++])&&!t.isPropagationStopped();)p=a,t.type=r>1?u:d.bindType||m,(h=(Z.get(a,"events")||{})[t.type]&&Z.get(a,"handle"))&&h.apply(a,e),(h=c&&a[c])&&h.apply&&X(a)&&(t.result=h.apply(a,e),!1===t.result&&t.preventDefault());return t.type=m,s||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(g.pop(),e)||!X(n)||c&&_(n[m])&&!b(n)&&((l=n[c])&&(n[c]=null),x.event.triggered=m,t.isPropagationStopped()&&p.addEventListener(m,ye),n[m](),t.isPropagationStopped()&&p.removeEventListener(m,ye),x.event.triggered=void 0,l&&(n[c]=l)),t.result}},simulate:function(t,e,i){var n=x.extend(new x.Event,i,{type:t,isSimulated:!0});x.event.trigger(n,null,e)}}),x.fn.extend({trigger:function(t,e){return this.each(function(){x.event.trigger(t,e,this)})},triggerHandler:function(t,e){var i=this[0];if(i)return x.event.trigger(t,e,i,!0)}}),v.focusin||x.each({focus:"focusin",blur:"focusout"},function(t,e){var i=function(t){x.event.simulate(e,t.target,x.event.fix(t))};x.event.special[e]={setup:function(){var n=this.ownerDocument||this,s=Z.access(n,e);s||n.addEventListener(t,i,!0),Z.access(n,e,(s||0)+1)},teardown:function(){var n=this.ownerDocument||this,s=Z.access(n,e)-1;s?Z.access(n,e,s):(n.removeEventListener(t,i,!0),Z.remove(n,e))}}});var ke=i.location,we=Date.now(),xe=/\?/;x.parseXML=function(t){var e;if(!t||"string"!=typeof t)return null;try{e=(new i.DOMParser).parseFromString(t,"text/xml")}catch(t){e=void 0}return e&&!e.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+t),e};var Ce=/\[\]$/,De=/\r?\n/g,Se=/^(?:submit|button|image|reset|file)$/i,Te=/^(?:input|select|textarea|keygen)/i;function Ie(t,e,i,n){var s;if(Array.isArray(e))x.each(e,function(e,s){i||Ce.test(t)?n(t,s):Ie(t+"["+("object"==typeof s&&null!=s?e:"")+"]",s,i,n)});else if(i||"object"!==w(e))n(t,e);else for(s in e)Ie(t+"["+s+"]",e[s],i,n)}x.param=function(t,e){var i,n=[],s=function(t,e){var i=_(e)?e():e;n[n.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==i?"":i)};if(Array.isArray(t)||t.jquery&&!x.isPlainObject(t))x.each(t,function(){s(this.name,this.value)});else for(i in t)Ie(i,t[i],e,s);return n.join("&")},x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=x.prop(this,"elements");return t?x.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!x(this).is(":disabled")&&Te.test(this.nodeName)&&!Se.test(t)&&(this.checked||!dt.test(t))}).map(function(t,e){var i=x(this).val();return null==i?null:Array.isArray(i)?x.map(i,function(t){return{name:e.name,value:t.replace(De,"\r\n")}}):{name:e.name,value:i.replace(De,"\r\n")}}).get()}});var Ae=/%20/g,je=/#.*$/,Me=/([?&])_=[^&]*/,Pe=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ee=/^(?:GET|HEAD)$/,Oe=/^\/\//,He={},Ne={},Be="*/".concat("*"),Fe=o.createElement("a");function Le(t){return function(e,i){"string"!=typeof e&&(i=e,e="*");var n,s=0,r=e.toLowerCase().match(F)||[];if(_(i))for(;n=r[s++];)"+"===n[0]?(n=n.slice(1)||"*",(t[n]=t[n]||[]).unshift(i)):(t[n]=t[n]||[]).push(i)}}function ze(t,e,i,n){var s={},r=t===Ne;function o(a){var l;return s[a]=!0,x.each(t[a]||[],function(t,a){var u=a(e,i,n);return"string"!=typeof u||r||s[u]?r?!(l=u):void 0:(e.dataTypes.unshift(u),o(u),!1)}),l}return o(e.dataTypes[0])||!s["*"]&&o("*")}function We(t,e){var i,n,s=x.ajaxSettings.flatOptions||{};for(i in e)void 0!==e[i]&&((s[i]?t:n||(n={}))[i]=e[i]);return n&&x.extend(!0,t,n),t}Fe.href=ke.href,x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ke.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ke.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Be,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?We(We(t,x.ajaxSettings),e):We(x.ajaxSettings,t)},ajaxPrefilter:Le(He),ajaxTransport:Le(Ne),ajax:function(t,e){"object"==typeof t&&(e=t,t=void 0),e=e||{};var n,s,r,a,l,u,c,h,d,p,f=x.ajaxSetup({},e),g=f.context||f,m=f.context&&(g.nodeType||g.jquery)?x(g):x.event,v=x.Deferred(),_=x.Callbacks("once memory"),b=f.statusCode||{},y={},k={},w="canceled",C={readyState:0,getResponseHeader:function(t){var e;if(c){if(!a)for(a={};e=Pe.exec(r);)a[e[1].toLowerCase()]=e[2];e=a[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){return c?r:null},setRequestHeader:function(t,e){return null==c&&(t=k[t.toLowerCase()]=k[t.toLowerCase()]||t,y[t]=e),this},overrideMimeType:function(t){return null==c&&(f.mimeType=t),this},statusCode:function(t){var e;if(t)if(c)C.always(t[C.status]);else for(e in t)b[e]=[b[e],t[e]];return this},abort:function(t){var e=t||w;return n&&n.abort(e),D(0,e),this}};if(v.promise(C),f.url=((t||f.url||ke.href)+"").replace(Oe,ke.protocol+"//"),f.type=e.method||e.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(F)||[""],null==f.crossDomain){u=o.createElement("a");try{u.href=f.url,u.href=u.href,f.crossDomain=Fe.protocol+"//"+Fe.host!=u.protocol+"//"+u.host}catch(t){f.crossDomain=!0}}if(f.data&&f.processData&&"string"!=typeof f.data&&(f.data=x.param(f.data,f.traditional)),ze(He,f,e,C),c)return C;for(d in(h=x.event&&f.global)&&0==x.active++&&x.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Ee.test(f.type),s=f.url.replace(je,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(Ae,"+")):(p=f.url.slice(s.length),f.data&&(f.processData||"string"==typeof f.data)&&(s+=(xe.test(s)?"&":"?")+f.data,delete f.data),!1===f.cache&&(s=s.replace(Me,"$1"),p=(xe.test(s)?"&":"?")+"_="+we+++p),f.url=s+p),f.ifModified&&(x.lastModified[s]&&C.setRequestHeader("If-Modified-Since",x.lastModified[s]),x.etag[s]&&C.setRequestHeader("If-None-Match",x.etag[s])),(f.data&&f.hasContent&&!1!==f.contentType||e.contentType)&&C.setRequestHeader("Content-Type",f.contentType),C.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Be+"; q=0.01":""):f.accepts["*"]),f.headers)C.setRequestHeader(d,f.headers[d]);if(f.beforeSend&&(!1===f.beforeSend.call(g,C,f)||c))return C.abort();if(w="abort",_.add(f.complete),C.done(f.success),C.fail(f.error),n=ze(Ne,f,e,C)){if(C.readyState=1,h&&m.trigger("ajaxSend",[C,f]),c)return C;f.async&&f.timeout>0&&(l=i.setTimeout(function(){C.abort("timeout")},f.timeout));try{c=!1,n.send(y,D)}catch(t){if(c)throw t;D(-1,t)}}else D(-1,"No Transport");function D(t,e,o,a){var u,d,p,y,k,w=e;c||(c=!0,l&&i.clearTimeout(l),n=void 0,r=a||"",C.readyState=t>0?4:0,u=t>=200&&t<300||304===t,o&&(y=function(t,e,i){for(var n,s,r,o,a=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===n&&(n=t.mimeType||e.getResponseHeader("Content-Type"));if(n)for(s in a)if(a[s]&&a[s].test(n)){l.unshift(s);break}if(l[0]in i)r=l[0];else{for(s in i){if(!l[0]||t.converters[s+" "+l[0]]){r=s;break}o||(o=s)}r=r||o}if(r)return r!==l[0]&&l.unshift(r),i[r]}(f,C,o)),y=function(t,e,i,n){var s,r,o,a,l,u={},c=t.dataTypes.slice();if(c[1])for(o in t.converters)u[o.toLowerCase()]=t.converters[o];for(r=c.shift();r;)if(t.responseFields[r]&&(i[t.responseFields[r]]=e),!l&&n&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=r,r=c.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){if(!(o=u[l+" "+r]||u["* "+r]))for(s in u)if((a=s.split(" "))[1]===r&&(o=u[l+" "+a[0]]||u["* "+a[0]])){!0===o?o=u[s]:!0!==u[s]&&(r=a[0],c.unshift(a[1]));break}if(!0!==o)if(o&&t.throws)e=o(e);else try{e=o(e)}catch(t){return{state:"parsererror",error:o?t:"No conversion from "+l+" to "+r}}}return{state:"success",data:e}}(f,y,C,u),u?(f.ifModified&&((k=C.getResponseHeader("Last-Modified"))&&(x.lastModified[s]=k),(k=C.getResponseHeader("etag"))&&(x.etag[s]=k)),204===t||"HEAD"===f.type?w="nocontent":304===t?w="notmodified":(w=y.state,d=y.data,u=!(p=y.error))):(p=w,!t&&w||(w="error",t<0&&(t=0))),C.status=t,C.statusText=(e||w)+"",u?v.resolveWith(g,[d,w,C]):v.rejectWith(g,[C,w,p]),C.statusCode(b),b=void 0,h&&m.trigger(u?"ajaxSuccess":"ajaxError",[C,f,u?d:p]),_.fireWith(g,[C,w]),h&&(m.trigger("ajaxComplete",[C,f]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(t,e,i){return x.get(t,e,i,"json")},getScript:function(t,e){return x.get(t,void 0,e,"script")}}),x.each(["get","post"],function(t,e){x[e]=function(t,i,n,s){return _(i)&&(s=s||n,n=i,i=void 0),x.ajax(x.extend({url:t,type:e,dataType:s,data:i,success:n},x.isPlainObject(t)&&t))}}),x._evalUrl=function(t){return x.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},x.fn.extend({wrapAll:function(t){var e;return this[0]&&(_(t)&&(t=t.call(this[0])),e=x(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(t){return _(t)?this.each(function(e){x(this).wrapInner(t.call(this,e))}):this.each(function(){var e=x(this),i=e.contents();i.length?i.wrapAll(t):e.append(t)})},wrap:function(t){var e=_(t);return this.each(function(i){x(this).wrapAll(e?t.call(this,i):t)})},unwrap:function(t){return this.parent(t).not("body").each(function(){x(this).replaceWith(this.childNodes)}),this}}),x.expr.pseudos.hidden=function(t){return!x.expr.pseudos.visible(t)},x.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},x.ajaxSettings.xhr=function(){try{return new i.XMLHttpRequest}catch(t){}};var Re={0:200,1223:204},$e=x.ajaxSettings.xhr();v.cors=!!$e&&"withCredentials"in $e,v.ajax=$e=!!$e,x.ajaxTransport(function(t){var e,n;if(v.cors||$e&&!t.crossDomain)return{send:function(s,r){var o,a=t.xhr();if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(o in t.xhrFields)a[o]=t.xhrFields[o];for(o in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||s["X-Requested-With"]||(s["X-Requested-With"]="XMLHttpRequest"),s)a.setRequestHeader(o,s[o]);e=function(t){return function(){e&&(e=n=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===t?a.abort():"error"===t?"number"!=typeof a.status?r(0,"error"):r(a.status,a.statusText):r(Re[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=e(),n=a.onerror=a.ontimeout=e("error"),void 0!==a.onabort?a.onabort=n:a.onreadystatechange=function(){4===a.readyState&&i.setTimeout(function(){e&&n()})},e=e("abort");try{a.send(t.hasContent&&t.data||null)}catch(t){if(e)throw t}},abort:function(){e&&e()}}}),x.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return x.globalEval(t),t}}}),x.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),x.ajaxTransport("script",function(t){var e,i;if(t.crossDomain)return{send:function(n,s){e=x("<script>").prop({charset:t.scriptCharset,src:t.url}).on("load error",i=function(t){e.remove(),i=null,t&&s("error"===t.type?404:200,t.type)}),o.head.appendChild(e[0])},abort:function(){i&&i()}}});var qe,Ue=[],Ke=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=Ue.pop()||x.expando+"_"+we++;return this[t]=!0,t}}),x.ajaxPrefilter("json jsonp",function(t,e,n){var s,r,o,a=!1!==t.jsonp&&(Ke.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ke.test(t.data)&&"data");if(a||"jsonp"===t.dataTypes[0])return s=t.jsonpCallback=_(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Ke,"$1"+s):!1!==t.jsonp&&(t.url+=(xe.test(t.url)?"&":"?")+t.jsonp+"="+s),t.converters["script json"]=function(){return o||x.error(s+" was not called"),o[0]},t.dataTypes[0]="json",r=i[s],i[s]=function(){o=arguments},n.always(function(){void 0===r?x(i).removeProp(s):i[s]=r,t[s]&&(t.jsonpCallback=e.jsonpCallback,Ue.push(s)),o&&_(r)&&r(o[0]),o=r=void 0}),"script"}),v.createHTMLDocument=((qe=o.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===qe.childNodes.length),x.parseHTML=function(t,e,i){return"string"!=typeof t?[]:("boolean"==typeof e&&(i=e,e=!1),e||(v.createHTMLDocument?((n=(e=o.implementation.createHTMLDocument("")).createElement("base")).href=o.location.href,e.head.appendChild(n)):e=o),r=!i&&[],(s=M.exec(t))?[e.createElement(s[1])]:(s=kt([t],e,r),r&&r.length&&x(r).remove(),x.merge([],s.childNodes)));var n,s,r},x.fn.load=function(t,e,i){var n,s,r,o=this,a=t.indexOf(" ");return a>-1&&(n=ge(t.slice(a)),t=t.slice(0,a)),_(e)?(i=e,e=void 0):e&&"object"==typeof e&&(s="POST"),o.length>0&&x.ajax({url:t,type:s||"GET",dataType:"html",data:e}).done(function(t){r=arguments,o.html(n?x("<div>").append(x.parseHTML(t)).find(n):t)}).always(i&&function(t,e){o.each(function(){i.apply(this,r||[t.responseText,e,t])})}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){x.fn[e]=function(t){return this.on(e,t)}}),x.expr.pseudos.animated=function(t){return x.grep(x.timers,function(e){return t===e.elem}).length},x.offset={setOffset:function(t,e,i){var n,s,r,o,a,l,u=x.css(t,"position"),c=x(t),h={};"static"===u&&(t.style.position="relative"),a=c.offset(),r=x.css(t,"top"),l=x.css(t,"left"),("absolute"===u||"fixed"===u)&&(r+l).indexOf("auto")>-1?(o=(n=c.position()).top,s=n.left):(o=parseFloat(r)||0,s=parseFloat(l)||0),_(e)&&(e=e.call(t,i,x.extend({},a))),null!=e.top&&(h.top=e.top-a.top+o),null!=e.left&&(h.left=e.left-a.left+s),"using"in e?e.using.call(t,h):c.css(h)}},x.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){x.offset.setOffset(this,t,e)});var e,i,n=this[0];return n?n.getClientRects().length?(e=n.getBoundingClientRect(),i=n.ownerDocument.defaultView,{top:e.top+i.pageYOffset,left:e.left+i.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var t,e,i,n=this[0],s={top:0,left:0};if("fixed"===x.css(n,"position"))e=n.getBoundingClientRect();else{for(e=this.offset(),i=n.ownerDocument,t=n.offsetParent||i.documentElement;t&&(t===i.body||t===i.documentElement)&&"static"===x.css(t,"position");)t=t.parentNode;t&&t!==n&&1===t.nodeType&&((s=x(t).offset()).top+=x.css(t,"borderTopWidth",!0),s.left+=x.css(t,"borderLeftWidth",!0))}return{top:e.top-s.top-x.css(n,"marginTop",!0),left:e.left-s.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&"static"===x.css(t,"position");)t=t.offsetParent;return t||wt})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,e){var i="pageYOffset"===e;x.fn[t]=function(n){return U(this,function(t,n,s){var r;if(b(t)?r=t:9===t.nodeType&&(r=t.defaultView),void 0===s)return r?r[e]:t[n];r?r.scrollTo(i?r.pageXOffset:s,i?s:r.pageYOffset):t[n]=s},t,n,arguments.length)}}),x.each(["top","left"],function(t,e){x.cssHooks[e]=qt(v.pixelPosition,function(t,i){if(i)return i=$t(t,e),zt.test(i)?x(t).position()[e]+"px":i})}),x.each({Height:"height",Width:"width"},function(t,e){x.each({padding:"inner"+t,content:e,"":"outer"+t},function(i,n){x.fn[n]=function(s,r){var o=arguments.length&&(i||"boolean"!=typeof s),a=i||(!0===s||!0===r?"margin":"border");return U(this,function(e,i,s){var r;return b(e)?0===n.indexOf("outer")?e["inner"+t]:e.document.documentElement["client"+t]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+t],r["scroll"+t],e.body["offset"+t],r["offset"+t],r["client"+t])):void 0===s?x.css(e,i,a):x.style(e,i,s,a)},e,o?s:void 0,o)}})}),x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,e){x.fn[e]=function(t,i){return arguments.length>0?this.on(e,null,t,i):this.trigger(e)}}),x.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),x.fn.extend({bind:function(t,e,i){return this.on(t,null,e,i)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,i,n){return this.on(e,t,i,n)},undelegate:function(t,e,i){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",i)}}),x.proxy=function(t,e){var i,n,s;if("string"==typeof e&&(i=t[e],e=t,t=i),_(t))return n=l.call(arguments,2),(s=function(){return t.apply(e||this,n.concat(l.call(arguments)))}).guid=t.guid=t.guid||x.guid++,s},x.holdReady=function(t){t?x.readyWait++:x.ready(!0)},x.isArray=Array.isArray,x.parseJSON=JSON.parse,x.nodeName=j,x.isFunction=_,x.isWindow=b,x.camelCase=G,x.type=w,x.now=Date.now,x.isNumeric=function(t){var e=x.type(t);return("number"===e||"string"===e)&&!isNaN(t-parseFloat(t))},void 0===(n=function(){return x}.apply(e,[]))||(t.exports=n);var Ye=i.jQuery,Ve=i.$;return x.noConflict=function(t){return i.$===x&&(i.$=Ve),t&&i.jQuery===x&&(i.jQuery=Ye),x},s||(i.jQuery=i.$=x),x})},function(t,e){t.exports={config:function(){const t="https://www2.barnensbibliotek.se",e="https://www.barnensbibliotek.se",i="/devkey/alf/?type=jsonp&callback=?",n="/Portals/_default/Skins/bb_DAGOBAH_krypin/htmltemplates/";return{apiserver:t,dnnURL:e,localOrServerURL:"",htmltemplateurl:e+n,devkey:"alf",handlebartemplate:{hb_booklist_tmp:"https://www.barnensbibliotek.se/Portals/_default/Skins/bb_DAGOBAH_krypin/htmltemplates/boklistor_lista.txt",hb_skrivbokenlist_tmp:"https://www.barnensbibliotek.se/Portals/_default/Skins/bb_DAGOBAH_krypin/htmltemplates/skrivboken_lista.txt",hb_skrivbokModalView_tmp:"https://www.barnensbibliotek.se/Portals/_default/Skins/bb_DAGOBAH_krypin/htmltemplates/skrivbokModal_View.txt",hb_boktipslist_tmp:"https://www.barnensbibliotek.se/Portals/_default/Skins/bb_DAGOBAH_krypin/htmltemplates/boktips_lista.txt",hb_boktipsModalView_tmp:"https://www.barnensbibliotek.se/Portals/_default/Skins/bb_DAGOBAH_krypin/htmltemplates/boktipsModal_View.txt",hb_bibblomonlist_tmp:"https://www.barnensbibliotek.se/Portals/_default/Skins/bb_DAGOBAH_krypin/htmltemplates/Bibblomon_lista.txt",hb_bibblomonItem_tmp:"https://www.barnensbibliotek.se/Portals/_default/Skins/bb_DAGOBAH_krypin/htmltemplates/Bibblomon_Item.txt",hb_skribokenbadges_tmp:"https://www.barnensbibliotek.se/Portals/_default/Skins/bb_DAGOBAH_krypin/htmltemplates/badges_skrivboken_lista.txt",hb_boktipsbadges_tmp:"https://www.barnensbibliotek.se/Portals/_default/Skins/bb_DAGOBAH_krypin/htmltemplates/badges_boktips_lista.txt",hb_specialbadges_tmp:"https://www.barnensbibliotek.se/Portals/_default/Skins/bb_DAGOBAH_krypin/htmltemplates/badges_special_lista.txt",hb_highscorebadges_tmp:"https://www.barnensbibliotek.se/Portals/_default/Skins/bb_DAGOBAH_krypin/htmltemplates/badges_highscore_lista.txt",hb_settingsAvatar_tmp:"https://www.barnensbibliotek.se/Portals/_default/Skins/bb_DAGOBAH_krypin/htmltemplates/settings_avatar_lista.txt",hb_settingsSkins_tmp:"https://www.barnensbibliotek.se/Portals/_default/Skins/bb_DAGOBAH_krypin/htmltemplates/settings_skin_lista.txt",hb_laserjustnu_tmp:"https://www.barnensbibliotek.se/Portals/_default/Skins/bb_DAGOBAH_krypin/htmltemplates/laserjustnu_item.txt",hb_userlatestboktips_tmp:"https://www.barnensbibliotek.se/Portals/_default/Skins/bb_DAGOBAH_krypin/htmltemplates/boktipsSingel_Item.txt",hb_PrintModalVal_tmp:"https://www.barnensbibliotek.se/Portals/_default/Skins/bb_DAGOBAH_krypin/htmltemplates/print_modalVal.txt",hb_PrintBoklist_tmp:"https://www.barnensbibliotek.se/Portals/_default/Skins/bb_DAGOBAH_krypin/htmltemplates/print_Boklistor.txt"},api:{boklistor:{getuserboklist:function(e){return t+"/Api_v3.1/booklist/uid/"+e+i},adduserbokitem:function(e,n,s){return t+"/Api_v3.1/booklist/typ/addbook/blistid/"+e+"/value/"+n+"/uid/"+s+i},deluserbokitem:function(e,n,s){return t+"/Api_v3.1/booklist/typ/delbook/blistid/"+e+"/value/"+n+"/uid/"+s+i},addbooklist:function(e,n){return t+"/Api_v3.1/booklist/typ/addbooklist/blistid/0/value/"+e+"/uid/"+n+i},editbooklist:function(e,n,s){return t+"/Api_v3.1/booklist/typ/editbooklist/blistid/"+e+"/value/"+n+"/uid/"+s+i},delbooklist:function(e,n){return t+"/Api_v3.1/booklist/typ/delbooklist/blistid/"+e+"/value/0/uid/"+n+i},printUrl:function(t){return e+"/DesktopModules/barnensbiblService/krypinboklistorPrint/boklistPrintTemplate.html?uid="+t.userid+"&listid="+t.booklistid+"&bg="+t.bgimg+"&col="+t.color+"&font="+t.font}},skrivbokenlistor:{getuserskribokenlist:function(e){return t+"/Api_v3.1/skrivboken/cmdtyp/ByUserID/val/"+e+"/typ/2/ap/0/pub/0"+i},getuserskribokenByID:function(e,n){return t+"/Api_v3.1/skrivboken/cmdtyp/BySkrivid/val/"+e+"/typ/"+n+"/ap/0/pub/0"+i},addskribokenItem:function(){return t+"/Api_v3.1/skrivboken/typ/addskrivboken/devkey/alf"},editskribokenItem:function(){return t+"/Api_v3.1/skrivboken/typ/editskrivboken/devkey/alf"},delskribokenItem:function(){return t+"/Api_v3.1/skrivboken/typ/deleteskrivbok/devkey/alf"}},boktipslistor:{getuserboktipslist:function(e){return t+"/Api_v3.1/boktips/typ/ByUserId/val/"+e+"/txtval/0"+i},getuserboktipsByTipID:function(e,n){return t+"/Api_v3.1/boktips/typ/ByTipId/val/"+e+"/txtval/0"+i},getbookContextByBookID:function(e){return t+"/Api_v3.1/boktips/typ/ByBookId/val/"+e+"/txtval/0"+i},addboktipsItem:function(){return t+"/Api_v3.1/boktips/typ/addboktips/devkey/alf"},editboktipsItem:function(){return t+"/Api_v3.1/boktips/typ/editboktips/devkey/alf"},delboktipsItem:function(){return t+"/Api_v3.1/boktips/typ/deleteboktips/devkey/alf"}},bibblomonlistor:{getuserbibblomonlist:function(e){return t+"/Api_v3.1/bibblomon/cmdtyp/usrmon/uid/"+e+"/monid/0/devkey/alf/?type=jsonp"}},scoreboard:{getuserbadgeslist:function(e){return t+"/Api_v3.1/award/cmdtyp/byuserid/uid/"+e+"/ag/0/devkey/alf/?type=jsonp"}},autocomplete:{geturl:function(e){return t+"/Api_v3.1/katalogen/cmdtyp/autocomplete/antal/"+e+"/devkey/alf/?type=json"}},installningar:{src:function(e){return t+"/Api_v3.1/settings/cmdtyp/get/uid/"+e+"/setid/0/setval/0/devkey/alf/?type=jsonp"},curAvatarsrc:"/Portals/_default/Skins/bb_DAGOBAH_krypin/images/avatars/",curSkinsrc:"/Portals/_default/Skins/bb_DAGOBAH_krypin/images/bakgrunder/",updatesettings:function(e,i,n){return t+"/Api_v3.1/settings/cmdtyp/settings/uid/"+e+"/setid/"+i+"/setval/"+n+"/devkey/alf/?type=jsonp"},avatarimgsrc:"/Portals/_default/Skins/bb_DAGOBAH_krypin/images/avatars/",laserjustnu:function(e){return t+"/Api_v3.1/settings/cmdtyp/getlasernu/uid/"+e+"/setid/0/setval/0/devkey/alf/?type=jsonp"},userlatestboktips:function(e){return t+"/Api_v3.1/boktips/typ/ByUserIdLatest/val/"+e+"/txtval/0/devkey/alf/?type=jsonp"}},devkeyend:i},userinfo:{avatarimg:"",avatarid:"",defaultavatarimg:"",defaultavatarid:"",skin:"",skinid:"",defaultskinimg:"",defaultskinclass:"",defaultskinid:"",userid:"",rollid:""},debug:"false"}}(),skrivbokimages:{catimgbase:"/DesktopModules/bb_aj_Skrivboken_Krypin/images/",catimagesrc:[{catid:"001",catname:"Bild saknas",imgsrc:"foto_saknas.jpg"},{catid:"0",catname:"&Ouml;vrigt",imgsrc:"skrivbok_default256_36.png"},{catid:"1",catname:"&Ouml;vrigt",imgsrc:"skrivbok_ovrigt256_36.png"},{catid:"2",catname:"&Ouml;vrigt",imgsrc:"skrivbok_ovrigt256_36.png"},{catid:"3",catname:"Ber&auml;ttelse",imgsrc:"skrivbok_berattelse-256_36.png"},{catid:"4",catname:"Dikt",imgsrc:"skrivbok_dikt-256_36.png"},{catid:"5",catname:"Tankar",imgsrc:"skrivbok_tankar256_36.png"},{catid:"6",catname:"&Ouml;vrigt",imgsrc:"skrivbok_ovrigt256_36.png"},{catid:"8",catname:"Deckare",imgsrc:"skrivbok_deckare256_36.png"},{catid:"9",catname:"Djur",imgsrc:"skrivbok_djur256_36.png"},{catid:"10",catname:"Fantasy",imgsrc:"skrivbok_fantasy256_36.png"},{catid:"11",catname:"Skr&auml;ck",imgsrc:"skrivbok_skrack256_36.png"},{catid:"12",catname:"K&auml;rlek",imgsrc:"skrivbok_karlek256_36.png"},{catid:"13",catname:"Ramsa",imgsrc:"skrivbok_ramsa256_36.png"},{catid:"15",catname:"Sorgligt",imgsrc:"skrivbok_sorgligt256_36.png"},{catid:"16",catname:"Humor",imgsrc:"skrivbok_skratta256_36.png"},{catid:"17",catname:"Sp&auml;nning",imgsrc:"skrivbok_spanning256_36.png"},{catid:"18",catname:"Sp&ouml;ken",imgsrc:"skrivbok_spoken256_36.png"},{catid:"19",catname:"&Auml;ventyr",imgsrc:"skrivbok_aventyr256_36.png"},{catid:"21",catname:"Hastar",imgsrc:"skrivbok_hastar256_36.png"}]},usermessages:function(){let t=function(t){try{return decodeURIComponent(escape(t))}catch(e){return String.prototype.replaceAll=function(t,e,i){return this.replace(new RegExp(t.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),i?"gi":"g"),"string"==typeof e?e.replace(/\$/g,"$$$$"):e)},t=(t=(t=(t=(t=(t=t.replaceAll("Ä",String.fromCharCode(196))).replaceAll("Å",String.fromCharCode(197))).replaceAll("Ö",String.fromCharCode(214))).replaceAll("ä",String.fromCharCode(228))).replaceAll("å",String.fromCharCode(229))).replaceAll("ö",String.fromCharCode(246))}};return{installningar:{confirmSave:t("Är du säker på att du vill spara ändringarna?")},skrivbok:{confirmAlert:t("Du måste fylla i alla uppgifter"),confirmAdd:t("Är du säker på att du vill lägga till texten?"),confirmEdit:t("Är du säker på att du vill ändra i texten?"),confirmDel:t("Är du säker på att du vill ta bort texten?")},boktips:{confirmAlert:t("Du måste fylla i alla uppgifter"),confirmAdd:t("Är du säker på att du vill lägga till boktipset?"),confirmEdit:t("Är du säker på att du vill ändra i boktipset?"),confirmDel:t("Är du säker på att du vill ta bort boktipset?")},boklist:{confirmAlert:t("Du måste skriva något!"),confirmAdd:t("Vill du lägga till denna boklista?"),confirmEdit:t("Vill du byta namn på boklistan?"),confirmDel:"Vill du ta bort boklistan?"},laserjustnu:{confirmRemove:t("Är du säker?")}}}()}},function(t,e,i){(function(t,n){var s;
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(){var r,o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="__lodash_hash_undefined__",c=500,h="__lodash_placeholder__",d=1,p=2,f=4,g=1,m=2,v=1,_=2,b=4,y=8,k=16,w=32,x=64,C=128,D=256,S=512,T=30,I="...",A=800,j=16,M=1,P=2,E=1/0,O=9007199254740991,H=1.7976931348623157e308,N=NaN,B=4294967295,F=B-1,L=B>>>1,z=[["ary",C],["bind",v],["bindKey",_],["curry",y],["curryRight",k],["flip",S],["partial",w],["partialRight",x],["rearg",D]],W="[object Arguments]",R="[object Array]",$="[object AsyncFunction]",q="[object Boolean]",U="[object Date]",K="[object DOMException]",Y="[object Error]",V="[object Function]",G="[object GeneratorFunction]",X="[object Map]",J="[object Number]",Z="[object Null]",Q="[object Object]",tt="[object Proxy]",et="[object RegExp]",it="[object Set]",nt="[object String]",st="[object Symbol]",rt="[object Undefined]",ot="[object WeakMap]",at="[object WeakSet]",lt="[object ArrayBuffer]",ut="[object DataView]",ct="[object Float32Array]",ht="[object Float64Array]",dt="[object Int8Array]",pt="[object Int16Array]",ft="[object Int32Array]",gt="[object Uint8Array]",mt="[object Uint8ClampedArray]",vt="[object Uint16Array]",_t="[object Uint32Array]",bt=/\b__p \+= '';/g,yt=/\b(__p \+=) '' \+/g,kt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,wt=/&(?:amp|lt|gt|quot|#39);/g,xt=/[&<>"']/g,Ct=RegExp(wt.source),Dt=RegExp(xt.source),St=/<%-([\s\S]+?)%>/g,Tt=/<%([\s\S]+?)%>/g,It=/<%=([\s\S]+?)%>/g,At=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,jt=/^\w*$/,Mt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pt=/[\\^$.*+?()[\]{}|]/g,Et=RegExp(Pt.source),Ot=/^\s+|\s+$/g,Ht=/^\s+/,Nt=/\s+$/,Bt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ft=/\{\n\/\* \[wrapped with (.+)\] \*/,Lt=/,? & /,zt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Wt=/\\(\\)?/g,Rt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,$t=/\w*$/,qt=/^[-+]0x[0-9a-f]+$/i,Ut=/^0b[01]+$/i,Kt=/^\[object .+?Constructor\]$/,Yt=/^0o[0-7]+$/i,Vt=/^(?:0|[1-9]\d*)$/,Gt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Xt=/($^)/,Jt=/['\n\r\u2028\u2029\\]/g,Zt="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Qt="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",te="[\\ud800-\\udfff]",ee="["+Qt+"]",ie="["+Zt+"]",ne="\\d+",se="[\\u2700-\\u27bf]",re="[a-z\\xdf-\\xf6\\xf8-\\xff]",oe="[^\\ud800-\\udfff"+Qt+ne+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",ae="\\ud83c[\\udffb-\\udfff]",le="[^\\ud800-\\udfff]",ue="(?:\\ud83c[\\udde6-\\uddff]){2}",ce="[\\ud800-\\udbff][\\udc00-\\udfff]",he="[A-Z\\xc0-\\xd6\\xd8-\\xde]",de="(?:"+re+"|"+oe+")",pe="(?:"+he+"|"+oe+")",fe="(?:"+ie+"|"+ae+")"+"?",ge="[\\ufe0e\\ufe0f]?"+fe+("(?:\\u200d(?:"+[le,ue,ce].join("|")+")[\\ufe0e\\ufe0f]?"+fe+")*"),me="(?:"+[se,ue,ce].join("|")+")"+ge,ve="(?:"+[le+ie+"?",ie,ue,ce,te].join("|")+")",_e=RegExp("['’]","g"),be=RegExp(ie,"g"),ye=RegExp(ae+"(?="+ae+")|"+ve+ge,"g"),ke=RegExp([he+"?"+re+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[ee,he,"$"].join("|")+")",pe+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[ee,he+de,"$"].join("|")+")",he+"?"+de+"+(?:['’](?:d|ll|m|re|s|t|ve))?",he+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ne,me].join("|"),"g"),we=RegExp("[\\u200d\\ud800-\\udfff"+Zt+"\\ufe0e\\ufe0f]"),xe=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ce=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],De=-1,Se={};Se[ct]=Se[ht]=Se[dt]=Se[pt]=Se[ft]=Se[gt]=Se[mt]=Se[vt]=Se[_t]=!0,Se[W]=Se[R]=Se[lt]=Se[q]=Se[ut]=Se[U]=Se[Y]=Se[V]=Se[X]=Se[J]=Se[Q]=Se[et]=Se[it]=Se[nt]=Se[ot]=!1;var Te={};Te[W]=Te[R]=Te[lt]=Te[ut]=Te[q]=Te[U]=Te[ct]=Te[ht]=Te[dt]=Te[pt]=Te[ft]=Te[X]=Te[J]=Te[Q]=Te[et]=Te[it]=Te[nt]=Te[st]=Te[gt]=Te[mt]=Te[vt]=Te[_t]=!0,Te[Y]=Te[V]=Te[ot]=!1;var Ie={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Ae=parseFloat,je=parseInt,Me="object"==typeof t&&t&&t.Object===Object&&t,Pe="object"==typeof self&&self&&self.Object===Object&&self,Ee=Me||Pe||Function("return this")(),Oe=e&&!e.nodeType&&e,He=Oe&&"object"==typeof n&&n&&!n.nodeType&&n,Ne=He&&He.exports===Oe,Be=Ne&&Me.process,Fe=function(){try{var t=He&&He.require&&He.require("util").types;return t||Be&&Be.binding&&Be.binding("util")}catch(t){}}(),Le=Fe&&Fe.isArrayBuffer,ze=Fe&&Fe.isDate,We=Fe&&Fe.isMap,Re=Fe&&Fe.isRegExp,$e=Fe&&Fe.isSet,qe=Fe&&Fe.isTypedArray;function Ue(t,e,i){switch(i.length){case 0:return t.call(e);case 1:return t.call(e,i[0]);case 2:return t.call(e,i[0],i[1]);case 3:return t.call(e,i[0],i[1],i[2])}return t.apply(e,i)}function Ke(t,e,i,n){for(var s=-1,r=null==t?0:t.length;++s<r;){var o=t[s];e(n,o,i(o),t)}return n}function Ye(t,e){for(var i=-1,n=null==t?0:t.length;++i<n&&!1!==e(t[i],i,t););return t}function Ve(t,e){for(var i=null==t?0:t.length;i--&&!1!==e(t[i],i,t););return t}function Ge(t,e){for(var i=-1,n=null==t?0:t.length;++i<n;)if(!e(t[i],i,t))return!1;return!0}function Xe(t,e){for(var i=-1,n=null==t?0:t.length,s=0,r=[];++i<n;){var o=t[i];e(o,i,t)&&(r[s++]=o)}return r}function Je(t,e){return!!(null==t?0:t.length)&&ai(t,e,0)>-1}function Ze(t,e,i){for(var n=-1,s=null==t?0:t.length;++n<s;)if(i(e,t[n]))return!0;return!1}function Qe(t,e){for(var i=-1,n=null==t?0:t.length,s=Array(n);++i<n;)s[i]=e(t[i],i,t);return s}function ti(t,e){for(var i=-1,n=e.length,s=t.length;++i<n;)t[s+i]=e[i];return t}function ei(t,e,i,n){var s=-1,r=null==t?0:t.length;for(n&&r&&(i=t[++s]);++s<r;)i=e(i,t[s],s,t);return i}function ii(t,e,i,n){var s=null==t?0:t.length;for(n&&s&&(i=t[--s]);s--;)i=e(i,t[s],s,t);return i}function ni(t,e){for(var i=-1,n=null==t?0:t.length;++i<n;)if(e(t[i],i,t))return!0;return!1}var si=hi("length");function ri(t,e,i){var n;return i(t,function(t,i,s){if(e(t,i,s))return n=i,!1}),n}function oi(t,e,i,n){for(var s=t.length,r=i+(n?1:-1);n?r--:++r<s;)if(e(t[r],r,t))return r;return-1}function ai(t,e,i){return e==e?function(t,e,i){var n=i-1,s=t.length;for(;++n<s;)if(t[n]===e)return n;return-1}(t,e,i):oi(t,ui,i)}function li(t,e,i,n){for(var s=i-1,r=t.length;++s<r;)if(n(t[s],e))return s;return-1}function ui(t){return t!=t}function ci(t,e){var i=null==t?0:t.length;return i?fi(t,e)/i:N}function hi(t){return function(e){return null==e?r:e[t]}}function di(t){return function(e){return null==t?r:t[e]}}function pi(t,e,i,n,s){return s(t,function(t,s,r){i=n?(n=!1,t):e(i,t,s,r)}),i}function fi(t,e){for(var i,n=-1,s=t.length;++n<s;){var o=e(t[n]);o!==r&&(i=i===r?o:i+o)}return i}function gi(t,e){for(var i=-1,n=Array(t);++i<t;)n[i]=e(i);return n}function mi(t){return function(e){return t(e)}}function vi(t,e){return Qe(e,function(e){return t[e]})}function _i(t,e){return t.has(e)}function bi(t,e){for(var i=-1,n=t.length;++i<n&&ai(e,t[i],0)>-1;);return i}function yi(t,e){for(var i=t.length;i--&&ai(e,t[i],0)>-1;);return i}var ki=di({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),wi=di({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function xi(t){return"\\"+Ie[t]}function Ci(t){return we.test(t)}function Di(t){var e=-1,i=Array(t.size);return t.forEach(function(t,n){i[++e]=[n,t]}),i}function Si(t,e){return function(i){return t(e(i))}}function Ti(t,e){for(var i=-1,n=t.length,s=0,r=[];++i<n;){var o=t[i];o!==e&&o!==h||(t[i]=h,r[s++]=i)}return r}function Ii(t){var e=-1,i=Array(t.size);return t.forEach(function(t){i[++e]=t}),i}function Ai(t){var e=-1,i=Array(t.size);return t.forEach(function(t){i[++e]=[t,t]}),i}function ji(t){return Ci(t)?function(t){var e=ye.lastIndex=0;for(;ye.test(t);)++e;return e}(t):si(t)}function Mi(t){return Ci(t)?function(t){return t.match(ye)||[]}(t):function(t){return t.split("")}(t)}var Pi=di({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var Ei=function t(e){var i,n=(e=null==e?Ee:Ei.defaults(Ee.Object(),e,Ei.pick(Ee,Ce))).Array,s=e.Date,Zt=e.Error,Qt=e.Function,te=e.Math,ee=e.Object,ie=e.RegExp,ne=e.String,se=e.TypeError,re=n.prototype,oe=Qt.prototype,ae=ee.prototype,le=e["__core-js_shared__"],ue=oe.toString,ce=ae.hasOwnProperty,he=0,de=(i=/[^.]+$/.exec(le&&le.keys&&le.keys.IE_PROTO||""))?"Symbol(src)_1."+i:"",pe=ae.toString,fe=ue.call(ee),ge=Ee._,me=ie("^"+ue.call(ce).replace(Pt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ve=Ne?e.Buffer:r,ye=e.Symbol,we=e.Uint8Array,Ie=ve?ve.allocUnsafe:r,Me=Si(ee.getPrototypeOf,ee),Pe=ee.create,Oe=ae.propertyIsEnumerable,He=re.splice,Be=ye?ye.isConcatSpreadable:r,Fe=ye?ye.iterator:r,si=ye?ye.toStringTag:r,di=function(){try{var t=Fr(ee,"defineProperty");return t({},"",{}),t}catch(t){}}(),Oi=e.clearTimeout!==Ee.clearTimeout&&e.clearTimeout,Hi=s&&s.now!==Ee.Date.now&&s.now,Ni=e.setTimeout!==Ee.setTimeout&&e.setTimeout,Bi=te.ceil,Fi=te.floor,Li=ee.getOwnPropertySymbols,zi=ve?ve.isBuffer:r,Wi=e.isFinite,Ri=re.join,$i=Si(ee.keys,ee),qi=te.max,Ui=te.min,Ki=s.now,Yi=e.parseInt,Vi=te.random,Gi=re.reverse,Xi=Fr(e,"DataView"),Ji=Fr(e,"Map"),Zi=Fr(e,"Promise"),Qi=Fr(e,"Set"),tn=Fr(e,"WeakMap"),en=Fr(ee,"create"),nn=tn&&new tn,sn={},rn=co(Xi),on=co(Ji),an=co(Zi),ln=co(Qi),un=co(tn),cn=ye?ye.prototype:r,hn=cn?cn.valueOf:r,dn=cn?cn.toString:r;function pn(t){if(Ia(t)&&!va(t)&&!(t instanceof vn)){if(t instanceof mn)return t;if(ce.call(t,"__wrapped__"))return ho(t)}return new mn(t)}var fn=function(){function t(){}return function(e){if(!Ta(e))return{};if(Pe)return Pe(e);t.prototype=e;var i=new t;return t.prototype=r,i}}();function gn(){}function mn(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=r}function vn(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=B,this.__views__=[]}function _n(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}function bn(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}function yn(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}function kn(t){var e=-1,i=null==t?0:t.length;for(this.__data__=new yn;++e<i;)this.add(t[e])}function wn(t){var e=this.__data__=new bn(t);this.size=e.size}function xn(t,e){var i=va(t),n=!i&&ma(t),s=!i&&!n&&ka(t),r=!i&&!n&&!s&&Na(t),o=i||n||s||r,a=o?gi(t.length,ne):[],l=a.length;for(var u in t)!e&&!ce.call(t,u)||o&&("length"==u||s&&("offset"==u||"parent"==u)||r&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||Ur(u,l))||a.push(u);return a}function Cn(t){var e=t.length;return e?t[ks(0,e-1)]:r}function Dn(t,e){return ao(ir(t),On(e,0,t.length))}function Sn(t){return ao(ir(t))}function Tn(t,e,i){(i===r||pa(t[e],i))&&(i!==r||e in t)||Pn(t,e,i)}function In(t,e,i){var n=t[e];ce.call(t,e)&&pa(n,i)&&(i!==r||e in t)||Pn(t,e,i)}function An(t,e){for(var i=t.length;i--;)if(pa(t[i][0],e))return i;return-1}function jn(t,e,i,n){return Ln(t,function(t,s,r){e(n,t,i(t),r)}),n}function Mn(t,e){return t&&nr(e,sl(e),t)}function Pn(t,e,i){"__proto__"==e&&di?di(t,e,{configurable:!0,enumerable:!0,value:i,writable:!0}):t[e]=i}function En(t,e){for(var i=-1,s=e.length,o=n(s),a=null==t;++i<s;)o[i]=a?r:Qa(t,e[i]);return o}function On(t,e,i){return t==t&&(i!==r&&(t=t<=i?t:i),e!==r&&(t=t>=e?t:e)),t}function Hn(t,e,i,n,s,o){var a,l=e&d,u=e&p,c=e&f;if(i&&(a=s?i(t,n,s,o):i(t)),a!==r)return a;if(!Ta(t))return t;var h=va(t);if(h){if(a=function(t){var e=t.length,i=new t.constructor(e);return e&&"string"==typeof t[0]&&ce.call(t,"index")&&(i.index=t.index,i.input=t.input),i}(t),!l)return ir(t,a)}else{var g=Wr(t),m=g==V||g==G;if(ka(t))return Xs(t,l);if(g==Q||g==W||m&&!s){if(a=u||m?{}:$r(t),!l)return u?function(t,e){return nr(t,zr(t),e)}(t,function(t,e){return t&&nr(e,rl(e),t)}(a,t)):function(t,e){return nr(t,Lr(t),e)}(t,Mn(a,t))}else{if(!Te[g])return s?t:{};a=function(t,e,i){var n,s,r,o=t.constructor;switch(e){case lt:return Js(t);case q:case U:return new o(+t);case ut:return function(t,e){var i=e?Js(t.buffer):t.buffer;return new t.constructor(i,t.byteOffset,t.byteLength)}(t,i);case ct:case ht:case dt:case pt:case ft:case gt:case mt:case vt:case _t:return Zs(t,i);case X:return new o;case J:case nt:return new o(t);case et:return(r=new(s=t).constructor(s.source,$t.exec(s))).lastIndex=s.lastIndex,r;case it:return new o;case st:return n=t,hn?ee(hn.call(n)):{}}}(t,g,l)}}o||(o=new wn);var v=o.get(t);if(v)return v;if(o.set(t,a),Ea(t))return t.forEach(function(n){a.add(Hn(n,e,i,n,t,o))}),a;if(Aa(t))return t.forEach(function(n,s){a.set(s,Hn(n,e,i,s,t,o))}),a;var _=h?r:(c?u?Mr:jr:u?rl:sl)(t);return Ye(_||t,function(n,s){_&&(n=t[s=n]),In(a,s,Hn(n,e,i,s,t,o))}),a}function Nn(t,e,i){var n=i.length;if(null==t)return!n;for(t=ee(t);n--;){var s=i[n],o=e[s],a=t[s];if(a===r&&!(s in t)||!o(a))return!1}return!0}function Bn(t,e,i){if("function"!=typeof t)throw new se(l);return no(function(){t.apply(r,i)},e)}function Fn(t,e,i,n){var s=-1,r=Je,a=!0,l=t.length,u=[],c=e.length;if(!l)return u;i&&(e=Qe(e,mi(i))),n?(r=Ze,a=!1):e.length>=o&&(r=_i,a=!1,e=new kn(e));t:for(;++s<l;){var h=t[s],d=null==i?h:i(h);if(h=n||0!==h?h:0,a&&d==d){for(var p=c;p--;)if(e[p]===d)continue t;u.push(h)}else r(e,d,n)||u.push(h)}return u}pn.templateSettings={escape:St,evaluate:Tt,interpolate:It,variable:"",imports:{_:pn}},pn.prototype=gn.prototype,pn.prototype.constructor=pn,mn.prototype=fn(gn.prototype),mn.prototype.constructor=mn,vn.prototype=fn(gn.prototype),vn.prototype.constructor=vn,_n.prototype.clear=function(){this.__data__=en?en(null):{},this.size=0},_n.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},_n.prototype.get=function(t){var e=this.__data__;if(en){var i=e[t];return i===u?r:i}return ce.call(e,t)?e[t]:r},_n.prototype.has=function(t){var e=this.__data__;return en?e[t]!==r:ce.call(e,t)},_n.prototype.set=function(t,e){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=en&&e===r?u:e,this},bn.prototype.clear=function(){this.__data__=[],this.size=0},bn.prototype.delete=function(t){var e=this.__data__,i=An(e,t);return!(i<0||(i==e.length-1?e.pop():He.call(e,i,1),--this.size,0))},bn.prototype.get=function(t){var e=this.__data__,i=An(e,t);return i<0?r:e[i][1]},bn.prototype.has=function(t){return An(this.__data__,t)>-1},bn.prototype.set=function(t,e){var i=this.__data__,n=An(i,t);return n<0?(++this.size,i.push([t,e])):i[n][1]=e,this},yn.prototype.clear=function(){this.size=0,this.__data__={hash:new _n,map:new(Ji||bn),string:new _n}},yn.prototype.delete=function(t){var e=Nr(this,t).delete(t);return this.size-=e?1:0,e},yn.prototype.get=function(t){return Nr(this,t).get(t)},yn.prototype.has=function(t){return Nr(this,t).has(t)},yn.prototype.set=function(t,e){var i=Nr(this,t),n=i.size;return i.set(t,e),this.size+=i.size==n?0:1,this},kn.prototype.add=kn.prototype.push=function(t){return this.__data__.set(t,u),this},kn.prototype.has=function(t){return this.__data__.has(t)},wn.prototype.clear=function(){this.__data__=new bn,this.size=0},wn.prototype.delete=function(t){var e=this.__data__,i=e.delete(t);return this.size=e.size,i},wn.prototype.get=function(t){return this.__data__.get(t)},wn.prototype.has=function(t){return this.__data__.has(t)},wn.prototype.set=function(t,e){var i=this.__data__;if(i instanceof bn){var n=i.__data__;if(!Ji||n.length<o-1)return n.push([t,e]),this.size=++i.size,this;i=this.__data__=new yn(n)}return i.set(t,e),this.size=i.size,this};var Ln=or(Yn),zn=or(Vn,!0);function Wn(t,e){var i=!0;return Ln(t,function(t,n,s){return i=!!e(t,n,s)}),i}function Rn(t,e,i){for(var n=-1,s=t.length;++n<s;){var o=t[n],a=e(o);if(null!=a&&(l===r?a==a&&!Ha(a):i(a,l)))var l=a,u=o}return u}function $n(t,e){var i=[];return Ln(t,function(t,n,s){e(t,n,s)&&i.push(t)}),i}function qn(t,e,i,n,s){var r=-1,o=t.length;for(i||(i=qr),s||(s=[]);++r<o;){var a=t[r];e>0&&i(a)?e>1?qn(a,e-1,i,n,s):ti(s,a):n||(s[s.length]=a)}return s}var Un=ar(),Kn=ar(!0);function Yn(t,e){return t&&Un(t,e,sl)}function Vn(t,e){return t&&Kn(t,e,sl)}function Gn(t,e){return Xe(e,function(e){return Ca(t[e])})}function Xn(t,e){for(var i=0,n=(e=Ks(e,t)).length;null!=t&&i<n;)t=t[uo(e[i++])];return i&&i==n?t:r}function Jn(t,e,i){var n=e(t);return va(t)?n:ti(n,i(t))}function Zn(t){return null==t?t===r?rt:Z:si&&si in ee(t)?function(t){var e=ce.call(t,si),i=t[si];try{t[si]=r;var n=!0}catch(t){}var s=pe.call(t);return n&&(e?t[si]=i:delete t[si]),s}(t):function(t){return pe.call(t)}(t)}function Qn(t,e){return t>e}function ts(t,e){return null!=t&&ce.call(t,e)}function es(t,e){return null!=t&&e in ee(t)}function is(t,e,i){for(var s=i?Ze:Je,o=t[0].length,a=t.length,l=a,u=n(a),c=1/0,h=[];l--;){var d=t[l];l&&e&&(d=Qe(d,mi(e))),c=Ui(d.length,c),u[l]=!i&&(e||o>=120&&d.length>=120)?new kn(l&&d):r}d=t[0];var p=-1,f=u[0];t:for(;++p<o&&h.length<c;){var g=d[p],m=e?e(g):g;if(g=i||0!==g?g:0,!(f?_i(f,m):s(h,m,i))){for(l=a;--l;){var v=u[l];if(!(v?_i(v,m):s(t[l],m,i)))continue t}f&&f.push(m),h.push(g)}}return h}function ns(t,e,i){var n=null==(t=to(t,e=Ks(e,t)))?t:t[uo(xo(e))];return null==n?r:Ue(n,t,i)}function ss(t){return Ia(t)&&Zn(t)==W}function rs(t,e,i,n,s){return t===e||(null==t||null==e||!Ia(t)&&!Ia(e)?t!=t&&e!=e:function(t,e,i,n,s,o){var a=va(t),l=va(e),u=a?R:Wr(t),c=l?R:Wr(e),h=(u=u==W?Q:u)==Q,d=(c=c==W?Q:c)==Q,p=u==c;if(p&&ka(t)){if(!ka(e))return!1;a=!0,h=!1}if(p&&!h)return o||(o=new wn),a||Na(t)?Ir(t,e,i,n,s,o):function(t,e,i,n,s,r,o){switch(i){case ut:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case lt:return!(t.byteLength!=e.byteLength||!r(new we(t),new we(e)));case q:case U:case J:return pa(+t,+e);case Y:return t.name==e.name&&t.message==e.message;case et:case nt:return t==e+"";case X:var a=Di;case it:var l=n&g;if(a||(a=Ii),t.size!=e.size&&!l)return!1;var u=o.get(t);if(u)return u==e;n|=m,o.set(t,e);var c=Ir(a(t),a(e),n,s,r,o);return o.delete(t),c;case st:if(hn)return hn.call(t)==hn.call(e)}return!1}(t,e,u,i,n,s,o);if(!(i&g)){var f=h&&ce.call(t,"__wrapped__"),v=d&&ce.call(e,"__wrapped__");if(f||v){var _=f?t.value():t,b=v?e.value():e;return o||(o=new wn),s(_,b,i,n,o)}}return!!p&&(o||(o=new wn),function(t,e,i,n,s,o){var a=i&g,l=jr(t),u=l.length,c=jr(e).length;if(u!=c&&!a)return!1;for(var h=u;h--;){var d=l[h];if(!(a?d in e:ce.call(e,d)))return!1}var p=o.get(t);if(p&&o.get(e))return p==e;var f=!0;o.set(t,e),o.set(e,t);for(var m=a;++h<u;){d=l[h];var v=t[d],_=e[d];if(n)var b=a?n(_,v,d,e,t,o):n(v,_,d,t,e,o);if(!(b===r?v===_||s(v,_,i,n,o):b)){f=!1;break}m||(m="constructor"==d)}if(f&&!m){var y=t.constructor,k=e.constructor;y!=k&&"constructor"in t&&"constructor"in e&&!("function"==typeof y&&y instanceof y&&"function"==typeof k&&k instanceof k)&&(f=!1)}return o.delete(t),o.delete(e),f}(t,e,i,n,s,o))}(t,e,i,n,rs,s))}function os(t,e,i,n){var s=i.length,o=s,a=!n;if(null==t)return!o;for(t=ee(t);s--;){var l=i[s];if(a&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++s<o;){var u=(l=i[s])[0],c=t[u],h=l[1];if(a&&l[2]){if(c===r&&!(u in t))return!1}else{var d=new wn;if(n)var p=n(c,h,u,t,e,d);if(!(p===r?rs(h,c,g|m,n,d):p))return!1}}return!0}function as(t){return!(!Ta(t)||(e=t,de&&de in e))&&(Ca(t)?me:Kt).test(co(t));var e}function ls(t){return"function"==typeof t?t:null==t?jl:"object"==typeof t?va(t)?fs(t[0],t[1]):ps(t):Ll(t)}function us(t){if(!Xr(t))return $i(t);var e=[];for(var i in ee(t))ce.call(t,i)&&"constructor"!=i&&e.push(i);return e}function cs(t){if(!Ta(t))return function(t){var e=[];if(null!=t)for(var i in ee(t))e.push(i);return e}(t);var e=Xr(t),i=[];for(var n in t)("constructor"!=n||!e&&ce.call(t,n))&&i.push(n);return i}function hs(t,e){return t<e}function ds(t,e){var i=-1,s=ba(t)?n(t.length):[];return Ln(t,function(t,n,r){s[++i]=e(t,n,r)}),s}function ps(t){var e=Br(t);return 1==e.length&&e[0][2]?Zr(e[0][0],e[0][1]):function(i){return i===t||os(i,t,e)}}function fs(t,e){return Yr(t)&&Jr(e)?Zr(uo(t),e):function(i){var n=Qa(i,t);return n===r&&n===e?tl(i,t):rs(e,n,g|m)}}function gs(t,e,i,n,s){t!==e&&Un(e,function(o,a){if(Ta(o))s||(s=new wn),function(t,e,i,n,s,o,a){var l=eo(t,i),u=eo(e,i),c=a.get(u);if(c)Tn(t,i,c);else{var h=o?o(l,u,i+"",t,e,a):r,d=h===r;if(d){var p=va(u),f=!p&&ka(u),g=!p&&!f&&Na(u);h=u,p||f||g?va(l)?h=l:ya(l)?h=ir(l):f?(d=!1,h=Xs(u,!0)):g?(d=!1,h=Zs(u,!0)):h=[]:Ma(u)||ma(u)?(h=l,ma(l)?h=qa(l):Ta(l)&&!Ca(l)||(h=$r(u))):d=!1}d&&(a.set(u,h),s(h,u,n,o,a),a.delete(u)),Tn(t,i,h)}}(t,e,a,i,gs,n,s);else{var l=n?n(eo(t,a),o,a+"",t,e,s):r;l===r&&(l=o),Tn(t,a,l)}},rl)}function ms(t,e){var i=t.length;if(i)return Ur(e+=e<0?i:0,i)?t[e]:r}function vs(t,e,i){var n=-1;return e=Qe(e.length?e:[jl],mi(Hr())),function(t,e){var i=t.length;for(t.sort(e);i--;)t[i]=t[i].value;return t}(ds(t,function(t,i,s){return{criteria:Qe(e,function(e){return e(t)}),index:++n,value:t}}),function(t,e){return function(t,e,i){for(var n=-1,s=t.criteria,r=e.criteria,o=s.length,a=i.length;++n<o;){var l=Qs(s[n],r[n]);if(l){if(n>=a)return l;var u=i[n];return l*("desc"==u?-1:1)}}return t.index-e.index}(t,e,i)})}function _s(t,e,i){for(var n=-1,s=e.length,r={};++n<s;){var o=e[n],a=Xn(t,o);i(a,o)&&Ss(r,Ks(o,t),a)}return r}function bs(t,e,i,n){var s=n?li:ai,r=-1,o=e.length,a=t;for(t===e&&(e=ir(e)),i&&(a=Qe(t,mi(i)));++r<o;)for(var l=0,u=e[r],c=i?i(u):u;(l=s(a,c,l,n))>-1;)a!==t&&He.call(a,l,1),He.call(t,l,1);return t}function ys(t,e){for(var i=t?e.length:0,n=i-1;i--;){var s=e[i];if(i==n||s!==r){var r=s;Ur(s)?He.call(t,s,1):Fs(t,s)}}return t}function ks(t,e){return t+Fi(Vi()*(e-t+1))}function ws(t,e){var i="";if(!t||e<1||e>O)return i;do{e%2&&(i+=t),(e=Fi(e/2))&&(t+=t)}while(e);return i}function xs(t,e){return so(Qr(t,e,jl),t+"")}function Cs(t){return Cn(pl(t))}function Ds(t,e){var i=pl(t);return ao(i,On(e,0,i.length))}function Ss(t,e,i,n){if(!Ta(t))return t;for(var s=-1,o=(e=Ks(e,t)).length,a=o-1,l=t;null!=l&&++s<o;){var u=uo(e[s]),c=i;if(s!=a){var h=l[u];(c=n?n(h,u,l):r)===r&&(c=Ta(h)?h:Ur(e[s+1])?[]:{})}In(l,u,c),l=l[u]}return t}var Ts=nn?function(t,e){return nn.set(t,e),t}:jl,Is=di?function(t,e){return di(t,"toString",{configurable:!0,enumerable:!1,value:Tl(e),writable:!0})}:jl;function As(t){return ao(pl(t))}function js(t,e,i){var s=-1,r=t.length;e<0&&(e=-e>r?0:r+e),(i=i>r?r:i)<0&&(i+=r),r=e>i?0:i-e>>>0,e>>>=0;for(var o=n(r);++s<r;)o[s]=t[s+e];return o}function Ms(t,e){var i;return Ln(t,function(t,n,s){return!(i=e(t,n,s))}),!!i}function Ps(t,e,i){var n=0,s=null==t?n:t.length;if("number"==typeof e&&e==e&&s<=L){for(;n<s;){var r=n+s>>>1,o=t[r];null!==o&&!Ha(o)&&(i?o<=e:o<e)?n=r+1:s=r}return s}return Es(t,e,jl,i)}function Es(t,e,i,n){e=i(e);for(var s=0,o=null==t?0:t.length,a=e!=e,l=null===e,u=Ha(e),c=e===r;s<o;){var h=Fi((s+o)/2),d=i(t[h]),p=d!==r,f=null===d,g=d==d,m=Ha(d);if(a)var v=n||g;else v=c?g&&(n||p):l?g&&p&&(n||!f):u?g&&p&&!f&&(n||!m):!f&&!m&&(n?d<=e:d<e);v?s=h+1:o=h}return Ui(o,F)}function Os(t,e){for(var i=-1,n=t.length,s=0,r=[];++i<n;){var o=t[i],a=e?e(o):o;if(!i||!pa(a,l)){var l=a;r[s++]=0===o?0:o}}return r}function Hs(t){return"number"==typeof t?t:Ha(t)?N:+t}function Ns(t){if("string"==typeof t)return t;if(va(t))return Qe(t,Ns)+"";if(Ha(t))return dn?dn.call(t):"";var e=t+"";return"0"==e&&1/t==-E?"-0":e}function Bs(t,e,i){var n=-1,s=Je,r=t.length,a=!0,l=[],u=l;if(i)a=!1,s=Ze;else if(r>=o){var c=e?null:wr(t);if(c)return Ii(c);a=!1,s=_i,u=new kn}else u=e?[]:l;t:for(;++n<r;){var h=t[n],d=e?e(h):h;if(h=i||0!==h?h:0,a&&d==d){for(var p=u.length;p--;)if(u[p]===d)continue t;e&&u.push(d),l.push(h)}else s(u,d,i)||(u!==l&&u.push(d),l.push(h))}return l}function Fs(t,e){return null==(t=to(t,e=Ks(e,t)))||delete t[uo(xo(e))]}function Ls(t,e,i,n){return Ss(t,e,i(Xn(t,e)),n)}function zs(t,e,i,n){for(var s=t.length,r=n?s:-1;(n?r--:++r<s)&&e(t[r],r,t););return i?js(t,n?0:r,n?r+1:s):js(t,n?r+1:0,n?s:r)}function Ws(t,e){var i=t;return i instanceof vn&&(i=i.value()),ei(e,function(t,e){return e.func.apply(e.thisArg,ti([t],e.args))},i)}function Rs(t,e,i){var s=t.length;if(s<2)return s?Bs(t[0]):[];for(var r=-1,o=n(s);++r<s;)for(var a=t[r],l=-1;++l<s;)l!=r&&(o[r]=Fn(o[r]||a,t[l],e,i));return Bs(qn(o,1),e,i)}function $s(t,e,i){for(var n=-1,s=t.length,o=e.length,a={};++n<s;){var l=n<o?e[n]:r;i(a,t[n],l)}return a}function qs(t){return ya(t)?t:[]}function Us(t){return"function"==typeof t?t:jl}function Ks(t,e){return va(t)?t:Yr(t,e)?[t]:lo(Ua(t))}var Ys=xs;function Vs(t,e,i){var n=t.length;return i=i===r?n:i,!e&&i>=n?t:js(t,e,i)}var Gs=Oi||function(t){return Ee.clearTimeout(t)};function Xs(t,e){if(e)return t.slice();var i=t.length,n=Ie?Ie(i):new t.constructor(i);return t.copy(n),n}function Js(t){var e=new t.constructor(t.byteLength);return new we(e).set(new we(t)),e}function Zs(t,e){var i=e?Js(t.buffer):t.buffer;return new t.constructor(i,t.byteOffset,t.length)}function Qs(t,e){if(t!==e){var i=t!==r,n=null===t,s=t==t,o=Ha(t),a=e!==r,l=null===e,u=e==e,c=Ha(e);if(!l&&!c&&!o&&t>e||o&&a&&u&&!l&&!c||n&&a&&u||!i&&u||!s)return 1;if(!n&&!o&&!c&&t<e||c&&i&&s&&!n&&!o||l&&i&&s||!a&&s||!u)return-1}return 0}function tr(t,e,i,s){for(var r=-1,o=t.length,a=i.length,l=-1,u=e.length,c=qi(o-a,0),h=n(u+c),d=!s;++l<u;)h[l]=e[l];for(;++r<a;)(d||r<o)&&(h[i[r]]=t[r]);for(;c--;)h[l++]=t[r++];return h}function er(t,e,i,s){for(var r=-1,o=t.length,a=-1,l=i.length,u=-1,c=e.length,h=qi(o-l,0),d=n(h+c),p=!s;++r<h;)d[r]=t[r];for(var f=r;++u<c;)d[f+u]=e[u];for(;++a<l;)(p||r<o)&&(d[f+i[a]]=t[r++]);return d}function ir(t,e){var i=-1,s=t.length;for(e||(e=n(s));++i<s;)e[i]=t[i];return e}function nr(t,e,i,n){var s=!i;i||(i={});for(var o=-1,a=e.length;++o<a;){var l=e[o],u=n?n(i[l],t[l],l,i,t):r;u===r&&(u=t[l]),s?Pn(i,l,u):In(i,l,u)}return i}function sr(t,e){return function(i,n){var s=va(i)?Ke:jn,r=e?e():{};return s(i,t,Hr(n,2),r)}}function rr(t){return xs(function(e,i){var n=-1,s=i.length,o=s>1?i[s-1]:r,a=s>2?i[2]:r;for(o=t.length>3&&"function"==typeof o?(s--,o):r,a&&Kr(i[0],i[1],a)&&(o=s<3?r:o,s=1),e=ee(e);++n<s;){var l=i[n];l&&t(e,l,n,o)}return e})}function or(t,e){return function(i,n){if(null==i)return i;if(!ba(i))return t(i,n);for(var s=i.length,r=e?s:-1,o=ee(i);(e?r--:++r<s)&&!1!==n(o[r],r,o););return i}}function ar(t){return function(e,i,n){for(var s=-1,r=ee(e),o=n(e),a=o.length;a--;){var l=o[t?a:++s];if(!1===i(r[l],l,r))break}return e}}function lr(t){return function(e){var i=Ci(e=Ua(e))?Mi(e):r,n=i?i[0]:e.charAt(0),s=i?Vs(i,1).join(""):e.slice(1);return n[t]()+s}}function ur(t){return function(e){return ei(Cl(ml(e).replace(_e,"")),t,"")}}function cr(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var i=fn(t.prototype),n=t.apply(i,e);return Ta(n)?n:i}}function hr(t){return function(e,i,n){var s=ee(e);if(!ba(e)){var o=Hr(i,3);e=sl(e),i=function(t){return o(s[t],t,s)}}var a=t(e,i,n);return a>-1?s[o?e[a]:a]:r}}function dr(t){return Ar(function(e){var i=e.length,n=i,s=mn.prototype.thru;for(t&&e.reverse();n--;){var o=e[n];if("function"!=typeof o)throw new se(l);if(s&&!a&&"wrapper"==Er(o))var a=new mn([],!0)}for(n=a?n:i;++n<i;){var u=Er(o=e[n]),c="wrapper"==u?Pr(o):r;a=c&&Vr(c[0])&&c[1]==(C|y|w|D)&&!c[4].length&&1==c[9]?a[Er(c[0])].apply(a,c[3]):1==o.length&&Vr(o)?a[u]():a.thru(o)}return function(){var t=arguments,n=t[0];if(a&&1==t.length&&va(n))return a.plant(n).value();for(var s=0,r=i?e[s].apply(this,t):n;++s<i;)r=e[s].call(this,r);return r}})}function pr(t,e,i,s,o,a,l,u,c,h){var d=e&C,p=e&v,f=e&_,g=e&(y|k),m=e&S,b=f?r:cr(t);return function v(){for(var _=arguments.length,y=n(_),k=_;k--;)y[k]=arguments[k];if(g)var w=Or(v),x=function(t,e){for(var i=t.length,n=0;i--;)t[i]===e&&++n;return n}(y,w);if(s&&(y=tr(y,s,o,g)),a&&(y=er(y,a,l,g)),_-=x,g&&_<h){var C=Ti(y,w);return yr(t,e,pr,v.placeholder,i,y,C,u,c,h-_)}var D=p?i:this,S=f?D[t]:t;return _=y.length,u?y=function(t,e){for(var i=t.length,n=Ui(e.length,i),s=ir(t);n--;){var o=e[n];t[n]=Ur(o,i)?s[o]:r}return t}(y,u):m&&_>1&&y.reverse(),d&&c<_&&(y.length=c),this&&this!==Ee&&this instanceof v&&(S=b||cr(S)),S.apply(D,y)}}function fr(t,e){return function(i,n){return function(t,e,i,n){return Yn(t,function(t,s,r){e(n,i(t),s,r)}),n}(i,t,e(n),{})}}function gr(t,e){return function(i,n){var s;if(i===r&&n===r)return e;if(i!==r&&(s=i),n!==r){if(s===r)return n;"string"==typeof i||"string"==typeof n?(i=Ns(i),n=Ns(n)):(i=Hs(i),n=Hs(n)),s=t(i,n)}return s}}function mr(t){return Ar(function(e){return e=Qe(e,mi(Hr())),xs(function(i){var n=this;return t(e,function(t){return Ue(t,n,i)})})})}function vr(t,e){var i=(e=e===r?" ":Ns(e)).length;if(i<2)return i?ws(e,t):e;var n=ws(e,Bi(t/ji(e)));return Ci(e)?Vs(Mi(n),0,t).join(""):n.slice(0,t)}function _r(t){return function(e,i,s){return s&&"number"!=typeof s&&Kr(e,i,s)&&(i=s=r),e=za(e),i===r?(i=e,e=0):i=za(i),function(t,e,i,s){for(var r=-1,o=qi(Bi((e-t)/(i||1)),0),a=n(o);o--;)a[s?o:++r]=t,t+=i;return a}(e,i,s=s===r?e<i?1:-1:za(s),t)}}function br(t){return function(e,i){return"string"==typeof e&&"string"==typeof i||(e=$a(e),i=$a(i)),t(e,i)}}function yr(t,e,i,n,s,o,a,l,u,c){var h=e&y;e|=h?w:x,(e&=~(h?x:w))&b||(e&=~(v|_));var d=[t,e,s,h?o:r,h?a:r,h?r:o,h?r:a,l,u,c],p=i.apply(r,d);return Vr(t)&&io(p,d),p.placeholder=n,ro(p,t,e)}function kr(t){var e=te[t];return function(t,i){if(t=$a(t),i=null==i?0:Ui(Wa(i),292)){var n=(Ua(t)+"e").split("e");return+((n=(Ua(e(n[0]+"e"+(+n[1]+i)))+"e").split("e"))[0]+"e"+(+n[1]-i))}return e(t)}}var wr=Qi&&1/Ii(new Qi([,-0]))[1]==E?function(t){return new Qi(t)}:Hl;function xr(t){return function(e){var i=Wr(e);return i==X?Di(e):i==it?Ai(e):function(t,e){return Qe(e,function(e){return[e,t[e]]})}(e,t(e))}}function Cr(t,e,i,s,o,a,u,c){var d=e&_;if(!d&&"function"!=typeof t)throw new se(l);var p=s?s.length:0;if(p||(e&=~(w|x),s=o=r),u=u===r?u:qi(Wa(u),0),c=c===r?c:Wa(c),p-=o?o.length:0,e&x){var f=s,g=o;s=o=r}var m=d?r:Pr(t),S=[t,e,i,s,o,f,g,a,u,c];if(m&&function(t,e){var i=t[1],n=e[1],s=i|n,r=s<(v|_|C),o=n==C&&i==y||n==C&&i==D&&t[7].length<=e[8]||n==(C|D)&&e[7].length<=e[8]&&i==y;if(!r&&!o)return t;n&v&&(t[2]=e[2],s|=i&v?0:b);var a=e[3];if(a){var l=t[3];t[3]=l?tr(l,a,e[4]):a,t[4]=l?Ti(t[3],h):e[4]}(a=e[5])&&(l=t[5],t[5]=l?er(l,a,e[6]):a,t[6]=l?Ti(t[5],h):e[6]),(a=e[7])&&(t[7]=a),n&C&&(t[8]=null==t[8]?e[8]:Ui(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=s}(S,m),t=S[0],e=S[1],i=S[2],s=S[3],o=S[4],!(c=S[9]=S[9]===r?d?0:t.length:qi(S[9]-p,0))&&e&(y|k)&&(e&=~(y|k)),e&&e!=v)T=e==y||e==k?function(t,e,i){var s=cr(t);return function o(){for(var a=arguments.length,l=n(a),u=a,c=Or(o);u--;)l[u]=arguments[u];var h=a<3&&l[0]!==c&&l[a-1]!==c?[]:Ti(l,c);return(a-=h.length)<i?yr(t,e,pr,o.placeholder,r,l,h,r,r,i-a):Ue(this&&this!==Ee&&this instanceof o?s:t,this,l)}}(t,e,c):e!=w&&e!=(v|w)||o.length?pr.apply(r,S):function(t,e,i,s){var r=e&v,o=cr(t);return function e(){for(var a=-1,l=arguments.length,u=-1,c=s.length,h=n(c+l),d=this&&this!==Ee&&this instanceof e?o:t;++u<c;)h[u]=s[u];for(;l--;)h[u++]=arguments[++a];return Ue(d,r?i:this,h)}}(t,e,i,s);else var T=function(t,e,i){var n=e&v,s=cr(t);return function e(){return(this&&this!==Ee&&this instanceof e?s:t).apply(n?i:this,arguments)}}(t,e,i);return ro((m?Ts:io)(T,S),t,e)}function Dr(t,e,i,n){return t===r||pa(t,ae[i])&&!ce.call(n,i)?e:t}function Sr(t,e,i,n,s,o){return Ta(t)&&Ta(e)&&(o.set(e,t),gs(t,e,r,Sr,o),o.delete(e)),t}function Tr(t){return Ma(t)?r:t}function Ir(t,e,i,n,s,o){var a=i&g,l=t.length,u=e.length;if(l!=u&&!(a&&u>l))return!1;var c=o.get(t);if(c&&o.get(e))return c==e;var h=-1,d=!0,p=i&m?new kn:r;for(o.set(t,e),o.set(e,t);++h<l;){var f=t[h],v=e[h];if(n)var _=a?n(v,f,h,e,t,o):n(f,v,h,t,e,o);if(_!==r){if(_)continue;d=!1;break}if(p){if(!ni(e,function(t,e){if(!_i(p,e)&&(f===t||s(f,t,i,n,o)))return p.push(e)})){d=!1;break}}else if(f!==v&&!s(f,v,i,n,o)){d=!1;break}}return o.delete(t),o.delete(e),d}function Ar(t){return so(Qr(t,r,_o),t+"")}function jr(t){return Jn(t,sl,Lr)}function Mr(t){return Jn(t,rl,zr)}var Pr=nn?function(t){return nn.get(t)}:Hl;function Er(t){for(var e=t.name+"",i=sn[e],n=ce.call(sn,e)?i.length:0;n--;){var s=i[n],r=s.func;if(null==r||r==t)return s.name}return e}function Or(t){return(ce.call(pn,"placeholder")?pn:t).placeholder}function Hr(){var t=pn.iteratee||Ml;return t=t===Ml?ls:t,arguments.length?t(arguments[0],arguments[1]):t}function Nr(t,e){var i,n,s=t.__data__;return("string"==(n=typeof(i=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==i:null===i)?s["string"==typeof e?"string":"hash"]:s.map}function Br(t){for(var e=sl(t),i=e.length;i--;){var n=e[i],s=t[n];e[i]=[n,s,Jr(s)]}return e}function Fr(t,e){var i=function(t,e){return null==t?r:t[e]}(t,e);return as(i)?i:r}var Lr=Li?function(t){return null==t?[]:(t=ee(t),Xe(Li(t),function(e){return Oe.call(t,e)}))}:Rl,zr=Li?function(t){for(var e=[];t;)ti(e,Lr(t)),t=Me(t);return e}:Rl,Wr=Zn;function Rr(t,e,i){for(var n=-1,s=(e=Ks(e,t)).length,r=!1;++n<s;){var o=uo(e[n]);if(!(r=null!=t&&i(t,o)))break;t=t[o]}return r||++n!=s?r:!!(s=null==t?0:t.length)&&Sa(s)&&Ur(o,s)&&(va(t)||ma(t))}function $r(t){return"function"!=typeof t.constructor||Xr(t)?{}:fn(Me(t))}function qr(t){return va(t)||ma(t)||!!(Be&&t&&t[Be])}function Ur(t,e){var i=typeof t;return!!(e=null==e?O:e)&&("number"==i||"symbol"!=i&&Vt.test(t))&&t>-1&&t%1==0&&t<e}function Kr(t,e,i){if(!Ta(i))return!1;var n=typeof e;return!!("number"==n?ba(i)&&Ur(e,i.length):"string"==n&&e in i)&&pa(i[e],t)}function Yr(t,e){if(va(t))return!1;var i=typeof t;return!("number"!=i&&"symbol"!=i&&"boolean"!=i&&null!=t&&!Ha(t))||jt.test(t)||!At.test(t)||null!=e&&t in ee(e)}function Vr(t){var e=Er(t),i=pn[e];if("function"!=typeof i||!(e in vn.prototype))return!1;if(t===i)return!0;var n=Pr(i);return!!n&&t===n[0]}(Xi&&Wr(new Xi(new ArrayBuffer(1)))!=ut||Ji&&Wr(new Ji)!=X||Zi&&"[object Promise]"!=Wr(Zi.resolve())||Qi&&Wr(new Qi)!=it||tn&&Wr(new tn)!=ot)&&(Wr=function(t){var e=Zn(t),i=e==Q?t.constructor:r,n=i?co(i):"";if(n)switch(n){case rn:return ut;case on:return X;case an:return"[object Promise]";case ln:return it;case un:return ot}return e});var Gr=le?Ca:$l;function Xr(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||ae)}function Jr(t){return t==t&&!Ta(t)}function Zr(t,e){return function(i){return null!=i&&i[t]===e&&(e!==r||t in ee(i))}}function Qr(t,e,i){return e=qi(e===r?t.length-1:e,0),function(){for(var s=arguments,r=-1,o=qi(s.length-e,0),a=n(o);++r<o;)a[r]=s[e+r];r=-1;for(var l=n(e+1);++r<e;)l[r]=s[r];return l[e]=i(a),Ue(t,this,l)}}function to(t,e){return e.length<2?t:Xn(t,js(e,0,-1))}function eo(t,e){if("__proto__"!=e)return t[e]}var io=oo(Ts),no=Ni||function(t,e){return Ee.setTimeout(t,e)},so=oo(Is);function ro(t,e,i){var n=e+"";return so(t,function(t,e){var i=e.length;if(!i)return t;var n=i-1;return e[n]=(i>1?"& ":"")+e[n],e=e.join(i>2?", ":" "),t.replace(Bt,"{\n/* [wrapped with "+e+"] */\n")}(n,function(t,e){return Ye(z,function(i){var n="_."+i[0];e&i[1]&&!Je(t,n)&&t.push(n)}),t.sort()}(function(t){var e=t.match(Ft);return e?e[1].split(Lt):[]}(n),i)))}function oo(t){var e=0,i=0;return function(){var n=Ki(),s=j-(n-i);if(i=n,s>0){if(++e>=A)return arguments[0]}else e=0;return t.apply(r,arguments)}}function ao(t,e){var i=-1,n=t.length,s=n-1;for(e=e===r?n:e;++i<e;){var o=ks(i,s),a=t[o];t[o]=t[i],t[i]=a}return t.length=e,t}var lo=function(t){var e=aa(t,function(t){return i.size===c&&i.clear(),t}),i=e.cache;return e}(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Mt,function(t,i,n,s){e.push(n?s.replace(Wt,"$1"):i||t)}),e});function uo(t){if("string"==typeof t||Ha(t))return t;var e=t+"";return"0"==e&&1/t==-E?"-0":e}function co(t){if(null!=t){try{return ue.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function ho(t){if(t instanceof vn)return t.clone();var e=new mn(t.__wrapped__,t.__chain__);return e.__actions__=ir(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}var po=xs(function(t,e){return ya(t)?Fn(t,qn(e,1,ya,!0)):[]}),fo=xs(function(t,e){var i=xo(e);return ya(i)&&(i=r),ya(t)?Fn(t,qn(e,1,ya,!0),Hr(i,2)):[]}),go=xs(function(t,e){var i=xo(e);return ya(i)&&(i=r),ya(t)?Fn(t,qn(e,1,ya,!0),r,i):[]});function mo(t,e,i){var n=null==t?0:t.length;if(!n)return-1;var s=null==i?0:Wa(i);return s<0&&(s=qi(n+s,0)),oi(t,Hr(e,3),s)}function vo(t,e,i){var n=null==t?0:t.length;if(!n)return-1;var s=n-1;return i!==r&&(s=Wa(i),s=i<0?qi(n+s,0):Ui(s,n-1)),oi(t,Hr(e,3),s,!0)}function _o(t){return null!=t&&t.length?qn(t,1):[]}function bo(t){return t&&t.length?t[0]:r}var yo=xs(function(t){var e=Qe(t,qs);return e.length&&e[0]===t[0]?is(e):[]}),ko=xs(function(t){var e=xo(t),i=Qe(t,qs);return e===xo(i)?e=r:i.pop(),i.length&&i[0]===t[0]?is(i,Hr(e,2)):[]}),wo=xs(function(t){var e=xo(t),i=Qe(t,qs);return(e="function"==typeof e?e:r)&&i.pop(),i.length&&i[0]===t[0]?is(i,r,e):[]});function xo(t){var e=null==t?0:t.length;return e?t[e-1]:r}var Co=xs(Do);function Do(t,e){return t&&t.length&&e&&e.length?bs(t,e):t}var So=Ar(function(t,e){var i=null==t?0:t.length,n=En(t,e);return ys(t,Qe(e,function(t){return Ur(t,i)?+t:t}).sort(Qs)),n});function To(t){return null==t?t:Gi.call(t)}var Io=xs(function(t){return Bs(qn(t,1,ya,!0))}),Ao=xs(function(t){var e=xo(t);return ya(e)&&(e=r),Bs(qn(t,1,ya,!0),Hr(e,2))}),jo=xs(function(t){var e=xo(t);return e="function"==typeof e?e:r,Bs(qn(t,1,ya,!0),r,e)});function Mo(t){if(!t||!t.length)return[];var e=0;return t=Xe(t,function(t){if(ya(t))return e=qi(t.length,e),!0}),gi(e,function(e){return Qe(t,hi(e))})}function Po(t,e){if(!t||!t.length)return[];var i=Mo(t);return null==e?i:Qe(i,function(t){return Ue(e,r,t)})}var Eo=xs(function(t,e){return ya(t)?Fn(t,e):[]}),Oo=xs(function(t){return Rs(Xe(t,ya))}),Ho=xs(function(t){var e=xo(t);return ya(e)&&(e=r),Rs(Xe(t,ya),Hr(e,2))}),No=xs(function(t){var e=xo(t);return e="function"==typeof e?e:r,Rs(Xe(t,ya),r,e)}),Bo=xs(Mo);var Fo=xs(function(t){var e=t.length,i=e>1?t[e-1]:r;return i="function"==typeof i?(t.pop(),i):r,Po(t,i)});function Lo(t){var e=pn(t);return e.__chain__=!0,e}function zo(t,e){return e(t)}var Wo=Ar(function(t){var e=t.length,i=e?t[0]:0,n=this.__wrapped__,s=function(e){return En(e,t)};return!(e>1||this.__actions__.length)&&n instanceof vn&&Ur(i)?((n=n.slice(i,+i+(e?1:0))).__actions__.push({func:zo,args:[s],thisArg:r}),new mn(n,this.__chain__).thru(function(t){return e&&!t.length&&t.push(r),t})):this.thru(s)});var Ro=sr(function(t,e,i){ce.call(t,i)?++t[i]:Pn(t,i,1)});var $o=hr(mo),qo=hr(vo);function Uo(t,e){return(va(t)?Ye:Ln)(t,Hr(e,3))}function Ko(t,e){return(va(t)?Ve:zn)(t,Hr(e,3))}var Yo=sr(function(t,e,i){ce.call(t,i)?t[i].push(e):Pn(t,i,[e])});var Vo=xs(function(t,e,i){var s=-1,r="function"==typeof e,o=ba(t)?n(t.length):[];return Ln(t,function(t){o[++s]=r?Ue(e,t,i):ns(t,e,i)}),o}),Go=sr(function(t,e,i){Pn(t,i,e)});function Xo(t,e){return(va(t)?Qe:ds)(t,Hr(e,3))}var Jo=sr(function(t,e,i){t[i?0:1].push(e)},function(){return[[],[]]});var Zo=xs(function(t,e){if(null==t)return[];var i=e.length;return i>1&&Kr(t,e[0],e[1])?e=[]:i>2&&Kr(e[0],e[1],e[2])&&(e=[e[0]]),vs(t,qn(e,1),[])}),Qo=Hi||function(){return Ee.Date.now()};function ta(t,e,i){return e=i?r:e,e=t&&null==e?t.length:e,Cr(t,C,r,r,r,r,e)}function ea(t,e){var i;if("function"!=typeof e)throw new se(l);return t=Wa(t),function(){return--t>0&&(i=e.apply(this,arguments)),t<=1&&(e=r),i}}var ia=xs(function(t,e,i){var n=v;if(i.length){var s=Ti(i,Or(ia));n|=w}return Cr(t,n,e,i,s)}),na=xs(function(t,e,i){var n=v|_;if(i.length){var s=Ti(i,Or(na));n|=w}return Cr(e,n,t,i,s)});function sa(t,e,i){var n,s,o,a,u,c,h=0,d=!1,p=!1,f=!0;if("function"!=typeof t)throw new se(l);function g(e){var i=n,o=s;return n=s=r,h=e,a=t.apply(o,i)}function m(t){var i=t-c;return c===r||i>=e||i<0||p&&t-h>=o}function v(){var t=Qo();if(m(t))return _(t);u=no(v,function(t){var i=e-(t-c);return p?Ui(i,o-(t-h)):i}(t))}function _(t){return u=r,f&&n?g(t):(n=s=r,a)}function b(){var t=Qo(),i=m(t);if(n=arguments,s=this,c=t,i){if(u===r)return function(t){return h=t,u=no(v,e),d?g(t):a}(c);if(p)return u=no(v,e),g(c)}return u===r&&(u=no(v,e)),a}return e=$a(e)||0,Ta(i)&&(d=!!i.leading,o=(p="maxWait"in i)?qi($a(i.maxWait)||0,e):o,f="trailing"in i?!!i.trailing:f),b.cancel=function(){u!==r&&Gs(u),h=0,n=c=s=u=r},b.flush=function(){return u===r?a:_(Qo())},b}var ra=xs(function(t,e){return Bn(t,1,e)}),oa=xs(function(t,e,i){return Bn(t,$a(e)||0,i)});function aa(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new se(l);var i=function(){var n=arguments,s=e?e.apply(this,n):n[0],r=i.cache;if(r.has(s))return r.get(s);var o=t.apply(this,n);return i.cache=r.set(s,o)||r,o};return i.cache=new(aa.Cache||yn),i}function la(t){if("function"!=typeof t)throw new se(l);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}aa.Cache=yn;var ua=Ys(function(t,e){var i=(e=1==e.length&&va(e[0])?Qe(e[0],mi(Hr())):Qe(qn(e,1),mi(Hr()))).length;return xs(function(n){for(var s=-1,r=Ui(n.length,i);++s<r;)n[s]=e[s].call(this,n[s]);return Ue(t,this,n)})}),ca=xs(function(t,e){var i=Ti(e,Or(ca));return Cr(t,w,r,e,i)}),ha=xs(function(t,e){var i=Ti(e,Or(ha));return Cr(t,x,r,e,i)}),da=Ar(function(t,e){return Cr(t,D,r,r,r,e)});function pa(t,e){return t===e||t!=t&&e!=e}var fa=br(Qn),ga=br(function(t,e){return t>=e}),ma=ss(function(){return arguments}())?ss:function(t){return Ia(t)&&ce.call(t,"callee")&&!Oe.call(t,"callee")},va=n.isArray,_a=Le?mi(Le):function(t){return Ia(t)&&Zn(t)==lt};function ba(t){return null!=t&&Sa(t.length)&&!Ca(t)}function ya(t){return Ia(t)&&ba(t)}var ka=zi||$l,wa=ze?mi(ze):function(t){return Ia(t)&&Zn(t)==U};function xa(t){if(!Ia(t))return!1;var e=Zn(t);return e==Y||e==K||"string"==typeof t.message&&"string"==typeof t.name&&!Ma(t)}function Ca(t){if(!Ta(t))return!1;var e=Zn(t);return e==V||e==G||e==$||e==tt}function Da(t){return"number"==typeof t&&t==Wa(t)}function Sa(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=O}function Ta(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Ia(t){return null!=t&&"object"==typeof t}var Aa=We?mi(We):function(t){return Ia(t)&&Wr(t)==X};function ja(t){return"number"==typeof t||Ia(t)&&Zn(t)==J}function Ma(t){if(!Ia(t)||Zn(t)!=Q)return!1;var e=Me(t);if(null===e)return!0;var i=ce.call(e,"constructor")&&e.constructor;return"function"==typeof i&&i instanceof i&&ue.call(i)==fe}var Pa=Re?mi(Re):function(t){return Ia(t)&&Zn(t)==et};var Ea=$e?mi($e):function(t){return Ia(t)&&Wr(t)==it};function Oa(t){return"string"==typeof t||!va(t)&&Ia(t)&&Zn(t)==nt}function Ha(t){return"symbol"==typeof t||Ia(t)&&Zn(t)==st}var Na=qe?mi(qe):function(t){return Ia(t)&&Sa(t.length)&&!!Se[Zn(t)]};var Ba=br(hs),Fa=br(function(t,e){return t<=e});function La(t){if(!t)return[];if(ba(t))return Oa(t)?Mi(t):ir(t);if(Fe&&t[Fe])return function(t){for(var e,i=[];!(e=t.next()).done;)i.push(e.value);return i}(t[Fe]());var e=Wr(t);return(e==X?Di:e==it?Ii:pl)(t)}function za(t){return t?(t=$a(t))===E||t===-E?(t<0?-1:1)*H:t==t?t:0:0===t?t:0}function Wa(t){var e=za(t),i=e%1;return e==e?i?e-i:e:0}function Ra(t){return t?On(Wa(t),0,B):0}function $a(t){if("number"==typeof t)return t;if(Ha(t))return N;if(Ta(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Ta(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Ot,"");var i=Ut.test(t);return i||Yt.test(t)?je(t.slice(2),i?2:8):qt.test(t)?N:+t}function qa(t){return nr(t,rl(t))}function Ua(t){return null==t?"":Ns(t)}var Ka=rr(function(t,e){if(Xr(e)||ba(e))nr(e,sl(e),t);else for(var i in e)ce.call(e,i)&&In(t,i,e[i])}),Ya=rr(function(t,e){nr(e,rl(e),t)}),Va=rr(function(t,e,i,n){nr(e,rl(e),t,n)}),Ga=rr(function(t,e,i,n){nr(e,sl(e),t,n)}),Xa=Ar(En);var Ja=xs(function(t,e){t=ee(t);var i=-1,n=e.length,s=n>2?e[2]:r;for(s&&Kr(e[0],e[1],s)&&(n=1);++i<n;)for(var o=e[i],a=rl(o),l=-1,u=a.length;++l<u;){var c=a[l],h=t[c];(h===r||pa(h,ae[c])&&!ce.call(t,c))&&(t[c]=o[c])}return t}),Za=xs(function(t){return t.push(r,Sr),Ue(al,r,t)});function Qa(t,e,i){var n=null==t?r:Xn(t,e);return n===r?i:n}function tl(t,e){return null!=t&&Rr(t,e,es)}var el=fr(function(t,e,i){null!=e&&"function"!=typeof e.toString&&(e=pe.call(e)),t[e]=i},Tl(jl)),il=fr(function(t,e,i){null!=e&&"function"!=typeof e.toString&&(e=pe.call(e)),ce.call(t,e)?t[e].push(i):t[e]=[i]},Hr),nl=xs(ns);function sl(t){return ba(t)?xn(t):us(t)}function rl(t){return ba(t)?xn(t,!0):cs(t)}var ol=rr(function(t,e,i){gs(t,e,i)}),al=rr(function(t,e,i,n){gs(t,e,i,n)}),ll=Ar(function(t,e){var i={};if(null==t)return i;var n=!1;e=Qe(e,function(e){return e=Ks(e,t),n||(n=e.length>1),e}),nr(t,Mr(t),i),n&&(i=Hn(i,d|p|f,Tr));for(var s=e.length;s--;)Fs(i,e[s]);return i});var ul=Ar(function(t,e){return null==t?{}:function(t,e){return _s(t,e,function(e,i){return tl(t,i)})}(t,e)});function cl(t,e){if(null==t)return{};var i=Qe(Mr(t),function(t){return[t]});return e=Hr(e),_s(t,i,function(t,i){return e(t,i[0])})}var hl=xr(sl),dl=xr(rl);function pl(t){return null==t?[]:vi(t,sl(t))}var fl=ur(function(t,e,i){return e=e.toLowerCase(),t+(i?gl(e):e)});function gl(t){return xl(Ua(t).toLowerCase())}function ml(t){return(t=Ua(t))&&t.replace(Gt,ki).replace(be,"")}var vl=ur(function(t,e,i){return t+(i?"-":"")+e.toLowerCase()}),_l=ur(function(t,e,i){return t+(i?" ":"")+e.toLowerCase()}),bl=lr("toLowerCase");var yl=ur(function(t,e,i){return t+(i?"_":"")+e.toLowerCase()});var kl=ur(function(t,e,i){return t+(i?" ":"")+xl(e)});var wl=ur(function(t,e,i){return t+(i?" ":"")+e.toUpperCase()}),xl=lr("toUpperCase");function Cl(t,e,i){return t=Ua(t),(e=i?r:e)===r?function(t){return xe.test(t)}(t)?function(t){return t.match(ke)||[]}(t):function(t){return t.match(zt)||[]}(t):t.match(e)||[]}var Dl=xs(function(t,e){try{return Ue(t,r,e)}catch(t){return xa(t)?t:new Zt(t)}}),Sl=Ar(function(t,e){return Ye(e,function(e){e=uo(e),Pn(t,e,ia(t[e],t))}),t});function Tl(t){return function(){return t}}var Il=dr(),Al=dr(!0);function jl(t){return t}function Ml(t){return ls("function"==typeof t?t:Hn(t,d))}var Pl=xs(function(t,e){return function(i){return ns(i,t,e)}}),El=xs(function(t,e){return function(i){return ns(t,i,e)}});function Ol(t,e,i){var n=sl(e),s=Gn(e,n);null!=i||Ta(e)&&(s.length||!n.length)||(i=e,e=t,t=this,s=Gn(e,sl(e)));var r=!(Ta(i)&&"chain"in i&&!i.chain),o=Ca(t);return Ye(s,function(i){var n=e[i];t[i]=n,o&&(t.prototype[i]=function(){var e=this.__chain__;if(r||e){var i=t(this.__wrapped__);return(i.__actions__=ir(this.__actions__)).push({func:n,args:arguments,thisArg:t}),i.__chain__=e,i}return n.apply(t,ti([this.value()],arguments))})}),t}function Hl(){}var Nl=mr(Qe),Bl=mr(Ge),Fl=mr(ni);function Ll(t){return Yr(t)?hi(uo(t)):function(t){return function(e){return Xn(e,t)}}(t)}var zl=_r(),Wl=_r(!0);function Rl(){return[]}function $l(){return!1}var ql=gr(function(t,e){return t+e},0),Ul=kr("ceil"),Kl=gr(function(t,e){return t/e},1),Yl=kr("floor");var Vl,Gl=gr(function(t,e){return t*e},1),Xl=kr("round"),Jl=gr(function(t,e){return t-e},0);return pn.after=function(t,e){if("function"!=typeof e)throw new se(l);return t=Wa(t),function(){if(--t<1)return e.apply(this,arguments)}},pn.ary=ta,pn.assign=Ka,pn.assignIn=Ya,pn.assignInWith=Va,pn.assignWith=Ga,pn.at=Xa,pn.before=ea,pn.bind=ia,pn.bindAll=Sl,pn.bindKey=na,pn.castArray=function(){if(!arguments.length)return[];var t=arguments[0];return va(t)?t:[t]},pn.chain=Lo,pn.chunk=function(t,e,i){e=(i?Kr(t,e,i):e===r)?1:qi(Wa(e),0);var s=null==t?0:t.length;if(!s||e<1)return[];for(var o=0,a=0,l=n(Bi(s/e));o<s;)l[a++]=js(t,o,o+=e);return l},pn.compact=function(t){for(var e=-1,i=null==t?0:t.length,n=0,s=[];++e<i;){var r=t[e];r&&(s[n++]=r)}return s},pn.concat=function(){var t=arguments.length;if(!t)return[];for(var e=n(t-1),i=arguments[0],s=t;s--;)e[s-1]=arguments[s];return ti(va(i)?ir(i):[i],qn(e,1))},pn.cond=function(t){var e=null==t?0:t.length,i=Hr();return t=e?Qe(t,function(t){if("function"!=typeof t[1])throw new se(l);return[i(t[0]),t[1]]}):[],xs(function(i){for(var n=-1;++n<e;){var s=t[n];if(Ue(s[0],this,i))return Ue(s[1],this,i)}})},pn.conforms=function(t){return function(t){var e=sl(t);return function(i){return Nn(i,t,e)}}(Hn(t,d))},pn.constant=Tl,pn.countBy=Ro,pn.create=function(t,e){var i=fn(t);return null==e?i:Mn(i,e)},pn.curry=function t(e,i,n){var s=Cr(e,y,r,r,r,r,r,i=n?r:i);return s.placeholder=t.placeholder,s},pn.curryRight=function t(e,i,n){var s=Cr(e,k,r,r,r,r,r,i=n?r:i);return s.placeholder=t.placeholder,s},pn.debounce=sa,pn.defaults=Ja,pn.defaultsDeep=Za,pn.defer=ra,pn.delay=oa,pn.difference=po,pn.differenceBy=fo,pn.differenceWith=go,pn.drop=function(t,e,i){var n=null==t?0:t.length;return n?js(t,(e=i||e===r?1:Wa(e))<0?0:e,n):[]},pn.dropRight=function(t,e,i){var n=null==t?0:t.length;return n?js(t,0,(e=n-(e=i||e===r?1:Wa(e)))<0?0:e):[]},pn.dropRightWhile=function(t,e){return t&&t.length?zs(t,Hr(e,3),!0,!0):[]},pn.dropWhile=function(t,e){return t&&t.length?zs(t,Hr(e,3),!0):[]},pn.fill=function(t,e,i,n){var s=null==t?0:t.length;return s?(i&&"number"!=typeof i&&Kr(t,e,i)&&(i=0,n=s),function(t,e,i,n){var s=t.length;for((i=Wa(i))<0&&(i=-i>s?0:s+i),(n=n===r||n>s?s:Wa(n))<0&&(n+=s),n=i>n?0:Ra(n);i<n;)t[i++]=e;return t}(t,e,i,n)):[]},pn.filter=function(t,e){return(va(t)?Xe:$n)(t,Hr(e,3))},pn.flatMap=function(t,e){return qn(Xo(t,e),1)},pn.flatMapDeep=function(t,e){return qn(Xo(t,e),E)},pn.flatMapDepth=function(t,e,i){return i=i===r?1:Wa(i),qn(Xo(t,e),i)},pn.flatten=_o,pn.flattenDeep=function(t){return null!=t&&t.length?qn(t,E):[]},pn.flattenDepth=function(t,e){return null!=t&&t.length?qn(t,e=e===r?1:Wa(e)):[]},pn.flip=function(t){return Cr(t,S)},pn.flow=Il,pn.flowRight=Al,pn.fromPairs=function(t){for(var e=-1,i=null==t?0:t.length,n={};++e<i;){var s=t[e];n[s[0]]=s[1]}return n},pn.functions=function(t){return null==t?[]:Gn(t,sl(t))},pn.functionsIn=function(t){return null==t?[]:Gn(t,rl(t))},pn.groupBy=Yo,pn.initial=function(t){return null!=t&&t.length?js(t,0,-1):[]},pn.intersection=yo,pn.intersectionBy=ko,pn.intersectionWith=wo,pn.invert=el,pn.invertBy=il,pn.invokeMap=Vo,pn.iteratee=Ml,pn.keyBy=Go,pn.keys=sl,pn.keysIn=rl,pn.map=Xo,pn.mapKeys=function(t,e){var i={};return e=Hr(e,3),Yn(t,function(t,n,s){Pn(i,e(t,n,s),t)}),i},pn.mapValues=function(t,e){var i={};return e=Hr(e,3),Yn(t,function(t,n,s){Pn(i,n,e(t,n,s))}),i},pn.matches=function(t){return ps(Hn(t,d))},pn.matchesProperty=function(t,e){return fs(t,Hn(e,d))},pn.memoize=aa,pn.merge=ol,pn.mergeWith=al,pn.method=Pl,pn.methodOf=El,pn.mixin=Ol,pn.negate=la,pn.nthArg=function(t){return t=Wa(t),xs(function(e){return ms(e,t)})},pn.omit=ll,pn.omitBy=function(t,e){return cl(t,la(Hr(e)))},pn.once=function(t){return ea(2,t)},pn.orderBy=function(t,e,i,n){return null==t?[]:(va(e)||(e=null==e?[]:[e]),va(i=n?r:i)||(i=null==i?[]:[i]),vs(t,e,i))},pn.over=Nl,pn.overArgs=ua,pn.overEvery=Bl,pn.overSome=Fl,pn.partial=ca,pn.partialRight=ha,pn.partition=Jo,pn.pick=ul,pn.pickBy=cl,pn.property=Ll,pn.propertyOf=function(t){return function(e){return null==t?r:Xn(t,e)}},pn.pull=Co,pn.pullAll=Do,pn.pullAllBy=function(t,e,i){return t&&t.length&&e&&e.length?bs(t,e,Hr(i,2)):t},pn.pullAllWith=function(t,e,i){return t&&t.length&&e&&e.length?bs(t,e,r,i):t},pn.pullAt=So,pn.range=zl,pn.rangeRight=Wl,pn.rearg=da,pn.reject=function(t,e){return(va(t)?Xe:$n)(t,la(Hr(e,3)))},pn.remove=function(t,e){var i=[];if(!t||!t.length)return i;var n=-1,s=[],r=t.length;for(e=Hr(e,3);++n<r;){var o=t[n];e(o,n,t)&&(i.push(o),s.push(n))}return ys(t,s),i},pn.rest=function(t,e){if("function"!=typeof t)throw new se(l);return xs(t,e=e===r?e:Wa(e))},pn.reverse=To,pn.sampleSize=function(t,e,i){return e=(i?Kr(t,e,i):e===r)?1:Wa(e),(va(t)?Dn:Ds)(t,e)},pn.set=function(t,e,i){return null==t?t:Ss(t,e,i)},pn.setWith=function(t,e,i,n){return n="function"==typeof n?n:r,null==t?t:Ss(t,e,i,n)},pn.shuffle=function(t){return(va(t)?Sn:As)(t)},pn.slice=function(t,e,i){var n=null==t?0:t.length;return n?(i&&"number"!=typeof i&&Kr(t,e,i)?(e=0,i=n):(e=null==e?0:Wa(e),i=i===r?n:Wa(i)),js(t,e,i)):[]},pn.sortBy=Zo,pn.sortedUniq=function(t){return t&&t.length?Os(t):[]},pn.sortedUniqBy=function(t,e){return t&&t.length?Os(t,Hr(e,2)):[]},pn.split=function(t,e,i){return i&&"number"!=typeof i&&Kr(t,e,i)&&(e=i=r),(i=i===r?B:i>>>0)?(t=Ua(t))&&("string"==typeof e||null!=e&&!Pa(e))&&!(e=Ns(e))&&Ci(t)?Vs(Mi(t),0,i):t.split(e,i):[]},pn.spread=function(t,e){if("function"!=typeof t)throw new se(l);return e=null==e?0:qi(Wa(e),0),xs(function(i){var n=i[e],s=Vs(i,0,e);return n&&ti(s,n),Ue(t,this,s)})},pn.tail=function(t){var e=null==t?0:t.length;return e?js(t,1,e):[]},pn.take=function(t,e,i){return t&&t.length?js(t,0,(e=i||e===r?1:Wa(e))<0?0:e):[]},pn.takeRight=function(t,e,i){var n=null==t?0:t.length;return n?js(t,(e=n-(e=i||e===r?1:Wa(e)))<0?0:e,n):[]},pn.takeRightWhile=function(t,e){return t&&t.length?zs(t,Hr(e,3),!1,!0):[]},pn.takeWhile=function(t,e){return t&&t.length?zs(t,Hr(e,3)):[]},pn.tap=function(t,e){return e(t),t},pn.throttle=function(t,e,i){var n=!0,s=!0;if("function"!=typeof t)throw new se(l);return Ta(i)&&(n="leading"in i?!!i.leading:n,s="trailing"in i?!!i.trailing:s),sa(t,e,{leading:n,maxWait:e,trailing:s})},pn.thru=zo,pn.toArray=La,pn.toPairs=hl,pn.toPairsIn=dl,pn.toPath=function(t){return va(t)?Qe(t,uo):Ha(t)?[t]:ir(lo(Ua(t)))},pn.toPlainObject=qa,pn.transform=function(t,e,i){var n=va(t),s=n||ka(t)||Na(t);if(e=Hr(e,4),null==i){var r=t&&t.constructor;i=s?n?new r:[]:Ta(t)&&Ca(r)?fn(Me(t)):{}}return(s?Ye:Yn)(t,function(t,n,s){return e(i,t,n,s)}),i},pn.unary=function(t){return ta(t,1)},pn.union=Io,pn.unionBy=Ao,pn.unionWith=jo,pn.uniq=function(t){return t&&t.length?Bs(t):[]},pn.uniqBy=function(t,e){return t&&t.length?Bs(t,Hr(e,2)):[]},pn.uniqWith=function(t,e){return e="function"==typeof e?e:r,t&&t.length?Bs(t,r,e):[]},pn.unset=function(t,e){return null==t||Fs(t,e)},pn.unzip=Mo,pn.unzipWith=Po,pn.update=function(t,e,i){return null==t?t:Ls(t,e,Us(i))},pn.updateWith=function(t,e,i,n){return n="function"==typeof n?n:r,null==t?t:Ls(t,e,Us(i),n)},pn.values=pl,pn.valuesIn=function(t){return null==t?[]:vi(t,rl(t))},pn.without=Eo,pn.words=Cl,pn.wrap=function(t,e){return ca(Us(e),t)},pn.xor=Oo,pn.xorBy=Ho,pn.xorWith=No,pn.zip=Bo,pn.zipObject=function(t,e){return $s(t||[],e||[],In)},pn.zipObjectDeep=function(t,e){return $s(t||[],e||[],Ss)},pn.zipWith=Fo,pn.entries=hl,pn.entriesIn=dl,pn.extend=Ya,pn.extendWith=Va,Ol(pn,pn),pn.add=ql,pn.attempt=Dl,pn.camelCase=fl,pn.capitalize=gl,pn.ceil=Ul,pn.clamp=function(t,e,i){return i===r&&(i=e,e=r),i!==r&&(i=(i=$a(i))==i?i:0),e!==r&&(e=(e=$a(e))==e?e:0),On($a(t),e,i)},pn.clone=function(t){return Hn(t,f)},pn.cloneDeep=function(t){return Hn(t,d|f)},pn.cloneDeepWith=function(t,e){return Hn(t,d|f,e="function"==typeof e?e:r)},pn.cloneWith=function(t,e){return Hn(t,f,e="function"==typeof e?e:r)},pn.conformsTo=function(t,e){return null==e||Nn(t,e,sl(e))},pn.deburr=ml,pn.defaultTo=function(t,e){return null==t||t!=t?e:t},pn.divide=Kl,pn.endsWith=function(t,e,i){t=Ua(t),e=Ns(e);var n=t.length,s=i=i===r?n:On(Wa(i),0,n);return(i-=e.length)>=0&&t.slice(i,s)==e},pn.eq=pa,pn.escape=function(t){return(t=Ua(t))&&Dt.test(t)?t.replace(xt,wi):t},pn.escapeRegExp=function(t){return(t=Ua(t))&&Et.test(t)?t.replace(Pt,"\\$&"):t},pn.every=function(t,e,i){var n=va(t)?Ge:Wn;return i&&Kr(t,e,i)&&(e=r),n(t,Hr(e,3))},pn.find=$o,pn.findIndex=mo,pn.findKey=function(t,e){return ri(t,Hr(e,3),Yn)},pn.findLast=qo,pn.findLastIndex=vo,pn.findLastKey=function(t,e){return ri(t,Hr(e,3),Vn)},pn.floor=Yl,pn.forEach=Uo,pn.forEachRight=Ko,pn.forIn=function(t,e){return null==t?t:Un(t,Hr(e,3),rl)},pn.forInRight=function(t,e){return null==t?t:Kn(t,Hr(e,3),rl)},pn.forOwn=function(t,e){return t&&Yn(t,Hr(e,3))},pn.forOwnRight=function(t,e){return t&&Vn(t,Hr(e,3))},pn.get=Qa,pn.gt=fa,pn.gte=ga,pn.has=function(t,e){return null!=t&&Rr(t,e,ts)},pn.hasIn=tl,pn.head=bo,pn.identity=jl,pn.includes=function(t,e,i,n){t=ba(t)?t:pl(t),i=i&&!n?Wa(i):0;var s=t.length;return i<0&&(i=qi(s+i,0)),Oa(t)?i<=s&&t.indexOf(e,i)>-1:!!s&&ai(t,e,i)>-1},pn.indexOf=function(t,e,i){var n=null==t?0:t.length;if(!n)return-1;var s=null==i?0:Wa(i);return s<0&&(s=qi(n+s,0)),ai(t,e,s)},pn.inRange=function(t,e,i){return e=za(e),i===r?(i=e,e=0):i=za(i),function(t,e,i){return t>=Ui(e,i)&&t<qi(e,i)}(t=$a(t),e,i)},pn.invoke=nl,pn.isArguments=ma,pn.isArray=va,pn.isArrayBuffer=_a,pn.isArrayLike=ba,pn.isArrayLikeObject=ya,pn.isBoolean=function(t){return!0===t||!1===t||Ia(t)&&Zn(t)==q},pn.isBuffer=ka,pn.isDate=wa,pn.isElement=function(t){return Ia(t)&&1===t.nodeType&&!Ma(t)},pn.isEmpty=function(t){if(null==t)return!0;if(ba(t)&&(va(t)||"string"==typeof t||"function"==typeof t.splice||ka(t)||Na(t)||ma(t)))return!t.length;var e=Wr(t);if(e==X||e==it)return!t.size;if(Xr(t))return!us(t).length;for(var i in t)if(ce.call(t,i))return!1;return!0},pn.isEqual=function(t,e){return rs(t,e)},pn.isEqualWith=function(t,e,i){var n=(i="function"==typeof i?i:r)?i(t,e):r;return n===r?rs(t,e,r,i):!!n},pn.isError=xa,pn.isFinite=function(t){return"number"==typeof t&&Wi(t)},pn.isFunction=Ca,pn.isInteger=Da,pn.isLength=Sa,pn.isMap=Aa,pn.isMatch=function(t,e){return t===e||os(t,e,Br(e))},pn.isMatchWith=function(t,e,i){return i="function"==typeof i?i:r,os(t,e,Br(e),i)},pn.isNaN=function(t){return ja(t)&&t!=+t},pn.isNative=function(t){if(Gr(t))throw new Zt(a);return as(t)},pn.isNil=function(t){return null==t},pn.isNull=function(t){return null===t},pn.isNumber=ja,pn.isObject=Ta,pn.isObjectLike=Ia,pn.isPlainObject=Ma,pn.isRegExp=Pa,pn.isSafeInteger=function(t){return Da(t)&&t>=-O&&t<=O},pn.isSet=Ea,pn.isString=Oa,pn.isSymbol=Ha,pn.isTypedArray=Na,pn.isUndefined=function(t){return t===r},pn.isWeakMap=function(t){return Ia(t)&&Wr(t)==ot},pn.isWeakSet=function(t){return Ia(t)&&Zn(t)==at},pn.join=function(t,e){return null==t?"":Ri.call(t,e)},pn.kebabCase=vl,pn.last=xo,pn.lastIndexOf=function(t,e,i){var n=null==t?0:t.length;if(!n)return-1;var s=n;return i!==r&&(s=(s=Wa(i))<0?qi(n+s,0):Ui(s,n-1)),e==e?function(t,e,i){for(var n=i+1;n--;)if(t[n]===e)return n;return n}(t,e,s):oi(t,ui,s,!0)},pn.lowerCase=_l,pn.lowerFirst=bl,pn.lt=Ba,pn.lte=Fa,pn.max=function(t){return t&&t.length?Rn(t,jl,Qn):r},pn.maxBy=function(t,e){return t&&t.length?Rn(t,Hr(e,2),Qn):r},pn.mean=function(t){return ci(t,jl)},pn.meanBy=function(t,e){return ci(t,Hr(e,2))},pn.min=function(t){return t&&t.length?Rn(t,jl,hs):r},pn.minBy=function(t,e){return t&&t.length?Rn(t,Hr(e,2),hs):r},pn.stubArray=Rl,pn.stubFalse=$l,pn.stubObject=function(){return{}},pn.stubString=function(){return""},pn.stubTrue=function(){return!0},pn.multiply=Gl,pn.nth=function(t,e){return t&&t.length?ms(t,Wa(e)):r},pn.noConflict=function(){return Ee._===this&&(Ee._=ge),this},pn.noop=Hl,pn.now=Qo,pn.pad=function(t,e,i){t=Ua(t);var n=(e=Wa(e))?ji(t):0;if(!e||n>=e)return t;var s=(e-n)/2;return vr(Fi(s),i)+t+vr(Bi(s),i)},pn.padEnd=function(t,e,i){t=Ua(t);var n=(e=Wa(e))?ji(t):0;return e&&n<e?t+vr(e-n,i):t},pn.padStart=function(t,e,i){t=Ua(t);var n=(e=Wa(e))?ji(t):0;return e&&n<e?vr(e-n,i)+t:t},pn.parseInt=function(t,e,i){return i||null==e?e=0:e&&(e=+e),Yi(Ua(t).replace(Ht,""),e||0)},pn.random=function(t,e,i){if(i&&"boolean"!=typeof i&&Kr(t,e,i)&&(e=i=r),i===r&&("boolean"==typeof e?(i=e,e=r):"boolean"==typeof t&&(i=t,t=r)),t===r&&e===r?(t=0,e=1):(t=za(t),e===r?(e=t,t=0):e=za(e)),t>e){var n=t;t=e,e=n}if(i||t%1||e%1){var s=Vi();return Ui(t+s*(e-t+Ae("1e-"+((s+"").length-1))),e)}return ks(t,e)},pn.reduce=function(t,e,i){var n=va(t)?ei:pi,s=arguments.length<3;return n(t,Hr(e,4),i,s,Ln)},pn.reduceRight=function(t,e,i){var n=va(t)?ii:pi,s=arguments.length<3;return n(t,Hr(e,4),i,s,zn)},pn.repeat=function(t,e,i){return e=(i?Kr(t,e,i):e===r)?1:Wa(e),ws(Ua(t),e)},pn.replace=function(){var t=arguments,e=Ua(t[0]);return t.length<3?e:e.replace(t[1],t[2])},pn.result=function(t,e,i){var n=-1,s=(e=Ks(e,t)).length;for(s||(s=1,t=r);++n<s;){var o=null==t?r:t[uo(e[n])];o===r&&(n=s,o=i),t=Ca(o)?o.call(t):o}return t},pn.round=Xl,pn.runInContext=t,pn.sample=function(t){return(va(t)?Cn:Cs)(t)},pn.size=function(t){if(null==t)return 0;if(ba(t))return Oa(t)?ji(t):t.length;var e=Wr(t);return e==X||e==it?t.size:us(t).length},pn.snakeCase=yl,pn.some=function(t,e,i){var n=va(t)?ni:Ms;return i&&Kr(t,e,i)&&(e=r),n(t,Hr(e,3))},pn.sortedIndex=function(t,e){return Ps(t,e)},pn.sortedIndexBy=function(t,e,i){return Es(t,e,Hr(i,2))},pn.sortedIndexOf=function(t,e){var i=null==t?0:t.length;if(i){var n=Ps(t,e);if(n<i&&pa(t[n],e))return n}return-1},pn.sortedLastIndex=function(t,e){return Ps(t,e,!0)},pn.sortedLastIndexBy=function(t,e,i){return Es(t,e,Hr(i,2),!0)},pn.sortedLastIndexOf=function(t,e){if(null!=t&&t.length){var i=Ps(t,e,!0)-1;if(pa(t[i],e))return i}return-1},pn.startCase=kl,pn.startsWith=function(t,e,i){return t=Ua(t),i=null==i?0:On(Wa(i),0,t.length),e=Ns(e),t.slice(i,i+e.length)==e},pn.subtract=Jl,pn.sum=function(t){return t&&t.length?fi(t,jl):0},pn.sumBy=function(t,e){return t&&t.length?fi(t,Hr(e,2)):0},pn.template=function(t,e,i){var n=pn.templateSettings;i&&Kr(t,e,i)&&(e=r),t=Ua(t),e=Va({},e,n,Dr);var s,o,a=Va({},e.imports,n.imports,Dr),l=sl(a),u=vi(a,l),c=0,h=e.interpolate||Xt,d="__p += '",p=ie((e.escape||Xt).source+"|"+h.source+"|"+(h===It?Rt:Xt).source+"|"+(e.evaluate||Xt).source+"|$","g"),f="//# sourceURL="+("sourceURL"in e?e.sourceURL:"lodash.templateSources["+ ++De+"]")+"\n";t.replace(p,function(e,i,n,r,a,l){return n||(n=r),d+=t.slice(c,l).replace(Jt,xi),i&&(s=!0,d+="' +\n__e("+i+") +\n'"),a&&(o=!0,d+="';\n"+a+";\n__p += '"),n&&(d+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),c=l+e.length,e}),d+="';\n";var g=e.variable;g||(d="with (obj) {\n"+d+"\n}\n"),d=(o?d.replace(bt,""):d).replace(yt,"$1").replace(kt,"$1;"),d="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(s?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+d+"return __p\n}";var m=Dl(function(){return Qt(l,f+"return "+d).apply(r,u)});if(m.source=d,xa(m))throw m;return m},pn.times=function(t,e){if((t=Wa(t))<1||t>O)return[];var i=B,n=Ui(t,B);e=Hr(e),t-=B;for(var s=gi(n,e);++i<t;)e(i);return s},pn.toFinite=za,pn.toInteger=Wa,pn.toLength=Ra,pn.toLower=function(t){return Ua(t).toLowerCase()},pn.toNumber=$a,pn.toSafeInteger=function(t){return t?On(Wa(t),-O,O):0===t?t:0},pn.toString=Ua,pn.toUpper=function(t){return Ua(t).toUpperCase()},pn.trim=function(t,e,i){if((t=Ua(t))&&(i||e===r))return t.replace(Ot,"");if(!t||!(e=Ns(e)))return t;var n=Mi(t),s=Mi(e);return Vs(n,bi(n,s),yi(n,s)+1).join("")},pn.trimEnd=function(t,e,i){if((t=Ua(t))&&(i||e===r))return t.replace(Nt,"");if(!t||!(e=Ns(e)))return t;var n=Mi(t);return Vs(n,0,yi(n,Mi(e))+1).join("")},pn.trimStart=function(t,e,i){if((t=Ua(t))&&(i||e===r))return t.replace(Ht,"");if(!t||!(e=Ns(e)))return t;var n=Mi(t);return Vs(n,bi(n,Mi(e))).join("")},pn.truncate=function(t,e){var i=T,n=I;if(Ta(e)){var s="separator"in e?e.separator:s;i="length"in e?Wa(e.length):i,n="omission"in e?Ns(e.omission):n}var o=(t=Ua(t)).length;if(Ci(t)){var a=Mi(t);o=a.length}if(i>=o)return t;var l=i-ji(n);if(l<1)return n;var u=a?Vs(a,0,l).join(""):t.slice(0,l);if(s===r)return u+n;if(a&&(l+=u.length-l),Pa(s)){if(t.slice(l).search(s)){var c,h=u;for(s.global||(s=ie(s.source,Ua($t.exec(s))+"g")),s.lastIndex=0;c=s.exec(h);)var d=c.index;u=u.slice(0,d===r?l:d)}}else if(t.indexOf(Ns(s),l)!=l){var p=u.lastIndexOf(s);p>-1&&(u=u.slice(0,p))}return u+n},pn.unescape=function(t){return(t=Ua(t))&&Ct.test(t)?t.replace(wt,Pi):t},pn.uniqueId=function(t){var e=++he;return Ua(t)+e},pn.upperCase=wl,pn.upperFirst=xl,pn.each=Uo,pn.eachRight=Ko,pn.first=bo,Ol(pn,(Vl={},Yn(pn,function(t,e){ce.call(pn.prototype,e)||(Vl[e]=t)}),Vl),{chain:!1}),pn.VERSION="4.17.11",Ye(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){pn[t].placeholder=pn}),Ye(["drop","take"],function(t,e){vn.prototype[t]=function(i){i=i===r?1:qi(Wa(i),0);var n=this.__filtered__&&!e?new vn(this):this.clone();return n.__filtered__?n.__takeCount__=Ui(i,n.__takeCount__):n.__views__.push({size:Ui(i,B),type:t+(n.__dir__<0?"Right":"")}),n},vn.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}}),Ye(["filter","map","takeWhile"],function(t,e){var i=e+1,n=i==M||3==i;vn.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:Hr(t,3),type:i}),e.__filtered__=e.__filtered__||n,e}}),Ye(["head","last"],function(t,e){var i="take"+(e?"Right":"");vn.prototype[t]=function(){return this[i](1).value()[0]}}),Ye(["initial","tail"],function(t,e){var i="drop"+(e?"":"Right");vn.prototype[t]=function(){return this.__filtered__?new vn(this):this[i](1)}}),vn.prototype.compact=function(){return this.filter(jl)},vn.prototype.find=function(t){return this.filter(t).head()},vn.prototype.findLast=function(t){return this.reverse().find(t)},vn.prototype.invokeMap=xs(function(t,e){return"function"==typeof t?new vn(this):this.map(function(i){return ns(i,t,e)})}),vn.prototype.reject=function(t){return this.filter(la(Hr(t)))},vn.prototype.slice=function(t,e){t=Wa(t);var i=this;return i.__filtered__&&(t>0||e<0)?new vn(i):(t<0?i=i.takeRight(-t):t&&(i=i.drop(t)),e!==r&&(i=(e=Wa(e))<0?i.dropRight(-e):i.take(e-t)),i)},vn.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},vn.prototype.toArray=function(){return this.take(B)},Yn(vn.prototype,function(t,e){var i=/^(?:filter|find|map|reject)|While$/.test(e),n=/^(?:head|last)$/.test(e),s=pn[n?"take"+("last"==e?"Right":""):e],o=n||/^find/.test(e);s&&(pn.prototype[e]=function(){var e=this.__wrapped__,a=n?[1]:arguments,l=e instanceof vn,u=a[0],c=l||va(e),h=function(t){var e=s.apply(pn,ti([t],a));return n&&d?e[0]:e};c&&i&&"function"==typeof u&&1!=u.length&&(l=c=!1);var d=this.__chain__,p=!!this.__actions__.length,f=o&&!d,g=l&&!p;if(!o&&c){e=g?e:new vn(this);var m=t.apply(e,a);return m.__actions__.push({func:zo,args:[h],thisArg:r}),new mn(m,d)}return f&&g?t.apply(this,a):(m=this.thru(h),f?n?m.value()[0]:m.value():m)})}),Ye(["pop","push","shift","sort","splice","unshift"],function(t){var e=re[t],i=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",n=/^(?:pop|shift)$/.test(t);pn.prototype[t]=function(){var t=arguments;if(n&&!this.__chain__){var s=this.value();return e.apply(va(s)?s:[],t)}return this[i](function(i){return e.apply(va(i)?i:[],t)})}}),Yn(vn.prototype,function(t,e){var i=pn[e];if(i){var n=i.name+"";(sn[n]||(sn[n]=[])).push({name:e,func:i})}}),sn[pr(r,_).name]=[{name:"wrapper",func:r}],vn.prototype.clone=function(){var t=new vn(this.__wrapped__);return t.__actions__=ir(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=ir(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=ir(this.__views__),t},vn.prototype.reverse=function(){if(this.__filtered__){var t=new vn(this);t.__dir__=-1,t.__filtered__=!0}else(t=this.clone()).__dir__*=-1;return t},vn.prototype.value=function(){var t=this.__wrapped__.value(),e=this.__dir__,i=va(t),n=e<0,s=i?t.length:0,r=function(t,e,i){for(var n=-1,s=i.length;++n<s;){var r=i[n],o=r.size;switch(r.type){case"drop":t+=o;break;case"dropRight":e-=o;break;case"take":e=Ui(e,t+o);break;case"takeRight":t=qi(t,e-o)}}return{start:t,end:e}}(0,s,this.__views__),o=r.start,a=r.end,l=a-o,u=n?a:o-1,c=this.__iteratees__,h=c.length,d=0,p=Ui(l,this.__takeCount__);if(!i||!n&&s==l&&p==l)return Ws(t,this.__actions__);var f=[];t:for(;l--&&d<p;){for(var g=-1,m=t[u+=e];++g<h;){var v=c[g],_=v.iteratee,b=v.type,y=_(m);if(b==P)m=y;else if(!y){if(b==M)continue t;break t}}f[d++]=m}return f},pn.prototype.at=Wo,pn.prototype.chain=function(){return Lo(this)},pn.prototype.commit=function(){return new mn(this.value(),this.__chain__)},pn.prototype.next=function(){this.__values__===r&&(this.__values__=La(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?r:this.__values__[this.__index__++]}},pn.prototype.plant=function(t){for(var e,i=this;i instanceof gn;){var n=ho(i);n.__index__=0,n.__values__=r,e?s.__wrapped__=n:e=n;var s=n;i=i.__wrapped__}return s.__wrapped__=t,e},pn.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof vn){var e=t;return this.__actions__.length&&(e=new vn(this)),(e=e.reverse()).__actions__.push({func:zo,args:[To],thisArg:r}),new mn(e,this.__chain__)}return this.thru(To)},pn.prototype.toJSON=pn.prototype.valueOf=pn.prototype.value=function(){return Ws(this.__wrapped__,this.__actions__)},pn.prototype.first=pn.prototype.head,Fe&&(pn.prototype[Fe]=function(){return this}),pn}();Ee._=Ei,(s=function(){return Ei}.call(e,i,e,n))===r||(n.exports=s)}).call(this)}).call(this,i(15),i(16)(t))},function(t,e,i){var n=i(0);t.exports={getjsondata:function(t,e){if(!t)return!1;n.ajax({async:!0,type:"get",dataType:"jsonp",url:t,success:function(t){console.log("Search Detalj arrangemang hämtat: "),e(t)},error:function(t,e,i){alert("Nått blev fel vid hämtning av arrangemang!")}})},postjsondata:function(t,e,i){if(!t)return!1;n.ajax({async:!0,type:"post",url:t,data:e,success:function(t){console.log("Hämtar Data: "),i(t)},error:function(t,e,i){alert("Nått blev fel vid hämtning av POST json!")}})}}},function(t,e,i){var n=i(0);t.exports={init:function(t){this.cacheDom(t),this.BindEvent(),this.Settings()},cacheDom:function(t){this.$cmdMenyOpen=n(".kk_bb_open"+t)},BindEvent:function(){},Settings:function(){this.$cmdMenyOpen.addClass("bb_aj_valdmeny")}}},function(t,e,i){var n=i(0),s=(i(1),i(17));t.exports={injecthtmltemplate:function(t,e,i,r){s.init(),n.get(e,function(e){var s=Handlebars.compile(e);n(t).html(s(i)),r()},"html")},returnhtmltemplate:function(t,e,i){s.init(),n.get(t,function(t){var n=Handlebars.compile(t);i(n(e))},"html")}}},function(t,e){t.exports={callEvents:{events:{},on:function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},off:function(t,e){if(this.events[t])for(var i=0;i<this.events[t].length;i++)if(this.events[t][i]===e){this.events[t].splice(i,1);break}},emit:function(t,e){this.events[t]&&this.events[t].forEach(function(t){t(e)})}}}},function(t,e,i){var n=i(0);t.exports={init:function(t){this.cacheDom(t),this.bindEvent(),this.render()},cacheDom:function(t){this.$bb_aj_cmdAdd=n("#bb_aj_cmdAdd_"+t),this.$bb_aj_cmdSetting=n("#bb_aj_cmdSetting_"+t),this.$bb_aj_Container=n(".bb_aj_Container"),this.$bb_aj_AddContainer=n(".bb_aj_AddContainer_"+t),this.$bb_aj_SettingsContainer=n(".bb_aj_SettingsContainer_"+t),this.$bb_aj_cmdClose=n(".bb_aj_CloseContainer")},bindEvent:function(){this.$bb_aj_cmdAdd.on("click",this.addboxbehavior.bind(this)),this.$bb_aj_cmdSetting.on("click",this.settingsboxbehavior.bind(this)),this.$bb_aj_cmdClose.on("click",this.closeboxbehavior.bind(this))},render:function(){this.$bb_aj_Container.hide()},addboxbehavior:function(){this.$bb_aj_AddContainer.slideToggle(500),this.$bb_aj_SettingsContainer.is(":visible")&&this.$bb_aj_SettingsContainer.hide(500)},settingsboxbehavior:function(){this.$bb_aj_SettingsContainer.slideToggle(500),this.$bb_aj_AddContainer.is(":visible")&&this.$bb_aj_AddContainer.hide(500)},closeboxbehavior:function(){this.$bb_aj_Container.hide(500)}}},function(t,e,n){(function(e){var s=n(1);t.exports={init:function(){},HelpersetSelectedIndex:function(t,e){for(i=0;i<t.options.length;i++)if(t.options[i].value==e){t.options[i].selected=!0;break}},getimageHelper:function(t){let i=s.skrivbokimages,n=i.catimagesrc,r=e.find(n,function(e){return e.catid==t});return r||(r=e.find(n,function(t){return 0==t.catid})),i.catimgbase+r.imgsrc},htmlencoderHelper:function(t){var e=document.createElement("textarea");return e.innerHTML=t,e.value},removeClassStartingWith:function(t,e){t.removeClass(function(t,i){return(i.match(new RegExp("\\b"+e+"\\S+","g"))||[]).join(" ")})}}}).call(this,n(2))},function(t,e,i){var n,s,r;
/*! jQuery UI - v1.12.1 - 2016-09-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */s=[i(0)],void 0===(r="function"==typeof(n=function(t){t.ui=t.ui||{},t.ui.version="1.12.1";var e,i=0,n=Array.prototype.slice;
/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */t.cleanData=(e=t.cleanData,function(i){var n,s,r;for(r=0;null!=(s=i[r]);r++)try{(n=t._data(s,"events"))&&n.remove&&t(s).triggerHandler("remove")}catch(t){}e(i)}),t.widget=function(e,i,n){var s,r,o,a={},l=e.split(".")[0];e=e.split(".")[1];var u=l+"-"+e;return n||(n=i,i=t.Widget),t.isArray(n)&&(n=t.extend.apply(null,[{}].concat(n))),t.expr[":"][u.toLowerCase()]=function(e){return!!t.data(e,u)},t[l]=t[l]||{},s=t[l][e],r=t[l][e]=function(t,e){if(!this._createWidget)return new r(t,e);arguments.length&&this._createWidget(t,e)},t.extend(r,s,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),(o=new i).options=t.widget.extend({},o.options),t.each(n,function(e,n){t.isFunction(n)?a[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function s(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,r=this._superApply;return this._super=t,this._superApply=s,e=n.apply(this,arguments),this._super=i,this._superApply=r,e}}():a[e]=n}),r.prototype=t.widget.extend(o,{widgetEventPrefix:s&&o.widgetEventPrefix||e},a,{constructor:r,namespace:l,widgetName:e,widgetFullName:u}),s?(t.each(s._childConstructors,function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,r,i._proto)}),delete s._childConstructors):i._childConstructors.push(r),t.widget.bridge(e,r),r},t.widget.extend=function(e){for(var i,s,r=n.call(arguments,1),o=0,a=r.length;o<a;o++)for(i in r[o])s=r[o][i],r[o].hasOwnProperty(i)&&void 0!==s&&(t.isPlainObject(s)?e[i]=t.isPlainObject(e[i])?t.widget.extend({},e[i],s):t.widget.extend({},s):e[i]=s);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(r){var o="string"==typeof r,a=n.call(arguments,1),l=this;return o?this.length||"instance"!==r?this.each(function(){var i,n=t.data(this,s);return"instance"===r?(l=n,!1):n?t.isFunction(n[r])&&"_"!==r.charAt(0)?(i=n[r].apply(n,a))!==n&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0:t.error("no such method '"+r+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+r+"'")}):l=void 0:(a.length&&(r=t.widget.extend.apply(null,[r].concat(a))),this.each(function(){var e=t.data(this,s);e?(e.option(r||{}),e._init&&e._init()):t.data(this,s,new i(r,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,n){n=t(n||this.defaultElement||this)[0],this.element=t(n),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},n!==this&&(t.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===n&&this.destroy()}}),this.document=t(n.style?n.ownerDocument:n.document||n),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var n,s,r,o=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(o={},n=e.split("."),e=n.shift(),n.length){for(s=o[e]=t.widget.extend({},this.options[e]),r=0;r<n.length-1;r++)s[n[r]]=s[n[r]]||{},s=s[n[r]];if(e=n.pop(),1===arguments.length)return void 0===s[e]?null:s[e];s[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];o[e]=i}return this._setOptions(o),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,n,s;for(i in e)s=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&s&&s.length&&(n=t(s.get()),this._removeClass(s,i),n.addClass(this._classes({element:n,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){var i=[],n=this;function s(s,r){var o,a;for(a=0;a<s.length;a++)o=n.classesElementLookup[s[a]]||t(),o=e.add?t(t.unique(o.get().concat(e.element.get()))):t(o.not(e.element).get()),n.classesElementLookup[s[a]]=o,i.push(s[a]),r&&e.classes[s[a]]&&i.push(e.classes[s[a]])}return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&s(e.keys.match(/\S+/g)||[],!0),e.extra&&s(e.extra.match(/\S+/g)||[]),i.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(n,s){-1!==t.inArray(e.target,s)&&(i.classesElementLookup[n]=t(s.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,n){n="boolean"==typeof n?n:i;var s="string"==typeof t||null===t,r={extra:s?e:i,keys:s?t:e,element:s?this.element:t,add:n};return r.element.toggleClass(this._classes(r),n),this},_on:function(e,i,n){var s,r=this;"boolean"!=typeof e&&(n=i,i=e,e=!1),n?(i=s=t(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,s=this.widget()),t.each(n,function(n,o){function a(){if(e||!0!==r.options.disabled&&!t(this).hasClass("ui-state-disabled"))return("string"==typeof o?r[o]:o).apply(r,arguments)}"string"!=typeof o&&(a.guid=o.guid=o.guid||a.guid||t.guid++);var l=n.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?s.on(u,c,a):i.on(u,a)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){var i=this;return setTimeout(function(){return("string"==typeof t?i[t]:t).apply(i,arguments)},e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,n){var s,r,o=this.options[e];if(n=n||{},(i=t.Event(i)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],r=i.originalEvent)for(s in r)s in i||(i[s]=r[s]);return this.element.trigger(i,n),!(t.isFunction(o)&&!1===o.apply(this.element[0],[i].concat(n))||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,s,r){var o;"string"==typeof s&&(s={effect:s});var a=s?!0===s||"number"==typeof s?i:s.effect||i:e;"number"==typeof(s=s||{})&&(s={duration:s}),o=!t.isEmptyObject(s),s.complete=r,s.delay&&n.delay(s.delay),o&&t.effects&&t.effects.effect[a]?n[e](s):a!==e&&n[a]?n[a](s.duration,s.easing,r):n.queue(function(i){t(this)[e](),r&&r.call(n[0]),i()})}}),t.widget,
/*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
function(){var e,i=Math.max,n=Math.abs,s=/left|center|right/,r=/top|center|bottom/,o=/[\+\-]\d+(\.[\d]+)?%?/,a=/^\w+/,l=/%$/,u=t.fn.position;function c(t,e,i){return[parseFloat(t[0])*(l.test(t[0])?e/100:1),parseFloat(t[1])*(l.test(t[1])?i/100:1)]}function h(e,i){return parseInt(t.css(e,i),10)||0}t.position={scrollbarWidth:function(){if(void 0!==e)return e;var i,n,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),r=s.children()[0];return t("body").append(s),i=r.offsetWidth,s.css("overflow","scroll"),n=r.offsetWidth,i===n&&(n=s[0].clientWidth),s.remove(),e=i-n},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),n=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),s="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,r="scroll"===n||"auto"===n&&e.height<e.element[0].scrollHeight;return{width:r?t.position.scrollbarWidth():0,height:s?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),n=t.isWindow(i[0]),s=!!i[0]&&9===i[0].nodeType,r=!n&&!s;return{element:i,isWindow:n,isDocument:s,offset:r?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return u.apply(this,arguments);e=t.extend({},e);var l,d,p,f,g,m,v,_,b=t(e.of),y=t.position.getWithinInfo(e.within),k=t.position.getScrollInfo(y),w=(e.collision||"flip").split(" "),x={};return _=(v=b)[0],m=9===_.nodeType?{width:v.width(),height:v.height(),offset:{top:0,left:0}}:t.isWindow(_)?{width:v.width(),height:v.height(),offset:{top:v.scrollTop(),left:v.scrollLeft()}}:_.preventDefault?{width:0,height:0,offset:{top:_.pageY,left:_.pageX}}:{width:v.outerWidth(),height:v.outerHeight(),offset:v.offset()},b[0].preventDefault&&(e.at="left top"),d=m.width,p=m.height,f=m.offset,g=t.extend({},f),t.each(["my","at"],function(){var t,i,n=(e[this]||"").split(" ");1===n.length&&(n=s.test(n[0])?n.concat(["center"]):r.test(n[0])?["center"].concat(n):["center","center"]),n[0]=s.test(n[0])?n[0]:"center",n[1]=r.test(n[1])?n[1]:"center",t=o.exec(n[0]),i=o.exec(n[1]),x[this]=[t?t[0]:0,i?i[0]:0],e[this]=[a.exec(n[0])[0],a.exec(n[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===e.at[0]?g.left+=d:"center"===e.at[0]&&(g.left+=d/2),"bottom"===e.at[1]?g.top+=p:"center"===e.at[1]&&(g.top+=p/2),l=c(x.at,d,p),g.left+=l[0],g.top+=l[1],this.each(function(){var s,r,o=t(this),a=o.outerWidth(),u=o.outerHeight(),m=h(this,"marginLeft"),v=h(this,"marginTop"),_=a+m+h(this,"marginRight")+k.width,C=u+v+h(this,"marginBottom")+k.height,D=t.extend({},g),S=c(x.my,o.outerWidth(),o.outerHeight());"right"===e.my[0]?D.left-=a:"center"===e.my[0]&&(D.left-=a/2),"bottom"===e.my[1]?D.top-=u:"center"===e.my[1]&&(D.top-=u/2),D.left+=S[0],D.top+=S[1],s={marginLeft:m,marginTop:v},t.each(["left","top"],function(i,n){t.ui.position[w[i]]&&t.ui.position[w[i]][n](D,{targetWidth:d,targetHeight:p,elemWidth:a,elemHeight:u,collisionPosition:s,collisionWidth:_,collisionHeight:C,offset:[l[0]+S[0],l[1]+S[1]],my:e.my,at:e.at,within:y,elem:o})}),e.using&&(r=function(t){var s=f.left-D.left,r=s+d-a,l=f.top-D.top,c=l+p-u,h={target:{element:b,left:f.left,top:f.top,width:d,height:p},element:{element:o,left:D.left,top:D.top,width:a,height:u},horizontal:r<0?"left":s>0?"right":"center",vertical:c<0?"top":l>0?"bottom":"middle"};d<a&&n(s+r)<d&&(h.horizontal="center"),p<u&&n(l+c)<p&&(h.vertical="middle"),i(n(s),n(r))>i(n(l),n(c))?h.important="horizontal":h.important="vertical",e.using.call(this,t,h)}),o.offset(t.extend(D,{using:r}))})},t.ui.position={fit:{left:function(t,e){var n,s=e.within,r=s.isWindow?s.scrollLeft:s.offset.left,o=s.width,a=t.left-e.collisionPosition.marginLeft,l=r-a,u=a+e.collisionWidth-o-r;e.collisionWidth>o?l>0&&u<=0?(n=t.left+l+e.collisionWidth-o-r,t.left+=l-n):t.left=u>0&&l<=0?r:l>u?r+o-e.collisionWidth:r:l>0?t.left+=l:u>0?t.left-=u:t.left=i(t.left-a,t.left)},top:function(t,e){var n,s=e.within,r=s.isWindow?s.scrollTop:s.offset.top,o=e.within.height,a=t.top-e.collisionPosition.marginTop,l=r-a,u=a+e.collisionHeight-o-r;e.collisionHeight>o?l>0&&u<=0?(n=t.top+l+e.collisionHeight-o-r,t.top+=l-n):t.top=u>0&&l<=0?r:l>u?r+o-e.collisionHeight:r:l>0?t.top+=l:u>0?t.top-=u:t.top=i(t.top-a,t.top)}},flip:{left:function(t,e){var i,s,r=e.within,o=r.offset.left+r.scrollLeft,a=r.width,l=r.isWindow?r.scrollLeft:r.offset.left,u=t.left-e.collisionPosition.marginLeft,c=u-l,h=u+e.collisionWidth-a-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];c<0?((i=t.left+d+p+f+e.collisionWidth-a-o)<0||i<n(c))&&(t.left+=d+p+f):h>0&&((s=t.left-e.collisionPosition.marginLeft+d+p+f-l)>0||n(s)<h)&&(t.left+=d+p+f)},top:function(t,e){var i,s,r=e.within,o=r.offset.top+r.scrollTop,a=r.height,l=r.isWindow?r.scrollTop:r.offset.top,u=t.top-e.collisionPosition.marginTop,c=u-l,h=u+e.collisionHeight-a-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];c<0?((s=t.top+p+f+g+e.collisionHeight-a-o)<0||s<n(c))&&(t.top+=p+f+g):h>0&&((i=t.top-e.collisionPosition.marginTop+p+f+g-l)>0||n(i)<h)&&(t.top+=p+f+g)}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,n){return!!t.data(e,n[3])}}),t.fn.extend({disableSelection:(s="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(s+".ui-disableSelection",function(t){t.preventDefault()})}),enableSelection:function(){return this.off(".ui-disableSelection")}});var s,r,o,a,l="ui-effects-animated",u=t;
/*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */t.effects={effect:{}},
/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
function(t,e){var i,n=/^([\-+])=\s*(\d+\.?\d*)/,s=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],r=t.Color=function(e,i,n,s){return new t.Color.fn.parse(e,i,n,s)},o={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},a={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},l=r.support={},u=t("<p>")[0],c=t.each;function h(t,e,i){var n=a[e.type]||{};return null==t?i||!e.def?null:e.def:(t=n.floor?~~t:parseFloat(t),isNaN(t)?e.def:n.mod?(t+n.mod)%n.mod:0>t?0:n.max<t?n.max:t)}function d(e){var n=r(),a=n._rgba=[];return e=e.toLowerCase(),c(s,function(t,i){var s,r=i.re.exec(e),l=r&&i.parse(r),u=i.space||"rgba";if(l)return s=n[u](l),n[o[u].cache]=s[o[u].cache],a=n._rgba=s._rgba,!1}),a.length?("0,0,0,0"===a.join()&&t.extend(a,i.transparent),n):i[e]}function p(t,e,i){return 6*(i=(i+1)%1)<1?t+(e-t)*i*6:2*i<1?e:3*i<2?t+(e-t)*(2/3-i)*6:t}u.style.cssText="background-color:rgba(1,1,1,.5)",l.rgba=u.style.backgroundColor.indexOf("rgba")>-1,c(o,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),r.fn=t.extend(r.prototype,{parse:function(e,n,s,a){if(void 0===e)return this._rgba=[null,null,null,null],this;(e.jquery||e.nodeType)&&(e=t(e).css(n),n=void 0);var l=this,u=t.type(e),p=this._rgba=[];return void 0!==n&&(e=[e,n,s,a],u="array"),"string"===u?this.parse(d(e)||i._default):"array"===u?(c(o.rgba.props,function(t,i){p[i.idx]=h(e[i.idx],i)}),this):"object"===u?(c(o,e instanceof r?function(t,i){e[i.cache]&&(l[i.cache]=e[i.cache].slice())}:function(i,n){var s=n.cache;c(n.props,function(t,i){if(!l[s]&&n.to){if("alpha"===t||null==e[t])return;l[s]=n.to(l._rgba)}l[s][i.idx]=h(e[t],i,!0)}),l[s]&&t.inArray(null,l[s].slice(0,3))<0&&(l[s][3]=1,n.from&&(l._rgba=n.from(l[s])))}),this):void 0},is:function(t){var e=r(t),i=!0,n=this;return c(o,function(t,s){var r,o=e[s.cache];return o&&(r=n[s.cache]||s.to&&s.to(n._rgba)||[],c(s.props,function(t,e){if(null!=o[e.idx])return i=o[e.idx]===r[e.idx]})),i}),i},_space:function(){var t=[],e=this;return c(o,function(i,n){e[n.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var i=r(t),n=i._space(),s=o[n],l=0===this.alpha()?r("transparent"):this,u=l[s.cache]||s.to(l._rgba),d=u.slice();return i=i[s.cache],c(s.props,function(t,n){var s=n.idx,r=u[s],o=i[s],l=a[n.type]||{};null!==o&&(null===r?d[s]=o:(l.mod&&(o-r>l.mod/2?r+=l.mod:r-o>l.mod/2&&(r-=l.mod)),d[s]=h((o-r)*e+r,n)))}),this[n](d)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),n=i.pop(),s=r(e)._rgba;return r(t.map(i,function(t,e){return(1-n)*s[e]+n*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&e<3&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),n=i.pop();return e&&i.push(~~(255*n)),"#"+t.map(i,function(t){return 1===(t=(t||0).toString(16)).length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),r.fn.parse.prototype=r.fn,o.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,n=t[0]/255,s=t[1]/255,r=t[2]/255,o=t[3],a=Math.max(n,s,r),l=Math.min(n,s,r),u=a-l,c=a+l,h=.5*c;return e=l===a?0:n===a?60*(s-r)/u+360:s===a?60*(r-n)/u+120:60*(n-s)/u+240,i=0===u?0:h<=.5?u/c:u/(2-c),[Math.round(e)%360,i,h,null==o?1:o]},o.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],n=t[2],s=t[3],r=n<=.5?n*(1+i):n+i-n*i,o=2*n-r;return[Math.round(255*p(o,r,e+1/3)),Math.round(255*p(o,r,e)),Math.round(255*p(o,r,e-1/3)),s]},c(o,function(e,i){var s=i.props,o=i.cache,a=i.to,l=i.from;r.fn[e]=function(e){if(a&&!this[o]&&(this[o]=a(this._rgba)),void 0===e)return this[o].slice();var i,n=t.type(e),u="array"===n||"object"===n?e:arguments,d=this[o].slice();return c(s,function(t,e){var i=u["object"===n?t:e.idx];null==i&&(i=d[e.idx]),d[e.idx]=h(i,e)}),l?((i=r(l(d)))[o]=d,i):r(d)},c(s,function(i,s){r.fn[i]||(r.fn[i]=function(r){var o,a=t.type(r),l="alpha"===i?this._hsla?"hsla":"rgba":e,u=this[l](),c=u[s.idx];return"undefined"===a?c:("function"===a&&(r=r.call(this,c),a=t.type(r)),null==r&&s.empty?this:("string"===a&&(o=n.exec(r))&&(r=c+parseFloat(o[2])*("+"===o[1]?1:-1)),u[s.idx]=r,this[l](u)))})})}),r.hook=function(e){var i=e.split(" ");c(i,function(e,i){t.cssHooks[i]={set:function(e,n){var s,o,a="";if("transparent"!==n&&("string"!==t.type(n)||(s=d(n)))){if(n=r(s||n),!l.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?e.parentNode:e;(""===a||"transparent"===a)&&o&&o.style;)try{a=t.css(o,"backgroundColor"),o=o.parentNode}catch(t){}n=n.blend(a&&"transparent"!==a?a:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(t){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=r(e.elem,i),e.end=r(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},r.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),t.cssHooks.borderColor={expand:function(t){var e={};return c(["Top","Right","Bottom","Left"],function(i,n){e["border"+n+"Color"]=t}),e}},i=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(u),function(){var e,i=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};function s(e){var i,n,s=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,r={};if(s&&s.length&&s[0]&&s[s[0]])for(n=s.length;n--;)i=s[n],"string"==typeof s[i]&&(r[t.camelCase(i)]=s[i]);else for(i in s)"string"==typeof s[i]&&(r[i]=s[i]);return r}t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(u.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,r,o,a){var l=t.speed(r,o,a);return this.queue(function(){var r,o=t(this),a=o.attr("class")||"",u=l.children?o.find("*").addBack():o;u=u.map(function(){var e=t(this);return{el:e,start:s(this)}}),(r=function(){t.each(i,function(t,i){e[i]&&o[i+"Class"](e[i])})})(),u=u.map(function(){return this.end=s(this.el[0]),this.diff=function(e,i){var s,r,o={};for(s in i)r=i[s],e[s]!==r&&(n[s]||!t.fx.step[s]&&isNaN(parseFloat(r))||(o[s]=r));return o}(this.start,this.end),this}),o.attr("class",a),u=u.map(function(){var e=this,i=t.Deferred(),n=t.extend({},l,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,n),i.promise()}),t.when.apply(t,u.get()).done(function(){r(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),l.complete.call(o[0])})})},t.fn.extend({addClass:(e=t.fn.addClass,function(i,n,s,r){return n?t.effects.animateClass.call(this,{add:i},n,s,r):e.apply(this,arguments)}),removeClass:function(e){return function(i,n,s,r){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},n,s,r):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(i,n,s,r,o){return"boolean"==typeof n||void 0===n?s?t.effects.animateClass.call(this,n?{add:i}:{remove:i},s,r,o):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},n,s,r)}}(t.fn.toggleClass),switchClass:function(e,i,n,s,r){return t.effects.animateClass.call(this,{add:i,remove:e},n,s,r)}})}(),function(){var e;function i(e,i,n,s){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(s=i,n=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(s=n,n=i,i={}),t.isFunction(n)&&(s=n,n=null),i&&t.extend(e,i),n=n||i.duration,e.duration=t.fx.off?0:"number"==typeof n?n:n in t.fx.speeds?t.fx.speeds[n]:t.fx.speeds._default,e.complete=s||i.complete,e}function n(e){return!(e&&"number"!=typeof e&&!t.fx.speeds[e])||"string"==typeof e&&!t.effects.effect[e]||!!t.isFunction(e)||"object"==typeof e&&!e.effect}function s(t,e){var i=e.outerWidth(),n=e.outerHeight(),s=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t)||["",0,i,n,0];return{top:parseFloat(s[1])||0,right:"auto"===s[2]?i:parseFloat(s[2]),bottom:"auto"===s[3]?n:parseFloat(s[3]),left:parseFloat(s[4])||0}}t.expr&&t.expr.filters&&t.expr.filters.animated&&(t.expr.filters.animated=(e=t.expr.filters.animated,function(i){return!!t(i).data(l)||e(i)})),!1!==t.uiBackCompat&&t.extend(t.effects,{save:function(t,e){for(var i=0,n=e.length;i<n;i++)null!==e[i]&&t.data("ui-effects-"+e[i],t[0].style[e[i]])},restore:function(t,e){for(var i,n=0,s=e.length;n<s;n++)null!==e[n]&&(i=t.data("ui-effects-"+e[n]),t.css(e[n],i))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),float:e.css("float")},n=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),s={width:e.width(),height:e.height()},r=document.activeElement;try{r.id}catch(t){r=document.body}return e.wrap(n),(e[0]===r||t.contains(e[0],r))&&t(r).trigger("focus"),n=e.parent(),"static"===e.css("position")?(n.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,n){i[n]=e.css(n),isNaN(parseInt(i[n],10))&&(i[n]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(s),n.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).trigger("focus")),e}}),t.extend(t.effects,{version:"1.12.1",define:function(e,i,n){return n||(n=i,i="effect"),t.effects.effect[e]=n,t.effects.effect[e].mode=i,n},scaledDimensions:function(t,e,i){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var n="horizontal"!==i?(e||100)/100:1,s="vertical"!==i?(e||100)/100:1;return{height:t.height()*s,width:t.width()*n,outerHeight:t.outerHeight()*s,outerWidth:t.outerWidth()*n}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,i){var n=t.queue();e>1&&n.splice.apply(n,[1,0].concat(n.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data("ui-effects-style",t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data("ui-effects-style")||"",t.removeData("ui-effects-style")},mode:function(t,e){var i=t.is(":hidden");return"toggle"===e&&(e=i?"show":"hide"),(i?"hide"===e:"show"===e)&&(e="none"),e},getBaseline:function(t,e){var i,n;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":n=0;break;case"center":n=.5;break;case"right":n=1;break;default:n=t[1]/e.width}return{x:n,y:i}},createPlaceholder:function(e){var i,n=e.css("position"),s=e.position();return e.css({marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),/^(static|relative)/.test(n)&&(n="absolute",i=t("<"+e[0].nodeName+">").insertAfter(e).css({display:/^(inline|ruby)/.test(e.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight"),float:e.css("float")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"),e.data("ui-effects-placeholder",i)),e.css({position:n,left:s.left,top:s.top}),i},removePlaceholder:function(t){var e="ui-effects-placeholder",i=t.data(e);i&&(i.remove(),t.removeData(e))},cleanUp:function(e){t.effects.restoreStyle(e),t.effects.removePlaceholder(e)},setTransition:function(e,i,n,s){return s=s||{},t.each(i,function(t,i){var r=e.cssUnit(i);r[0]>0&&(s[i]=r[0]*n+r[1])}),s}}),t.fn.extend({effect:function(){var e=i.apply(this,arguments),n=t.effects.effect[e.effect],s=n.mode,r=e.queue,o=r||"fx",a=e.complete,u=e.mode,c=[],h=function(e){var i=t(this),n=t.effects.mode(i,u)||s;i.data(l,!0),c.push(n),s&&("show"===n||n===s&&"hide"===n)&&i.show(),s&&"none"===n||t.effects.saveStyle(i),t.isFunction(e)&&e()};if(t.fx.off||!n)return u?this[u](e.duration,a):this.each(function(){a&&a.call(this)});function d(i){var r=t(this);function o(){t.isFunction(a)&&a.call(r[0]),t.isFunction(i)&&i()}e.mode=c.shift(),!1===t.uiBackCompat||s?"none"===e.mode?(r[u](),o()):n.call(r[0],e,function(){r.removeData(l),t.effects.cleanUp(r),"hide"===e.mode&&r.hide(),o()}):(r.is(":hidden")?"hide"===u:"show"===u)?(r[u](),o()):n.call(r[0],e,o)}return!1===r?this.each(h).each(d):this.queue(o,h).queue(o,d)},show:function(t){return function(e){if(n(e))return t.apply(this,arguments);var s=i.apply(this,arguments);return s.mode="show",this.effect.call(this,s)}}(t.fn.show),hide:function(t){return function(e){if(n(e))return t.apply(this,arguments);var s=i.apply(this,arguments);return s.mode="hide",this.effect.call(this,s)}}(t.fn.hide),toggle:function(t){return function(e){if(n(e)||"boolean"==typeof e)return t.apply(this,arguments);var s=i.apply(this,arguments);return s.mode="toggle",this.effect.call(this,s)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),n=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(n=[parseFloat(i),e])}),n},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):s(this.css("clip"),this)},transfer:function(e,i){var n=t(this),s=t(e.to),r="fixed"===s.css("position"),o=t("body"),a=r?o.scrollTop():0,l=r?o.scrollLeft():0,u=s.offset(),c={top:u.top-a,left:u.left-l,height:s.innerHeight(),width:s.innerWidth()},h=n.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({top:h.top-a,left:h.left-l,height:n.innerHeight(),width:n.innerWidth(),position:r?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),t.isFunction(i)&&i()})}}),t.fx.step.clip=function(e){e.clipInit||(e.start=t(e.elem).cssClip(),"string"==typeof e.end&&(e.end=s(e.end,e.elem)),e.clipInit=!0),t(e.elem).cssClip({top:e.pos*(e.end.top-e.start.top)+e.start.top,right:e.pos*(e.end.right-e.start.right)+e.start.right,bottom:e.pos*(e.end.bottom-e.start.bottom)+e.start.bottom,left:e.pos*(e.end.left-e.start.left)+e.start.left})}}(),r={},t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,e){r[e]=function(e){return Math.pow(e,t+2)}}),t.extend(r,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;t<((e=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(r,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return t<.5?i(2*t)/2:1-i(-2*t+2)/2}}),t.effects,t.effects.define("blind","hide",function(e,i){var n={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},s=t(this),r=e.direction||"up",o=s.cssClip(),a={clip:t.extend({},o)},l=t.effects.createPlaceholder(s);a.clip[n[r][0]]=a.clip[n[r][1]],"show"===e.mode&&(s.cssClip(a.clip),l&&l.css(t.effects.clipToBox(a)),a.clip=o),l&&l.animate(t.effects.clipToBox(a),e.duration,e.easing),s.animate(a,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("bounce",function(e,i){var n,s,r,o=t(this),a=e.mode,l="hide"===a,u="show"===a,c=e.direction||"up",h=e.distance,d=e.times||5,p=2*d+(u||l?1:0),f=e.duration/p,g=e.easing,m="up"===c||"down"===c?"top":"left",v="up"===c||"left"===c,_=0,b=o.queue().length;for(t.effects.createPlaceholder(o),r=o.css(m),h||(h=o["top"===m?"outerHeight":"outerWidth"]()/3),u&&((s={opacity:1})[m]=r,o.css("opacity",0).css(m,v?2*-h:2*h).animate(s,f,g)),l&&(h/=Math.pow(2,d-1)),(s={})[m]=r;_<d;_++)(n={})[m]=(v?"-=":"+=")+h,o.animate(n,f,g).animate(s,f,g),h=l?2*h:h/2;l&&((n={opacity:0})[m]=(v?"-=":"+=")+h,o.animate(n,f,g)),o.queue(i),t.effects.unshift(o,b,p+1)}),t.effects.define("clip","hide",function(e,i){var n,s={},r=t(this),o=e.direction||"vertical",a="both"===o,l=a||"horizontal"===o,u=a||"vertical"===o;n=r.cssClip(),s.clip={top:u?(n.bottom-n.top)/2:n.top,right:l?(n.right-n.left)/2:n.right,bottom:u?(n.bottom-n.top)/2:n.bottom,left:l?(n.right-n.left)/2:n.left},t.effects.createPlaceholder(r),"show"===e.mode&&(r.cssClip(s.clip),s.clip=n),r.animate(s,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("drop","hide",function(e,i){var n,s=t(this),r=e.mode,o="show"===r,a=e.direction||"left",l="up"===a||"down"===a?"top":"left",u="up"===a||"left"===a?"-=":"+=",c="+="===u?"-=":"+=",h={opacity:0};t.effects.createPlaceholder(s),n=e.distance||s["top"===l?"outerHeight":"outerWidth"](!0)/2,h[l]=u+n,o&&(s.css(h),h[l]=c+n,h.opacity=1),s.animate(h,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("explode","hide",function(e,i){var n,s,r,o,a,l,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,c=u,h=t(this),d=e.mode,p="show"===d,f=h.show().css("visibility","hidden").offset(),g=Math.ceil(h.outerWidth()/c),m=Math.ceil(h.outerHeight()/u),v=[];function _(){v.push(this),v.length===u*c&&(h.css({visibility:"visible"}),t(v).remove(),i())}for(n=0;n<u;n++)for(o=f.top+n*m,l=n-(u-1)/2,s=0;s<c;s++)r=f.left+s*g,a=s-(c-1)/2,h.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-s*g,top:-n*m}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:g,height:m,left:r+(p?a*g:0),top:o+(p?l*m:0),opacity:p?0:1}).animate({left:r+(p?0:a*g),top:o+(p?0:l*m),opacity:p?1:0},e.duration||500,e.easing,_)}),t.effects.define("fade","toggle",function(e,i){var n="show"===e.mode;t(this).css("opacity",n?0:1).animate({opacity:n?1:0},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("fold","hide",function(e,i){var n=t(this),s=e.mode,r="show"===s,o="hide"===s,a=e.size||15,l=/([0-9]+)%/.exec(a),u=!!e.horizFirst,c=u?["right","bottom"]:["bottom","right"],h=e.duration/2,d=t.effects.createPlaceholder(n),p=n.cssClip(),f={clip:t.extend({},p)},g={clip:t.extend({},p)},m=[p[c[0]],p[c[1]]],v=n.queue().length;l&&(a=parseInt(l[1],10)/100*m[o?0:1]),f.clip[c[0]]=a,g.clip[c[0]]=a,g.clip[c[1]]=0,r&&(n.cssClip(g.clip),d&&d.css(t.effects.clipToBox(g)),g.clip=p),n.queue(function(i){d&&d.animate(t.effects.clipToBox(f),h,e.easing).animate(t.effects.clipToBox(g),h,e.easing),i()}).animate(f,h,e.easing).animate(g,h,e.easing).queue(i),t.effects.unshift(n,v,4)}),t.effects.define("highlight","show",function(e,i){var n=t(this),s={backgroundColor:n.css("backgroundColor")};"hide"===e.mode&&(s.opacity=0),t.effects.saveStyle(n),n.css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(s,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("size",function(e,i){var n,s,r,o=t(this),a=["fontSize"],l=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],u=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],c=e.mode,h="effect"!==c,d=e.scale||"both",p=e.origin||["middle","center"],f=o.css("position"),g=o.position(),m=t.effects.scaledDimensions(o),v=e.from||m,_=e.to||t.effects.scaledDimensions(o,0);t.effects.createPlaceholder(o),"show"===c&&(r=v,v=_,_=r),s={from:{y:v.height/m.height,x:v.width/m.width},to:{y:_.height/m.height,x:_.width/m.width}},"box"!==d&&"both"!==d||(s.from.y!==s.to.y&&(v=t.effects.setTransition(o,l,s.from.y,v),_=t.effects.setTransition(o,l,s.to.y,_)),s.from.x!==s.to.x&&(v=t.effects.setTransition(o,u,s.from.x,v),_=t.effects.setTransition(o,u,s.to.x,_))),"content"!==d&&"both"!==d||s.from.y!==s.to.y&&(v=t.effects.setTransition(o,a,s.from.y,v),_=t.effects.setTransition(o,a,s.to.y,_)),p&&(n=t.effects.getBaseline(p,m),v.top=(m.outerHeight-v.outerHeight)*n.y+g.top,v.left=(m.outerWidth-v.outerWidth)*n.x+g.left,_.top=(m.outerHeight-_.outerHeight)*n.y+g.top,_.left=(m.outerWidth-_.outerWidth)*n.x+g.left),o.css(v),"content"!==d&&"both"!==d||(l=l.concat(["marginTop","marginBottom"]).concat(a),u=u.concat(["marginLeft","marginRight"]),o.find("*[width]").each(function(){var i=t(this),n=t.effects.scaledDimensions(i),r={height:n.height*s.from.y,width:n.width*s.from.x,outerHeight:n.outerHeight*s.from.y,outerWidth:n.outerWidth*s.from.x},o={height:n.height*s.to.y,width:n.width*s.to.x,outerHeight:n.height*s.to.y,outerWidth:n.width*s.to.x};s.from.y!==s.to.y&&(r=t.effects.setTransition(i,l,s.from.y,r),o=t.effects.setTransition(i,l,s.to.y,o)),s.from.x!==s.to.x&&(r=t.effects.setTransition(i,u,s.from.x,r),o=t.effects.setTransition(i,u,s.to.x,o)),h&&t.effects.saveStyle(i),i.css(r),i.animate(o,e.duration,e.easing,function(){h&&t.effects.restoreStyle(i)})})),o.animate(_,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){var e=o.offset();0===_.opacity&&o.css("opacity",v.opacity),h||(o.css("position","static"===f?"relative":f).offset(e),t.effects.saveStyle(o)),i()}})}),t.effects.define("scale",function(e,i){var n=t(this),s=e.mode,r=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"effect"!==s?0:100),o=t.extend(!0,{from:t.effects.scaledDimensions(n),to:t.effects.scaledDimensions(n,r,e.direction||"both"),origin:e.origin||["middle","center"]},e);e.fade&&(o.from.opacity=1,o.to.opacity=0),t.effects.effect.size.call(this,o,i)}),t.effects.define("puff","hide",function(e,i){var n=t.extend(!0,{},e,{fade:!0,percent:parseInt(e.percent,10)||150});t.effects.effect.scale.call(this,n,i)}),t.effects.define("pulsate","show",function(e,i){var n=t(this),s=e.mode,r="show"===s,o="hide"===s,a=r||o,l=2*(e.times||5)+(a?1:0),u=e.duration/l,c=0,h=1,d=n.queue().length;for(!r&&n.is(":visible")||(n.css("opacity",0).show(),c=1);h<l;h++)n.animate({opacity:c},u,e.easing),c=1-c;n.animate({opacity:c},u,e.easing),n.queue(i),t.effects.unshift(n,d,l+1)}),t.effects.define("shake",function(e,i){var n=1,s=t(this),r=e.direction||"left",o=e.distance||20,a=e.times||3,l=2*a+1,u=Math.round(e.duration/l),c="up"===r||"down"===r?"top":"left",h="up"===r||"left"===r,d={},p={},f={},g=s.queue().length;for(t.effects.createPlaceholder(s),d[c]=(h?"-=":"+=")+o,p[c]=(h?"+=":"-=")+2*o,f[c]=(h?"-=":"+=")+2*o,s.animate(d,u,e.easing);n<a;n++)s.animate(p,u,e.easing).animate(f,u,e.easing);s.animate(p,u,e.easing).animate(d,u/2,e.easing).queue(i),t.effects.unshift(s,g,l+1)}),t.effects.define("slide","show",function(e,i){var n,s,r=t(this),o={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},a=e.mode,l=e.direction||"left",u="up"===l||"down"===l?"top":"left",c="up"===l||"left"===l,h=e.distance||r["top"===u?"outerHeight":"outerWidth"](!0),d={};t.effects.createPlaceholder(r),n=r.cssClip(),s=r.position()[u],d[u]=(c?-1:1)*h+s,d.clip=r.cssClip(),d.clip[o[l][1]]=d.clip[o[l][0]],"show"===a&&(r.cssClip(d.clip),r.css(u,d[u]),d.clip=n,d[u]=s),r.animate(d,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),!1!==t.uiBackCompat&&t.effects.define("transfer",function(e,i){t(this).transfer(e,i)}),
/*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
t.ui.focusable=function(e,i){var n,s,r,o,a,l=e.nodeName.toLowerCase();return"area"===l?(n=e.parentNode,s=n.name,!(!e.href||!s||"map"!==n.nodeName.toLowerCase())&&(r=t("img[usemap='#"+s+"']")).length>0&&r.is(":visible")):(/^(input|select|textarea|button|object)$/.test(l)?(o=!e.disabled)&&(a=t(e).closest("fieldset")[0])&&(o=!a.disabled):o="a"===l&&e.href||i,o&&t(e).is(":visible")&&function(t){for(var e=t.css("visibility");"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e}(t(e)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}}),t.ui.focusable,t.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)},t.ui.formResetMixin={_formResetHandler:function(){var e=t(this);setTimeout(function(){var i=e.data("ui-form-reset-instances");t.each(i,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var e=this.form.data("ui-form-reset-instances");e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-form-reset-instances",e):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}},
/*!
 * jQuery UI Support for jQuery core 1.7.x 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],function(e,i){var n="Width"===i?["Left","Right"]:["Top","Bottom"],s=i.toLowerCase(),r={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};function o(e,i,s,r){return t.each(n,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),r&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}t.fn["inner"+i]=function(e){return void 0===e?r["inner"+i].call(this):this.each(function(){t(this).css(s,o(this,e)+"px")})},t.fn["outer"+i]=function(e,n){return"number"!=typeof e?r["outer"+i].call(this,e):this.each(function(){t(this).css(s,o(this,e,!0,n)+"px")})}}),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.escapeSelector=(a=/([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g,function(t){return t.replace(a,"\\$1")}),t.fn.labels=function(){var e,i,n,s,r;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(s=this.eq(0).parents("label"),(n=this.attr("id"))&&(e=this.eq(0).parents().last(),r=e.add(e.length?e.siblings():this.siblings()),i="label[for='"+t.ui.escapeSelector(n)+"']",s=s.add(r.find(i).addBack(i))),this.pushStack(s))},t.fn.scrollParent=function(e){var i=this.css("position"),n="absolute"===i,s=e?/(auto|scroll|hidden)/:/(auto|scroll)/,r=this.parents().filter(function(){var e=t(this);return(!n||"static"!==e.css("position"))&&s.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&r.length?r:t(this[0].ownerDocument||document)},t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),n=null!=i;return(!n||i>=0)&&t.ui.focusable(e,n)}}),t.fn.extend({uniqueId:(o=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++o)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),e.collapsible||!1!==e.active&&null!=e.active||(e.active=0),this._processPanels(),e.active<0&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t()}},_createIcons:function(){var e,i,n=this.options.icons;n&&(e=t("<span>"),this._addClass(e,"ui-accordion-header-icon","ui-icon "+n.header),e.prependTo(this.headers),i=this.active.children(".ui-accordion-header-icon"),this._removeClass(i,n.header)._addClass(i,null,n.activeHeader)._addClass(this.headers,"ui-accordion-icons"))},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){"active"!==t?("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||!1!==this.options.active||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons())):this._activate(e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!t)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,n=this.headers.length,s=this.headers.index(e.target),r=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:r=this.headers[(s+1)%n];break;case i.LEFT:case i.UP:r=this.headers[(s-1+n)%n];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:r=this.headers[0];break;case i.END:r=this.headers[n-1]}r&&(t(e.target).attr("tabIndex",-1),t(r).attr("tabIndex",0),t(r).trigger("focus"),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().trigger("focus")},refresh:function(){var e=this.options;this._processPanels(),!1===e.active&&!0===e.collapsible||!this.headers.length?(e.active=!1,this.active=t()):!1===e.active?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var t=this.headers,e=this.panels;this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refresh:function(){var e,i=this.options,n=i.heightStyle,s=this.element.parent();this.active=this._findActive(i.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var e=t(this),i=e.uniqueId().attr("id"),n=e.next(),s=n.uniqueId().attr("id");e.attr("aria-controls",s),n.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===n?(e=s.height(),this.element.siblings(":visible").each(function(){var i=t(this),n=i.css("position");"absolute"!==n&&"fixed"!==n&&(e-=i.outerHeight(!0))}),this.headers.each(function(){e-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===n&&(e=0,this.headers.next().each(function(){var i=t(this).is(":visible");i||t(this).show(),e=Math.max(e,t(this).css("height","").height()),i||t(this).hide()}).height(e))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i,n,s=this.options,r=this.active,o=t(e.currentTarget),a=o[0]===r[0],l=a&&s.collapsible,u=l?t():o.next(),c=r.next(),h={oldHeader:r,oldPanel:c,newHeader:l?t():o,newPanel:u};e.preventDefault(),a&&!s.collapsible||!1===this._trigger("beforeActivate",e,h)||(s.active=!l&&this.headers.index(o),this.active=a?t():o,this._toggle(h),this._removeClass(r,"ui-accordion-header-active","ui-state-active"),s.icons&&(i=r.children(".ui-accordion-header-icon"),this._removeClass(i,null,s.icons.activeHeader)._addClass(i,null,s.icons.header)),a||(this._removeClass(o,"ui-accordion-header-collapsed")._addClass(o,"ui-accordion-header-active","ui-state-active"),s.icons&&(n=o.children(".ui-accordion-header-icon"),this._removeClass(n,null,s.icons.header)._addClass(n,null,s.icons.activeHeader)),this._addClass(o.next(),"ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,n=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=n,this.options.animate?this._animate(i,n,e):(n.hide(),i.show(),this._toggleComplete(e)),n.attr({"aria-hidden":"true"}),n.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&n.length?n.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(t(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(t,e,i){var n,s,r,o=this,a=0,l=t.css("box-sizing"),u=t.length&&(!e.length||t.index()<e.index()),c=this.options.animate||{},h=u&&c.down||c,d=function(){o._toggleComplete(i)};return"number"==typeof h&&(r=h),"string"==typeof h&&(s=h),s=s||h.easing||c.easing,r=r||h.duration||c.duration,e.length?t.length?(n=t.show().outerHeight(),e.animate(this.hideProps,{duration:r,easing:s,step:function(t,e){e.now=Math.round(t)}}),void t.hide().animate(this.showProps,{duration:r,easing:s,complete:d,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?"content-box"===l&&(a+=i.now):"content"!==o.options.heightStyle&&(i.now=Math.round(n-e.outerHeight()-a),a=0)}})):e.animate(this.hideProps,r,s,d):t.animate(this.showProps,r,s,d)},_toggleComplete:function(t){var e=t.oldPanel,i=e.prev();this._removeClass(e,"ui-accordion-content-active"),this._removeClass(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-collapsed"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}}),t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var i=t(e.target),n=t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&n.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var i=t(e.target).closest(".ui-menu-item"),n=t(e.currentTarget);i[0]===n[0]&&(this._removeClass(n.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,n))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){var i=!t.contains(this.element[0],t.ui.safeActiveElement(this.document[0]));i&&this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),i=e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),i.children().each(function(){var e=t(this);e.data("ui-menu-submenu-caret")&&e.remove()})},_keydown:function(e){var i,n,s,r,o=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:o=!1,n=this.previousFilter||"",r=!1,s=e.keyCode>=96&&e.keyCode<=105?(e.keyCode-96).toString():String.fromCharCode(e.keyCode),clearTimeout(this.filterTimer),s===n?r=!0:s=n+s,i=this._filterMenuItems(s),(i=r&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i).length||(s=String.fromCharCode(e.keyCode),i=this._filterMenuItems(s)),i.length?(this.focus(e,i),this.previousFilter=s,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&e.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i,n,s,r,o=this,a=this.options.icons.submenu,l=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),n=l.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),i=e.prev(),n=t("<span>").data("ui-menu-submenu-caret",!0);o._addClass(n,"ui-menu-icon","ui-icon "+a),i.attr("aria-haspopup","true").prepend(n),e.attr("aria-labelledby",i.attr("id"))}),this._addClass(n,"ui-menu","ui-widget ui-widget-content ui-front"),e=l.add(this.element),(i=e.find(this.options.items)).not(".ui-menu-item").each(function(){var e=t(this);o._isDivider(e)&&o._addClass(e,"ui-menu-divider","ui-widget-content")}),s=i.not(".ui-menu-item, .ui-menu-divider"),r=s.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(s,"ui-menu-item")._addClass(r,"ui-menu-item-wrapper"),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",String(t)),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i,n,s;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),n=this.active.children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",n.attr("id")),s=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),(i=e.children(".ui-menu")).length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,n,s,r,o,a;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,n=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,s=e.offset().top-this.activeMenu.offset().top-i-n,r=this.activeMenu.scrollTop(),o=this.activeMenu.height(),a=e.outerHeight(),s<0?this.activeMenu.scrollTop(r+s):s+a>o&&this.activeMenu.scrollTop(r+s-o+a))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var n=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));n.length||(n=this.element),this._close(n),this.blur(e),this._removeClass(n.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=n},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var n;this.active&&(n="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),n&&n.length&&this.active||(n=this.activeMenu.find(this.options.items)[e]()),this.focus(i,n)},nextPage:function(e){var i,n,s;this.active?this.isLastItem()||(this._hasScroll()?(n=this.active.offset().top,s=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return(i=t(this)).offset().top-n-s<0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())):this.next(e)},previousPage:function(e){var i,n,s;this.active?this.isFirstItem()||(this._hasScroll()?(n=this.active.offset().top,s=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return(i=t(this)).offset().top-n+s>0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first())):this.next(e)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),n=new RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return n.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))})}}),
/*!
 * jQuery UI Autocomplete 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
t.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,n,s=this.element[0].nodeName.toLowerCase(),r="textarea"===s,o="input"===s;this.isMultiLine=r||!o&&this._isContentEditable(this.element),this.valueMethod=this.element[r||o?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(s){if(this.element.prop("readOnly"))return e=!0,n=!0,void(i=!0);e=!1,n=!1,i=!1;var r=t.ui.keyCode;switch(s.keyCode){case r.PAGE_UP:e=!0,this._move("previousPage",s);break;case r.PAGE_DOWN:e=!0,this._move("nextPage",s);break;case r.UP:e=!0,this._keyEvent("previous",s);break;case r.DOWN:e=!0,this._keyEvent("next",s);break;case r.ENTER:this.menu.active&&(e=!0,s.preventDefault(),this.menu.select(s));break;case r.TAB:this.menu.active&&this.menu.select(s);break;case r.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(s),s.preventDefault());break;default:i=!0,this._searchTimeout(s)}},keypress:function(n){if(e)return e=!1,void(this.isMultiLine&&!this.menu.element.is(":visible")||n.preventDefault());if(!i){var s=t.ui.keyCode;switch(n.keyCode){case s.PAGE_UP:this._move("previousPage",n);break;case s.PAGE_DOWN:this._move("nextPage",n);break;case s.UP:this._keyEvent("previous",n);break;case s.DOWN:this._keyEvent("next",n)}}},input:function(t){if(n)return n=!1,void t.preventDefault();this._searchTimeout(t)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){this.cancelBlur?delete this.cancelBlur:(clearTimeout(this.searching),this.close(t),this._change(t))}}),this._initSource(),this.menu=t("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==t.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(e,i){var n,s;if(this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type)))return this.menu.blur(),void this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)});s=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:s})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(s.value),(n=i.item.attr("aria-label")||s.value)&&t.trim(n).length&&(this.liveRegion.children().hide(),t("<div>").text(n).appendTo(this.liveRegion))},menuselect:function(e,i){var n=i.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==t.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=n})),!1!==this._trigger("select",e,{item:n})&&this._value(n.value),this.term=this._value(),this.close(e),this.selectedItem=n}}),this.liveRegion=t("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(e){var i=this.menu.element[0];return e.target===this.element[0]||e.target===i||t.contains(i,e.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,n=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,n){n(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,s){n.xhr&&n.xhr.abort(),n.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){s(t)},error:function(){s([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),i=this.menu.element.is(":visible"),n=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;e&&(!e||i||n)||(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):!1!==this._trigger("search",e)?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var n=this;t.each(i,function(t,i){n._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<div>").text(i.label)).appendTo(e)},_move:function(t,e){if(this.menu.element.is(":visible"))return this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[t](e);this.search(null,e)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){this.isMultiLine&&!this.menu.element.is(":visible")||(this._move(t,e),e.preventDefault())},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var n=new RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return n.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))}}),t.ui.autocomplete;var c,h=/ui-corner-([a-z]){2,6}/g;
/*!
 * jQuery UI Controlgroup 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */function d(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=p(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function p(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout",i,function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",i,f)}function f(){t.datepicker._isDisabledDatepicker(c.inline?c.dpDiv.parent()[0]:c.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))}function g(e,i){for(var n in t.extend(e,i),i)null==i[n]&&(e[n]=i[n]);return e}t.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var e=this,i=[];t.each(this.options.items,function(n,s){var r,o={};if(s)return"controlgroupLabel"===n?((r=e.element.find(s)).each(function(){var e=t(this);e.children(".ui-controlgroup-label-contents").length||e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),e._addClass(r,null,"ui-widget ui-widget-content ui-state-default"),void(i=i.concat(r.get()))):void(t.fn[n]&&(o=e["_"+n+"Options"]?e["_"+n+"Options"]("middle"):{classes:{}},e.element.find(s).each(function(){var s=t(this),r=s[n]("instance"),a=t.widget.extend({},o);if("button"!==n||!s.parent(".ui-spinner").length){r||(r=s[n]()[n]("instance")),r&&(a.classes=e._resolveClassesValues(a.classes,r)),s[n](a);var l=s[n]("widget");t.data(l[0],"ui-controlgroup-data",r||s[n]("instance")),i.push(l[0])}})))}),this.childWidgets=t(t.unique(i)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each(function(){var i=t(this),n=i.data("ui-controlgroup-data");n&&n[e]&&n[e]()})},_updateCornerClass:function(t,e){var i=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,"ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"),this._addClass(t,null,i)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,n={classes:{}};return n.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],n},_spinnerOptions:function(t){var e=this._buildSimpleOptions(t,"ui-spinner");return e.classes["ui-spinner-up"]="",e.classes["ui-spinner-down"]="",e},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:!!e&&"auto",classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(e,i){var n={};return t.each(e,function(s){var r=i.options.classes[s]||"";r=t.trim(r.replace(h,"")),n[s]=(r+" "+e[s]).replace(/\s+/g," ")}),n},_setOption:function(t,e){"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"!==t?this.refresh():this._callChildMethod(e?"disable":"enable")},refresh:function(){var e,i=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),e=this.childWidgets,this.options.onlyVisible&&(e=e.filter(":visible")),e.length&&(t.each(["first","last"],function(t,n){var s=e[n]().data("ui-controlgroup-data");if(s&&i["_"+s.widgetName+"Options"]){var r=i["_"+s.widgetName+"Options"](1===e.length?"only":n);r.classes=i._resolveClassesValues(r.classes,s),s.element[s.widgetName](r)}else i._updateCornerClass(e[n](),n)}),this._callChildMethod("refresh"))}}),
/*!
 * jQuery UI Checkboxradio 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
t.widget("ui.checkboxradio",[t.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var e,i,n=this,s=this._super()||{};return this._readType(),i=this.element.labels(),this.label=t(i[i.length-1]),this.label.length||t.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){n.originalLabel+=3===this.nodeType?t(this).text():this.outerHTML}),this.originalLabel&&(s.label=this.originalLabel),null!=(e=this.element[0].disabled)&&(s.disabled=e),s},_create:function(){var t=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),t&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var e=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===e&&/radio|checkbox/.test(this.type)||t.error("Can't create checkboxradio on element.nodeName="+e+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var e=this.element[0].name,i="input[name='"+t.ui.escapeSelector(e)+"']";return e?(this.form.length?t(this.form[0].elements).filter(i):t(i).filter(function(){return 0===t(this).form().length})).not(this.element):t([])},_toggleClasses:function(){var e=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",e),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",e)._toggleClass(this.icon,null,"ui-icon-blank",!e),"radio"===this.type&&this._getRadioGroup().each(function(){var e=t(this).checkboxradio("instance");e&&e._removeClass(e.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(t,e){if("label"!==t||e){if(this._super(t,e),"disabled"===t)return this._toggleClass(this.label,null,"ui-state-disabled",e),void(this.element[0].disabled=e);this.refresh()}},_updateIcon:function(e){var i="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=t("<span>"),this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(i+=e?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,e?"ui-icon-blank":"ui-icon-check")):i+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",i),e||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var t=this.label.contents().not(this.element[0]);this.icon&&(t=t.not(this.icon[0])),this.iconSpace&&(t=t.not(this.iconSpace[0])),t.remove(),this.label.append(this.options.label)},refresh:function(){var t=this.element[0].checked,e=this.element[0].disabled;this._updateIcon(t),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",t),null!==this.options.label&&this._updateLabel(),e!==this.options.disabled&&this._setOptions({disabled:e})}}]),t.ui.checkboxradio,
/*!
 * jQuery UI Button 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
t.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,e=this._super()||{};return this.isInput=this.element.is("input"),null!=(t=this.element[0].disabled)&&(e.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(e.label=this.originalLabel),e},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(e){e.keyCode===t.ui.keyCode.SPACE&&(e.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(e,i){var n="iconPosition"!==e,s=n?this.options.iconPosition:i,r="top"===s||"bottom"===s;this.icon?n&&this._removeClass(this.icon,null,this.options.icon):(this.icon=t("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),n&&this._addClass(this.icon,null,i),this._attachIcon(s),r?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(s))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var e=void 0===t.showLabel?this.options.showLabel:t.showLabel,i=void 0===t.icon?this.options.icon:t.icon;e||i||(t.showLabel=!0),this._super(t)},_setOption:function(t,e){"icon"===t&&(e?this._updateIcon(t,e):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,e),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!e),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(e):(this.element.html(e),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,e),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",e),this.element[0].disabled=e,e&&this.element.blur())},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),!1!==t.uiBackCompat&&(t.widget("ui.button",t.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,e){"text"!==t?("showLabel"===t&&(this.options.text=e),"icon"===t&&(this.options.icons.primary=e),"icons"===t&&(e.primary?(this._super("icon",e.primary),this._super("iconPosition","beginning")):e.secondary&&(this._super("icon",e.secondary),this._super("iconPosition","end"))),this._superApply(arguments)):this._super("showLabel",e)}}),t.fn.button=function(e){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?e.apply(this,arguments):(t.ui.checkboxradio||t.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(t.fn.button),t.fn.buttonset=function(){return t.ui.controlgroup||t.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),t.ui.button,
/*!
 * jQuery UI Datepicker 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
t.extend(t.ui,{datepicker:{version:"1.12.1"}}),t.extend(d.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return g(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var n,s,r;n=e.nodeName.toLowerCase(),s="div"===n||"span"===n,e.id||(this.uuid+=1,e.id="dp"+this.uuid),(r=this._newInst(t(e),s)).settings=t.extend({},i||{}),"input"===n?this._connectDatepicker(e,r):s&&this._inlineDatepicker(e,r)},_newInst:function(e,i){var n=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?p(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var n=t(e);i.append=t([]),i.trigger=t([]),n.hasClass(this.markerClassName)||(this._attachments(n,i),n.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(i),t.data(e,"datepicker",i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var n,s,r,o=this._get(i,"appendText"),a=this._get(i,"isRTL");i.append&&i.append.remove(),o&&(i.append=t("<span class='"+this._appendClass+"'>"+o+"</span>"),e[a?"before":"after"](i.append)),e.off("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),"focus"!==(n=this._get(i,"showOn"))&&"both"!==n||e.on("focus",this._showDatepicker),"button"!==n&&"both"!==n||(s=this._get(i,"buttonText"),r=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:r,alt:s,title:s}):t("<button type='button'></button>").addClass(this._triggerClass).html(r?t("<img/>").attr({src:r,alt:s,title:s}):s)),e[a?"before":"after"](i.trigger),i.trigger.on("click",function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,n,s,r=new Date(2009,11,20),o=this._get(t,"dateFormat");o.match(/[DM]/)&&(e=function(t){for(i=0,n=0,s=0;s<t.length;s++)t[s].length>i&&(i=t[s].length,n=s);return n},r.setMonth(e(this._get(t,o.match(/MM/)?"monthNames":"monthNamesShort"))),r.setDate(e(this._get(t,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-r.getDay())),t.input.attr("size",this._formatDate(t,r).length)}},_inlineDatepicker:function(e,i){var n=t(e);n.hasClass(this.markerClassName)||(n.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,n,s,r){var o,a,l,u,c,h=this._dialogInst;return h||(this.uuid+=1,o="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+o+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),t("body").append(this._dialogInput),(h=this._dialogInst=this._newInst(this._dialogInput,!1)).settings={},t.data(this._dialogInput[0],"datepicker",h)),g(h.settings,s||{}),i=i&&i.constructor===Date?this._formatDate(h,i):i,this._dialogInput.val(i),this._pos=r?r.length?r:[r.pageX,r.pageY]:null,this._pos||(a=document.documentElement.clientWidth,l=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,c=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[a/2-100+u,l/2-150+c]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),h.settings.onSelect=n,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",h),this},_destroyDatepicker:function(e){var i,n=t(e),s=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===i?(s.append.remove(),s.trigger.remove(),n.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):"div"!==i&&"span"!==i||n.removeClass(this.markerClassName).empty(),c===s&&(c=null))},_enableDatepicker:function(e){var i,n,s=t(e),r=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&("input"===(i=e.nodeName.toLowerCase())?(e.disabled=!1,r.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):"div"!==i&&"span"!==i||((n=s.children("."+this._inlineClass)).children().removeClass("ui-state-disabled"),n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,n,s=t(e),r=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&("input"===(i=e.nodeName.toLowerCase())?(e.disabled=!0,r.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):"div"!==i&&"span"!==i||((n=s.children("."+this._inlineClass)).children().addClass("ui-state-disabled"),n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;e<this._disabledInputs.length;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,"datepicker")}catch(t){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,i,n){var s,r,o,a,l=this._getInst(e);if(2===arguments.length&&"string"==typeof i)return"defaults"===i?t.extend({},t.datepicker._defaults):l?"all"===i?t.extend({},l.settings):this._get(l,i):null;s=i||{},"string"==typeof i&&((s={})[i]=n),l&&(this._curInst===l&&this._hideDatepicker(),r=this._getDateDatepicker(e,!0),o=this._getMinMaxDate(l,"min"),a=this._getMinMaxDate(l,"max"),g(l.settings,s),null!==o&&void 0!==s.dateFormat&&void 0===s.minDate&&(l.settings.minDate=this._formatDate(l,o)),null!==a&&void 0!==s.dateFormat&&void 0===s.maxDate&&(l.settings.maxDate=this._formatDate(l,a)),"disabled"in s&&(s.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),l),this._autoSize(l),this._setDate(l,r),this._updateAlternate(l),this._updateDatepicker(l))},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,n,s,r=t.datepicker._getInst(e.target),o=!0,a=r.dpDiv.is(".ui-datepicker-rtl");if(r._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),o=!1;break;case 13:return(s=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",r.dpDiv))[0]&&t.datepicker._selectDay(e.target,r.selectedMonth,r.selectedYear,s[0]),(i=t.datepicker._get(r,"onSelect"))?(n=t.datepicker._formatDate(r),i.apply(r.input?r.input[0]:null,[n,r])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(r,"stepBigMonths"):-t.datepicker._get(r,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(r,"stepBigMonths"):+t.datepicker._get(r,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),o=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),o=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,a?1:-1,"D"),o=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(r,"stepBigMonths"):-t.datepicker._get(r,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),o=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,a?-1:1,"D"),o=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(r,"stepBigMonths"):+t.datepicker._get(r,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),o=e.ctrlKey||e.metaKey;break;default:o=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):o=!1;o&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var i,n,s=t.datepicker._getInst(e.target);if(t.datepicker._get(s,"constrainInput"))return i=t.datepicker._possibleChars(t.datepicker._get(s,"dateFormat")),n=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||n<" "||!i||i.indexOf(n)>-1},_doKeyUp:function(e){var i=t.datepicker._getInst(e.target);if(i.input.val()!==i.lastVal)try{t.datepicker.parseDate(t.datepicker._get(i,"dateFormat"),i.input?i.input.val():null,t.datepicker._getFormatConfig(i))&&(t.datepicker._setDateFromField(i),t.datepicker._updateAlternate(i),t.datepicker._updateDatepicker(i))}catch(t){}return!0},_showDatepicker:function(e){var i,n,s,r,o,a,l;"input"!==(e=e.target||e).nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),t.datepicker._isDisabledDatepicker(e)||t.datepicker._lastInput===e||(i=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==i&&(t.datepicker._curInst.dpDiv.stop(!0,!0),i&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),n=t.datepicker._get(i,"beforeShow"),!1!==(s=n?n.apply(e,[e,i]):{})&&(g(i.settings,s),i.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(i),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),r=!1,t(e).parents().each(function(){return!(r|="fixed"===t(this).css("position"))}),o={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(i),o=t.datepicker._checkOffset(i,o,r),i.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:o.left+"px",top:o.top+"px"}),i.inline||(a=t.datepicker._get(i,"showAnim"),l=t.datepicker._get(i,"duration"),i.dpDiv.css("z-index",function(t){for(var e,i;t.length&&t[0]!==document;){if(("absolute"===(e=t.css("position"))||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}(t(e))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[a]?i.dpDiv.show(a,t.datepicker._get(i,"showOptions"),l):i.dpDiv[a||"show"](a?l:null),t.datepicker._shouldFocusInput(i)&&i.input.trigger("focus"),t.datepicker._curInst=i)))},_updateDatepicker:function(e){this.maxRows=4,c=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,n=this._getNumberOfMonths(e),s=n[1],r=e.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&f.apply(r.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),s>1&&e.dpDiv.addClass("ui-datepicker-multi-"+s).css("width",17*s+"em"),e.dpDiv[(1!==n[0]||1!==n[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,n){var s=e.dpDiv.outerWidth(),r=e.dpDiv.outerHeight(),o=e.input?e.input.outerWidth():0,a=e.input?e.input.outerHeight():0,l=document.documentElement.clientWidth+(n?0:t(document).scrollLeft()),u=document.documentElement.clientHeight+(n?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?s-o:0,i.left-=n&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=n&&i.top===e.input.offset().top+a?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+s>l&&l>s?Math.abs(i.left+s-l):0),i.top-=Math.min(i.top,i.top+r>u&&u>r?Math.abs(r+a):0),i},_findPos:function(e){for(var i,n=this._getInst(e),s=this._get(n,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[s?"previousSibling":"nextSibling"];return[(i=t(e).offset()).left,i.top]},_hideDatepicker:function(e){var i,n,s,r,o=this._curInst;!o||e&&o!==t.data(e,"datepicker")||this._datepickerShowing&&(i=this._get(o,"showAnim"),n=this._get(o,"duration"),s=function(){t.datepicker._tidyDialog(o)},t.effects&&(t.effects.effect[i]||t.effects[i])?o.dpDiv.hide(i,t.datepicker._get(o,"showOptions"),n,s):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?n:null,s),i||s(),this._datepickerShowing=!1,(r=this._get(o,"onClose"))&&r.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),n=t.datepicker._getInst(i[0]);(i[0].id===t.datepicker._mainDivId||0!==i.parents("#"+t.datepicker._mainDivId).length||i.hasClass(t.datepicker.markerClassName)||i.closest("."+t.datepicker._triggerClass).length||!t.datepicker._datepickerShowing||t.datepicker._inDialog&&t.blockUI)&&(!i.hasClass(t.datepicker.markerClassName)||t.datepicker._curInst===n)||t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,n){var s=t(e),r=this._getInst(s[0]);this._isDisabledDatepicker(s[0])||(this._adjustInstDate(r,i+("M"===n?this._get(r,"showCurrentAtPos"):0),n),this._updateDatepicker(r))},_gotoToday:function(e){var i,n=t(e),s=this._getInst(n[0]);this._get(s,"gotoCurrent")&&s.currentDay?(s.selectedDay=s.currentDay,s.drawMonth=s.selectedMonth=s.currentMonth,s.drawYear=s.selectedYear=s.currentYear):(i=new Date,s.selectedDay=i.getDate(),s.drawMonth=s.selectedMonth=i.getMonth(),s.drawYear=s.selectedYear=i.getFullYear()),this._notifyChange(s),this._adjustDate(n)},_selectMonthYear:function(e,i,n){var s=t(e),r=this._getInst(s[0]);r["selected"+("M"===n?"Month":"Year")]=r["draw"+("M"===n?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(r),this._adjustDate(s)},_selectDay:function(e,i,n,s){var r,o=t(e);t(s).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||((r=this._getInst(o[0])).selectedDay=r.currentDay=t("a",s).html(),r.selectedMonth=r.currentMonth=i,r.selectedYear=r.currentYear=n,this._selectDate(e,this._formatDate(r,r.currentDay,r.currentMonth,r.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var n,s=t(e),r=this._getInst(s[0]);i=null!=i?i:this._formatDate(r),r.input&&r.input.val(i),this._updateAlternate(r),(n=this._get(r,"onSelect"))?n.apply(r.input?r.input[0]:null,[i,r]):r.input&&r.input.trigger("change"),r.inline?this._updateDatepicker(r):(this._hideDatepicker(),this._lastInput=r.input[0],"object"!=typeof r.input[0]&&r.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(e){var i,n,s,r=this._get(e,"altField");r&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),n=this._getDate(e),s=this.formatDate(i,n,this._getFormatConfig(e)),t(r).val(s))},noWeekends:function(t){var e=t.getDay();return[e>0&&e<6,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(e,i,n){if(null==e||null==i)throw"Invalid arguments";if(""===(i="object"==typeof i?i.toString():i+""))return null;var s,r,o,a,l=0,u=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff,c="string"!=typeof u?u:(new Date).getFullYear()%100+parseInt(u,10),h=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,d=(n?n.dayNames:null)||this._defaults.dayNames,p=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,f=(n?n.monthNames:null)||this._defaults.monthNames,g=-1,m=-1,v=-1,_=-1,b=!1,y=function(t){var i=s+1<e.length&&e.charAt(s+1)===t;return i&&s++,i},k=function(t){var e=y(t),n="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,s="y"===t?n:1,r=new RegExp("^\\d{"+s+","+n+"}"),o=i.substring(l).match(r);if(!o)throw"Missing number at position "+l;return l+=o[0].length,parseInt(o[0],10)},w=function(e,n,s){var r=-1,o=t.map(y(e)?s:n,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(o,function(t,e){var n=e[1];if(i.substr(l,n.length).toLowerCase()===n.toLowerCase())return r=e[0],l+=n.length,!1}),-1!==r)return r+1;throw"Unknown name at position "+l},x=function(){if(i.charAt(l)!==e.charAt(s))throw"Unexpected literal at position "+l;l++};for(s=0;s<e.length;s++)if(b)"'"!==e.charAt(s)||y("'")?x():b=!1;else switch(e.charAt(s)){case"d":v=k("d");break;case"D":w("D",h,d);break;case"o":_=k("o");break;case"m":m=k("m");break;case"M":m=w("M",p,f);break;case"y":g=k("y");break;case"@":a=new Date(k("@")),g=a.getFullYear(),m=a.getMonth()+1,v=a.getDate();break;case"!":a=new Date((k("!")-this._ticksTo1970)/1e4),g=a.getFullYear(),m=a.getMonth()+1,v=a.getDate();break;case"'":y("'")?x():b=!0;break;default:x()}if(l<i.length&&(o=i.substr(l),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===g?g=(new Date).getFullYear():g<100&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(g<=c?0:-100)),_>-1)for(m=1,v=_;r=this._getDaysInMonth(g,m-1),!(v<=r);)m++,v-=r;if((a=this._daylightSavingAdjust(new Date(g,m-1,v))).getFullYear()!==g||a.getMonth()+1!==m||a.getDate()!==v)throw"Invalid date";return a},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,formatDate:function(t,e,i){if(!e)return"";var n,s=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,r=(i?i.dayNames:null)||this._defaults.dayNames,o=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,a=(i?i.monthNames:null)||this._defaults.monthNames,l=function(e){var i=n+1<t.length&&t.charAt(n+1)===e;return i&&n++,i},u=function(t,e,i){var n=""+e;if(l(t))for(;n.length<i;)n="0"+n;return n},c=function(t,e,i,n){return l(t)?n[e]:i[e]},h="",d=!1;if(e)for(n=0;n<t.length;n++)if(d)"'"!==t.charAt(n)||l("'")?h+=t.charAt(n):d=!1;else switch(t.charAt(n)){case"d":h+=u("d",e.getDate(),2);break;case"D":h+=c("D",e.getDay(),s,r);break;case"o":h+=u("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":h+=u("m",e.getMonth()+1,2);break;case"M":h+=c("M",e.getMonth(),o,a);break;case"y":h+=l("y")?e.getFullYear():(e.getFullYear()%100<10?"0":"")+e.getFullYear()%100;break;case"@":h+=e.getTime();break;case"!":h+=1e4*e.getTime()+this._ticksTo1970;break;case"'":l("'")?h+="'":d=!0;break;default:h+=t.charAt(n)}return h},_possibleChars:function(t){var e,i="",n=!1,s=function(i){var n=e+1<t.length&&t.charAt(e+1)===i;return n&&e++,n};for(e=0;e<t.length;e++)if(n)"'"!==t.charAt(e)||s("'")?i+=t.charAt(e):n=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":s("'")?i+="'":n=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),n=t.lastVal=t.input?t.input.val():null,s=this._getDefaultDate(t),r=s,o=this._getFormatConfig(t);try{r=this.parseDate(i,n,o)||s}catch(t){n=e?"":n}t.selectedDay=r.getDate(),t.drawMonth=t.selectedMonth=r.getMonth(),t.drawYear=t.selectedYear=r.getFullYear(),t.currentDay=n?r.getDate():0,t.currentMonth=n?r.getMonth():0,t.currentYear=n?r.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,n){var s=null==i||""===i?n:"string"==typeof i?function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(t){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,s=n.getFullYear(),r=n.getMonth(),o=n.getDate(),a=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=a.exec(i);l;){switch(l[2]||"d"){case"d":case"D":o+=parseInt(l[1],10);break;case"w":case"W":o+=7*parseInt(l[1],10);break;case"m":case"M":r+=parseInt(l[1],10),o=Math.min(o,t.datepicker._getDaysInMonth(s,r));break;case"y":case"Y":s+=parseInt(l[1],10),o=Math.min(o,t.datepicker._getDaysInMonth(s,r))}l=a.exec(i)}return new Date(s,r,o)}(i):"number"==typeof i?isNaN(i)?n:function(t){var e=new Date;return e.setDate(e.getDate()+t),e}(i):new Date(i.getTime());return(s=s&&"Invalid Date"===s.toString()?n:s)&&(s.setHours(0),s.setMinutes(0),s.setSeconds(0),s.setMilliseconds(0)),this._daylightSavingAdjust(s)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var n=!e,s=t.selectedMonth,r=t.selectedYear,o=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=o.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=o.getMonth(),t.drawYear=t.selectedYear=t.currentYear=o.getFullYear(),s===t.selectedMonth&&r===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(n?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),n="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(n,-i,"M")},next:function(){t.datepicker._adjustDate(n,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(n)},selectDay:function(){return t.datepicker._selectDay(n,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(n,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(n,this,"Y"),!1}};t(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,n,s,r,o,a,l,u,c,h,d,p,f,g,m,v,_,b,y,k,w,x,C,D,S,T,I,A,j,M,P,E,O,H,N,B,F,L,z=new Date,W=this._daylightSavingAdjust(new Date(z.getFullYear(),z.getMonth(),z.getDate())),R=this._get(t,"isRTL"),$=this._get(t,"showButtonPanel"),q=this._get(t,"hideIfNoPrevNext"),U=this._get(t,"navigationAsDateFormat"),K=this._getNumberOfMonths(t),Y=this._get(t,"showCurrentAtPos"),V=this._get(t,"stepMonths"),G=1!==K[0]||1!==K[1],X=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),J=this._getMinMaxDate(t,"min"),Z=this._getMinMaxDate(t,"max"),Q=t.drawMonth-Y,tt=t.drawYear;if(Q<0&&(Q+=12,tt--),Z)for(e=this._daylightSavingAdjust(new Date(Z.getFullYear(),Z.getMonth()-K[0]*K[1]+1,Z.getDate())),e=J&&e<J?J:e;this._daylightSavingAdjust(new Date(tt,Q,1))>e;)--Q<0&&(Q=11,tt--);for(t.drawMonth=Q,t.drawYear=tt,i=this._get(t,"prevText"),i=U?this.formatDate(i,this._daylightSavingAdjust(new Date(tt,Q-V,1)),this._getFormatConfig(t)):i,n=this._canAdjustMonth(t,-1,tt,Q)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(R?"e":"w")+"'>"+i+"</span></a>":q?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(R?"e":"w")+"'>"+i+"</span></a>",s=this._get(t,"nextText"),s=U?this.formatDate(s,this._daylightSavingAdjust(new Date(tt,Q+V,1)),this._getFormatConfig(t)):s,r=this._canAdjustMonth(t,1,tt,Q)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(R?"w":"e")+"'>"+s+"</span></a>":q?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(R?"w":"e")+"'>"+s+"</span></a>",o=this._get(t,"currentText"),a=this._get(t,"gotoCurrent")&&t.currentDay?X:W,o=U?this.formatDate(o,a,this._getFormatConfig(t)):o,l=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",u=$?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(R?l:"")+(this._isInRange(t,a)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(R?"":l)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,h=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),v=this._get(t,"showOtherMonths"),_=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",w=0;w<K[0];w++){for(x="",this.maxRows=4,C=0;C<K[1];C++){if(D=this._daylightSavingAdjust(new Date(tt,Q,t.selectedDay)),S=" ui-corner-all",T="",G){if(T+="<div class='ui-datepicker-group",K[1]>1)switch(C){case 0:T+=" ui-datepicker-group-first",S=" ui-corner-"+(R?"right":"left");break;case K[1]-1:T+=" ui-datepicker-group-last",S=" ui-corner-"+(R?"left":"right");break;default:T+=" ui-datepicker-group-middle",S=""}T+="'>"}for(T+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+S+"'>"+(/all|left/.test(S)&&0===w?R?r:n:"")+(/all|right/.test(S)&&0===w?R?n:r:"")+this._generateMonthYearHeader(t,Q,tt,J,Z,w>0||C>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead><tr>",I=h?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",k=0;k<7;k++)I+="<th scope='col'"+((k+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+d[A=(k+c)%7]+"'>"+p[A]+"</span></th>";for(T+=I+"</tr></thead><tbody>",j=this._getDaysInMonth(tt,Q),tt===t.selectedYear&&Q===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,j)),M=(this._getFirstDayOfMonth(tt,Q)-c+7)%7,P=Math.ceil((M+j)/7),E=G&&this.maxRows>P?this.maxRows:P,this.maxRows=E,O=this._daylightSavingAdjust(new Date(tt,Q,1-M)),H=0;H<E;H++){for(T+="<tr>",N=h?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(O)+"</td>":"",k=0;k<7;k++)B=m?m.apply(t.input?t.input[0]:null,[O]):[!0,""],F=O.getMonth()!==Q,L=F&&!_||!B[0]||J&&O<J||Z&&O>Z,N+="<td class='"+((k+c+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(O.getTime()===D.getTime()&&Q===t.selectedMonth&&t._keyEvent||b.getTime()===O.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!v?"":" "+B[1]+(O.getTime()===X.getTime()?" "+this._currentClass:"")+(O.getTime()===W.getTime()?" ui-datepicker-today":""))+"'"+(F&&!v||!B[2]?"":" title='"+B[2].replace(/'/g,"&#39;")+"'")+(L?"":" data-handler='selectDay' data-event='click' data-month='"+O.getMonth()+"' data-year='"+O.getFullYear()+"'")+">"+(F&&!v?"&#xa0;":L?"<span class='ui-state-default'>"+O.getDate()+"</span>":"<a class='ui-state-default"+(O.getTime()===W.getTime()?" ui-state-highlight":"")+(O.getTime()===X.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+O.getDate()+"</a>")+"</td>",O.setDate(O.getDate()+1),O=this._daylightSavingAdjust(O);T+=N+"</tr>"}++Q>11&&(Q=0,tt++),T+="</tbody></table>"+(G?"</div>"+(K[0]>0&&C===K[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=T}y+=x}return y+=u,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,n,s,r,o,a){var l,u,c,h,d,p,f,g,m=this._get(t,"changeMonth"),v=this._get(t,"changeYear"),_=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(r||!m)y+="<span class='ui-datepicker-month'>"+o[e]+"</span>";else{for(l=n&&n.getFullYear()===i,u=s&&s.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;c<12;c++)(!l||c>=n.getMonth())&&(!u||c<=s.getMonth())&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+a[c]+"</option>");y+="</select>"}if(_||(b+=y+(!r&&m&&v?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",r||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(h=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),f=(p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e})(h[0]),g=Math.max(f,p(h[1]||"")),f=n?Math.max(f,n.getFullYear()):f,g=s?Math.min(g,s.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";f<=g;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),_&&(b+=(!r&&m&&v?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var n=t.selectedYear+("Y"===i?e:0),s=t.selectedMonth+("M"===i?e:0),r=Math.min(t.selectedDay,this._getDaysInMonth(n,s))+("D"===i?e:0),o=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(n,s,r)));t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),"M"!==i&&"Y"!==i||this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),n=this._getMinMaxDate(t,"max"),s=i&&e<i?i:e;return n&&s>n?n:s},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,n){var s=this._getNumberOfMonths(t),r=this._daylightSavingAdjust(new Date(i,n+(e<0?e:s[0]*s[1]),1));return e<0&&r.setDate(this._getDaysInMonth(r.getFullYear(),r.getMonth())),this._isInRange(t,r)},_isInRange:function(t,e){var i,n,s=this._getMinMaxDate(t,"min"),r=this._getMinMaxDate(t,"max"),o=null,a=null,l=this._get(t,"yearRange");return l&&(i=l.split(":"),n=(new Date).getFullYear(),o=parseInt(i[0],10),a=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(o+=n),i[1].match(/[+\-].*/)&&(a+=n)),(!s||e.getTime()>=s.getTime())&&(!r||e.getTime()<=r.getTime())&&(!o||e.getFullYear()>=o)&&(!a||e.getFullYear()<=a)},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return{shortYearCutoff:e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,n){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var s=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(n,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),s,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).on("mousedown",t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new d,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.12.1",t.datepicker,t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var m=!1;t(document).on("mouseup",function(){m=!1}),t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){if(!0===t.data(i.target,e.widgetName+".preventClickEvent"))return t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!m){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,n=1===e.which,s=!("string"!=typeof this.options.cancel||!e.target.nodeName)&&t(e.target).closest(this.options.cancel).length;return!(n&&!s&&this._mouseCapture(e)&&(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(e),!this._mouseStarted)?(e.preventDefault(),0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),m=!0,0)))}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||document.documentMode<9)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,e),this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,m=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.ui.plugin={add:function(e,i,n){var s,r=t.ui[e].prototype;for(s in n)r.plugins[s]=r.plugins[s]||[],r.plugins[s].push([i,n[s]])},call:function(t,e,i,n){var s,r=t.plugins[e];if(r&&(n||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(s=0;s<r.length;s++)t.options[r[s][0]]&&r[s][1].apply(t.element,i)}},t.ui.safeBlur=function(e){e&&"body"!==e.nodeName.toLowerCase()&&t(e).trigger("blur")},
/*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){(this.helper||this.element).is(".ui-draggable-dragging")?this.destroyOnClear=!0:(this._removeHandleClassName(),this._mouseDestroy())},_mouseCapture:function(e){var i=this.options;return!(this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0||(this.handle=this._getHandle(e),!this.handle||(this._blurActiveElement(e),this._blockFrames(!0===i.iframeFix?"iframe":i.iframeFix),0)))},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=t.ui.safeActiveElement(this.document[0]),n=t(e.target);n.closest(i).length||t.ui.safeBlur(i)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),!1===this._trigger("start",e)?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var n=this._uiHash();if(!1===this._trigger("drag",e,n))return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=n.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,n=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(n=t.ui.ddmanager.drop(this,e)),this.dropped&&(n=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!n||"valid"===this.options.revert&&n||!0===this.options.revert||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,n)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){!1!==i._trigger("stop",e)&&i._clear()}):!1!==this._trigger("stop",e)&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return!this.options.handle||!!t(e.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var i=this.options,n=t.isFunction(i.helper),s=n?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),n&&s[0]===this.element[0]&&this._setPositionRelative(),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,n,s=this.options,r=this.document[0];this.relativeContainer=null,s.containment?"window"!==s.containment?"document"!==s.containment?s.containment.constructor!==Array?("parent"===s.containment&&(s.containment=this.helper[0].parentNode),i=t(s.containment),(n=i[0])&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(n.scrollWidth,n.offsetWidth):n.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(n.scrollHeight,n.offsetHeight):n.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i)):this.containment=s.containment:this.containment=[0,0,t(r).width()-this.helperProportions.width-this.margins.left,(t(r).height()||r.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||r.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=null},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,n=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:n?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:n?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,n,s,r,o=this.options,a=this._isRootNode(this.scrollParent[0]),l=t.pageX,u=t.pageY;return a&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(n=this.relativeContainer.offset(),i=[this.containment[0]+n.left,this.containment[1]+n.top,this.containment[2]+n.left,this.containment[3]+n.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(u=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(u=i[3]+this.offset.click.top)),o.grid&&(s=o.grid[1]?this.originalPageY+Math.round((u-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,u=i?s-this.offset.click.top>=i[1]||s-this.offset.click.top>i[3]?s:s-this.offset.click.top>=i[1]?s-o.grid[1]:s+o.grid[1]:s,r=o.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,l=i?r-this.offset.click.left>=i[0]||r-this.offset.click.left>i[2]?r:r-this.offset.click.left>=i[0]?r-o.grid[0]:r+o.grid[0]:r),"y"===o.axis&&(l=this.originalPageX),"x"===o.axis&&(u=this.originalPageY)),{top:u-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:a?0:this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:a?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,i,n){return n=n||this._uiHash(),t.ui.plugin.call(this,e,[i,n,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),n.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,n)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,n){var s=t.extend({},i,{item:n.element});n.sortables=[],t(n.options.connectToSortable).each(function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(n.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,s))})},stop:function(e,i,n){var s=t.extend({},i,{item:n.element});n.cancelHelperRemoval=!1,t.each(n.sortables,function(){this.isOver?(this.isOver=0,n.cancelHelperRemoval=!0,this.cancelHelperRemoval=!1,this._storedCSS={position:this.placeholder.css("position"),top:this.placeholder.css("top"),left:this.placeholder.css("left")},this._mouseStop(e),this.options.helper=this.options._helper):(this.cancelHelperRemoval=!0,this._trigger("deactivate",e,s))})},drag:function(e,i,n){t.each(n.sortables,function(){var s=!1,r=this;r.positionAbs=n.positionAbs,r.helperProportions=n.helperProportions,r.offset.click=n.offset.click,r._intersectsWith(r.containerCache)&&(s=!0,t.each(n.sortables,function(){return this.positionAbs=n.positionAbs,this.helperProportions=n.helperProportions,this.offset.click=n.offset.click,this!==r&&this._intersectsWith(this.containerCache)&&t.contains(r.element[0],this.element[0])&&(s=!1),s})),s?(r.isOver||(r.isOver=1,n._parent=i.helper.parent(),r.currentItem=i.helper.appendTo(r.element).data("ui-sortable-item",!0),r.options._helper=r.options.helper,r.options.helper=function(){return i.helper[0]},e.target=r.currentItem[0],r._mouseCapture(e,!0),r._mouseStart(e,!0,!0),r.offset.click.top=n.offset.click.top,r.offset.click.left=n.offset.click.left,r.offset.parent.left-=n.offset.parent.left-r.offset.parent.left,r.offset.parent.top-=n.offset.parent.top-r.offset.parent.top,n._trigger("toSortable",e),n.dropped=r.element,t.each(n.sortables,function(){this.refreshPositions()}),n.currentItem=n.element,r.fromOutside=n),r.currentItem&&(r._mouseDrag(e),i.position=r.position)):r.isOver&&(r.isOver=0,r.cancelHelperRemoval=!0,r.options._revert=r.options.revert,r.options.revert=!1,r._trigger("out",e,r._uiHash(r)),r._mouseStop(e,!0),r.options.revert=r.options._revert,r.options.helper=r.options._helper,r.placeholder&&r.placeholder.remove(),i.helper.appendTo(n._parent),n._refreshOffsets(e),i.position=n._generatePosition(e,!0),n._trigger("fromSortable",e),n.dropped=!1,t.each(n.sortables,function(){this.refreshPositions()}))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,n){var s=t("body"),r=n.options;s.css("cursor")&&(r._cursor=s.css("cursor")),s.css("cursor",r.cursor)},stop:function(e,i,n){var s=n.options;s._cursor&&t("body").css("cursor",s._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,n){var s=t(i.helper),r=n.options;s.css("opacity")&&(r._opacity=s.css("opacity")),s.css("opacity",r.opacity)},stop:function(e,i,n){var s=n.options;s._opacity&&t(i.helper).css("opacity",s._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,n){var s=n.options,r=!1,o=n.scrollParentNotHidden[0],a=n.document[0];o!==a&&"HTML"!==o.tagName?(s.axis&&"x"===s.axis||(n.overflowOffset.top+o.offsetHeight-e.pageY<s.scrollSensitivity?o.scrollTop=r=o.scrollTop+s.scrollSpeed:e.pageY-n.overflowOffset.top<s.scrollSensitivity&&(o.scrollTop=r=o.scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(n.overflowOffset.left+o.offsetWidth-e.pageX<s.scrollSensitivity?o.scrollLeft=r=o.scrollLeft+s.scrollSpeed:e.pageX-n.overflowOffset.left<s.scrollSensitivity&&(o.scrollLeft=r=o.scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(e.pageY-t(a).scrollTop()<s.scrollSensitivity?r=t(a).scrollTop(t(a).scrollTop()-s.scrollSpeed):t(window).height()-(e.pageY-t(a).scrollTop())<s.scrollSensitivity&&(r=t(a).scrollTop(t(a).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(e.pageX-t(a).scrollLeft()<s.scrollSensitivity?r=t(a).scrollLeft(t(a).scrollLeft()-s.scrollSpeed):t(window).width()-(e.pageX-t(a).scrollLeft())<s.scrollSensitivity&&(r=t(a).scrollLeft(t(a).scrollLeft()+s.scrollSpeed)))),!1!==r&&t.ui.ddmanager&&!s.dropBehaviour&&t.ui.ddmanager.prepareOffsets(n,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,n){var s=n.options;n.snapElements=[],t(s.snap.constructor!==String?s.snap.items||":data(ui-draggable)":s.snap).each(function(){var e=t(this),i=e.offset();this!==n.element[0]&&n.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,n){var s,r,o,a,l,u,c,h,d,p,f=n.options,g=f.snapTolerance,m=i.offset.left,v=m+n.helperProportions.width,_=i.offset.top,b=_+n.helperProportions.height;for(d=n.snapElements.length-1;d>=0;d--)l=n.snapElements[d].left-n.margins.left,u=l+n.snapElements[d].width,c=n.snapElements[d].top-n.margins.top,h=c+n.snapElements[d].height,v<l-g||m>u+g||b<c-g||_>h+g||!t.contains(n.snapElements[d].item.ownerDocument,n.snapElements[d].item)?(n.snapElements[d].snapping&&n.options.snap.release&&n.options.snap.release.call(n.element,e,t.extend(n._uiHash(),{snapItem:n.snapElements[d].item})),n.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(s=Math.abs(c-b)<=g,r=Math.abs(h-_)<=g,o=Math.abs(l-v)<=g,a=Math.abs(u-m)<=g,s&&(i.position.top=n._convertPositionTo("relative",{top:c-n.helperProportions.height,left:0}).top),r&&(i.position.top=n._convertPositionTo("relative",{top:h,left:0}).top),o&&(i.position.left=n._convertPositionTo("relative",{top:0,left:l-n.helperProportions.width}).left),a&&(i.position.left=n._convertPositionTo("relative",{top:0,left:u}).left)),p=s||r||o||a,"outer"!==f.snapMode&&(s=Math.abs(c-_)<=g,r=Math.abs(h-b)<=g,o=Math.abs(l-m)<=g,a=Math.abs(u-v)<=g,s&&(i.position.top=n._convertPositionTo("relative",{top:c,left:0}).top),r&&(i.position.top=n._convertPositionTo("relative",{top:h-n.helperProportions.height,left:0}).top),o&&(i.position.left=n._convertPositionTo("relative",{top:0,left:l}).left),a&&(i.position.left=n._convertPositionTo("relative",{top:0,left:u-n.helperProportions.width}).left)),!n.snapElements[d].snapping&&(s||r||o||a||p)&&n.options.snap.snap&&n.options.snap.snap.call(n.element,e,t.extend(n._uiHash(),{snapItem:n.snapElements[d].item})),n.snapElements[d].snapping=s||r||o||a||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,n){var s,r=n.options,o=t.makeArray(t(r.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});o.length&&(s=parseInt(t(o[0]).css("zIndex"),10)||0,t(o).each(function(e){t(this).css("zIndex",s+e)}),this.css("zIndex",s+o.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,n){var s=t(i.helper),r=n.options;s.css("zIndex")&&(r._zIndex=s.css("zIndex")),s.css("zIndex",r.zIndex)},stop:function(e,i,n){var s=n.options;s._zIndex&&t(i.helper).css("zIndex",s._zIndex)}}),t.ui.draggable,
/*!
 * jQuery UI Resizable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
t.widget("ui.resizable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var n=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return e[n]>0||(e[n]=1,s=e[n]>0,e[n]=0,s)},_create:function(){var e,i=this.options,n=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,e={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(e),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(e),this._proportionallyResize()),this._setupHandles(),i.autoHide&&t(this.element).on("mouseenter",function(){i.disabled||(n._removeClass("ui-resizable-autohide"),n._handles.show())}).on("mouseleave",function(){i.disabled||n.resizing||(n._addClass("ui-resizable-autohide"),n._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles()}},_setupHandles:function(){var e,i,n,s,r,o=this.options,a=this;if(this.handles=o.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),n=this.handles.split(","),this.handles={},i=0;i<n.length;i++)e=t.trim(n[i]),s="ui-resizable-"+e,r=t("<div>"),this._addClass(r,"ui-resizable-handle "+s),r.css({zIndex:o.zIndex}),this.handles[e]=".ui-resizable-"+e,this.element.append(r);this._renderAxis=function(e){var i,n,s,r;for(i in e=e||this.element,this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=t(this.handles[i]),this._on(this.handles[i],{mousedown:a._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(n=t(this.handles[i],this.element),r=/sw|ne|nw|se|n|s/.test(i)?n.outerHeight():n.outerWidth(),s=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(s,r),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){a.resizing||(this.className&&(r=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),a.axis=r&&r[1]?r[1]:"se")}),o.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(e){var i,n,s=!1;for(i in this.handles)((n=t(this.handles[i])[0])===e.target||t.contains(n,e.target))&&(s=!0);return!this.options.disabled&&s},_mouseStart:function(e){var i,n,s,r=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),n=this._num(this.helper.css("top")),r.containment&&(i+=t(r.containment).scrollLeft()||0,n+=t(r.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:n},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:i,top:n},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof r.aspectRatio?r.aspectRatio:this.originalSize.width/this.originalSize.height||1,s=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===s?this.axis+"-resize":s),this._addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,n,s=this.originalMousePosition,r=this.axis,o=e.pageX-s.left||0,a=e.pageY-s.top||0,l=this._change[r];return this._updatePrevProperties(),!!l&&(i=l.apply(this,[e,o,a]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),n=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(n)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1)},_mouseStop:function(e){this.resizing=!1;var i,n,s,r,o,a,l,u=this.options;return this._helper&&(i=this._proportionallyResizeElements,n=i.length&&/textarea/i.test(i[0].nodeName),s=n&&this._hasScroll(i[0],"left")?0:this.sizeDiff.height,r=n?0:this.sizeDiff.width,o={width:this.helper.width()-r,height:this.helper.height()-s},a=parseFloat(this.element.css("left"))+(this.position.left-this.originalPosition.left)||null,l=parseFloat(this.element.css("top"))+(this.position.top-this.originalPosition.top)||null,u.animate||this.element.css(t.extend(o,{top:l,left:a})),this.helper.height(this.size.height),this.helper.width(this.size.width),this._helper&&!u.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,n,s,r,o=this.options;r={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||t)&&(e=r.minHeight*this.aspectRatio,n=r.minWidth/this.aspectRatio,i=r.maxHeight*this.aspectRatio,s=r.maxWidth/this.aspectRatio,e>r.minWidth&&(r.minWidth=e),n>r.minHeight&&(r.minHeight=n),i<r.maxWidth&&(r.maxWidth=i),s<r.maxHeight&&(r.maxHeight=s)),this._vBoundaries=r},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,n=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===n&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===n&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,n=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,s=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,r=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,o=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,a=this.originalPosition.left+this.originalSize.width,l=this.originalPosition.top+this.originalSize.height,u=/sw|nw|w/.test(i),c=/nw|ne|n/.test(i);return r&&(t.width=e.minWidth),o&&(t.height=e.minHeight),n&&(t.width=e.maxWidth),s&&(t.height=e.maxHeight),r&&u&&(t.left=a-e.minWidth),n&&u&&(t.left=a-e.maxWidth),o&&c&&(t.top=l-e.minHeight),s&&c&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],n=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],s=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];e<4;e++)i[e]=parseFloat(n[e])||0,i[e]+=parseFloat(s[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;e<this._proportionallyResizeElements.length;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,n=this.originalPosition;return{left:n.left+e,width:i.width-e}},n:function(t,e,i){var n=this.originalSize,s=this.originalPosition;return{top:s.top+i,height:n.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,n){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,n]))},sw:function(e,i,n){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,n]))},ne:function(e,i,n){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,n]))},nw:function(e,i,n){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,n]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),n=i.options,s=i._proportionallyResizeElements,r=s.length&&/textarea/i.test(s[0].nodeName),o=r&&i._hasScroll(s[0],"left")?0:i.sizeDiff.height,a=r?0:i.sizeDiff.width,l={width:i.size.width-a,height:i.size.height-o},u=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,c=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(l,c&&u?{top:c,left:u}:{}),{duration:n.animateDuration,easing:n.animateEasing,step:function(){var n={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))};s&&s.length&&t(s[0]).css({width:n.width,height:n.height}),i._updateCache(n),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,n,s,r,o,a,l=t(this).resizable("instance"),u=l.options,c=l.element,h=u.containment,d=h instanceof t?h.get(0):/parent/.test(h)?c.parent().get(0):h;d&&(l.containerElement=t(d),/document/.test(h)||h===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(d),i=[],t(["Top","Right","Left","Bottom"]).each(function(t,n){i[t]=l._num(e.css("padding"+n))}),l.containerOffset=e.offset(),l.containerPosition=e.position(),l.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},n=l.containerOffset,s=l.containerSize.height,r=l.containerSize.width,o=l._hasScroll(d,"left")?d.scrollWidth:r,a=l._hasScroll(d)?d.scrollHeight:s,l.parentData={element:d,left:n.left,top:n.top,width:o,height:a}))},resize:function(e){var i,n,s,r,o=t(this).resizable("instance"),a=o.options,l=o.containerOffset,u=o.position,c=o._aspectRatio||e.shiftKey,h={top:0,left:0},d=o.containerElement,p=!0;d[0]!==document&&/static/.test(d.css("position"))&&(h=l),u.left<(o._helper?l.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-l.left:o.position.left-h.left),c&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=a.helper?l.left:0),u.top<(o._helper?l.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-l.top:o.position.top),c&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?l.top:0),s=o.containerElement.get(0)===o.element.parent().get(0),r=/relative|absolute/.test(o.containerElement.css("position")),s&&r?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),i=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-h.left:o.offset.left-l.left)),n=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-h.top:o.offset.top-l.top)),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,c&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),n+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-n,c&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,n=e.containerOffset,s=e.containerPosition,r=e.containerElement,o=t(e.helper),a=o.offset(),l=o.outerWidth()-e.sizeDiff.width,u=o.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(r.css("position"))&&t(this).css({left:a.left-s.left-n.left,width:l,height:u}),e._helper&&!i.animate&&/static/.test(r.css("position"))&&t(this).css({left:a.left-s.left-n.left,width:l,height:u})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance"),i=e.options;t(i.alsoResize).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseFloat(e.width()),height:parseFloat(e.height()),left:parseFloat(e.css("left")),top:parseFloat(e.css("top"))})})},resize:function(e,i){var n=t(this).resizable("instance"),s=n.options,r=n.originalSize,o=n.originalPosition,a={height:n.size.height-r.height||0,width:n.size.width-r.width||0,top:n.position.top-o.top||0,left:n.position.left-o.left||0};t(s.alsoResize).each(function(){var e=t(this),n=t(this).data("ui-resizable-alsoresize"),s={},r=e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(r,function(t,e){var i=(n[e]||0)+(a[e]||0);i&&i>=0&&(s[e]=i||null)}),e.css(s)})},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}),e._addClass(e.ghost,"ui-resizable-ghost"),!1!==t.uiBackCompat&&"string"==typeof e.options.ghost&&e.ghost.addClass(this.options.ghost),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),n=i.options,s=i.size,r=i.originalSize,o=i.originalPosition,a=i.axis,l="number"==typeof n.grid?[n.grid,n.grid]:n.grid,u=l[0]||1,c=l[1]||1,h=Math.round((s.width-r.width)/u)*u,d=Math.round((s.height-r.height)/c)*c,p=r.width+h,f=r.height+d,g=n.maxWidth&&n.maxWidth<p,m=n.maxHeight&&n.maxHeight<f,v=n.minWidth&&n.minWidth>p,_=n.minHeight&&n.minHeight>f;n.grid=l,v&&(p+=u),_&&(f+=c),g&&(p-=u),m&&(f-=c),/^(se|s|e)$/.test(a)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(a)?(i.size.width=p,i.size.height=f,i.position.top=o.top-d):/^(sw)$/.test(a)?(i.size.width=p,i.size.height=f,i.position.left=o.left-h):((f-c<=0||p-u<=0)&&(e=i._getPaddingPlusBorderDimensions(this)),f-c>0?(i.size.height=f,i.position.top=o.top-d):(f=c-e.height,i.size.height=f,i.position.top=o.top+r.height-f),p-u>0?(i.size.width=p,i.position.left=o.left-h):(p=u-e.width,i.size.width=p,i.position.left=o.left+r.width-p))}}),t.ui.resizable,
/*!
 * jQuery UI Dialog 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
t.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;i<0&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),(t=e.parent.children().eq(e.index)).length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&!1!==this._trigger("beforeClose",e)&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,i){var n=!1,s=this.uiDialog.siblings(".ui-front:visible").map(function(){return+t(this).css("z-index")}).get(),r=Math.max.apply(null,s);return r>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",r+1),n=!0),n&&!i&&this._trigger("focus",e),n},open:function(){var e=this;this._isOpen?this._moveToTop()&&this._focusTabbable():(this._isOpen=!0,this.opener=t(t.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"))},_focusTabbable:function(){var t=this._focusedElement;t||(t=this.element.find("[autofocus]")),t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).trigger("focus")},_keepFocus:function(e){function i(){var e=t.ui.safeActiveElement(this.document[0]);this.uiDialog[0]===e||t.contains(this.uiDialog[0],e)||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),void this.close(e);if(e.keyCode===t.ui.keyCode.TAB&&!e.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),n=i.filter(":first"),s=i.filter(":last");e.target!==s[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==n[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(this._delay(function(){s.trigger("focus")}),e.preventDefault()):(this._delay(function(){n.trigger("focus")}),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:t("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(e,"ui-dialog-title"),this._title(e),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title?t.text(this.options.title):t.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?this._removeClass(this.uiDialog,"ui-dialog-buttons"):(t.each(i,function(i,n){var s,r;n=t.isFunction(n)?{click:n,text:i}:n,n=t.extend({type:"button"},n),s=n.click,r={icon:n.icon,iconPosition:n.iconPosition,showLabel:n.showLabel,icons:n.icons,text:n.text},delete n.click,delete n.icon,delete n.iconPosition,delete n.showLabel,delete n.icons,"boolean"==typeof n.text&&delete n.text,t("<button></button>",n).button(r).appendTo(e.uiButtonSet).on("click",function(){s.apply(e.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){var e=this,i=this.options;function n(t){return{position:t.position,offset:t.offset}}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(i,s){e._addClass(t(this),"ui-dialog-dragging"),e._blockFrames(),e._trigger("dragStart",i,n(s))},drag:function(t,i){e._trigger("drag",t,n(i))},stop:function(s,r){var o=r.offset.left-e.document.scrollLeft(),a=r.offset.top-e.document.scrollTop();i.position={my:"left top",at:"left"+(o>=0?"+":"")+o+" top"+(a>=0?"+":"")+a,of:e.window},e._removeClass(t(this),"ui-dialog-dragging"),e._unblockFrames(),e._trigger("dragStop",s,n(r))}})},_makeResizable:function(){var e=this,i=this.options,n=i.resizable,s=this.uiDialog.css("position"),r="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";function o(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:i.maxWidth,maxHeight:i.maxHeight,minWidth:i.minWidth,minHeight:this._minHeight(),handles:r,start:function(i,n){e._addClass(t(this),"ui-dialog-resizing"),e._blockFrames(),e._trigger("resizeStart",i,o(n))},resize:function(t,i){e._trigger("resize",t,o(i))},stop:function(n,s){var r=e.uiDialog.offset(),a=r.left-e.document.scrollLeft(),l=r.top-e.document.scrollTop();i.height=e.uiDialog.height(),i.width=e.uiDialog.width(),i.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" top"+(l>=0?"+":"")+l,of:e.window},e._removeClass(t(this),"ui-dialog-resizing"),e._unblockFrames(),e._trigger("resizeStop",n,o(s))}}).css("position",s)},_trackFocus:function(){this._on(this.widget(),{focusin:function(e){this._makeFocusTarget(),this._focusedElement=t(e.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var e=this._trackingInstances(),i=t.inArray(this,e);-1!==i&&e.splice(i,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances");return t||(t=[],this.document.data("ui-dialog-instances",t)),t},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(e){var i=this,n=!1,s={};t.each(e,function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(n=!0),t in i.resizableRelatedOptions&&(s[t]=e)}),n&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",s)},_setOption:function(e,i){var n,s,r=this.uiDialog;"disabled"!==e&&(this._super(e,i),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:t("<a>").text(""+this.options.closeText).html()}),"draggable"===e&&((n=r.is(":data(ui-draggable)"))&&!i&&r.draggable("destroy"),!n&&i&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&((s=r.is(":data(ui-resizable)"))&&!i&&r.resizable("destroy"),s&&"string"==typeof i&&r.resizable("option","handles",i),s||!1===i||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,n=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),n.minWidth>n.width&&(n.width=n.minWidth),t=this.uiDialog.css({height:"auto",width:n.width}).outerHeight(),e=Math.max(0,n.minHeight-t),i="number"==typeof n.maxHeight?Math.max(0,n.maxHeight-t):"none","auto"===n.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,n.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return!!t(e.target).closest(".ui-dialog").length||!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=!0;this._delay(function(){e=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=t("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data("ui-dialog-overlays")-1;t?this.document.data("ui-dialog-overlays",t):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),!1!==t.uiBackCompat&&t.widget("ui.dialog",t.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(t,e){"dialogClass"===t&&this.uiDialog.removeClass(this.options.dialogClass).addClass(e),this._superApply(arguments)}}),t.ui.dialog,
/*!
 * jQuery UI Droppable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
t.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,n=i.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(n)?n:function(t){return t.is(n)},this.proportions=function(){if(!arguments.length)return e||(e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight});e=arguments[0]},this._addToManager(i.scope),i.addClasses&&this._addClass("ui-droppable")},_addToManager:function(e){t.ui.ddmanager.droppables[e]=t.ui.ddmanager.droppables[e]||[],t.ui.ddmanager.droppables[e].push(this)},_splice:function(t){for(var e=0;e<t.length;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var e=t.ui.ddmanager.droppables[this.options.scope];this._splice(e)},_setOption:function(e,i){if("accept"===e)this.accept=t.isFunction(i)?i:function(t){return t.is(i)};else if("scope"===e){var n=t.ui.ddmanager.droppables[this.options.scope];this._splice(n),this._addToManager(i)}this._super(e,i)},_activate:function(e){var i=t.ui.ddmanager.current;this._addActiveClass(),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this._removeActiveClass(),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._addHoverClass(),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._removeHoverClass(),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var n=i||t.ui.ddmanager.current,s=!1;return!(!n||(n.currentItem||n.element)[0]===this.element[0])&&(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=t(this).droppable("instance");if(i.options.greedy&&!i.options.disabled&&i.options.scope===n.options.scope&&i.accept.call(i.element[0],n.currentItem||n.element)&&_(n,t.extend(i,{offset:i.element.offset()}),i.options.tolerance,e))return s=!0,!1}),!s&&!!this.accept.call(this.element[0],n.currentItem||n.element)&&(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",e,this.ui(n)),this.element))},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}});var v,_=t.ui.intersect=function(){function t(t,e,i){return t>=e&&t<e+i}return function(e,i,n,s){if(!i.offset)return!1;var r=(e.positionAbs||e.position.absolute).left+e.margins.left,o=(e.positionAbs||e.position.absolute).top+e.margins.top,a=r+e.helperProportions.width,l=o+e.helperProportions.height,u=i.offset.left,c=i.offset.top,h=u+i.proportions().width,d=c+i.proportions().height;switch(n){case"fit":return u<=r&&a<=h&&c<=o&&l<=d;case"intersect":return u<r+e.helperProportions.width/2&&a-e.helperProportions.width/2<h&&c<o+e.helperProportions.height/2&&l-e.helperProportions.height/2<d;case"pointer":return t(s.pageY,c,i.proportions().height)&&t(s.pageX,u,i.proportions().width);case"touch":return(o>=c&&o<=d||l>=c&&l<=d||o<c&&l>d)&&(r>=u&&r<=h||a>=u&&a<=h||r<u&&a>h);default:return!1}}}();
/*!
 * jQuery UI Spinner 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
function b(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(e,i){var n,s,r=t.ui.ddmanager.droppables[e.options.scope]||[],o=i?i.type:null,a=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(n=0;n<r.length;n++)if(!(r[n].options.disabled||e&&!r[n].accept.call(r[n].element[0],e.currentItem||e.element))){for(s=0;s<a.length;s++)if(a[s]===r[n].element[0]){r[n].proportions().height=0;continue t}r[n].visible="none"!==r[n].element.css("display"),r[n].visible&&("mousedown"===o&&r[n]._activate.call(r[n],i),r[n].offset=r[n].element.offset(),r[n].proportions({width:r[n].element[0].offsetWidth,height:r[n].element[0].offsetHeight}))}},drop:function(e,i){var n=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&_(e,this,this.options.tolerance,i)&&(n=this._drop.call(this,i)||n),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),n},dragStart:function(e,i){e.element.parentsUntil("body").on("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var n,s,r,o=_(e,this,this.options.tolerance,i),a=!o&&this.isover?"isout":o&&!this.isover?"isover":null;a&&(this.options.greedy&&(s=this.options.scope,(r=this.element.parents(":data(ui-droppable)").filter(function(){return t(this).droppable("instance").options.scope===s})).length&&((n=t(r[0]).droppable("instance")).greedyChild="isover"===a)),n&&"isover"===a&&(n.isover=!1,n.isout=!0,n._out.call(n,i)),this[a]=!0,this["isout"===a?"isover":"isout"]=!1,this["isover"===a?"_over":"_out"].call(this,i),n&&"isout"===a&&(n.isout=!1,n.isover=!0,n._over.call(n,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").off("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}},!1!==t.uiBackCompat&&t.widget("ui.droppable",t.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}}),t.ui.droppable,t.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=t("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()},value:function(t){if(void 0===t)return this.options.value;this.options.value=this._constrainedValue(t),this._refreshValue()},_constrainedValue:function(t){return void 0===t&&(t=this.options.value),this.indeterminate=!1===t,"number"!=typeof t&&(t=0),!this.indeterminate&&Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).width(i.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,e===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}}),t.widget("ui.selectable",t.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e=this;this._addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e.elementPos=t(e.element[0]).offset(),e.selectees=t(e.options.filter,e.element[0]),e._addClass(e.selectees,"ui-selectee"),e.selectees.each(function(){var i=t(this),n=i.offset(),s={left:n.left-e.elementPos.left,top:n.top-e.elementPos.top};t.data(this,"selectable-item",{element:this,$element:i,left:s.left,top:s.top,right:s.left+i.outerWidth(),bottom:s.top+i.outerHeight(),startselected:!1,selected:i.hasClass("ui-selected"),selecting:i.hasClass("ui-selecting"),unselecting:i.hasClass("ui-unselecting")})})},this.refresh(),this._mouseInit(),this.helper=t("<div>"),this._addClass(this.helper,"ui-selectable-helper")},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()},_mouseStart:function(e){var i=this,n=this.options;this.opos=[e.pageX,e.pageY],this.elementPos=t(this.element[0]).offset(),this.options.disabled||(this.selectees=t(n.filter,this.element[0]),this._trigger("start",e),t(n.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),n.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var n=t.data(this,"selectable-item");n.startselected=!0,e.metaKey||e.ctrlKey||(i._removeClass(n.$element,"ui-selected"),n.selected=!1,i._addClass(n.$element,"ui-unselecting"),n.unselecting=!0,i._trigger("unselecting",e,{unselecting:n.element}))}),t(e.target).parents().addBack().each(function(){var n,s=t.data(this,"selectable-item");if(s)return n=!e.metaKey&&!e.ctrlKey||!s.$element.hasClass("ui-selected"),i._removeClass(s.$element,n?"ui-unselecting":"ui-selected")._addClass(s.$element,n?"ui-selecting":"ui-unselecting"),s.unselecting=!n,s.selecting=n,s.selected=n,n?i._trigger("selecting",e,{selecting:s.element}):i._trigger("unselecting",e,{unselecting:s.element}),!1}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,n=this,s=this.options,r=this.opos[0],o=this.opos[1],a=e.pageX,l=e.pageY;return r>a&&(i=a,a=r,r=i),o>l&&(i=l,l=o,o=i),this.helper.css({left:r,top:o,width:a-r,height:l-o}),this.selectees.each(function(){var i=t.data(this,"selectable-item"),u=!1,c={};i&&i.element!==n.element[0]&&(c.left=i.left+n.elementPos.left,c.right=i.right+n.elementPos.left,c.top=i.top+n.elementPos.top,c.bottom=i.bottom+n.elementPos.top,"touch"===s.tolerance?u=!(c.left>a||c.right<r||c.top>l||c.bottom<o):"fit"===s.tolerance&&(u=c.left>r&&c.right<a&&c.top>o&&c.bottom<l),u?(i.selected&&(n._removeClass(i.$element,"ui-selected"),i.selected=!1),i.unselecting&&(n._removeClass(i.$element,"ui-unselecting"),i.unselecting=!1),i.selecting||(n._addClass(i.$element,"ui-selecting"),i.selecting=!0,n._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(n._removeClass(i.$element,"ui-selecting"),i.selecting=!1,n._addClass(i.$element,"ui-selected"),i.selected=!0):(n._removeClass(i.$element,"ui-selecting"),i.selecting=!1,i.startselected&&(n._addClass(i.$element,"ui-unselecting"),i.unselecting=!0),n._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(n._removeClass(i.$element,"ui-selected"),i.selected=!1,n._addClass(i.$element,"ui-unselecting"),i.unselecting=!0,n._trigger("unselecting",e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var n=t.data(this,"selectable-item");i._removeClass(n.$element,"ui-unselecting"),n.unselecting=!1,n.startselected=!1,i._trigger("unselected",e,{unselected:n.element})}),t(".ui-selecting",this.element[0]).each(function(){var n=t.data(this,"selectable-item");i._removeClass(n.$element,"ui-selecting")._addClass(n.$element,"ui-selected"),n.selecting=!1,n.selected=!0,n.startselected=!0,i._trigger("selected",e,{selected:n.element})}),this._trigger("stop",e),this.helper.remove(),!1}}),t.widget("ui.selectmenu",[t.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=t()},_drawButton:function(){var e,i=this,n=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(t){this.button.focus(),t.preventDefault()}}),this.element.hide(),this.button=t("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),e=t("<span>").appendTo(this.button),this._addClass(e,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(n).appendTo(this.button),!1!==this.options.width&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){i._rendered||i._refreshMenu()})},_drawMenu:function(){var e=this;this.menu=t("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=t("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(t,i){t.preventDefault(),e._setSelection(),e._select(i.item.data("ui-selectmenu-item"),t)},focus:function(t,i){var n=i.item.data("ui-selectmenu-item");null!=e.focusIndex&&n.index!==e.focusIndex&&(e._trigger("focus",t,{item:n}),e.isOpen||e._select(n,t)),e.focusIndex=n.index,e.button.attr("aria-activedescendant",e.menuItems.eq(n.index).attr("id"))}}).menu("instance"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton()},_refreshMenu:function(){var t,e=this.element.find("option");this.menu.empty(),this._parseOptions(e),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,e.length&&(t=this._getSelectedItem(),this.menuInstance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(t){this.options.disabled||(this._rendered?(this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",t)))},_position:function(){this.menuWrap.position(t.extend({of:this.button},this.options.position))},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",t))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderButtonItem:function(e){var i=t("<span>");return this._setText(i,e.label),this._addClass(i,"ui-selectmenu-text"),i},_renderMenu:function(e,i){var n=this,s="";t.each(i,function(i,r){var o;r.optgroup!==s&&(o=t("<li>",{text:r.optgroup}),n._addClass(o,"ui-selectmenu-optgroup","ui-menu-divider"+(r.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),o.appendTo(e),s=r.optgroup),n._renderItemData(e,r)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-selectmenu-item",e)},_renderItem:function(e,i){var n=t("<li>"),s=t("<div>",{title:i.element.attr("title")});return i.disabled&&this._addClass(n,null,"ui-state-disabled"),this._setText(s,i.label),n.append(s).appendTo(e)},_setText:function(t,e){e?t.text(e):t.html("&#160;")},_move:function(t,e){var i,n,s=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex).parent("li"):(i=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),s+=":not(.ui-state-disabled)"),(n="first"===t||"last"===t?i["first"===t?"prevAll":"nextAll"](s).eq(-1):i[t+"All"](s).eq(0)).length&&this.menuInstance.focus(e,n)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")},_toggle:function(t){this[this.isOpen?"close":"open"](t)},_setSelection:function(){var t;this.range&&(window.getSelection?((t=window.getSelection()).removeAllRanges(),t.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(e){this.isOpen&&(t(e.target).closest(".ui-selectmenu-menu, #"+t.ui.escapeSelector(this.ids.button)).length||this.close(e))}},_buttonEvents:{mousedown:function(){var t;window.getSelection?(t=window.getSelection()).rangeCount&&(this.range=t.getRangeAt(0)):this.range=document.selection.createRange()},click:function(t){this._setSelection(),this._toggle(t)},keydown:function(e){var i=!0;switch(e.keyCode){case t.ui.keyCode.TAB:case t.ui.keyCode.ESCAPE:this.close(e),i=!1;break;case t.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(e);break;case t.ui.keyCode.UP:e.altKey?this._toggle(e):this._move("prev",e);break;case t.ui.keyCode.DOWN:e.altKey?this._toggle(e):this._move("next",e);break;case t.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(e):this._toggle(e);break;case t.ui.keyCode.LEFT:this._move("prev",e);break;case t.ui.keyCode.RIGHT:this._move("next",e);break;case t.ui.keyCode.HOME:case t.ui.keyCode.PAGE_UP:this._move("first",e);break;case t.ui.keyCode.END:case t.ui.keyCode.PAGE_DOWN:this._move("last",e);break;default:this.menu.trigger(e),i=!1}i&&e.preventDefault()}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex).parent("li");e.hasClass("ui-state-disabled")||this._select(e.data("ui-selectmenu-item"),t)},_select:function(t,e){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=t.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(t)),this._setAria(t),this._trigger("select",e,{item:t}),t.index!==i&&this._trigger("change",e,{item:t}),this.close(e)},_setAria:function(t){var e=this.menuItems.eq(t.index).attr("id");this.button.attr({"aria-labelledby":e,"aria-activedescendant":e}),this.menu.attr("aria-activedescendant",e)},_setOption:function(t,e){if("icons"===t){var i=this.button.find("span.ui-icon");this._removeClass(i,null,this.options.icons.button)._addClass(i,null,e.button)}this._super(t,e),"appendTo"===t&&this.menuWrap.appendTo(this._appendTo()),"width"===t&&this._resizeButton()},_setOptionDisabled:function(t){this._super(t),this.menuInstance.option("disabled",t),this.button.attr("aria-disabled",t),this._toggleClass(this.button,null,"ui-state-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var t=this.options.width;!1!==t?(null===t&&(t=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(t)):this.button.css("width","")},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){var t=this._super();return t.disabled=this.element.prop("disabled"),t},_parseOptions:function(e){var i=this,n=[];e.each(function(e,s){n.push(i._parseOption(t(s),e))}),this.items=n},_parseOption:function(t,e){var i=t.parent("optgroup");return{element:t,index:e,value:t.val(),label:t.text(),optgroup:i.attr("label")||"",disabled:i.prop("disabled")||t.prop("disabled")}},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element)}}]),t.widget("ui.slider",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,n=this.options,s=this.element.find(".ui-slider-handle"),r=[];for(i=n.values&&n.values.length||1,s.length>i&&(s.slice(i).remove(),s=s.slice(0,i)),e=s.length;e<i;e++)r.push("<span tabindex='0'></span>");this.handles=s.add(t(r.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e).attr("tabIndex",0)})},_createRange:function(){var e=this.options;e.range?(!0===e.range&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=t("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),"min"!==e.range&&"max"!==e.range||this._addClass(this.range,"ui-slider-range-"+e.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(e){var i,n,s,r,o,a,l,u=this,c=this.options;return!c.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(i),s=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(n-u.values(e));(s>i||s===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(s=i,r=t(this),o=e)}),!1!==this._start(e,o)&&(this._mouseSliding=!0,this._handleIndex=o,this._addClass(r,null,"ui-state-active"),r.trigger("focus"),a=r.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-a.left-r.width()/2,top:e.pageY-a.top-r.height()/2-(parseInt(r.css("borderTopWidth"),10)||0)-(parseInt(r.css("borderBottomWidth"),10)||0)+(parseInt(r.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,n),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,n,s,r;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),(n=i/e)>1&&(n=1),n<0&&(n=0),"vertical"===this.orientation&&(n=1-n),s=this._valueMax()-this._valueMin(),r=this._valueMin()+n*s,this._trimAlignValue(r)},_uiHash:function(t,e,i){var n={handle:this.handles[t],handleIndex:t,value:void 0!==e?e:this.value()};return this._hasMultipleValues()&&(n.value=void 0!==e?e:this.values(t),n.values=i||this.values()),n},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(t,e){return this._trigger("start",t,this._uiHash(e))},_slide:function(t,e,i){var n,s=this.value(),r=this.values();this._hasMultipleValues()&&(n=this.values(e?0:1),s=this.values(e),2===this.options.values.length&&!0===this.options.range&&(i=0===e?Math.min(n,i):Math.max(n,i)),r[e]=i),i!==s&&!1!==this._trigger("slide",t,this._uiHash(e,i,r))&&(this._hasMultipleValues()?this.values(e,i):this.value(i))},_stop:function(t,e){this._trigger("stop",t,this._uiHash(e))},_change:function(t,e){this._keySliding||this._mouseSliding||(this._lastChangedValue=e,this._trigger("change",t,this._uiHash(e)))},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),void this._change(null,0)):this._value()},values:function(e,i){var n,s,r;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),void this._change(null,e);if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this._hasMultipleValues()?this._values(e):this.value();for(n=this.options.values,s=arguments[0],r=0;r<n.length;r+=1)n[r]=this._trimAlignValue(s[r]),this._change(null,r);this._refreshValue()},_setOption:function(e,i){var n,s=0;switch("range"===e&&!0===this.options.range&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(s=this.options.values.length),this._super(e,i),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(i),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),n=s-1;n>=0;n--)this._change(null,n);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(t){this._super(t),this._toggleClass(null,"ui-state-disabled",!!t)},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,n;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this._hasMultipleValues()){for(i=this.options.values.slice(),n=0;n<i.length;n+=1)i[n]=this._trimAlignValue(i[n]);return i}return[]},_trimAlignValue:function(t){if(t<=this._valueMin())return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,n=t-i;return 2*Math.abs(i)>=e&&(n+=i>0?e:-e),parseFloat(n.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step,n=Math.round((t-e)/i)*i;(t=n+e)>this.options.max&&(t-=i),this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=t.toString(),i=e.indexOf(".");return-1===i?0:e.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(t){"vertical"===t&&this.range.css({width:"",left:""}),"horizontal"===t&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var e,i,n,s,r,o=this.options.range,a=this.options,l=this,u=!this._animateOff&&a.animate,c={};this._hasMultipleValues()?this.handles.each(function(n){i=(l.values(n)-l._valueMin())/(l._valueMax()-l._valueMin())*100,c["horizontal"===l.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[u?"animate":"css"](c,a.animate),!0===l.options.range&&("horizontal"===l.orientation?(0===n&&l.range.stop(1,1)[u?"animate":"css"]({left:i+"%"},a.animate),1===n&&l.range[u?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:a.animate})):(0===n&&l.range.stop(1,1)[u?"animate":"css"]({bottom:i+"%"},a.animate),1===n&&l.range[u?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:a.animate}))),e=i}):(n=this.value(),s=this._valueMin(),r=this._valueMax(),i=r!==s?(n-s)/(r-s)*100:0,c["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[u?"animate":"css"](c,a.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[u?"animate":"css"]({width:i+"%"},a.animate),"max"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[u?"animate":"css"]({width:100-i+"%"},a.animate),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[u?"animate":"css"]({height:i+"%"},a.animate),"max"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[u?"animate":"css"]({height:100-i+"%"},a.animate))},_handleEvents:{keydown:function(e){var i,n,s,r=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(t(e.target),null,"ui-state-active"),!1===this._start(e,r)))return}switch(s=this.options.step,i=n=this._hasMultipleValues()?this.values(r):this.value(),e.keyCode){case t.ui.keyCode.HOME:n=this._valueMin();break;case t.ui.keyCode.END:n=this._valueMax();break;case t.ui.keyCode.PAGE_UP:n=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(i===this._valueMax())return;n=this._trimAlignValue(i+s);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i===this._valueMin())return;n=this._trimAlignValue(i-s)}this._slide(e,r,n)},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),this._removeClass(t(e.target),null,"ui-state-active"))}}}),t.widget("ui.sortable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return t>=e&&t<e+i},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){var e=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),t.each(this.items,function(){e._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(e,i){var n=null,s=!1,r=this;return!(this.reverting||this.options.disabled||"static"===this.options.type||(this._refreshItems(e),t(e.target).parents().each(function(){if(t.data(this,r.widgetName+"-item")===r)return n=t(this),!1}),t.data(e.target,r.widgetName+"-item")===r&&(n=t(e.target)),!n||this.options.handle&&!i&&(t(this.options.handle,n).find("*").addBack().each(function(){this===e.target&&(s=!0)}),!s)||(this.currentItem=n,this._removeCurrentsFromItems(),0)))},_mouseStart:function(e,i,n){var s,r,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(r=this.document.find("body"),this.storedCursor=r.css("cursor"),r.css("cursor",o.cursor),this.storedStylesheet=t("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(r)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!n)for(s=this.containers.length-1;s>=0;s--)this.containers[s]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,n,s,r,o=this.options,a=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=a=this.scrollParent[0].scrollTop+o.scrollSpeed:e.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=a=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=a=this.scrollParent[0].scrollLeft+o.scrollSpeed:e.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=a=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(e.pageY-this.document.scrollTop()<o.scrollSensitivity?a=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed):this.window.height()-(e.pageY-this.document.scrollTop())<o.scrollSensitivity&&(a=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed)),e.pageX-this.document.scrollLeft()<o.scrollSensitivity?a=this.document.scrollLeft(this.document.scrollLeft()-o.scrollSpeed):this.window.width()-(e.pageX-this.document.scrollLeft())<o.scrollSensitivity&&(a=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed))),!1!==a&&t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(n=this.items[i],s=n.item[0],(r=this._intersectsWithPointer(n))&&n.instance===this.currentContainer&&!(s===this.currentItem[0]||this.placeholder[1===r?"next":"prev"]()[0]===s||t.contains(this.placeholder[0],s)||"semi-dynamic"===this.options.type&&t.contains(this.element[0],s))){if(this.direction=1===r?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(n))break;this._rearrange(e,n),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var n=this,s=this.placeholder.offset(),r=this.options.axis,o={};r&&"x"!==r||(o.left=s.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),r&&"y"!==r||(o.top=s.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){n._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp(new t.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),n=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&n.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!n.length&&e.key&&n.push(e.key+"="),n.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),n=[];return e=e||{},i.each(function(){n.push(t(e.item||this).attr(e.attribute||"id")||"")}),n},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,n=this.positionAbs.top,s=n+this.helperProportions.height,r=t.left,o=r+t.width,a=t.top,l=a+t.height,u=this.offset.click.top,c=this.offset.click.left,h="x"===this.options.axis||n+u>a&&n+u<l,d="y"===this.options.axis||e+c>r&&e+c<o,p=h&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:r<e+this.helperProportions.width/2&&i-this.helperProportions.width/2<o&&a<n+this.helperProportions.height/2&&s-this.helperProportions.height/2<l},_intersectsWithPointer:function(t){var e,i,n="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),s="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),r=n&&s;return!!r&&(e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection(),this.floating?"right"===i||"down"===e?2:1:e&&("down"===e?2:1))},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),n=this._getDragVerticalDirection(),s=this._getDragHorizontalDirection();return this.floating&&s?"right"===s&&i||"left"===s&&!i:n&&("down"===n&&e||"up"===n&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){var i,n,s,r,o=[],a=[],l=this._connectWith();if(l&&e)for(i=l.length-1;i>=0;i--)for(s=t(l[i],this.document[0]),n=s.length-1;n>=0;n--)(r=t.data(s[n],this.widgetFullName))&&r!==this&&!r.options.disabled&&a.push([t.isFunction(r.options.items)?r.options.items.call(r.element):t(r.options.items,r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),r]);function u(){o.push(this)}for(a.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),i=a.length-1;i>=0;i--)a[i][0].each(u);return t(o)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;i<e.length;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,n,s,r,o,a,l,u,c=this.items,h=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(s=t(d[i],this.document[0]),n=s.length-1;n>=0;n--)(r=t.data(s[n],this.widgetFullName))&&r!==this&&!r.options.disabled&&(h.push([t.isFunction(r.options.items)?r.options.items.call(r.element[0],e,{item:this.currentItem}):t(r.options.items,r.element),r]),this.containers.push(r));for(i=h.length-1;i>=0;i--)for(o=h[i][1],a=h[i][0],n=0,u=a.length;n<u;n++)(l=t(a[n])).data(this.widgetName+"-item",o),c.push({item:l,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(e){var i,n,s,r;for(this.floating=!!this.items.length&&("x"===this.options.axis||this._isFloating(this.items[0].item)),this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset()),i=this.items.length-1;i>=0;i--)(n=this.items[i]).instance!==this.currentContainer&&this.currentContainer&&n.item[0]!==this.currentItem[0]||(s=this.options.toleranceElement?t(this.options.toleranceElement,n.item):n.item,e||(n.width=s.outerWidth(),n.height=s.outerHeight()),r=s.offset(),n.left=r.left,n.top=r.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)r=this.containers[i].element.offset(),this.containers[i].containerCache.left=r.left,this.containers[i].containerCache.top=r.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){var i,n=(e=e||this).options;n.placeholder&&n.placeholder.constructor!==String||(i=n.placeholder,n.placeholder={element:function(){var n=e.currentItem[0].nodeName.toLowerCase(),s=t("<"+n+">",e.document[0]);return e._addClass(s,"ui-sortable-placeholder",i||e.currentItem[0].className)._removeClass(s,"ui-sortable-helper"),"tbody"===n?e._createTrPlaceholder(e.currentItem.find("tr").eq(0),t("<tr>",e.document[0]).appendTo(s)):"tr"===n?e._createTrPlaceholder(e.currentItem,s):"img"===n&&s.attr("src",e.currentItem.attr("src")),i||s.css("visibility","hidden"),s},update:function(t,s){i&&!n.forcePlaceholderSize||(s.height()||s.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),s.width()||s.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(n.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),n.placeholder.update(e,e.placeholder)},_createTrPlaceholder:function(e,i){var n=this;e.children().each(function(){t("<td>&#160;</td>",n.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(e){var i,n,s,r,o,a,l,u,c,h,d=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!t.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(d&&t.contains(this.containers[i].element[0],d.element[0]))continue;d=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",e,this._uiHash(this)),this.containers[i].containerCache.over=0);if(d)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(s=1e4,r=null,c=d.floating||this._isFloating(this.currentItem),o=c?"left":"top",a=c?"width":"height",h=c?"pageX":"pageY",n=this.items.length-1;n>=0;n--)t.contains(this.containers[p].element[0],this.items[n].item[0])&&this.items[n].item[0]!==this.currentItem[0]&&(l=this.items[n].item.offset()[o],u=!1,e[h]-l>this.items[n][a]/2&&(u=!0),Math.abs(e[h]-l)<s&&(s=Math.abs(e[h]-l),r=this.items[n],this.direction=u?"up":"down"));if(!r&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return void(this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash()),this.currentContainer.containerCache.over=1));r?this._rearrange(e,r,null,!0):this._rearrange(e,null,this.containers[p].element,!0),this._trigger("change",e,this._uiHash()),this.containers[p]._trigger("change",e,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(e){var i=this.options,n=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return n.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(n[0]),n[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),n[0].style.width&&!i.forceHelperSize||n.width(this.currentItem.width()),n[0].style.height&&!i.forceHelperSize||n.height(this.currentItem.height()),n},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,n,s=this.options;"parent"===s.containment&&(s.containment=this.helper[0].parentNode),"document"!==s.containment&&"window"!==s.containment||(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===s.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===s.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(s.containment)||(e=t(s.containment)[0],i=t(s.containment).offset(),n="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(n?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(n?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var n="absolute"===e?1:-1,s="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,r=/(html|body)/i.test(s[0].tagName);return{top:i.top+this.offset.relative.top*n+this.offset.parent.top*n-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():r?0:s.scrollTop())*n,left:i.left+this.offset.relative.left*n+this.offset.parent.left*n-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():r?0:s.scrollLeft())*n}},_generatePosition:function(e){var i,n,s=this.options,r=e.pageX,o=e.pageY,a="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,l=/(html|body)/i.test(a[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(r=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(r=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),s.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/s.grid[1])*s.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-s.grid[1]:i+s.grid[1]:i,n=this.originalPageX+Math.round((r-this.originalPageX)/s.grid[0])*s.grid[0],r=this.containment?n-this.offset.click.left>=this.containment[0]&&n-this.offset.click.left<=this.containment[2]?n:n-this.offset.click.left>=this.containment[0]?n-s.grid[0]:n+s.grid[0]:n)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():l?0:a.scrollTop()),left:r-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():l?0:a.scrollLeft())}},_rearrange:function(t,e,i,n){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var s=this.counter;this._delay(function(){s===this.counter&&this.refreshPositions(!n)})},_clear:function(t,e){this.reverting=!1;var i,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(i in this._storedCSS)"auto"!==this._storedCSS[i]&&"static"!==this._storedCSS[i]||(this._storedCSS[i]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();function s(t,e,i){return function(n){i._trigger(t,n,e._uiHash(e))}}for(this.fromOutside&&!e&&n.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||n.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(n.push(function(t){this._trigger("remove",t,this._uiHash())}),n.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),i=this.containers.length-1;i>=0;i--)e||n.push(s("deactivate",this,this.containers[i])),this.containers[i].containerCache.over&&(n.push(s("out",this,this.containers[i])),this.containers[i].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(i=0;i<n.length;i++)n[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){!1===t.Widget.prototype._trigger.apply(this,arguments)&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}}),t.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e=this._super(),i=this.element;return t.each(["min","max","step"],function(t,n){var s=i.attr(n);null!=s&&s.length&&(e[n]=s)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){this.cancelBlur?delete this.cancelBlur:(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",t))},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){var i;function n(){this.element[0]===t.ui.safeActiveElement(this.document[0])||(this.element.trigger("focus"),this.previous=i,this._delay(function(){this.previous=i}))}i=this.element[0]===t.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),e.preventDefault(),n.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,n.call(this)}),!1!==this._start(e)&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){if(t(e.currentTarget).hasClass("ui-state-active"))return!1!==this._start(e)&&void this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),this.buttons.height()>Math.ceil(.5*this.uiSpinner.height())&&this.uiSpinner.height()>0&&this.uiSpinner.height(this.uiSpinner.height())},_keydown:function(e){var i=this.options,n=t.ui.keyCode;switch(e.keyCode){case n.UP:return this._repeat(null,1,e),!0;case n.DOWN:return this._repeat(null,-1,e),!0;case n.PAGE_UP:return this._repeat(null,i.page,e),!0;case n.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_start:function(t){return!(!this.spinning&&!1===this._trigger("start",t)||(this.counter||(this.counter=1),this.spinning=!0,0))},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&!1===this._trigger("spin",e,{value:i})||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=t.toString(),i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,n=this.options;return i=t-(e=null!==n.min?n.min:0),t=e+(i=Math.round(i/n.step)*n.step),t=parseFloat(t.toFixed(this._precision())),null!==n.max&&t>n.max?n.max:null!==n.min&&t<n.min?n.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){var i,n,s;if("culture"===t||"numberFormat"===t)return i=this._parse(this.element.val()),this.options[t]=e,void this.element.val(this._format(i));"max"!==t&&"min"!==t&&"step"!==t||"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(n=this.buttons.first().find(".ui-icon"),this._removeClass(n,null,this.options.icons.up),this._addClass(n,null,e.up),s=this.buttons.last().find(".ui-icon"),this._removeClass(s,null,this.options.icons.down),this._addClass(s,null,e.down)),this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable")},_setOptions:b(function(t){this._super(t)}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var t=this.value();return null!==t&&t===this._adjustValue(t)},_value:function(t,e){var i;""!==t&&null!==(i=this._parse(t))&&(e||(i=this._adjustValue(i)),t=this._format(i)),this.element.val(t),this._refresh()},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:b(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:b(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:b(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:b(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){if(!arguments.length)return this._parse(this.element.val());b(this._value).call(this,t)},widget:function(){return this.uiSpinner}}),!1!==t.uiBackCompat&&t.widget("ui.spinner",t.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())},_uiSpinnerHtml:function(){return"<span>"},_buttonHtml:function(){return"<a></a><a></a>"}}),t.ui.spinner,
/*!
 * jQuery UI Tabs 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
t.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:(v=/#.*$/,function(t){var e,i;e=t.href.replace(v,""),i=location.href.replace(v,"");try{e=decodeURIComponent(e)}catch(t){}try{i=decodeURIComponent(i)}catch(t){}return t.hash.length>1&&e===i}),_create:function(){var e=this,i=this.options;this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,i.collapsible),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),!1!==this.options.active&&this.anchors.length?this.active=this._findActive(i.active):this.active=t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var e=this.options.active,i=this.options.collapsible,n=location.hash.substring(1);return null===e&&(n&&this.tabs.each(function(i,s){if(t(s).attr("aria-controls")===n)return e=i,!1}),null===e&&(e=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),null!==e&&-1!==e||(e=!!this.tabs.length&&0)),!1!==e&&-1===(e=this.tabs.index(this.tabs.eq(e)))&&(e=!i&&0),!i&&!1===e&&this.anchors.length&&(e=0),e},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(e){var i=t(t.ui.safeActiveElement(this.document[0])).closest("li"),n=this.tabs.index(i),s=!0;if(!this._handlePageNav(e)){switch(e.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:n++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:s=!1,n--;break;case t.ui.keyCode.END:n=this.anchors.length-1;break;case t.ui.keyCode.HOME:n=0;break;case t.ui.keyCode.SPACE:return e.preventDefault(),clearTimeout(this.activating),void this._activate(n);case t.ui.keyCode.ENTER:return e.preventDefault(),clearTimeout(this.activating),void this._activate(n!==this.options.active&&n);default:return}e.preventDefault(),clearTimeout(this.activating),n=this._focusNextTab(n,s),e.ctrlKey||e.metaKey||(i.attr("aria-selected","false"),this.tabs.eq(n).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",n)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.trigger("focus"))},_handlePageNav:function(e){return e.altKey&&e.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):e.altKey&&e.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(e,i){for(var n=this.tabs.length-1;-1!==t.inArray((e>n&&(e=0),e<0&&(e=n),e),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).trigger("focus"),t},_setOption:function(t,e){"active"!==t?(this._super(t,e),"collapsible"===t&&(this._toggleClass("ui-tabs-collapsible",null,e),e||!1!==this.options.active||this._activate(0)),"event"===t&&this._setupEvents(e),"heightStyle"===t&&this._setupHeightStyle(e)):this._activate(e)},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),!1!==e.active&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this,i=this.tabs,n=this.anchors,s=this.panels;this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),this.tablist.on("mousedown"+this.eventNamespace,"> li",function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).attr({role:"presentation",tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=t(),this.anchors.each(function(i,n){var s,r,o,a=t(n).uniqueId().attr("id"),l=t(n).closest("li"),u=l.attr("aria-controls");e._isLocal(n)?(o=(s=n.hash).substring(1),r=e.element.find(e._sanitizeSelector(s))):(s="#"+(o=l.attr("aria-controls")||t({}).uniqueId()[0].id),(r=e.element.find(s)).length||(r=e._createPanel(o)).insertAfter(e.panels[i-1]||e.tablist),r.attr("aria-live","polite")),r.length&&(e.panels=e.panels.add(r)),u&&l.data("ui-tabs-aria-controls",u),l.attr({"aria-controls":o,"aria-labelledby":a}),r.attr("aria-labelledby",a)}),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),i&&(this._off(i.not(this.tabs)),this._off(n.not(this.anchors)),this._off(s.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).data("ui-tabs-destroy",!0)},_setOptionDisabled:function(e){var i,n,s;for(t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1),s=0;n=this.tabs[s];s++)i=t(n),!0===e||-1!==t.inArray(s,e)?(i.attr("aria-disabled","true"),this._addClass(i,null,"ui-state-disabled")):(i.removeAttr("aria-disabled"),this._removeClass(i,null,"ui-state-disabled"));this.options.disabled=e,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!0===e)},_setupEvents:function(e){var i={};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,n=this.element.parent();"fill"===e?(i=n.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),n=e.css("position");"absolute"!==n&&"fixed"!==n&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,n=this.active,s=t(e.currentTarget).closest("li"),r=s[0]===n[0],o=r&&i.collapsible,a=o?t():this._getPanelForTab(s),l=n.length?this._getPanelForTab(n):t(),u={oldTab:n,oldPanel:l,newTab:o?t():s,newPanel:a};e.preventDefault(),s.hasClass("ui-state-disabled")||s.hasClass("ui-tabs-loading")||this.running||r&&!i.collapsible||!1===this._trigger("beforeActivate",e,u)||(i.active=!o&&this.tabs.index(s),this.active=r?t():s,this.xhr&&this.xhr.abort(),l.length||a.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),a.length&&this.load(this.tabs.index(s),e),this._toggle(e,u))},_toggle:function(e,i){var n=this,s=i.newPanel,r=i.oldPanel;function o(){n.running=!1,n._trigger("activate",e,i)}function a(){n._addClass(i.newTab.closest("li"),"ui-tabs-active","ui-state-active"),s.length&&n.options.show?n._show(s,n.options.show,o):(s.show(),o())}this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){n._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),a()}):(this._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),r.hide(),a()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),s.length&&r.length?i.oldTab.attr("tabIndex",-1):s.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),s.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(e){var i,n=this._findActive(e);n[0]!==this.active[0]&&(n.length||(n=this.active),i=n.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return!1===e?t():this.tabs.eq(e)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+t.ui.escapeSelector(e)+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(e){var i=this.options.disabled;!1!==i&&(void 0===e?i=!1:(e=this._getIndex(e),i=t.isArray(i)?t.map(i,function(t){return t!==e?t:null}):t.map(this.tabs,function(t,i){return i!==e?i:null})),this._setOptionDisabled(i))},disable:function(e){var i=this.options.disabled;if(!0!==i){if(void 0===e)i=!0;else{if(e=this._getIndex(e),-1!==t.inArray(e,i))return;i=t.isArray(i)?t.merge([e],i).sort():[e]}this._setOptionDisabled(i)}},load:function(e,i){e=this._getIndex(e);var n=this,s=this.tabs.eq(e),r=s.find(".ui-tabs-anchor"),o=this._getPanelForTab(s),a={tab:s,panel:o},l=function(t,e){"abort"===e&&n.panels.stop(!1,!0),n._removeClass(s,"ui-tabs-loading"),o.removeAttr("aria-busy"),t===n.xhr&&delete n.xhr};this._isLocal(r[0])||(this.xhr=t.ajax(this._ajaxSettings(r,i,a)),this.xhr&&"canceled"!==this.xhr.statusText&&(this._addClass(s,"ui-tabs-loading"),o.attr("aria-busy","true"),this.xhr.done(function(t,e,s){setTimeout(function(){o.html(t),n._trigger("load",i,a),l(s,e)},1)}).fail(function(t,e){setTimeout(function(){l(t,e)},1)})))},_ajaxSettings:function(e,i,n){var s=this;return{url:e.attr("href").replace(/#.*$/,""),beforeSend:function(e,r){return s._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:r},n))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),!1!==t.uiBackCompat&&t.widget("ui.tabs",t.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab")}}),t.ui.tabs,
/*!
 * jQuery UI Tooltip 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
t.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(e,i){var n=(e.attr("aria-describedby")||"").split(/\s+/);n.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(n.join(" ")))},_removeDescribedBy:function(e){var i=e.data("ui-tooltip-id"),n=(e.attr("aria-describedby")||"").split(/\s+/),s=t.inArray(i,n);-1!==s&&n.splice(s,1),e.removeData("ui-tooltip-id"),(n=t.trim(n.join(" ")))?e.attr("aria-describedby",n):e.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=t([])},_setOption:function(e,i){var n=this;this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){n._updateContent(e.element)})},_setOptionDisabled:function(t){this[t?"_disable":"_enable"]()},_disable:function(){var e=this;t.each(this.tooltips,function(i,n){var s=t.Event("blur");s.target=s.currentTarget=n.element[0],e.close(s,!0)}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var e=t(this);if(e.is("[title]"))return e.data("ui-tooltip-title",e.attr("title")).removeAttr("title")}))},_enable:function(){this.disabledTitles.each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))}),this.disabledTitles=t([])},open:function(e){var i=this,n=t(e?e.target:this.element).closest(this.options.items);n.length&&!n.data("ui-tooltip-id")&&(n.attr("title")&&n.data("ui-tooltip-title",n.attr("title")),n.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&n.parents().each(function(){var e,n=t(this);n.data("ui-tooltip-open")&&((e=t.Event("blur")).target=e.currentTarget=this,i.close(e,!0)),n.attr("title")&&(n.uniqueId(),i.parents[this.id]={element:this,title:n.attr("title")},n.attr("title",""))}),this._registerCloseHandlers(e,n),this._updateContent(n,e))},_updateContent:function(t,e){var i,n=this.options.content,s=this,r=e?e.type:null;if("string"==typeof n||n.nodeType||n.jquery)return this._open(e,t,n);(i=n.call(t[0],function(i){s._delay(function(){t.data("ui-tooltip-open")&&(e&&(e.type=r),this._open(e,t,i))})}))&&this._open(e,t,i)},_open:function(e,i,n){var s,r,o,a,l=t.extend({},this.options.position);function u(t){l.of=t,r.is(":hidden")||r.position(l)}n&&((s=this._find(i))?s.tooltip.find(".ui-tooltip-content").html(n):(i.is("[title]")&&(e&&"mouseover"===e.type?i.attr("title",""):i.removeAttr("title")),s=this._tooltip(i),r=s.tooltip,this._addDescribedBy(i,r.attr("id")),r.find(".ui-tooltip-content").html(n),this.liveRegion.children().hide(),(a=t("<div>").html(r.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"),a.removeAttr("id").find("[id]").removeAttr("id"),a.appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:u}),u(e)):r.position(t.extend({of:i},this.options.position)),r.hide(),this._show(r,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(o=this.delayedShow=setInterval(function(){r.is(":visible")&&(u(l.of),clearInterval(o))},t.fx.interval)),this._trigger("open",e,{tooltip:r})))},_registerCloseHandlers:function(e,i){var n={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var n=t.Event(e);n.currentTarget=i[0],this.close(n,!0)}}};i[0]!==this.element[0]&&(n.remove=function(){this._removeTooltip(this._find(i).tooltip)}),e&&"mouseover"!==e.type||(n.mouseleave="close"),e&&"focusin"!==e.type||(n.focusout="close"),this._on(!0,i,n)},close:function(e){var i,n=this,s=t(e?e.currentTarget:this.element),r=this._find(s);r?(i=r.tooltip,r.closing||(clearInterval(this.delayedShow),s.data("ui-tooltip-title")&&!s.attr("title")&&s.attr("title",s.data("ui-tooltip-title")),this._removeDescribedBy(s),r.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){n._removeTooltip(t(this))}),s.removeData("ui-tooltip-open"),this._off(s,"mouseleave focusout keyup"),s[0]!==this.element[0]&&this._off(s,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete n.parents[e]}),r.closing=!0,this._trigger("close",e,{tooltip:i}),r.hiding||(r.closing=!1))):s.removeData("ui-tooltip-open")},_tooltip:function(e){var i=t("<div>").attr("role","tooltip"),n=t("<div>").appendTo(i),s=i.uniqueId().attr("id");return this._addClass(n,"ui-tooltip-content"),this._addClass(i,"ui-tooltip","ui-widget ui-widget-content"),i.appendTo(this._appendTo(e)),this.tooltips[s]={element:e,tooltip:i}},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_appendTo:function(t){var e=t.closest(".ui-front, dialog");return e.length||(e=this.document[0].body),e},_destroy:function(){var e=this;t.each(this.tooltips,function(i,n){var s=t.Event("blur"),r=n.element;s.target=s.currentTarget=r[0],e.close(s,!0),t("#"+i).remove(),r.data("ui-tooltip-title")&&(r.attr("title")||r.attr("title",r.data("ui-tooltip-title")),r.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}}),!1!==t.uiBackCompat&&t.widget("ui.tooltip",t.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var t=this._superApply(arguments);return this.options.tooltipClass&&t.tooltip.addClass(this.options.tooltipClass),t}}),t.ui.tooltip})?n.apply(e,s):n)||(t.exports=r)},function(t,e,i){i(0);t.exports={init:function(){window.editorobj=tinymce,window.editorobj.init({selector:"#txtAJKrypInWriteContent",menubar:!1,toolbar:"undo redo | styleselect | bold italic | link image"})},clear:function(){window.editorobj.activeEditor.setContent("")}}},function(t,e){t.exports={init:function(){this.cacheDom()},cacheDom:function(){this.$bb_aj_MainKrypinSkinContainer=$(".aj_bb_KrypinSkin"),this.$bb_aj_ModalMainContainer=$("#bb_aj_GenericModalContainer")},closeModal:function(){this.$bb_aj_ModalMainContainer.fadeOut("slow")},openInModal:function(){this.$bb_aj_ModalMainContainer.fadeIn("slow")}}},function(t,e,i){var n=i(13),s=i(1),r=i(0);r(function(){var t=s.config;t.userinfo.userid=r("#barnensbiblCurrentUserid").html();var e=r(".kk_aj_CurrentPageType").html();!function(){let i=r(".bb_aj_userskinsetting").html();r("#aj_bb_KrypinSkin").addClass(i),n.pagerequest(e,t.userinfo.userid)}()})},function(t,e,i){var n=i(14),s=i(18),r=i(20),o=i(22),a=i(26),l=i(28),u=i(29),c=i(30),h=i(31),d=i(1);i(0);t.exports={pagerequest:function(t,e){!function(t,e){let i={bb_aj_Start_Krypin:function(){return n.init(e),console.log("logga detta "+d.config.dnnURL),!1},bb_aj_Boklistor_Krypin:function(){return s.init(e),!1},bb_aj_Skrivboken_Krypin:function(){return r.init(e),!1},bb_aj_Boktips_Krypin:function(){return o.init(e),!1},bb_aj_Scoreboard_Krypin:function(){return a.init(e),!1},bb_aj_Bibblomon_Krypin:function(){return l.init(e),!1},bb_aj_Inventarie_Krypin:function(){return u.init(e),!1},bb_aj_shop_Krypin:function(){return c.init(e),!1},bb_aj_setup_krypin:function(){return h.init(e),!1},default:function(){return n.init(e),!1}};(i[t]||i.default)()}(t,e)}}},function(t,e,i){i(2);var n=i(0),s=i(3),r=i(6),o=i(4),a=i(5),l=i(1),u=l.usermessages,c=l.config;t.exports={init:function(t){o.init("Start"),this.cacheDom(),this.BindEvent(t),this.Render(t)},cacheDom:function(){this.$bb_aj_MainKrypinSkinContainer=n(".aj_bb_KrypinSkin"),this.$bb_bb_aj_MainScore=n(".bibblomonMainscore"),this.$bb_aj_buttonitem_del_laserjustnu=n(".buttonitem_del_laserjustnu")},BindEvent:function(t){let e=this;r.callEvents.on("userScoreupdate",function(t){e.$bb_bb_aj_MainScore.html(t+" xp")}),this.$bb_aj_MainKrypinSkinContainer.on("click",".buttonitem_del_laserjustnu",function(i){return confirm(u.laserjustnu.confirmRemove)&&e.removefromLaserjustnu(t),!0})},Renderbiblomon:function(t){let e=this,i=c.api.bibblomonlistor.getuserbibblomonlist;s.getjsondata(i(t),function(t){r.callEvents.emit("userScoreupdate",t.Monvalue),e.$bb_bb_aj_MainScore.html(t.Monvalue+" xp")})},Renderlaserjustnu:function(t){let e="#laserjustnuItems";if(this.checkIfDivExist(e)){let i=c.api.installningar.laserjustnu,n=c.handlebartemplate.hb_laserjustnu_tmp;s.getjsondata(i(t),function(t){a.injecthtmltemplate(e,n,t,function(){})})}},RenderUserLatestBoktips:function(t){let e="#bb_aj_userlatestboktips";if(this.checkIfDivExist(e)){let i=c.api.installningar.userlatestboktips,n=c.handlebartemplate.hb_userlatestboktips_tmp;s.getjsondata(i(t),function(t){a.injecthtmltemplate(e,n,t,function(){})})}},RenderuserScoreupdate:function(t){let e=this,i=c.api.bibblomonlistor.getuserbibblomonlist;s.getjsondata(i(t),function(t){r.callEvents.emit("userScoreupdate",t.Monvalue),e.$bb_bb_aj_MainScore.html(t.Monvalue+" xp")})},Render:function(t){this.Renderlaserjustnu(t),this.RenderUserLatestBoktips(t),this.RenderuserScoreupdate(t)},checkIfDivExist:function(t){return null===document.getElementById(t)},removefromLaserjustnu:function(t){let e=this,i=c.api.installningar.updatesettings;s.getjsondata(i(t,3,0),function(i){console.log("laser justnu bok borttagen"),e.Renderlaserjustnu(t)})}}},function(t,e){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,i){var n=i(2),s=(i(0),i(1));s.config;t.exports={init:function(){Handlebars.registerHelper("datagroupname",function(t){var e=t.indexOf("i",0);return t.replaceAt(e,"o"),t.replace(/\s/g,"")});Handlebars.registerHelper("count",function(t){return"grupp"+t}),Handlebars.registerHelper("categoryimg",function(t){let e=s.skrivbokimages,i=e.catimagesrc,r=n.find(i,function(e){return e.catid==t});r||(r=n.find(i,function(t){return 0==t.catid}));let o=e.catimgbase+r.imgsrc;return"<img title="+r.catname+" src="+o+" />"}),Handlebars.registerHelper("categoryUrlimg",function(t){if(!t){let e=s.skrivbokimages,i=e.catimagesrc,r=n.find(i,function(t){return 0==t.catid});t=e.catimgbase+r.imgsrc}return t}),Handlebars.registerHelper("isbookinlaserjustnu",function(t){return t>0})}}},function(t,e,i){i(2);var n=i(0);i(9);var s=i(4),r=i(7),o=i(3),a=i(5),l=i(19),u=i(1),c=u.config,h=u.usermessages;t.exports={init:function(t){r.init("Booklist"),s.init("Booklist"),l.init(),this.cacheDom(),this.BindEvent(t),this.initbooklist(t)},cacheDom:function(){this.$aj_bb_KrypinMainGrid=n(".bb_aj_krypincontainer"),this.$bb_aj_booklistMain=n("#bb_aj_booklistMain"),this.$bb_aj_booklist_Mod=n("#bb_aj_booklist_Mod"),this.$bb_aj_addbooklist=n("#cmdNyBoklista"),this.$bb_aj_GenericModalContainer=n("#bb_aj_GenericModalContainer")},BindEvent:function(t){let e=this;this.$bb_aj_booklistMain.on("click","#bb_aj_cmdAdd_Booklist",function(t){return!0}),this.$bb_aj_booklistMain.on("click",".buttonitem_booktip",function(t){return!0}),this.$bb_aj_booklist_Mod.on("click","#cmdAvbryt",function(t){return r.closeboxbehavior(),!1}),this.$bb_aj_booklistMain.on("click",".buttonitem_tabort",function(i){let s=n(this).attr("data-itemid"),r=n(this).attr("data-bookistid");e.delbookitemfromlist(r,s,t)}),this.$bb_aj_addbooklist.on("click",function(i){let s=n("#txtBoklistanamn"),r=s.val();if(!r)return alert(h.boklist.confirmAlert),s.focus(),!1;confirm(h.boklist.confirmADD)&&e.addBooklist(r,t)}),this.$bb_aj_booklistMain.on("click",".bb_aj_booklistDelete",function(i){let s=n(this).attr("data-bookistid");if(!d(s)){confirm(h.boklist.confirmDel)&&e.delBooklist(s,t)}return!1}),this.$bb_aj_booklistMain.on("click",".bb_aj_booklistEditname",function(t){let e=n(this).attr("data-bookistid");return d(e)||(n(".bb_aj_booklistname"+e).toggle(),n(".bb_aj_editbooklistnamnBlock"+e).toggle()),!1}),this.$bb_aj_booklistMain.on("click",".booklistPrint",function(i){let s=n(this).attr("data-bookistid"),r=n(".bb_aj_booklistname"+s).html();return console.log("booklistid: "+s),e.printModal(s,t,r),l.openInModal(),!1}),this.$bb_aj_GenericModalContainer.on("click","#bb_aj_PrintBoklistTemplate",function(t){let e={userid:n(this).attr("data-userid"),booklistid:n(this).attr("data-boklistId"),bgimg:n("#print_bgVal").val(),color:n("#print_RubrikColorVal").val(),font:n("#print_RubrikTypsnittVal").val(),Rubrik:n(this).attr("data-boklistNamn")},i=c.api.boklistor.printUrl;console.log(i(e));window.open(i(e),"Title","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top="+(screen.height-400)+",left="+(screen.width-840));return!1}),this.$bb_aj_GenericModalContainer.on("click",".bb_aj_closeModal",function(t){return l.closeModal(),!1}),this.$bb_aj_booklistMain.on("click",".cmdeditBoklista",function(i){let s=n(this).closest(".aj_bb_KrypinMainGrid").attr("data-bookistid"),r=n(this).siblings(".editBoklistanamn").val();if(!d(s)){confirm(h.boklist.confirmEdit)&&r&&s&&(e.editBooklist(s,r,t),n(".bb_aj_booklistname"+s).show(),n(".bb_aj_editbooklistnamnBlock"+s).hide())}return!1}),this.$bb_aj_booklistMain.on("click",".cmdAvbryt",function(t){let e=n(this).closest(".aj_bb_KrypinMainGrid").attr("data-bookistid");return n(".bb_aj_booklistname"+e).show(),n(".bb_aj_editbooklistnamnBlock"+e).hide(),!1}),this.$bb_aj_booklistMain.on("click",".title-clear-btn",function(t){return n(".listfilter").val(""),jplist.resetControls(),!1}),this.$bb_aj_booklistMain.on("click",".buttonitem_readnow",function(i){let s=n(this).attr("data-itemid");return e.Laserjustnu(t,s),!1}),this.$bb_aj_booklistMain.on("click",".boklistshow",function(t){let e=n(this).attr("data-bookistid");return n(".bb_aj_gridItem[data-bookistid="+e+"] .item").toggle(),!1})},Apiupdate:function(t,e){let i=this;o.getjsondata(t,function(t){i.initbooklist(e)})},Apiupdateajax:function(t,e){o.getjsondata(t,function(t){})},printModal:function(t,e,i){let n=c.handlebartemplate.hb_PrintModalVal_tmp,s={boklistid:t,userid:e,boklistNamn:i};a.injecthtmltemplate("#bb_aj_GenericModalContainer",n,s,function(){console.log("klart!")})},getbooklist:function(t,e){let i=c.handlebartemplate.hb_booklist_tmp;this.Render(t,i,e)},initbooklist:function(t){let e=c.api.boklistor.getuserboklist;this.getbooklist(e(t),t)},delbookitemfromlist:function(t,e,i){let n=c.api.boklistor.deluserbokitem;jplist.resetControls(),this.Apiupdate(n(t,e,i),i)},addbookitemfromlist:function(t,e,i){let n=c.api.boklistor.adduserbokitem;this.Apiupdateajax(n(t,e,i),i)},addBooklist:function(t,e){let i=c.api.boklistor.addbooklist;jplist.resetControls(),this.Apiupdate(i(t,e),e)},editBooklist:function(t,e,i){let n=c.api.boklistor.editbooklist;jplist.resetControls(),this.Apiupdate(n(t,e,i),i)},delBooklist:function(t,e){let i=c.api.boklistor.delbooklist;jplist.resetControls(),this.Apiupdate(i(t,e),e)},Laserjustnu:function(t,e){let i=this,n=c.api.installningar.updatesettings;o.getjsondata(n(t,3,e),function(e){i.initbooklist(t)})},Render:function(t,e,i){let s=this;o.getjsondata(t,function(t){a.injecthtmltemplate("#bb_aj_booklistMain",e,t,function(){return jplist.init(),new dragdrop.start(function(t,e){t.addEventListener("drop",function(t){let e,r,o;try{e=t.currentTarget.activeElement.attributes[2].value,r=t.currentTarget.activeElement.attributes[3].value;var a=p(t.target,".bb_aj_gridItem");(o=n(a).attr("data-bookistid"))||(o=t.target.attributes[2].value)}catch(t){e=0,r=0,o=0}o&&r!=o&&(s.delbookitemfromlist(r,e,i),s.addbookitemfromlist(o,e,i))})}),!1})})}};var d=function(t){return"1000000000"==t},p=function(t,e){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),i=e.length;--i>=0&&e.item(i)!==this;);return i>-1});t&&t!==document;t=t.parentNode)if(t.matches(e))return t;return null}},function(t,e){t.exports={init:function(){this.cacheDom()},cacheDom:function(){this.$bb_aj_MainKrypinSkinContainer=$(".aj_bb_KrypinSkin"),this.$bb_aj_ModalMainContainer=$("#bb_aj_GenericModalContainer")},closeModal:function(){this.$bb_aj_ModalMainContainer.fadeOut("slow")},openInModal:function(){this.$bb_aj_ModalMainContainer.fadeIn("slow")}}},function(t,e,i){var n=i(2),s=i(0),r=i(10),o=i(11),a=i(4),l=i(7),u=i(3),c=i(5),h=i(8),d=i(21),p=i(1),f=p.config,g=p.usermessages;t.exports={init:function(t){o.init(),d.init(t),l.init("Skrivbok"),a.init("Skrivbok"),this.cacheDom(),this.BindEvent(t),this.initbooklist(t)},cacheDom:function(){this.$bb_aj_MainKrypinSkinContainer=s(".aj_bb_KrypinSkin"),this.$bb_aj_ModalMainContainer=s("#bb_aj_modalContainer"),this.$bb_aj_Form_txtWriterTitle=s("#txtWriterTitle"),this.$bb_aj_Form_cmdSend=s("#cmdSendSkrivbokForm"),this.$bb_aj_Form_cmdReset=s("#cmdResetSkrivbokForm"),this.$bb_aj_Form_exempleImg=s(".skrivbokenExempleimg .bookitem-image img"),this.$bb_aj_berattelseCatdrp=s("#drpTypavBerattelse"),this.$bb_aj_aj_bb_formBlock=s(".aj_bb_formBlock"),this.$bb_aj_cmdAdd=s("#bb_aj_cmdAdd")},BindEvent:function(t){let e=this;r.init(),this.$bb_aj_MainKrypinSkinContainer.on("click",".bb_aj_closeModal",function(t){return o.closeModal(),!1}),this.$bb_aj_MainKrypinSkinContainer.on("click",".bb_aj_openInModal",function(i){let n=s(this).attr("data-id");return e.getskrivbookbyID(n,t),o.openInModal(),!1}),this.$bb_aj_MainKrypinSkinContainer.on("click",".buttonitem_edit",function(i){s("html, body").animate({scrollTop:s(".bb_aj_gridItem_Header").offset().top},"slow");let n=s(this).attr("data-id");return e.$bb_aj_Form_cmdSend.attr("data-cmd","edit"),e.$bb_aj_Form_cmdSend.html("&Auml;ndra"),e.$bb_aj_aj_bb_formBlock.show("slow"),e.updskrivbookEdiorbyID(n,t),!1}),this.$bb_aj_Form_cmdSend.on("click",function(i){let n=s(this).attr("data-cmd");return"add"==n&&confirm(g.skrivbok.confirmAdd)&&d.addSkrivbokItem(t,function(i){i?e.formupdate(t):alert(g.skrivbok.confirmAlert)}),"edit"==n&&confirm(g.skrivbok.confirmEdit)&&d.updateSkrivbokItem(t,function(i){e.$bb_aj_Form_cmdSend.attr("data-cmd","add"),e.$bb_aj_Form_cmdSend.html("Spara"),i?(e.formupdate(t),e.$bb_aj_Form_cmdSend.attr("data-cmd","add"),e.$bb_aj_Form_cmdSend.html("Spara")):alert(g.skrivbok.confirmAlert)}),!1}),this.$bb_aj_MainKrypinSkinContainer.on("click",".buttonitem_tabort",function(i){let n=s(this).attr("data-id");return confirm(g.skrivbok.confirmDel)&&d.deleteSkrivbokItem(n,t,function(){e.formupdate(t)}),!1}),this.$bb_aj_Form_cmdReset.on("click",function(t){return d.rensaEditform(),e.$bb_aj_Form_cmdSend.attr("data-cmd","add"),e.$bb_aj_Form_cmdSend.html("Spara"),!1}),this.$bb_aj_MainKrypinSkinContainer.on("change","#drpTypavBerattelse",function(t){let i=s(this).val();return e.$bb_aj_Form_exempleImg.attr("src",h.getimageHelper(i)),!1}),this.$bb_aj_MainKrypinSkinContainer.on("click",".skrivboklistshow",function(t){return s(".aj_bb_formBlock").toggle("slow"),s(this).toggleClass("grader180"),!1}),this.$bb_aj_MainKrypinSkinContainer.on("click","#bb_aj_cmdAdd",function(t){return s(".aj_bb_formBlock").toggle("slow"),s(this).toggleClass("grader180"),d.rensaEditform(),!1})},getskrivbooklist:function(t,e){let i=f.handlebartemplate.hb_skrivbokenlist_tmp;this.Render(t,i,e)},getskrivbookbyID:function(t,e){d.getskrivbookByIdForEdit(t,e)},updskrivbookEdiorbyID:function(t,e){d.updskrivbookEditor(t,e)},formupdate:function(t){d.rensaEditform(),this.initbooklist(t)},initbooklist:function(t){let e=f.api.skrivbokenlistor.getuserskribokenlist;this.getskrivbooklist(e(t),t)},Render:function(t,e,i,s){s=s||"asc",u.getjsondata(t,function(t){let i=t.SkrivbokenList;t.SkrivbokenList=n.orderBy(i,["Title"],[s]),c.injecthtmltemplate("#bb_aj_skrivbokentemplatecontainer",e,t,function(){})})}}},function(t,e,i){var n=i(0),s=i(3),r=i(5),o=i(8),a=i(1).config;let l={Approved:"",Category:"",Gillar:"",Inserted:"",Publish:"",SkrivID:"",Story:"",Title:"",UserID:"",UserName:""};t.exports={init:function(t){this.cacheDom()},cacheDom:function(){this.$bb_aj_Form_txtWriterTitle=n("#txtWriterTitle"),this.$bb_aj_Form_lblWriterTitle=n("#lblWriterTitle"),this.$bb_aj_Form_lblAJKrypInWriteContent=n("#lblAJKrypInWriteContent"),this.$bb_aj_Form_cmdSend=n("#cmdSendSkrivbokForm"),this.$bb_aj_Form_cmdReset=n("#cmdResetSkrivbokForm"),this.$bb_aj_skrivbokenForm_exempleImg=n(".skrivbokenExempleimg .bookitem-image img")},getskrivbookByIdForEdit:function(t,e){let i=a.api.skrivbokenlistor.getuserskribokenByID,n=a.handlebartemplate.hb_skrivbokModalView_tmp;this.Render(i(t,e),n,e)},updskrivbookEditor:function(t,e){let i=this,r=a.api.skrivbokenlistor.getuserskribokenByID;this.rensaEditform(),s.getjsondata(r(t,e),function(t){n.each(t.SkrivbokenList,function(t,e){i.$bb_aj_Form_txtWriterTitle.val(e.Title),i.$bb_aj_Form_cmdSend.attr("data-id",e.SkrivID),o.HelpersetSelectedIndex(document.getElementById("drpTypavBerattelse"),e.Category),o.HelpersetSelectedIndex(document.getElementById("drp_AJKrypInWritedelad"),e.Publish),i.$bb_aj_skrivbokenForm_exempleImg.attr("src",o.getimageHelper(e.Category)),tinymce.activeEditor.execCommand("mceInsertContent",!1,e.Story)})})},rensaEditform:function(){this.$bb_aj_Form_txtWriterTitle.val(""),o.HelpersetSelectedIndex(document.getElementById("drpTypavBerattelse"),"0"),o.HelpersetSelectedIndex(document.getElementById("drp_AJKrypInWritedelad"),"1"),this.$bb_aj_skrivbokenForm_exempleImg.attr("src","/DesktopModules/bb_aj_Skrivboken_Krypin/images/skrivbok_default256_36.png"),this.$bb_aj_Form_cmdSend.attr("data-id","0"),tinyMCE.activeEditor.setContent("")},addSkrivbokItem:function(t,e){let i=a.api.skrivbokenlistor.addskribokenItem;this.ApiPostHandler(i(),t,function(t){e(t)})},updateSkrivbokItem:function(t,e){let i=a.api.skrivbokenlistor.editskribokenItem;this.ApiPostHandler(i(),t,function(t){e(t)})},deleteSkrivbokItem:function(t){let e=a.api.skrivbokenlistor.delskribokenItem;this.ApiPostHandler(e(),t)},ApiPostHandler:function(t,e,i){let n=this.HelpercollectFormValues(e);this.validateSave(n)?s.postjsondata(t,n,function(t){i(!0)}):i(!1)},Render:function(t,e,i){s.getjsondata(t,function(t){r.injecthtmltemplate("#bb_aj_modalContainer",e,t,function(){console.log("api kört!")})})},validateSave:function(){let t=!0;return l.Title||(this.$bb_aj_Form_lblWriterTitle.attr("style","color:red; font-weight:bold;"),t=!1),l.Story||(this.$bb_aj_Form_lblAJKrypInWriteContent.attr("style","color:red; font-weight:bold;"),t=!1),t&&(this.$bb_aj_Form_lblWriterTitle.removeAttr("style"),this.$bb_aj_Form_lblAJKrypInWriteContent.removeAttr("style")),t},HelpercollectFormValues:function(t){return l.SkrivID=this.$bb_aj_Form_cmdSend.attr("data-id"),l.UserID=t,l.Approved=0,l.Title=this.$bb_aj_Form_txtWriterTitle.val(),l.Story=tinyMCE.activeEditor.getContent(),l.Category=document.getElementById("drpTypavBerattelse").value,l.Publish=document.getElementById("drp_AJKrypInWritedelad").value,l}}},function(t,e,i){var n=i(2),s=i(0),r=i(10),o=i(11),a=i(6),l=i(23),u=i(4),c=i(7),h=i(3),d=i(24),p=(i(8),i(5)),f=i(25),g=i(1),m=g.config,v=g.usermessages;t.exports={init:function(t){let e=d.checkparamsinurl();l.init("#txtboktipsTitle"),o.init(),f.init(t,e.bookid),c.init("Boktips"),u.init("Boktips"),this.cacheDom(),this.BindEvent(t),this.initbooklist(t,e.bookid)},cacheDom:function(){this.$bb_aj_MainKrypinSkinContainer=s(".aj_bb_KrypinSkin"),this.$bb_aj_ModalMainContainer=s("#bb_aj_modalContainer"),this.$bb_aj_Form_txtboktipsTitle=s("#txtboktipsTitle"),this.$bb_aj_boktipsForm_cmdSend=s("#cmdSendBoktipsForm"),this.$bb_aj_boktipsForm_cmdReset=s("#cmdResetBoktipsForm"),this.$bb_aj_boktipsForm_exempleImg=s(".boktipsExempleimg .bookitem-image img"),this.$bb_aj_bb_boktipsFormBlock=s(".aj_bb_formBlock"),this.$bb_aj_boktipsCmdAdd=s("#bb_aj_cmdAdd")},BindEvent:function(t){let e=this;r.init(),a.callEvents.on("updateImg",function(t){e.updboktipsbyBookID(t)}),this.$bb_aj_MainKrypinSkinContainer.on("click",".bb_aj_closeModal",function(t){return o.closeModal(),!1}),this.$bb_aj_MainKrypinSkinContainer.on("click",".bb_aj_openInModal",function(i){let n=s(this).attr("data-id");return e.getboktipsbyID(n,t),o.openInModal(),!1}),this.$bb_aj_MainKrypinSkinContainer.on("click",".buttonitem_edit",function(i){s("html, body").animate({scrollTop:s(".bb_aj_gridItem_Header").offset().top},"slow");let n=s(this).attr("data-id");return e.$bb_aj_boktipsForm_cmdSend.attr("data-cmd","edit"),e.$bb_aj_boktipsForm_cmdSend.html("&Auml;ndra"),e.$bb_aj_bb_boktipsFormBlock.show("slow"),e.updboktipsEdiorbyID(n,t),!1}),this.$bb_aj_boktipsForm_cmdSend.on("click",function(i){let n=s(this).attr("data-cmd");return"add"==n&&confirm(v.boktips.confirmAdd)&&f.addBoktipsItem(t,function(i){i?e.formupdate(t):alert(v.boktips.confirmAlert)}),"edit"==n&&confirm(v.boktips.confirmEdit)&&f.editBoktipsItem(t,function(i){i?(e.formupdate(t),e.$bb_aj_boktipsForm_cmdSend.attr("data-cmd","add"),e.$bb_aj_boktipsForm_cmdSend.html("Spara")):alert(v.boktips.confirmAlert)}),!1}),this.$bb_aj_MainKrypinSkinContainer.on("click",".buttonitem_tabort",function(i){let n=s(this).attr("data-id");return confirm(v.boktips.confirmDel)&&f.deleteBoktipsItem(n,t,function(){e.formupdate(t)}),!1}),this.$bb_aj_boktipsForm_cmdReset.on("click",function(t){return f.rensaEditform(),e.$bb_aj_boktipsForm_cmdSend.attr("data-cmd","add"),e.$bb_aj_boktipsForm_cmdSend.html("Spara"),!1}),this.$bb_aj_MainKrypinSkinContainer.on("change","#drpTypavBerattelse",function(t){s(this).val();return!1}),this.$bb_aj_MainKrypinSkinContainer.on("click",".skrivboklistshow",function(t){return s(".aj_bb_formBlock").toggle("slow"),s(this).toggleClass("grader180"),!1}),this.$bb_aj_MainKrypinSkinContainer.on("click","#bb_aj_boktipsCmdAdd",function(t){return s(".aj_bb_formBlock").toggle("slow"),s(this).toggleClass("grader180"),f.rensaEditform(),!1}),this.$bb_aj_MainKrypinSkinContainer.on("click",".boktipslistshow",function(t){return s(".aj_bb_formBlock").toggle("slow"),s(this).toggleClass("grader180"),!1})},getboktipslist:function(t,e){let i=m.handlebartemplate.hb_boktipslist_tmp;this.Render(t,i,e)},getboktipsbyID:function(t,e){f.getBoktipsByIdForEdit(t,e)},updboktipsEdiorbyID:function(t,e){f.updBoktipsEditor(t,e)},updboktipsbyBookID:function(t){f.updBoktipsEditorByBookid(t)},formupdate:function(t){f.rensaEditform(),this.initbooklist(t)},initbooklist:function(t,e){let i=m.api.boktipslistor.getuserboktipslist;this.getboktipslist(i(t),t),e&&f.updBoktipsEditorByBookid(e)},Render:function(t,e,i,s){s=s||"asc",h.getjsondata(t,function(t){let i=t.Boktips;t.Boktips=n.orderBy(i,["Title"],[s]),p.injecthtmltemplate("#bb_aj_boktipstemplatecontainer",e,t,function(){})})}}},function(t,e,n){var s=n(0),r=n(6),o=n(1).config;t.exports={init:function(t){new autoComplete({selector:t,minChars:2,source:function(t,e){let i=o.api.autocomplete.geturl,n=(i(10),{Searchstr:t});s.ajax({async:!0,type:"post",dataType:"json",data:n,url:i(10),success:function(t){let i=[];s.each(t.BookList,function(t,e){i.push([e.Title,e.Bookid])}),e(i)},error:function(t,e,i){alert("Nått blev fel vid hämtning av arrangemang!")}})},renderItem:function(t,e){return'<div class="autocomplete-suggestion" data-bookid="'+t[1]+'">'+t[0]+"</div>"},onSelect:function(t,e,i){return r.callEvents.emit("updateImg",i.dataset.bookid),!1}})},demo:function(){new autoComplete({selector:"#txtboktipsTitle2",minChars:1,source:function(t,e){t=t.toLowerCase();var n=["ActionScript","AppleScript","Asp","Assembly","BASIC","Batch","C","C++","CSS","Clojure","COBOL","ColdFusion","Erlang","Fortran","Groovy","Haskell","HTML","Java","JavaScript","Lisp","Perl","PHP","PowerShell","Python","Ruby","Scala","Scheme","SQL","TeX","XML"],s=[];for(i=0;i<n.length;i++)~n[i].toLowerCase().indexOf(t)&&s.push(n[i]);e(s)}})}}},function(t,e){t.exports={checkparamsinurl:function(t){let e,i={},n=/\+/g,s=/([^&=]+)=?([^&]*)/g,r=function(t){return decodeURIComponent(t.replace(n," "))},o=window.location.search.substring(1);for(;e=s.exec(o);)i[r(e[1])]=r(e[2]);if(!i.tab){let t=window.location.href.split("/"),e=t.indexOf("bookid");e>0&&(i.bookid=t[e+1]),(e=t.indexOf("typ"))>0&&(i.typ=t[e+1])}return i}}},function(t,e,i){var n=i(0),s=i(3),r=i(5),o=i(8),a=i(1).config;let l={Approved:"0",Author:"",Bookid:"0",Title:"",Userage:"0",HighAge:"0",LowAge:"0",Review:"",Tiptype:"0",Userid:"0",UserName:"",Category:"0",TipID:"0",ImgSrc:""};t.exports={init:function(t,e){this.cacheDom()},cacheDom:function(){this.$bb_aj_Form_txtboktipsTitle=n("#txtboktipsTitle"),this.$bb_aj_Form_lblboktipsTitle=n("#lblboktipsTitle"),this.$bb_aj_Form_lblAJKrypInWriteContent=n("#lblAJKrypInWriteContent"),this.$bb_aj_Form_cmdSend=n("#cmdSendBoktipsForm"),this.$bb_aj_Form_cmdReset=n("#cmdResetBoktipsForm"),this.$bb_aj_boktipsFormMeta=n("#bb_aj_boktipsFormMeta"),this.$bb_aj_boktipsForm_exempleImg=n(".boktipsExempleimg .bookitem-image img")},getBoktipsByIdForEdit:function(t,e){let i=a.api.boktipslistor.getuserboktipsByTipID,n=a.handlebartemplate.hb_boktipsModalView_tmp;this.Render(i(t,e),n,e)},updBoktipsEditor:function(t,e){let i=this,r=a.api.boktipslistor.getuserboktipsByTipID;this.rensaEditform(),s.getjsondata(r(t,e),function(t){n.each(t.Boktips,function(t,e){i.HelperUpdateFormValues(e)})})},rensaEditform:function(){this.$bb_aj_Form_cmdSend.attr("data-id","0"),this.$bb_aj_Form_txtboktipsTitle.val(""),tinyMCE.activeEditor.setContent(""),o.HelpersetSelectedIndex(document.getElementById("drpBoktipSuitableAgeMin"),"1"),o.HelpersetSelectedIndex(document.getElementById("drpBoktipSuitableAgeMax"),"1"),o.HelpersetSelectedIndex(document.getElementById("drpBoktipAmnen"),"1"),this.$bb_aj_boktipsFormMeta.attr("data-approved","0"),this.$bb_aj_boktipsFormMeta.attr("data-author",""),this.$bb_aj_boktipsFormMeta.attr("data-bookid","0"),this.$bb_aj_boktipsFormMeta.attr("data-usernamn",""),this.$bb_aj_boktipsFormMeta.attr("data-Userage","0"),this.$bb_aj_boktipsForm_exempleImg.attr("src",o.getimageHelper("0")),this.$bb_aj_Form_cmdSend.attr("data-id","0")},addBoktipsItem:function(t,e){let i=a.api.boktipslistor.addboktipsItem;this.ApiPostHandler(i(),t,function(t){e(t)})},editBoktipsItem:function(t,e){let i=a.api.boktipslistor.editboktipsItem;this.ApiPostHandler(i(),t,function(t){e(t)})},deleteBoktipsItem:function(t,e,i){let n=a.api.boktipslistor.delboktipsItem;l.TipID=t,l.Userid=e,s.postjsondata(n(),l,function(t){i()})},updBoktipsEditorByBookid:function(t){let e=this,i=a.api.boktipslistor.getbookContextByBookID;s.getjsondata(i(t),function(t){n.each(t.Boktips,function(t,i){e.HelperUpdateFormValues(i)})})},ApiPostHandler:function(t,e,i){let n=this.HelpercollectFormValues(e);this.validateSave(n)?s.postjsondata(t,n,function(t){i(!0)}):i(!1)},Render:function(t,e,i){s.getjsondata(t,function(t){r.injecthtmltemplate("#bb_aj_modalContainer",e,t,function(){console.log("api kört!")})})},validateSave:function(){let t=!0;return l.Title||(this.$bb_aj_Form_lblboktipsTitle.attr("style","color:red; font-weight:bold;"),t=!1),l.Review||(this.$bb_aj_Form_lblAJKrypInWriteContent.attr("style","color:red; font-weight:bold;"),t=!1),t&&(this.$bb_aj_Form_lblboktipsTitle.removeAttr("style"),this.$bb_aj_Form_lblAJKrypInWriteContent.removeAttr("style")),t},HelpercollectFormValues:function(t){return l.Approved=this.$bb_aj_boktipsFormMeta.attr("data-approved"),l.Author=this.$bb_aj_boktipsFormMeta.attr("data-author"),l.Bookid=this.$bb_aj_boktipsFormMeta.attr("data-bookid"),l.Title=this.$bb_aj_Form_txtboktipsTitle.val(),l.Userage=this.$bb_aj_boktipsFormMeta.attr("data-Userage"),l.HighAge=document.getElementById("drpBoktipSuitableAgeMax").value,l.LowAge=document.getElementById("drpBoktipSuitableAgeMin").value,l.Review=tinyMCE.activeEditor.getContent(),l.Tiptype="0",l.Userid=t,l.UserName=this.$bb_aj_boktipsFormMeta.attr("data-usernamn"),l.Category=document.getElementById("drpBoktipAmnen").value,l.TipID=this.$bb_aj_Form_cmdSend.attr("data-id"),l.ImgSrc=this.$bb_aj_boktipsForm_exempleImg.attr("src"),l},HelperUpdateFormValues:function(t){this.$bb_aj_Form_cmdSend.attr("data-id",t.TipID),this.$bb_aj_Form_txtboktipsTitle.val(t.Title),t.Review||(t.Review="");try{tinyMCE.activeEditor.execCommand("mceInsertContent",!1,t.Review)}catch(t){console.log("tinymce laddades inte som den skulle")}return o.HelpersetSelectedIndex(document.getElementById("drpBoktipSuitableAgeMin"),t.LowAge),o.HelpersetSelectedIndex(document.getElementById("drpBoktipSuitableAgeMax"),t.HighAge),o.HelpersetSelectedIndex(document.getElementById("drpBoktipAmnen"),t.Category),this.$bb_aj_boktipsFormMeta.attr("data-approved",t.Approved),this.$bb_aj_boktipsFormMeta.attr("data-author",t.Author),this.$bb_aj_boktipsFormMeta.attr("data-bookid",t.Bookid),this.$bb_aj_boktipsFormMeta.attr("data-usernamn",t.UserName),this.$bb_aj_boktipsFormMeta.attr("data-Userage",t.Userage),this.$bb_aj_boktipsForm_exempleImg.attr("src",t.ImgSrc),t}}},function(t,e,i){i(2);var n=i(0),s=i(4),r=i(7),o=(i(6),i(3)),a=i(5),l=i(27),u=i(1).config;t.exports={init:function(t){r.init("Scoreboard"),s.init("Scoreboard"),this.cacheDom(),this.BindEvent(t),this.initBadges(t)},cacheDom:function(){this.$aj_bb_KrypinMainGrid=n(".aj_bb_KrypinMainGrid"),this.$bb_aj_skrivbokenbadgeblock=n("#bb_aj_skrivbokenbadgeblock"),this.$bb_aj_boktipsbadgeblock=n("#bb_aj_boktipsbadgeblock"),this.$bb_aj_specialbadgeblock=n("#bb_aj_specialbadgeblock"),this.$bb_aj_highscorebadgeblock=n("#bb_aj_highscorebadgeblock"),this.$bb_aj_scoreBox=n(".bb_aj_scoreBox")},BindEvent:function(t){},initBadges:function(t){let e=u.api.scoreboard.getuserbadgeslist,i=u.handlebartemplate.hb_boktipslist_tmp;this.Render(e(t),i,t)},SkribokenbadgesBlock_upd:function(t){let e=u.handlebartemplate.hb_skribokenbadges_tmp;a.injecthtmltemplate("#bb_aj_skrivbokenbadgeblock",e,t,function(){console.log("skrivboken badges")})},BoktipsbadgesBlock_upd:function(t){let e=u.handlebartemplate.hb_boktipsbadges_tmp;a.injecthtmltemplate("#bb_aj_boktipsbadgeblock",e,t,function(){console.log("boktips badges")})},SpecialbadgesBlock_upd:function(t){let e=u.handlebartemplate.hb_specialbadges_tmp;a.injecthtmltemplate("#bb_aj_specialbadgeblock",e,t,function(){console.log("skrivboken badges")})},HighscorebadgesBlock_upd:function(t){let e=u.handlebartemplate.hb_highscorebadges_tmp;a.injecthtmltemplate("#bb_aj_highscorebadgeblock",e,t,function(){console.log("skrivboken badges")})},Render:function(t,e,i){let n=this;o.getjsondata(t,function(t){l.collectBadgeblock(t,function(t){n.SkribokenbadgesBlock_upd(t),n.BoktipsbadgesBlock_upd(t),n.SpecialbadgesBlock_upd(t),n.HighscorebadgesBlock_upd(t)})})}}},function(t,e,i){i(2);var n=i(0);t.exports={collectBadgeblock:function(t,e){let i=this,r=s;n.each(t.Bokmarkelser,function(t,e){switch(e.AwardGroup){case 1:r.skrivbokenlist=i.createskrivbokenlist(e);break;case 2:r.boktipslist=i.createboktipslist(e);break;default:1==e.Occures?r.highscorelist.push(e):r.specialbadgeslist.push(e)}}),e(r)},createskrivbokenlist:function(t){let e=s,i=1;return n.each(e.skrivbokenlist,function(n,s){i<t.UserLevel&&(e.skrivbokenlist[n].Badgesrc=s.Badgesrc.substring(0,s.Badgesrc.length-9)+".png",e.skrivbokenlist[n].Beskrivning="Du innehar: "+e.skrivbokentitel[n].titel+" Level "+i,e.skrivbokenlist[n].AwardName=e.skrivbokentitel[n].titel),i==t.UserLevel&&(e.skrivbokenlist[n]=t),i++}),e.skrivbokenlist},createboktipslist:function(t){let e=s,i=1;return n.each(e.boktipslist,function(n,s){i<t.UserLevel&&(e.boktipslist[n].Badgesrc=s.Badgesrc.substring(0,s.Badgesrc.length-9)+".png",e.boktipslist[n].Beskrivning="Du innehar: "+e.boktipstitel[n].titel+" Level "+i,e.boktipslist[n].AwardName=e.boktipstitel[n].titel),i==t.UserLevel&&(e.boktipslist[n]=t),i++}),e.boktipslist}};var s={skrivbokenlist:[{Userid:"0",Awardid:"0",Counter:"0",UserLevel:"0",AwardName:"",Badgesrc:"/Portals/0/bokmarkelser/Lv1_Berattar_grey.png",Beskrivning:decodeURIComponent(escape("ej uppnådd berättare Level 1")),Occures:"",AwardGroup:"",TolevelUp:"",EarnFuncID:""},{Userid:"0",Awardid:"0",Counter:"0",UserLevel:"0",AwardName:"",Badgesrc:"/Portals/0/bokmarkelser/Lv2_Berattare_grey.png",Beskrivning:decodeURIComponent(escape("ej uppnådd berättare Level 2")),Occures:"",AwardGroup:"",TolevelUp:"",EarnFuncID:""},{Userid:"0",Awardid:"0",Counter:"0",UserLevel:"0",AwardName:"",Badgesrc:"/Portals/0/bokmarkelser/Lv3_Skribent_grey.png",Beskrivning:decodeURIComponent(escape("ej uppnådd Level 3 Skribent")),Occures:"",AwardGroup:"",TolevelUp:"",EarnFuncID:""},{Userid:"0",Awardid:"0",Counter:"0",UserLevel:"0",AwardName:"",Badgesrc:"/Portals/0/bokmarkelser/Lv4_Storskribent_grey.png",Beskrivning:decodeURIComponent(escape("ej uppnådd Level 4 Storskribent")),Occures:"",AwardGroup:"",TolevelUp:"",EarnFuncID:""},{Userid:"0",Awardid:"0",Counter:"0",UserLevel:"0",AwardName:"",Badgesrc:"/Portals/0/bokmarkelser/Lv5_Forfattare_grey.png",Beskrivning:decodeURIComponent(escape("ej uppnådd Level 5 Författare")),Occures:"",AwardGroup:"",TolevelUp:"",EarnFuncID:""},{Userid:"0",Awardid:"0",Counter:"0",UserLevel:"0",AwardName:"",Badgesrc:"/Portals/0/bokmarkelser/Lv6_Guldforfattare_grey.png",Beskrivning:decodeURIComponent(escape("ej uppnådd Level 6 Guldförfattare")),Occures:"",AwardGroup:"",TolevelUp:"",EarnFuncID:""}],boktipslist:[{Userid:"0",Awardid:"0",Counter:"0",UserLevel:"0",AwardName:"",Badgesrc:"/Portals/0/bokmarkelser/btLv1_Boktipsar_grey.png",Beskrivning:decodeURIComponent(escape("ej uppnådd Level 1 Boktipsar")),Occures:"",AwardGroup:"",TolevelUp:"",EarnFuncID:""},{Userid:"0",Awardid:"0",Counter:"0",UserLevel:"0",AwardName:"",Badgesrc:"/Portals/0/bokmarkelser/btLv2_Boktipsare_grey.png",Beskrivning:decodeURIComponent(escape("ej uppnådd Level 2 Boktipsare")),Occures:"",AwardGroup:"",TolevelUp:"",EarnFuncID:""},{Userid:"0",Awardid:"0",Counter:"0",UserLevel:"0",AwardName:"",Badgesrc:"/Portals/0/bokmarkelser/btLv3_Storboktipsare_grey.png",Beskrivning:decodeURIComponent(escape("ej uppnådd Level 3 Storboktipsare")),Occures:"",AwardGroup:"",TolevelUp:"",EarnFuncID:""},{Userid:"0",Awardid:"0",Counter:"0",UserLevel:"0",AwardName:"",Badgesrc:"/Portals/0/bokmarkelser/btLv4_Massboktipsare_grey.png",Beskrivning:decodeURIComponent(escape("ej uppnådd Level 4 Massboktipsare")),Occures:"",AwardGroup:"",TolevelUp:"",EarnFuncID:""},{Userid:"0",Awardid:"0",Counter:"0",UserLevel:"0",AwardName:"",Badgesrc:"/Portals/0/bokmarkelser/btLv5_BoktokTipsare_grey.png",Beskrivning:decodeURIComponent(escape("ej uppnådd Level 5 Boktoktipsare")),Occures:"",AwardGroup:"",TolevelUp:"",EarnFuncID:""}],specialbadgeslist:[],highscorelist:[],skrivbokentitel:[{titel:decodeURIComponent(escape("Berättar"))},{titel:decodeURIComponent(escape("Berättare"))},{titel:decodeURIComponent(escape("Skribent"))},{titel:decodeURIComponent(escape("Storskribent"))},{titel:decodeURIComponent(escape("Författare"))},{titel:decodeURIComponent(escape("Guldförfattare"))}],boktipstitel:[{titel:"Boktipsar"},{titel:"Boktipsare"},{titel:"Storboktipsare"},{titel:"MassBoktipsare"},{titel:"BoktokTipsare"}]}},function(t,e,i){i(2);var n=i(0);i(9);var s=i(4),r=i(7),o=i(6),a=i(3),l=i(5),u=i(1).config;t.exports={init:function(t){r.init("Bibblomon"),s.init("Bibblomon"),this.cacheDom(),this.BindEvent(t),this.initbibblomonList(t)},cacheDom:function(){this.$bb_bb_aj_MainScore=n(".bb_aj_MainScore")},BindEvent:function(t){let e=this;o.callEvents.on("userScoreupdate",function(t){e.$bb_bb_aj_MainScore.html(t+" xp")})},getbibblomonList:function(t,e){let i=u.handlebartemplate.hb_bibblomonlist_tmp;this.Render(t,i,e)},initbibblomonList:function(t){let e=u.api.bibblomonlistor.getuserbibblomonlist;this.getbibblomonList(e(t),t)},Render:function(t,e,i){a.getjsondata(t,function(t){o.callEvents.emit("userScoreupdate",t.Monvalue),l.injecthtmltemplate("#bb_aj_bibblomonlistMain",e,t,function(){jplist.init()})})}}},function(t,e,i){i(2),i(0);var n=i(4);t.exports={init:function(t){n.init("Inventory")}}},function(t,e,i){i(2),i(0);var n=i(4);t.exports={init:function(t){n.init("Shop")}}},function(t,e,i){i(2);var n=i(0),s=i(4),r=i(3),o=i(5),a=i(1),l=a.config,u=a.usermessages;t.exports={init:function(t){s.init("Setup"),this.cacheDom(),this.BindEvent(t),this.initSettings(t)},cacheDom:function(){this.$bb_aj_CurrentAvatar=n("#bk_aj_setup_avatar"),this.$bb_aj_CurrentSkin=n("#bk_aj_setup_skin"),this.$bb_aj_avatar_maingallery=n("#avatar_maingallery"),this.$bb_aj_skin_maingallery=n("#skin_maingallery"),this.$aj_bb_KrypinSkin=n(".aj_bb_KrypinSkin"),this.$bk_aj_nav_avatar=n(".bk_aj_nav_avatar"),this.$bb_aj_btnSettingSave=n("#btnSettingSave"),this.$bb_aj_btnSettingTemp=n("#btnSettingTemp"),this.$bb_aj_btnSettingAbort=n("#btnSettingAbort")},BindEvent:function(t){let e=this;this.$bb_aj_avatar_maingallery.on("click",".bk_aj_setup_avatar_item",function(t){let i=n(this).find("img").attr("src"),s=n(this).attr("data-avataritm");return e.$bb_aj_CurrentAvatar.attr("src",i),l.userinfo.avatarid=s,!1}),this.$bb_aj_skin_maingallery.on("click",".bk_aj_setup_skin_item",function(t){let i=n(this).find("img").attr("src"),s=n(this).attr("data-skinitm"),r=n(this).attr("data-skinclass");return e.$bb_aj_CurrentSkin.attr("src",i),l.userinfo.skinid=s,e.$bb_aj_CurrentSkin.attr("data-skinclass",r),!1}),this.$bb_aj_btnSettingTemp.on("click",function(t){let i=e.$bb_aj_CurrentSkin.attr("data-skinclass");return e.tempupdateSkin(i),e.tempupdateAvatar(e.$bb_aj_CurrentAvatar.attr("src")),!1}),this.$bb_aj_btnSettingAbort.on("click",function(t){let i=n(this).attr("data-default");return e.$bb_aj_CurrentAvatar.attr("src",l.userinfo.defaultavatarimg),e.$bb_aj_CurrentSkin.attr("src",l.userinfo.defaultskinimg),e.$bb_aj_CurrentSkin.attr("data-skinclass",l.userinfo.defaultskinclass),e.$bk_aj_nav_avatar.attr("src",l.api.installningar.curAvatarsrc+"menyavatars/nav_"+l.userinfo.avatarimg),e.tempupdateSkin(i),!1}),this.$bb_aj_btnSettingSave.on("click",function(i){confirm(u.installningar.confirmSave)&&(e.updatesettings(t,1,l.userinfo.avatarid,function(t){}),e.updatesettings(t,2,l.userinfo.skinid,function(t){}));let n=e.$bb_aj_CurrentSkin.attr("data-skinclass");return e.tempupdateSkin(n),e.tempupdateAvatar(e.$bb_aj_CurrentAvatar.attr("src")),!1})},updatesettings:function(t,e,i,n){let s=l.api.installningar.updatesettings;r.getjsondata(s(t,e,i),function(t){n(t)})},tempupdateSkin:function(t){this.$aj_bb_KrypinSkin.removeClass(function(t,e){return(e.match(/(^|\s)aj_bb_skin_\S+/g)||[]).join(" ")}).addClass(t)},tempupdateAvatar:function(t){let e=t.replace(l.api.installningar.avatarimgsrc,"");this.$bk_aj_nav_avatar.attr("src",l.api.installningar.curAvatarsrc+"menyavatars/nav_"+e)},getcurrentAvatarimg:function(t){let e="defautlavatar_gubbeGlad",i="33",s=l.api.installningar.curAvatarsrc;return n.each(t.SettingOptionList,function(n,s){s.SettingsID==t.SettingValue&&(e=s.SettingSrc,i=s.SettingsID)}),s+=e,this.$bb_aj_CurrentAvatar.attr("src",s),l.userinfo.avatarid=i,l.userinfo.defaultavatarimg=s,l.userinfo.defaultavatarid=i,l.userinfo.avatarimg=e,!0},getcurrentskinimg:function(t,e){let i="GreenNycklpigeStyle",s="2",r="aj_bb_greenbg",o=l.api.installningar.curSkinsrc;return n.each(t.SettingOptionList,function(e,n){n.SettingsID==t.SettingValue&&(i=n.SettingName,s=n.SettingsID,r=n.SettingClass)}),o+=i+".jpg",this.$bb_aj_CurrentSkin.attr("src",o),this.$bb_aj_CurrentSkin.attr("data-skinclass",r),this.$bb_aj_btnSettingAbort.attr("data-default",r),l.userinfo.skinid=s,l.userinfo.defaultskinimg=o,l.userinfo.defaultskinclass=r,l.userinfo.defaultskinid=s,!0},initSettings:function(t){let e=l.api.installningar.src;this.render(t,e(t))},render:function(t,e){let i=this,n=l.handlebartemplate.hb_settingsAvatar_tmp,s=l.handlebartemplate.hb_settingsSkins_tmp;r.getjsondata(e,function(t){i.getcurrentAvatarimg(t.SettingsList[0]),i.getcurrentskinimg(t.SettingsList[1]),o.injecthtmltemplate("#avatar_maingallery",n,t.SettingsList[0],function(){}),o.injecthtmltemplate("#skin_maingallery",s,t.SettingsList[1],function(){})})}}}]);