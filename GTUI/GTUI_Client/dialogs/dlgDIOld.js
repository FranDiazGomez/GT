(function () {
    "use strict";
    VisiWin.UI.Pages.define("dialogs/dlgDI.html", {

        //Variables genéricas para todos los Dialogs
        varsActualModulePath : VisiWin.System.DataAccess.IVariable,
        counter: 0,
        _updateActualModulePathHandler: null,
        variableService : null,

        //Variables propias del dialog
        varValue : VisiWin.System.DataAccess.IVariable,
        varForceTrue : VisiWin.System.DataAccess.IVariable,
        varForceFalse : VisiWin.System.DataAccess.IVariable,

        //Elementos y handlers propios del dialog
        btnForceTrue: null,
        btnForceFalse: null,
		boundOnClickHandler: null,

        _updateVariableStatusHandler : null,
        _stateValue: HTMLDivElement,


		// Is jumped to once when this page is navigated to.
        // The new page (pageControl) is passed in element, optionally the set pageOptions are passed in options.
        // No controls are placed on the page yet.
        // "PageMode": "None" init is called every time the page is loaded.  
        // "PageMode": "Cache" init is only called when the page is loaded for the first time.
        init: function (element, options) {
            //Común para todos los dialogs
            this.variableService = VisiWin.System.DataAccess.VariableService.getService();
            this.varsActualModulePath = this.variableService.GetVariable("sActualModulePath");
            this._updateActualModulePathHandler = this._updateActualModulePath.bind(this);

            //Específico para cada dialog
            this.boundOnClickHandler = this._onClickHandler.bind(this);
            this._updateVariableStatusHandler = this._updateVariableStatus.bind(this);
        },

        // Is called when the new page has been rendered.
        // Only with the ready function can elements and controls of the page be accessed.
        // "PageMode": "None" ready is called each time the page is loaded.  
        // "PageMode": "Cache" ready is only called when the page is loaded for the first time.
        ready: function (element, options) {
            this._stateValue = document.getElementById("stateValue");

            // Sample code
            this.btnForceTrue = document.getElementById("btnForceTrue");
            if (this.btnForceTrue && this.btnForceTrue.winControl) {
                this.btnForceTrue.winControl.addEventListener("buttonclick", this.boundOnClickHandler);
            }

            this.btnForceFalse = document.getElementById("btnForceFalse");
            if (this.btnForceFalse && this.btnForceFalse.winControl) {
                this.btnForceFalse.winControl.addEventListener("buttonclick", this.boundOnClickHandler);
            }
        },

        // Called after ready.
        // This is the right place to create VisiWin objects and add its event handler. 
        // PageMode": <any> regardless of the PageMode, attach is called when each page is loaded.
        attach: function (element) {
            if (VisiWin.Utilities.isInDesignMode()) return;
            
            //Genera path de las variables del dialog, una vez el path es válido
            this.varValue = this.variableService.GetVariable(this.varsActualModulePath.Value+"xValue");
            this.varForceTrue = this.variableService.GetVariable(this.varsActualModulePath.Value+"xForceTrue");
            this.varForceFalse = this.variableService.GetVariable(this.varsActualModulePath.Value+"xForceFalse");

            Promise.all([
                this.varValue.AttachAsync(),
                this.varForceTrue.AttachAsync(),
                this.varForceFalse.AttachAsync(),

            ]).then(() => {
                this.varValue.Change.add(this._updateVariableStatusHandler);
               
            });

            this._updateVariableStatus();
           
        },

        // Called first when a page is unloaded.
        // This is the right place to detach VisiWin objects and deregister its event handler. 
        // PageMode": <any> regardless of the PageMode, detach is called when each page is unloaded.
        detach: function (element) {
            //Común para todos los dialogs
            this.varsActualModulePath.Change.remove(this._updateActProdStateHandler);
           
            //Específico para cada dialog
            this.varValue.Change.remove(this._updateVariableStatusHandler);

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
            if (this.btnForceTrue && this.btnForceTrue.winControl) {
                this.btnForceTrue.winControl.removeEventListener("buttonclick", this.boundOnClickHandler);
            }
            if (this.btnForceFalse && this.btnForceFalse.winControl) {
                this.btnForceFalse.winControl.removeEventListener("buttonclick", this.boundOnClickHandler);
            }
        },

        // If an exception occurs while rendering the corresponding HTML page or while editing this Javascript page,
        // then this function is branched to. Further information about the error is available in the parameter args. 
        error: function (args) {
            console.log("Error in page dialogs/dlgDI.html, look at args in error function");
            console.log(args);
            // debugger;
        },

        // Example event handler for a button click handler that was created in the Ready method.
        _onClickHandler: function (args) {
            if (args.srcElement.id == "btnForceTrue"){
                if (this.varForceTrue.Value){
                    this.varForceTrue.Value=false;
                }else{
                    this.varForceTrue.Value=true;
                }
                this.varForceFalse.Value=false;
            } 

            if (args.srcElement.id == "btnForceFalse"){
                if (this.varForceFalse.Value){
                    this.varForceFalse.Value=false;
                }else{
                    this.varForceFalse.Value=true;
                }
                this.varForceTrue.Value=false;
            }
            
          
        },


        _updateVariableStatus : function(){

            

            if (this.varValue.Value){
                this._stateValue.winControl.value = 1;

            }else{
                this._stateValue.winControl.value = 0;

            }

        }
    });
})();




