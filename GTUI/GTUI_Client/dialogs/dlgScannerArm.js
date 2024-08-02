(function () {
    "use strict";
    VisiWin.UI.Pages.define("dialogs/dlgScannerArm.html", {

        //Variables genéricas para todos los Dialogs
        varsActualModulePath : VisiWin.System.DataAccess.IVariable,
        variableService : null,
        _updateVariableStatusHandler: null,

        //Variables propias del dialog
        varPosition : VisiWin.System.DataAccess.IVariable,
        varProbe : VisiWin.System.DataAccess.IVariable,
        varGlassSensor : VisiWin.System.DataAccess.IVariable,
        varGoScan : VisiWin.System.DataAccess.IVariable,
        varGoHome : VisiWin.System.DataAccess.IVariable,
        varStop : VisiWin.System.DataAccess.IVariable,//////////////////////////////////////////////////

        //Elementos y handlers propios del dialog
        btnScan: null,
        btnHome: null,
        btnStop: null,
		boundOnClickHandler: null,

        _updateVariableStatusHandler : null,
        _Position : HTMLDivElement,
        _Probe : HTMLDivElement,
        _GlassSensor : HTMLDivElement,//////////////////////////////////////////////////

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
            this.boundOnClickHandler = this._onClickHandler.bind(this);
            


        },

        // Is called when the new page has been rendered.
        // Only with the ready function can elements and controls of the page be accessed.
        // "PageMode": "None" ready is called each time the page is loaded.  
        // "PageMode": "Cache" ready is only called when the page is loaded for the first time.
        ready: function (element, options) {
            // Sample code
            this.btnScan = document.getElementById("btnScan");
            if (this.btnScan && this.btnScan.winControl) {
                this.btnScan.winControl.addEventListener("buttonclick", this.boundOnClickHandler);
            }

            this.btnHome = document.getElementById("btnHome");
            if (this.btnHome && this.btnHome.winControl) {
                this.btnHome.winControl.addEventListener("buttonclick", this.boundOnClickHandler);
            }
            
            this.btnStop = document.getElementById("btnStop");
            if (this.btnStop && this.btnStop.winControl) {
                this.btnStop.winControl.addEventListener("buttonclick", this.boundOnClickHandler);
            }
            
            this._Position = document.getElementById("rActPos");
            this._Probe = document.getElementById("rProbeSensor");
            this._GlassSensor = document.getElementById("xValue");//////////////////////////////////////////////////
            
            
        },

        // Called after ready.
        // This is the right place to create VisiWin objects and add its event handler. 
        // PageMode": <any> regardless of the PageMode, attach is called when each page is loaded.
        attach: function (element) {
            if (VisiWin.Utilities.isInDesignMode()) return;

            //Genera path de las variables del dialog
            this.varPosition = this.variableService.GetVariable(this.varsActualModulePath.Value+"Cylinder.rEncoder");
            this.varProbe = this.variableService.GetVariable(this.varsActualModulePath.Value+"ProbeSensor.rValue");
            this.varGlassSensor = this.variableService.GetVariable(this.varsActualModulePath.Value+"GlassSensor.xValue");
            this.varGoScan = this.variableService.GetVariable(this.varsActualModulePath.Value+"xScanMan");
            this.varGoHome = this.variableService.GetVariable(this.varsActualModulePath.Value+"xHomeMan");
            this.varStop = this.variableService.GetVariable(this.varsActualModulePath.Value+"xStopMan");//////////////////////////////////////////////////

            Promise.all([
                this.varPosition.AttachAsync(),
                this.varProbe.AttachAsync(),
                this.varGlassSensor.AttachAsync(),
                this.varGoScan.AttachAsync(),
                this.varGoHome.AttachAsync(),   
                this.varStop.AttachAsync(),//////////////////////////////////////////////////

            ]).then(() => {
                this.varPosition.Change.add(this._updateVariableStatusHandler);  
                this.varProbe.Change.add(this._updateVariableStatusHandler);
                this.varGlassSensor.Change.add(this._updateVariableStatusHandler);//////////////////////////////////////////////////
            });

            setTimeout(this._updateVariableStatus(), 3000);

        },

        // Called first when a page is unloaded.
        // This is the right place to detach VisiWin objects and deregister its event handler. 
        // PageMode": <any> regardless of the PageMode, detach is called when each page is unloaded.
        detach: function (element) {

           
            //Específico para cada dialog
            this.varPosition.Change.remove(this._updateVariableStatusHandler);
            this.varProbe.Change.remove(this._updateVariableStatusHandler);
            this.varGlassSensor.Change.remove(this._updateVariableStatusHandler);//////////////////////////////////////////////////
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
            if (this.btnScan && this.btnScan.winControl) {
                this.btnScan.winControl.removeEventListener("buttonclick", this.boundOnClickHandler);
            }
            if (this.btnHome && this.btnHome.winControl) {
                this.btnHome.winControl.removeEventListener("buttonclick", this.boundOnClickHandler);
            }
            if (this.btnStop && this.btnStop.winControl) {
                this.btnStop.winControl.removeEventListener("buttonclick", this.boundOnClickHandler);
            }////////////////////////////////////////////////////
        },

        // If an exception occurs while rendering the corresponding HTML page or while editing this Javascript page,
        // then this function is branched to. Further information about the error is available in the parameter args. 
        error: function (args) {
            console.log("Error in page dialogs/dlgDI.html, look at args in error function");
            // debugger;
        },

        // Example event handler for a button click handler that was created in the Ready method.
        _onClickHandler: function (args) {
            console.log(args);
            if (args.target._controlId == "btnScan"){
                this.varGoScan.Value=true;
                this.varGoHome.Value=false;
                this.varStop.Value=false;
            } 

            if (args.target._controlId == "btnHome"){
                this.varGoHome.Value=true
                this.varGoScan.Value=false
                this.varStop.Value=false
            }

            if (args.target._controlId == "btnStop"){
                this.varStop.Value=true
                this.varGoHome.Value=false
                this.varGoScan.Value=false
            }////////////////////////////////////////////////
          
        },

        _updateVariableStatus : function(){


            if (this.varPosition.Value){
                this._Position.winControl.value = this.varPosition.Value;

            }else{
                this._Position.winControl.value = -13;

            }
            
            if (this.varProbe.Value){
                this._Probe.winControl.value = this.varProbe.Value;
            }else{
                this._Probe.winControl.value = -111;
            }

            if (this.varGlassSensor.Value){
                this._GlassSensor.winControl.value = 1;
            }else{
                this._GlassSensor.winControl.value = 0;
            }//////////////////////////////////////////////////
            
        }


    });
})();