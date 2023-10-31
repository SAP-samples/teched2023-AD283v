//@ui5-bundle keepcool/sensormanager/Component-preload.js
sap.ui.require.preload({
	"keepcool/sensormanager/Component.js":function(){
"use strict";sap.ui.define(["sap/ui/core/UIComponent","./model/models"],function(e,t){"use strict";var i=t["createDeviceModel"];var n=e.extend("keepcool.sensormanager.Component",{metadata:{manifest:"json"},init:function t(){e.prototype.init.call(this);this.getRouter().initialize();this.setModel(i(),"device")}});return n});
},
	"keepcool/sensormanager/controller/App.controller.js":function(){
"use strict";sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";var n=e.extend("keepcool.sensormanager.controller.App",{onInit:function e(){}});return n});
},
	"keepcool/sensormanager/controller/Sensors.controller.js":function(){
"use strict";sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";var n=e.extend("keepcool.sensormanager.controller.Sensors",{onInit:function e(){}});return n});
},
	"keepcool/sensormanager/i18n/i18n.properties":'# This is the resource bundle for keepcool.sensormanager\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Sensor Manager\n\n#YDES: Application description\nappDescription=A Fiori application.\n#XTIT: Main view title\ntitle=Sensor Manager',
	"keepcool/sensormanager/manifest.json":'{"_version":"1.58.0","sap.app":{"id":"keepcool.sensormanager","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.11.2","toolsId":"765d5192-1e9c-4106-9e86-c894ba112fe6"}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.119.2","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{},"sap.ui.layout":{},"sap.suite.ui.microchart":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"keepcool.sensormanager.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"keepcool.sensormanager.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteSensors","pattern":":?query:","target":["TargetSensors"]}],"targets":{"TargetSensors":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"Sensors","viewName":"Sensors"}}},"rootView":{"viewName":"keepcool.sensormanager.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"keepcoolsensormanager"}}',
	"keepcool/sensormanager/model/models.js":function(){
"use strict";sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,i){"use strict";function n(){var n=new e(i);n.setDefaultBindingMode("OneWay");return n}var t={__esModule:true};t.createDeviceModel=n;return t});
},
	"keepcool/sensormanager/view/App.view.xml":'<mvc:View controllerName="keepcool.sensormanager.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"keepcool/sensormanager/view/Sensors.view.xml":'<mvc:View controllerName="keepcool.sensormanager.controller.Sensors"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><Page id="page" title="{i18n>title}"><content><IconTabBar id="iconTabBar" class="sapUiResponsiveContentPadding"><content></content></IconTabBar></content></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
