/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/Text"],function(e){"use strict";var t={apiVersion:2};t.render=function(t,n){var r=n._getControlsForBreadcrumbTrail(),i=n._getSelect(),s=n._sSeparatorSymbol,a=n._getInvisibleText().getId(),l=n.getAriaLabelledBy().slice();t.openStart("nav",n);t.class("sapMBreadcrumbs");l.push(a);t.accessibilityState(null,{labelledby:{value:l.join(" "),append:true}});if(n._iMinWidth&&n._iMinWidth!==n.MIN_WIDTH_IN_OFT){t.style("min-width",n._iMinWidth+"px")}t.openEnd();t.openStart("ol");t.openEnd();if(i.getVisible()){this._renderControlInListItem(t,i,s,false,"sapMBreadcrumbsSelectItem")}r.forEach(function(n,i){this._renderControlInListItem(t,n,s,n instanceof e,undefined,i,r.length)},this);t.close("ol");t.close("nav")};t._renderControlInListItem=function(e,t,n,r,i,s,a){e.openStart("li");e.class("sapMBreadcrumbsItem");e.class(i);e.openEnd();e.renderControl(t);if(!r){e.openStart("span").class("sapMBreadcrumbsSeparator").openEnd().text(n).close("span")}e.close("li")};return t},true);
//# sourceMappingURL=BreadcrumbsRenderer.js.map