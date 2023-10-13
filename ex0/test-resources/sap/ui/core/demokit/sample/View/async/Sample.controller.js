/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.core.sample.View.async.Sample", {

		onInit: function() {
			var oView = this.getView();
			oView.setModel(new JSONModel({
				async: true
			}), "mode");
			oView.setModel(new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/img.json")), "img");
		}
	});

});