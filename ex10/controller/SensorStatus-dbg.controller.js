"use strict";

sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  /**
   * @namespace keepcool.sensormanager.controller
   */
  var SensorStatus = Controller.extend("keepcool.sensormanager.controller.SensorStatus", {
    onInit: function _onInit() {
      var _getRouter$getRoute;
      (_getRouter$getRoute = this.getOwnerComponent().getRouter().getRoute("RouteSensorStatus")) === null || _getRouter$getRoute === void 0 || _getRouter$getRoute.attachMatched(this.onRouteMatched, this);
    },
    onRouteMatched: function _onRouteMatched(event) {
      var _this$getView;
      (_this$getView = this.getView()) === null || _this$getView === void 0 || _this$getView.bindElement({
        path: "/sensors/" + event.getParameter("arguments").index,
        model: "sensorModel"
      });
    },
    navToSensors: function _navToSensors() {
      this.getOwnerComponent().getRouter().navTo("RouteSensors");
    }
  });
  return SensorStatus;
});
//# sourceMappingURL=SensorStatus-dbg.controller.js.map
