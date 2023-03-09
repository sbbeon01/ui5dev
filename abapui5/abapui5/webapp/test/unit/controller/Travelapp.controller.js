/*global QUnit*/

sap.ui.define([
	"abapbtpui5/abapui5/controller/Travelapp.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Travelapp Controller");

	QUnit.test("I should test the Travelapp controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
