"use strict";

sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  /**
   * @namespace keepcool.sensormanager.controller
   */
  var SensorStatus = Controller.extend("keepcool.sensormanager.controller.SensorStatus", {
    onInit: function _onInit() {},
    navToSensors: function _navToSensors() {
      this.getOwnerComponent().getRouter().navTo("RouteSensors");
    }
  });
  return SensorStatus;
});
//# sourceMappingURL=SensorStatus-dbg.controller.js.map
