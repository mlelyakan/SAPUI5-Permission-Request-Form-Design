sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/ui/model/Filter",
   "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
   "use strict";
   var base, oRouter;
   return Controller.extend("SapUI5Tutorial.Application.Start.controller.Start", {
      onInit: function () {
         base = this;
         base.getView().setModel(oModel);
         base.getData();
      },
      getData: function () {
         var users = [
            {
               "Name": "Matthew Richardson",
               "Photo": "https://randomuser.me/api/portraits/men/46.jpg",
               "CreatedDate": "15 Ağustos 2019",
               "CreatedTime": "16:32",
               "Process": "Onaylandı"
            }
         ]
         oModel.setProperty("/UsersCollection", users);
      },
   });
});