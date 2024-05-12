sap.ui.define([
    "sap/ui/base/ManagedObject"
], function (
    ManagedObject
) {
    "use strict";

    return {

        statusText: function (sStatus) {

            var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
            switch (sStatus) {
                case "A":
                    return resourceBundle.getText("invoiceStatusA");
                    break;
                case "B":
                    return resourceBundle.getText("invoiceStatusB");
                    break;
                case "C":
                    return resourceBundle.getText("invoiceStatusC");
                    break;

                default:
                    return sStatus;
            }
        }

    };
});