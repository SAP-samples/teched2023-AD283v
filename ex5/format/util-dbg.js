"use strict";

sap.ui.define(["sap/ui/core/library"], function (sap_ui_core_library) {
  "use strict";

  var IconColor = sap_ui_core_library["IconColor"];
  var Threshold = /*#__PURE__*/function (Threshold) {
    Threshold[Threshold["Warm"] = 4] = "Warm";
    Threshold[Threshold["Hot"] = 5] = "Hot";
    return Threshold;
  }(Threshold || {});
  function formatIconColor(temperature) {
    if (temperature < Threshold.Warm) {
      return "#0984e3";
    } else if (temperature >= Threshold.Warm && temperature < Threshold.Hot) {
      return IconColor.Critical;
    } else {
      return IconColor.Negative;
    }
  }
  function formatTemperature(temperature, unit) {
    if (unit === "°F") {
      temperature = temperature * 1.8 + 32;
    }
    return Math.round(temperature * 10) / 10;
  }
  var __exports = {
    __esModule: true
  };
  __exports.Threshold = Threshold;
  __exports.formatIconColor = formatIconColor;
  __exports.formatTemperature = formatTemperature;
  return __exports;
});
//# sourceMappingURL=util-dbg.js.map
