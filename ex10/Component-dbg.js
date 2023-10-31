"use strict";

sap.ui.define(["sap/ui/core/UIComponent", "./model/models"], function (BaseComponent, ___model_models) {
  "use strict";

  var createDeviceModel = ___model_models["createDeviceModel"];
  /**
   * @namespace keepcool.sensormanager
   */
  var Component = BaseComponent.extend("keepcool.sensormanager.Component", {
    metadata: {
      manifest: "json"
    },
    init: function _init() {
      // call the base component's init function
      BaseComponent.prototype.init.call(this);

      // enable routing
      this.getRouter().initialize();

      // set the device model
      this.setModel(createDeviceModel(), "device");
    }
  });
  return Component;
});
//# sourceMappingURL=Component-dbg.js.map
