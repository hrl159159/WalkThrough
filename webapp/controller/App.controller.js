sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",  //引入sap.m.MessageToast类，这个类可以将消息弹窗在页面底部弹出
	"sap/ui/model/json/JSONModel"
], function (
	Controller,
	MessageToast,
	JSONModel
) {
	"use strict";

	return Controller.extend("<id>.controller.App", {
		/**
		 * @override
		 */
		onInit: function () {

			var oData = {  //创建一个数据结构
				recipient: {
					name: "UI5"
				}
			};

			var oModel = new JSONModel(oData); //将oDta结构转成Json格式数据
			//this:调用当前方法的对象。App.view调用App.controller的Onit:function（）{}，因此此处this表示App.view
			this.getView().setModel(oModel);  //this为App.view视图对象，通过setModel(oModel)将JsonModel与App.view视图绑定
			console.log(this);
		},
		OnShowHello: function () {
			// alert("Hello there!");
			MessageToast.show("Hello there!");
		}
	});
});