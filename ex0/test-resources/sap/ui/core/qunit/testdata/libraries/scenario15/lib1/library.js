sap.ui.define([
	"sap/ui/core/Core",
	"sap/ui/core/library"
], function(oCore) {
	"use strict";
	return oCore.initLibrary({
		name: "testlibs.scenario15.lib1",
		dependencies: [
			"testlibs.scenario15.lib3",
			"testlibs.scenario15.lib4"
		],
		noLibraryCSS: true
	});
});