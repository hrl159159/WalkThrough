// sap.ui.define([
// "sap/m/Text"
// ], function(Text) {
//     'use strict';
//     new Text(
//         {
//             text:"Hello ui5!"
//         }
//     ).placeAt("content")

// });
sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], function (XMLView) {
    'use strict';
    XMLView.create({
        viewName: "sap.ui.demo.walkthrough.view.App"
    }).then(function (oview) { //oview就是XMLView.create方法创建的视图
        oview.placeAt("content"); //
    });

});