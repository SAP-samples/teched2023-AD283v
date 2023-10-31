"use strict";

sap.ui.define(["keepcool/sensormanager/controller/Sensors.controller"], function (__Controller) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  /*global QUnit*/
  var Controller = _interopRequireDefault(__Controller);
  QUnit.module("Sensors Controller");
  QUnit.test("I should test the Sensors controller", function (assert) {
    var oAppController = new Controller("Sensors");
    oAppController.onInit();
    assert.ok(oAppController);
  });
});
//# sourceMappingURL=Sensors-dbg.controller.js.map
