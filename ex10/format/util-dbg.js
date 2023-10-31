"use strict";

sap.ui.define(["sap/m/library", "sap/ui/core/library"], function (sap_m_library, sap_ui_core_library) {
  "use strict";

  var ValueColor = sap_m_library["ValueColor"];
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
  function formatValueColor(temperature) {
    if (temperature < Threshold.Warm) {
      return ValueColor.Neutral;
    } else if (temperature >= Threshold.Warm && temperature < Threshold.Hot) {
      return ValueColor.Critical;
    } else {
      return ValueColor.Error;
    }
  }
  var __exports = {
    __esModule: true
  };
  __exports.Threshold = Threshold;
  __exports.formatIconColor = formatIconColor;
  __exports.formatTemperature = formatTemperature;
  __exports.formatValueColor = formatValueColor;
  return __exports;
});
//# sourceMappingURL=util-dbg.js.map
