(function () {
    "use strict";

    var lastClientState = 0;
    var lastServerState = 0;
    var lastSocketState = 0;
    var isLicenseError = false;
    var isPreloaded = false;

    //document.addEventListener("readystatechange", (event) => { alert("alert");});
    //document.addEventListener("DOMContentLoaded", () => { console.log("DOM ready!"); });
    //window.onload = function() { console.log('ErrorView loaded'); };
    //window.addEventListener('load', (event) => { console.log('ErrorView loaded'); });

    VisiWin.UI.Pages.define("views/ErrorView.html", {

        buttonElement: null,
        boundOnClickHandler: null,

        // Wird einmal angesprungen, wenn zu dieser Seite navigiert wird.
        // In element wird die neue Seite (pageControl) übergeben, optional werden in options die gesetzten pageOptionen übergeben.
        // Es sind noch keine Controls auf der Seite platziert
        // "PageMode":"None"  	init wird bei jedem Laden der Seite aufgerufen
        // "PageMode":"Cache" 	init wird nur beim ersten Laden der Seite aufgerufen
        init: function (element, options) {
            this.boundOnClickHandler = this._onClickHandler.bind(this);

            VisiWin.AppServices.NavigationService.addEventListener("preloadingchange", (args) => {
                // if (args.detail.preloadingCounter == args.detail.preloadingFileCount && args.detail.preloadingPercent == 100)
                // {
                //     isPreloaded = true;//args.detail.preloadEnable && args.detail.preloadReady;
                // }
                if (args.detail.preloadingReady) {
                    isPreloaded = true;//args.detail.preloadEnable && args.detail.preloadReady;
                }
            });

            VisiWin.System.Client.ClientService.getService().ClientStateChanged.add(this.clientServiceChangeHandler.bind(this));
            VisiWin.System.Project.ProjectService.getService().ServerProjectStateChange.add(this.serverProjectStateChange.bind(this));
            VisiWin.System.Client.ClientService.getService().CommunicationStateChanged.add(this.socketChangeHandler.bind(this));

            //console.log("init --- serverstatus: "+VisiWin.System.Project.ProjectService.getService().ServerRuntimeStatus);
            //console.log("init --- clientstatus: "+ VisiWin.System.Client.ClientService.getService().ClientState);
            //console.log("init --- socketstatus: "+VisiWin.System.Client.ClientService.getService().CommunicationState);

            //VisiWin.Application.Settings.UI.AutoRestartOnError = false;
            //VisiWin.Application.Settings.System.EnableWebSocketReconnects = false;
            //VisiWin.Application.Settings.System.WebSocketReconnects = -1;
            if (this.isLocalHost()) {
                //5 log off				
                VisiWin.Application.Settings.System.DebugLogLevel = 5;
            }
        },

        isLocalHost: function () {
            return location.hostname === "localhost" || location.hostname === "127.0.0.1";
        },

        showContentOrErrorViewFunction: function () {
            //ok states
            var clientOkState =
                lastClientState == VisiWin.System.Client.ClientState.Running;
            // || lastClientState== VisiWin.System.Client.ClientState.Starting;

            var serverOkState =
                lastServerState == VisiWin.System.Project.ServerRuntimeStatus.Loaded ||
                //lastServerState == VisiWin.System.Project.ServerRuntimeStatus.Starting || 
                lastServerState == VisiWin.System.Project.ServerRuntimeStatus.Running;

            var socketOkState = lastSocketState == VisiWin.System.Client.CommunicationState.Connecting ||
                lastSocketState == VisiWin.System.Client.CommunicationState.Open;

            //error states
            var clientErrorState =
                lastClientState == VisiWin.System.Client.ClientState.SocketNotAvailable ||
                lastClientState == VisiWin.System.Client.ClientState.CommunicationUnclear ||
                lastClientState == VisiWin.System.Client.ClientState.Uncertain ||
                lastClientState == VisiWin.System.Client.ClientState.RestartRequired;

            var serverErrorState =
                lastServerState == VisiWin.System.Project.ServerRuntimeStatus.ErrorFatal ||
                lastServerState == VisiWin.System.Project.ServerRuntimeStatus.ErrorNoLicense ||
                lastServerState == VisiWin.System.Project.ServerRuntimeStatus.ErrorPowerDown ||
                lastServerState == VisiWin.System.Project.ServerRuntimeStatus.InvalidProjectRegistration;

            //lastServerState == VisiWin.System.Project.ServerRuntimeStatus.Unloaded || 
            //lastServerState == VisiWin.System.Project.ServerRuntimeStatus.Stopped || 
            //lastServerState == VisiWin.System.Project.ServerRuntimeStatus.ErrorOnLoading || 
            //lastServerState == VisiWin.System.Project.ServerRuntimeStatus.RunningWithTimeout || 
            //lastServerState == VisiWin.System.Project.ServerRuntimeStatus.RunningWithError ||                     
            //lastServerState == VisiWin.System.Project.ServerRuntimeStatus.ErrorOnStarting || 
            //lastServerState == VisiWin.System.Project.ServerRuntimeStatus.ErrorWatchDog ||
            //lastServerState == VisiWin.System.Project.ServerRuntimeStatus.ErrorOnStarting || 
            //lastServerState == VisiWin.System.Project.ServerRuntimeStatus.ErrorUnhandledException ||               
            //lastServerState == VisiWin.System.Project.ServerRuntimeStatus.ErrorDoesNotExist || 
            //lastServerState == VisiWin.System.Project.ServerRuntimeStatus.ErrorNoConfiguration || 
            //lastServerState == VisiWin.System.Project.ServerRuntimeStatus.ErrorHostConnectionLost ||
            //lastServerState == VisiWin.System.Project.ServerRuntimeStatus.ErrorHostConnectionLost ||
            //lastServerState == VisiWin.System.Project.ServerRuntimeStatus.ErrorNoRuntime ||

            var socketErrorState =
                lastSocketState == VisiWin.System.Client.CommunicationState.Closing ||
                lastSocketState == VisiWin.System.Client.CommunicationState.Closed;


            if (clientOkState && serverOkState && socketOkState && (VisiWin.AppServices.NavigationService.currentViewName.includes("LightKeyboardDialog") || isPreloaded)) {
                if (VisiWin.Application && VisiWin.Application.show && VisiWin.Application.show.show !== "login") {
                    if (VisiWin.AppServices.NavigationService.preloadingObject.preloadingReady === true) {
                        VisiWin.Application.show.show = "content";
                    }
                }
            }
            if (clientErrorState || serverErrorState || socketErrorState) {
                if (VisiWin.Application && VisiWin.Application.show && VisiWin.Application.show.show !== "login") {
                    if (!this.isLocalHost()) {
                        VisiWin.Application.show.show = "error";
                    }
                }
            }
        },

        closeDialogsFunction: function () {

            // der Dialog wird oben in dem Dom eingefügt.
            const eles = document.querySelectorAll(".vw-popup"); // wir haben dafür immer die class="vw-popup"
            for (const key in eles) {
                if (eles[key].winControl) {
                    eles[key].winControl.hidden = true;
                }
            }

            //for (var i in VisiWin.UI.pages) {
            //    // über alle seiten suchen
            //    const aPage = VisiWin.UI.pages[i];
            //    // wenn der dialog aus dem ordner dialog kommt 
            //    if (typeof(aPage.winControl) != "undefined") {
            //        if (VisiWin.Internal.stringContains(aPage.winControl.uri, "dialog")) {
            //            //suchen ob es eine dialogview gibt
            //            if (typeof(aPage.winControl) != "undefined") {
            //                var iLength= aPage.winControl.element.children.length;
            //                for (var i = 0; i < iLength; i++) {
            //                    if (typeof(aPage.winControl) != "undefined") {
            //                        if (aPage.winControl.element.children[i].__VWELEMENT__ == "DialogView") {
            //                            // den dialog verstecken
            //                            aPage.winControl.element.children[i].winControl._dialogControl.hide();
            //                        }
            //                    }
            //                }
            //            }
            //        }
            //    }
            //}
        },

        closeErrorViewFunction: function () {

            // der Dialog wird oben in dem Dom eingefügt.
            const eles = document.getElementsByClassName('error vw-region'); // wir haben dafür immer die class="error vw-region"
            for (const key in eles) {
                if (eles[key].winControl) {
                    eles[key].winControl.hidden = true;
                }
            }

            //for (var i in VisiWin.UI.pages) {
            //    // über alle seiten suchen
            //    const aPage = VisiWin.UI.pages[i];
            //    // wenn der dialog aus dem ordner dialog kommt 
            //    if (typeof(aPage.winControl) != "undefined") {
            //        if (VisiWin.Internal.stringContains(aPage.winControl.uri, "dialog")) {
            //            //suchen ob es eine dialogview gibt
            //            if (typeof(aPage.winControl) != "undefined") {
            //                var iLength= aPage.winControl.element.children.length;
            //                for (var i = 0; i < iLength; i++) {
            //                    if (typeof(aPage.winControl) != "undefined") {
            //                        if (aPage.winControl.element.children[i].__VWELEMENT__ == "DialogView") {
            //                            // den dialog verstecken
            //                            aPage.winControl.element.children[i].winControl._dialogControl.hide();
            //                        }
            //                    }
            //                }
            //            }
            //        }
            //    }
            //}
        },

        clientServiceChangeFunction: function (state) {
            var restart = true;
            var statusText = "Client: Client cannot load";
            var icon = "cancel";
            var iconcolor = "#e60030";

            const stateObj = {
                ClientString: VisiWin.System.Client.ClientState[state],
                State: state,
            };

            if (state != VisiWin.System.Client.ClientState.Paused && state != VisiWin.System.Client.ClientState.Running && state != VisiWin.System.Client.ClientState.CommunicationUnclear && state !== undefined) {
                this.closeDialogsFunction();
            }

            switch (state) {
                case VisiWin.System.Client.ClientState.Unloaded:
                    statusText = "Client: Client start has not been triggered yet.";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                case VisiWin.System.Client.ClientState.Starting:
                    statusText = "Client: Client is starting.";
                    icon = "check_circle";
                    iconcolor = "#a1c85e";
                    break;
                case VisiWin.System.Client.ClientState.Running:
                    statusText = "Client: Client is running.";
                    icon = "check_circle";
                    iconcolor = "#a1c85e";
                    break;
                case VisiWin.System.Client.ClientState.Stopped:
                    statusText = "Client: Client is stopping.";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                case VisiWin.System.Client.ClientState.Paused:
                    statusText = "Client: Client does not communicate. No user logged on.";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                case VisiWin.System.Client.ClientState.OnExit:
                    statusText = "Client: Client is shutting down.";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                case VisiWin.System.Client.ClientState.Error:
                    statusText = "Client: Client is starting.";
                    icon = "check_circle";
                    iconcolor = "#a1c85e";
                    break;
                case VisiWin.System.Client.ClientState.SocketNotAvailable:
                    statusText = "Client: Client cannot communicate. Socket is not available, client must be restarted. Please try to reload.";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                case VisiWin.System.Client.ClientState.CommunicationUnclear:
                    statusText = "Client: Client cannot communicate. Possible PingPong timeout between gateway and client. Please check network connection!";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                case VisiWin.System.Client.ClientState.Uncertain:
                    statusText = "Client: Client ran into PingPong timeout. Communication may be unstable. Please check network connection!";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                case VisiWin.System.Client.ClientState.RestartRequired:
                    statusText = "Client: The server was restarted, so the client must be restarted. Please try to reload.";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                default:
                    statusText = "Unknown state:" + state;
            }
            document.getElementById("labelClientState").style.visibility = "visible";
            var e = document.getElementById("labelClientState");
            if (e) {
                e.winControl.text = statusText;
                e.winControl.symbol = icon;
                e.winControl.symbolForegroundColor = iconcolor;
            }
            if (/MSIE|Trident/.test(window.navigator.userAgent)) {
                //IE specific code goes here               
                var e = document.getElementById("labelClientState");
                if (e) {
                    e.winControl.text = 'Microsoft Internet Explorer is not supported! \nPlease use Google Chrome, Mozilla Firefox, Microsoft Edge, Apple Safari...';
                    e.winControl.symbol = "cancel";
                    e.winControl.symbolForegroundColor = "#e60030";
                }
                //if (VisiWin.Application && VisiWin.Application.show && VisiWin.Application.show.show !== "login") 
                //{
                //VisiWin.Application.show.show = "error";
                //}
            }

            lastClientState = state;

            this.showContentOrErrorViewFunction();
        },

        serverProjectStateChangeFunction: function (state) {
            var restart = true;
            var statusText = "Server: Server is not available";
            var icon = "cancel";
            var iconcolor = "#e60030";

            const stateObj = {
                ServerProjectString: VisiWin.System.Project.ServerRuntimeStatus[state],
                State: state
            };

            if (state != VisiWin.System.Project.ServerRuntimeStatus.Running && state != VisiWin.System.Project.ServerRuntimeStatus.Loaded) {
                this.closeDialogsFunction();
            }

            switch (state) {
                case VisiWin.System.Project.ServerRuntimeStatus.Unloaded:
                    statusText = "Server: Server project is unloaded. Please try to reload.";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                case VisiWin.System.Project.ServerRuntimeStatus.Loaded:
                    statusText = "Server: Server project is loaded.";
                    icon = "check_circle";
                    iconcolor = "#a1c85e";
                    break;
                case VisiWin.System.Project.ServerRuntimeStatus.Starting:
                    statusText = "Server: Server project is starting.";
                    icon = "check_circle";
                    iconcolor = "#a1c85e";
                    break;
                case VisiWin.System.Project.ServerRuntimeStatus.Running:
                    statusText = "Server: Server project is running.";
                    icon = "check_circle";
                    iconcolor = "#a1c85e";
                    break;
                case VisiWin.System.Project.ServerRuntimeStatus.Stopped:
                    statusText = "Server: Server project is stopped. Please try to reload.";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                case VisiWin.System.Project.ServerRuntimeStatus.OnExit:
                    statusText = "Server: Server project is exiting. Please try to reload.";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                case VisiWin.System.Project.ServerRuntimeStatus.ErrorOnLoading:
                    statusText = "Server: ErrorOnLoading.";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                case VisiWin.System.Project.ServerRuntimeStatus.RunningWithTimeout:
                    statusText = "Server: RunningWithTimeout.";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                case VisiWin.System.Project.ServerRuntimeStatus.RunningWithError:
                    statusText = "Server: RunningWithError.";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                case VisiWin.System.Project.ServerRuntimeStatus.ErrorOnStarting:
                    statusText = "Server: ErrorOnStarting.";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                case VisiWin.System.Project.ServerRuntimeStatus.ErrorWatchDog:
                    statusText = "Server: ErrorWatchDog.";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                case VisiWin.System.Project.ServerRuntimeStatus.ErrorUnhandledException:
                    statusText = "Server: ErrorUnhandledException.";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                case VisiWin.System.Project.ServerRuntimeStatus.ErrorFatal:
                    statusText = "Server: ErrorFatal.";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                case VisiWin.System.Project.ServerRuntimeStatus.ErrorDoesNotExist:
                    statusText = "Server: ErrorDoesNotExist.";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                case VisiWin.System.Project.ServerRuntimeStatus.ErrorNoConfiguration:
                    statusText = "Server: ErrorNoConfiguration.";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                case VisiWin.System.Project.ServerRuntimeStatus.ErrorHostConnectionLost:
                    statusText = "Server: ErrorHostConnectionLost.";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                case VisiWin.System.Project.ServerRuntimeStatus.ErrorNoLicense:
                    if (!this.isLocalHost()) {
                        statusText = "Server: ErrorNoLicense - Various causes can be responsible here. Please check the license on the device or the number of usable process variables or the number of usable clients!";
                        icon = "cancel";
                        iconcolor = "#e60030";
                    }
                    else {
                        VisiWin.Application.Settings.System.DebugLogLevel = 5;
                        statusText = "Server: ErrorNoLicense - In the simulation mode a second web client is not allowed!";
                        icon = "cancel";
                        iconcolor = "#e60030";
                    }
                    break;
                case VisiWin.System.Project.ServerRuntimeStatus.ErrorNoRuntime:
                    statusText = "Server: ErrorNoRuntime.";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                case VisiWin.System.Project.ServerRuntimeStatus.ErrorPowerDown:
                    statusText = "Server: PLC power down. Please check the voltage supply of the controller!";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                case VisiWin.System.Project.ServerRuntimeStatus.InvalidProjectRegistration:
                    statusText = "Server: InvalidProjectRegistration.";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                default:
                    statusText = "Unknown state: " + state;
            }

            //if (lastServerState != VisiWin.System.Project.ServerRuntimeStatus.ErrorNoLicense)
            //{
            //if (!this.isLocalHost())
            //{
            document.getElementById("labelServerState").style.visibility = "visible";
            var e = document.getElementById("labelServerState");
            if (e) {
                e.winControl.text = statusText;
                e.winControl.symbol = icon;
                e.winControl.symbolForegroundColor = iconcolor;
            }
            lastServerState = state;
            //}
            //}

            this.showContentOrErrorViewFunction();
        },

        socketChangeFunction: function (state) {
            var statusText = "Socket: Connection is lost";
            var icon = "cancel";
            var iconcolor = "#e60030";

            let stateObj = {
                SocketString: VisiWin.System.Client.CommunicationState[state],
                State: state
            };

            if (state == VisiWin.System.Client.CommunicationState.Closing || state == VisiWin.System.Client.CommunicationState.Closed) {
                this.closeDialogsFunction();
            }


            switch (state) {
                case VisiWin.System.Client.CommunicationState.Connecting:
                    statusText = "Socket: Connection is established.";
                    icon = "check_circle";
                    iconcolor = "#a1c85e";
                    break;
                case VisiWin.System.Client.CommunicationState.Open:
                    statusText = "Socket: Connection to server is open.";
                    icon = "check_circle";
                    iconcolor = "#a1c85e";
                    break;
                case VisiWin.System.Client.CommunicationState.Closing:
                    statusText = "Socket: Connection is closing.";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                case VisiWin.System.Client.CommunicationState.Closed:
                    statusText = "Socket: Connection to server is not available. Please check if your controller is running.";
                    icon = "cancel";
                    iconcolor = "#e60030";
                    break;
                default:
                    statusText = "Unknown State: " + state;
            }

            document.getElementById("labelSocketState").style.visibility = "visible";
            var e = document.getElementById("labelSocketState");
            if (e) {
                e.winControl.text = statusText;
                e.winControl.symbol = icon;
                e.winControl.symbolForegroundColor = iconcolor;
            }

            lastSocketState = state;

            this.showContentOrErrorViewFunction();
        },

        // Wird angesprungen, wenn die neue Seite fertig gerendert worden ist.
        // Erst mit der ready Function kann auf Elemente und Controls der Seite zugegriffen werden.
        // "PageMode":"None"  	ready wird bei jedem Laden der Seite aufgerufen
        // "PageMode":"Cache" 	ready wird nur beim ersten Laden der Seite aufgerufen
        ready: function (element, options) {

            this.buttonElement = document.getElementById("error-view-reload-button");
            if (this.buttonElement && this.buttonElement.winControl) {
                this.buttonElement.winControl.addEventListener("buttonclick", this.boundOnClickHandler);
            }

            if (this.isLocalHost()) {
                VisiWin.Application.Settings.System.DebugLogLevel = 5;
            }

            this.serverProjectStateChangeFunction(VisiWin.System.Project.ProjectService.getService().ServerRuntimeStatus);
            this.socketChangeFunction(VisiWin.System.Client.ClientService.getService().CommunicationState);
            this.clientServiceChangeFunction(VisiWin.System.Client.ClientService.getService().ClientState);

            //check if ei
            if (/MSIE|Trident/.test(window.navigator.userAgent)) {
                var statusText = 'Microsoft Internet Explorer is not supported! \nPlease use Google Chrome, Mozilla Firefox, Microsoft Edge, Apple Safari...';
                alert(statusText);
            } else {
                document.getElementById("labelUnkownState").style.visibility = "hidden";
                document.getElementById("labelClientState").style.visibility = "hidden";
                document.getElementById("labelServerState").style.visibility = "hidden";
                document.getElementById("labelSocketState").style.visibility = "hidden";
                var ErrorLog = VisiWin.System.Diagnostics.Logger.ErrorLog;
                var WarnLog = VisiWin.System.Diagnostics.Logger.WarnLog;
                var InfoLog = VisiWin.System.Diagnostics.Logger.InfoLog;
                var currentLogList = new WinJS.Binding.List([]);
                var iLog = InfoLog;
                iLog.addObserver(logInfoMessage);
                var wLog = WarnLog;
                wLog.addObserver(logWarnMessage);
                var eLog = ErrorLog;
                eLog.addObserver(logErrorMessage);

                function logErrorMessage(msg, obj) {
                    ApplicationLog(VisiWin.Utilities.getFirstStackEntry(msg) + " " + VisiWin.Utilities.getFirstStackEntry(JSON.stringify(obj)), 4);
                }

                function logWarnMessage(msg, obj) {
                    ApplicationLog(VisiWin.Utilities.getFirstStackEntry(msg) + " " + VisiWin.Utilities.getFirstStackEntry(JSON.stringify(obj)), 3);
                }

                function logInfoMessage(msg, obj) {
                    ApplicationLog(VisiWin.Utilities.getFirstStackEntry(msg) + " " + VisiWin.Utilities.getFirstStackEntry(JSON.stringify(obj)), 2);
                }

                function ApplicationLog(msg, level, stack) {
                    if (level == 4) {
                        var success = msg.includes("Lizenz") || msg.includes("license");
                        if (success) {
                            isLicenseError = true;
                            document.getElementById("labelUnkownState").style.visibility = "visible";
                            var e = document.getElementById("labelUnkownState");

                            if (e) {
                                e.winControl.text = msg;
                                e.winControl.symbol = "cancel";
                                e.winControl.symbolForegroundColor = "#e60030";
                            }
                        }
                        if (!isLicenseError) {
                            document.getElementById("labelUnkownState").style.visibility = "visible";
                            var e = document.getElementById("labelUnkownState");

                            if (e) {
                                if (e.winControl.text == "Status is unkown") {
                                    e.winControl.text = msg;
                                    e.winControl.symbol = "cancel";
                                    e.winControl.symbolForegroundColor = "#e60030";
                                }
                            }
                        }
                    }
                    window.setImmediate(function (args) {
                        VisiWin.Application.currentLogList.push({
                            msg: msg,
                            level: level,
                            time: new Date(),
                            stack: stack
                        });
                    });
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
        },

        // Tritt beim Rendern der zugehörigen HTML-Seite oder beim Bearbeiten dieser Javascript Seite eine Exception auf,
        // so wird in diese Funktion verzweigt. Im Parameter args sind weitere Informationen zu dem Fehler verfügbar.
        error: function (args) {
            console.log("Error in page views/ErrorView.html, look at args in error function");
            //debugger;
        },

        clientServiceChangeHandler: function (state) {
            this.clientServiceChangeFunction(state);
        },

        serverProjectStateChange: function (state) {
            this.serverProjectStateChangeFunction(state);
        },

        socketChangeHandler: function (state) {
            this.socketChangeFunction(state);
        },

        _onClickHandler: function (args) {

            if (VisiWin.Utilities.isInDesignMode()) {
                return;
            }
            if (VisiWin.AppServices.NavigationService.preloadingObject && VisiWin.AppServices.NavigationService.preloadingObject.preloadingEnable === true) {
                location.reload();
            }
            return null;

        }
    });
})();

