"use strict";sap.ui.define(["sap/ui/test/Opa5"],function(e){"use strict";function t(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,o(n.key),n)}}function n(e,t,n){if(t)r(e.prototype,t);if(n)r(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function o(e){var t=i(e,"string");return typeof t==="symbol"?t:String(t)}function i(e,t){if(typeof e!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==undefined){var n=r.call(e,t||"default");if(typeof n!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function u(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)f(e,t)}function f(e,t){f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function e(t,r){t.__proto__=r;return t};return f(e,t)}function c(e){var t=l();return function r(){var n=p(e),o;if(t){var i=p(this).constructor;o=Reflect.construct(n,arguments,i)}else{o=n.apply(this,arguments)}return a(this,o)}}function a(e,t){if(t&&(typeof t==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return s(e)}function s(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function l(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function p(e){p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function e(t){return t.__proto__||Object.getPrototypeOf(t)};return p(e)}var y="App";var b=function(r){u(i,r);var o=c(i);function i(){t(this,i);return o.apply(this,arguments)}n(i,[{key:"iShouldSeeTheApp",value:function t(){return this.waitFor({id:"app",viewName:y,success:function t(){e.assert.ok(true,"The "+y+" view is displayed")},errorMessage:"Did not find the "+y+" view"})}}]);return i}(e);return b});
//# sourceMappingURL=App.js.map