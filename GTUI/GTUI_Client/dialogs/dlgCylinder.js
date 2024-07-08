(function () {
    "use strict";
    VisiWin.UI.Pages.define("dialogs/dlgCylinder.html", {

        //Variables genéricas para todos los Dialogs
        varsActualModulePath : VisiWin.System.DataAccess.IVariable,
        variableService : null,
        _updateVariableStatusHandler: null,

        //Variables propias del dialog
        varxSensorIn :  VisiWin.System.DataAccess.IVariable,
        varxSensorOut :  VisiWin.System.DataAccess.IVariable,
        varxForceCylinder :  VisiWin.System.DataAccess.IVariable,

        //Elementos y handlers propios del dialog
        buttonForceCylinder: null,
		boundOnClickForceCylinder: null,
        _SensorInStatus: HTMLDivElement,
        _SensorOutStatus: HTMLDivElement,

		// Is jumped to once when this page is navigated to.
        // The new page (pageControl) is passed in element, optionally the set pageOptions are passed in options.
        // No controls are placed on the page yet.
        // "PageMode": "None" init is called every time the page is loaded.  
        // "PageMode": "Cache" init is only called when the page is loaded for the first time.
        init: function (element, options) {
            //Común para todos los dialogs
            this.variableService = VisiWin.System.DataAccess.VariableService.getService();
            this.varsActualModulePath = this.variableService.GetVariable("sActualModulePath");
            this._updateVariableStatusHandler = this._updateVariableStatus.bind(this);

            //Específico para cada dialog
            this.boundOnClickForceCylinder = this._onClickForceCylinder.bind(this);
            


        },

        // Is called when the new page has been rendered.
        // Only with the ready function can elements and controls of the page be accessed.
        // "PageMode": "None" ready is called each time the page is loaded.  
        // "PageMode": "Cache" ready is only called when the page is loaded for the first time.
        ready: function (element, options) {
            // Sample code
            this.buttonForceCylinder = document.getElementById("btnForceOut");
            if (this.buttonForceCylinder && this.buttonForceCylinder.winControl) {
                this.buttonForceCylinder.winControl.addEventListener("buttonclick", this.boundOnClickForceCylinder);
            }

            this._SensorInStatus = document.getElementById("SensorInStatus");
            this._SensorOutStatus = document.getElementById("SensorOutStatus");

        },

        // Called after ready.
        // This is the right place to create VisiWin objects and add its event handler. 
        // PageMode": <any> regardless of the PageMode, attach is called when each page is loaded.
        attach: function (element) {
            if (VisiWin.Utilities.isInDesignMode()) return;

            //Genera path de las variables del dialog
            this.varxSensorIn = this.variableService.GetVariable(this.varsActualModulePath.Value+"SensorIn.xValue");
            this.varxSensorOut = this.variableService.GetVariable(this.varsActualModulePath.Value+"SensorOut.xValue");
            this.varxForceCylinder = this.variableService.GetVariable(this.varsActualModulePath.Value+"ValvIn.xValue");

            Promise.all([
                this.varxSensorIn.AttachAsync(),
                this.varxSensorOut.AttachAsync(),
                this.varxForceCylinder.AttachAsync(),

            ]).then(() => {
                this.varxSensorIn.Change.add(this._updateVariableStatusHandler);
                this.varxSensorOut.Change.add(this._updateVariableStatusHandler);
            });

            this._updateVariableStatus();

        },

        // Called first when a page is unloaded.
        // This is the right place to detach VisiWin objects and deregister its event handler. 
        // PageMode": <any> regardless of the PageMode, detach is called when each page is unloaded.
        detach: function (element) {

           
            //Específico para cada dialog
            this.varxSensorIn.Change.remove(this._updateVariableStatusHandler);
            this.varxSensorOut.Change.remove(this._updateVariableStatusHandler);
        },

        // Called by the AppPageNavigator before the page object is finally destroyed. 
        // PageMode: "None" unload is called before the page is unloaded.  
        // PageMode": "Cache" unload is not called.
        unload: function (oldElement, newElement) {

        },

        // dispose is called before a new page is loaded from the AppPageNavigator into the same element.
        // All resources that have been requested by the page should be returned here.
        // Usually these are EventHandler and requested memory if applicable. 
        // "PageMode": "None" dispose is called before removing the controls.  
        // PageMode": "Cache" dispose is not called.
        dispose: function (element, args) {
            if (this.buttonForceCylinder && this.buttonForceCylinder.winControl) {
                this.buttonForceCylinder.winControl.removeEventListener("buttonclick", this.boundOnClickForceCylinder);
            }
        },

        // If an exception occurs while rendering the corresponding HTML page or while editing this Javascript page,
        // then this function is branched to. Further information about the error is available in the parameter args. 
        error: function (args) {
            console.log("Error in page dialogs/dlgCylinder.html, look at args in error function");
            // debugger;
        },

        // Example event handler for a button click handler that was created in the Ready method.
        _onClickForceCylinder: function (args) {
            if (this.varxForceCylinder.Value){
                this.varxForceCylinder.Value=false;
            }else{
                this.varxForceCylinder.Value=true;
            }
        },

        _updateVariableStatus : function(){


            if (this.varxSensorIn.Value){
                this._SensorInStatus.winControl.value = 1;

            }else{
                this._SensorInStatus.winControl.value = 0;

            }

            if (this.varxSensorOut.Value){
                this._SensorOutStatus.winControl.value = 1;

            }else{
                this._SensorOutStatus.winControl.value = 0;

            }

        }


    });
})();