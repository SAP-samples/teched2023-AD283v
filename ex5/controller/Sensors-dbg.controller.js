"use strict";

sap.ui.define(["sap/m/MessageToast", "sap/ui/core/mvc/Controller"], function (MessageToast, Controller) {
  "use strict";

  /**
   * @namespace keepcool.sensormanager.controller
   */
  var Sensors = Controller.extend("keepcool.sensormanager.controller.Sensors", {
    onInit: function _onInit() {
      var ownerComp = this.getOwnerComponent();
      this.getSensorModel().dataLoaded().then(function () {
        var resourceModel = ownerComp === null || ownerComp === void 0 ? void 0 : ownerComp.getModel("i18n");
        var resourceBundle = resourceModel.getResourceBundle();
        MessageToast.show(resourceBundle.getText("msgSensorDataLoaded"), {
          closeOnBrowserNavigation: false
        });
      }.bind(this))["catch"](function (oErr) {
        MessageToast.show(oErr.message, {
          closeOnBrowserNavigation: false
        });
      });
    },
    getSensorModel: function _getSensorModel() {
      var ownerComp = this.getOwnerComponent();
      var oModel = ownerComp === null || ownerComp === void 0 ? void 0 : ownerComp.getModel("sensorModel");
      return oModel;
    }
  });
  return Sensors;
});
//# sourceMappingURL=Sensors-dbg.controller.js.map
