"use strict";sap.ui.define([],function(){"use strict";function e(e){return new Promise(function(t,n){sap.ui.require([e],function(n){if(!(n&&n.__esModule)){n=n===null||!(typeof n==="object"&&e.endsWith("/library"))?{default:n}:n;Object.defineProperty(n,"__esModule",{value:true})}t(n)},function(e){n(e)})})}QUnit.config.autostart=false;void Promise.all([e("unit/controller/Sensors.controller")]).then(function(){QUnit.start()})});
//# sourceMappingURL=unitTests.qunit.js.map