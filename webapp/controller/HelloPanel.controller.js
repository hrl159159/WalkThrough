sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function (
    Controller,
    MessageToast,
    Fragment,
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
        },

        // onOpenDialog:function(){
        //     var oView = this.getView(); //onDialog按钮在HelloPanel.view视图，因此oView是HelloPanel.view视图对象
        //     if(!this.byId("helloDialog")){ //如果找不到helloDialog，就创建
        //         Fragment.load({
        //             id:oView.getId(),
        //             name:"sap.u.demo.walkthrough.view.HelloDialog"
        //         }).then(function(oDialog){ //创建了Dialog对象oDialog
        //             //将oDialog添加到HelloPanel.view视图对象oView
        //             oView.addDependent(oDialog);
        //             oDialog.open();
        //         })
        //     }else{
        //         //如果找得到helloDialog，直接打开
        //         this.byId("helloDialog").open();
        //     }
        // }
        // onOpenDialog: function () {
        //     var oView = this.getView();

        //     // create the dialog lazily
        //     if (!this.byId("helloDialog")) {
        //         // load asynchronous XML fragment
        //         Fragment.load({
        //             id: oView.getId(),
        //             name: "sap.ui.demo.walkthrough.view.HelloDialog",
        //             Controller:this
        //         }).then(function (oDialog) {
        //             // connect dialog to the root view of this component (models, lifecycle)
        //             oView.addDependent(oDialog);
        //             oDialog.open();
        //         })
        //     } else {
        //         this.byId("helloDialog").open();
        //     }
        // }
        onOpenDialog: function () {

            // create dialog lazily
        //     if (!this.pDialog) {
        //         this.pDialog = this.loadFragment({
        //             name: "sap.ui.demo.walkthrough.view.HelloDialog",
        //             Controller:this
        //         });
        //     }
        //     this.pDialog.then(function (oDialog) {
        //         oDialog.open();
        //     });
        // }

        if(!this.pDialog){ //如果Dialog对象不存在，就加载一个Dialog对象到pDialog
            this.pDialog = this.loadFragment({
                name:"sap.ui.demo.walkthrough.view.HelloDialog",
                Controller:this
            }).then(function(oDialog){
                oDialog.open();
            });
        }
        //
    }

    });
});