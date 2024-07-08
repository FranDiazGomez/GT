(function () {
    "use strict";
    VisiWin.UI.Pages.define("dialogs/dlgDigitalInput.html", {

        //Variables genéricas para todos los Dialogs
        varsActualModulePath : VisiWin.System.DataAccess.IVariable,
        counter: 0,
        _updateActualModulePathHandler: null,
        variableService : null,

        //Variables propias del dialog
        varInputStatus : VisiWin.System.DataAccess.IVariable,
        varForceInput : VisiWin.System.DataAccess.IVariable,
        
        buttonElement: null,
		boundOnClickHandler: null,

        _updateVariableStatusHandler : null,
        _stateInputStatus: HTMLDivElement,


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
            this._stateInputStatus = document.getElementById("stateInputStatus");

            // Sample code
            this.buttonElement = document.getElementById("btnForceInput");
            if (this.buttonElement && this.buttonElement.winControl) {
                this.buttonElement.winControl.addEventListener("buttonclick", this.boundOnClickHandler);
            }

        },

        // Called after ready.
        // This is the right place to create VisiWin objects and add its event handler. 
        // PageMode": <any> regardless of the PageMode, attach is called when each page is loaded.
        attach: function (element) {
            if (VisiWin.Utilities.isInDesignMode()) return;

            Promise.all([
               
                this.varsActualModulePath.AttachAsync(),

            ]).then(() => {
         ;
                this.varsActualModulePath.Change.add(this._updateActualModulePathHandler);
            });
           
        },

        // Called first when a page is unloaded.
        // This is the right place to detach VisiWin objects and deregister its event handler. 
        // PageMode": <any> regardless of the PageMode, detach is called when each page is unloaded.
        detach: function (element) {
            //Común para todos los dialogs
            this.varsActualModulePath.Change.remove(this._updateActProdStateHandler);
           
            //Específico para cada dialog
            this.varInputStatus.Change.remove(this._updateVariableStatusHandler);

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
            if (this.buttonElement && this.buttonElement.winControl) {
                this.buttonElement.winControl.removeEventListener("buttonclick", this.boundOnClickHandler);
            }
        },

        // If an exception occurs while rendering the corresponding HTML page or while editing this Javascript page,
        // then this function is branched to. Further information about the error is available in the parameter args. 
        error: function (args) {
            console.log("Error in page dialogs/dlgDigitalInput.html, look at args in error function");
            // debugger;
        },

        // Example event handler for a button click handler that was created in the Ready method.
        _onClickHandler: function (args) {

            if (this.varForceInput.Value){
                this.varForceInput.Value=false;
            }else{
                this.varForceInput.Value=true;
            }
          
        },

        //Común para todos los dialogs que tengan variables
        _updateActualModulePath: function(){


            if(this.counter==0){
            
            //Genera path de las variables del dialog, una vez el path es válido
            this.varInputStatus = this.variableService.GetVariable(this.varsActualModulePath.Value+"xInputStatus");
            this.varForceInput = this.variableService.GetVariable(this.varsActualModulePath.Value+"xForceInput");

            Promise.all([
                this.varInputStatus.AttachAsync(),
                this.varForceInput.AttachAsync(),

            ]).then(() => {
                this.varInputStatus.Change.add(this._updateVariableStatusHandler);
               
            });
      
            this.counter=1;

            this._updateVariableStatus();

            }

        },

        _updateVariableStatus : function(){

            

            if (this.varInputStatus.Value){
                this._stateInputStatus.winControl.value = 1;

            }else{
                this._stateInputStatus.winControl.value = 0;

            }

        }
    });
})();




