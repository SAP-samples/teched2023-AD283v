import ResourceBundle from "sap/base/i18n/ResourceBundle";
import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";

/**
 * @namespace keepcool.sensormanager.controller
 */
export default class Sensors extends Controller {

    public onInit() {
        const ownerComp = this.getOwnerComponent();
        this.getSensorModel().dataLoaded().then(function() {
            const resourceModel = ownerComp?.getModel("i18n") as ResourceModel;
            const resourceBundle = resourceModel.getResourceBundle() as ResourceBundle;
            MessageToast.show(resourceBundle.getText("msgSensorDataLoaded") as string, { closeOnBrowserNavigation: false });
        }.bind(this)).catch(function(oErr: Error){
            MessageToast.show(oErr.message, { closeOnBrowserNavigation: false });
        });
    }

    public getSensorModel() {
        const ownerComp = this.getOwnerComponent();
        const oModel = ownerComp?.getModel("sensorModel") as JSONModel;
        return oModel;
    }
}