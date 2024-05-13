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

//Step6 Modules 20240501-----------------------
App.controller.js的消息弹窗alert()，换成sap.m.MessageToast的消息弹窗
//Step6 Modules 20240501-----------------------

//Step7  JsonModel 20240501-----------------------
创建oData数据结构，将oData转化成Json数据模型oModel
将Json数据模型与App.view视图绑定
this:调用当前方法的对象。App.view调用App.controller的Onit:function（）{}，因此此处this表示App.view
//Step6 JsonModel 20240501-----------------------

//Step8 Translatable Texts 20240501-----------------------
新建i18n文件，通过resourceModel，将i18n内容与App.view的BUTTON按钮组件绑定
//Step8 Translatable Texts 20240501-----------------------

//Step9 Cpmponnet Configration 20240502-----------------------
创建component.js组件，组件绑定App.view，并创建了JsonModel与ResourceModel数据
在index.js创建CompnentContain组件容器，并在将容器内的componnet组件展示在index.html的<body ID ="content">页签
//Step9 Cpmponnet Configration 20240502-----------------------

//Step 10: Descriptor for Applications 20240502-----------------------
manifest.json文件，JSON 格式的配置对象，其中包含所有全局应用程序设置和参数，例如设置应用程序的标题、描述、UI5版本、根视图等。是应用程序、组件和库的描述符
//Step 10: Descriptor for Applications-----------------------

//Step 11: Pages and Panels 20240502-----------------------
在App.view引入UI5风格的page
//Step 11: Pages and Panels 20240502-----------------------

//Step 11: Pages and Panels 20240502-----------------------
在App.view引入UI5风格的page
//Step 11: Pages and Panels 20240502-----------------------

//Step 12: Shell Control as Container 20240502-----------------------
在App.view界面引入<shell></shell> 的fiori风格
//Step 12: Shell Control as Container 20240502-----------------------

//Step 13: Margins and Paddings 20240502-----------------------
设置布局
//Step 13: Margins and Paddings 20240502-----------------------

//Step 14: Custom CSS and Theme Colors 20240502-----------------------
引入css布局
//Step 14: Custom CSS and Theme Colors 20240502-----------------------

//Step 15: Nested Views 20240502-----------------------
将页面信息分成多个view，实现解耦
创建HelloPanel.view，用于展示按钮、输入框、文本等组件
同时创建JelloPanel.controller，编写按钮点击事件逻辑
//Step 15: Nested Views 20240502-----------------------

//Step 16: Dialogs and Fragments 20240504-----------------------
创建可被重复调用的对话框
通过pDialog.loadFrament（），加载Dialog对象
然后通过pDialog.open()方法打开Dialog
//Step 16: Dialogs and Fragments 20240504-----------------------

//Step 17: Fragment Callbacks 20240506-----------------------
在dialog对话框新增一个按钮，用于关闭Dialog
//Step 17: Fragment Callbacks 20240506-----------------------

//Step 18：Icons 20240510-----------------------
onHelloBbutton 与helloDialog.fragment加图标
//Step 18：Icons 20240510-----------------------

//Step 19：Reuse Dialog 20240511-----------------------
原逻辑对helloDialog对话框只能被helloPanel.view的.onOpenDialog()按钮调用
现将helloDialog对话框改成Component级别，可被所有view重复调用
XXXX.view.onOpenDialog() --> Component.js.openHelloDialog()-->HelloDialog.js.open()
//Step 19：Reuse Dialog 20240511-----------------------

//Step 20：Aggregation Binding 20240512-----------------------
创建Invoices.json
manifest.json 添加invoices模型
创建Invoices.view.xml
App.view调用Invoices.view
//Step 20：Aggregation Binding 20240512-----------------------

//Step 21：Data types 20240512-----------------------
将Invoices.json中的ExtendPrice字段，由string类型，修改为number类型
在InvoiceList.controller,将InvoiceList.view与oViewModel绑定
//Step 21：Data types 20240512-----------------------

//Step 22：Expression Binding 20240512-----------------------
在ObjectListItem添加表达式绑定，价格大于50的，显示红色，否则显示绿色
//Step 22：Expression Binding 20240512-----------------------

//Step 23：Custom Formatter 20240512-----------------------
根据Invoice.json数据的Status字段，将发票状态码转换为发票状态状态描述
新建model/formatter.js，设置发票状态码与发票状态状态的对应关系
invoiceList.view绑定model/formatter.js的方法statusText（），将发票状态码转换为发票状态状态
//Step 23：Custom Formatter 20240512-----------------------

//Step 24：Filtering 20240512-----------------------
1.获取搜索框输入的值
2.根据搜索框输入的值，实例化过滤器对象
3.过滤绑定
//Step 24：Filtering 20240512-----------------------

//Step 25：Sortting and Grouping20240512-----------------------
在List控件上添加排序与分组按钮，点击按钮，实现排序
//Step 25：Sortting and Grouping20240512-----------------------

//Step 26：Remote OData Service 20240512-----------------------
manifest.json 配置远程OData服务，invoices模型绑定远程OData服务，实现远程OData服务数据绑定
//Step 26：Remote OData Service 20240512-----------------------


//Step 27：Mock Server Configuration 20240512-----------------------
在localService文件夹创建本地模拟服务器，并维护服务器数据Invoices.json
在test文件夹，初始化模拟服务器，以及加载所需的组件
//Step 27：Mock Server Configuration 20240512-----------------------