(function () {
    "use strict";
    VisiWin.UI.Pages.define("dialogs/dlgCylinder.html", {

        //Variables genéricas para todos los Dialogs
        varsActualModulePath : VisiWin.System.DataAccess.IVariable,
        variableService : null,
        _updateVariableStatusHandler: null,

        //Variables propias del dialog
        varEncoder : VisiWin.System.DataAccess.IVariable,
        varState : VisiWin.System.DataAccess.IVariable,
        varIsIn : VisiWin.System.DataAccess.IVariable,
        varIsOut : VisiWin.System.DataAccess.IVariable,
        varSetIn : VisiWin.System.DataAccess.IVariable,
        varSetOut : VisiWin.System.DataAccess.IVariable,
        varStop : VisiWin.System.DataAccess.IVariable,//////////////////////////////////////////////////

        //Elementos y handlers propios del dialog
        btnSetIn: null,
        btnSetOut: null,
        btnStop: null,
		boundOnClickHandler: null,

        _updateVariableStatusHandler : null,
        _Encoder: HTMLDivElement,
        _State : HTMLDivElement,
        _IsIn : HTMLDivElement,
        _IsOut : HTMLDivElement,//////////////////////////////////////////////////

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
            this.btnSetIn = document.getElementById("btnSetIn");
            if (this.btnSetIn && this.btnSetIn.winControl) {
                this.btnSetIn.winControl.addEventListener("buttonclick", this.boundOnClickHandler);
            }

            this.btnSetOut = document.getElementById("btnSetOut");
            if (this.btnSetOut && this.btnSetOut.winControl) {
                this.btnSetOut.winControl.addEventListener("buttonclick", this.boundOnClickHandler);
            }
            
            this.btnStop = document.getElementById("btnStop");
            if (this.btnStop && this.btnStop.winControl) {
                this.btnStop.winControl.addEventListener("buttonclick", this.boundOnClickHandler);
            }
            
            this._Encoder = document.getElementById("Encoder");
            this._State = document.getElementById("State");
            this._IsIn = document.getElementById("IsIn");
            this._IsOut = document.getElementById("IsOut");//////////////////////////////////////////////////
            
            
        },

        // Called after ready.
        // This is the right place to create VisiWin objects and add its event handler. 
        // PageMode": <any> regardless of the PageMode, attach is called when each page is loaded.
        attach: function (element) {
            if (VisiWin.Utilities.isInDesignMode()) return;

            //Genera path de las variables del dialog
            this.varEncoder = this.variableService.GetVariable(this.varsActualModulePath.Value+"rEncoder");
            this.varState = this.variableService.GetVariable(this.varsActualModulePath.Value+"sState");
            this.varIsIn = this.variableService.GetVariable(this.varsActualModulePath.Value+"SensorIn.xValue");
            this.varIsOut = this.variableService.GetVariable(this.varsActualModulePath.Value+"SensorOut.xValue");
            this.varSetIn = this.variableService.GetVariable(this.varsActualModulePath.Value+"xSetIn");
            this.varSetOut = this.variableService.GetVariable(this.varsActualModulePath.Value+"xSetOut");
            this.varStop = this.variableService.GetVariable(this.varsActualModulePath.Value+"xStop");//////////////////////////////////////////////////

            Promise.all([
                this.varEncoder.AttachAsync(),
                this.varState.AttachAsync(),
                this.varIsIn.AttachAsync(),
                this.varIsOut.AttachAsync(),
                this.varSetIn.AttachAsync(),
                this.varSetOut.AttachAsync(),   
                this.varStop.AttachAsync(),//////////////////////////////////////////////////

            ]).then(() => {
                this.varEncoder.Change.add(this._updateVariableStatusHandler);  
                this.varState.Change.add(this._updateVariableStatusHandler);
                this.varIsIn.Change.add(this._updateVariableStatusHandler);
                this.varIsOut.Change.add(this._updateVariableStatusHandler);//////////////////////////////////////////////////
            });

            this._updateVariableStatus();
        },

        // Called first when a page is unloaded.
        // This is the right place to detach VisiWin objects and deregister its event handler. 
        // PageMode": <any> regardless of the PageMode, detach is called when each page is unloaded.
        detach: function (element) {

           
            //Específico para cada dialog
            this.varEncoder.Change.remove(this._updateVariableStatusHandler);
            this.varState.Change.remove(this._updateVariableStatusHandler);
            this.varIsIn.Change.remove(this._updateVariableStatusHandler);
            this.varIsOut.Change.remove(this._updateVariableStatusHandler);//////////////////////////////////////////////////
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
            if (this.btnSetIn && this.btnSetIn.winControl) {
                this.btnSetIn.winControl.removeEventListener("buttonclick", this.boundOnClickHandler);
            }
            if (this.btnSetOut && this.btnSetOut.winControl) {
                this.btnSetOut.winControl.removeEventListener("buttonclick", this.boundOnClickHandler);
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
            if (args.target._controlId == "btnSetIn"){
                this.varSetIn.Value=true;
                this.varSetOut.Value=false;
                this.varStop.Value=false;
            } 

            if (args.target._controlId == "btnSetOut"){
                this.varSetOut.Value=true
                this.varSetIn.Value=false
                this.varStop.Value=false
            }

            if (args.target._controlId == "btnStop"){
                this.varStop.Value=true
                this.varSetOut.Value=false
                this.varSetIn.Value=false
            }////////////////////////////////////////////////
          
        },

        _updateVariableStatus : function(){


            if (this.varEncoder.Value){
                this._Encoder.winControl.value = this.varEncoder.Value;

            }else{
                this._Encoder.winControl.value = 0;

            }

            this._State.winControl.value = this.varState.Value;
            

            if (this.varIsIn.Value){
                this._IsIn.winControl.value = 1;
            }else{
                this._IsIn.winControl.value = 0;
            }

            if (this.varIsOut.Value){
                this._IsOut.winControl.value = 1;
            }else{
                this._IsOut.winControl.value = 0;
            }//////////////////////////////////////////////////
            
        }


    });
})();