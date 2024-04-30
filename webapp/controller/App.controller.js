sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"  //引入sap.m.MessageToast类，这个类可以将消息弹窗在页面底部弹出
], function(
	Controller,
	MessageToast
) {
	"use strict";

	return Controller.extend("<id>.controller.App", {
        OnShowHello:function(){
            // alert("Hello there!");
            MessageToast.show("Hello there!");
        }
	});
});