"use strict";

sap.ui.define(["sap/m/MessageToast", "sap/ui/core/mvc/Controller", "sap/ui/model/Filter", "sap/ui/model/FilterOperator", "../format/util"], function (MessageToast, Controller, Filter, FilterOperator, ___format_util) {
  "use strict";

  var Threshold = ___format_util["Threshold"];
  /**
   * @namespace keepcool.sensormanager.controller
   */
  var Sensors = Controller.extend("keepcool.sensormanager.controller.Sensors", {
    constructor: function constructor() {
      Controller.prototype.constructor.apply(this, arguments);
      this.statusFilters = [];
    },
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
    },
    onFilterSelect: function _onFilterSelect(event) {
      var _this$getView;
      var listBinding = (_this$getView = this.getView()) === null || _this$getView === void 0 || (_this$getView = _this$getView.byId("sensorsList")) === null || _this$getView === void 0 ? void 0 : _this$getView.getBinding("items");
      var key = event.getParameter("key");
      if (key === "Cold") {
        this.statusFilters = [new Filter("temperature", FilterOperator.LT, Threshold.Warm, false)];
      } else if (key === "Warm") {
        this.statusFilters = [new Filter("temperature", FilterOperator.BT, Threshold.Warm, Threshold.Hot)];
      } else if (key === "Hot") {
        this.statusFilters = [new Filter("temperature", FilterOperator.GT, Threshold.Hot, false)];
      } else {
        this.statusFilters = [];
      }
      listBinding.filter(this.statusFilters);
    },
    onCustomerInfoPress: function _onCustomerInfoPress() {
      var _this$dialog;
      (_this$dialog = this.dialog) !== null && _this$dialog !== void 0 ? _this$dialog : this.dialog = this.loadFragment({
        name: "keepcool.sensormanager.view.CustomerDialog"
      });
      this.dialog.then(function (dialog) {
        return dialog.open();
      })["catch"](function (err) {
        return MessageToast.show(err.message);
      });
    },
    onCustomerInfoClose: function _onCustomerInfoClose() {
      this.dialog.then(function (dialog) {
        dialog.close();
      })["catch"](function (err) {
        MessageToast.show(err.message);
      });
    },
    navToSensorStatus: function _navToSensorStatus(event) {
      var _event$getSource$getB;
      var sensorIndex = (_event$getSource$getB = event.getSource().getBindingContext("sensorModel")) === null || _event$getSource$getB === void 0 ? void 0 : _event$getSource$getB.getProperty("index");
      this.getOwnerComponent().getRouter().navTo("RouteSensorStatus", {
        index: sensorIndex
      });
    }
  });
  return Sensors;
});
//# sourceMappingURL=Sensors-dbg.controller.js.map
