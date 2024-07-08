(function () {
    "use strict";
    VisiWin.UI.Pages.define("views/PropertiesView.html", {

       divPropertiesElement: null,
	
       //Variables
       variableService : null,
       varsResponse: VisiWin.System.DataAccess.IVariable,


		// Is jumped to once when this page is navigated to.
        // The new page (pageControl) is passed in element, optionally the set pageOptions are passed in options.
        // No controls are placed on the page yet.
        // "PageMode": "None" init is called every time the page is loaded.  
        // "PageMode": "Cache" init is only called when the page is loaded for the first time.
        init: function (element, options) {
            //this.boundOnClickHandler = this._onClickHandler.bind(this);
            this.variableService = VisiWin.System.DataAccess.VariableService.getService();
            this.varsResponse = this.variableService.GetVariable("Controller.PLC.Application.PRG_FW.componentsController.sJSONResponse");
        },

        // Is called when the new page has been rendered.
        // Only with the ready function can elements and controls of the page be accessed.
        // "PageMode": "None" ready is called each time the page is loaded.  
        // "PageMode": "Cache" ready is only called when the page is loaded for the first time.
        ready: function (element, options) {
            // Sample code
            this.divPropertiesElement = document.getElementById("divProperties");
            if (this.divPropertiesElement && this.divPropertiesElement.winControl) {
                this.ActualizarPropiedades();
            }
        },

        // Called after ready.
        // This is the right place to create VisiWin objects and add its event handler. 
        // PageMode": <any> regardless of the PageMode, attach is called when each page is loaded.
        attach: function (element) {

        },

        // Called first when a page is unloaded.
        // This is the right place to detach VisiWin objects and deregister its event handler. 
        // PageMode": <any> regardless of the PageMode, detach is called when each page is unloaded.
        detach: function (element) {

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
        //    if (this.buttonElement && this.buttonElement.winControl) {
        //        this.buttonElement.winControl.removeEventListener("buttonclick", this.boundOnClickHandler);
        //    }
        },

        // If an exception occurs while rendering the corresponding HTML page or while editing this Javascript page,
        // then this function is branched to. Further information about the error is available in the parameter args. 
        error: function (args) {
            console.log("Error in page views/PropertiesView.html, look at args in error function");
            // debugger;
        },

        ActualizarPropiedades : function(){

            let PropertiesForm = document.createElement("form");
            let br = document.createElement("br");
            let inputProperty;
            let labelProperty;

            let ModuleProperties = JSON.parse(this.varsResponse.Value);

            ModuleProperties.Properties.forEach((element,index)=>{
                console.log(element);
                inputProperty=document.createElement("input");
                inputProperty.setAttribute("type","text");
                inputProperty.setAttribute("id",element.PropertyName);
                inputProperty.value=element.PropertyValue;
                inputProperty.setAttribute("name",element.PropertyName);
                inputProperty.addEventListener("change",this.onInputChange);
                labelProperty=document.createElement("label");
                labelProperty.innerHTML=element.PropertyName;
                labelProperty.setAttribute("htmlFor",element.PropertyName);
                PropertiesForm.appendChild(labelProperty);
                PropertiesForm.appendChild(inputProperty);
                PropertiesForm.appendChild(br.cloneNode());
            });

            this.divPropertiesElement.appendChild(PropertiesForm);
        },

        onInputChange : function(){
            console.log("Input cambiado");
        }

    });
})();