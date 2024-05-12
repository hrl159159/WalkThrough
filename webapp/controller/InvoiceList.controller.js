sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller,
	JSONModel,
	formatter,
	Filter,
	FilterOperator) {
	"use strict"

	return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
		formatter: formatter,
		onInit: function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view")
		},
		onFilterInvoices: function (oEvent) {
			/**
			 * 1.获取搜索框输入的值
			 * 2.根据搜索框输入的值，实例化过滤器对象
			 * 3.过滤绑定
			 */
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");//过去搜索框输入的值
			if (sQuery) {
				//根据查询字段与搜索框输入的值，实例化过滤器对象并放放到数组中	
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}
			// filter binding
			var oList = this.byId("invoiceList");//获取List控件对象
			var oBinding = oList.getBinding("items");//获取List控件的items模型的绑定对象
			oBinding.filter(aFilter);//oBinding装的是items模型数据，aFilter装的是查询条件

		}

	})
})