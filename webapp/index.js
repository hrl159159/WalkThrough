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
// sap.ui.define([
//     "sap/ui/core/mvc/XMLView"
// ], function (XMLView) {
//     'use strict';
//     XMLView.create({
//         viewName: "sap.ui.demo.walkthrough.view.App"
//     }).then(function (oview) { //oview就是XMLView.create方法创建的视图
//         oview.placeAt("content"); //
//     });

// });

//创建UIComponnet Container ,并将id为content的button组件放置在组件容器内
// sap.ui.define([
//     "sap/ui/core/ComponentContainer"
// ], function (ComponentContainer) {
//     'use strict';
//     debugger;
//     new ComponentContainer({
//         name: "sap.ui.demo.walkthrough",
//         settings: {
//             id: "walkthrough"
//         },
//         async: true
//     }).placeAt("content");
// });