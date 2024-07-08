(function () {
    "use strict";
    VisiWin.UI.Pages.define("views/LogInView.html", {

        buttonElement: null,
		boundOnClickHandler: null,

        // Wird einmal angesprungen, wenn zu dieser Seite navigiert wird.
        // In element wird die neue Seite (pageControl) übergeben, optional werden in options die gesetzten pageOptionen übergeben.
        // Es sind noch keine Controls auf der Seite platziert
        // "PageMode":"None"  	init wird bei jedem Laden der Seite aufgerufen  
        // "PageMode":"Cache" 	init wird nur beim ersten Laden der Seite aufgerufen
        init: function (element, options) {
            this.boundOnClickHandler = this._onClickHandler.bind(this);
        },

        // Wird angesprungen, wenn die neue Seite fertig gerendert worden ist.
        // Erst mit der ready Function kann auf Elemente und Controls der Seite zugegriffen werden.
        // "PageMode":"None"  	ready wird bei jedem Laden der Seite aufgerufen  
        // "PageMode":"Cache" 	ready wird nur beim ersten Laden der Seite aufgerufen
        ready: function (element, options) {
        // select all inputs for login (user and password)
            const varin = document.querySelectorAll('[data-win-control="VisiWin.UI.TextVarIn"]');
            for (let i = 0; i < varin.length; i++) {
                if (varin[i].winControl._inputElement) {
                // on focus clear errorText
                    varin[i].winControl._inputElement.addEventListener('focus', (event) => {
                    VisiWin.Observables.logon.errorText = " ";
                    })
                }
            }            
        },

        // Wird nach ready aufgerufen.
        // Hier ist die richtige Stelle, um VisiWin Objekte anzulegen und dessen Event Handler hinzuzufügen. 
        // "PageMode": <beliebig>  	unabhängig vom PageMode wird attach beim Laden jeder Seite aufgerufen
        attach: function (element) {

        },

        // Wird als erstes beim Entladen einer Seite aufgerufen.
        // Hier ist die richtige Stelle, um VisiWin Objekte abzubauen und dessen Event Handler abzumelden. 
        // "PageMode": <beliebig> 	unabhängig vom PageMode wird detach beim Entladen jeder Seite aufgerufen
        detach: function (element) {

        },

        // Wird vom AppPageNavigator aufgerufen, bevor das Seitenobject endgültig zerstört wird. 
        // "PageMode":"None"  	unload wird vor dem Entladen der Seite aufgerufen  
        // "PageMode":"Cache" 	unload wird nicht aufgerufen
        unload: function (oldElement, newElement) {

        },

        // dispose wird aufgerufen, bevor eine neue Seite vom AppPageNavigator in das gleiche Element geladen wird.
        // Hier sollten alle Resourcen zurückgegeben werden, die von der Seite angefordert worden sind.
        // Üblicherweise sind das EventHandler und ggf. angeforderter Speicher. 
        // "PageMode":"None"  	dispose wird vor dem Entfernen der Controls aufgerufen  
        // "PageMode":"Cache" 	dispose wird nicht aufgerufen
        dispose: function (element, args) {
            if (this.buttonElement && this.buttonElement.winControl) {
                this.buttonElement.winControl.removeEventListener("buttonclick", this.boundOnClickHandler);
            }
        },

        // Tritt beim Rendern der zugehörigen HTML-Seite oder beim Bearbeiten dieser Javascript Seite eine Exception auf,
        // so wird in diese Funktion verzweigt. Im Parameter args sind weitere Informationen zu dem Fehler verfügbar. 
        error: function (args) {
            console.log("Error in page views/LogInView.html, look at args in error function");
            // debugger;
        },

        // Beispiel Eventhandler, für einen Button Click Handler der in der Ready Methode angelegt worden ist
        _onClickHandler: function (args) {
            console.log("Button was clicked");
        }
    });
})();