/*global QUnit*/

sap.ui.define([
	"sapbtp/sampleapp/controller/Sampleui5app.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Sampleui5app Controller");

	QUnit.test("I should test the Sampleui5app controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
