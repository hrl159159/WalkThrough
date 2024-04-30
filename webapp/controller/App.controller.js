sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("<id>.controller.App", {
        OnShowHello:function(){
            alert("Hello there!");
        }
	});
});