sap.ui.define([
	"sap/ui/core/mvc/Controller",
	// "sap/m/MessageToast",  //引入sap.m.MessageToast类，这个类可以将消息弹窗在页面底部弹出
	// "sap/ui/model/json/JSONModel",
	// "sap/ui/model/resource/ResourceModel"
], function (
	Controller,
	// MessageToast,
	// JSONModel,
	// ResourceModel
) {
	"use strict";

	return Controller.extend("<id>.controller.App", {
		onOpenDialog: function(oEvent) {
			this.getOwnerComponent().openHelloDialog();
		}
		// /**
		//  * @override
		//  */
		// onInit: function () {

		// 	var oData = {  //创建一个数据结构
		// 		recipient: {
		// 			name: "UI5"
		// 		}
		// 	};

		// 	var oModel = new JSONModel(oData); //将oDta结构转成Json格式数据
		// 	//this:调用当前方法的对象。App.view调用App.controller的Onit:function（）{}，因此此处this表示App.view
		// 	this.getView().setModel(oModel);  //this为App.view视图对象，通过setModel(oModel)将JsonModel与App.view视图绑定
		// 	console.log(this);
		// 	console.log(this.getView().getModel("oModel"));

		// 	//创建ResourceModel,用于绑定i18n.properties文件
		// 	var i18nModel = new ResourceModel({
		// 		bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
		// 		supportedLocales: [""],
		// 		fallbackLocale: ""
		// 	});
		// 	this.getView().setModel(i18nModel,"i18n"); //this为App.view视图对象，通过setModel()将i18n Model与App.view视图绑定
		// },
		// OnShowHello: function () {
		// 	//read message from i18n model
		// 	var oBundle = this.getView().getModel("i18n").getResourceBundle(); //获取i18n的资源绑定
		// 	var sRecipient = this.getView().getModel().getProperty("/recipient/name"); //过去oModel模型的recipient/name属性
		// 	var sMsg = oBundle.getText("helloMsg", [sRecipient]); //i18n文件的helloMsg=Hello 拼接/recipient/name 的UI5 = Hello UI5
		// 	// alert("Hello there!");
		// 	MessageToast.show(sMsg);
		// }
		
		
	});
});