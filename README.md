# WalkThrough
WalkThrough_SAPUI5
//Step1: Hello World 20240430-----------------------
新建package.json 作用：为项目配置UI5环境
新建ui5.yaml  作用：为项目配置UI5环境
新建index.html 作用：项目运行时，加载项目初始资源
//Step1 Hello World 20240430-----------------------

//Step2 Bootstrapping 20240430-----------------------
在index.html 引入运行SAP UI5程序所需的资源文件。例如UI5主题、UI5库、index.js初始逻辑
新建index.js 作用：项目运行时，会通过index.html的资源引用，来调用index.js，从而运行index.js的逻辑
//Step2 Bootstrapping 20240430-----------------------

//Step3 Controls 20240430-----------------------
在index.js中，调用sap.m.Text类，实例化Text类对象，输出文本Hello ui5，并在index.html显示
//Step3  Controls 20240430-----------------------

//Step4  XML Views 20240501-----------------------
创建view/App.view.xml，在视图创建Text文本Hello ui5。同时在index.js创建并调用App.view.xml视图
//Step4  XML Views 20240501-----------------------

//Step5 Controllers 20240501-----------------------
创建App.controller.js。App.view新建button按钮，点击按钮后的发生的动作在App.controller.js实现
//Step5 Controllers 20240501-----------------------




