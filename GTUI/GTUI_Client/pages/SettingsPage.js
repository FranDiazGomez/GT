(function () {
    
    "use strict";
   
    VisiWin.UI.Pages.define("pages/SettingsPage.html", {

        //Elementos HTML
        buttonElement: null,

        //Bound handlers de Clicks y cambios de variables
		boundOnClickHandler: null,
        boundModuleOnClickHandler: null,
        boundUpdatedOrderHandler : null,
        boundUpdatedPath: null,
        bountUpdateWriteProperties : null,
        boundUpdatedDone : null,

        //Declaración de variables
        varsResponse: VisiWin.System.DataAccess.IVariable,
        varxExecute: VisiWin.System.DataAccess.IVariable,
        varsOrder : VisiWin.System.DataAccess.IVariable,
        varxDone : VisiWin.System.DataAccess.IVariable,
        varsActualModulePath : VisiWin.System.DataAccess.IVariable,
        variableService : null,

        //Declaración variables blobales
        MachineConfiguration : null,
        element : null,
        oldElement : null,
        _xOpenDialogOrder : null,
        _xUpdateComponentsOrder : null,
     
      


		// Is jumped to once when this page is navigated to.
        // The new page (pageControl) is passed in element, optionally the set pageOptions are passed in options.
        // No controls are placed on the page yet.
        // "PageMode": "None" init is called every time the page is loaded.  
        // "PageMode": "Cache" init is only called when the page is loaded for the first time.
        init: function (element, options) {

            if (VisiWin.Utilities.isInDesignMode()) return;
            //Definición servicio de gestión de variables y variables
            this.variableService = VisiWin.System.DataAccess.VariableService.getService();
            this.varsResponse = this.variableService.GetVariable("Controller.PLC.Application.PRG_FW.componentsController.sJSONResponse");
            this.varsOrder = this.variableService.GetVariable("Controller.PLC.Application.PRG_FW.componentsController.sJSONOrder");
            this.varxExecute = this.variableService.GetVariable("Controller.PLC.Application.PRG_FW.componentsController.xExecute");
            this.varxDone = this.variableService.GetVariable("Controller.PLC.Application.PRG_FW.componentsController.xDone");
            this.varsActualModulePath = this.variableService.GetVariable("sActualModulePath");
            this.varxWriteProperties = this.variableService.GetVariable("WriteProperties");
            //Bind gestores cambio de variables
            this.boundUpdatedOrderHandler = this._OnUpdatedOrder.bind(this);
            this.bountUpdateWriteProperties = this._updateWriteProperties.bind(this);
            //Bind gestores on click
            this.boundOnClickHandler = this._onClickHandler.bind(this);
            this.boundModuleOnClickHandler = this._onModuleClickHandler.bind(this);
            this.boundUpdatedDone = this._onUpdatedDone.bind(this);
        },

        // Is called when the new page has been rendered.
        // Only with the ready function can elements and controls of the page be accessed.
        // "PageMode": "None" ready is called each time the page is loaded.  
        // "PageMode": "Cache" ready is only called when the page is loaded for the first time.
        ready: function (element, options) {
            // Sample code
            this.buttonElement = document.getElementById("btnOpenMachineConfig");
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
                this.varsOrder.AttachAsync(),
                this.varsResponse.AttachAsync(),
                this.varsActualModulePath.AttachAsync(),
                this.varxExecute.AttachAsync(),
                this.varxDone.AttachAsync(),
                this.varxWriteProperties.AttachAsync(),


            ]).then(() => {
                
                this.varsOrder.Change.add(this.boundUpdatedOrderHandler);
                this.varxWriteProperties.Change.add(this.bountUpdateWriteProperties);
                this.varxDone.Change.add(this.boundUpdatedDone);
            });

        },

        // Called first when a page is unloaded.
        // This is the right place to detach VisiWin objects and deregister its event handler. 
        // PageMode": <any> regardless of the PageMode, detach is called when each page is unloaded.
        detach: function (element) {

            this.varsOrder.Change.remove(this.boundUpdatedOrderHandler);
            this.varxWriteProperties.Change.remove(this.bountUpdateWriteProperties);
            this.varxDone.Change.remove(this.boundUpdatedDone);
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
            console.log("Error in page pages/SettingsPage.html, look at args in error function");
            // debugger;
        },

        ContentDialog: function (name) {
            if (document.body) {
                    const dialogElement = document.createElement("div");
                    document.body.insertBefore(dialogElement, document.body.firstElementChild);
                    // create Dialog Control dynamically
                    let dialog = new VisiWin.UI["Dialog"](dialogElement, { mode: "Modal", dialogName: name });
                    //dialog.DataContext = VisiWin.Observables.alarmItem;
                    dialog.show();
                }
            },

        // Handler botón actualizar componentes
        _onClickHandler: function (args) {

            let orderGetComponents = {"order": "getComponents","id": "0","deep": "0"};

            this.varsOrder.Value=JSON.stringify(orderGetComponents);
            this._xUpdateComponentsOrder = true;
     
        },

        _onModuleClickHandler : function(args){

            event.stopPropagation();

            this.element = this.MachineConfiguration.Components.find((element)=>element.ID==args.target.id);
   

            this._xOpenDialogOrder=true;

            const path = GeneratePath(this.MachineConfiguration,this.element.ID);

            this.varsActualModulePath.Value=path;

            if(this.element!=this.oldElement){
                this.oldElement=this.element;

            }else{
               
            }

            let orderGetProperties = {"order": "getProperties","id": "1" };
            orderGetProperties.id=this.element.ID;
            this.varsOrder.Value=JSON.stringify(orderGetProperties);
        },

        _updateWriteProperties : function(){
            console.log("Actualizadas!!!");
        },



        ActualizarComponentes : function(){

            this.MachineConfiguration = JSON.parse(this.varsResponse.Value);

            var MachineModuleTree = document.getElementById("divMachineTree");
            var UnsignedListTree = document.createElement("ul");
            UnsignedListTree.className='tree'; //Añadir clase tree para que se vea como árbol
            var RootDetail = document.createElement("details"); //Añadir detalles para que se vea como árbol
            RootDetail.setAttribute('open', '') //Añadir atributo open para que se cargue el árbol desplegado
            var RootListItemText = document.createElement("summary"); //Añadir sumary (he cambiado createTextNode por createElement para crear un elemento summary en vez de texto)
            RootListItemText.textContent="GT"; //Añadir texto al summary
            RootListItemText.className='parent'; //Añadir clase parent para que se vea como árbol
            
            var RootListItem =  document.createElement("li");
            var RootUnsignedList = document.createElement("ul");
            RootUnsignedList.id='ul0';
            RootDetail.appendChild(RootListItemText); //Añadir texto al detalle 
            RootDetail.appendChild(RootUnsignedList); //Añadir lista al detalle
            RootListItem.appendChild(RootDetail); //Añadir detalles al li 
            UnsignedListTree.appendChild(RootListItem); 
            MachineModuleTree.appendChild(UnsignedListTree);
            console.log(this.MachineModuleTree);
            
            this.MachineConfiguration.Components.forEach(mmelement => {
                let Text1 = document.createElement("span");
                Text1.textContent = mmelement.ComponentName;
                Text1.addEventListener('dblclick',this.boundModuleOnClickHandler);// He añadido un evento click al texto en vez de al li
                Text1.id=mmelement.ID; //Añadir id al texto
                let Summary1 = document.createElement("summary"); //Añadir texto para que se vea como árbol 
                Summary1.id='sumary'+(mmelement.ID);    
                Summary1.appendChild(Text1); //Añadir texto al summary
                let DetailsItem = document.createElement("details"); //Añadir detalles para que se vea como árbol
                DetailsItem.setAttribute('open', '') //Añadir atributo open para que se vea abierto
                let ListItem = document.createElement("li");
                let ListItemUl = document.createElement("ul");
                ListItemUl.id='ul'+(mmelement.ID);

                //ListItem.id=mmelement.ID;
                DetailsItem.appendChild(Summary1); //Añadir texto al detalle
                DetailsItem.appendChild(ListItemUl); //Añadir lista al detalle
                ListItem.appendChild(DetailsItem); //Añadir detalles al li
                
                if(document.getElementById('ul'+ (mmelement.ParentID)))
                {
                    document.getElementById('ul'+ (mmelement.ParentID)).appendChild(ListItem);
                    if(document.getElementById('sumary'+ (mmelement.ParentID))){
                        document.getElementById('sumary'+ (mmelement.ParentID)).setAttribute('class','parent');
                    }
                        
                }
                else{
                    UnsignedListTree.appendChild(ListItem);
                }
               
            });
        },

        _OnUpdatedOrder : function(){

            //Espera a que se confirme la escritura de una nueva order para activar el xExecute del bloque
            if(this.varsOrder.Value!=""){
                this.varxExecute.Value=true;
            }
            

        },


        _onUpdatedDone : function(){




            if (this.varxDone.Value){
                this.varxExecute.Value=false;


                //La actualización de la respuesta es para actualizar componentes
                if(this._xUpdateComponentsOrder){
                    this.ActualizarComponentes();
                    this._xUpdateComponentsOrder=false;
                    this.varsOrder.Value="";
                }

                //La actualización de la respuesta es para abrir diálogo de componente
                if(this._xOpenDialogOrder){


                    let sDialogName;

                    sDialogName="dialogs/dlg"+this.element.ComponentType+".html";

                    this.ContentDialog(sDialogName);
        
                    this._xOpenDialogOrder=false;

                }

            }
           

        }
    });
})();

function GeneratePath(machineConfiguration,moduleID){

    let path="";
    let _moduleID=moduleID;
    let ActualModule;

    do{
        ActualModule = machineConfiguration.Components.find((element)=> element.ID==_moduleID);

        path=ActualModule.ComponentName+"."+path;
      
        _moduleID=ActualModule.ParentID;
    }
    while(ActualModule.ParentID!=0);

    path="Controller.PLC.Application.PLC_PRG."+path;

    return path;


}
