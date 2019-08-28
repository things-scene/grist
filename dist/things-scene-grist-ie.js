!function(e){function t(t){for(var r,i,o=t[0],a=t[1],s=0,u=[];s<o.length;s++)i=o[s],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(c&&c(t);u.length;)u.shift()()}var r={},n={0:0};function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(function(t,i){r=n[e]=[t,i]});t.push(r[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=function(e){return i.p+""+({}[e]||e)+".js"}(e);var c=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(u);var r=n[e];if(0!==r){if(r){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",c.name="ChunkLoadError",c.type=i,c.request=o,r[1](c)}n[e]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var c=a;i(i.s=37)}([function(e,t,r){"use strict";var n=r(4),i=r(8),o=r(5);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const a=133;function s(e,t){const{element:{content:r},parts:n}=e,i=document.createTreeWalker(r,a,null,!1);let o=u(n),s=n[o],c=-1,l=0;const d=[];let f=null;for(;i.nextNode();){c++;const e=i.currentNode;for(e.previousSibling===f&&(f=null),t.has(e)&&(d.push(e),null===f&&(f=e)),null!==f&&l++;void 0!==s&&s.index===c;)s.index=null!==f?-1:s.index-l,s=n[o=u(n,o)]}d.forEach(e=>e.parentNode.removeChild(e))}const c=e=>{let t=11===e.nodeType?0:1;const r=document.createTreeWalker(e,a,null,!1);for(;r.nextNode();)t++;return t},u=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(Object(o.d)(t))return r}return-1};var l=r(15),d=r(13),f=r(18);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const h=(e,t)=>`${e}--${t}`;let p=!0;void 0===window.ShadyCSS?p=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),p=!1);const v=e=>t=>{const r=h(t.type,e);let n=d.a.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},d.a.set(r,n));let i=n.stringsArray.get(t.strings);if(void 0!==i)return i;const a=t.strings.join(o.f);if(void 0===(i=n.keyString.get(a))){const r=t.getTemplateElement();p&&window.ShadyCSS.prepareTemplateDom(r,e),i=new o.a(t,r),n.keyString.set(a,i)}return n.stringsArray.set(t.strings,i),i},m=["html","svg"],y=new Set,b=(e,t,r)=>{y.add(e);const n=r?r.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:o}=i;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(n,e);const l=document.createElement("style");for(let e=0;e<o;e++){const t=i[e];t.parentNode.removeChild(t),l.textContent+=t.textContent}(e=>{m.forEach(t=>{const r=d.a.get(h(t,e));void 0!==r&&r.keyString.forEach(e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{r.add(e)}),s(e,r)})})})(e);const f=n.content;r?function(e,t,r=null){const{element:{content:n},parts:i}=e;if(null==r)return void n.appendChild(t);const o=document.createTreeWalker(n,a,null,!1);let s=u(i),l=0,d=-1;for(;o.nextNode();){for(d++,o.currentNode===r&&(l=c(t),r.parentNode.insertBefore(t,r));-1!==s&&i[s].index===d;){if(l>0){for(;-1!==s;)i[s].index+=l,s=u(i,s);return}s=u(i,s)}}}(r,l,f.firstChild):f.insertBefore(l,f.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const p=f.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==p)t.insertBefore(p.cloneNode(!0),t.firstChild);else if(r){f.insertBefore(l,f.firstChild);const e=new Set;e.add(l),s(r,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const g={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},w=(e,t)=>t!==e&&(t==t||e==e),_={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:w},O=Promise.resolve(!0),x=1,S=4,E=8,k=16,j=32,P="finalized";class T extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=O,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,r)=>{const n=this._attributeNameForProperty(r,t);void 0!==n&&(this._attributeToPropertyMap.set(n,r),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=_){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const r="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[r]},set(t){const n=this[e];this[r]=t,this._requestUpdate(e,n)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(P)||e.finalize(),this[P]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const r of t)this.createProperty(r,e[r])}}static _attributeNameForProperty(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=w){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t.type,n=t.converter||g,i="function"==typeof n?n:n.fromAttribute;return i?i(e,r):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const r=t.type,n=t.converter;return(n&&n.toAttribute||g.toAttribute)(e,r)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|j,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=_){const n=this.constructor,i=n._attributeNameForProperty(e,r);if(void 0!==i){const e=n._propertyValueToAttribute(t,r);if(void 0===e)return;this._updateState=this._updateState|E,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~E}}_attributeToProperty(e,t){if(this._updateState&E)return;const r=this.constructor,n=r._attributeToPropertyMap.get(e);if(void 0!==n){const e=r._classProperties.get(n)||_;this._updateState=this._updateState|k,this[n]=r._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~k}}_requestUpdate(e,t){let r=!0;if(void 0!==e){const n=this.constructor,i=n._classProperties.get(e)||_;n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&k||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):r=!1}!this._hasRequestedUpdate&&r&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|S;const r=this._updatePromise;this._updatePromise=new Promise((r,n)=>{e=r,t=n});try{await r}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&j}get _hasRequestedUpdate(){return this._updateState&S}get hasUpdated(){return this._updateState&x}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&x||(this._updateState=this._updateState|x,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~S}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}T[P]=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const C=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(t){window.customElements.define(e,t)}}})(e,t);const R="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol();class Q{constructor(e,t){if(t!==q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(R?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const I=(e,...t)=>{const r=t.reduce((t,r,n)=>t+(e=>{if(e instanceof Q)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[n+1],e[0]);return new Q(r,q)};r.d(t,"a",function(){return A}),r.d(t,"c",function(){return C}),r.d(t,"d",function(){return n.e}),r.d(t,"b",function(){return I}),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const N=e=>e.flat?e.flat(1/0):function e(t,r=[]){for(let n=0,i=t.length;n<i;n++){const i=t[n];Array.isArray(i)?e(i,r):r.push(i)}return r}(e);class A extends T{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){N(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?R?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof n.c&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}A.finalized=!0,A.render=(e,t,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const n=r.scopeName,o=l.a.has(t),a=p&&11===t.nodeType&&!!t.host,s=a&&!y.has(n),c=s?document.createDocumentFragment():t;if(Object(l.b)(e,c,Object.assign({templateFactory:v(n)},r)),s){const e=l.a.get(c);l.a.delete(c);const r=e.value instanceof f.a?e.value.template:void 0;b(n,c,r),Object(i.b)(t,t.firstChild),t.appendChild(c),l.a.set(t,e)}!o&&a&&window.ShadyCSS.styleElement(t.host)}},function(e,t,r){"use strict";r.d(t,"c",function(){return i}),r.d(t,"a",function(){return o}),r.d(t,"e",function(){return a}),r.d(t,"b",function(){return s}),r.d(t,"d",function(){return c});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function i(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function s(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{c(n.next(e))}catch(e){o(e)}}function s(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(a,s)}c((n=n.apply(e,t||[])).next())})}function c(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}},function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return L}),r.d(t,"b",function(){return f}),r.d(t,"c",function(){return E}),r.d(t,"d",function(){return F}),r.d(t,"e",function(){return z}),r.d(t,"f",function(){return B}),r.d(t,"g",function(){return q}),r.d(t,"h",function(){return Q}),r.d(t,"i",function(){return g}),r.d(t,"j",function(){return T}),r.d(t,"k",function(){return S}),r.d(t,"l",function(){return R}),r.d(t,"m",function(){return j}),r.d(t,"n",function(){return P}),r.d(t,"o",function(){return C}),r.d(t,"p",function(){return d}),r.d(t,"q",function(){return Y}),r.d(t,"r",function(){return O}),r.d(t,"s",function(){return _}),r.d(t,"t",function(){return p}),r.d(t,"u",function(){return m}),r.d(t,"v",function(){return v}),r.d(t,"w",function(){return b}),r.d(t,"x",function(){return G}),r.d(t,"y",function(){return K}),r.d(t,"z",function(){return X}),r.d(t,"A",function(){return ee}),r.d(t,"B",function(){return te}),r.d(t,"C",function(){return U}),r.d(t,"D",function(){return $}),r.d(t,"E",function(){return h}),r.d(t,"F",function(){return w}),r.d(t,"G",function(){return u}),r.d(t,"H",function(){return y}),r.d(t,"I",function(){return J});var n=r(9),i=r(3),o=r(1),a=r(34),s=r.n(a);r(26);function c(e,t,r,n){if(function(e){return"IntValue"===e.kind}(r)||function(e){return"FloatValue"===e.kind}(r))e[t.value]=Number(r.value);else if(function(e){return"BooleanValue"===e.kind}(r)||function(e){return"StringValue"===e.kind}(r))e[t.value]=r.value;else if(function(e){return"ObjectValue"===e.kind}(r)){var o={};r.fields.map(function(e){return c(o,e.name,e.value,n)}),e[t.value]=o}else if(function(e){return"Variable"===e.kind}(r)){var a=(n||{})[r.name.value];e[t.value]=a}else if(function(e){return"ListValue"===e.kind}(r))e[t.value]=r.values.map(function(e){var r={};return c(r,t,e,n),r[t.value]});else if(function(e){return"EnumValue"===e.kind}(r))e[t.value]=r.value;else{if(!function(e){return"NullValue"===e.kind}(r))throw new i.a(17);e[t.value]=null}}function u(e,t){var r=null;e.directives&&(r={},e.directives.forEach(function(e){r[e.name.value]={},e.arguments&&e.arguments.forEach(function(n){var i=n.name,o=n.value;return c(r[e.name.value],i,o,t)})}));var n=null;return e.arguments&&e.arguments.length&&(n={},e.arguments.forEach(function(e){var r=e.name,i=e.value;return c(n,r,i,t)})),d(e.name.value,n,r)}var l=["connection","include","skip","client","rest","export"];function d(e,t,r){if(r&&r.connection&&r.connection.key){if(r.connection.filter&&r.connection.filter.length>0){var n=r.connection.filter?r.connection.filter:[];n.sort();var i=t,o={};return n.forEach(function(e){o[e]=i[e]}),r.connection.key+"("+JSON.stringify(o)+")"}return r.connection.key}var a=e;if(t){var c=s()(t);a+="("+c+")"}return r&&Object.keys(r).forEach(function(e){-1===l.indexOf(e)&&(r[e]&&Object.keys(r[e]).length?a+="@"+e+"("+JSON.stringify(r[e])+")":a+="@"+e)}),a}function f(e,t){if(e.arguments&&e.arguments.length){var r={};return e.arguments.forEach(function(e){var n=e.name,i=e.value;return c(r,n,i,t)}),r}return null}function h(e){return e.alias?e.alias.value:e.name.value}function p(e){return"Field"===e.kind}function v(e){return"InlineFragment"===e.kind}function m(e){return e&&"id"===e.type&&"boolean"==typeof e.generated}function y(e,t){return void 0===t&&(t=!1),Object(o.a)({type:"id",generated:t},"string"==typeof e?{id:e,typename:void 0}:e)}function b(e){return null!=e&&"object"==typeof e&&"json"===e.type}function g(e,t){if(e.directives&&e.directives.length){var r={};return e.directives.forEach(function(e){r[e.name.value]=f(e,t)}),r}return null}function w(e,t){return void 0===t&&(t={}),(r=e.directives,r?r.filter(x).map(function(e){var t=e.arguments;e.name.value,Object(i.b)(t&&1===t.length,4);var r=t[0];Object(i.b)(r.name&&"if"===r.name.value,5);var n=r.value;return Object(i.b)(n&&("Variable"===n.kind||"BooleanValue"===n.kind),6),{directive:e,ifArgument:r}}):[]).every(function(e){var r=e.directive,n=e.ifArgument,o=!1;return"Variable"===n.value.kind?(o=t[n.value.name.value],Object(i.b)(void 0!==o,3)):o=n.value.value,"skip"===r.name.value?!o:o});var r}function _(e,t){return function(e){var t=[];return Object(n.b)(e,{Directive:function(e){t.push(e.name.value)}}),t}(t).some(function(t){return e.indexOf(t)>-1})}function O(e){return e&&_(["client"],e)&&_(["export"],e)}function x(e){var t=e.name.value;return"skip"===t||"include"===t}function S(e,t){var r=t,n=[];return e.definitions.forEach(function(e){if("OperationDefinition"===e.kind)throw new i.a(1);"FragmentDefinition"===e.kind&&n.push(e)}),void 0===r&&(Object(i.b)(1===n.length,2),r=n[0].name.value),Object(o.a)({},e,{definitions:[{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:r}}]}}].concat(e.definitions)})}function E(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return t.forEach(function(t){null!=t&&Object.keys(t).forEach(function(r){e[r]=t[r]})}),e}function k(e){Object(i.b)(e&&"Document"===e.kind,8);var t=e.definitions.filter(function(e){return"FragmentDefinition"!==e.kind}).map(function(e){if("OperationDefinition"!==e.kind)throw new i.a(9);return e});return Object(i.b)(t.length<=1,10),e}function j(e){return k(e),e.definitions.filter(function(e){return"OperationDefinition"===e.kind})[0]}function P(e){return e.definitions.filter(function(e){return"OperationDefinition"===e.kind&&e.name}).map(function(e){return e.name.value})[0]||null}function T(e){return e.definitions.filter(function(e){return"FragmentDefinition"===e.kind})}function C(e){var t=j(e);return Object(i.b)(t&&"query"===t.operation,12),t}function R(e){var t;k(e);for(var r=0,n=e.definitions;r<n.length;r++){var o=n[r];if("OperationDefinition"===o.kind){var a=o.operation;if("query"===a||"mutation"===a||"subscription"===a)return o}"FragmentDefinition"!==o.kind||t||(t=o)}if(t)return t;throw new i.a(16)}function q(e){void 0===e&&(e=[]);var t={};return e.forEach(function(e){t[e.name.value]=e}),t}function Q(e){if(e&&e.variableDefinitions&&e.variableDefinitions.length){var t=e.variableDefinitions.filter(function(e){return e.defaultValue}).map(function(e){var t=e.variable,r=e.defaultValue,n={};return c(n,t.name,r),n});return E.apply(void 0,[{}].concat(t))}return{}}function I(e,t,r){var n=0;return e.forEach(function(r,i){t.call(this,r,i,e)&&(e[n++]=r)},r),e.length=n,e}var N={kind:"Field",name:{kind:"Name",value:"__typename"}};function A(e){return function e(t,r){return t.selectionSet.selections.every(function(t){return"FragmentSpread"===t.kind&&e(r[t.name.value],r)})}(j(e)||function(e){Object(i.b)("Document"===e.kind,13),Object(i.b)(e.definitions.length<=1,14);var t=e.definitions[0];return Object(i.b)("FragmentDefinition"===t.kind,15),t}(e),q(T(e)))?null:e}function M(e){return function(t){return e.some(function(e){return e.name&&e.name===t.name.value||e.test&&e.test(t)})}}function D(e,t){var r=Object.create(null),i=[],a=Object.create(null),s=[],c=A(Object(n.b)(t,{Variable:{enter:function(e,t,n){"VariableDefinition"!==n.kind&&(r[e.name.value]=!0)}},Field:{enter:function(t){if(e&&t.directives&&(e.some(function(e){return e.remove})&&t.directives&&t.directives.some(M(e))))return t.arguments&&t.arguments.forEach(function(e){"Variable"===e.value.kind&&i.push({name:e.value.name.value})}),t.selectionSet&&function e(t){var r=[];t.selections.forEach(function(t){(p(t)||v(t))&&t.selectionSet?e(t.selectionSet).forEach(function(e){return r.push(e)}):"FragmentSpread"===t.kind&&r.push(t)});return r}(t.selectionSet).forEach(function(e){s.push({name:e.name.value})}),null}},FragmentSpread:{enter:function(e){a[e.name.value]=!0}},Directive:{enter:function(t){if(M(e)(t))return null}}}));return c&&I(i,function(e){return!r[e.name]}).length&&(c=function(e,t){var r=function(e){return function(t){return e.some(function(e){return t.value&&"Variable"===t.value.kind&&t.value.name&&(e.name===t.value.name.value||e.test&&e.test(t))})}}(e);return A(Object(n.b)(t,{OperationDefinition:{enter:function(t){return Object(o.a)({},t,{variableDefinitions:t.variableDefinitions.filter(function(t){return!e.some(function(e){return e.name===t.variable.name.value})})})}},Field:{enter:function(t){if(e.some(function(e){return e.remove})){var n=0;if(t.arguments.forEach(function(e){r(e)&&(n+=1)}),1===n)return null}}},Argument:{enter:function(e){if(r(e))return null}}}))}(i,c)),c&&I(s,function(e){return!a[e.name]}).length&&(c=function(e,t){function r(t){if(e.some(function(e){return e.name===t.name.value}))return null}return A(Object(n.b)(t,{FragmentSpread:{enter:r},FragmentDefinition:{enter:r}}))}(s,c)),c}function L(e){return Object(n.b)(k(e),{SelectionSet:{enter:function(e,t,r){if(!r||"OperationDefinition"!==r.kind){var n=e.selections;if(n)if(!n.some(function(e){return p(e)&&("__typename"===e.name.value||0===e.name.value.lastIndexOf("__",0))})){var i=r;if(!(p(i)&&i.directives&&i.directives.some(function(e){return"export"===e.name.value})))return Object(o.a)({},e,{selections:n.concat([N])})}}}}})}var V={test:function(e){var t="connection"===e.name.value;return t&&(!e.arguments||e.arguments.some(function(e){return"key"===e.name.value})),t}};function $(e){return D([V],k(e))}function F(e){return"query"===R(e).operation?e:Object(n.b)(e,{OperationDefinition:{enter:function(e){return Object(o.a)({},e,{operation:"query"})}}})}function U(e){k(e);var t=D([{test:function(e){return"client"===e.name.value},remove:!0}],e);return t&&(t=Object(n.b)(t,{FragmentDefinition:{enter:function(e){if(e.selectionSet&&e.selectionSet.selections.every(function(e){return p(e)&&"__typename"===e.name.value}))return null}}})),t}var z="function"==typeof WeakMap&&!("object"==typeof navigator&&"ReactNative"===navigator.product),H=Object.prototype.toString;function B(e){return function e(t,r){switch(H.call(t)){case"[object Array]":if(r.has(t))return r.get(t);var n=t.slice(0);return r.set(t,n),n.forEach(function(t,i){n[i]=e(t,r)}),n;case"[object Object]":if(r.has(t))return r.get(t);var i=Object.create(Object.getPrototypeOf(t));return r.set(t,i),Object.keys(t).forEach(function(n){i[n]=e(t[n],r)}),i;default:return t}}(e,new Map)}function W(t){return(void 0!==e?"production":"development")===t}function G(){return!0===W("production")}function K(){return!0===W("test")}function J(e){try{return e()}catch(e){console.error&&console.error(e)}}function Y(e){return e.errors&&e.errors.length}function X(e){if((!0===W("development")||K())&&!("function"==typeof Symbol&&"string"==typeof Symbol("")))return function e(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach(function(r){null===t[r]||"object"!=typeof t[r]&&"function"!=typeof t[r]||Object.isFrozen(t[r])||e(t[r])}),t}(e);return e}var Z=Object.prototype.hasOwnProperty;function ee(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return te(e)}function te(e){var t=e[0]||{},r=e.length;if(r>1){var n=[];t=ie(t,n);for(var i=1;i<r;++i)t=ne(t,e[i],n)}return t}function re(e){return null!==e&&"object"==typeof e}function ne(e,t,r){return re(t)&&re(e)?(Object.isExtensible&&!Object.isExtensible(e)&&(e=ie(e,r)),Object.keys(t).forEach(function(n){var i=t[n];if(Z.call(e,n)){var o=e[n];i!==o&&(e[n]=ne(ie(o,r),i,r))}else e[n]=i}),e):t}function ie(e,t){return null!==e&&"object"==typeof e&&t.indexOf(e)<0&&(e=Array.isArray(e)?e.slice(0):Object(o.a)({__proto__:Object.getPrototypeOf(e)},e),t.push(e)),e}Object.create({})}).call(this,r(20))},function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return s}),r.d(t,"b",function(){return c});var n=r(1),i="Invariant Violation",o=Object.setPrototypeOf,a=void 0===o?function(e,t){return e.__proto__=t,e}:o,s=function(e){function t(r){void 0===r&&(r=i);var n=e.call(this,"number"==typeof r?i+": "+r+" (see https://github.com/apollographql/invariant-packages)":r)||this;return n.framesToPop=1,n.name=i,a(n,t.prototype),n}return Object(n.c)(t,e),t}(Error);function c(e,t){if(!e)throw new s(t)}function u(e){return function(){return console[e].apply(console,arguments)}}!function(e){e.warn=u("warn"),e.error=u("error")}(c||(c={}));var l={env:{}};if("object"==typeof e)l=e;else try{Function("stub","process = stub")(l)}catch(e){}}).call(this,r(20))},function(e,t,r){"use strict";var n=r(6);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const i=new class{handleAttributeExpressions(e,t,r,i){const o=t[0];if("."===o){return new n.f(e,t.slice(1),r).parts}return"@"===o?[new n.d(e,t.slice(1),i.eventContext)]:"?"===o?[new n.c(e,t.slice(1),r)]:new n.a(e,t,r).parts}handleTextExpression(e){return new n.e(e)}};var o=r(16),a=r(14);r(8),r(7),r(15),r(13),r(18),r(5);r.d(t,"e",function(){return s}),r.d(t,"d",function(){return a.a}),r.d(t,"a",function(){return n.b}),r.d(t,"b",function(){return n.g}),r.d(t,"c",function(){return o.b}),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const s=(e,...t)=>new o.b(e,t,"html",i)},function(e,t,r){"use strict";r.d(t,"f",function(){return n}),r.d(t,"g",function(){return i}),r.d(t,"b",function(){return a}),r.d(t,"a",function(){return s}),r.d(t,"d",function(){return u}),r.d(t,"c",function(){return l}),r.d(t,"e",function(){return d});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${n}--\x3e`,o=new RegExp(`${n}|${i}`),a="$lit$";class s{constructor(e,t){this.parts=[],this.element=t;const r=[],i=[],s=document.createTreeWalker(t.content,133,null,!1);let u=0,f=-1,h=0;const{strings:p,values:{length:v}}=e;for(;h<v;){const e=s.nextNode();if(null!==e){if(f++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:r}=t;let n=0;for(let e=0;e<r;e++)c(t[e].name,a)&&n++;for(;n-- >0;){const t=p[h],r=d.exec(t)[2],n=r.toLowerCase()+a,i=e.getAttribute(n);e.removeAttribute(n);const s=i.split(o);this.parts.push({type:"attribute",index:f,name:r,strings:s}),h+=s.length-1}}"TEMPLATE"===e.tagName&&(i.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(n)>=0){const n=e.parentNode,i=t.split(o),s=i.length-1;for(let t=0;t<s;t++){let r,o=i[t];if(""===o)r=l();else{const e=d.exec(o);null!==e&&c(e[2],a)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-a.length)+e[3]),r=document.createTextNode(o)}n.insertBefore(r,e),this.parts.push({type:"node",index:++f})}""===i[s]?(n.insertBefore(l(),e),r.push(e)):e.data=i[s],h+=s}}else if(8===e.nodeType)if(e.data===n){const t=e.parentNode;null!==e.previousSibling&&f!==u||(f++,t.insertBefore(l(),e)),u=f,this.parts.push({type:"node",index:f}),null===e.nextSibling?e.data="":(r.push(e),f--),h++}else{let t=-1;for(;-1!==(t=e.data.indexOf(n,t+1));)this.parts.push({type:"node",index:-1}),h++}}else s.currentNode=i.pop()}for(const e of r)e.parentNode.removeChild(e)}}const c=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},u=e=>-1!==e.index,l=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(e,t,r){"use strict";r.d(t,"a",function(){return d}),r.d(t,"b",function(){return f}),r.d(t,"e",function(){return h}),r.d(t,"c",function(){return p}),r.d(t,"f",function(){return v}),r.d(t,"g",function(){return m}),r.d(t,"d",function(){return b});var n=r(14),i=r(8),o=r(7),a=r(18),s=r(16),c=r(5);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const u=e=>null===e||!("object"==typeof e||"function"==typeof e),l=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class d{constructor(e,t,r){this.dirty=!0,this.element=e,this.name=t,this.strings=r,this.parts=[];for(let e=0;e<r.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new f(this)}_getValue(){const e=this.strings,t=e.length-1;let r="";for(let n=0;n<t;n++){r+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(u(e)||!l(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class f{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===o.a||u(e)&&e===this.value||(this.value=e,Object(n.b)(e)||(this.committer.dirty=!0))}commit(){for(;Object(n.b)(this.value);){const e=this.value;this.value=o.a,e(this)}this.value!==o.a&&this.committer.commit()}}class h{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Object(c.c)()),this.endNode=e.appendChild(Object(c.c)())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=Object(c.c)()),e.__insert(this.endNode=Object(c.c)())}insertAfterPart(e){e.__insert(this.startNode=Object(c.c)()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;Object(n.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o.a,e(this)}const e=this.__pendingValue;e!==o.a&&(u(e)?e!==this.value&&this.__commitText(e):e instanceof s.b?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):l(e)?this.__commitIterable(e):e===o.b?(this.value=o.b,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,r="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=r:this.__commitNode(document.createTextNode(r)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof a.a&&this.value.template===t)this.value.update(e.values);else{const r=new a.a(t,e.processor,this.options),n=r._clone();r.update(e.values),this.__commitNode(n),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r,n=0;for(const i of e)void 0===(r=t[n])&&(r=new h(this.options),t.push(r),0===n?r.appendIntoPart(this):r.insertAfterPart(t[n-1])),r.setValue(i),r.commit(),n++;n<t.length&&(t.length=n,this.clear(r&&r.endNode))}clear(e=this.startNode){Object(i.b)(this.startNode.parentNode,e.nextSibling,this.endNode)}}class p{constructor(e,t,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=r}setValue(e){this.__pendingValue=e}commit(){for(;Object(n.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o.a,e(this)}if(this.__pendingValue===o.a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=o.a}}class v extends d{constructor(e,t,r){super(e,t,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new m(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class m extends f{}let y=!1;try{const e={get capture(){return y=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class b{constructor(e,t,r){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=r,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;Object(n.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o.a,e(this)}if(this.__pendingValue===o.a)return;const e=this.__pendingValue,t=this.value,r=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=g(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=o.a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const g=e=>e&&(y?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return i});
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n={},i={}},function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"c",function(){return i}),r.d(t,"b",function(){return o});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,r=null,n=null)=>{for(;t!==r;){const r=t.nextSibling;e.insertBefore(t,n),t=r}},o=(e,t,r=null)=>{for(;t!==r;){const r=t.nextSibling;e.removeChild(t),t=r}}},function(e,t,r){"use strict";var n="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):void 0;function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=10,a=2;function s(e,t){switch(i(e)){case"string":return JSON.stringify(e);case"function":return e.name?"[function ".concat(e.name,"]"):"[function]";case"object":return null===e?"null":function(e,t){if(-1!==t.indexOf(e))return"[Circular]";var r=[].concat(t,[e]),i=function(e){var t=e[String(n)];if("function"==typeof t)return t;if("function"==typeof e.inspect)return e.inspect}(e);if(void 0!==i){var c=i.call(e);if(c!==e)return"string"==typeof c?c:s(c,r)}else if(Array.isArray(e))return function(e,t){if(0===e.length)return"[]";if(t.length>a)return"[Array]";for(var r=Math.min(o,e.length),n=e.length-r,i=[],c=0;c<r;++c)i.push(s(e[c],t));1===n?i.push("... 1 more item"):n>1&&i.push("... ".concat(n," more items"));return"["+i.join(", ")+"]"}(e,r);return function(e,t){var r=Object.keys(e);if(0===r.length)return"{}";if(t.length>a)return"["+function(e){var t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if("Object"===t&&"function"==typeof e.constructor){var r=e.constructor.name;if("string"==typeof r&&""!==r)return r}return t}(e)+"]";return"{ "+r.map(function(r){return r+": "+s(e[r],t)}).join(", ")+" }"}(e,r)}(e,t);default:return String(e)}}r.d(t,"a",function(){return u}),r.d(t,"b",function(){return l});var c={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},u=Object.freeze({});function l(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c,n=void 0,i=Array.isArray(e),o=[e],a=-1,l=[],h=void 0,p=void 0,v=void 0,m=[],y=[],b=e;do{var g=++a===o.length,w=g&&0!==l.length;if(g){if(p=0===y.length?void 0:m[m.length-1],h=v,v=y.pop(),w){if(i)h=h.slice();else{for(var _={},O=0,x=Object.keys(h);O<x.length;O++){var S=x[O];_[S]=h[S]}h=_}for(var E=0,k=0;k<l.length;k++){var j=l[k][0],P=l[k][1];i&&(j-=E),i&&null===P?(h.splice(j,1),E++):h[j]=P}}a=n.index,o=n.keys,l=n.edits,i=n.inArray,n=n.prev}else{if(p=v?i?a:o[a]:void 0,null==(h=v?v[p]:b))continue;v&&m.push(p)}var T=void 0;if(!Array.isArray(h)){if(!d(h))throw new Error("Invalid AST Node: "+s(h,[]));var C=f(t,h.kind,g);if(C){if((T=C.call(t,h,p,v,m,y))===u)break;if(!1===T){if(!g){m.pop();continue}}else if(void 0!==T&&(l.push([p,T]),!g)){if(!d(T)){m.pop();continue}h=T}}}void 0===T&&w&&l.push([p,h]),g?m.pop():(n={inArray:i,index:a,keys:o,edits:l,prev:n},o=(i=Array.isArray(h))?h:r[h.kind]||[],a=-1,l=[],v&&y.push(v),v=h)}while(void 0!==n);return 0!==l.length&&(b=l[l.length-1][1]),b}function d(e){return Boolean(e&&"string"==typeof e.kind)}function f(e,t,r){var n=e[t];if(n){if(!r&&"function"==typeof n)return n;var i=r?n.leave:n.enter;if("function"==typeof i)return i}else{var o=r?e.leave:e.enter;if(o){if("function"==typeof o)return o;var a=o[t];if("function"==typeof a)return a}}}},function(e,t,r){"use strict";r.d(t,"e",function(){return i}),r.d(t,"d",function(){return o}),r.d(t,"c",function(){return a}),r.d(t,"a",function(){return s}),r.d(t,"b",function(){return c}),r.d(t,"f",function(){return u});var n=r(11);const i="UPDATE_PAGE",o="UPDATE_CONTEXT",a="UPDATE_ACTIVE_PAGE",s="REGISTER_NAVIGATION_CALLBACK",c="UNREGISTER_NAVIGATION_CALLBACK",u=({pathname:e,search:t})=>r=>{const n=decodeURIComponent(e).match(/\/([^\/]+)\/*([^\/]*)/)||[],i=n[1]||"",o=n[2],a=new URLSearchParams(t);var s={};a.forEach((e,t)=>{s[t]=e}),r(l(i,o,s))},l=(e,t,o)=>a=>{var s=(e=>{var t=n.a.getState().app.modules;if(t)for(let r=t.length-1;r>=0;r--){let n=t[r],i=n.route&&n.route(e);if(i)return i}})(e);if(s){if(e!=s)return void a(u({pathname:s,params:o}))}else r.e(1).then(r.bind(null,53)),s="page404";a({type:i,page:e,resourceId:t,params:o})}},function(e,t,r){"use strict";var n=r(19),i=function(){return Math.random().toString(36).substring(7).split("").join(".")},o={INIT:"@@redux/INIT"+i(),REPLACE:"@@redux/REPLACE"+i(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+i()}};function a(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function s(e,t){var r=t&&t.type;return"Given "+(r&&'action "'+String(r)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach(function(t){c(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function f(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(i){return"function"==typeof i?i(r,n,e):t(i)}}}}var h=f();h.withExtraArgument=f;var p=h;
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var v=r(17);const m={baseUrl:location.origin,contextPath:""};var y=(e=m,t)=>{switch(t.type){case v.c:return{...e,modules:t.modules};case v.a:return{...e,baseUrl:t.baseUrl};case v.b:return{...e,contextPath:t.contextPath};default:return e}},b=r(10);const g={page:"",resourceId:"",params:{},activePage:null,context:{},callbacks:[]};var w=(e=g,t)=>{switch(t.type){case b.e:return{...e,page:t.page,resourceId:t.resourceId,params:t.params};case b.d:return{...e,context:t.context};case b.c:return{...e,activePage:t.activePage};case b.a:return{...e,callbacks:[...e.callbacks,t.callback]};case b.b:return{...e,callbacks:e.callbacks.filter(e=>e!==t.callback)};default:return e}};r.d(t,"a",function(){return _});const _=function e(t,r,i){var s;if("function"==typeof r&&"function"==typeof i||"function"==typeof i&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof r&&void 0===i&&(i=r,r=void 0),void 0!==i){if("function"!=typeof i)throw new Error("Expected the enhancer to be a function.");return i(e)(t,r)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var c=t,u=r,l=[],d=l,f=!1;function h(){d===l&&(d=l.slice())}function p(){if(f)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return u}function v(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(f)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return h(),d.push(e),function(){if(t){if(f)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,h();var r=d.indexOf(e);d.splice(r,1)}}}function m(e){if(!a(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(f)throw new Error("Reducers may not dispatch actions.");try{f=!0,u=c(u,e)}finally{f=!1}for(var t=l=d,r=0;r<t.length;r++){(0,t[r])()}return e}return m({type:o.INIT}),(s={dispatch:m,subscribe:v,getState:p,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,m({type:o.REPLACE})}})[n.a]=function(){var e,t=v;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function r(){e.next&&e.next(p())}return r(),{unsubscribe:t(r)}}})[n.a]=function(){return this},e},s}(e=>e,(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d)((e=>{return t=>(r,n)=>{let i={};const o=t(r,n);return Object.assign({},o,{addReducers(t){const r=Object.assign({},i,t);this.replaceReducer(e(i=r))}})}})(function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var i=t[n];0,"function"==typeof e[i]&&(r[i]=e[i])}var a,c=Object.keys(r);try{!function(e){Object.keys(e).forEach(function(t){var r=e[t];if(void 0===r(void 0,{type:o.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===r(void 0,{type:o.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+o.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(r)}catch(e){a=e}return function(e,t){if(void 0===e&&(e={}),a)throw a;for(var n=!1,i={},o=0;o<c.length;o++){var u=c[o],l=r[u],d=e[u],f=l(d,t);if(void 0===f){var h=s(u,t);throw new Error(h)}i[u]=f,n=n||f!==d}return n?i:e}}),function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},i={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},o=t.map(function(e){return e(i)});return l({},r,{dispatch:n=d.apply(void 0,o)(r.dispatch)})}}}(p)));_.addReducers({app:y,route:w})},function(e,t,r){"use strict";(function(e){r(52);var n=r(11);r.d(t,"d",function(){return n.a});r(17),r(10),r(23);var i=r(31);r.d(t,"a",function(){return i.a});var o=r(30);r.d(t,"b",function(){return o.a}),r.d(t,"c",function(){return o.b});r(29);e.env["APP-VERSION"],e.env["NODE-ENV"]}).call(this,r(20))},function(e,t,r){"use strict";r.d(t,"b",function(){return i}),r.d(t,"a",function(){return o});var n=r(5);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function i(e){let t=o.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},o.set(e.type,t));let r=t.stringsArray.get(e.strings);if(void 0!==r)return r;const i=e.strings.join(n.f);return void 0===(r=t.keyString.get(i))&&(r=new n.a(e,e.getTemplateElement()),t.keyString.set(i,r)),t.stringsArray.set(e.strings,r),r}const o=new Map},function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"b",function(){return o});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=new WeakMap,i=e=>(...t)=>{const r=e(...t);return n.set(r,!0),r},o=e=>"function"==typeof e&&n.has(e)},function(e,t,r){"use strict";r.d(t,"a",function(){return a}),r.d(t,"b",function(){return s});var n=r(8),i=r(6),o=r(13);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const a=new WeakMap,s=(e,t,r)=>{let s=a.get(t);void 0===s&&(Object(n.b)(t,t.firstChild),a.set(t,s=new i.e(Object.assign({templateFactory:o.b},r))),s.appendInto(t)),s.setValue(e),s.commit()}},function(e,t,r){"use strict";r.d(t,"b",function(){return a}),r.d(t,"a",function(){return s});var n=r(8),i=r(5);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o=` ${i.f} `;class a{constructor(e,t,r,n){this.strings=e,this.values=t,this.type=r,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let n=0;n<e;n++){const e=this.strings[n],a=e.lastIndexOf("\x3c!--");r=(a>-1||r)&&-1===e.indexOf("--\x3e",a+1);const s=i.e.exec(e);t+=null===s?e+(r?o:i.g):e.substr(0,s.index)+s[1]+s[2]+i.b+s[3]+i.f}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class s extends a{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,r=t.firstChild;return t.removeChild(r),Object(n.c)(t,r.firstChild),e}}},function(e,t,r){"use strict";r.d(t,"c",function(){return n}),r.d(t,"a",function(){return i}),r.d(t,"b",function(){return o});const n="UPDATE_MODULES",i="UPDATE_BASE_URL",o="UPDATE_CONTEXT_PATH"},function(e,t,r){"use strict";r.d(t,"a",function(){return o});var n=r(8),i=r(5);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class o{constructor(e,t,r){this.__parts=[],this.template=e,this.processor=t,this.options=r}update(e){let t=0;for(const r of this.__parts)void 0!==r&&r.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=n.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],r=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let a,s=0,c=0,u=o.nextNode();for(;s<r.length;)if(a=r[s],Object(i.d)(a)){for(;c<a.index;)c++,"TEMPLATE"===u.nodeName&&(t.push(u),o.currentNode=u.content),null===(u=o.nextNode())&&(o.currentNode=t.pop(),u=o.nextNode());if("node"===a.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(u.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(u,a.name,a.strings,this.options));s++}else this.__parts.push(void 0),s++;return n.a&&(document.adoptNode(e),customElements.upgrade(e)),e}}},function(e,t,r){"use strict";(function(e,n){var i,o=r(33);i="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:n;var a=Object(o.a)(i);t.a=a}).call(this,r(25),r(40)(e))},function(e,t){var r,n,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var c,u=[],l=!1,d=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&h())}function h(){if(!l){var e=s(f);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new p(e,t)),1!==u.length||l||s(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t){e.exports=scene},function(e,t,r){"use strict";r.d(t,"a",function(){return a});var n=r(0),i=r(11),o=r(10);class a extends n.a{shouldUpdate(){return this.active!==this._oldactive$&&this.activated(this.active),this.active?(this._oldactive$!==this.active&&this.updateContext(),this._oldactive$=this.active,!0):(this._oldactive$=!1,!1)}static get properties(){return{active:Boolean}}activated(e){}updateContext(){i.a.dispatch({type:o.d,context:this.context})}get context(){return{}}}},function(e,t,r){"use strict";r.d(t,"a",function(){return n});const n=r(0).b`
  :host {
    display: block;
    box-sizing: border-box;
  }
`},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";r.d(t,"a",function(){return s});var n=Object.prototype,i=n.toString,o=n.hasOwnProperty,a=new Map;function s(e,t){try{return function e(t,r){if(t===r)return!0;var n=i.call(t);var a=i.call(r);if(n!==a)return!1;switch(n){case"[object Array]":if(t.length!==r.length)return!1;case"[object Object]":if(c(t,r))return!0;var s=Object.keys(t),u=Object.keys(r),l=s.length;if(l!==u.length)return!1;for(var d=0;d<l;++d)if(!o.call(r,s[d]))return!1;for(d=0;d<l;++d){var f=s[d];if(!e(t[f],r[f]))return!1}return!0;case"[object Error]":return t.name===r.name&&t.message===r.message;case"[object Number]":if(t!=t)return r!=r;case"[object Boolean]":case"[object Date]":return+t==+r;case"[object RegExp]":case"[object String]":return t==""+r;case"[object Map]":case"[object Set]":if(t.size!==r.size)return!1;if(c(t,r))return!0;for(var h=t.entries(),p="[object Map]"===n;;){var v=h.next();if(v.done)break;var m=v.value,y=m[0],b=m[1];if(!r.has(y))return!1;if(p&&!e(b,r.get(y)))return!1}return!0}return!1}(e,t)}finally{a.clear()}}function c(e,t){var r=a.get(e);if(r){if(r.has(t))return!0}else a.set(e,r=new Set);return r.add(t),!1}},function(e,t,r){var n=r(44),i="object"==typeof self&&self&&self.Object===Object&&self,o=n||i||Function("return this")();e.exports=o},function(e,t,r){var n=r(27).Symbol;e.exports=n},function(e,t,r){"use strict";var n=r(1),i=r(2),o=r(26),a=r(35),s=r.n(a).a,c=r(3);!function(e){function t(t,r){var n=e.call(this,t)||this;return n.link=r,n}Object(n.c)(t,e)}(Error);function u(e){return e.request.length<=1}function l(e){return new s(function(t){t.error(e)})}function d(e,t){var r=Object(n.a)({},e);return Object.defineProperty(t,"setContext",{enumerable:!1,value:function(e){r="function"==typeof e?Object(n.a)({},r,e(r)):Object(n.a)({},r,e)}}),Object.defineProperty(t,"getContext",{enumerable:!1,value:function(){return Object(n.a)({},r)}}),Object.defineProperty(t,"toKey",{enumerable:!1,value:function(){return function(e){var t=e.query,r=e.variables,n=e.operationName;return JSON.stringify([n,t,r])}(t)}}),t}function f(e,t){return t?t(e):s.of()}function h(e){return"function"==typeof e?new y(e):e}function p(){return new y(function(){return s.of()})}function v(e){return 0===e.length?p():e.map(h).reduce(function(e,t){return e.concat(t)})}function m(e,t,r){var n=h(t),i=h(r||new y(f));return u(n)&&u(i)?new y(function(t){return e(t)?n.request(t)||s.of():i.request(t)||s.of()}):new y(function(t,r){return e(t)?n.request(t,r)||s.of():i.request(t,r)||s.of()})}var y=function(){function e(e){e&&(this.request=e)}return e.prototype.split=function(t,r,n){return this.concat(m(t,r,n||new e(f)))},e.prototype.concat=function(e){return function(e,t){var r=h(e);if(u(r))return r;var n=h(t);return u(n)?new y(function(e){return r.request(e,function(e){return n.request(e)||s.of()})||s.of()}):new y(function(e,t){return r.request(e,function(e){return n.request(e,t)||s.of()})||s.of()})}(this,e)},e.prototype.request=function(e,t){throw new c.a(1)},e.empty=p,e.from=v,e.split=m,e.execute=b,e}();function b(e,t){return e.request(d(t.context,function(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return t.operationName||(t.operationName="string"!=typeof t.query?Object(i.n)(t.query):""),t}(function(e){for(var t=["query","operationName","variables","extensions","context"],r=0,n=Object.keys(e);r<n.length;r++){var i=n[r];if(t.indexOf(i)<0)throw new c.a(2)}return e}(t))))||s.of()}var g,w=r(19),_=r(9);function O(e){return e<7}!function(e){e[e.loading=1]="loading",e[e.setVariables=2]="setVariables",e[e.fetchMore=3]="fetchMore",e[e.refetch=4]="refetch",e[e.poll=6]="poll",e[e.ready=7]="ready",e[e.error=8]="error"}(g||(g={}));var x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(n.c)(t,e),t.prototype[w.a]=function(){return this},t.prototype["@@observable"]=function(){return this},t}(s);function S(e){return Array.isArray(e)&&e.length>0}var E,k=function(e){var t="";return S(e.graphQLErrors)&&e.graphQLErrors.forEach(function(e){var r=e?e.message:"Error message not found.";t+="GraphQL error: "+r+"\n"}),e.networkError&&(t+="Network error: "+e.networkError.message+"\n"),t=t.replace(/\n$/,"")},j=function(e){function t(r){var n=r.graphQLErrors,i=r.networkError,o=r.errorMessage,a=r.extraInfo,s=e.call(this,o)||this;return s.graphQLErrors=n||[],s.networkError=i||null,s.message=o||k(s),s.extraInfo=a,s.__proto__=t.prototype,s}return Object(n.c)(t,e),t}(Error);!function(e){e[e.normal=1]="normal",e[e.refetch=2]="refetch",e[e.poll=3]="poll"}(E||(E={}));var P=function(e){function t(t){var r=t.queryManager,n=t.options,o=t.shouldSubscribe,a=void 0===o||o,s=e.call(this,function(e){return s.onSubscribe(e)})||this;s.observers=new Set,s.subscriptions=new Set,s.isTornDown=!1,s.options=n,s.variables=n.variables||{},s.queryId=r.generateQueryId(),s.shouldSubscribe=a;var c=Object(i.m)(n.query);return s.queryName=c&&c.name&&c.name.value,s.queryManager=r,s}return Object(n.c)(t,e),t.prototype.result=function(){var e=this;return new Promise(function(t,r){var n={next:function(r){t(r),e.observers.delete(n),e.observers.size||e.queryManager.removeQuery(e.queryId),setTimeout(function(){i.unsubscribe()},0)},error:r},i=e.subscribe(n)})},t.prototype.currentResult=function(){var e=this.getCurrentResult();return void 0===e.data&&(e.data={}),e},t.prototype.getCurrentResult=function(){if(this.isTornDown){var e=this.lastResult;return{data:!this.lastError&&e&&e.data||void 0,error:this.lastError,loading:!1,networkStatus:g.error}}var t,r,i,o=this.queryManager.getCurrentQueryResult(this),a=o.data,s=o.partial,c=this.queryManager.queryStore.get(this.queryId),u=this.options.fetchPolicy,l="network-only"===u||"no-cache"===u;if(c){var d=c.networkStatus;if(r=c,void 0===(i=this.options.errorPolicy)&&(i="none"),r&&(r.networkError||"none"===i&&S(r.graphQLErrors)))return{data:void 0,loading:!1,networkStatus:d,error:new j({graphQLErrors:c.graphQLErrors,networkError:c.networkError})};c.variables&&(this.options.variables=Object(n.a)({},this.options.variables,c.variables),this.variables=this.options.variables),t={data:a,loading:O(d),networkStatus:d},c.graphQLErrors&&"all"===this.options.errorPolicy&&(t.errors=c.graphQLErrors)}else{var f=l||s&&"cache-only"!==u;t={data:a,loading:f,networkStatus:f?g.loading:g.ready}}return s||this.updateLastResult(Object(n.a)({},t,{stale:!1})),Object(n.a)({},t,{partial:s})},t.prototype.isDifferentFromLastResult=function(e){var t=this.lastResultSnapshot;return!(t&&e&&t.networkStatus===e.networkStatus&&t.stale===e.stale&&Object(o.a)(t.data,e.data))},t.prototype.getLastResult=function(){return this.lastResult},t.prototype.getLastError=function(){return this.lastError},t.prototype.resetLastResults=function(){delete this.lastResult,delete this.lastResultSnapshot,delete this.lastError,this.isTornDown=!1},t.prototype.resetQueryStoreErrors=function(){var e=this.queryManager.queryStore.get(this.queryId);e&&(e.networkError=null,e.graphQLErrors=[])},t.prototype.refetch=function(e){var t=this.options.fetchPolicy;return"cache-only"===t?Promise.reject(new c.a(3)):("no-cache"!==t&&"cache-and-network"!==t&&(t="network-only"),Object(o.a)(this.variables,e)||(this.variables=Object(n.a)({},this.variables,e)),Object(o.a)(this.options.variables,this.variables)||(this.options.variables=Object(n.a)({},this.options.variables,this.variables)),this.queryManager.fetchQuery(this.queryId,Object(n.a)({},this.options,{fetchPolicy:t}),E.refetch))},t.prototype.fetchMore=function(e){var t=this;Object(c.b)(e.updateQuery,4);var r=Object(n.a)({},e.query?e:Object(n.a)({},this.options,e,{variables:Object(n.a)({},this.variables,e.variables)}),{fetchPolicy:"network-only"}),i=this.queryManager.generateQueryId();return this.queryManager.fetchQuery(i,r,E.normal,this.queryId).then(function(n){return t.updateQuery(function(t){return e.updateQuery(t,{fetchMoreResult:n.data,variables:r.variables})}),t.queryManager.stopQuery(i),n},function(e){throw t.queryManager.stopQuery(i),e})},t.prototype.subscribeToMore=function(e){var t=this,r=this.queryManager.startGraphQLSubscription({query:e.document,variables:e.variables}).subscribe({next:function(r){var n=e.updateQuery;n&&t.updateQuery(function(e,t){var i=t.variables;return n(e,{subscriptionData:r,variables:i})})},error:function(t){e.onError&&e.onError(t)}});return this.subscriptions.add(r),function(){t.subscriptions.delete(r)&&r.unsubscribe()}},t.prototype.setOptions=function(e){var t=this.options.fetchPolicy;this.options=Object(n.a)({},this.options,e),e.pollInterval?this.startPolling(e.pollInterval):0===e.pollInterval&&this.stopPolling();var r=e.fetchPolicy;return this.setVariables(this.options.variables,t!==r&&("cache-only"===t||"standby"===t||"network-only"===r),e.fetchResults)},t.prototype.setVariables=function(e,t,r){return void 0===t&&(t=!1),void 0===r&&(r=!0),this.isTornDown=!1,e=e||this.variables,!t&&Object(o.a)(e,this.variables)?this.observers.size&&r?this.result():Promise.resolve():(this.variables=this.options.variables=e,this.observers.size?this.queryManager.fetchQuery(this.queryId,this.options):Promise.resolve())},t.prototype.updateQuery=function(e){var t=this.queryManager,r=t.getQueryWithPreviousResult(this.queryId),n=r.previousResult,o=r.variables,a=r.document,s=Object(i.I)(function(){return e(n,{variables:o})});s&&(t.dataStore.markUpdateQueryResult(a,o,s),t.broadcastQueries())},t.prototype.stopPolling=function(){this.queryManager.stopPollingQuery(this.queryId),this.options.pollInterval=void 0},t.prototype.startPolling=function(e){R(this),this.options.pollInterval=e,this.queryManager.startPollingQuery(this.options,this.queryId)},t.prototype.updateLastResult=function(e){var t=this.lastResult;return this.lastResult=e,this.lastResultSnapshot=this.queryManager.assumeImmutableResults?e:Object(i.f)(e),t},t.prototype.onSubscribe=function(e){var t=this;try{var r=e._subscription._observer;r&&!r.error&&(r.error=T)}catch(e){}var n=!this.observers.size;return this.observers.add(e),e.next&&this.lastResult&&e.next(this.lastResult),e.error&&this.lastError&&e.error(this.lastError),n&&this.setUpQuery(),function(){t.observers.delete(e)&&!t.observers.size&&t.tearDownQuery()}},t.prototype.setUpQuery=function(){var e=this,t=this.queryManager,r=this.queryId;this.shouldSubscribe&&t.addObservableQuery(r,this),this.options.pollInterval&&(R(this),t.startPollingQuery(this.options,r));var i=function(t){e.updateLastResult(Object(n.a)({},e.lastResult,{errors:t.graphQLErrors,networkStatus:g.error,loading:!1})),C(e.observers,"error",e.lastError=t)};t.observeQuery(r,this.options,{next:function(r){if(e.lastError||e.isDifferentFromLastResult(r)){var n=e.updateLastResult(r),i=e.options,a=i.query,s=i.variables,c=i.fetchPolicy;t.transform(a).hasClientExports?t.getLocalState().addExportedVariables(a,s).then(function(i){var s=e.variables;e.variables=e.options.variables=i,!r.loading&&n&&"cache-only"!==c&&t.transform(a).serverQuery&&!Object(o.a)(s,i)?e.refetch():C(e.observers,"next",r)}):C(e.observers,"next",r)}},error:i}).catch(i)},t.prototype.tearDownQuery=function(){var e=this.queryManager;this.isTornDown=!0,e.stopPollingQuery(this.queryId),this.subscriptions.forEach(function(e){return e.unsubscribe()}),this.subscriptions.clear(),e.removeObservableQuery(this.queryId),e.stopQuery(this.queryId),this.observers.clear()},t}(x);function T(e){}function C(e,t,r){var n=[];e.forEach(function(e){return e[t]&&n.push(e)}),n.forEach(function(e){return e[t](r)})}function R(e){var t=e.options.fetchPolicy;Object(c.b)("cache-first"!==t&&"cache-only"!==t,5)}var q=function(){function e(){this.store={}}return e.prototype.getStore=function(){return this.store},e.prototype.get=function(e){return this.store[e]},e.prototype.initMutation=function(e,t,r){this.store[e]={mutation:t,variables:r||{},loading:!0,error:null}},e.prototype.markMutationError=function(e,t){var r=this.store[e];r&&(r.loading=!1,r.error=t)},e.prototype.markMutationResult=function(e){var t=this.store[e];t&&(t.loading=!1,t.error=null)},e.prototype.reset=function(){this.store={}},e}(),Q=function(){function e(){this.store={}}return e.prototype.getStore=function(){return this.store},e.prototype.get=function(e){return this.store[e]},e.prototype.initQuery=function(e){var t=this.store[e.queryId];Object(c.b)(!t||t.document===e.document||Object(o.a)(t.document,e.document),19);var r,n=!1,i=null;e.storePreviousVariables&&t&&t.networkStatus!==g.loading&&(Object(o.a)(t.variables,e.variables)||(n=!0,i=t.variables)),r=n?g.setVariables:e.isPoll?g.poll:e.isRefetch?g.refetch:g.loading;var a=[];t&&t.graphQLErrors&&(a=t.graphQLErrors),this.store[e.queryId]={document:e.document,variables:e.variables,previousVariables:i,networkError:null,graphQLErrors:a,networkStatus:r,metadata:e.metadata},"string"==typeof e.fetchMoreForQueryId&&this.store[e.fetchMoreForQueryId]&&(this.store[e.fetchMoreForQueryId].networkStatus=g.fetchMore)},e.prototype.markQueryResult=function(e,t,r){this.store&&this.store[e]&&(this.store[e].networkError=null,this.store[e].graphQLErrors=S(t.errors)?t.errors:[],this.store[e].previousVariables=null,this.store[e].networkStatus=g.ready,"string"==typeof r&&this.store[r]&&(this.store[r].networkStatus=g.ready))},e.prototype.markQueryError=function(e,t,r){this.store&&this.store[e]&&(this.store[e].networkError=t,this.store[e].networkStatus=g.error,"string"==typeof r&&this.markQueryResultClient(r,!0))},e.prototype.markQueryResultClient=function(e,t){var r=this.store&&this.store[e];r&&(r.networkError=null,r.previousVariables=null,t&&(r.networkStatus=g.ready))},e.prototype.stopQuery=function(e){delete this.store[e]},e.prototype.reset=function(e){var t=this;Object.keys(this.store).forEach(function(r){e.indexOf(r)<0?t.stopQuery(r):t.store[r].networkStatus=g.loading})},e}();var I=function(){function e(e){var t=e.cache,r=e.client,n=e.resolvers,i=e.fragmentMatcher;this.cache=t,r&&(this.client=r),n&&this.addResolvers(n),i&&this.setFragmentMatcher(i)}return e.prototype.addResolvers=function(e){var t=this;this.resolvers=this.resolvers||{},Array.isArray(e)?e.forEach(function(e){t.resolvers=Object(i.A)(t.resolvers,e)}):this.resolvers=Object(i.A)(this.resolvers,e)},e.prototype.setResolvers=function(e){this.resolvers={},this.addResolvers(e)},e.prototype.getResolvers=function(){return this.resolvers||{}},e.prototype.runResolvers=function(e){var t=e.document,r=e.remoteResult,i=e.context,o=e.variables,a=e.onlyRunForcedResolvers,s=void 0!==a&&a;return Object(n.b)(this,void 0,void 0,function(){return Object(n.d)(this,function(e){return t?[2,this.resolveDocument(t,r.data,i,o,this.fragmentMatcher,s).then(function(e){return Object(n.a)({},r,{data:e.result})})]:[2,r]})})},e.prototype.setFragmentMatcher=function(e){this.fragmentMatcher=e},e.prototype.getFragmentMatcher=function(){return this.fragmentMatcher},e.prototype.clientQuery=function(e){return Object(i.s)(["client"],e)&&this.resolvers?e:null},e.prototype.serverQuery=function(e){return this.resolvers?Object(i.C)(e):e},e.prototype.prepareContext=function(e){void 0===e&&(e={});var t=this.cache;return Object(n.a)({},e,{cache:t,getCacheKey:function(e){if(t.config)return t.config.dataIdFromObject(e);Object(c.b)(!1,6)}})},e.prototype.addExportedVariables=function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),Object(n.b)(this,void 0,void 0,function(){return Object(n.d)(this,function(i){return e?[2,this.resolveDocument(e,this.buildRootValueFromCache(e,t)||{},this.prepareContext(r),t).then(function(e){return Object(n.a)({},t,e.exportedVariables)})]:[2,Object(n.a)({},t)]})})},e.prototype.shouldForceResolvers=function(e){var t=!1;return Object(_.b)(e,{Directive:{enter:function(e){if("client"===e.name.value&&e.arguments&&(t=e.arguments.some(function(e){return"always"===e.name.value&&"BooleanValue"===e.value.kind&&!0===e.value.value})))return _.a}}}),t},e.prototype.buildRootValueFromCache=function(e,t){return this.cache.diff({query:Object(i.d)(e),variables:t,returnPartialData:!0,optimistic:!1}).result},e.prototype.resolveDocument=function(e,t,r,o,a,s){return void 0===r&&(r={}),void 0===o&&(o={}),void 0===a&&(a=function(){return!0}),void 0===s&&(s=!1),Object(n.b)(this,void 0,void 0,function(){var c,u,l,d,f,h,p,v,m;return Object(n.d)(this,function(y){var b;return c=Object(i.l)(e),u=Object(i.j)(e),l=Object(i.g)(u),d=c.operation,f=d?(b=d).charAt(0).toUpperCase()+b.slice(1):"Query",p=(h=this).cache,v=h.client,m={fragmentMap:l,context:Object(n.a)({},r,{cache:p,client:v}),variables:o,fragmentMatcher:a,defaultOperationType:f,exportedVariables:{},onlyRunForcedResolvers:s},[2,this.resolveSelectionSet(c.selectionSet,t,m).then(function(e){return{result:e,exportedVariables:m.exportedVariables}})]})})},e.prototype.resolveSelectionSet=function(e,t,r){return Object(n.b)(this,void 0,void 0,function(){var o,a,s,u,l,d=this;return Object(n.d)(this,function(f){return o=r.fragmentMap,a=r.context,s=r.variables,u=[t],l=function(e){return Object(n.b)(d,void 0,void 0,function(){var l,d;return Object(n.d)(this,function(n){return Object(i.F)(e,s)?Object(i.t)(e)?[2,this.resolveField(e,t,r).then(function(t){var r;void 0!==t&&u.push(((r={})[Object(i.E)(e)]=t,r))})]:(Object(i.v)(e)?l=e:(l=o[e.name.value],Object(c.b)(l,7)),l&&l.typeCondition&&(d=l.typeCondition.name.value,r.fragmentMatcher(t,d,a))?[2,this.resolveSelectionSet(l.selectionSet,t,r).then(function(e){u.push(e)})]:[2]):[2]})})},[2,Promise.all(e.selections.map(l)).then(function(){return Object(i.B)(u)})]})})},e.prototype.resolveField=function(e,t,r){return Object(n.b)(this,void 0,void 0,function(){var o,a,s,c,u,l,d,f,h,p=this;return Object(n.d)(this,function(n){return o=r.variables,a=e.name.value,s=Object(i.E)(e),c=a!==s,u=t[s]||t[a],l=Promise.resolve(u),r.onlyRunForcedResolvers&&!this.shouldForceResolvers(e)||(d=t.__typename||r.defaultOperationType,(f=this.resolvers&&this.resolvers[d])&&(h=f[c?a:s])&&(l=Promise.resolve(h(t,Object(i.b)(e,o),r.context,{field:e})))),[2,l.then(function(t){return void 0===t&&(t=u),e.directives&&e.directives.forEach(function(e){"export"===e.name.value&&e.arguments&&e.arguments.forEach(function(e){"as"===e.name.value&&"StringValue"===e.value.kind&&(r.exportedVariables[e.value.value]=t)})}),e.selectionSet?null==t?t:Array.isArray(t)?p.resolveSubSelectedArray(e,t,r):e.selectionSet?p.resolveSelectionSet(e.selectionSet,t,r):void 0:t})]})})},e.prototype.resolveSubSelectedArray=function(e,t,r){var n=this;return Promise.all(t.map(function(t){return null===t?null:Array.isArray(t)?n.resolveSubSelectedArray(e,t,r):e.selectionSet?n.resolveSelectionSet(e.selectionSet,t,r):void 0}))},e}();function N(e){var t=new Set,r=null;return new x(function(n){return t.add(n),r=r||e.subscribe({next:function(e){t.forEach(function(t){return t.next&&t.next(e)})},error:function(e){t.forEach(function(t){return t.error&&t.error(e)})},complete:function(){t.forEach(function(e){return e.complete&&e.complete()})}}),function(){t.delete(n)&&!t.size&&r&&(r.unsubscribe(),r=null)}})}var A=Object.prototype.hasOwnProperty,M=function(){function e(e){var t=e.link,r=e.queryDeduplication,n=void 0!==r&&r,o=e.store,a=e.onBroadcast,s=void 0===a?function(){}:a,c=e.ssrMode,u=void 0!==c&&c,l=e.clientAwareness,d=void 0===l?{}:l,f=e.localState,h=e.assumeImmutableResults;this.mutationStore=new q,this.queryStore=new Q,this.clientAwareness={},this.idCounter=1,this.queries=new Map,this.fetchQueryRejectFns=new Map,this.transformCache=new(i.e?WeakMap:Map),this.inFlightLinkObservables=new Map,this.pollingInfoByQueryId=new Map,this.link=t,this.queryDeduplication=n,this.dataStore=o,this.onBroadcast=s,this.clientAwareness=d,this.localState=f||new I({cache:o.getCache()}),this.ssrMode=u,this.assumeImmutableResults=!!h}return e.prototype.stop=function(){var e=this;this.queries.forEach(function(t,r){e.stopQueryNoBroadcast(r)}),this.fetchQueryRejectFns.forEach(function(e){e(new c.a(8))})},e.prototype.mutate=function(e){var t=e.mutation,r=e.variables,o=e.optimisticResponse,a=e.updateQueries,s=e.refetchQueries,u=void 0===s?[]:s,l=e.awaitRefetchQueries,d=void 0!==l&&l,f=e.update,h=e.errorPolicy,p=void 0===h?"none":h,v=e.fetchPolicy,m=e.context,y=void 0===m?{}:m;return Object(n.b)(this,void 0,void 0,function(){var e,s,l,h=this;return Object(n.d)(this,function(m){switch(m.label){case 0:return Object(c.b)(t,9),Object(c.b)(!v||"no-cache"===v,10),e=this.generateQueryId(),t=this.transform(t).document,this.setQuery(e,function(){return{document:t}}),r=this.getVariables(t,r),this.transform(t).hasClientExports?[4,this.localState.addExportedVariables(t,r,y)]:[3,2];case 1:r=m.sent(),m.label=2;case 2:return s=function(){var e={};return a&&h.queries.forEach(function(t,r){var n=t.observableQuery;if(n){var i=n.queryName;i&&A.call(a,i)&&(e[r]={updater:a[i],query:h.queryStore.get(r)})}}),e},this.mutationStore.initMutation(e,t,r),this.dataStore.markMutationInit({mutationId:e,document:t,variables:r,updateQueries:s(),update:f,optimisticResponse:o}),this.broadcastQueries(),l=this,[2,new Promise(function(a,c){var h,m;l.getObservableFromLink(t,Object(n.a)({},y,{optimisticResponse:o}),r,!1).subscribe({next:function(n){Object(i.q)(n)&&"none"===p?m=new j({graphQLErrors:n.errors}):(l.mutationStore.markMutationResult(e),"no-cache"!==v&&l.dataStore.markMutationResult({mutationId:e,result:n,document:t,variables:r,updateQueries:s(),update:f}),h=n)},error:function(t){l.mutationStore.markMutationError(e,t),l.dataStore.markMutationComplete({mutationId:e,optimisticResponse:o}),l.broadcastQueries(),l.setQuery(e,function(){return{document:null}}),c(new j({networkError:t}))},complete:function(){if(m&&l.mutationStore.markMutationError(e,m),l.dataStore.markMutationComplete({mutationId:e,optimisticResponse:o}),l.broadcastQueries(),m)c(m);else{"function"==typeof u&&(u=u(h));var t=[];S(u)&&u.forEach(function(e){if("string"==typeof e)l.queries.forEach(function(r){var n=r.observableQuery;n&&n.queryName===e&&t.push(n.refetch())});else{var r={query:e.query,variables:e.variables,fetchPolicy:"network-only"};e.context&&(r.context=e.context),t.push(l.query(r))}}),Promise.all(d?t:[]).then(function(){l.setQuery(e,function(){return{document:null}}),"ignore"===p&&h&&Object(i.q)(h)&&delete h.errors,a(h)})}}})})]}})})},e.prototype.fetchQuery=function(e,t,r,o){return Object(n.b)(this,void 0,void 0,function(){var a,s,c,u,l,d,f,h,p,v,m,y,b,g,w,_,O,x,S=this;return Object(n.d)(this,function(k){switch(k.label){case 0:return a=t.metadata,s=void 0===a?null:a,c=t.fetchPolicy,u=void 0===c?"cache-first":c,l=t.context,d=void 0===l?{}:l,f=this.transform(t.query).document,h=this.getVariables(f,t.variables),this.transform(f).hasClientExports?[4,this.localState.addExportedVariables(f,h,d)]:[3,2];case 1:h=k.sent(),k.label=2;case 2:if(t=Object(n.a)({},t,{variables:h}),m=v="network-only"===u||"no-cache"===u,v||(y=this.dataStore.getCache().diff({query:f,variables:h,returnPartialData:!0,optimistic:!1}),b=y.complete,g=y.result,m=!b||"cache-and-network"===u,p=g),w=m&&"cache-only"!==u&&"standby"!==u,Object(i.s)(["live"],f)&&(w=!0),_=this.idCounter++,O="no-cache"!==u?this.updateQueryWatch(e,f,t):void 0,this.setQuery(e,function(){return{document:f,lastRequestId:_,invalidated:!0,cancel:O}}),this.invalidate(o),this.queryStore.initQuery({queryId:e,document:f,storePreviousVariables:w,variables:h,isPoll:r===E.poll,isRefetch:r===E.refetch,metadata:s,fetchMoreForQueryId:o}),this.broadcastQueries(),w){if(x=this.fetchRequest({requestId:_,queryId:e,document:f,options:t,fetchMoreForQueryId:o}).catch(function(t){throw t.hasOwnProperty("graphQLErrors")?t:(_>=S.getQuery(e).lastRequestId&&(S.queryStore.markQueryError(e,t,o),S.invalidate(e),S.invalidate(o),S.broadcastQueries()),new j({networkError:t}))}),"cache-and-network"!==u)return[2,x];x.catch(function(){})}return this.queryStore.markQueryResultClient(e,!w),this.invalidate(e),this.invalidate(o),this.transform(f).hasForcedResolvers?[2,this.localState.runResolvers({document:f,remoteResult:{data:p},context:d,variables:h,onlyRunForcedResolvers:!0}).then(function(r){return S.markQueryResult(e,r,t,o),S.broadcastQueries(),r})]:(this.broadcastQueries(),[2,{data:p}])}})})},e.prototype.markQueryResult=function(e,t,r,n){var i=r.fetchPolicy,o=r.variables,a=r.errorPolicy;"no-cache"===i?this.setQuery(e,function(){return{newData:{result:t.data,complete:!0}}}):this.dataStore.markQueryResult(t,this.getQuery(e).document,o,n,"ignore"===a||"all"===a)},e.prototype.queryListenerForObserver=function(e,t,r){var n=this;function i(e,t){if(r[e])try{r[e](t)}catch(e){}}return function(r,o){if(n.invalidate(e,!1),r){var a=n.getQuery(e),s=a.observableQuery,c=a.document,u=s?s.options.fetchPolicy:t.fetchPolicy;if("standby"!==u){var l=O(r.networkStatus),d=s&&s.getLastResult(),f=!(!d||d.networkStatus===r.networkStatus),h=t.returnPartialData||!o&&r.previousVariables||f&&t.notifyOnNetworkStatusChange||"cache-only"===u||"cache-and-network"===u;if(!l||h){var p=S(r.graphQLErrors),v=s&&s.options.errorPolicy||t.errorPolicy||"none";if("none"===v&&p||r.networkError)return i("error",new j({graphQLErrors:r.graphQLErrors,networkError:r.networkError}));try{var m=void 0,y=void 0;if(o)"no-cache"!==u&&"network-only"!==u&&n.setQuery(e,function(){return{newData:null}}),m=o.result,y=!o.complete;else{var b=s&&s.getLastError(),g="none"!==v&&(b&&b.graphQLErrors)!==r.graphQLErrors;if(d&&d.data&&!g)m=d.data,y=!1;else{var w=n.dataStore.getCache().diff({query:c,variables:r.previousVariables||r.variables,returnPartialData:!0,optimistic:!0});m=w.result,y=!w.complete}}var _=y&&!(t.returnPartialData||"cache-only"===u),x={data:_?d&&d.data:m,loading:l,networkStatus:r.networkStatus,stale:_};"all"===v&&p&&(x.errors=r.graphQLErrors),i("next",x)}catch(e){i("error",new j({networkError:e}))}}}}}},e.prototype.transform=function(e){var t=this.transformCache;if(!t.has(e)){var r=this.dataStore.getCache(),n=r.transformDocument(e),o=Object(i.D)(r.transformForLink(n)),a=this.localState.clientQuery(n),s=this.localState.serverQuery(o),c={document:n,hasClientExports:Object(i.r)(n),hasForcedResolvers:this.localState.shouldForceResolvers(n),clientQuery:a,serverQuery:s,defaultVars:Object(i.h)(Object(i.m)(n))},u=function(e){e&&!t.has(e)&&t.set(e,c)};u(e),u(n),u(a),u(s)}return t.get(e)},e.prototype.getVariables=function(e,t){return Object(n.a)({},this.transform(e).defaultVars,t)},e.prototype.watchQuery=function(e,t){void 0===t&&(t=!0),Object(c.b)("standby"!==e.fetchPolicy,11),e.variables=this.getVariables(e.query,e.variables),void 0===e.notifyOnNetworkStatusChange&&(e.notifyOnNetworkStatusChange=!1);var r=Object(n.a)({},e);return new P({queryManager:this,options:r,shouldSubscribe:t})},e.prototype.query=function(e){var t=this;return Object(c.b)(e.query,12),Object(c.b)("Document"===e.query.kind,13),Object(c.b)(!e.returnPartialData,14),Object(c.b)(!e.pollInterval,15),new Promise(function(r,n){var i=t.watchQuery(e,!1);t.fetchQueryRejectFns.set("query:"+i.queryId,n),i.result().then(r,n).then(function(){return t.fetchQueryRejectFns.delete("query:"+i.queryId)})})},e.prototype.generateQueryId=function(){return String(this.idCounter++)},e.prototype.stopQueryInStore=function(e){this.stopQueryInStoreNoBroadcast(e),this.broadcastQueries()},e.prototype.stopQueryInStoreNoBroadcast=function(e){this.stopPollingQuery(e),this.queryStore.stopQuery(e),this.invalidate(e)},e.prototype.addQueryListener=function(e,t){this.setQuery(e,function(e){return e.listeners.add(t),{invalidated:!1}})},e.prototype.updateQueryWatch=function(e,t,r){var n=this,i=this.getQuery(e).cancel;i&&i();return this.dataStore.getCache().watch({query:t,variables:r.variables,optimistic:!0,previousResult:function(){var t=null,r=n.getQuery(e).observableQuery;if(r){var i=r.getLastResult();i&&(t=i.data)}return t},callback:function(t){n.setQuery(e,function(){return{invalidated:!0,newData:t}})}})},e.prototype.addObservableQuery=function(e,t){this.setQuery(e,function(){return{observableQuery:t}})},e.prototype.removeObservableQuery=function(e){var t=this.getQuery(e).cancel;this.setQuery(e,function(){return{observableQuery:null}}),t&&t()},e.prototype.clearStore=function(){this.fetchQueryRejectFns.forEach(function(e){e(new c.a(16))});var e=[];return this.queries.forEach(function(t,r){t.observableQuery&&e.push(r)}),this.queryStore.reset(e),this.mutationStore.reset(),this.dataStore.reset()},e.prototype.resetStore=function(){var e=this;return this.clearStore().then(function(){return e.reFetchObservableQueries()})},e.prototype.reFetchObservableQueries=function(e){var t=this;void 0===e&&(e=!1);var r=[];return this.queries.forEach(function(n,i){var o=n.observableQuery;if(o){var a=o.options.fetchPolicy;o.resetLastResults(),"cache-only"===a||!e&&"standby"===a||r.push(o.refetch()),t.setQuery(i,function(){return{newData:null}}),t.invalidate(i)}}),this.broadcastQueries(),Promise.all(r)},e.prototype.observeQuery=function(e,t,r){return this.addQueryListener(e,this.queryListenerForObserver(e,t,r)),this.fetchQuery(e,t)},e.prototype.startQuery=function(e,t,r){return this.addQueryListener(e,r),this.fetchQuery(e,t).catch(function(){}),e},e.prototype.startGraphQLSubscription=function(e){var t=this,r=e.query,n=e.fetchPolicy,o=e.variables;r=this.transform(r).document,o=this.getVariables(r,o);var a=function(e){return t.getObservableFromLink(r,{},e,!1).map(function(o){if(n&&"no-cache"===n||(t.dataStore.markSubscriptionResult(o,r,e),t.broadcastQueries()),Object(i.q)(o))throw new j({graphQLErrors:o.errors});return o})};if(this.transform(r).hasClientExports){var s=this.localState.addExportedVariables(r,o).then(a);return new x(function(e){var t=null;return s.then(function(r){return t=r.subscribe(e)},e.error),function(){return t&&t.unsubscribe()}})}return a(o)},e.prototype.stopQuery=function(e){this.stopQueryNoBroadcast(e),this.broadcastQueries()},e.prototype.stopQueryNoBroadcast=function(e){this.stopQueryInStoreNoBroadcast(e),this.removeQuery(e)},e.prototype.removeQuery=function(e){this.fetchQueryRejectFns.delete("query:"+e),this.fetchQueryRejectFns.delete("fetchRequest:"+e),this.getQuery(e).subscriptions.forEach(function(e){return e.unsubscribe()}),this.queries.delete(e)},e.prototype.getCurrentQueryResult=function(e,t){void 0===t&&(t=!0);var r=e.options,n=r.variables,i=r.query,o=r.fetchPolicy,a=r.returnPartialData,s=e.getLastResult(),c=this.getQuery(e.queryId).newData;if(c&&c.complete)return{data:c.result,partial:!1};if("no-cache"===o||"network-only"===o)return{data:void 0,partial:!1};var u=this.dataStore.getCache().diff({query:i,variables:n,previousResult:s?s.data:void 0,returnPartialData:!0,optimistic:t}),l=u.result,d=u.complete;return{data:d||a?l:void 0,partial:!d}},e.prototype.getQueryWithPreviousResult=function(e){var t;if("string"==typeof e){var r=this.getQuery(e).observableQuery;Object(c.b)(r,17),t=r}else t=e;var n=t.options,i=n.variables,o=n.query;return{previousResult:this.getCurrentQueryResult(t,!1).data,variables:i,document:o}},e.prototype.broadcastQueries=function(){var e=this;this.onBroadcast(),this.queries.forEach(function(t,r){t.invalidated&&t.listeners.forEach(function(n){n&&n(e.queryStore.get(r),t.newData)})})},e.prototype.getLocalState=function(){return this.localState},e.prototype.getObservableFromLink=function(e,t,r,o){var a,s=this;void 0===o&&(o=this.queryDeduplication);var c=this.transform(e).serverQuery;if(c){var u=this.inFlightLinkObservables,l=this.link,d={query:c,variables:r,operationName:Object(i.n)(c)||void 0,context:this.prepareContext(Object(n.a)({},t,{forceFetch:!o}))};if(t=d.context,o){var f=u.get(c)||new Map;u.set(c,f);var h=JSON.stringify(r);if(!(a=f.get(h))){f.set(h,a=N(b(l,d)));var p=function(){f.delete(h),f.size||u.delete(c),v.unsubscribe()},v=a.subscribe({next:p,error:p,complete:p})}}else a=N(b(l,d))}else a=x.of({data:{}}),t=this.prepareContext(t);var m=this.transform(e).clientQuery;return m&&(a=function(e,t){return new x(function(r){var n=r.next,i=r.error,o=r.complete,a=0,s=!1,c={next:function(e){++a,new Promise(function(r){r(t(e))}).then(function(e){--a,n&&n.call(r,e),s&&c.complete()},function(e){--a,i&&i.call(r,e)})},error:function(e){i&&i.call(r,e)},complete:function(){s=!0,a||o&&o.call(r)}},u=e.subscribe(c);return function(){return u.unsubscribe()}})}(a,function(e){return s.localState.runResolvers({document:m,remoteResult:e,context:t,variables:r})})),a},e.prototype.fetchRequest=function(e){var t,r,n=this,i=e.requestId,o=e.queryId,a=e.document,s=e.options,c=e.fetchMoreForQueryId,u=s.variables,l=s.errorPolicy,d=void 0===l?"none":l,f=s.fetchPolicy;return new Promise(function(e,l){var h=n.getObservableFromLink(a,s.context,u),p="fetchRequest:"+o;n.fetchQueryRejectFns.set(p,l);var v=function(){n.fetchQueryRejectFns.delete(p),n.setQuery(o,function(e){e.subscriptions.delete(m)})},m=h.map(function(e){if(i>=n.getQuery(o).lastRequestId&&(n.markQueryResult(o,e,s,c),n.queryStore.markQueryResult(o,e,c),n.invalidate(o),n.invalidate(c),n.broadcastQueries()),"none"===d&&S(e.errors))return l(new j({graphQLErrors:e.errors}));if("all"===d&&(r=e.errors),c||"no-cache"===f)t=e.data;else{var h=n.dataStore.getCache().diff({variables:u,query:a,optimistic:!1,returnPartialData:!0}),p=h.result;(h.complete||s.returnPartialData)&&(t=p)}}).subscribe({error:function(e){v(),l(e)},complete:function(){v(),e({data:t,errors:r,loading:!1,networkStatus:g.ready,stale:!1})}});n.setQuery(o,function(e){e.subscriptions.add(m)})})},e.prototype.getQuery=function(e){return this.queries.get(e)||{listeners:new Set,invalidated:!1,document:null,newData:null,lastRequestId:1,observableQuery:null,subscriptions:new Set}},e.prototype.setQuery=function(e,t){var r=this.getQuery(e),i=Object(n.a)({},r,t(r));this.queries.set(e,i)},e.prototype.invalidate=function(e,t){void 0===t&&(t=!0),e&&this.setQuery(e,function(){return{invalidated:t}})},e.prototype.prepareContext=function(e){void 0===e&&(e={});var t=this.localState.prepareContext(e);return Object(n.a)({},t,{clientAwareness:this.clientAwareness})},e.prototype.checkInFlight=function(e){var t=this.queryStore.get(e);return t&&t.networkStatus!==g.ready&&t.networkStatus!==g.error},e.prototype.startPollingQuery=function(e,t,r){var i=this,o=e.pollInterval;if(Object(c.b)(o,18),!this.ssrMode){var a=this.pollingInfoByQueryId.get(t);a||this.pollingInfoByQueryId.set(t,a={}),a.interval=o,a.options=Object(n.a)({},e,{fetchPolicy:"network-only"});var s=function(){var e=i.pollingInfoByQueryId.get(t);e&&(i.checkInFlight(t)?u():i.fetchQuery(t,e.options,E.poll).then(u,u))},u=function(){var e=i.pollingInfoByQueryId.get(t);e&&(clearTimeout(e.timeout),e.timeout=setTimeout(s,e.interval))};r&&this.addQueryListener(t,r),u()}return t},e.prototype.stopPollingQuery=function(e){this.pollingInfoByQueryId.delete(e)},e}(),D=function(){function e(e){this.cache=e}return e.prototype.getCache=function(){return this.cache},e.prototype.markQueryResult=function(e,t,r,n,o){void 0===o&&(o=!1);var a=!Object(i.q)(e);o&&Object(i.q)(e)&&e.data&&(a=!0),!n&&a&&this.cache.write({result:e.data,dataId:"ROOT_QUERY",query:t,variables:r})},e.prototype.markSubscriptionResult=function(e,t,r){Object(i.q)(e)||this.cache.write({result:e.data,dataId:"ROOT_SUBSCRIPTION",query:t,variables:r})},e.prototype.markMutationInit=function(e){var t,r=this;e.optimisticResponse&&(t="function"==typeof e.optimisticResponse?e.optimisticResponse(e.variables):e.optimisticResponse,this.cache.recordOptimisticTransaction(function(n){var i=r.cache;r.cache=n;try{r.markMutationResult({mutationId:e.mutationId,result:{data:t},document:e.document,variables:e.variables,updateQueries:e.updateQueries,update:e.update})}finally{r.cache=i}},e.mutationId))},e.prototype.markMutationResult=function(e){var t=this;if(!Object(i.q)(e.result)){var r=[{result:e.result.data,dataId:"ROOT_MUTATION",query:e.document,variables:e.variables}],n=e.updateQueries;n&&Object.keys(n).forEach(function(o){var a=n[o],s=a.query,c=a.updater,u=t.cache.diff({query:s.document,variables:s.variables,returnPartialData:!0,optimistic:!1}),l=u.result;if(u.complete){var d=Object(i.I)(function(){return c(l,{mutationResult:e.result,queryName:Object(i.n)(s.document)||void 0,queryVariables:s.variables})});d&&r.push({result:d,dataId:"ROOT_QUERY",query:s.document,variables:s.variables})}}),this.cache.performTransaction(function(t){r.forEach(function(e){return t.write(e)});var n=e.update;n&&Object(i.I)(function(){return n(t,e.result)})})}},e.prototype.markMutationComplete=function(e){var t=e.mutationId;e.optimisticResponse&&this.cache.removeOptimistic(t)},e.prototype.markUpdateQueryResult=function(e,t,r){this.cache.write({result:r,dataId:"ROOT_QUERY",variables:t,query:e})},e.prototype.reset=function(){return this.cache.reset()},e}(),L="2.6.4",V=function(){function e(e){var t=this;this.defaultOptions={},this.resetStoreCallbacks=[],this.clearStoreCallbacks=[];var r=e.cache,n=e.ssrMode,i=void 0!==n&&n,o=e.ssrForceFetchDelay,a=void 0===o?0:o,s=e.connectToDevTools,u=e.queryDeduplication,l=void 0===u||u,d=e.defaultOptions,f=e.assumeImmutableResults,h=void 0!==f&&f,p=e.resolvers,v=e.typeDefs,m=e.fragmentMatcher,b=e.name,g=e.version,w=e.link;if(!w&&p&&(w=y.empty()),!w||!r)throw new c.a(1);this.link=w,this.cache=r,this.store=new D(r),this.disableNetworkFetches=i||a>0,this.queryDeduplication=l,this.defaultOptions=d||{},this.typeDefs=v,a&&setTimeout(function(){return t.disableNetworkFetches=!1},a),this.watchQuery=this.watchQuery.bind(this),this.query=this.query.bind(this),this.mutate=this.mutate.bind(this),this.resetStore=this.resetStore.bind(this),this.reFetchObservableQueries=this.reFetchObservableQueries.bind(this);void 0!==s&&(s&&"undefined"!=typeof window)&&(window.__APOLLO_CLIENT__=this),this.version=L,this.localState=new I({cache:r,client:this,resolvers:p,fragmentMatcher:m}),this.queryManager=new M({link:this.link,store:this.store,queryDeduplication:l,ssrMode:i,clientAwareness:{name:b,version:g},localState:this.localState,assumeImmutableResults:h,onBroadcast:function(){t.devToolsHookCb&&t.devToolsHookCb({action:{},state:{queries:t.queryManager.queryStore.getStore(),mutations:t.queryManager.mutationStore.getStore()},dataWithOptimisticResults:t.cache.extract(!0)})}})}return e.prototype.stop=function(){this.queryManager.stop()},e.prototype.watchQuery=function(e){return this.defaultOptions.watchQuery&&(e=Object(n.a)({},this.defaultOptions.watchQuery,e)),!this.disableNetworkFetches||"network-only"!==e.fetchPolicy&&"cache-and-network"!==e.fetchPolicy||(e=Object(n.a)({},e,{fetchPolicy:"cache-first"})),this.queryManager.watchQuery(e)},e.prototype.query=function(e){return this.defaultOptions.query&&(e=Object(n.a)({},this.defaultOptions.query,e)),Object(c.b)("cache-and-network"!==e.fetchPolicy,2),this.disableNetworkFetches&&"network-only"===e.fetchPolicy&&(e=Object(n.a)({},e,{fetchPolicy:"cache-first"})),this.queryManager.query(e)},e.prototype.mutate=function(e){return this.defaultOptions.mutate&&(e=Object(n.a)({},this.defaultOptions.mutate,e)),this.queryManager.mutate(e)},e.prototype.subscribe=function(e){return this.queryManager.startGraphQLSubscription(e)},e.prototype.readQuery=function(e,t){return void 0===t&&(t=!1),this.cache.readQuery(e,t)},e.prototype.readFragment=function(e,t){return void 0===t&&(t=!1),this.cache.readFragment(e,t)},e.prototype.writeQuery=function(e){var t=this.cache.writeQuery(e);return this.queryManager.broadcastQueries(),t},e.prototype.writeFragment=function(e){var t=this.cache.writeFragment(e);return this.queryManager.broadcastQueries(),t},e.prototype.writeData=function(e){var t=this.cache.writeData(e);return this.queryManager.broadcastQueries(),t},e.prototype.__actionHookForDevTools=function(e){this.devToolsHookCb=e},e.prototype.__requestRaw=function(e){return b(this.link,e)},e.prototype.initQueryManager=function(){return this.queryManager},e.prototype.resetStore=function(){var e=this;return Promise.resolve().then(function(){return e.queryManager.clearStore()}).then(function(){return Promise.all(e.resetStoreCallbacks.map(function(e){return e()}))}).then(function(){return e.reFetchObservableQueries()})},e.prototype.clearStore=function(){var e=this;return Promise.resolve().then(function(){return e.queryManager.clearStore()}).then(function(){return Promise.all(e.clearStoreCallbacks.map(function(e){return e()}))})},e.prototype.onResetStore=function(e){var t=this;return this.resetStoreCallbacks.push(e),function(){t.resetStoreCallbacks=t.resetStoreCallbacks.filter(function(t){return t!==e})}},e.prototype.onClearStore=function(e){var t=this;return this.clearStoreCallbacks.push(e),function(){t.clearStoreCallbacks=t.clearStoreCallbacks.filter(function(t){return t!==e})}},e.prototype.reFetchObservableQueries=function(e){return this.queryManager.reFetchObservableQueries(e)},e.prototype.extract=function(e){return this.cache.extract(e)},e.prototype.restore=function(e){return this.cache.restore(e)},e.prototype.addResolvers=function(e){this.localState.addResolvers(e)},e.prototype.setResolvers=function(e){this.localState.setResolvers(e)},e.prototype.getResolvers=function(){return this.localState.getResolvers()},e.prototype.setLocalStateFragmentMatcher=function(e){this.localState.setFragmentMatcher(e)},e}();function $(e){return{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GeneratedClientQuery"},selectionSet:F(e)}]}}function F(e){if("number"==typeof e||"boolean"==typeof e||"string"==typeof e||null==e)return null;if(Array.isArray(e))return F(e[0]);var t=[];return Object.keys(e).forEach(function(r){var n={kind:"Field",name:{kind:"Name",value:r},selectionSet:F(e[r])||void 0};t.push(n)}),{kind:"SelectionSet",selections:t}}var U,z={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:null,variableDefinitions:null,directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:null,name:{kind:"Name",value:"__typename"},arguments:[],directives:[],selectionSet:null}]}}]},H=function(){function e(){}return e.prototype.transformDocument=function(e){return e},e.prototype.transformForLink=function(e){return e},e.prototype.readQuery=function(e,t){return void 0===t&&(t=!1),this.read({query:e.query,variables:e.variables,optimistic:t})},e.prototype.readFragment=function(e,t){return void 0===t&&(t=!1),this.read({query:Object(i.k)(e.fragment,e.fragmentName),variables:e.variables,rootId:e.id,optimistic:t})},e.prototype.writeQuery=function(e){this.write({dataId:"ROOT_QUERY",result:e.data,query:e.query,variables:e.variables})},e.prototype.writeFragment=function(e){this.write({dataId:e.id,result:e.data,variables:e.variables,query:Object(i.k)(e.fragment,e.fragmentName)})},e.prototype.writeData=function(e){var t,r,n=e.id,i=e.data;if(void 0!==n){var o=null;try{o=this.read({rootId:n,optimistic:!1,query:z})}catch(e){}var a=o&&o.__typename||"__ClientData",s=Object.assign({__typename:a},i);this.writeFragment({id:n,fragment:(t=s,r=a,{kind:"Document",definitions:[{kind:"FragmentDefinition",typeCondition:{kind:"NamedType",name:{kind:"Name",value:r||"__FakeType"}},name:{kind:"Name",value:"GeneratedClientQuery"},selectionSet:F(t)}]}),data:s})}else this.writeQuery({query:$(i),data:i})},e}();U||(U={});var B=null,W={},G=1,K=Array,J=K["@wry/context:Slot"]||function(){var e=function(){function e(){this.id=["slot",G++,Date.now(),Math.random().toString(36).slice(2)].join(":")}return e.prototype.hasValue=function(){for(var e=B;e;e=e.parent)if(this.id in e.slots){var t=e.slots[this.id];if(t===W)break;return e!==B&&(B.slots[this.id]=t),!0}return B&&(B.slots[this.id]=W),!1},e.prototype.getValue=function(){if(this.hasValue())return B.slots[this.id]},e.prototype.withValue=function(e,t,r,n){var i,o=((i={__proto__:null})[this.id]=e,i),a=B;B={parent:a,slots:o};try{return t.apply(n,r)}finally{B=a}},e.bind=function(e){var t=B;return function(){var r=B;try{return B=t,e.apply(this,arguments)}finally{B=r}}},e.noContext=function(e,t,r){if(!B)return e.apply(r,t);var n=B;try{return B=null,e.apply(r,t)}finally{B=n}},e}();try{Object.defineProperty(K,"@wry/context:Slot",{value:K["@wry/context:Slot"]=e,enumerable:!1,writable:!1,configurable:!1})}finally{return e}}();J.bind,J.noContext;function Y(){}var X=function(){function e(e,t){void 0===e&&(e=1/0),void 0===t&&(t=Y),this.max=e,this.dispose=t,this.map=new Map,this.newest=null,this.oldest=null}return e.prototype.has=function(e){return this.map.has(e)},e.prototype.get=function(e){var t=this.getEntry(e);return t&&t.value},e.prototype.getEntry=function(e){var t=this.map.get(e);if(t&&t!==this.newest){var r=t.older,n=t.newer;n&&(n.older=r),r&&(r.newer=n),t.older=this.newest,t.older.newer=t,t.newer=null,this.newest=t,t===this.oldest&&(this.oldest=n)}return t},e.prototype.set=function(e,t){var r=this.getEntry(e);return r?r.value=t:(r={key:e,value:t,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.map.set(e,r),r.value)},e.prototype.clean=function(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)},e.prototype.delete=function(e){var t=this.map.get(e);return!!t&&(t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.map.delete(e),this.dispose(t.value,e),!0)},e}(),Z=new J,ee=[],te=[],re=100;function ne(e,t){if(!e)throw new Error(t||"assertion failure")}function ie(e){switch(e.length){case 0:throw new Error("unknown value");case 1:return e[0];case 2:throw e[1]}}var oe=function(){function e(t,r){this.fn=t,this.args=r,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],++e.count}return e.prototype.recompute=function(){if(ne(!this.recomputing,"already recomputing"),function(e){var t=Z.getValue();if(t)return e.parents.add(t),t.childValues.has(e)||t.childValues.set(e,[]),se(e)?le(t,e):de(t,e),t}(this)||!he(this))return se(this)?function(e){var t=pe(e);Z.withValue(e,ae,[e]),function(e){if("function"==typeof e.subscribe)try{me(e),e.unsubscribe=e.subscribe.apply(null,e.args)}catch(t){return e.setDirty(),!1}return!0}(e)&&function(e){if(e.dirty=!1,se(e))return;ue(e)}(e);return t.forEach(he),ie(e.value)}(this):ie(this.value)},e.prototype.setDirty=function(){this.dirty||(this.dirty=!0,this.value.length=0,ce(this),me(this))},e.prototype.dispose=function(){var e=this;pe(this).forEach(he),me(this),this.parents.forEach(function(t){t.setDirty(),ve(t,e)})},e.count=0,e}();function ae(e){e.recomputing=!0,e.value.length=0;try{e.value[0]=e.fn.apply(null,e.args)}catch(t){e.value[1]=t}e.recomputing=!1}function se(e){return e.dirty||!(!e.dirtyChildren||!e.dirtyChildren.size)}function ce(e){e.parents.forEach(function(t){return le(t,e)})}function ue(e){e.parents.forEach(function(t){return de(t,e)})}function le(e,t){if(ne(e.childValues.has(t)),ne(se(t)),e.dirtyChildren){if(e.dirtyChildren.has(t))return}else e.dirtyChildren=te.pop()||new Set;e.dirtyChildren.add(t),ce(e)}function de(e,t){ne(e.childValues.has(t)),ne(!se(t));var r,n,i,o=e.childValues.get(t);0===o.length?e.childValues.set(t,t.value.slice(0)):(r=o,n=t.value,(i=r.length)>0&&i===n.length&&r[i-1]===n[i-1]||e.setDirty()),fe(e,t),se(e)||ue(e)}function fe(e,t){var r=e.dirtyChildren;r&&(r.delete(t),0===r.size&&(te.length<re&&te.push(r),e.dirtyChildren=null))}function he(e){return 0===e.parents.size&&"function"==typeof e.reportOrphan&&!0===e.reportOrphan()}function pe(e){var t=ee;return e.childValues.size>0&&(t=[],e.childValues.forEach(function(r,n){ve(e,n),t.push(n)})),ne(null===e.dirtyChildren),t}function ve(e,t){t.parents.delete(e),e.childValues.delete(t),fe(e,t)}function me(e){var t=e.unsubscribe;"function"==typeof t&&(e.unsubscribe=void 0,t())}var ye=function(){function e(e){this.weakness=e}return e.prototype.lookup=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this.lookupArray(e)},e.prototype.lookupArray=function(e){var t=this;return e.forEach(function(e){return t=t.getChildTrie(e)}),t.data||(t.data=Object.create(null))},e.prototype.getChildTrie=function(t){var r=this.weakness&&function(e){switch(typeof e){case"object":if(null===e)break;case"function":return!0}return!1}(t)?this.weak||(this.weak=new WeakMap):this.strong||(this.strong=new Map),n=r.get(t);return n||r.set(t,n=new e(this.weakness)),n},e}();var be=new ye("function"==typeof WeakMap);function ge(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return be.lookupArray(e)}var we=new Set;function _e(e,t){void 0===t&&(t=Object.create(null));var r=new X(t.max||Math.pow(2,16),function(e){return e.dispose()}),n=!!t.disposable,i=t.makeCacheKey||ge;function o(){if(!n||Z.hasValue()){var o=i.apply(null,arguments);if(!o)return e.apply(null,arguments);var a=Array.prototype.slice.call(arguments),s=r.get(o);s?s.args=a:(s=new oe(e,a),r.set(o,s),s.subscribe=t.subscribe,n&&(s.reportOrphan=function(){return r.delete(o)}));var c=s.recompute();return r.set(o,s),we.add(r),Z.hasValue()||(we.forEach(function(e){return e.clean()}),we.clear()),n?void 0:c}}return o.dirty=function(){var e=i.apply(null,arguments),t=e&&r.get(e);t&&t.setDirty()},o}var Oe=!1;function xe(){var e=!Oe;return Object(i.y)()||(Oe=!0),e}var Se=function(){function e(){}return e.prototype.ensureReady=function(){return Promise.resolve()},e.prototype.canBypassInit=function(){return!0},e.prototype.match=function(e,t,r){var n=r.store.get(e.id),i="ROOT_QUERY"===e.id;if(!n)return i;var o=n.__typename,a=void 0===o?i&&"Query":o;return a&&a===t||(xe(),"heuristic")},e}(),Ee=(function(){function e(e){e&&e.introspectionQueryResultData?(this.possibleTypesMap=this.parseIntrospectionResult(e.introspectionQueryResultData),this.isReady=!0):this.isReady=!1,this.match=this.match.bind(this)}e.prototype.match=function(e,t,r){Object(c.b)(this.isReady,6);var n=r.store.get(e.id),i="ROOT_QUERY"===e.id;if(!n)return i;var o=n.__typename,a=void 0===o?i&&"Query":o;if(Object(c.b)(a,7),a===t)return!0;var s=this.possibleTypesMap[t];return!!(a&&s&&s.indexOf(a)>-1)},e.prototype.parseIntrospectionResult=function(e){var t={};return e.__schema.types.forEach(function(e){"UNION"!==e.kind&&"INTERFACE"!==e.kind||(t[e.name]=e.possibleTypes.map(function(e){return e.name}))}),t}}(),Object.prototype.hasOwnProperty),ke=function(){function e(e){var t=this;void 0===e&&(e=Object.create(null)),this.data=e,this.depend=_e(function(e){return t.data[e]},{disposable:!0,makeCacheKey:function(e){return e}})}return e.prototype.toObject=function(){return this.data},e.prototype.get=function(e){return this.depend(e),this.data[e]},e.prototype.set=function(e,t){t!==this.data[e]&&(this.data[e]=t,this.depend.dirty(e))},e.prototype.delete=function(e){Ee.call(this.data,e)&&(delete this.data[e],this.depend.dirty(e))},e.prototype.clear=function(){this.replace(null)},e.prototype.replace=function(e){var t=this;e?(Object.keys(e).forEach(function(r){t.set(r,e[r])}),Object.keys(this.data).forEach(function(r){Ee.call(e,r)||t.delete(r)})):Object.keys(this.data).forEach(function(e){t.delete(e)})},e}();function je(e){return new ke(e)}var Pe=function(){function e(e){var t=this,r=void 0===e?{}:e,n=r.cacheKeyRoot,o=void 0===n?new ye(i.e):n,a=r.freezeResults,s=void 0!==a&&a,c=this.executeStoreQuery,u=this.executeSelectionSet,l=this.executeSubSelectedArray;this.freezeResults=s,this.executeStoreQuery=_e(function(e){return c.call(t,e)},{makeCacheKey:function(e){var t=e.query,r=e.rootValue,n=e.contextValue,i=e.variableValues,a=e.fragmentMatcher;if(n.store instanceof ke)return o.lookup(n.store,t,a,JSON.stringify(i),r.id)}}),this.executeSelectionSet=_e(function(e){return u.call(t,e)},{makeCacheKey:function(e){var t=e.selectionSet,r=e.rootValue,n=e.execContext;if(n.contextValue.store instanceof ke)return o.lookup(n.contextValue.store,t,n.fragmentMatcher,JSON.stringify(n.variableValues),r.id)}}),this.executeSubSelectedArray=_e(function(e){return l.call(t,e)},{makeCacheKey:function(e){var t=e.field,r=e.array,n=e.execContext;if(n.contextValue.store instanceof ke)return o.lookup(n.contextValue.store,t,r,JSON.stringify(n.variableValues))}})}return e.prototype.readQueryFromStore=function(e){return this.diffQueryAgainstStore(Object(n.a)({},e,{returnPartialData:!1})).result},e.prototype.diffQueryAgainstStore=function(e){var t=e.store,r=e.query,n=e.variables,a=e.previousResult,s=e.returnPartialData,u=void 0===s||s,l=e.rootId,d=void 0===l?"ROOT_QUERY":l,f=e.fragmentMatcherFunction,h=e.config,p=Object(i.o)(r);n=Object(i.c)({},Object(i.h)(p),n);var v={store:t,dataIdFromObject:h&&h.dataIdFromObject,cacheRedirects:h&&h.cacheRedirects||{}},m=this.executeStoreQuery({query:r,rootValue:{type:"id",id:d,generated:!0,typename:"Query"},contextValue:v,variableValues:n,fragmentMatcher:f}),y=m.missing&&m.missing.length>0;return y&&!u&&m.missing.forEach(function(e){if(!e.tolerable)throw new c.a(8)}),a&&Object(o.a)(a,m.result)&&(m.result=a),{result:m.result,complete:!y}},e.prototype.executeStoreQuery=function(e){var t=e.query,r=e.rootValue,n=e.contextValue,o=e.variableValues,a=e.fragmentMatcher,s=void 0===a?Ce:a,c=Object(i.l)(t),u=Object(i.j)(t),l={query:t,fragmentMap:Object(i.g)(u),contextValue:n,variableValues:o,fragmentMatcher:s};return this.executeSelectionSet({selectionSet:c.selectionSet,rootValue:r,execContext:l})},e.prototype.executeSelectionSet=function(e){var t=this,r=e.selectionSet,o=e.rootValue,a=e.execContext,s=a.fragmentMap,u=a.contextValue,l=a.variableValues,d={result:null},f=[],h=u.store.get(o.id),p=h&&h.__typename||"ROOT_QUERY"===o.id&&"Query"||void 0;function v(e){var t;return e.missing&&(d.missing=d.missing||[],(t=d.missing).push.apply(t,e.missing)),e.result}return r.selections.forEach(function(e){var r;if(Object(i.F)(e,l))if(Object(i.t)(e)){var d=v(t.executeField(h,p,e,a));void 0!==d&&f.push(((r={})[Object(i.E)(e)]=d,r))}else{var m=void 0;if(Object(i.v)(e))m=e;else if(!(m=s[e.name.value]))throw new c.a(9);var y=m.typeCondition&&m.typeCondition.name.value,b=!y||a.fragmentMatcher(o,y,u);if(b){var g=t.executeSelectionSet({selectionSet:m.selectionSet,rootValue:o,execContext:a});"heuristic"===b&&g.missing&&(g=Object(n.a)({},g,{missing:g.missing.map(function(e){return Object(n.a)({},e,{tolerable:!0})})})),f.push(v(g))}}}),d.result=Object(i.B)(f),this.freezeResults,d},e.prototype.executeField=function(e,t,r,n){var o=n.variableValues,a=n.contextValue,s=function(e,t,r,n,o,a){a.resultKey;var s=a.directives,c=r;(n||s)&&(c=Object(i.p)(c,n,s));var u=void 0;if(e&&void 0===(u=e[c])&&o.cacheRedirects&&"string"==typeof t){var l=o.cacheRedirects[t];if(l){var d=l[r];d&&(u=d(e,n,{getCacheKey:function(e){var t=o.dataIdFromObject(e);return t&&Object(i.H)({id:t,typename:e.__typename})}}))}}if(void 0===u)return{result:u,missing:[{object:e,fieldName:c,tolerable:!1}]};Object(i.w)(u)&&(u=u.json);return{result:u}}(e,t,r.name.value,Object(i.b)(r,o),a,{resultKey:Object(i.E)(r),directives:Object(i.i)(r,o)});return Array.isArray(s.result)?this.combineExecResults(s,this.executeSubSelectedArray({field:r,array:s.result,execContext:n})):r.selectionSet?null==s.result?s:this.combineExecResults(s,this.executeSelectionSet({selectionSet:r.selectionSet,rootValue:s.result,execContext:n})):(Te(r,s.result),this.freezeResults,s)},e.prototype.combineExecResults=function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return t.forEach(function(t){t.missing&&(e=e||[]).push.apply(e,t.missing)}),{result:t.pop().result,missing:e}},e.prototype.executeSubSelectedArray=function(e){var t,r=this,n=e.field,i=e.array,o=e.execContext;function a(e){return e.missing&&(t=t||[]).push.apply(t,e.missing),e.result}return i=i.map(function(e){return null===e?null:Array.isArray(e)?a(r.executeSubSelectedArray({field:n,array:e,execContext:o})):n.selectionSet?a(r.executeSelectionSet({selectionSet:n.selectionSet,rootValue:e,execContext:o})):(Te(n,e),e)}),this.freezeResults,{result:i,missing:t}},e}();function Te(e,t){if(!e.selectionSet&&Object(i.u)(t))throw new c.a(10)}function Ce(){return!0}var Re=function(){function e(e){void 0===e&&(e=Object.create(null)),this.data=e}return e.prototype.toObject=function(){return this.data},e.prototype.get=function(e){return this.data[e]},e.prototype.set=function(e,t){this.data[e]=t},e.prototype.delete=function(e){this.data[e]=void 0},e.prototype.clear=function(){this.data=Object.create(null)},e.prototype.replace=function(e){this.data=e||Object.create(null)},e}();var qe=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="WriteError",t}return Object(n.c)(t,e),t}(Error);var Qe=function(){function e(){}return e.prototype.writeQueryToStore=function(e){var t=e.query,r=e.result,n=e.store,i=void 0===n?je():n,o=e.variables,a=e.dataIdFromObject,s=e.fragmentMatcherFunction;return this.writeResultToStore({dataId:"ROOT_QUERY",result:r,document:t,store:i,variables:o,dataIdFromObject:a,fragmentMatcherFunction:s})},e.prototype.writeResultToStore=function(e){var t=e.dataId,r=e.result,n=e.document,o=e.store,a=void 0===o?je():o,s=e.variables,c=e.dataIdFromObject,u=e.fragmentMatcherFunction,l=Object(i.m)(n);try{return this.writeSelectionSetToStore({result:r,dataId:t,selectionSet:l.selectionSet,context:{store:a,processedData:{},variables:Object(i.c)({},Object(i.h)(l),s),dataIdFromObject:c,fragmentMap:Object(i.g)(Object(i.j)(n)),fragmentMatcherFunction:u}})}catch(e){throw function(e,t){var r=new qe("Error writing result to store for query:\n "+JSON.stringify(t));return r.message+="\n"+e.message,r.stack=e.stack,r}(e,n)}},e.prototype.writeSelectionSetToStore=function(e){var t=this,r=e.result,n=e.dataId,o=e.selectionSet,a=e.context,s=a.variables,u=a.store,l=a.fragmentMap;return o.selections.forEach(function(e){var o;if(Object(i.F)(e,s))if(Object(i.t)(e)){var u=Object(i.E)(e),d=r[u];if(void 0!==d)t.writeFieldToStore({dataId:n,value:d,field:e,context:a});else{var f=!1,h=!1;e.directives&&e.directives.length&&(f=e.directives.some(function(e){return e.name&&"defer"===e.name.value}),h=e.directives.some(function(e){return e.name&&"client"===e.name.value})),!f&&!h&&a.fragmentMatcherFunction}}else{var p=void 0;Object(i.v)(e)?p=e:(p=(l||{})[e.name.value],Object(c.b)(p,2));var v=!0;if(a.fragmentMatcherFunction&&p.typeCondition){var m=n||"self",y=Object(i.H)({id:m,typename:void 0}),b={store:new Re((o={},o[m]=r,o)),cacheRedirects:{}},g=a.fragmentMatcherFunction(y,p.typeCondition.name.value,b);Object(i.x)(),v=!!g}v&&t.writeSelectionSetToStore({result:r,selectionSet:p.selectionSet,dataId:n,context:a})}}),u},e.prototype.writeFieldToStore=function(e){var t,r,a,s=e.field,u=e.value,l=e.dataId,d=e.context,f=d.variables,h=d.dataIdFromObject,p=d.store,v=Object(i.G)(s,f);if(s.selectionSet&&null!==u)if(Array.isArray(u)){var m=l+"."+v;r=this.processArrayValue(u,m,s.selectionSet,d)}else{var y=l+"."+v,b=!0;if(Ie(y)||(y="$"+y),h){var g=h(u);Object(c.b)(!g||!Ie(g),3),(g||"number"==typeof g&&0===g)&&(y=g,b=!1)}Ne(y,s,d.processedData)||this.writeSelectionSetToStore({dataId:y,result:u,selectionSet:s.selectionSet,context:d});var w=u.__typename;r=Object(i.H)({id:y,typename:w},b);var _=(a=p.get(l))&&a[v];if(_!==r&&Object(i.u)(_)){var O=void 0!==_.typename,x=void 0!==w,S=O&&x&&_.typename!==w;Object(c.b)(!b||_.generated||S,4),Object(c.b)(!O||x,5),_.generated&&(S?b||p.delete(_.id):function e(t,r,a){if(t===r)return!1;var s=a.get(t);var c=a.get(r);var u=!1;Object.keys(s).forEach(function(t){var r=s[t],n=c[t];Object(i.u)(r)&&Ie(r.id)&&Object(i.u)(n)&&!Object(o.a)(r,n)&&e(r.id,n.id,a)&&(u=!0)});a.delete(t);var l=Object(n.a)({},s,c);if(Object(o.a)(l,c))return u;a.set(r,l);return!0}(_.id,r.id,p))}}else r=null!=u&&"object"==typeof u?{type:"json",json:u}:u;(a=p.get(l))&&Object(o.a)(r,a[v])||p.set(l,Object(n.a)({},a,((t={})[v]=r,t)))},e.prototype.processArrayValue=function(e,t,r,n){var o=this;return e.map(function(e,a){if(null===e)return null;var s=t+"."+a;if(Array.isArray(e))return o.processArrayValue(e,s,r,n);var c=!0;if(n.dataIdFromObject){var u=n.dataIdFromObject(e);u&&(s=u,c=!1)}return Ne(s,r,n.processedData)||o.writeSelectionSetToStore({dataId:s,result:e,selectionSet:r,context:n}),Object(i.H)({id:s,typename:e.__typename},c)})},e}();function Ie(e){return"$"===e[0]}function Ne(e,t,r){if(!r)return!1;if(r[e]){if(r[e].indexOf(t)>=0)return!0;r[e].push(t)}else r[e]=[t];return!1}var Ae={fragmentMatcher:new Se,dataIdFromObject:function(e){if(e.__typename){if(void 0!==e.id)return e.__typename+":"+e.id;if(void 0!==e._id)return e.__typename+":"+e._id}return null},addTypename:!0,resultCaching:!0,freezeResults:!1};var Me=Object.prototype.hasOwnProperty,De=function(e){function t(t,r,n){var i=e.call(this,Object.create(null))||this;return i.optimisticId=t,i.parent=r,i.transaction=n,i}return Object(n.c)(t,e),t.prototype.toObject=function(){return Object(n.a)({},this.parent.toObject(),this.data)},t.prototype.get=function(e){return Me.call(this.data,e)?this.data[e]:this.parent.get(e)},t}(Re),Le=function(e){function t(t){void 0===t&&(t={});var r=e.call(this)||this;r.watches=new Set,r.typenameDocumentCache=new Map,r.cacheKeyRoot=new ye(i.e),r.silenceBroadcast=!1,r.config=Object(n.a)({},Ae,t),r.config.customResolvers&&(r.config.cacheRedirects=r.config.customResolvers),r.config.cacheResolvers&&(r.config.cacheRedirects=r.config.cacheResolvers),r.addTypename=!!r.config.addTypename,r.data=r.config.resultCaching?new ke:new Re,r.optimisticData=r.data,r.storeWriter=new Qe,r.storeReader=new Pe({cacheKeyRoot:r.cacheKeyRoot,freezeResults:t.freezeResults});var o=r,a=o.maybeBroadcastWatch;return r.maybeBroadcastWatch=_e(function(e){return a.call(r,e)},{makeCacheKey:function(e){if(!e.optimistic&&!e.previousResult)return o.data instanceof ke?o.cacheKeyRoot.lookup(e.query,JSON.stringify(e.variables)):void 0}}),r}return Object(n.c)(t,e),t.prototype.restore=function(e){return e&&this.data.replace(e),this},t.prototype.extract=function(e){return void 0===e&&(e=!1),(e?this.optimisticData:this.data).toObject()},t.prototype.read=function(e){if("string"==typeof e.rootId&&void 0===this.data.get(e.rootId))return null;var t=this.config.fragmentMatcher,r=t&&t.match;return this.storeReader.readQueryFromStore({store:e.optimistic?this.optimisticData:this.data,query:this.transformDocument(e.query),variables:e.variables,rootId:e.rootId,fragmentMatcherFunction:r,previousResult:e.previousResult,config:this.config})||null},t.prototype.write=function(e){var t=this.config.fragmentMatcher,r=t&&t.match;this.storeWriter.writeResultToStore({dataId:e.dataId,result:e.result,variables:e.variables,document:this.transformDocument(e.query),store:this.data,dataIdFromObject:this.config.dataIdFromObject,fragmentMatcherFunction:r}),this.broadcastWatches()},t.prototype.diff=function(e){var t=this.config.fragmentMatcher,r=t&&t.match;return this.storeReader.diffQueryAgainstStore({store:e.optimistic?this.optimisticData:this.data,query:this.transformDocument(e.query),variables:e.variables,returnPartialData:e.returnPartialData,previousResult:e.previousResult,fragmentMatcherFunction:r,config:this.config})},t.prototype.watch=function(e){var t=this;return this.watches.add(e),function(){t.watches.delete(e)}},t.prototype.evict=function(e){throw new c.a(1)},t.prototype.reset=function(){return this.data.clear(),this.broadcastWatches(),Promise.resolve()},t.prototype.removeOptimistic=function(e){for(var t=[],r=0,n=this.optimisticData;n instanceof De;)n.optimisticId===e?++r:t.push(n),n=n.parent;if(r>0){for(this.optimisticData=n;t.length>0;){var i=t.pop();this.performTransaction(i.transaction,i.optimisticId)}this.broadcastWatches()}},t.prototype.performTransaction=function(e,t){var r=this.data,n=this.silenceBroadcast;this.silenceBroadcast=!0,"string"==typeof t&&(this.data=this.optimisticData=new De(t,this.optimisticData,e));try{e(this)}finally{this.silenceBroadcast=n,this.data=r}this.broadcastWatches()},t.prototype.recordOptimisticTransaction=function(e,t){return this.performTransaction(e,t)},t.prototype.transformDocument=function(e){if(this.addTypename){var t=this.typenameDocumentCache.get(e);return t||(t=Object(i.a)(e),this.typenameDocumentCache.set(e,t),this.typenameDocumentCache.set(t,t)),t}return e},t.prototype.broadcastWatches=function(){var e=this;this.silenceBroadcast||this.watches.forEach(function(t){return e.maybeBroadcastWatch(t)})},t.prototype.maybeBroadcastWatch=function(e){e.callback(this.diff({query:e.query,variables:e.variables,previousResult:e.previousResult&&e.previousResult(),optimistic:e.optimistic}))},t}(H);function Ve(e){return Object(_.b)(e,{leave:$e})}var $e={Name:function(e){return e.value},Variable:function(e){return"$"+e.name},Document:function(e){return Ue(e.definitions,"\n\n")+"\n"},OperationDefinition:function(e){var t=e.operation,r=e.name,n=He("(",Ue(e.variableDefinitions,", "),")"),i=Ue(e.directives," "),o=e.selectionSet;return r||i||n||"query"!==t?Ue([t,Ue([r,n]),i,o]," "):o},VariableDefinition:function(e){var t=e.variable,r=e.type,n=e.defaultValue,i=e.directives;return t+": "+r+He(" = ",n)+He(" ",Ue(i," "))},SelectionSet:function(e){return ze(e.selections)},Field:function(e){var t=e.alias,r=e.name,n=e.arguments,i=e.directives,o=e.selectionSet;return Ue([He("",t,": ")+r+He("(",Ue(n,", "),")"),Ue(i," "),o]," ")},Argument:function(e){return e.name+": "+e.value},FragmentSpread:function(e){return"..."+e.name+He(" ",Ue(e.directives," "))},InlineFragment:function(e){var t=e.typeCondition,r=e.directives,n=e.selectionSet;return Ue(["...",He("on ",t),Ue(r," "),n]," ")},FragmentDefinition:function(e){var t=e.name,r=e.typeCondition,n=e.variableDefinitions,i=e.directives,o=e.selectionSet;return"fragment ".concat(t).concat(He("(",Ue(n,", "),")")," ")+"on ".concat(r," ").concat(He("",Ue(i," ")," "))+o},IntValue:function(e){return e.value},FloatValue:function(e){return e.value},StringValue:function(e,t){var r=e.value;return e.block?function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=-1===e.indexOf("\n"),i=" "===e[0]||"\t"===e[0],o='"'===e[e.length-1],a=!n||o||r,s="";return!a||n&&i||(s+="\n"+t),s+=t?e.replace(/\n/g,"\n"+t):e,a&&(s+="\n"),'"""'+s.replace(/"""/g,'\\"""')+'"""'}(r,"description"===t?"":"  "):JSON.stringify(r)},BooleanValue:function(e){return e.value?"true":"false"},NullValue:function(){return"null"},EnumValue:function(e){return e.value},ListValue:function(e){return"["+Ue(e.values,", ")+"]"},ObjectValue:function(e){return"{"+Ue(e.fields,", ")+"}"},ObjectField:function(e){return e.name+": "+e.value},Directive:function(e){return"@"+e.name+He("(",Ue(e.arguments,", "),")")},NamedType:function(e){return e.name},ListType:function(e){return"["+e.type+"]"},NonNullType:function(e){return e.type+"!"},SchemaDefinition:function(e){var t=e.directives,r=e.operationTypes;return Ue(["schema",Ue(t," "),ze(r)]," ")},OperationTypeDefinition:function(e){return e.operation+": "+e.type},ScalarTypeDefinition:Fe(function(e){return Ue(["scalar",e.name,Ue(e.directives," ")]," ")}),ObjectTypeDefinition:Fe(function(e){var t=e.name,r=e.interfaces,n=e.directives,i=e.fields;return Ue(["type",t,He("implements ",Ue(r," & ")),Ue(n," "),ze(i)]," ")}),FieldDefinition:Fe(function(e){var t=e.name,r=e.arguments,n=e.type,i=e.directives;return t+(Ge(r)?He("(\n",Be(Ue(r,"\n")),"\n)"):He("(",Ue(r,", "),")"))+": "+n+He(" ",Ue(i," "))}),InputValueDefinition:Fe(function(e){var t=e.name,r=e.type,n=e.defaultValue,i=e.directives;return Ue([t+": "+r,He("= ",n),Ue(i," ")]," ")}),InterfaceTypeDefinition:Fe(function(e){var t=e.name,r=e.directives,n=e.fields;return Ue(["interface",t,Ue(r," "),ze(n)]," ")}),UnionTypeDefinition:Fe(function(e){var t=e.name,r=e.directives,n=e.types;return Ue(["union",t,Ue(r," "),n&&0!==n.length?"= "+Ue(n," | "):""]," ")}),EnumTypeDefinition:Fe(function(e){var t=e.name,r=e.directives,n=e.values;return Ue(["enum",t,Ue(r," "),ze(n)]," ")}),EnumValueDefinition:Fe(function(e){return Ue([e.name,Ue(e.directives," ")]," ")}),InputObjectTypeDefinition:Fe(function(e){var t=e.name,r=e.directives,n=e.fields;return Ue(["input",t,Ue(r," "),ze(n)]," ")}),DirectiveDefinition:Fe(function(e){var t=e.name,r=e.arguments,n=e.repeatable,i=e.locations;return"directive @"+t+(Ge(r)?He("(\n",Be(Ue(r,"\n")),"\n)"):He("(",Ue(r,", "),")"))+(n?" repeatable":"")+" on "+Ue(i," | ")}),SchemaExtension:function(e){var t=e.directives,r=e.operationTypes;return Ue(["extend schema",Ue(t," "),ze(r)]," ")},ScalarTypeExtension:function(e){return Ue(["extend scalar",e.name,Ue(e.directives," ")]," ")},ObjectTypeExtension:function(e){var t=e.name,r=e.interfaces,n=e.directives,i=e.fields;return Ue(["extend type",t,He("implements ",Ue(r," & ")),Ue(n," "),ze(i)]," ")},InterfaceTypeExtension:function(e){var t=e.name,r=e.directives,n=e.fields;return Ue(["extend interface",t,Ue(r," "),ze(n)]," ")},UnionTypeExtension:function(e){var t=e.name,r=e.directives,n=e.types;return Ue(["extend union",t,Ue(r," "),n&&0!==n.length?"= "+Ue(n," | "):""]," ")},EnumTypeExtension:function(e){var t=e.name,r=e.directives,n=e.values;return Ue(["extend enum",t,Ue(r," "),ze(n)]," ")},InputObjectTypeExtension:function(e){var t=e.name,r=e.directives,n=e.fields;return Ue(["extend input",t,Ue(r," "),ze(n)]," ")}};function Fe(e){return function(t){return Ue([t.description,e(t)],"\n")}}function Ue(e,t){return e?e.filter(function(e){return e}).join(t||""):""}function ze(e){return e&&0!==e.length?"{\n"+Be(Ue(e,"\n"))+"\n}":""}function He(e,t,r){return t?e+t+(r||""):""}function Be(e){return e&&"  "+e.replace(/\n/g,"\n  ")}function We(e){return-1!==e.indexOf("\n")}function Ge(e){return e&&e.some(We)}var Ke={http:{includeQuery:!0,includeExtensions:!1},headers:{accept:"*/*","content-type":"application/json"},options:{method:"POST"}},Je=function(e,t,r){var n=new Error(r);throw n.name="ServerError",n.response=e,n.statusCode=e.status,n.result=t,n},Ye=function(e,t){var r;try{r=JSON.stringify(e)}catch(e){var n=new c.a(2);throw n.parseError=e,n}return r},Xe=function(e){void 0===e&&(e={});var t=e.uri,r=void 0===t?"/graphql":t,i=e.fetch,o=e.includeExtensions,a=e.useGETForQueries,u=Object(n.e)(e,["uri","fetch","includeExtensions","useGETForQueries"]);!function(e){if(!e&&"undefined"==typeof fetch){throw"undefined"==typeof window&&"node-fetch",new c.a(1)}}(i),i||(i=fetch);var d={http:{includeExtensions:o},options:u.fetchOptions,credentials:u.credentials,headers:u.headers};return new y(function(e){var t=function(e,t){var r=e.getContext().uri;return r||("function"==typeof t?t(e):t||"/graphql")}(e,r),o=e.getContext(),c={};if(o.clientAwareness){var u=o.clientAwareness,f=u.name,h=u.version;f&&(c["apollographql-client-name"]=f),h&&(c["apollographql-client-version"]=h)}var p,v=Object(n.a)({},c,o.headers),m={http:o.http,options:o.fetchOptions,credentials:o.credentials,headers:v},y=function(e,t){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];var o=Object(n.a)({},t.options,{headers:t.headers,credentials:t.credentials}),a=t.http;r.forEach(function(e){o=Object(n.a)({},o,e.options,{headers:Object(n.a)({},o.headers,e.headers)}),e.credentials&&(o.credentials=e.credentials),a=Object(n.a)({},a,e.http)});var s=e.operationName,c=e.extensions,u=e.variables,l=e.query,d={operationName:s,variables:u};return a.includeExtensions&&(d.extensions=c),a.includeQuery&&(d.query=Ve(l)),{options:o,body:d}}(e,Ke,d,m),b=y.options,g=y.body;if(!b.signal){var w=function(){if("undefined"==typeof AbortController)return{controller:!1,signal:!1};var e=new AbortController;return{controller:e,signal:e.signal}}(),_=w.controller,O=w.signal;(p=_)&&(b.signal=O)}if(a&&!e.query.definitions.some(function(e){return"OperationDefinition"===e.kind&&"mutation"===e.operation})&&(b.method="GET"),"GET"===b.method){var x=function(e,t){var r=[],n=function(e,t){r.push(e+"="+encodeURIComponent(t))};"query"in t&&n("query",t.query);t.operationName&&n("operationName",t.operationName);if(t.variables){var i=void 0;try{i=Ye(t.variables,"Variables map")}catch(e){return{parseError:e}}n("variables",i)}if(t.extensions){var o=void 0;try{o=Ye(t.extensions,"Extensions map")}catch(e){return{parseError:e}}n("extensions",o)}var a="",s=e,c=e.indexOf("#");-1!==c&&(a=e.substr(c),s=e.substr(0,c));var u=-1===s.indexOf("?")?"?":"&";return{newURI:s+u+r.join("&")+a}}(t,g),S=x.newURI,E=x.parseError;if(E)return l(E);t=S}else try{b.body=Ye(g,"Payload")}catch(E){return l(E)}return new s(function(r){var n;return i(t,b).then(function(t){return e.setContext({response:t}),t}).then((n=e,function(e){return e.text().then(function(t){try{return JSON.parse(t)}catch(n){var r=n;return r.name="ServerParseError",r.response=e,r.statusCode=e.status,r.bodyText=t,Promise.reject(r)}}).then(function(t){return e.status>=300&&Je(e,t,"Response not successful: Received status code "+e.status),Array.isArray(t)||t.hasOwnProperty("data")||t.hasOwnProperty("errors")||Je(e,t,"Server response was missing for query '"+(Array.isArray(n)?n.map(function(e){return e.operationName}):n.operationName)+"'."),t})})).then(function(e){return r.next(e),r.complete(),e}).catch(function(e){"AbortError"!==e.name&&(e.result&&e.result.errors&&e.result.data&&r.next(e.result),r.error(e))}),function(){p&&p.abort()}})})};var Ze=function(e){function t(t){return e.call(this,Xe(t).request)||this}return Object(n.c)(t,e),t}(y);function et(e){return new y(function(t,r){return new s(function(n){var i,o,a;try{i=r(t).subscribe({next:function(i){i.errors&&(a=e({graphQLErrors:i.errors,response:i,operation:t,forward:r}))?o=a.subscribe({next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)}):n.next(i)},error:function(i){(a=e({operation:t,networkError:i,graphQLErrors:i&&i.result&&i.result.errors,forward:r}))?o=a.subscribe({next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)}):n.error(i)},complete:function(){a||n.complete.bind(n)()}})}catch(i){e({networkError:i,operation:t,forward:r}),n.error(i)}return function(){i&&i.unsubscribe(),o&&i.unsubscribe()}})})}!function(e){function t(t){var r=e.call(this)||this;return r.link=et(t),r}Object(n.c)(t,e),t.prototype.request=function(e,t){return this.link.request(e,t)}}(y);new V({defaultOptions:{watchQuery:{fetchPolicy:"no-cache",errorPolicy:"ignore"},query:{fetchPolicy:"no-cache",errorPolicy:"all"},mutate:{errorPolicy:"all"}},cache:new Le,link:y.from([et(({graphQLErrors:e,networkError:t})=>{if(e&&e.map(({message:t,locations:r,path:n})=>{document.dispatchEvent(new CustomEvent("notify",{detail:{level:"error",message:`[GraphQL error]: Message: ${t}, Location: ${r}, Path: ${n}`,ex:e}}))}),t)switch(t.statusCode){case 401:document.dispatchEvent(new CustomEvent("auth-required",{bubbles:!0,composed:!0}));break;default:document.dispatchEvent(new CustomEvent("notify",{detail:{level:"error",message:`[Network error - ${t.statusCode}]: ${t}`,ex:t}}))}}),new Ze({GRAPHQL_URI:"/graphql",credentials:"include"})])})},function(e,t,r){"use strict";-1!=navigator.appVersion.indexOf("Win")||(-1!=navigator.appVersion.indexOf("Macintosh")||(-1!=navigator.appVersion.indexOf("Android")||(-1!=navigator.appVersion.indexOf("iPad")||navigator.appVersion.indexOf("iPhone"))));
/**
 * @license Copyright © HatioLab Inc. All rights reserved.
 */
var n=null,i="ontouchstart"in window||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0,o=i?"touchstart":"mousedown",a=i?"touchcancel":"mouseout",s=i?"touchend":"mouseup",c=i?"touchmove":"mousemove";function u(){d(),this.dispatchEvent(new CustomEvent("long-press",{bubbles:!0,cancelable:!0}))&&this.addEventListener(s,function e(t){this.removeEventListener(s,e,!0),f(t)},!0)}function l(e){d(e);var t=e.target,r=parseInt(t.getAttribute("data-long-press-delay")||"600",10);n=setTimeout(u.bind(t),r)}function d(e){clearTimeout(n),n=null}function f(e){e.stopImmediatePropagation(),e.preventDefault(),e.stopPropagation()}const h=e=>{e.addEventListener(a,d,!0),e.addEventListener(s,d,!0),e.addEventListener(c,d,!0),e.addEventListener("wheel",d,!0),e.addEventListener("scroll",d,!0),e.addEventListener(o,l,!0),0===o.indexOf("touch")?e.addEventListener("contextmenu",f,!0):e.addEventListener("contextmenu",d,!0)};var p=r(0);function v(e){e=Object.assign({scrollable:document.body,threshold:150,onStateChange(e,t){}},e);var{container:t,scrollable:r,threshold:n,refresh:i,onStateChange:o,animates:a}=e;let s,c,u;function l(e){a.classList.add("pull-to-refresh--"+e)}function d(e){a.classList.remove("pull-to-refresh--"+e)}return a||(a=document.createElement("pulltorefresh-control"),t.appendChild(a)),function({element:e,onpanstart:t,onpanmove:r,onpanend:n}){let i,o,a,s;function c(e){const t=Array.prototype.slice.call(e.changedTouches).filter(e=>e.identifier===i)[0];return!!t&&(e.deltaX=t.screenX-o,e.deltaY=t.screenY-a,!0)}function u(e){const t=e.changedTouches[0];i=t.identifier,o=t.screenX,a=t.screenY}function l(e){c(e)&&(t&&!s&&(t(e),s=!0),r(e))}function d(e){c(e)&&n(e)}return e.addEventListener("touchstart",u),r&&e.addEventListener("touchmove",l),n&&e.addEventListener("touchend",d),function(){e.removeEventListener("touchstart",u),r&&e.removeEventListener("touchmove",l),n&&e.removeEventListener("touchend",d)}}({element:t,onpanmove(t){let i=t.deltaY;(!r||[window,document,document.body,document.documentElement].includes(r)?document.documentElement.scrollTop||document.body.scrollTop:r.scrollTop)>0||i<0&&!u||u in{aborting:1,refreshing:1,restoring:1}||(t.cancelable&&t.preventDefault(),null==s&&(c=i,l(u="pulling"),o(u,e)),(i-=c)<0&&(i=0),s=i,(i>=n&&"reached"!==u||i<n&&"pulling"!==u)&&(d(u),l(u="reached"===u?"pulling":"reached"),o(u,e)),a.pulling(i,e))},onpanend(){null!=u&&("pulling"===u?(d(u),o(u="aborting"),l(u),a.aborting(e).then(()=>{d(u),s=u=c=null,o(u)})):"reached"===u&&(d(u),l(u="refreshing"),o(u,e),a.refreshing(e),i().then(()=>{d(u),l(u="restoring"),o(u),a.restoring(e).then(()=>{d(u),s=u=c=null,o(u)})})))}})}customElements.define("pulltorefresh-control",class extends p.a{static get styles(){return p.b`
      :host {
        position: absolute;
        top: -50px;
        left: 50%;
        -webkit-transform: translate3d(-50%, 0, 0);
        transform: translate3d(-50%, 0, 0);
        width: 40px;
        height: 40px;
        justify-content: center;
        align-items: center;
        background: #fff;
        border-radius: 50%;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.117647), 0 1px 4px rgba(0, 0, 0, 0.117647);
        display: none;
      }

      :host(.pull-to-refresh--pulling),
      :host(.pull-to-refresh--aborting),
      :host(.pull-to-refresh--reached),
      :host(.pull-to-refresh--refreshing),
      :host(.pull-to-refresh--restoring) {
        display: flex;
      }

      :host(.pull-to-refresh--pulling) .pull-to-refresh-material__spinner,
      :host(.pull-to-refresh--aborting) .pull-to-refresh-material__spinner,
      :host(.pull-to-refresh--reached) .pull-to-refresh-material__spinner,
      :host(.pull-to-refresh--refreshing) .pull-to-refresh-material__icon,
      :host(.pull-to-refresh--restoring) .pull-to-refresh-material__icon {
        display: none;
      }

      .pull-to-refresh-material__spinner {
        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation: pull-to-refresh-material-rotate 2s linear infinite;
        animation: pull-to-refresh-material-rotate 2s linear infinite;
      }

      .pull-to-refresh-material__path {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        -webkit-animation: pull-to-refresh-material-dash 1.5s ease-in-out infinite;
        animation: pull-to-refresh-material-dash 1.5s ease-in-out infinite;
      }

      .pull-to-refresh-material__path--colorful {
        -webkit-animation: pull-to-refresh-material-dash 1.5s ease-in-out infinite,
          pull-to-refresh-material-colorful 6s ease-in-out infinite;
        animation: pull-to-refresh-material-dash 1.5s ease-in-out infinite,
          pull-to-refresh-material-colorful 6s ease-in-out infinite;
      }

      @-webkit-keyframes pull-to-refresh-material-rotate {
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      @keyframes pull-to-refresh-material-rotate {
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      @-webkit-keyframes pull-to-refresh-material-dash {
        0% {
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -35px;
        }
        100% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -124px;
        }
      }

      @keyframes pull-to-refresh-material-dash {
        0% {
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -35px;
        }
        100% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -124px;
        }
      }

      @-webkit-keyframes pull-to-refresh-material-colorful {
        100%,
        0% {
          stroke: #4285f4;
        }
        40% {
          stroke: #ea4335;
        }
        66% {
          stroke: #fbbc05;
        }
        80%,
        90% {
          stroke: #34a853;
        }
      }

      @keyframes pull-to-refresh-material-colorful {
        100%,
        0% {
          stroke: #4285f4;
        }
        40% {
          stroke: #ea4335;
        }
        66% {
          stroke: #fbbc05;
        }
        80%,
        90% {
          stroke: #34a853;
        }
      }
    `}render(){return p.d`
      <svg class="pull-to-refresh-material__icon" fill="#4285f4" width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>

      <svg class="pull-to-refresh-material__spinner" width="24" height="24" viewBox="25 25 50 50">
        <circle
          class="pull-to-refresh-material__path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke="#4285f4"
          stroke-width="4"
          stroke-miterlimit="10"
        />
      </svg>
    `}pulling(e,t){const{threshold:r}=t;let n=e/r;n>1?n=1:n*=n*n;const i=e/2.5;this.style.opacity=n,this.style.transform=i?`translate3d(-50%, ${i}px, 0) rotate(${360*n}deg)`:""}refreshing({threshold:e}){this.style.transition="transform 0.2s",this.style.transform=`translate3d(-50%, ${e/2.5}px, 0)`}aborting(){return new Promise(e=>{this.style.transform?(this.style.transition="transform 0.3s, opacity 0.15s",this.style.transform="translate3d(-50%, 0, 0)",this.style.opacity=0,this.addEventListener("transitionend",()=>{this.style.transition="",e()})):e()})}restoring(){return new Promise(e=>{this.style.transition="transform 0.3s",this.style.transform+=" scale(0.01)",this.addEventListener("transitionend",()=>{this.style.transition="",e()})})}}),r.d(t,"a",function(){return h}),r.d(t,"b",function(){return v})},function(e,t,r){"use strict";r(24);const n=r(0).b`
  /* for scroller */
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-thumb-color, rgba(0, 0, 0, 0.2));
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--scrollbar-thumb-hover-color, #aa866a);
  }
`;r.d(t,"a",function(){return n})},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Grist});var _hatiolab_things_scene__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(22),_hatiolab_things_scene__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_hatiolab_things_scene__WEBPACK_IMPORTED_MODULE_0__),_things_factory_grist_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(51);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _get(e,t,r){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=_superPropBase(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}})(e,t,r||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var NATURE={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"string",label:"mode",name:"mode"},{type:"textarea",label:"config",name:"config"}]},Grist=function(_HTMLOverlayElement){function Grist(){return _classCallCheck(this,Grist),_possibleConstructorReturn(this,_getPrototypeOf(Grist).apply(this,arguments))}return _inherits(Grist,_HTMLOverlayElement),_createClass(Grist,[{key:"oncreate_element",value:function(e){this.data={total:100,records:Array(100).fill().map(function(e,t){return{id:t,name:t%2?"shnam-".concat(t+1):"heartyoh-".concat(t+1),description:t%2?"hatiolab manager-".concat(t+1):"hatiosea manager-".concat(t+1),active:!!(Math.round(2*Math.random())%2),createdAt:Date.now(),updatedAt:Date.now()}})}}},{key:"dispose",value:function(){_get(_getPrototypeOf(Grist.prototype),"dispose",this).call(this)}},{key:"setElementProperties",value:function(e){var t=this.state.mode;e.mode=t,e.config=this.config,e.data=this.data}},{key:"reposition",value:function(){_get(_getPrototypeOf(Grist.prototype),"reposition",this).call(this)}},{key:"config",get:function get(){var _this$state=this.state,config=_this$state.config,data=_this$state.data;if("object"!==_typeof(config))try{eval("config = ".concat(config))}catch(e){scene.error(e)}return config}},{key:"tagName",get:function(){return"data-grist"}}],[{key:"nature",get:function(){return NATURE}}]),Grist}(_hatiolab_things_scene__WEBPACK_IMPORTED_MODULE_0__.HTMLOverlayElement);_hatiolab_things_scene__WEBPACK_IMPORTED_MODULE_0__.Component.register("grist",Grist)},function(e,t,r){"use strict";function n(e){var t,r=e.Symbol;return"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}r.d(t,"a",function(){return n})},function(e,t,r){"use strict";e.exports=function(e,t){t||(t={}),"function"==typeof t&&(t={cmp:t});var r,n="boolean"==typeof t.cycles&&t.cycles,i=t.cmp&&(r=t.cmp,function(e){return function(t,n){var i={key:t,value:e[t]},o={key:n,value:e[n]};return r(i,o)}}),o=[];return function e(t){if(t&&t.toJSON&&"function"==typeof t.toJSON&&(t=t.toJSON()),void 0!==t){if("number"==typeof t)return isFinite(t)?""+t:"null";if("object"!=typeof t)return JSON.stringify(t);var r,a;if(Array.isArray(t)){for(a="[",r=0;r<t.length;r++)r&&(a+=","),a+=e(t[r])||"null";return a+"]"}if(null===t)return"null";if(-1!==o.indexOf(t)){if(n)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}var s=o.push(t)-1,c=Object.keys(t).sort(i&&i(t));for(a="",r=0;r<c.length;r++){var u=c[r],l=e(t[u]);l&&(a&&(a+=","),a+=JSON.stringify(u)+":"+l)}return o.splice(s,1),"{"+a+"}"}}(e)}},function(e,t,r){e.exports=r(41).Observable},function(e,t,r){var n=r(42),i=r(21),o="Expected a function";e.exports=function(e,t,r){var a=!0,s=!0;if("function"!=typeof e)throw new TypeError(o);return i(r)&&(a="leading"in r?!!r.leading:a,s="trailing"in r?!!r.trailing:s),n(e,t,{leading:a,maxWait:t,trailing:s})}},function(e,t,r){e.exports=r(38)},function(e,t,r){"use strict";r.r(t);var n=r(32);t.default=[n.a]},function(e,t,r){"use strict";
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const n=document.createElement("link");n.rel="stylesheet",n.href="https://fonts.googleapis.com/icon?family=Material+Icons",document.head.appendChild(n)},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){return"function"==typeof Symbol},a=function(e){return o()&&Boolean(Symbol[e])},s=function(e){return a(e)?Symbol[e]:"@@"+e};o()&&!a("observable")&&(Symbol.observable=Symbol("observable"));var c=s("iterator"),u=s("observable"),l=s("species");function d(e,t){var r=e[t];if(null!=r){if("function"!=typeof r)throw new TypeError(r+" is not a function");return r}}function f(e){var t=e.constructor;return void 0!==t&&null===(t=t[l])&&(t=void 0),void 0!==t?t:O}function h(e){return e instanceof O}function p(e){p.log?p.log(e):setTimeout(function(){throw e})}function v(e){Promise.resolve().then(function(){try{e()}catch(e){p(e)}})}function m(e){var t=e._cleanup;if(void 0!==t&&(e._cleanup=void 0,t))try{if("function"==typeof t)t();else{var r=d(t,"unsubscribe");r&&r.call(t)}}catch(e){p(e)}}function y(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function b(e,t,r){e._state="running";var n=e._observer;try{var i=d(n,t);switch(t){case"next":i&&i.call(n,r);break;case"error":if(y(e),!i)throw r;i.call(n,r);break;case"complete":y(e),i&&i.call(n)}}catch(e){p(e)}"closed"===e._state?m(e):"running"===e._state&&(e._state="ready")}function g(e,t,r){if("closed"!==e._state){if("buffering"!==e._state)return"ready"!==e._state?(e._state="buffering",e._queue=[{type:t,value:r}],void v(function(){return function(e){var t=e._queue;if(t){e._queue=void 0,e._state="ready";for(var r=0;r<t.length&&(b(e,t[r].type,t[r].value),"closed"!==e._state);++r);}}(e)})):void b(e,t,r);e._queue.push({type:t,value:r})}}var w=function(){function e(t,r){i(this,e),this._cleanup=void 0,this._observer=t,this._queue=void 0,this._state="initializing";var n=new _(this);try{this._cleanup=r.call(void 0,n)}catch(e){n.error(e)}"initializing"===this._state&&(this._state="ready")}return n(e,[{key:"unsubscribe",value:function(){"closed"!==this._state&&(y(this),m(this))}},{key:"closed",get:function(){return"closed"===this._state}}]),e}(),_=function(){function e(t){i(this,e),this._subscription=t}return n(e,[{key:"next",value:function(e){g(this._subscription,"next",e)}},{key:"error",value:function(e){g(this._subscription,"error",e)}},{key:"complete",value:function(){g(this._subscription,"complete")}},{key:"closed",get:function(){return"closed"===this._subscription._state}}]),e}(),O=t.Observable=function(){function e(t){if(i(this,e),!(this instanceof e))throw new TypeError("Observable cannot be called as a function");if("function"!=typeof t)throw new TypeError("Observable initializer must be a function");this._subscriber=t}return n(e,[{key:"subscribe",value:function(e){return"object"==typeof e&&null!==e||(e={next:e,error:arguments[1],complete:arguments[2]}),new w(e,this._subscriber)}},{key:"forEach",value:function(e){var t=this;return new Promise(function(r,n){if("function"==typeof e)var i=t.subscribe({next:function(t){try{e(t,o)}catch(e){n(e),i.unsubscribe()}},error:n,complete:r});else n(new TypeError(e+" is not a function"));function o(){i.unsubscribe(),r()}})}},{key:"map",value:function(e){var t=this;if("function"!=typeof e)throw new TypeError(e+" is not a function");return new(f(this))(function(r){return t.subscribe({next:function(t){try{t=e(t)}catch(e){return r.error(e)}r.next(t)},error:function(e){r.error(e)},complete:function(){r.complete()}})})}},{key:"filter",value:function(e){var t=this;if("function"!=typeof e)throw new TypeError(e+" is not a function");return new(f(this))(function(r){return t.subscribe({next:function(t){try{if(!e(t))return}catch(e){return r.error(e)}r.next(t)},error:function(e){r.error(e)},complete:function(){r.complete()}})})}},{key:"reduce",value:function(e){var t=this;if("function"!=typeof e)throw new TypeError(e+" is not a function");var r=f(this),n=arguments.length>1,i=!1,o=arguments[1],a=o;return new r(function(r){return t.subscribe({next:function(t){var o=!i;if(i=!0,!o||n)try{a=e(a,t)}catch(e){return r.error(e)}else a=t},error:function(e){r.error(e)},complete:function(){if(!i&&!n)return r.error(new TypeError("Cannot reduce an empty sequence"));r.next(a),r.complete()}})})}},{key:"concat",value:function(){for(var e=this,t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];var i=f(this);return new i(function(t){var n=void 0,o=0;return function e(a){n=a.subscribe({next:function(e){t.next(e)},error:function(e){t.error(e)},complete:function(){o===r.length?(n=void 0,t.complete()):e(i.from(r[o++]))}})}(e),function(){n&&(n.unsubscribe(),n=void 0)}})}},{key:"flatMap",value:function(e){var t=this;if("function"!=typeof e)throw new TypeError(e+" is not a function");var r=f(this);return new r(function(n){var i=[],o=t.subscribe({next:function(t){if(e)try{t=e(t)}catch(e){return n.error(e)}var o=r.from(t).subscribe({next:function(e){n.next(e)},error:function(e){n.error(e)},complete:function(){var e=i.indexOf(o);e>=0&&i.splice(e,1),a()}});i.push(o)},error:function(e){n.error(e)},complete:function(){a()}});function a(){o.closed&&0===i.length&&n.complete()}return function(){i.forEach(function(e){return e.unsubscribe()}),o.unsubscribe()}})}},{key:u,value:function(){return this}}],[{key:"from",value:function(t){var r="function"==typeof this?this:e;if(null==t)throw new TypeError(t+" is not an object");var n=d(t,u);if(n){var i=n.call(t);if(Object(i)!==i)throw new TypeError(i+" is not an object");return h(i)&&i.constructor===r?i:new r(function(e){return i.subscribe(e)})}if(a("iterator")&&(n=d(t,c)))return new r(function(e){v(function(){if(!e.closed){var r=!0,i=!1,o=void 0;try{for(var a,s=n.call(t)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var c=a.value;if(e.next(c),e.closed)return}}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}e.complete()}})});if(Array.isArray(t))return new r(function(e){v(function(){if(!e.closed){for(var r=0;r<t.length;++r)if(e.next(t[r]),e.closed)return;e.complete()}})});throw new TypeError(t+" is not observable")}},{key:"of",value:function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];var i="function"==typeof this?this:e;return new i(function(e){v(function(){if(!e.closed){for(var t=0;t<r.length;++t)if(e.next(r[t]),e.closed)return;e.complete()}})})}},{key:l,get:function(){return this}}]),e}();o()&&Object.defineProperty(O,Symbol("extensions"),{value:{symbol:u,hostReportError:p},configurable:!0})},function(e,t,r){var n=r(21),i=r(43),o=r(45),a="Expected a function",s=Math.max,c=Math.min;e.exports=function(e,t,r){var u,l,d,f,h,p,v=0,m=!1,y=!1,b=!0;if("function"!=typeof e)throw new TypeError(a);function g(t){var r=u,n=l;return u=l=void 0,v=t,f=e.apply(n,r)}function w(e){var r=e-p;return void 0===p||r>=t||r<0||y&&e-v>=d}function _(){var e=i();if(w(e))return O(e);h=setTimeout(_,function(e){var r=t-(e-p);return y?c(r,d-(e-v)):r}(e))}function O(e){return h=void 0,b&&u?g(e):(u=l=void 0,f)}function x(){var e=i(),r=w(e);if(u=arguments,l=this,p=e,r){if(void 0===h)return function(e){return v=e,h=setTimeout(_,t),m?g(e):f}(p);if(y)return clearTimeout(h),h=setTimeout(_,t),g(p)}return void 0===h&&(h=setTimeout(_,t)),f}return t=o(t)||0,n(r)&&(m=!!r.leading,d=(y="maxWait"in r)?s(o(r.maxWait)||0,t):d,b="trailing"in r?!!r.trailing:b),x.cancel=function(){void 0!==h&&clearTimeout(h),v=0,u=p=l=h=void 0},x.flush=function(){return void 0===h?f:O(i())},x}},function(e,t,r){var n=r(27);e.exports=function(){return n.Date.now()}},function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(this,r(25))},function(e,t,r){var n=r(21),i=r(46),o=NaN,a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return o;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var r=c.test(e);return r||u.test(e)?l(e.slice(2),r?2:8):s.test(e)?o:+e}},function(e,t,r){var n=r(47),i=r(50),o="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||i(e)&&n(e)==o}},function(e,t,r){var n=r(28),i=r(48),o=r(49),a="[object Null]",s="[object Undefined]",c=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?s:a:c&&c in Object(e)?i(e):o(e)}},function(e,t,r){var n=r(28),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,s=n?n.toStringTag:void 0;e.exports=function(e){var t=o.call(e,s),r=e[s];try{e[s]=void 0;var n=!0}catch(e){}var i=a.call(e);return n&&(t?e[s]=r:delete e[s]),i}},function(e,t){var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,r){"use strict";var n=r(0);var i=r(4);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const o=new WeakMap;Object(i.d)(e=>t=>{if(!(t instanceof i.a)||t instanceof i.b||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:r}=t,{element:n}=r;o.has(t)||(n.className=r.strings.join(" "));const{classList:a}=n,s=o.get(t);for(const t in s)t in e||a.remove(t);for(const t in e){const r=e[t];if(!s||r!==s[t]){a[r?"add":"remove"](t)}}o.set(t,e)});
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const a=n.b`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}`;r(39);var s=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
let c=class extends n.a{render(){return n.d`<slot></slot>`}};c.styles=a,c=s([Object(n.c)("mwc-icon")],c);const u="font-size: var(--grid-record-fontsize, 13px);vertical-align: middle; color: var(--grid-dirty-color, inherit)";var l={sequence:class{static instance(e={}){return Object.assign({},e,{type:"gutter",name:"__seq__",getterType:"sequence",width:function(e){if(this.data)var{limit:t=0,page:r=1,total:n=0,records:i=[]}=this.data||{},o=(r-1)*t+i.length;else o=100;return`${Math.max(20,11*String(o).length)}px`},resizable:!1,sortable:!1,header:"#",record:{renderer:function(e,t,r,n,i){return e},align:"center"}})}},"row-selector":class{static instance(e={}){return Object.assign({},e,{type:"gutter",name:"__selected__",gutterType:"row-selector",width:26,resizable:!1,sortable:!1,header:{renderer:function(e){var t=((this.data||{}).records||[]).find(e=>e.__selected__);return n.d`
            <input
              type="checkbox"
              .checked=${t}
              @change=${t=>{let r=!!e.multiple&&t.target.checked;this.dispatchEvent(new CustomEvent("select-all-change",{bubbles:!0,composed:!0,detail:{selected:r}})),t.stopPropagation()}}
            />
          `}},record:{renderer:function(e,t,r,i,o){return n.d`
            <input
              center
              type=${t.multiple?"checkbox":"radio"}
              .checked=${!!e}
              @change=${e=>{let n=e.target.checked,i=t.multiple?{added:n?[r]:[],removed:n?[]:[r]}:{records:n?[r]:[]};o.dispatchEvent(new CustomEvent("select-record-change",{bubbles:!0,composed:!0,detail:i})),e.stopPropagation()}}
            />
          `},align:"center"}})}},button:class{static instance(e={}){var{icon:t="edit"}=e;return Object.assign({},e,{type:"gutter",gutterType:"button",width:26,resizable:!1,sortable:!1,header:{renderer:function(e){return n.d`
            <mwc-icon style=${"font-size: var(--grid-header-fontsize, 13px);vertical-align: middle;"}>${t}</mwc-icon>
          `}},record:{renderer:function(e,r,i,o,a){return n.d`
            <mwc-icon style=${"font-size: var(--grid-record-fontsize, 13px);vertical-align: middle;"} center>${t}</mwc-icon>
          `},align:"center"}})}},dirty:class{static instance(e={}){return Object.assign({},e,{type:"gutter",name:"__dirty__",gutterType:"dirty",width:16,resizable:!1,sortable:!1,header:"",record:{renderer:function(e,t,r,n,o){switch(e){case"+":return i.e`
                <mwc-icon style=${u} center>add</mwc-icon>
              `;case"-":return i.e`
                <mwc-icon style=${u} center>remove</mwc-icon>
              `;case"M":return i.e`
                <mwc-icon style=${u} center>done</mwc-icon>
              `;default:return""}},align:"center"}})}}};const d=(e,t,r,n,i)=>void 0===e?"":e,f={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1},h=(e,t,r,n,i)=>{if(e=Number(e),isNaN(e))return"";var o=t.record.options||f;return new Intl.DateTimeFormat(navigator.language,o).format(new Date(e))};customElements.define("data-grist-progress-renderer",class extends n.a{static get styles(){return n.b`
      :host {
        display: block;
        position: relative;
      }

      #border {
        display: block;
        position: absolute;

        height: 100%;
        width: 100%;
        box-sizing: border-box;

        border: 1px solid var(--primary-color);
        background-color: transparent;
      }

      #bar {
        background-color: var(--data-grist-progress-color, var(--primary-color));
        text-align: left;
      }
    `}static get properties(){return{value:Number,min:Number,max:Number}}render(){var{value:e,min:t,max:r}=this,i=isNaN(e)?0:Math.min(100,Math.max(0,100*(e-t)/(r-t)));return n.d`
      <div id="border"></div>
      <div id="bar" style="width:${i}%">
        &nbsp;${isNaN(i)?"":i}
      </div>
    `}});var p={string:d,integer:d,float:d,number:d,select:d,boolean:(e,t,r,n,o)=>i.e`
    <input type="checkbox" .checked=${!!e} disabled center />
  `,date:h,time:h,datetime:h,color:(e,t,r,n,o)=>(e=void 0===e?"#000":e,i.e`
    <div style="display:block;background-color:${e}">${e}</div>
  `),progress:(e,t,r,i,o)=>{var{min:a=0,max:s=100}=t.record.options||{};return n.d`
    <data-grist-progress-renderer
      .value=${Number(e)}
      .min=${Number(a)}
      .max=${Number(s)}
    ></data-grist-progress-renderer>
  `},link:(e,t,r,n,o)=>{var{href:a,target:s}=t.record.options||{};return e=void 0===e?"":e,"function"==typeof a&&(a=a(e,t,r,n,o)),s?i.e`
        <a style="text-decoration:none;color:inherit" href=${a||e} target=${s}>${e}</a>
      `:i.e`
        <a style="text-decoration:none;color:inherit" href=${a||e}>${e}</a>
      `}};function v(e){return"function"==typeof e?e:p[e]||d}const m=n.b`
  :host {
    display: block;

    width: 100%;
    height: 100%;

    border: 0;
    background-color: transparent;
  }

  :host > * {
    display: block;

    width: 100%;
    height: 100%;

    border: 0;
    background-color: transparent;

    box-sizing: border-box;

    font-size: inherit;
    font-family: inherit;
  }

  :host > input[type='checkbox'] {
    width: initial;
    margin: auto;
  }

  @media screen and (max-width: 460px) {
    :host > * {
      border: initial;
      background-color: initial;
    }
  }
`;class y extends n.a{static get properties(){return{value:Object,column:Object,record:Object,rowIndex:Number,field:Object}}static get styles(){return m}render(){return this.editorTemplate}get editor(){return this.shadowRoot.firstElementChild}async firstUpdated(){this.shadowRoot.addEventListener("change",this.onchange.bind(this)),this.shadowRoot.addEventListener("focusout",this.onfocusout.bind(this)),this.shadowRoot.addEventListener("click",this.onclick.bind(this)),this.shadowRoot.addEventListener("dblclick",this.ondblclick.bind(this));var e=this.column.record&&this.column.record.align;e&&(this.style.textAlign=e,this.style.textAlignLast=e),this.value=this._dirtyValue=this.formatForEditor(this.record[this.column.name]),this.focus(),await this.updateComplete,this.select()}select(){this.editor.select&&this.editor.select()}focus(){this.editor.focus()}formatForEditor(e){return void 0===e?"":e}formatFromEditor(e){return e.target.value}onfocusout(){this._dirtyValue!==this.value&&this.dispatchEvent(new CustomEvent("field-change",{bubbles:!0,composed:!0,detail:{before:this.value,after:this._dirtyValue,column:this.column,record:this.record,row:this.row}}))}onchange(e){e.stopPropagation(),this._dirtyValue=this.formatFromEditor(e)}onclick(e){e.stopPropagation()}ondblclick(e){e.stopPropagation()}get editorTemplate(){return n.d``}}customElements.define("input-editor",y);class b extends y{get editorTemplate(){return n.d`
      <input type="text" .value=${this.value} />
    `}}customElements.define("text-input",b);class g extends y{touchValue(e){let t=e.target.value;switch(this.column.type){case"float":return Number.parseFloat(t);case"integer":return Number.parseInt(t);default:return Number(t)}}get editorTemplate(){return n.d`
      <input type="number" .value=${this.value} />
    `}}customElements.define("number-input",g);class w extends y{get editorTemplate(){return n.d`
      <input type="date" .value=${this.value} />
    `}}customElements.define("date-input",w);class _ extends y{get editorTemplate(){return n.d`
      <input type="time" .value=${this.value} />
    `}}customElements.define("time-input",_);class O extends y{formatForEditor(e){e||(e=Date.now());var t=6e4*new Date(e).getTimezoneOffset();return new Date(e-t).toISOString().slice(0,-1)}formatFromEditor(e){var t=e.target.value;return new Date(t).getTime()}get editorTemplate(){return n.d`
      <input type="datetime-local" .value=${this.value} />
    `}}customElements.define("datetime-input",O);class x extends y{get editorTemplate(){return n.d`
      <input type="color" .value=${this.value} />
    `}}customElements.define("color-input",x);class S extends y{formatFromEditor(e){return e.target.checked}get editorTemplate(){return n.d`
      <input type="checkbox" .checked=${!!this.value} />
    `}}customElements.define("checkbox-input",S);class E extends y{get editorTemplate(){var{options:e=[]}=this.column.record||{};return e=e.map(e=>"string"==typeof e?{display:e,value:e}:e),n.d`
      <select>
        ${e.map(e=>n.d`
            <option ?selected=${e.value==this.value}>${e.display}</option>
          `)}
      </select>
    `}}customElements.define("select-input",E);var k={string:b,integer:g,float:g,progress:g,select:E,boolean:S,date:w,time:_,datetime:O,color:x};function j(e){return"function"==typeof e?e:function(t,r,n,i,o){var a=new(k[e]||b);return a.value=t,a.record=n,a.column=r,a.row=i,a.field=o,a}}var P=r(12);const T="APPEND_VIEWPART",C="headerbar";var R=0;const q=(e,t)=>{var r=history.state,n=r?r.overlay:void 0,i=n&&void 0!==n.sequence?n.sequence:R,o=R=i+1;t&&P.d.dispatch({type:"UPDATE_VIEWPART",name:e,override:t});var a=Object.assign({},r||{},{overlay:{name:e,sequence:o}});history.pushState(a,"",location.href),window.dispatchEvent(new CustomEvent("popstate",{detail:{state:a}}))};R=0;const Q=(e,t={})=>{var r=`$popup-${R++}`;return(({name:e,viewpart:t,position:r})=>{P.d.dispatch({type:T,name:e,viewpart:{...t,show:(!t.hovering||!t.show)&&t.show},position:r}),t.hovering&&t.show&&q(e)})({name:r,viewpart:{hovering:t.hovering||"center",backdrop:!0,show:!1,temporary:!0,template:e},position:C}),q(r),{name:r,close:()=>{history.back()}}};customElements.define("record-view",class extends n.a{static get styles(){return n.b`
      :host {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-auto-rows: min-content;
        grid-gap: 10px;
        background-color: #fff;
        padding: 10px;
      }

      label {
        text-align: right;
      }
    `}static get properties(){return{field:Object,columns:Array,column:Object,record:Object,rowIndex:Number}}render(){var e=(this.columns||[]).filter(e=>!e.hidden&&"gutter"!=e.type),t=this.record||{},r=this.rowIndex;return n.d`
      ${e.map(e=>n.d`
          <label>${this._renderLabel(e)}</label>
          <div>${e.record.renderer.call(this.field,e,t,r)}</div>
        `)}
    `}_renderLabel(e){var{renderer:t}=e.header,r=t.call(this,e);return n.d`
      ${r}
    `}});customElements.define("record-form",class extends n.a{static get styles(){return n.b`
      :host {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-auto-rows: min-content;
        grid-gap: 10px;
        background-color: #fff;
        padding: 10px;
      }

      label {
        text-align: right;
      }
    `}static get properties(){return{field:Object,columns:Array,column:Object,record:Object,rowIndex:Number}}render(){var e=(this.columns||[]).filter(e=>!e.hidden&&"gutter"!=e.type),t=this.record||{},r=this.rowIndex;return n.d`
      ${e.map(e=>{let{editable:i,renderer:o,editor:a}=e.record;return n.d`
          <label>${this._renderLabel(e)}</label>
          <div>
            ${i?a.call(this.field,e,t,r):o.call(this.field,e,t,r)}
          </div>
        `})}
    `}_renderLabel(e){var{renderer:t}=e.header,r=t.call(this,e);return n.d`
      ${r}
    `}});const I=()=>{};var N={"record-view":function(e,t,r,n,o,a){Q(i.e`
      <record-view
        style=${"width: 50vw;height: 50vh"}
        .field=${a}
        .columns=${e}
        .column=${r}
        .record=${n}
        .rowIndex=${o}
      ></record-view>
    `,{backdrop:!0})},"record-form":function(e,t,r,n,o,a){Q(i.e`
      <record-form
        style=${"width: 50vw;height: 50vh"}
        .field=${a}
        .columns=${e}
        .column=${r}
        .record=${n}
        .rowIndex=${o}
      ></record-form>
    `,{backdrop:!0})},"select-row":function(e,t,r,n,i,o){o.dispatchEvent(new CustomEvent("select-record-change",{bubbles:!0,composed:!0,detail:{added:[n]}}))},"select-row-toggle":function(e,t,r,n,i,o){o.dispatchEvent(new CustomEvent("select-record-change",{bubbles:!0,composed:!0,detail:n.__selected__?{removed:[n]}:{added:[n]}}))}};function A(e){return"function"==typeof e?e:N[e]||I}const M=e=>{var t={...e};"gutter"==e.type&&(t=(e=>{var t=l[e.gutterName];if(t)return t.instance(e)})(e));var{header:r={},record:n={},handlers:i={}}=t;if("string"==typeof r)t.header={renderer:()=>r};else{var{renderer:o}=r;t.header={...r,renderer:v(o)}}var{renderer:a,editor:s,editable:c}=n;a||(a=v(e.type)),c&&"function"!=typeof s&&(s=j(s||e.type)),t.record={...n,renderer:a,editor:s};var{click:u,dblclick:d}=i;return t.handlers={click:A(u),dblclick:A(d)},t},D=e=>{var t={...e},{columns:r=[],rows:n={},pagination:i={}}=e;return t.columns=r.map(e=>M(e)),t.rows=(e=>{var{appendable:t=!1,insertable:r=!1,selectable:n}=e,{click:i,dblclick:o}=e.handlers||{};return{appendable:t,insertable:r,selectable:n,handlers:{click:A(i),dblclick:A(o)}}})(n),t.pagination=i,t};var L=r(36),V=r.n(L);customElements.define("data-grid-header",class extends n.a{static get properties(){return{config:Object,columns:Array,data:Object,_sorters:Array}}static get styles(){return[n.b`
        :host {
          display: grid;
          grid-template-columns: var(--grid-template-columns);

          overflow: hidden;
        }

        div {
          display: flex;

          white-space: nowrap;
          overflow: hidden;
          background-color: var(--grid-header-background-color, gray);
          border: 1px solid var(--grid-header-border-color);
          border-width: 1px 0;
          border-left: 1px solid rgba(255, 255, 255, 0.6);
          border-right: 1px solid rgba(0, 0, 0, 0.1);
          padding: 5px 0;

          text-overflow: ellipsis;
          text-align: center;
          font-size: var(--grid-header-fontsize, 1em);
          color: var(--grid-header-color, white);
        }

        span {
          white-space: nowrap;
          overflow: hidden;

          text-align: center;
        }

        span[title] {
          flex: 1;
          text-overflow: ellipsis;
          font: var(--grid-header-font);
          color: var(--grid-header-color);
          text-transform: capitalize;
        }

        span[sorter] {
          padding: 0;
          border: 0;
          font-size: 10px;
        }

        span[splitter] {
          cursor: col-resize;
        }
      `]}_onWheelEvent(e){var t=Math.max(-1,Math.min(1,e.deltaY||0));this.scrollLeft=Math.max(0,this.scrollLeft-40*t),e.preventDefault()}firstUpdated(){this.addEventListener("wheel",this._onWheelEvent.bind(this),!1)}updated(e){e.has("config")&&(this._sorters=this.config.sorters||[])}render(){var e=this.columns||[];return n.d`
      ${e.map((e,t)=>e.hidden?n.d``:n.d`
              <div @dragstart=${e=>this._dragStart(e,t)}>
                <span title @click=${t=>this._changeSort(e)}>${this._renderHeader(e)} </span>

                ${e.sortable?n.d`
                      <span sorter @click=${t=>this._changeSort(e)}>
                        ${this._renderSortHeader(e)}
                      </span>
                    `:n.d``}
                ${!1!==e.resizable?n.d`
                      <span splitter draggable="true">&nbsp;</span>
                    `:n.d``}
              </div>
            `)}

      <div></div>
    `}_renderHeader(e){var{renderer:t}=e.header,r=t.call(this,e);return n.d`
      ${r}
    `}_renderSortHeader(e){if(e.hidden)return n.d``;var t=this._sorters||[],r=t.find(t=>"gutter"!==e.type&&e.name==t.name);if(!r)return n.d``;if(t.length>1){var i=t.indexOf(r)+1;return r.desc?n.d`
            &#9650;<sub>${i}</sub>
          `:n.d`
            &#9660;<sub>${i}</sub>
          `}return r.desc?n.d`
            &#9650;
          `:n.d`
            &#9660;
          `}_changeSort(e){if(e.sortable){var t=[...this._sorters||[]],r=t.findIndex(t=>t.name==e.name);if(-1!==r){let e=t[r];e.desc?t.splice(r,1):e.desc=!0}else{var n={name:e.name};t.push(n)}this._sorters=t,this.dispatchEvent(new CustomEvent("sorters-change",{bubbles:!0,composed:!0,detail:this._sorters}))}}_notifyWidthChange(e,t){this.throttledNotifier||(this.throttledNotifier=V()(function(e,t){e=this.dispatchEvent(new CustomEvent("column-width-change",{bubbles:!0,composed:!0,detail:{idx:e,width:t}}))},100)),this.throttledNotifier(e,t)}_dragStart(e,t){var r=e.currentTarget,n=e.offsetX,i=(e=>{let r=this.columns[t],i=Math.max(0,Number(r.width)+e.offsetX-n);0!=i&&this._notifyWidthChange(t,i)}).bind(this),o=(e=>{r.removeEventListener("drag",i),r.removeEventListener("dragend",o),i(e)}).bind(this);r.addEventListener("drag",i),r.addEventListener("dragend",o)}});const $="left";customElements.define("data-grid-field",class extends n.a{static get properties(){return{align:{attribute:!0},record:Object,column:Object,rowIndex:Number,editing:{attribute:"editing"},value:Object}}static get styles(){return[n.b`
        :host {
          display: flex;
          align-items: center;
          justify-content: var(--data-grid-field-justify-content, flex-start);

          white-space: nowrap;
          overflow: hidden;
          background-color: var(--grid-record-background-color, white);
          padding: 7px 0px;
          border: 1px solid transparent;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);

          font-size: var(--grid-record-wide-fontsize);
          text-overflow: ellipsis;
        }

        :host([editing]) {
          padding: 0;
        }

        * {
          flex: 1;
          margin: 0;
        }

        *[center] {
          flex: none;
          margin: 0 auto;
        }
      `]}get isEditing(){return this.hasAttribute("editing")}render(){if(!this.column)return n.d``;var{value:e,column:t,record:r,rowIndex:i}=this,{renderer:o,editor:a}=t.record;return n.d`
      ${this.isEditing?a(e,t,r,i,this):o(e,t,r,i,this)}
    `}updated(e){if(e.has("editing")&&(this.isEditing?(this._onKeydownInEditingMode=(e=>{27==e.keyCode&&(this._editCancelled=!0)}).bind(this),this._onFieldChange=(e=>{this._editCancelled&&e.stopPropagation()}).bind(this),delete this._editCancelled,this.addEventListener("field-change",this._onFieldChange),this.addEventListener("keydown",this._onKeydownInEditingMode)):(this.removeEventListener("field-change",this._onFieldChange),this.removeEventListener("keydown",this._onKeydownInEditingMode))),e.has("column")){var t=this.column.record&&this.column.record.align||$;if(t!=$){let e="center";switch(t){case"right":e="flex-end"}this.style.setProperty("--data-grid-field-justify-content",e)}}}});const F=37,U=38,z=39,H=40,B=13,W=9,G=8,K=27,J=33,Y=34;async function X(e){var t=e.keyCode,{row:r=0,column:n=0}=this.focused||{},{records:i=[]}=this.data||{},o=i.length,a=(this.columns||[]).filter(e=>!e.hidden).length-1;if(this.editTarget)switch(t){case K:case B:return this.editTarget=null,void this.focus();default:return}else switch(t){case U:r=Math.max(0,r-1);break;case H:r=Math.min(o,r+1);break;case B:return void this.startEditTarget(r,n);case F:case G:n=Math.max(0,n-1);break;case z:case W:n=Math.min(a,n+1);break;case J:r=Math.max(0,r-10);break;case Y:r=Math.min(o,r+10);break;case K:return;default:return void((t>47&&t<58||32==t||13==t||t>64&&t<91||t>95&&t<112||t>185&&t<193||t>218&&t<223)&&this.startEditTarget(r,n))}this.focused&&this.focused.row===r&&this.focused.column===n||(this.focused={row:r,column:n}),e.preventDefault()}function Z(e){e.stopPropagation();var t=e.target,{column:r,record:n,rowIndex:i,columnIndex:o}=t;if(r){isNaN(i)||isNaN(o)?console.error("should not be here."):this.focused&&i===this.focused.row&&o===this.focused.column||(this.focused={row:i,column:o},this.editTarget=null);var{click:a}=r.handlers;a&&a(this.columns,this.data,r,n,i,t);var{click:s}=this.config.rows.handlers;s&&s(this.columns,this.data,r,n,i,t)}}async function ee(e){e.stopPropagation();var t=e.target,{record:r,rowIndex:n,columnIndex:i,column:o}=t;if(o)if(isNaN(n)||isNaN(i))console.error("should not be here.");else{setTimeout(()=>{this.startEditTarget(n,i)},1);var{dblclick:a}=o.handlers;a&&a(this.columns,this.data,o,r,n,t);var{click:s}=this.config.rows.handlers;s&&s(this.columns,this.data,o,r,n,t)}}const te=n.b`
  :host {
    display: grid;
    grid-template-columns: var(--grid-template-columns);
    grid-auto-rows: var(--grid-record-height, min-content);

    overflow: auto;
    outline: none;
  }

  :host > [odd] {
    background-color: var(--grid-record-odd-background-color);
  }

  :host > [focused] {
    border: var(--grid-record-focused-border);
  }

  :host > [selected-row] {
    background-color: var(--grid-record-selected-background-color);
  }

  :host > [focused-row] {
    background-color: var(--grid-record-focused-background-color);
    color: var(--grid-record-focused-color);
  }

  :host > [editing] {
    background-color: var(--grid-record-editor-background-color, transparent);
  }
`;customElements.define("data-grid-body",class extends n.a{static get properties(){return{config:Object,columns:Array,data:Object,focused:Object,editTarget:Object}}static get styles(){return[te]}render(){var{row:e=0,column:t=0}=this.focused||{},{row:r,column:i}=this.editTarget||{},o=(this.columns||[]).filter(e=>!e.hidden),a=this.data||{},{records:s=[]}=a;return e==s.length&&(s=[...s,{__dirty__:"+"}]),n.d`
      ${s.map((s,c)=>{var u=c===e,l=s.__selected__,d=c%2;return n.d`
          ${o.map((o,f)=>n.d`
              <data-grid-field
                .data=${a}
                .rowIndex=${c}
                .columnIndex=${f}
                .column=${o}
                .record=${s}
                ?odd=${d}
                ?focused-row=${u}
                ?selected-row=${l}
                ?focused=${c===e&&f===t}
                ?editing=${c===r&&f===i}
                .value=${s[o.name]}
              ></data-grid-field>
            `)}
          <data-grid-field
            .data=${a}
            .rowIndex=${c}
            .record=${s}
            ?odd=${d}
            ?focused-row=${u}
            ?selected-row=${l}
          ></data-grid-field>
        `})}
    `}firstUpdated(){this.setAttribute("tabindex","-1"),this.addEventListener("focusout",e=>{this._focusedListener&&(window.removeEventListener("keydown",this._focusedListener),delete this._focusedListener)}),this.addEventListener("focusin",e=>{this._focusedListener||(this._focusedListener=X.bind(this),window.addEventListener("keydown",this._focusedListener))}),this.shadowRoot.addEventListener("click",Z.bind(this)),this.shadowRoot.addEventListener("dblclick",ee.bind(this))}startEditTarget(e,t){var{editable:r}=(this.columns||[]).filter(e=>!e.hidden)[t].record;!r||this.editTarget&&e==this.editTarget.row&&t==this.editTarget.column||(this.editTarget={row:e,column:t})}updated(e){if(e.has("columns")&&(this.focused=null),e.has("focused")){let e=this.shadowRoot.querySelector("[focused]");if(!e)return;let{top:t,left:r}=function(e,t){var{top:r,left:n,right:i,bottom:o}=t.getBoundingClientRect(),{top:a,left:s,right:c,bottom:u}=e.getBoundingClientRect(),{scrollLeft:l,scrollTop:d}=e,f=e.clientWidth-e.offsetWidth,h=e.clientHeight-e.offsetHeight;return{left:n<s?l-(s-n):i>c?l-(c-i)-f:void 0,top:r<a?d-(a-r):o>u?d-(u-o)-h:void 0}}(this,e);void 0!==t&&(this.scrollTop=t),void 0!==r&&(this.scrollLeft=r)}}focus(){if(super.focus(),!this.focused||void 0===this.focused.row){let{records:e=[]}=this.data||{},t=e.findIndex(e=>e.__selected__);this.focused={row:-1==t?0:t,column:0}}}});const re=[20,30,50,100],ne=30;customElements.define("data-grid-footer",class extends n.a{static get properties(){return{config:Object,data:Object}}static get styles(){return[n.b`
        :host {
          display: flex;
          flex-direction: row;
          overflow: hidden;

          padding: var(--grid-footer-padding);
          background-color: var(--grid-footer-background-color);
          font-size: var(--grid-footer-font-size);
        }

        :host * {
          white-space: nowrap;
          overflow: hidden;
          padding: 0 2px;

          text-overflow: ellipsis;
          text-align: center;
          color: var(--grid-footer-color);
        }

        .filler {
          flex: 1;
        }

        mwc-icon {
          font-size: 1.5em;
          vertical-align: middle;
        }

        .limit a {
          color: var(--grid-footer-limit-color);
        }

        .limit a[selected] {
          color: var(--grid-footer-color);
          font-weight: bold;
          text-decoration: underline;
        }

        a[inactive] * {
          color: var(--grid-footer-inactive-color);
        }
      `]}_gotoPage(e){var{limit:t=20,total:r=0}=this.data||{};e>Math.ceil(r/t)||e<=0||this.dispatchEvent(new CustomEvent("page-change",{bubbles:!0,composed:!0,detail:e}))}_changeLimit(e){this.dispatchEvent(new CustomEvent("limit-change",{bubbles:!0,composed:!0,detail:e}))}render(){var{records:e=[],page:t=1,limit:r=ne,total:i=0}=this.data||{},{pages:o=re}=this.config&&this.config.pagination||{},a=r*(t-1)+1,s=a+e.length-1,c=Math.ceil(i/r);return n.d`
      <a ?inactive=${t<=1} @click=${e=>this._gotoPage(1)}><mwc-icon>skip_previous</mwc-icon></a>
      <a ?inactive=${t<=1} @click=${e=>this._gotoPage(t-1)}><mwc-icon>navigate_before</mwc-icon></a>
      <span>page ${t}&nbsp;/&nbsp;${c}</span>
      <a ?inactive=${t>=c} @click=${e=>this._gotoPage(t+1)}><mwc-icon>navigate_next</mwc-icon></a>
      <a ?inactive=${t>=c} @click=${e=>this._gotoPage(c)}><mwc-icon>skip_next</mwc-icon></a>

      <span class="filler"></span>

      <span class="limit">
        ${o.map(e=>n.d`
            <a ?selected=${r==e} @click=${t=>this._changeLimit(e)}>${e}</a>
          `)}
        records
      </span>
      <span>&nbsp;</span>
      <span>${a} - ${s}</span>
      <span>&nbsp;/&nbsp;</span>
      <span>total ${i||0} records.</span>
    `}});customElements.define("data-grid",class extends n.a{static get properties(){return{config:Object,data:Object}}static get styles(){return[P.a,n.b`
        :host {
          display: flex;
          flex-direction: column;

          overflow: hidden;

          border: 1px solid var(--grid-header-border-color);
          border-radius: 4px;
        }

        data-grid-body {
          flex: 1;
        }
      `]}get body(){return this.shadowRoot.querySelector("data-grid-body")}get header(){return this.shadowRoot.querySelector("data-grid-header")}firstUpdated(){this.header.addEventListener("scroll",e=>{this.body.scrollLeft!==this.header.scrollLeft&&(this.body.scrollLeft=this.header.scrollLeft)}),this.body.addEventListener("scroll",e=>{this.body.scrollLeft!==this.header.scrollLeft&&(this.header.scrollLeft=this.body.scrollLeft)}),this.addEventListener("select-all-change",e=>{var{selected:t}=e.detail,{records:r}=this.data;r.forEach(e=>e.__selected__=t),this.data={...this.data}}),this.addEventListener("select-record-change",e=>{var{records:t,added:r=[],removed:n=[]}=e.detail,{records:i}=this.data,{selectable:o=!1}=this.config.rows;i&&o&&(o&&!o.multiple&&i.forEach(e=>e.__selected__=!1),t?(i.forEach(e=>e.__selected__=!1),t.forEach(e=>e.__selected__=!0)):(n.forEach(e=>e.__selected__=!1),r.forEach(e=>e.__selected__=!0)),this.data={...this.data,records:[...i]})}),this.addEventListener("field-change",e=>{var{after:t,before:r,column:n,record:i,row:o}=e.detail;if(t!==r){var a=this.data.records||[],s=a[o],c=s?{__dirty__:"M",...s,[n.name]:t}:{__dirty__:"+",[n.name]:t};s?a.splice(o,1,c):a.push(c),this.data={...this.data,records:[...a]},this.dispatchEvent(new CustomEvent("record-change",{bubbles:!0,composed:!0,detail:{before:s,after:c,column:n,row:o}}))}})}updated(e){(e.has("config")||e.has("data"))&&this.calculateWidths(this.config&&this.config.columns)}calculateWidths(e){this._widths=(e||[]).filter(e=>!e.hidden).map(e=>{switch(typeof e.width){case"number":return e.width+"px";case"string":return e.width;case"function":return e.width.call(this,e);default:return"auto"}}).concat(["auto"]).join(" "),this.style.setProperty("--grid-template-columns",this._widths)}render(){var{pagination:e={},columns:t=[]}=this.config||{},r=!e.infinite,i=this.data;return n.d`
      <data-grid-header
        .config=${this.config}
        .columns=${t}
        .data=${i}
        @column-width-change=${e=>{let{idx:r,width:n}=e.detail;t[r].width=n,this.calculateWidths(t)}}
      ></data-grid-header>

      <data-grid-body .config=${this.config} .columns=${t} .data=${i}></data-grid-body>

      ${r?n.d`
            <data-grid-footer .config=${this.config} .data=${i}></data-grid-footer>
          `:n.d``}
    `}focus(){super.focus();var e=this.shadowRoot.querySelector("data-grid-body");e&&e.focus()}});const ie=new Intl.DateTimeFormat(navigator.language,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1});customElements.define("record-partial",class extends n.a{static get properties(){return{record:Object}}static get styles(){return[n.b`
        :host {
          display: block;
          padding: var(--data-list-item-padding);
          border-bottom: var(--data-list-item-border-bottom);
        }

        div {
          padding-top: 3px;
        }

        .name {
          font: var(--data-list-item-name-font);
          color: var(--data-list-item-name-color);
          text-transform: capitalize;
        }

        .desc {
          font: var(--data-list-item-disc-font);
          color: var(--data-list-item-disc-color);
        }

        .update-info {
          font: var(--data-list-item-etc-font);
          color: var(--data-list-item-etc-color);
        }

        .update-info mwc-icon {
          vertical-align: middle;
          font-size: 1em;
        }
      `]}render(){var e=this.record||{};return n.d`
      <div class="name">&nbsp;${e.name}</div>
      <div class="desc">&nbsp;${e.description}</div>
      ${e.updatedAt?n.d`
            <div class="update-info">
              <mwc-icon>access_time</mwc-icon> Updated At : ${ie.format(new Date(Number(e.updatedAt)))} /
              ${e.updaterId}
            </div>
          `:""}
    `}});const oe="width: 100vw;height: 100vh";customElements.define("data-list",class extends n.a{static get properties(){return{config:Object,data:Object,_records:Array}}static get styles(){return[n.b`
        :host {
          background-color: var(--data-list-background-color);
          overflow-y: auto;
        }

        :nth-child(even) {
          background-color: #fff;
        }
      `]}firstUpdated(e){this.addEventListener("scroll",e=>{if(this.scrollHeight<=this.offsetHeight+this.scrollTop+1){var t=Math.ceil(this._total/this._limit);this._page<t&&this.dispatchEvent(new CustomEvent("attach-page",{bubbles:!0,composed:!0}))}}),Object(P.b)(this.shadowRoot),this.shadowRoot.addEventListener("click",e=>{var t=e.target,r=this.config.columns,{record:i,rowIndex:o}=t;Q(n.d`
          <record-form
            style=${oe}
            .columns=${r}
            .column=${r[0]}
            .record=${i}
            .rowIndex=${o}
          ></record-form>
        `,{backdrop:!0})}),this.shadowRoot.addEventListener("long-press",e=>{var t=e.target,r=this.config.columns,{record:i,rowIndex:o}=t;Q(n.d`
          <record-view
            style=${oe}
            .columns=${r}
            .column=${r[0]}
            .record=${i}
            .rowIndex=${o}
          ></record-view>
        `,{backdrop:!0})})}updated(e){e.has("config")&&(this._records=[],this._page=1),e.has("data")&&(this._records=this.data.records,this._total=this.data.total,this._limit=this.data.limit,this._page=this.data.page)}render(){var e=this._records||[];return n.d`
      ${e.map((e,t)=>n.d`
          <record-partial .record=${e} .rowIndex=${t}></record-partial>
        `)}
      <record-partial .rowIndex=${e.length}></record-partial>
    `}});const ae=function(){};class se{constructor(e){this.grist=e,this._fetchHandler=null,this._editHandler=null,this._pageChangeHandler=this.onPageChange.bind(this),this._limitChangeHandler=this.onLimitChange.bind(this),this._sortersChangeHandler=this.onSortersChange.bind(this),this._recordChangeHandler=this.onRecordChange.bind(this),this._attachPageHandler=this.onAttachPage.bind(this),this.grist.addEventListener("attach-page",this._attachPageHandler),this.grist.addEventListener("page-change",this._pageChangeHandler),this.grist.addEventListener("limit-change",this._limitChangeHandler),this.grist.addEventListener("sorters-change",this._sortersChangeHandler),this.grist.addEventListener("record-change",this._recordChangeHandler)}dispose(){this.grist.removeEventListener("attach-page",this._attachPageHandler),this.grist.removeEventListener("page-change",this._pageChangeHandler),this.grist.removeEventListener("limit-change",this._limitChangeHandler),this.grist.removeEventListener("sorters-change",this._sortersChangeHandler),this.grist.removeEventListener("record-change",this._recordChangeHandler)}onAttachPage(){this.attach()}onPageChange(e){var t=e.detail;this.fetch({page:t})}onLimitChange(e){var t=e.detail;this.fetch({limit:t})}onSortersChange(e){this.sorters=e.detail,this.fetch()}onRecordChange(e){this.editHandler.call()}get fetchOptions(){return this._fetchOptions}set fetchOptions(e){this._fetchOptions=e,this.fetch()}get fetchHandler(){return this._fetchHandler||ae}set fetchHandler(e){this._fetchHandler=e}get editHandler(){return this._editHandler||ae}set editHandler(e){this._editHandler=e}get sorters(){return this._sorters}set sorters(e){this._sorters=e}async attach(e=!1){var{page:t=0,limit:r=20}=this;return e&&(this.records=null,t=0),t+=1,this._update({limit:r,page:t,...await this.fetchHandler.call(null,{page:t,limit:r,sorters:this.sorters,options:this.fetchOptions})})}async fetch({page:e=this.page,limit:t=this.limit,sorters:r=this.sorters}={}){return this.records=null,this.sorters=r,this._update({limit:t,page:e,...await this.fetchHandler.call(null,{page:e,limit:t,sorters:r,options:this.fetchOptions})})}async _update({page:e,limit:t,total:r,records:n}){var i=function(e,t){return Math.ceil(t/e)}(t,r);if(i<e)return await this.fetch({page:i,limit:t});if(n){if(this.records){if(!(this.page<e))return;this.records=[...this.records,...n]}else this.records=n;this.limit=t,this.total=r,this.page=e,this.grist.data={page:this.page,limit:this.limit,total:this.total,records:this.records}}}}const ce={page:1,limit:20,total:1,records:[]};customElements.define("data-grist",class extends n.a{static get styles(){return[n.b`
        :host {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          background-color: var(--grist-background-color);
          padding: var(--grist-padding);

          overflow: hidden;

          /* for pulltorefresh controller */
          position: relative;
        }

        data-grid,
        data-list {
          flex: 1;
        }

        data-list {
          overflow-y: auto;
        }
      `]}static get properties(){return{mode:String,config:Object,data:Object,selectedRecords:Array,fetchHandler:Object,fetchOptions:Object,editHandler:Object,_data:Object,_config:Object}}connectedCallback(){super.connectedCallback(),this.dataProvider=new se(this)}disconnectedCallback(){super.disconnectedCallback(),this.dataProvider.dispose()}firstUpdated(){Object(P.c)({container:this.shadowRoot,scrollable:this.grist,refresh:()=>this.fetch(!0)})}render(){return n.d`
      ${"GRID"==this.mode?n.d`
            <data-grid id="grist" .config=${this._config} .data=${this._data}> </data-grid>
          `:n.d`
            <data-list id="grist" .config=${this._config} .data=${this._data}> </data-list>
          `}
    `}async fetch(e=!1){if(this.dataProvider){let{limit:t=20,page:r=1,infinite:n}=this._config.pagination,{sorters:i}=this._config;n||"GRID"!==this.mode?await this.dataProvider.attach(e):await this.dataProvider.fetch({limit:t,page:r,sorters:i})}}updated(e){if(e.has("config")&&(this._config=D(this.config),this.dataProvider.sorters=this._config.sorters,this.fetch()),e.has("fetchHandler")&&(this.dataProvider.fetchHandler=this.fetchHandler),e.has("editHandler")&&(this.dataProvider.editHandler=this.editHandler),e.has("fetchOptions")&&(this.dataProvider.fetchOptions=this.fetchOptions),e.has("data")){var{limit:t=ce.limit,page:r=ce.page,total:n=ce.total,records:i=[]}=this.data;i=i.map((e,n)=>({...e,__seq__:(r-1)*t+n+1})),this._data={limit:t,page:r,total:n,records:i}}if(e.has("selectedRecords")){var{records:i}=this.data||[],o=this.selectedRecords||[],a=this._data.records;o.forEach(e=>{var t=i.indexOf(e),r=a[t];r&&(r.__selected__=!0)}),this._data={...this._data}}}get grist(){return this.shadowRoot.querySelector("#grist")}get dirtyRecords(){var{records:e=[]}=this.grist.data||{};const t=["id","__dirty__",...this.grist.config.columns.filter(e=>e.record.editable).map(e=>e.name)];return e.filter(e=>e.__dirty__).map(e=>{let r={};for(let n in e)t.includes(n)&&(r[n]=e[n]);return r})}get selected(){var{records:e=[]}=this.grist.data||{};return e.filter(e=>e.__selected__)}focus(){super.focus(),this.grist.focus()}commit(){var{page:e,total:t,limit:r,records:n}=this.grist.data;this.data={page:e,total:t,limit:r,records:n.map(e=>{var t={...e};return delete t.__seq__,delete t.__dirty__,delete t.__selected__,delete t.__changes__,t})}}})},function(e,t,r){"use strict";var n=r(0);
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const i=e=>t=>(class extends t{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=e.subscribe(()=>this.stateChanged(e.getState())),this.stateChanged(e.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(e){}}),o=({title:e,description:t,url:r,image:n,imageAlt:i})=>{e&&(document.title=e,a("property","og:title",e)),t&&(a("name","description",t),a("property","og:description",t)),n&&a("property","og:image",n),i&&a("property","og:image:alt",i),a("property","og:url",r=r||window.location.href)};
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function a(e,t,r){let n=document.head.querySelector(`meta[${e}="${t}"]`);n||((n=document.createElement("meta")).setAttribute(e,t),document.head.appendChild(n)),n.setAttribute("content",r||"")}
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const s=e=>{document.body.addEventListener("click",t=>{if(t.defaultPrevented||0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)return;const r=t.composedPath().filter(e=>"A"===e.tagName)[0];if(!r||r.target||r.hasAttribute("download")||"external"===r.getAttribute("rel"))return;const n=r.href;if(!n||-1!==n.indexOf("mailto:"))return;const i=window.location,o=i.origin||i.protocol+"//"+i.host;0===n.indexOf(o)&&(t.preventDefault(),n!==i.href&&(window.history.pushState({},"",n),e(i,t)))}),window.addEventListener("popstate",t=>e(window.location,t)),e(window.location,null)};var c=r(10),u=r(17),l=r(11);const d=n.b`
  :host {
    display: grid;

    grid-template-rows: var(--app-grid-template-rows, auto 1fr auto);
    grid-template-columns: var(--app-grid-template-columns, auto 1fr auto);
    grid-template-areas: var(--app-grid-template-area, 'header header header' 'nav main aside' 'nav footer aside');
    grid-gap: var(--app-grid-gap, 0em);

    width: 100vw;
    height: 100vh;
  }

  header-bar {
    grid-area: header;
  }

  nav-bar {
    grid-area: nav;
  }

  main {
    grid-area: main;

    overflow: hidden;

    display: flex;
    flex-direction: row;
  }

  aside-bar {
    grid-area: aside;
  }

  footer-bar {
    grid-area: footer;
  }

  main * {
    flex: 1;
  }

  main *:not([active]) {
    display: none;
  }

  [hidden] {
    display: none;
  }
  /* Wide layout */
  @media (min-width: 460px) {
  }
`;window.customElements.define("things-app",class extends(i(l.a)(n.a)){static get properties(){return{appTitle:String,_page:String,_params:Object,_callbacks:Array,_activePage:Object,_context:Object,_modules:Array}}static get styles(){return[d]}render(){var e=this._params||{},t=this._context&&this._context.fullbleed||e.fullbleed&&"Y"==e.fullbleed;return n.d`
      <header-bar ?hidden=${t}></header-bar>

      <nav-bar ?hidden=${t}></nav-bar>

      <main></main>

      <aside-bar ?hidden=${t}></aside-bar>

      <footer-bar ?hidden=${t}></footer-bar>
    `}connectedCallback(){super.connectedCallback(),r.e(2).then(r.t.bind(null,54,7)).then(e=>{var t=e.modules;this.dispatchEvent(new Event("lifecycle-bootstrap-begin")),t.forEach((e,t)=>{try{e.bootstrap&&e.bootstrap(),console.info(`[${t} BOOTSTRAPED - ${e.name}]`)}catch(r){console.error(`[${t} BOOTSTRAP ERROR -${e.name}]`,r)}}),this.dispatchEvent(new Event("lifecycle-bootstrap-finish")),this._moduleInitialized=!0,l.a.dispatch({type:u.c,modules:t}),s((e,t)=>{l.a.dispatch(Object(c.f)(e)),this._callbacks&&this._callbacks.forEach(r=>{try{r.call(this,e,t)}catch(e){console.error(e)}})})})}routeToPage(){const e=this.appTitle+" - "+this._page;o({title:e,description:e}),this.shadowRoot.querySelectorAll("main > .page[active]").forEach(e=>{e.removeAttribute("active")}),this._activePage=this.shadowRoot.querySelector(`main > .page[data-page=${this._page}]`),this._activePage&&this._activePage.setAttribute("active",!0),l.a.dispatch({type:c.c,activePage:this._activePage})}async updated(e){e.has("_modules")&&this._appendFactoryModulePages(),e.has("_page")&&this.routeToPage()}shouldUpdate(){return this._moduleInitialized}stateChanged(e){this._page=e.route.page,this._params=e.route.params,this._callbacks=e.route.callbacks,this._context=e.route.context,this._modules=e.app.modules}_appendFactoryModulePages(){var e=this.shadowRoot.querySelector("main");(this._modules||[]).forEach(t=>{t.routes&&t.routes.forEach(t=>{var r=document.createElement(t.tagname);r.setAttribute("class","page"),r.setAttribute("data-page",t.page),e.appendChild(r)})})}})}]);
//# sourceMappingURL=things-scene-grist-ie.js.map