"use strict";

sap.ui.define(["sap/ui/test/opaQunit", "./pages/App", "./pages/Sensors", "sap/ui/test/Opa5"], function (opaTest, __AppPage, __ViewPage, Opa5) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  var AppPage = _interopRequireDefault(__AppPage);
  var ViewPage = _interopRequireDefault(__ViewPage);
  QUnit.module("Navigation Journey");
  var onTheAppPage = new AppPage();
  var onTheViewPage = new ViewPage();
  Opa5.extendConfig({
    viewNamespace: "keepcool.sensormanager.view.",
    autoWait: true
  });
  opaTest("Should see the initial page of the app", function () {
    // Arrangements
    onTheAppPage.iStartMyUIComponent({
      componentConfig: {
        name: "keepcool.sensormanager"
      }
    });

    // Assertions
    onTheAppPage.iShouldSeeTheApp();
    onTheViewPage.iShouldSeeThePageView();

    //Cleanup
    onTheAppPage.iTeardownMyApp();
  });
});
//# sourceMappingURL=NavigationJourney-dbg.js.map
