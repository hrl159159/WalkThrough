sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
], function (
    Controller,
    MessageToast,
) {
    "use strict";

    return Controller.extend("<id>.controller.HelloPanel", {
        OnShowHello: function () {
            //read message from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle(); //获取i18n的资源绑定
            var sRecipient = this.getView().getModel().getProperty("/recipient/name"); //过去oModel模型的recipient/name属性
            var sMsg = oBundle.getText("helloMsg", [sRecipient]); //i18n文件的helloMsg=Hello 拼接/recipient/name 的UI5 = Hello UI5
            // alert("Hello there!");
            MessageToast.show(sMsg);
        }

    });
});