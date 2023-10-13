/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/**
 * @fileOverview Application component to display information on entities from the
 *   ZRH_ERHAORDERMANAGE OData service in a tree table.
 * @version @version@
 */
sap.ui.define([
	"sap/ui/core/Messaging",
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function (Messaging, UIComponent, JSONModel) {
	"use strict";

	return UIComponent.extend("sap.ui.core.internal.samples.odata.v2.TreeTable.Component", {
		metadata : {
			manifest : "json"
		},

		init : function () {
			UIComponent.prototype.init.apply(this, arguments);

			this.setModel(new JSONModel({
				createdByFilter : "",
				expandedLevels : 2,
				messageCount : 0,
				pendingChanges : false,
				refreshAfterChange : false,
				restoreState : true,
				rowSelected : false,
				tableBound : false
			}), "ui");
			this.setModel(new JSONModel({
				nodes : []
			}), "clipboard");
			this.setModel(Messaging.getMessageModel(), "messages");
		}
	});
});
