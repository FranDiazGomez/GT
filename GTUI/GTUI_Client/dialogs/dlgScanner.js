(function () {
    "use strict";
    VisiWin.UI.Pages.define("dialogs/dlgScanner.html", {

        //Variables genéricas para todos los Dialogs
        varsActualModulePath : VisiWin.System.DataAccess.IVariable,
        variableService : null,
        _updateVariableStatusHandler: null,

        //Variables propias del dialog
        varLeftSensor : VisiWin.System.DataAccess.IVariable,
        varLeftMeasure : VisiWin.System.DataAccess.IVariable,
        varLeftProbe: VisiWin.System.DataAccess.IVariable,

        varCenterSensor : VisiWin.System.DataAccess.IVariable,
        varCenterMeasure : VisiWin.System.DataAccess.IVariable,
        varCenterProbe: VisiWin.System.DataAccess.IVariable,

        varRightSensor : VisiWin.System.DataAccess.IVariable,
        varRightMeasure : VisiWin.System.DataAccess.IVariable,
        varRightProbe: VisiWin.System.DataAccess.IVariable,
        
        varState : VisiWin.System.DataAccess.IVariable,
        varGoScan : VisiWin.System.DataAccess.IVariable,
        varGoHome : VisiWin.System.DataAccess.IVariable,
        varStop : VisiWin.System.DataAccess.IVariable,//////////////////////////////////////////////////

        //Elementos y handlers propios del dialog
        btnScan: null,
        btnHome: null,
        btnStop: null,
		boundOnClickHandler: null,

        _updateVariableStatusHandler : null,
        //_sState : HTMLDivElement,

        _LeftSensor : HTMLDivElement,
        _LeftMeasure : HTMLDivElement,
        _LeftProbe : HTMLDivElement,

        _CenterSensor : HTMLDivElement,
        _CenterMeasure : HTMLDivElement,
        _CenterProbe : HTMLDivElement,

        _RightSensor : HTMLDivElement,
        _RightMeasure : HTMLDivElement,
        _RightProbe : HTMLDivElement,//////////////////////////////////////////////////
        

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

            //this._sState = document.getElementById("sState");
            
            this._LeftSensor = document.getElementById("xLeftSensor");
            this._LeftMeasure = document.getElementById("rLeftMeasure");
            this._LeftProbe = document.getElementById("rLeftProbe");

            this._CenterSensor = document.getElementById("xCenterSensor");
            this._CenterMeasure = document.getElementById("rCenterMeasure");
            this._CenterProbe = document.getElementById("rCenterProbe");

            this._RightSensor = document.getElementById("xRightSensor");
            this._RightMeasure = document.getElementById("rRightMeasure");
            this._RightProbe = document.getElementById("rRightProbe");//////////////////////////////////////////////////  
        
            
            
        },

        // Called after ready.
        // This is the right place to create VisiWin objects and add its event handler. 
        // PageMode": <any> regardless of the PageMode, attach is called when each page is loaded.
        attach: function (element) {
            if (VisiWin.Utilities.isInDesignMode()) return;

            //Genera path de las variables del dialog
            this.varLeftSensor = this.variableService.GetVariable(this.varsActualModulePath.Value+"ScannerArmLeft.GlassSensor.xValue");
            this.varLeftMeasure = this.variableService.GetVariable(this.varsActualModulePath.Value+"ScannerArmLeft.Cylinder.rEncoder");
            this.varLeftProbe = this.variableService.GetVariable(this.varsActualModulePath.Value+"ScannerArmLeft.ProbeSensor.rValue");

            this.varCenterSensor = this.variableService.GetVariable(this.varsActualModulePath.Value+"ScannerArmUp.GlassSensor.xValue");
            this.varCenterMeasure = this.variableService.GetVariable(this.varsActualModulePath.Value+"ScannerArmUp.Cylinder.rEncoder");
            this.varCenterProbe = this.variableService.GetVariable(this.varsActualModulePath.Value+"ScannerArmUp.ProbeSensor.rValue");

            this.varRightSensor = this.variableService.GetVariable(this.varsActualModulePath.Value+"ScannerArmRight.GlassSensor.xValue");
            this.varRightMeasure = this.variableService.GetVariable(this.varsActualModulePath.Value+"ScannerArmRight.Cylinder.rEncoder");
            this.varRightProbe = this.variableService.GetVariable(this.varsActualModulePath.Value+"ScannerArmRight.ProbeSensor.rValue");

            this.varState = this.variableService.GetVariable(this.varsActualModulePath.Value+"sState");
            this.varGoScan = this.variableService.GetVariable(this.varsActualModulePath.Value+"xScan");
            this.varGoHome = this.variableService.GetVariable(this.varsActualModulePath.Value+"xHome");
            this.varStop = this.variableService.GetVariable(this.varsActualModulePath.Value+"xStop");//////////////////////////////////////////////////

            Promise.all([
                this.varLeftSensor.AttachAsync(),
                this.varLeftMeasure.AttachAsync(),  
                this.varLeftProbe.AttachAsync(),

                this.varCenterSensor.AttachAsync(),
                this.varCenterMeasure.AttachAsync(),
                this.varCenterProbe.AttachAsync(),

                this.varRightSensor.AttachAsync(),
                this.varRightMeasure.AttachAsync(),
                this.varRightProbe.AttachAsync(),
                
                this.varState.AttachAsync(),    
                this.varGoScan.AttachAsync(),
                this.varGoHome.AttachAsync(),   
                this.varStop.AttachAsync(),//////////////////////////////////////////////////

            ]).then(() => {
                this.varLeftSensor.Change.add(this._updateVariableStatusHandler);
                this.varLeftMeasure.Change.add(this._updateVariableStatusHandler);  
                this.varLeftProbe.Change.add(this._updateVariableStatusHandler);

                this.varCenterSensor.Change.add(this._updateVariableStatusHandler);
                this.varCenterMeasure.Change.add(this._updateVariableStatusHandler);
                this.varCenterProbe.Change.add(this._updateVariableStatusHandler);

                this.varRightSensor.Change.add(this._updateVariableStatusHandler);
                this.varRightMeasure.Change.add(this._updateVariableStatusHandler);
                this.varRightProbe.Change.add(this._updateVariableStatusHandler);   

                this.varState.Change.add(this._updateVariableStatusHandler);//////////////////////////////////////////////////
            });

            this._updateVariableStatus();

        },

        // Called first when a page is unloaded.
        // This is the right place to detach VisiWin objects and deregister its event handler. 
        // PageMode": <any> regardless of the PageMode, detach is called when each page is unloaded.
        detach: function (element) {

           
            //Específico para cada dialog
            this.varLeftSensor.Change.remove(this._updateVariableStatusHandler);
            this.varLeftMeasure.Change.remove(this._updateVariableStatusHandler);
            this.varLeftProbe.Change.remove(this._updateVariableStatusHandler);

            this.varCenterSensor.Change.remove(this._updateVariableStatusHandler);
            this.varCenterMeasure.Change.remove(this._updateVariableStatusHandler);
            this.varCenterProbe.Change.remove(this._updateVariableStatusHandler);

            this.varRightSensor.Change.remove(this._updateVariableStatusHandler);   
            this.varRightMeasure.Change.remove(this._updateVariableStatusHandler);
            this.varRightProbe.Change.remove(this._updateVariableStatusHandler);

            this.varState.Change.remove(this._updateVariableStatusHandler);//////////////////////////////////////////////////
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

            //Left Arm
            if (this.varLeftSensor.Value){
                this._LeftSensor.winControl.value = this.varLeftSensor.Value;
            }else{
                this._LeftSensor.winControl.value = 0;
            }

            if (this.varLeftMeasure.Value){
                this._LeftMeasure.winControl.value = this.varLeftMeasure.Value;
            }else{
                this._LeftMeasure.winControl.value = -11;
            }

            if (this.varLeftProbe.Value){
                this._LeftProbe.winControl.value = this.varLeftProbe.Value;
            }else{
                this._LeftProbe.winControl.value = -111;
            }

            //Center Arm
            if (this.varCenterSensor.Value){ç
                this._CenterSensor.winControl.value = this.varCenterSensor.Value;
            }else{
                this._CenterSensor.winControl.value = 0;
            }   

            if (this.varCenterMeasure.Value){
                this._CenterMeasure.winControl.value = this.varCenterMeasure.Value;
            }else{
                this._CenterMeasure.winControl.value = -12;
            }

            if (this.varCenterProbe.Value){
                this._CenterProbe.winControl.value = this.varCenterProbe.Value;
            }else{
                this._CenterProbe.winControl.value = -112;
            }

            //Right Arm
            if (this.varRightSensor.Value){
                this._RightSensor.winControl.value = this.varRightSensor.Value;
            }else{
                this._RightSensor.winControl.value = 0;
            }

            if (this.varRightMeasure.Value){
                this._RightMeasure.winControl.value = this.varRightMeasure.Value;
            }else{
                this._RightMeasure.winControl.value = -13;
            }

            if (this.varRightProbe.Value){
                this._RightProbe.winControl.value = this.varRightProbe.Value;
            }else{
                this._RightProbe.winControl.value = -113;
            }//////////////////////////////////////////////////
            
        }


    });
})();