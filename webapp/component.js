sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (
	UIComponent,
	JSONModel,
	ResourceModel
) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
		metadata: {
			// rootView: {
			// 	"viewName": "sap.ui.demo.walkthrough.view.App",
			// 	"type": "XML",
			// 	"async": true,
			// 	"id": "app"
			// }
			manifest:"json"
		},

		/**
		 * @override
		 */
		init: function () {
			UIComponent.prototype.init.apply(this, arguments);
			var oData = {  //创建一个数据结构
				recipient: {
					name: "UI5"
				}
			};
			var oModel = new JSONModel(oData); //将oDta结构转成Json格式数据
			//this:调用当前方法的对象。App.view调用App.controller的Onit:function（）{}，因此此处this表示App.view
			this.setModel(oModel);  //this为App.view视图对象，通过setModel(oModel)将JsonModel与App.view视图绑定

			// //创建ResourceModel,用于绑定i18n.properties文件
			// var i18nModel = new ResourceModel({
			// 	bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
			// 	supportedLocales: [""],
			// 	fallbackLocale: ""
			// });
			// this.setModel(i18nModel, "i18n"); //this为App.view视图对象，通过setModel()将i18n Model与App.view视图绑定

		}

	});
});