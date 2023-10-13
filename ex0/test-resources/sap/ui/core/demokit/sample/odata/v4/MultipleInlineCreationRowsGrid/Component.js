/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/**
 * @fileOverview Application component to use for demo of Multiple Inactive Rows feature with the
 *   grid table.
 * @version @version@
 */
sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";

	return UIComponent.extend(
		"sap.ui.core.sample.odata.v4.MultipleInlineCreationRowsGrid.Component", {
		metadata : {
			manifest : "json"
		}
	});
});
