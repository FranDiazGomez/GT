/*
easy-ui-project-startup-page - Startup page of the of the EASY UI project
@version v1.0.4
*/
"use strict";var Index;!function(e){(e=(e=e.Enums||(e.Enums={})).CheckForWebSocket||(e.CheckForWebSocket={})).BeforeInfo="BeforeInfo",e.ShowInfo="ShowInfo",e.AfterInfo="AfterInfo"}(Index=Index||{}),function(e){(e=(e=e.Enums||(e.Enums={})).Colors||(e.Colors={})).Primary="#209cdf",e.Foreground="#000",e.Success="#47af64",e.Warning="#F49800",e.Error="#e20f32"}(Index=Index||{}),function(e){(e=(e=e.Enums||(e.Enums={})).LenzeIcons||(e.LenzeIcons={})).StatusOk="status_ok",e.DevicesNew="devices_new",e.RadioButtonOff="radio_button_off",e.AlertActive="alert_active",e.AlertInactive="alert_inactive",e.Error="error",e.Refresh="refresh",e.InfoActive="info_active"}(Index=Index||{}),function(e){(e=(e=e.Enums||(e.Enums={})).LoadingLineAnimation||(e.LoadingLineAnimation={})).None="None",e.ToLeft="ToLeft",e.ToRight="ToRight"}(Index=Index||{}),function(e){(e=(e=e.Enums||(e.Enums={})).ProjectRunningMode||(e.ProjectRunningMode={})).Unknown="Unknown",e.Simulation="Simulation",e.Device="Device"}(Index=Index||{}),function(e){(e=(e=e.Enums||(e.Enums={})).ProjectType||(e.ProjectType={})).Unknown="Unknown",e.Diagnosis="Diagnosis",e.EasyUi="EasyUi"}(Index=Index||{}),function(e){(e=(e=e.Enums||(e.Enums={})).Services||(e.Services={}))[e.Server=0]="Server",e[e.Client=1]="Client",e[e.Communication=2]="Communication",e[e.StartUpInfo=3]="StartUpInfo"}(Index=Index||{}),function(e){(e=(e=e.Enums||(e.Enums={})).StartupStates||(e.StartupStates={})).Init="Init",e.ErrorNoWebSocketSupport="ErrorNoWebSocketSupport",e.UrlDevice_ProjectDevice="UrlDevice_ProjectDevice",e.UrlSimulation_ProjectSimulation="UrlSimulation_ProjectSimulation",e.UrlDevice_ProjectSimulation="UrlDevice_ProjectSimulation",e.UrlSimulation_ProjectDevice="UrlSimulation_ProjectDevice",e.UrlUnknownOrProjectUnknown="UrlUnknownOrProjectUnknown",e.OpenWebSocketForDevice="OpenWebSocketForDevice",e.OpenWebSocketForSimulation="OpenWebSocketForSimulation",e.CheckForWebSocket="CheckForWebSocket",e.CheckForWebSocketAfterInfo="CheckForWebSocketAfterInfo",e.UnableToGetWebSocket="UnableToGetWebSocket",e.WebSocketOpen="WebSocketOpen",e.LoadingAppLoader="LoadingAppLoader",e.ConnectionRunning="ConnectionRunning",e.ProjectRunning="ProjectRunning",e.AlarmSystemRunning="AlarmSystemRunning",e.TrendSystemRunning="TrendSystemRunning",e.LoggingSystemRunning="LoggingSystemRunning",e.RecipeSystemRunning="RecipeSystemRunning",e.ServerLoaded="ServerLoaded",e.ServerRunning="ServerRunning",e.AppShellReady="AppShellReady"}(Index=Index||{}),function(e){(e=(e=e.Enums||(e.Enums={})).WebsocketSecurity||(e.WebsocketSecurity={})).NotSecure="ws",e.Secure="wss"}(Index=Index||{}),function(t){(t.Helpers||(t.Helpers={})).AppSettings=class{get availableLanguages(){return this._availableLanguages}get designtimeLanguage(){return this._designtimeLanguage}get runtimeLanguage(){return this._runtimeLanguage}get projectRunningMode(){return this._projectRunningMode}get autoLogin(){return this._autoLogin}get webSocketPort(){return this._webSocketPort}get webSocketUriParameter(){return this._webSocketUriParameter}constructor(e,t){this._appSettings=e,this._appSettingsServices=t,this._availableLanguages=[],this._getAvailableLanguages(),this._designtimeLanguage=this._getSetLanguage(null==(e=null==(t=null==(e=this._appSettingsServices)?void 0:e.AppServices)?void 0:t.LanguageService)?void 0:e.DesigntimeLanguage),this._runtimeLanguage=this._getSetLanguage(null==(t=null==(e=null==(t=this._appSettingsServices)?void 0:t.AppServices)?void 0:e.LanguageService)?void 0:t.RuntimeLanguage),this._getProjectRunningMode(),this._getAutoLogin(),this._webSocketPort=null==(e=this._appSettings)?void 0:e.WebSocketPort,this._webSocketUriParameter=null==(t=this._appSettings)?void 0:t.WebSocketUriParameter}_getAvailableLanguages(){var e=null==(e=null==(e=null==(e=this._appSettingsServices)?void 0:e.AppServices)?void 0:e.LanguageService)?void 0:e.Locales;if(!(e&&Array.isArray(e)&&0<e.length))throw new Error("Array is empty!");e.forEach(e=>{e=null==e?void 0:e.Name;e&&this._availableLanguages.push(e)})}_getSetLanguage(e){return"string"==typeof e?e:this._availableLanguages[0]}_getProjectRunningMode(){var e;null!=(e=this._appSettings)&&e.WebSocketUriParameter?this._projectRunningMode=t.Enums.ProjectRunningMode.Device:null!=(e=this._appSettings)&&e.WebSocketPort?this._projectRunningMode=t.Enums.ProjectRunningMode.Simulation:this._projectRunningMode=t.Enums.ProjectRunningMode.Unknown}_getAutoLogin(){var e=null==(e=null==(e=this._appSettings)?void 0:e.Client)?void 0:e.AutoLogin;this._autoLogin="boolean"==typeof e&&e}}}(Index=Index||{}),function(e){(e.Helpers||(e.Helpers={})).Files=class{static async readJsonAsync(e){return await(await fetch(e)).json()}}}(Index=Index||{}),function(d){(d.Helpers||(d.Helpers={})).General=class{static getLocaleStorage(e){return localStorage.getItem(e)}static setLocalStorage(e,t){return!!e&&("string"==typeof t&&localStorage.setItem(e,t),"number"==typeof t&&localStorage.setItem(e,t.toString()),!0)}static getUrlQueryString(){var e="lenze-showStartUpLog",t={showStartUpLog:!1};return null!==new URLSearchParams(window.location.search).get(e)?(t.showStartUpLog=!0,console.log(`%cUse the url parameter "${e}" only for debugging!`,"color: red; background-color:yellow; font-weight: bold; padding: 0.4em 0.8em; ")):console.log(`Use url parameter "${e}" to show a more detailed console log.`),t}static getCurrentIpAddress(){return window.location.hostname}static getCurrentSecurity(){return window.isSecureContext?d.Enums.WebsocketSecurity.Secure:d.Enums.WebsocketSecurity.NotSecure}static getProjectTypeFromUrl(){var e=window.location.pathname.split("/");if(4==e.length){if("easyui"==e[1])return d.Enums.ProjectType.EasyUi;if("diagnosis"==e[1])return d.Enums.ProjectType.Diagnosis}return d.Enums.ProjectType.Unknown}static getEasyUiProjectName(){var e=window.location.pathname.split("/");return 4==e.length?(e=e[2]).endsWith("_Client")?e.slice(0,-"_Client".length):e:null}static getProjectRunningModeFromUrl(){return"localhost"===window.location.hostname?d.Enums.ProjectRunningMode.Simulation:d.Enums.ProjectRunningMode.Device}static generateString(e,t){return 0==e?"":new Array(e+1).join(t)}static generateBar(e,t,n,o){return e<0||t<=0||n<=0?"":(e=Math.round(e/t*n),d.Helpers.General.generateString(e,o))}static stateMachineShowAllTimes(t,n){var o=[],i=[];for(let e=1;e<t.length;e++){var s=n[e]-n[e-1];i.push(Math.round(s)/1e3),o.push(`${e}: ${t[e-1]} --> `+t[e])}var r=[],l={},a=Math.max(...i);for(let e=0;e<i.length;e++)r[e]=d.Helpers.General.generateBar(i[e],a,30,":"),l[o[e]]={time_in_seconds:i[e].toFixed(3),compare:r[e]};return l}static stateMachineShowStartToFinishTime(e,t){var n=e[0],e=e[e.length-1],o=t[0];return`${n} --> ${e}: ${((t[t.length-1]-o)/1e3).toFixed(3)} s`}static async getVersions(e,t){let n={};return await fetch(e).then(e=>e.text()).then(e=>{e=function(e){try{var t=e.split(" | ")[2].split(" + ");return[t[0],t[1].split(" ")[0]]}catch(e){return["?","?"]}}(e.split("\n")[0]);n.VisiWinJs={version:e[0],date:e[1]}}).catch(),await fetch(t).then(e=>e.text()).then(e=>{var t=function(){try{return[e.split(": ")[1].split(" ")[0].slice(1,-1),"?"]}catch(e){return["?","?"]}}(e.split("\n")[0]);n["Lenze lib"]={version:t[0],date:t[1]}}).catch(),n}static consoleHelloMessage(){console.log("%cWelcome to EASY UI!","color: white; background: #004da0; font-size: 2em; padding: 0.4em 0.8em;")}}}(Index=Index||{}),function(e){(e.Helpers||(e.Helpers={})).Localization=class{static getLocalText(e,t){return void 0===e?"_"+t:e}}}(Index=Index||{}),function(e){(e.Helpers||(e.Helpers={})).Time=class{static async setTimeoutAsync(t){return new Promise(e=>{setTimeout(e,t)})}}}(Index=Index||{}),function(e){(e.UI||(e.UI={})).Button=class{constructor(e,t,n,o,i){this._symbol=e,this._symbolColor=t,this._text=n,this.linkHref=o,this.linkTitle=i,this.element=document.createElement("a"),this.element.className="index-help-box-button",this.element.href=this.linkHref,this.element.title=this.linkTitle,this._symbolElement=document.createElement("div"),this._symbolElement.className="index-help-box-button-symbol lenze-icons",this.setSymbol(this._symbol),this.setSymbolColor(this._symbolColor),this._textElement=document.createElement("div"),this._textElement.className="index-help-box-button-text",this.setText(this._text),this.element.appendChild(this._symbolElement),this.element.appendChild(this._textElement)}setSymbol(e){this._symbolElement.textContent=e}setSymbolColor(e){this._symbolElement.style.color=e}setText(e){this._textElement.textContent=e}}}(Index=Index||{}),function(t){(t.UI||(t.UI={})).ConnectionAnimation=class{constructor(e){var t=document.getElementById(e);if(!(t instanceof HTMLDivElement))throw new Error(`Id "${e}" not found`);this._element=t,this._initChildren()}_initChildren(){if(3!=this._element.childElementCount)throw new Error("Wrong children");this._clientSpanElement=this._element.children[0],this._lineDivElement=this._element.children[1],this._serverSpanElement=this._element.children[2]}setLoadingAnimation(e){switch(e){case t.Enums.LoadingLineAnimation.ToLeft:this._lineDivElement.classList.remove("move-right"),this._lineDivElement.classList.add("move-left");break;case t.Enums.LoadingLineAnimation.ToRight:this._lineDivElement.classList.remove("move-left"),this._lineDivElement.classList.add("move-right");break;default:t.Enums.LoadingLineAnimation.None;this._lineDivElement.classList.remove("move-left"),this._lineDivElement.classList.remove("move-right")}}setClientColor(e){this._clientSpanElement.style.color=e}setServerColor(e){this._serverSpanElement.style.color=e}}}(Index=Index||{}),function(e){(e.UI||(e.UI={})).HelpBox=class{constructor(e,t,n){this._headerSymbol=e,this._headerSymbolColor=t,this._headerText=n,this.element=document.createElement("div"),this.element.className="index-help-box",this.element.style.animation="fade-in 1s",this._headerElement=document.createElement("div"),this._headerElement.className="index-help-box-header",this._headerSymbolElement=document.createElement("span"),this._headerSymbolElement.className="index-help-box-header-symbol lenze-icons",this.setHeaderSymbol(this._headerSymbol),this.setHeaderSymbolColor(this._headerSymbolColor),this._headerTextElement=document.createElement("span"),this._headerTextElement.className="index-help-box-header-text",this.setHeaderText(this._headerText),this.bodyElement=document.createElement("div"),this.bodyElement.className="index-help-box-body",this.element.appendChild(this._headerElement),this.element.appendChild(this.bodyElement),this._headerElement.appendChild(this._headerSymbolElement),this._headerElement.appendChild(this._headerTextElement)}setHeaderSymbol(e){this._headerSymbolElement.textContent=e}setHeaderSymbolColor(e){this._headerSymbolElement.style.color=e}setHeaderText(e){this._headerTextElement.textContent=e}}}(Index=Index||{}),function(t){(t.UI||(t.UI={})).Label=class{get showSymbol(){return this._showSymbol}set showSymbol(e){e?this.symbolElement.element.style.removeProperty("display"):this.symbolElement.element.style.display="none"}constructor(e){this._text=e,this.element=document.createElement("div"),this.element.className="index-splash-label",this.symbolElement=new t.UI.Symbol,this.symbolElement.element.className="index-splash-label-symbol",this.textElement=document.createElement("span"),this.textElement.className="index-splash-label-text",this.textElement.textContent=this._text,this.element.appendChild(this.symbolElement.element),this.element.appendChild(this.textElement),this.showSymbol=!1}setText(e){return e!==this._text&&(this._text=e,this.textElement.textContent=this._text,!0)}}}(Index=Index||{}),function(e){(e.UI||(e.UI={})).ProgressBarItem=class{constructor(e,t,n,o){this._symbol=e,this._symbolColor=t,this._isLoading=n,this._text=o,this.element=document.createElement("div"),this.element.className="step",this.element.style.animation="fade-in 1s",this._stepIllustrationElement=document.createElement("div"),this._stepIllustrationElement.className="step-illustration",this._stepIllustrationIconElement=document.createElement("div"),this._stepIllustrationIconElement.className="step-illustration-symbol",1==this._isLoading?this.setLoadingAnimation(this._symbolColor):(this.setSymbol(this._symbol),this.setSymbolColor(this._symbolColor)),this._stepIllustrationLineElement=document.createElement("div"),this._stepIllustrationLineElement.className="step-illustration-line",this._textElement=document.createElement("span"),this._textElement.className="step-text",this._textElement.style.animation="from-right 1s",this._setText(this._text),this.element.appendChild(this._stepIllustrationElement),this.element.appendChild(this._textElement),this._stepIllustrationElement.appendChild(this._stepIllustrationIconElement),this._stepIllustrationElement.appendChild(this._stepIllustrationLineElement)}setSymbol(e){this._isLoading=!1,this._stepIllustrationIconElement.textContent="";var t=document.createElement("span");t.className="lenze-icons",t.innerText=e,this._stepIllustrationIconElement.appendChild(t)}setLoadingAnimation(e){this._isLoading=!0,this._stepIllustrationIconElement.innerHTML=`<svg class="splash__spinner" viewBox="25 25 50 50"><circle class="splash__spinner-path" cx="50" cy="50" r="20" fill="none" stroke="${e}" stroke-width="4.5"></circle></svg>`}setSymbolColor(e){this._isLoading?this.setLoadingAnimation(e):this._stepIllustrationIconElement.style.color=e}_setText(e){this._text=e.trim(),this._textElement.textContent=this._text}changeText(e){e=e.trim();e!==this._text&&(this._textElement.style.opacity="0",this._setText(e),this._textElement.style.opacity="1")}}}(Index=Index||{}),function(s){(s.UI||(s.UI={})).ProgressBar=class{constructor(e){this.stepElements=[];var t=document.getElementById(e);if(!(t instanceof HTMLDivElement))throw new Error(`Id "${e}" not found`);this._element=t}addStep(e,t,n,o,i){e=new s.UI.ProgressBarItem(e,t,n,o);this.stepElements.push(e),this._element.appendChild(e.element),1<this.stepElements.length&&i&&this.setStepDone(this.stepElements.length-2)}setStepDone(e){this.stepElements[e].setSymbol(s.Enums.LenzeIcons.StatusOk),this.stepElements[e].setSymbolColor("var(--color-lenze-green)")}setStepWarning(e){this.stepElements[e].setSymbol(s.Enums.LenzeIcons.DevicesNew),this.stepElements[e].setSymbolColor("var(--color-lenze-orange)")}setStepError(e){this.stepElements[e].setSymbol(s.Enums.LenzeIcons.Error),this.stepElements[e].setSymbolColor("var(--color-lenze-red)")}}}(Index=Index||{}),function(e){(e.UI||(e.UI={})).Symbol=class{constructor(){this.element=document.createElement("div"),this._symbol=e.Enums.LenzeIcons.StatusOk,this._symbolColor=e.Enums.Colors.Foreground,this._isLoading=!1,this.setColor(this._symbolColor),this.setSymbol(this._symbol)}setLoadingAnimation(){this._isLoading=!0,this.element.innerHTML=`<svg class="splash__spinner" viewBox="25 25 50 50"><circle class="splash__spinner-path" cx="50" cy="50" r="20" fill="none" stroke="${this._symbolColor}" stroke-width="4.5"></circle></svg>`}setSymbol(e){this.element.innerHTML=`<span class="lenze-icons">${e}</span>`}setColor(e){this._symbolColor=e,this.element.style.color=this._symbolColor,this._isLoading&&this.setLoadingAnimation()}}}(Index=Index||{}),(async()=>{var e;try{if(VisiWin.Utilities.isInDesignMode())return}catch(e){}Index.Helpers.General.consoleHelloMessage();let d=Index.Helpers.General.getUrlQueryString(),t=[],n=[];null!==d&&void 0!==d&&d.showStartUpLog&&(t.push("LoadingData"),n.push(performance.now()));const o={startUpPageConfig:"./index/start-up-page-config.json",appSettings:"./appsettings/appsettings.json",appSettingsServices:"./appsettings/appsettings.services.json",visiWinAppLoader:"./libs/visiwin/apploader.min.js",visiWinJs:"./libs/visiwin/visiwinjs.min.js",lenzeLibJs:"./libs/lenze/lenze-lib.min.js",localization:{en_US:"./index/localization/strings_en-US.json",de_DE:"./index/localization/strings_de-DE.json"}},i="Inosoft_VisiWin7_EASY_Web_UI_RuntimeLanguage";var s=["en-US","de-DE"];null!==d&&void 0!==d&&d.showStartUpLog&&(console.group("Version information"),console.table(await Index.Helpers.General.getVersions(o.visiWinJs,o.lenzeLibJs)),console.groupEnd());y=null===o||void 0===o?void 0:o.startUpPageConfig,y=await Index.Helpers.Files.readJsonAsync(y);const r=await{startupSettings:{webSocketRequestIntervalInSeconds:"number"==typeof(null==(u=null==y?void 0:y.startupSettings)?void 0:u.webSocketRequestIntervalInSeconds)?null==(u=null==y?void 0:y.startupSettings)?void 0:u.webSocketRequestIntervalInSeconds:1,connectionAttempts:{beforeInfoMessage:"number"==typeof(null==(u=null==(u=null==y?void 0:y.startupSettings)?void 0:u.connectionAttempts)?void 0:u.beforeInfoMessage)?null==(u=null==(u=null==y?void 0:y.startupSettings)?void 0:u.connectionAttempts)?void 0:u.beforeInfoMessage:15,afterInfoMessage:"number"==typeof(null==(u=null==(u=null==y?void 0:y.startupSettings)?void 0:u.connectionAttempts)?void 0:u.afterInfoMessage)?null==(u=null==(u=null==y?void 0:y.startupSettings)?void 0:u.connectionAttempts)?void 0:u.afterInfoMessage:0}},ui:{elementIDs:{projectName:"string"==typeof(null==(u=null==(u=null==y?void 0:y.ui)?void 0:u.elementIDs)?void 0:u.projectName)?null==(u=null==(u=null==y?void 0:y.ui)?void 0:u.elementIDs)?void 0:u.projectName:"index-splash-project-name",projectDescription:"string"==typeof(null==(u=null==(u=null==y?void 0:y.ui)?void 0:u.elementIDs)?void 0:u.projectDescription)?null==(u=null==(u=null==y?void 0:y.ui)?void 0:u.elementIDs)?void 0:u.projectDescription:"index-splash-project-description",status:"string"==typeof(null==(u=null==(u=null==y?void 0:y.ui)?void 0:u.elementIDs)?void 0:u.status)?null==(u=null==(u=null==y?void 0:y.ui)?void 0:u.elementIDs)?void 0:u.status:"index-splash-status",gifAnimation:"string"==typeof(null==(u=null==(u=null==y?void 0:y.ui)?void 0:u.elementIDs)?void 0:u.gifAnimation)?null==(u=null==(u=null==y?void 0:y.ui)?void 0:u.elementIDs)?void 0:u.gifAnimation:"index-splash-gif"},style:{simulationModeTextForegroundColor:"string"==typeof(null==(u=null==(u=null==y?void 0:y.ui)?void 0:u.style)?void 0:u.simulationModeTextForegroundColor)?null==(y=null==(u=null==y?void 0:y.ui)?void 0:u.style)?void 0:y.simulationModeTextForegroundColor:"#f00"}}},l=(null!==d&&void 0!==d&&d.showStartUpLog&&(console.groupCollapsed("Start-up-page external files"),console.log("startUpPageConfig:",r),console.groupEnd()),new Index.Helpers.AppSettings(await Index.Helpers.Files.readJsonAsync(o.appSettings),await Index.Helpers.Files.readJsonAsync(o.appSettingsServices))),a=Index.Helpers.General.getLocaleStorage(i);a&&l.availableLanguages.includes(a)||Index.Helpers.General.setLocalStorage(i,l.runtimeLanguage),s.includes(l.runtimeLanguage)&&l.runtimeLanguage;var u=Index.Helpers.General.getProjectRunningModeFromUrl();let c=Index.Enums.ProjectType.Unknown,m=(u==Index.Enums.ProjectRunningMode.Device?c=Index.Helpers.General.getProjectTypeFromUrl():u==Index.Enums.ProjectRunningMode.Simulation&&(c=Index.Enums.ProjectType.EasyUi),{fromUrl:Index.Helpers.General.getProjectRunningModeFromUrl(),fromAppSettings:l.projectRunningMode,urlAndAppSettingsMatch:!1});m.fromUrl===m.fromAppSettings&&(m.urlAndAppSettingsMatch=!0),null!==d&&void 0!==d&&d.showStartUpLog&&(console.groupCollapsed("Start-up-page running mode"),console.log("projectType: "+c),console.log("url: "+m.fromUrl),console.log("appSettings:",m.fromAppSettings),console.groupEnd());let p,S;switch(l.runtimeLanguage){case"en-US":p=await Index.Helpers.Files.readJsonAsync(null===o||void 0===o?void 0:o.localization.en_US),S="en-US";break;case"de-DE":p=await Index.Helpers.Files.readJsonAsync(null===o||void 0===o?void 0:o.localization.de_DE),S="de-DE";break;default:p=await Index.Helpers.Files.readJsonAsync(null===o||void 0===o?void 0:o.localization.en_US),S="en-US",console.warn(`The language "${l.runtimeLanguage}" is not supported by the startup-page (index.html)`)}const g={TheProjectIsLoading:"string"==typeof(null===p||void 0===p?void 0:p.TheProjectIsLoading)?null===p||void 0===p?void 0:p.TheProjectIsLoading:"@ Project is loading",SimulationMode:"string"==typeof(null===p||void 0===p?void 0:p.SimulationMode)?null===p||void 0===p?void 0:p.SimulationMode:"@ Simulation mode",BrowserDoesNotSupportWebSocket:"string"==typeof(null===p||void 0===p?void 0:p.BrowserDoesNotSupportWebSocket)?null===p||void 0===p?void 0:p.BrowserDoesNotSupportWebSocket:"@ This browser doesn't support web sockets. Make sure to use a supported browser.",ErrorSimulationOnTargetDevice:"string"==typeof(null===p||void 0===p?void 0:p.ErrorSimulationOnTargetDevice)?null===p||void 0===p?void 0:p.ErrorSimulationOnTargetDevice:'@ To run this EASY UI project on a controller, set the "Execution Target" of the project to "Target device" using the EASY UI Designer.',ErrorTargetDeviceInSimulationMode:"string"==typeof(null===p||void 0===p?void 0:p.ErrorTargetDeviceInSimulationMode)?null===p||void 0===p?void 0:p.ErrorTargetDeviceInSimulationMode:'@ To run this EASY UI project in simulation mode, set the "Execution Target" of the project to "Local" using the EASY UI Designer.',TryingToConnectToUiServer:"string"==typeof(null===p||void 0===p?void 0:p.TryingToConnectToUiServer)?null===p||void 0===p?void 0:p.TryingToConnectToUiServer:"@ Trying to connect to EASY UI server",TryingToConnectToUiServerFailed:"string"==typeof(null===p||void 0===p?void 0:p.TryingToConnectToUiServerFailed)?null===p||void 0===p?void 0:p.TryingToConnectToUiServerFailed:"@ Trying to connect to EASY UI server failed",ThisStepTakesLongerThanExpected:"string"==typeof(null===p||void 0===p?void 0:p.ThisStepTakesLongerThanExpected)?null===p||void 0===p?void 0:p.ThisStepTakesLongerThanExpected:"@ This step takes longer than usual",CantConnectToUiServer:"string"==typeof(null===p||void 0===p?void 0:p.CantConnectToUiServer)?null===p||void 0===p?void 0:p.CantConnectToUiServer:"@ Can't connect to EASY UI server. To try again, please reload this page.",Initialization:"string"==typeof(null===p||void 0===p?void 0:p.Initialization)?null===p||void 0===p?void 0:p.Initialization:"@ Initialization",LoadingProjectData:"string"==typeof(null===p||void 0===p?void 0:p.LoadingProjectData)?null===p||void 0===p?void 0:p.LoadingProjectData:"@ Loading project data",ProjectGetsStarted:"string"==typeof(null===p||void 0===p?void 0:p.ProjectGetsStarted)?null===p||void 0===p?void 0:p.ProjectGetsStarted:"@ Starting project",ProjectInformationCollectionCompleted:"string"==typeof(null===p||void 0===p?void 0:p.ProjectInformationCollectionCompleted)?null===p||void 0===p?void 0:p.ProjectInformationCollectionCompleted:"@ Processing project information",AlarmSystemReady:"string"==typeof(null===p||void 0===p?void 0:p.AlarmSystemReady)?null===p||void 0===p?void 0:p.AlarmSystemReady:"@ Alarm system ready",TrendSystemReady:"string"==typeof(null===p||void 0===p?void 0:p.TrendSystemReady)?null===p||void 0===p?void 0:p.TrendSystemReady:"@ Trend system ready",LoggingSystemReady:"string"==typeof(null===p||void 0===p?void 0:p.LoggingSystemReady)?null===p||void 0===p?void 0:p.LoggingSystemReady:"@ Logging system ready",RecipeSystemReady:"string"==typeof(null===p||void 0===p?void 0:p.RecipeSystemReady)?null===p||void 0===p?void 0:p.RecipeSystemReady:"@ Recipe system ready",StartingServer:"string"==typeof(null===p||void 0===p?void 0:p.StartingServer)?null===p||void 0===p?void 0:p.StartingServer:"@ Starting server",ServerIsReady:"string"==typeof(null===p||void 0===p?void 0:p.ServerIsReady)?null===p||void 0===p?void 0:p.ServerIsReady:"@ Server is ready"};function h(e){var t=document.getElementById(e);return t||(console.warn(`Missing div with id "${e}" in index.html`),(t=document.createElement("div")).id=e,t)}null!==d&&void 0!==d&&d.showStartUpLog&&(console.groupCollapsed("Start-up-page UI language data"),console.log("Set language: "+S),console.log("localizableTexts:",g),console.groupEnd());var v=h(null==(s=null==(y=null===r||void 0===r?void 0:r.ui)?void 0:y.elementIDs)?void 0:s.projectName),y=h(null==(s=null==(y=null===r||void 0===r?void 0:r.ui)?void 0:y.elementIDs)?void 0:s.projectDescription);let I=h(null==(s=null==(s=null===r||void 0===r?void 0:r.ui)?void 0:s.elementIDs)?void 0:s.status);s=h(null==(s=null==(s=null===r||void 0===r?void 0:r.ui)?void 0:s.elementIDs)?void 0:s.gifAnimation);switch(v.style.backgroundColor="transparent",v.style.minWidth="0px",v.style.minHeight="0px",u){case Index.Enums.ProjectRunningMode.Device:v.textContent=Index.Helpers.General.getEasyUiProjectName();break;case Index.Enums.ProjectRunningMode.Simulation:v.textContent=null===g||void 0===g?void 0:g.SimulationMode,v.style.padding="0px 10px 0px 10px",v.style.color=null==(e=null==(e=null===r||void 0===r?void 0:r.ui)?void 0:e.style)?void 0:e.simulationModeTextForegroundColor}y.textContent=null===g||void 0===g?void 0:g.TheProjectIsLoading;let E=new Index.UI.Label(null===g||void 0===g?void 0:g.Initialization),x=(E.textElement.classList.add("index-splash-text-align-center"),I.appendChild(E.element),new Index.UI.Label("0 %")),b=(I.appendChild(x.element),new Index.UI.Label(""));b.element.classList.add("index-splash-label-box"),m.fromUrl==Index.Enums.ProjectRunningMode.Simulation&&(s.style.filter="grayscale(1)");let _=new class{constructor(e){this.count=0,this._countOld=0,this._labelElement=e,this._maxCount=10,this._progressInPercentage=0}set maxCount(e){0<e&&(this._maxCount=e)}setCount(e){e!==this.count&&e<=this._maxCount&&this._updateCount(e)}addCount(){this.count<this._maxCount&&this._updateCount(this.count+1)}_updateCount(e){this.count=e,this._countOld=this.count,this._updateUi()}_updateUi(){this._labelElement.setText(String(this._getPercentage())+" %")}_getPercentage(){var e=Math.round(this.count/this._maxCount*100),e=5*Math.round(e/5);return this._progressInPercentage=e}}(x),f=(l.autoLogin?_.maxCount=13:_.maxCount=7,Index.Enums.StartupStates.Init),C=Index.Enums.StartupStates.AppShellReady,L,k;function T(e,r,l,a){if(e){r<1e3&&(r=1e3),l<=0&&(l=10),a<0&&(l=0);let i=1,s=Index.Enums.CheckForWebSocket.BeforeInfo;!function t(){null!==d&&void 0!==d&&d.showStartUpLog&&console.log("Creating WebSocket attempt:",i);let n=performance.now();function o(){var e=performance.now()-n;r<e?t():setTimeout(t,r-e)}i+=1,(L=new WebSocket(e)).addEventListener("open",e=>{null!==d&&void 0!==d&&d.showStartUpLog&&console.log("WebSocket open"),f=Index.Enums.StartupStates.WebSocketOpen,j()}),L.addEventListener("close",e=>{null!==d&&void 0!==d&&d.showStartUpLog&&console.log("Start-up-page WebSocket closed")}),L.addEventListener("error",e=>{switch(s){case Index.Enums.CheckForWebSocket.BeforeInfo:i==l&&(s=Index.Enums.CheckForWebSocket.ShowInfo),o();break;case Index.Enums.CheckForWebSocket.ShowInfo:f=Index.Enums.StartupStates.CheckForWebSocketAfterInfo,j(),s=Index.Enums.CheckForWebSocket.AfterInfo,o();break;case Index.Enums.CheckForWebSocket.AfterInfo:0==a||i-l-1<a?o():i-l-1==a&&(f=Index.Enums.StartupStates.UnableToGetWebSocket,j())}})}()}}function w(){{var t=o.visiWinAppLoader,n=function(){f=Index.Enums.StartupStates.LoadingAppLoader,j(),VisiWin.Application.StartDefault=function(){VisiWin.System.Project.ProjectService.getService().ServerProjectStateChange.add(e=>{switch(e){case VisiWin.System.Project.ServerRuntimeStatus.Starting:break;case VisiWin.System.Project.ServerRuntimeStatus.Loaded:f=Index.Enums.StartupStates.ServerLoaded,j();break;case VisiWin.System.Project.ServerRuntimeStatus.Running:f=Index.Enums.StartupStates.ServerRunning,j()}}),VisiWin.System.Client.ClientService.getService().ClientStateChanged.add(e=>{switch(e){case VisiWin.System.Client.ClientState.Starting:a&&Index.Helpers.General.setLocalStorage(i,a);break;case VisiWin.System.Client.ClientState.Running:}}),VisiWin.System.Client.ClientService.getService().CommunicationStateChanged.add(e=>{switch(e){case VisiWin.System.Client.CommunicationState.Connecting:case VisiWin.System.Client.CommunicationState.Open:case VisiWin.System.Client.CommunicationState.Closing:case VisiWin.System.Client.CommunicationState.Closed:}}),VisiWin.Application.Start.startUpProgress.add(e=>{var t=e[e.LastSystem];if(t.Succeeded)switch(e.LastSystem){case"Connection":"Running"==t.Result&&(f=Index.Enums.StartupStates.ConnectionRunning,j());break;case"Project":"Ok"==t.Result&&(f=Index.Enums.StartupStates.ProjectRunning,j());break;case"Alarm":f=Index.Enums.StartupStates.AlarmSystemRunning,j();break;case"Trend":f=Index.Enums.StartupStates.TrendSystemRunning,j();break;case"Logging":f=Index.Enums.StartupStates.LoggingSystemRunning,j();break;case"Recipe":"Ok"==t.Result&&(f=Index.Enums.StartupStates.RecipeSystemRunning,j())}});var e=VisiWin.Application;e.addEventListener("activated",function(e){0!==e.detail.kind&&"Windows.Launch"!==e.detail.kind||e.detail.previousExecutionState}),e.addEventListener("ready",function(e){L&&L.close(),f=Index.Enums.StartupStates.AppShellReady,j()}),e.start()}};let e=document.createElement("script");e.readyState?e.onreadystatechange=function(){"loaded"!=e.readyState&&"complete"!=e.readyState||(e.onreadystatechange=null,n())}:e.onload=function(){n()},e.src=t,document.getElementsByTagName("head")[0].appendChild(e)}}let U=[];function j(){switch(null!==d&&void 0!==d&&d.showStartUpLog&&f!=C&&(t.push(f),n.push(performance.now()),C=f),null!==d&&void 0!==d&&d.showStartUpLog&&console.log("Start-up-page state:",f),f){case Index.Enums.StartupStates.Init:"WebSocket"in window||"MozWebSocket"in window?(m.fromUrl==Index.Enums.ProjectRunningMode.Device&&m.fromAppSettings==Index.Enums.ProjectRunningMode.Device?f=Index.Enums.StartupStates.UrlDevice_ProjectDevice:m.fromUrl==Index.Enums.ProjectRunningMode.Simulation&&m.fromAppSettings==Index.Enums.ProjectRunningMode.Simulation?f=Index.Enums.StartupStates.UrlSimulation_ProjectSimulation:m.fromUrl==Index.Enums.ProjectRunningMode.Device&&m.fromAppSettings==Index.Enums.ProjectRunningMode.Simulation?f=Index.Enums.StartupStates.UrlDevice_ProjectSimulation:m.fromUrl==Index.Enums.ProjectRunningMode.Simulation&&m.fromAppSettings==Index.Enums.ProjectRunningMode.Device?f=Index.Enums.StartupStates.UrlSimulation_ProjectDevice:m.fromUrl!=Index.Enums.ProjectRunningMode.Unknown&&m.fromAppSettings!=Index.Enums.ProjectRunningMode.Unknown||(f=Index.Enums.StartupStates.UrlUnknownOrProjectUnknown),j()):f=Index.Enums.StartupStates.ErrorNoWebSocketSupport;break;case Index.Enums.StartupStates.ErrorNoWebSocketSupport:console.error("This browser doesn't support websockets. Make sure to use a supported browser."),b.showSymbol=!0,b.symbolElement.setSymbol(Index.Enums.LenzeIcons.AlertActive),b.symbolElement.setColor(Index.Enums.Colors.Error),b.setText(null===g||void 0===g?void 0:g.BrowserDoesNotSupportWebSocket),I.appendChild(b.element);break;case Index.Enums.StartupStates.UrlDevice_ProjectDevice:f=Index.Enums.StartupStates.OpenWebSocketForDevice,j();break;case Index.Enums.StartupStates.UrlSimulation_ProjectSimulation:f=Index.Enums.StartupStates.OpenWebSocketForSimulation,j();break;case Index.Enums.StartupStates.UrlDevice_ProjectSimulation:console.error('To run this EASY UI project on a controller, set the "Execution Target" of the project to "Target device" using the EASY UI Designer.'),b.showSymbol=!0,b.symbolElement.setSymbol(Index.Enums.LenzeIcons.AlertActive),b.symbolElement.setColor(Index.Enums.Colors.Error),b.setText(null===g||void 0===g?void 0:g.ErrorSimulationOnTargetDevice),I.appendChild(b.element);break;case Index.Enums.StartupStates.UrlSimulation_ProjectDevice:console.error('To run this EASY UI project in simulation mode, set the "Execution Target" of the project to "Local" using the EASY UI Designer.'),b.showSymbol=!0,b.symbolElement.setSymbol(Index.Enums.LenzeIcons.AlertActive),b.symbolElement.setColor(Index.Enums.Colors.Error),b.setText(null===g||void 0===g?void 0:g.ErrorTargetDeviceInSimulationMode),I.appendChild(b.element);break;case Index.Enums.StartupStates.UrlUnknownOrProjectUnknown:console.error("Unable to identify project running mode");break;case Index.Enums.StartupStates.OpenWebSocketForDevice:k=`${Index.Helpers.General.getCurrentSecurity()}://${Index.Helpers.General.getCurrentIpAddress()}:`+l.webSocketUriParameter,f=Index.Enums.StartupStates.CheckForWebSocket,j();break;case Index.Enums.StartupStates.OpenWebSocketForSimulation:k=`ws://${Index.Helpers.General.getCurrentIpAddress()}:`+l.webSocketPort,f=Index.Enums.StartupStates.CheckForWebSocket,j();break;case Index.Enums.StartupStates.CheckForWebSocket:E.setText(null===g||void 0===g?void 0:g.TryingToConnectToUiServer),_.addCount(),x.showSymbol=!0,x.symbolElement.setLoadingAnimation(),T(k,1e3*r.startupSettings.webSocketRequestIntervalInSeconds,r.startupSettings.connectionAttempts.beforeInfoMessage,r.startupSettings.connectionAttempts.afterInfoMessage);break;case Index.Enums.StartupStates.CheckForWebSocketAfterInfo:b.setText(null===g||void 0===g?void 0:g.ThisStepTakesLongerThanExpected),b.showSymbol=!0,b.symbolElement.setSymbol(Index.Enums.LenzeIcons.InfoActive),b.symbolElement.setColor(Index.Enums.Colors.Primary),I.appendChild(b.element);break;case Index.Enums.StartupStates.UnableToGetWebSocket:console.error("Unable to get web socket"),E.setText(null===g||void 0===g?void 0:g.TryingToConnectToUiServerFailed),x.showSymbol=!1,b.setText(null===g||void 0===g?void 0:g.CantConnectToUiServer),b.showSymbol=!0,b.symbolElement.setSymbol(Index.Enums.LenzeIcons.AlertActive),b.symbolElement.setColor(Index.Enums.Colors.Error);break;case Index.Enums.StartupStates.WebSocketOpen:f=Index.Enums.StartupStates.CheckForWebSocket,w();break;case Index.Enums.StartupStates.LoadingAppLoader:E.setText(null===g||void 0===g?void 0:g.LoadingProjectData),x.showSymbol=!1,_.addCount();break;case Index.Enums.StartupStates.ConnectionRunning:E.setText(null===g||void 0===g?void 0:g.ProjectGetsStarted),_.addCount();break;case Index.Enums.StartupStates.ProjectRunning:E.setText(null===g||void 0===g?void 0:g.ProjectInformationCollectionCompleted),_.addCount(),null!==d&&void 0!==d&&d.showStartUpLog&&0==l.autoLogin&&0<t.length&&0<n.length&&(console.table(Index.Helpers.General.stateMachineShowAllTimes(t,n)),console.log(Index.Helpers.General.stateMachineShowStartToFinishTime(t,n)));break;case Index.Enums.StartupStates.AlarmSystemRunning:E.setText(null===g||void 0===g?void 0:g.AlarmSystemReady),_.addCount();break;case Index.Enums.StartupStates.TrendSystemRunning:E.setText(null===g||void 0===g?void 0:g.TrendSystemReady),_.addCount();break;case Index.Enums.StartupStates.LoggingSystemRunning:E.setText(null===g||void 0===g?void 0:g.LoggingSystemReady),_.addCount();break;case Index.Enums.StartupStates.RecipeSystemRunning:E.setText(null===g||void 0===g?void 0:g.RecipeSystemReady),_.addCount();break;case Index.Enums.StartupStates.ServerLoaded:E.setText(null===g||void 0===g?void 0:g.StartingServer),_.addCount();break;case Index.Enums.StartupStates.ServerRunning:E.setText(null===g||void 0===g?void 0:g.ServerIsReady),_.addCount();break;case Index.Enums.StartupStates.AppShellReady:null!==d&&void 0!==d&&d.showStartUpLog&&1==l.autoLogin&&0<t.length&&0<n.length&&(console.table(Index.Helpers.General.stateMachineShowAllTimes(t,n)),console.log(Index.Helpers.General.stateMachineShowStartToFinishTime(t,n)))}}new PerformanceObserver(function(e,t){e.getEntries().forEach(e=>{"measure"===e.entryType&&U.push(`${e.name}'s duration: ${e.duration} ms`)})}).observe({entryTypes:["measure","mark"]}),j()})();