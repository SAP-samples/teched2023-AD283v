import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";

/**
 * @namespace keepcool.sensormanager.controller
 */
export default class SensorStatus extends Controller {

    public onInit() {
        
    }

    navToSensors() {
        (this.getOwnerComponent() as UIComponent).getRouter().navTo("RouteSensors");
    }
        
}
