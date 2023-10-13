/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core"],function(e){"use strict";var t={apiVersion:2};t.render=function(t,i){var n=e.getLibraryResourceBundle("sap.m"),s,r;t.openStart("div",i);t.attr("tabindex","0");t.class("sapMTile");t.class("sapMPointer");if(i._invisible){t.style("visibility","hidden")}var a=i.getTooltip_AsString();if(a){t.attr("title",a)}if(i.getParent()&&i.getParent().isA("sap.m.TileContainer")){s=i.getParent();r=s._getVisibleTiles();t.accessibilityState(i,{role:"option",posinset:s._indexOfVisibleTile(i,r)+1,setsize:r.length})}t.openEnd();t.openStart("div",i.getId()+"-remove");t.class(i.getRemovable()?"sapMTCRemove":"sapMTCNoRemove");t.attr("title",n.getText("GENERICTILE_REMOVEBUTTON_TEXT"));t.openEnd().close("div");t.openStart("div").class("sapMTileContent").openEnd();this._renderContent(t,i);t.close("div").close("div")};t._renderContent=function(e,t){};return t},true);
//# sourceMappingURL=TileRenderer.js.map