/*!
* OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define([
	"sap/base/config/MemoryConfigurationProvider",
	"ui5loader-autoconfig"
], function(
	MemoryConfigurationProvider
	/*autoconfig*/
) {
	"use strict";

	/**
	 * The base Configuration.
	 *
	 * @author SAP SE
	 * @version 1.119.0
	 * @private
	 * @alias module:sap/base/config
	 * @namespace
	 */

	var _Configuration = sap.ui.require("sap/base/config/_Configuration");

	/**
	 * Returns a writable base configuration instance
	 * @returns {module:sap/base/config} The writable base configuration
	 */
	_Configuration.getWritableInstance = function() {
		var oProvider = new MemoryConfigurationProvider();

		return {
			set: function(sName, vValue) {
				var rValidKey = /^[a-z][A-Za-z0-9]*$/;
				if (rValidKey.test(sName)) {
					oProvider.set(sName, vValue);
					_Configuration._.invalidate();
				} else {
					throw new TypeError(
						"Invalid configuration key '" + sName + "'!"
					);
				}
			},
			get: function(mOptions) {
				mOptions.provider = oProvider;
				return _Configuration.get(mOptions);
			},
			Type: _Configuration.Type
		};
	};

	return _Configuration;
});