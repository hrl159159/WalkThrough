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
	FilterOperator,) {
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

		},
		onPress: function (oEvent) {
			//component.js初始化了路由器，this.getOwnerComponent()获取组件对象
			//getRouter()说明获取路由器对象
			//然后使用路由器对象的navTo方法导航到名为"detail"的路由目标。
			var oitem = oEvent.getSource();
			this.getOwnerComponent().getRouter().navTo("detail",{
				invoicePath: window.encodeURIComponent(oitem.getBindingContext("invoice").getPath().substr(1))
				//"Invoices(ProductName%3D'Milk'%2CQuantity%3D4%2CShipperName%3D'ACME')"
				//获取当前点击的控件绑定的模型数据，然后获取路径，然后截取路径，然后进行编码，然后传递给路由目标
				//window.encodeURIComponent()方法对字符串进行编码，防止出现特殊字符
			});
		}


	})
})