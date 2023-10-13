/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"./RouterExtension",
	"sap/ui/core/UIComponent",
	"sap/ui/core/mvc/View"
], function(RouterExtension, UIComponent, View) {
	"use strict";

	// new Component
	var Component = UIComponent.extend("testdata.routing.Component", {
		metadata : {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			routing : {
				config : {
					routerClass : RouterExtension,
					async: true
				},
				routes : [
					{
						name : "firstRoute",
						pattern : "first/{firstMandatoryParameter}"
					}
				],
				targets: {
					myTarget: {
						viewType : "XML"
					}
				}
			}
		},

		init: function () {
			UIComponent.prototype.init.apply(this, arguments);
		},

		createContent : function () {
			this._oViewWhileCreateContent = this.getRootControl();

			return View.create({
				viewName: "module:testdata/routing/TestView"
			});
		}
	});


	return Component;

});
