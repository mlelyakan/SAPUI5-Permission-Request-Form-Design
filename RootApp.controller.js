sap.ui.define([
  "sap/ui/core/mvc/Controller",
], function (Controller) {
  "use strict";
  var base;
  return Controller.extend("BNetSapUI5.RootApp", {
    onInit: function () {
      base = this;
      base.getView().setModel(oModel);
    }
  });
});
