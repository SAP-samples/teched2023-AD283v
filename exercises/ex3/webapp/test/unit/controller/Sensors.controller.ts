/*global QUnit*/
import Controller from "keepcool/sensormanager/controller/Sensors.controller";

QUnit.module("Sensors Controller");

QUnit.test("I should test the Sensors controller", function (assert: Assert) {
	const oAppController = new Controller("Sensors");
	oAppController.onInit();
	assert.ok(oAppController);
});