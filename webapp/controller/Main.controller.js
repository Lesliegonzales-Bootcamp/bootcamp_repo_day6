sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/FilterType"
], (Controller, Sorter, Filter, FilterOperator, FilterType) => {
    "use strict";

    return Controller.extend("sapips.training.odata.controller.Main", {
            onAfterRendering: function () {
                let oView = this.getView();
                let oTable = oView.byId("oProdList");
    
                let oSort = new Sorter("ProductName", false);
                oTable.getBinding("items").sort(oSort);
    
                let oFilter = new Filter("Discontinued", FilterOperator.EQ, false);
                oTable.getBinding("items").filter([oFilter], sap.ui.model.FilterType.Control);
        }
    });
});