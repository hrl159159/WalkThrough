sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
], function (
    ManagedObject,
    Fragment
) {
    "use strict";

    return ManagedObject.extend("sap.ui.demo.walkthrough.controller.HelloDialog", {

        constructor: function (oView) {
            this._oView = oView;
        },
        exit: function () {
            delete this._oView;
        },

        // open: function () {
        //     var oView = this._oView;

        //     // create the dialog lazily
        //     if (!oView.byId("helloDialog")) {
        //         var oFragmentController = {  //Dialog的关闭按钮
        //             onCloseDialog: function () {
        //                 oView.byId("helloDialog").close();
        //             }
        //         }

        //         // load asynchronous XML fragment
        //         Fragment.load({
        //             id: oView.getId(),
        //             name: "sap.ui.demo.walkthrough.view.HelloDialog",
        //             controller: oFragmentController
        //         }).then(function (oDialog) {
        //             // connect dialog to the root view of the component (models, lifecycle)
        //             oView.addDependent(oDialog); 
        //             oDialog.open();
        //         })
        //     } else {
        //         oView.byId("helloDialog").open();
        //     }
        // }
        open: function () {
            //    创建helloDialog弹窗对象，并连接rootview，创建后打开弹窗
            var oView = this._oView;

            if (!oView.byId("helloDialog")) {
                var oFragmentController = {
                    onCloseDialog: function () {
                        oView.byId("helloDialog").close();
                    }
                }

                Fragment.load({
                    name: "sap.ui.demo.walkthrough.view.HelloDialog",
                    id: oView.getId(),
                    controller: oFragmentController
                }).then(function (oDialog) {
                    // connect dialog to the root view of the component (models, lifecycle)
                    oView.addDependent(oDialog);
                    oDialog.open();
                });
            } else {
                oView.byId("helloDialog").open();
            }





        }

    });
});