/*global QUnit*/
import opaTest from "sap/ui/test/opaQunit";
import AppPage from "./pages/App";
import ViewPage from "./pages/Sensors";

import Opa5 from "sap/ui/test/Opa5";

QUnit.module("Navigation Journey");

const onTheAppPage = new AppPage();
const onTheViewPage = new ViewPage();
Opa5.extendConfig({
	viewNamespace: "keepcool.sensormanager.view.",
	autoWait: true
});

opaTest("Should see the initial page of the app", function () {
	// Arrangements
	onTheAppPage.iStartMyUIComponent({
		componentConfig: {
			name: "keepcool.sensormanager"
		}
	});

	// Assertions
	onTheAppPage.iShouldSeeTheApp();
	onTheViewPage.iShouldSeeThePageView();


	//Cleanup
	onTheAppPage.iTeardownMyApp();
});