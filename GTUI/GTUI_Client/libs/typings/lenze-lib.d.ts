/* Lenze library version: '1.3.19' */
/// <reference types="visiwin" />
declare namespace Lenze.Actions {
    abstract class ActionBase extends VisiWin.Actions.ActionBase {
        protected _getDOMElement<T extends VisiWin.UI.ControlBase>(id: string, expectedControlTypes: string[] | string): T;
        protected _getType(value: any): string;
    }
}
//# sourceMappingURL=action.base.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.UI {
    abstract class ButtonBase extends VisiWin.UI.ButtonBase {
        static namespace: string;
        cssClassPrefix: string;
        /**
         * @deprecated This method is still in due to backwards compatibility, however it has been moved to @see Lenze.Dom.getControl. Please switch to that function.
         */
        protected _getDOMElement<T extends VisiWin.UI.ControlBase>(id: string, expectedControlTypes: string[] | string): T;
        /**
         * @deprecated This method is still in due to backwards compatibility, however it has been moved to @see Lenze.Dom.createControl. Please switch to that function.
         */
        protected _createElement<T extends VisiWin.UI.ControlBase>(controlType: {
            new (element: VWElement, options: any): T;
        }, parent: HTMLElement, classNames?: string[]): T;
        /**
         * @deprecated This method is still in due to backwards compatibility, however it has been moved to @see Lenze.Controls.getType. Please switch to that function.
         */
        protected _getType(value: any): string;
    }
}
//# sourceMappingURL=button.base.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.UI {
    abstract class ControlBase extends VisiWin.UI.ControlBase {
        static namespace: string;
        cssClassPrefix: string;
        /**
         * @deprecated This method is still in due to backwards compatibility, however it has been moved to @see Lenze.Dom.getControl. Please switch to that function.
         */
        protected _getDOMElement<T extends VisiWin.UI.ControlBase>(id: string, expectedControlTypes: string[] | string): T;
        /**
         * @deprecated This method is still in due to backwards compatibility, however it has been moved to @see Lenze.Dom.createControl. Please switch to that function.
         */
        protected _createElement<T extends VisiWin.UI.ControlBase>(controlType: {
            new (element: VWElement, options: any): T;
        }, parent: HTMLElement, classNames?: string[]): T;
        /**
         * @deprecated This method is still in due to backwards compatibility, however it has been moved to @see Lenze.Controls.getType. Please switch to that function.
         */
        protected _getType(value: any): string;
    }
}
//# sourceMappingURL=control.base.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.UI {
    abstract class VariableBase extends VisiWin.UI.VariableBase {
        static namespace: string;
        cssClassPrefix: string;
        /**
         * @deprecated This method is still in due to backwards compatibility, however it has been moved to @see Lenze.Dom.getControl. Please switch to that function.
         */
        protected _getDOMElement<T extends VisiWin.UI.ControlBase>(id: string, expectedControlTypes: string[] | string): T;
        /**
         * @deprecated This method is still in due to backwards compatibility, however it has been moved to @see Lenze.Dom.createControl. Please switch to that function.
         */
        protected _createElement<T extends VisiWin.UI.ControlBase>(controlType: {
            new (element: VWElement, options: any): T;
        }, parent: HTMLElement, classNames?: string[]): T;
        /**
         * @deprecated This method is still in due to backwards compatibility, however it has been moved to @see Lenze.Controls.getType. Please switch to that function.
         */
        protected _getType(value: any): string;
    }
}
//# sourceMappingURL=variable.base.d.ts.map
/// <reference types="visiwin" />
declare module VisiWin.AppServices.Impl {
    class LenzeApplicationService extends VisiWin.AppServices.Impl.ServiceBase {
        private DOCUMENT_EVENTS;
        static namespace: string;
        static serviceName: string;
        static requireServices: string[];
        static minimumVisiWinJSVersion: string;
        static minimumVisiWinJSBuild: string;
        static throwVisiWinJSVersionError: boolean;
        private readonly _usernameVariableName;
        private readonly _fullNameVariableName;
        private readonly _groupTextVariableName;
        private readonly _groupNameVariableName;
        private readonly _userLevelVariableName;
        private readonly _languageCultureInfoVariableName;
        private readonly _languageLanguageVariableName;
        private readonly _languageLCIDVariableName;
        private readonly _languageLocaleVariableName;
        private readonly _secondsToLogOffVariableName;
        private readonly _currentPageVariableName;
        private readonly _controlAttributeName;
        private readonly _navigationControlName;
        private readonly _navigationEvent;
        get validVisiWinVersion(): boolean;
        private _variableService;
        private _userService;
        private _languageService;
        private _navigationService;
        private onIdleTimeout;
        private timeout;
        private timer;
        private active;
        private _validVersion;
        private _usernameVariable;
        private _fullNameVariable;
        private _groupTextVariable;
        private _groupNameVariable;
        private _secondsToLogOffVariable;
        private _languageCultureInfoVariable;
        private _languageLanguageVariable;
        private _languageLCIDVariable;
        private _languageLocaleVariable;
        private _currentPageVariable;
        private _userChangeHandler;
        private _languageChangeHandler;
        private _navigatedHandler;
        private _preloadingChangedHandler;
        private _userManagementModifiedHandler;
        constructor();
        init(): void;
        ready(): Promise<void>;
        idleLogout(secondsToAutoLogOff: any, timer: any): void;
        unload(): void;
        dispose(): void;
        private _onPreloadingChanged;
        private _onNavigated;
        private _onUserManagementModified;
        private _onUserChange;
        private _onLanguageChange;
        private _getVariable;
        private _isValid;
        private _attachAsync;
        private _setValueAsync;
        private _setValuesAsync;
        private _throwInvalidVersionMessage;
        private _isValidVisiWinVersion;
        private _isNewerOrEqualVersion;
    }
}
//# sourceMappingURL=application.service.d.ts.map
/// <reference types="visiwin" />
declare module VisiWin.AppServices.Impl {
    class CertificateHandlerService extends VisiWin.AppServices.Impl.ServiceBase {
        static namespace: string;
        static serviceName: string;
        static requireServices: string[];
        static valuesChangeEventName: string;
        static AddCertificateVariableName: string;
        static DeleteCertificateVariableName: string;
        private _variableChangeHandler;
        private _variableService;
        private _initTask;
        private _componentIds;
        constructor();
        getServiceEnabledAsync(): Promise<boolean>;
        getLicenseAsync(): Promise<Lenze.Models.LicenseResponse | null>;
        getComponentIdsFilter(): string[] | null;
        setComponentIdsFilter(ids: string[]): void;
        init(): void;
        ready(): void;
        unload(): void;
        dispose(): void;
        private _initAsync;
        private _setLicenseValue;
        private _onVariableChange;
    }
}
//# sourceMappingURL=certificate.service.d.ts.map
/// <reference types="visiwin" />
declare module VisiWin.AppServices.Impl {
    class LenzeDialogService extends VisiWin.AppServices.Impl.ServiceBase {
        static namespace: string;
        static serviceName: string;
        static requireServices: string[];
        static closeDialogEventName: string;
        private _dialogControl;
        private _alertDialogControl;
        private _alertDialogResult;
        private _dialogResultHandler;
        private _alertDialogResultHandler;
        private _escapeKeyHandler;
        private _alertEscapeKeyHandler;
        private get _dialogElement();
        private get _alertDialogElement();
        private get _isShowingDialog();
        private get _isShowingAlertDialog();
        get canShowDialog(): boolean;
        get canShowAlertDialog(): boolean;
        constructor();
        init(): void;
        /**
         * Shows a dialog
         * @param dialogName Name of the dialog to show
         * @returns true if the dialog is opened successfully, false otherwise
         */
        showDialog(dialogName: string): boolean;
        /**
         * Shows the alert dialog and returns the result
         * @param dialogInfo All necessary information to show the dialog
         * @returns True if the user clicked button2, false otherwise
         * @throws Exception if dialog failed to show
         */
        showAlertDialogAsync(dialogInfo: Lenze.Models.AlertDialogInformation): Promise<boolean>;
        /**
         * Closes the active dialog which is opened by @see showDialog.
         * Cannot be used to closed alert dialogs!
         * */
        closeDialog(): void;
        private _onDialogResult;
        private _onAlertDialogResult;
        private _onEscapeKeyPress;
        private _sleep;
    }
}
//# sourceMappingURL=dialog.service.d.ts.map
/// <reference types="visiwin" />
declare module VisiWin.AppServices.Impl {
    class LenzeKeyboardService extends VisiWin.AppServices.Impl.ServiceBase {
        static namespace: string;
        static serviceName: string;
        static requireServices: never[];
        static dialogEnterKeyEventName: string;
        static dialogCloseEventName: string;
        static pointerElementName: string;
        static pointerElementBeforeName: string;
        private readonly _resourceLocation;
        private readonly _alphabeticDialogName;
        private readonly _alphabeticLightDialogName;
        private readonly _numericDialogName;
        private _dialogService;
        private _initPromise;
        private _keyboardSettings;
        private _fallbackKeyboardLayout;
        private _fallbackNumericKeyboard;
        private _currentDialogInformation;
        get getDialogInformation(): Lenze.Models.KeyboardDialog | null;
        private _dialogCloseHandler;
        constructor();
        init(): void;
        ready(): Promise<void>;
        dispose(): void;
        private _onPointerDown;
        /**
         * Gets the settings of the keyboard from resources.
         * @returns The content of the keyboard settings under resources.
         * */
        getKeyboardResource(): Promise<Lenze.Models.KeyboardResource>;
        /**
         * Gets the keyboard layout based on the language.
         * @param languageCode The language IETF tag for a language based keyboard or null for the default keyboard.
         * @returns The keyboard layout of the language or from the default when the parameter is null. If the resource cannot be found or the default value is empty, then a fallback keyboard layout (en-US) will be returned instead.
         */
        getAlphabeticalLayout(languageTag?: string | null): Promise<Lenze.Models.KeyboardAlphaLayout>;
        /**
         * Gets the numeric keyboard layout
         * @returns The numeric layout from either the resources file or the default.
         * */
        getNumericLayout(): Promise<string[]>;
        /**
        * Generates a random id
        * @returns Generates a random id which can be used to register a VarIn
        */
        generateRandomId(): string;
        /**
        * Dispatches the event for the ShowKeyboardDialogAction
        * @param value The new value of the input
        */
        triggerKeyboardDialogEnter(value: any): void;
        showKeyboardDialog(keyboardDialog: Lenze.Models.KeyboardDialog): boolean;
        closeKeyboardDialog(): void;
        getAmountOfDecimalPlaces(value: string): number;
        private _initServiceAsync;
        private _onDialogClose;
    }
}
//# sourceMappingURL=keyboard.service.d.ts.map
/// <reference types="visiwin" />
declare module VisiWin.AppServices.Impl {
    class FastLicenseService extends VisiWin.AppServices.Impl.ServiceBase {
        static namespace: string;
        static serviceName: string;
        static requireServices: string[];
        static valuesChangeEventName: string;
        static RemainingBudgetName: string;
        private readonly _licenseVariableName;
        private _licenseValue;
        private _licenseVariable;
        private _licenseVariableValid;
        private _variableChangeHandler;
        private _variableService;
        private _initTask;
        private _componentIds;
        constructor();
        getServiceEnabledAsync(): Promise<boolean>;
        getLicenseAsync(): Promise<Lenze.Models.LicenseResponse | null>;
        getComponentIdsFilter(): string[] | null;
        setComponentIdsFilter(ids: string[]): void;
        init(): void;
        ready(): void;
        unload(): void;
        dispose(): void;
        private _initAsync;
        private _setLicenseValue;
        private _onVariableChange;
    }
}
//# sourceMappingURL=license.service.d.ts.map
/// <reference types="visiwin" />
declare module VisiWin.AppServices.Impl {
    class FastLogbookService extends VisiWin.AppServices.Impl.ServiceBase {
        static namespace: string;
        static serviceName: string;
        static requireServices: string[];
        static RequestFilterVariableName: string;
        static CurrentLogbookRequestVariableName: string;
        static LogbookResponseVariableName: string;
        static UpdateLogbookVariableName: string;
        static DeleteLogbookVariableName: string;
        private readonly _timeOutDuration;
        private readonly _logbookTimeOutDuration;
        private readonly _validateRequestDelay;
        private readonly _infiniteLoopDelay;
        private readonly _logbookFieldnameKeys;
        private readonly _logbookFieldnameValues;
        private _currentRequests;
        private _currentRequest;
        private _componentNames;
        private _logbookEnabled;
        private _logbookChanged;
        private _requestFilterVariable;
        private _currentLogbookRequestVariable;
        private _logbookResponseVariable;
        private _variableService;
        private _moduleService;
        private _currentRequestVariableChangeHandler;
        private _logbookValueChangedHandler;
        private _initTask;
        constructor();
        getLogbookAsync(id: string, filterOptions: Lenze.Models.LogbookFilterOptions): Promise<Lenze.Models.IPagedResponse<Lenze.Models.LogbookResponse> | null>;
        clearRequestAsync(id: string): Promise<void>;
        clearRequestsAsync(): Promise<void>;
        getLogbookEnabledAsync(): Promise<boolean>;
        getComponentNamesFilter(): string[];
        setComponentNamesFilter(names: string[]): void;
        getRandomString(length?: number | null): string;
        init(): void;
        ready(): void;
        unload(): void;
        dispose(): void;
        private _initAsync;
        private _makeRequestAsync;
        private _canMakeRequest;
        private _hasTimedOut;
        private _sleep;
        private _addToCurrentRequests;
        private _removeRequestById;
        private _isRequestCancelledAsync;
        private _updateRequestVariableAsync;
        private _onRequestVariableChanged;
        private _onLogbookValueChanged;
        private _isVariableValid;
    }
}
//# sourceMappingURL=logbook.service.d.ts.map
/// <reference types="visiwin" />
declare module VisiWin.AppServices.Impl {
    class FastModuleService extends VisiWin.AppServices.Impl.ServiceBase {
        static namespace: string;
        static serviceName: string;
        static requireServices: string[];
        static valuesChangeEventName: string;
        private readonly _deviceTreeVariableName;
        private _modulesEnabled;
        private _moduleResponse;
        /** Used to display filtered alarms */
        private _filteredComponents;
        private _deviceTreeVariable;
        private _variableChangeHandler;
        private _variableService;
        private _initTask;
        constructor();
        getComponentsAsync(): Promise<Lenze.Models.ComponentElement[]>;
        getApplicationViewAsync(): Promise<Lenze.Models.ApplicationViewElement | null>;
        getCommunicationViewAsync(): Promise<Lenze.Models.ApplicationViewElement | null>;
        getModulesEnabledAsync(): Promise<boolean>;
        getComponentsFilter(): Lenze.Models.ApplicationViewElement[];
        setComponentsFilter(components: Lenze.Models.ApplicationViewElement[]): void;
        init(): void;
        ready(): void;
        unload(): void;
        dispose(): void;
        private _initAsync;
        private _setViewsAndComponentsAsync;
        private _onVariableChangeAsync;
    }
}
//# sourceMappingURL=module.service.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.Actions {
    class AcknowledgeAllAlarmsAction extends Lenze.Actions.ActionBase {
        static actionName: string;
        static propertyList: {
            targetSelector: {
                type: StringConstructor;
            };
        };
        private _alarmService;
        constructor();
        execute(value: any, element: VWElement, triggerData: any): Promise<any>;
        init(element: any, triggerData: any): void;
        getInitialValue(element: any, triggerData: any): void;
    }
}
//# sourceMappingURL=acknowledge-all-alarms.action.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.Actions {
    class AddCertificateAction extends Lenze.Actions.ActionBase {
        static actionName: string;
        static propertyList: {
            value: {
                type: NumberConstructor;
            };
            variableName: {
                type: StringConstructor;
            };
        };
        get value(): number;
        set value(value: number);
        variableName: string;
        private _value;
        private _variable;
        private _element;
        private get _control();
        private _variableService;
        private _controlAttachedHandler;
        private _controlDetachedHandler;
        private _variableChangeHandler;
        constructor();
        execute(value: any, element: VWElement, triggerData: any): Promise<any>;
        init(element: any, triggerData: any): void;
        getInitialValue(element: any, triggerData: any): void;
        private _addCertificate;
        private _onControlAttached;
        private _onControlDetached;
    }
}
//# sourceMappingURL=add-certificate.action.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.Actions {
    class DeleteCertificateAction extends Lenze.Actions.ActionBase {
        static actionName: string;
        static propertyList: {
            value: {
                type: NumberConstructor;
            };
            variableName: {
                type: StringConstructor;
            };
        };
        get value(): number;
        set value(value: number);
        variableName: string;
        private _value;
        private _variable;
        private _element;
        private get _control();
        private _variableService;
        private _controlAttachedHandler;
        private _controlDetachedHandler;
        private _variableChangeHandler;
        constructor();
        execute(value: any, element: VWElement, triggerData: any): Promise<any>;
        init(element: any, triggerData: any): void;
        getInitialValue(element: any, triggerData: any): void;
        private _deleteCertificate;
        private _onControlAttached;
        private _onControlDetached;
    }
}
//# sourceMappingURL=delete-certificate.action.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.Actions {
    class WriteValueConfirmationAction extends Lenze.Actions.ActionBase {
        static actionName: string;
        static propertyList: {
            targetSelector: {
                type: StringConstructor;
            };
            inputClassName: {
                type: StringConstructor;
            };
            clearButtonName: {
                type: StringConstructor;
            };
            confirmationDialogEnabled: {
                type: BooleanConstructor;
                defaultValue: boolean;
            };
            headerLocalizableText: {
                type: StringConstructor;
            };
            bodyLocalizableText: {
                type: StringConstructor;
            };
            confirmButtonLocalizableText: {
                type: StringConstructor;
            };
            cancelButtonLocalizableText: {
                type: StringConstructor;
            };
            validationVariableName: {
                type: StringConstructor;
            };
            clearOnPageSwitch: {
                type: BooleanConstructor;
            };
        };
        inputClassName: string;
        clearButtonName: string;
        confirmationDialogEnabled: boolean;
        headerLocalizableText: string;
        bodyLocalizableText: string;
        confirmButtonLocalizableText: string;
        cancelButtonLocalizableText: string;
        validationVariableName: string;
        clearOnPageSwitch: boolean;
        private _noVariableWarning;
        private _initialAttachCalled;
        private _initializedSuccessfully;
        private _triggerElement;
        private get _triggerControl();
        private _inputElements;
        private _clearButtonElement;
        private _variableService;
        private _dialogService;
        private _attachedHandler;
        private _detachedHandler;
        private _clearButtonClickHandler;
        constructor();
        execute(value: any, element: VWElement, triggerData: any): Promise<any>;
        init(element: any, triggerData: any): void;
        getInitialValue(element: any, triggerData: any): void;
        private _initInputAsync;
        private _clearInputsAsync;
        private _setDisabled;
        private _displayNoVariableWarning;
        private _onAttachedAsync;
        private _onDetachedAsync;
    }
}
//# sourceMappingURL=write-value-confirmation.action.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.Actions {
    class BindKeyboardAction extends Lenze.Actions.ActionBase {
        static actionName: string;
        static propertyList: {
            targetSelector: {
                type: StringConstructor;
            };
            keyboardName: {
                type: StringConstructor;
            };
        };
        keyboardName: string;
        private _keyboardService;
        private _variableService;
        private _virtualKeyboard;
        private _triggerElement;
        private _inputElement;
        private _inputId;
        private _inputVariable;
        private _keyboardEnterHandler;
        private _propertyChangedHandler;
        private _domFocusChange;
        constructor();
        execute(value: any, element: VWElement, triggerData: any): Promise<any>;
        init(element: any, triggerData: any): void;
        getInitialValue(element: any, triggerData: any): void;
        private _onElementPropertyChange;
        private _onFocusChange;
        private _onValueChange;
        private _onDOMFocusChange;
        private _onKeyboardEnter;
    }
}
//# sourceMappingURL=bind-keyboard.action.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.Actions {
    class ShowKeyboardDialogAction extends Lenze.Actions.ActionBase {
        static actionName: string;
        static propertyList: {
            targetSelector: {
                type: StringConstructor;
            };
            light: {
                type: BooleanConstructor;
            };
            limitMinVariableName: {
                type: StringConstructor;
            };
            limitMaxVariableName: {
                type: StringConstructor;
            };
        };
        light: boolean;
        limitMinVariableName: string;
        limitMaxVariableName: string;
        private readonly _supportedNumericControls;
        private readonly _supportedAlphabeticalControls;
        private _keyboardService;
        private _variableService;
        private _triggerControl;
        private _triggerInputElement;
        private _triggerControlType;
        private _limitMinVariable;
        private _limitMaxVariable;
        private _isShowingDialog;
        private get _isNumeric();
        private _keyboardEnterHandler;
        private _dialogCloseHandler;
        private _propertyChangedHandler;
        private _controlAttachedHandler;
        private _controlDetachedHandler;
        private _domFocusChange;
        private _minLimitChangeHandler;
        private _maxLimitChangeHandler;
        constructor();
        execute(value: any, element: VWElement, triggerData: any): Promise<any>;
        init(element: any, triggerData: any): void;
        getInitialValue(element: any, triggerData: any): void;
        private _onKeyboardEnterAsync;
        private _onElementPropertyChangeAsync;
        private _onControlAttached;
        private _onControlDetached;
        private _onLimitVariableChanged;
        private _onFocusChangeAsync;
        private _onDialogClose;
        private _onDOMFocusChange;
        private _showDialog;
        private _isControlSupported;
    }
}
//# sourceMappingURL=show-keyboard-dialog.action.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.Actions {
    class RotateControlAction extends Lenze.Actions.ActionBase {
        static actionName: string;
        static propertyList: {
            value: {
                type: NumberConstructor;
            };
            variableName: {
                type: StringConstructor;
            };
            transformOrigin: {
                type: StringConstructor;
            };
            transitionTime: {
                type: NumberConstructor;
            };
        };
        get value(): number;
        set value(value: number);
        variableName: string;
        transformOrigin: string;
        transitionTime: number;
        private _value;
        private _variable;
        private _element;
        private get _control();
        private _variableService;
        private _controlAttachedHandler;
        private _controlDetachedHandler;
        private _variableChangeHandler;
        constructor();
        execute(value: any, element: VWElement, triggerData: any): Promise<any>;
        init(element: any, triggerData: any): void;
        getInitialValue(element: any, triggerData: any): void;
        private _rotateControl;
        private _onControlAttached;
        private _onControlDetached;
    }
}
//# sourceMappingURL=rotate-control.action.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.Actions {
    class ShowViewportAction extends Lenze.Actions.ActionBase {
        static actionName: string;
        static propertyList: {
            targetSelector: {
                type: StringConstructor;
            };
        };
        constructor();
        execute(value: any, element: VWElement, triggerData: any): Promise<any>;
        init(element: any, triggerData: any): void;
        getInitialValue(element: any, triggerData: any): void;
    }
}
//# sourceMappingURL=show-viewport.action.d.ts.map
/// <reference types="visiwin" />
declare module Lenze.Actions {
    class ClearLogbookFiltersAction extends Lenze.Actions.ActionBase {
        static actionName: string;
        static propertyList: {
            targetSelector: {
                type: StringConstructor;
            };
            logbookName: {
                type: StringConstructor;
            };
        };
        logbookName: string;
        private _logbookControl;
        constructor();
        execute(value: any, element: VWElement, triggerData: any): Promise<any>;
        init(element: any, triggerData: any): void;
        getInitialValue(element: any, triggerData: any): void;
    }
}
//# sourceMappingURL=clear-logbook-filters.action.d.ts.map
/// <reference types="visiwin" />
declare module Lenze.Actions {
    class DeleteLogbookAction extends Lenze.Actions.ActionBase {
        static actionName: string;
        static propertyList: {
            targetSelector: {
                type: StringConstructor;
            };
            logbookName: {
                type: StringConstructor;
            };
        };
        logbookName: string;
        private _logbookControl;
        private _variableService;
        private _deleteLogbookVariable;
        private _deleteVariableChangeHandler;
        private _eventSubscribed;
        constructor();
        execute(value: any, element: VWElement, triggerData: any): Promise<any>;
        init(element: any, triggerData: any): void;
        getInitialValue(element: any, triggerData: any): void;
        private _onUpdateVariableChangeAsync;
    }
}
//# sourceMappingURL=delete-logbook.action.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.Actions {
    class ExportLogbookAction extends Lenze.Actions.ActionBase {
        static actionName: string;
        static propertyList: {
            targetSelector: {
                type: StringConstructor;
            };
            logbookName: {
                type: StringConstructor;
            };
            dateTimeLocale: {
                type: StringConstructor;
            };
            formatDate: {
                type: StringConstructor;
            };
            formatTime: {
                type: StringConstructor;
            };
            severityLocalizableTexts: {
                type: StringConstructor;
            };
            layerLocalizableTexts: {
                type: StringConstructor;
            };
            targetGroupLocalizableTexts: {
                type: StringConstructor;
            };
            componentTypeLocalizableTexts: {
                type: StringConstructor;
            };
            columnSeperator: {
                type: StringConstructor;
            };
            newLineSeperator: {
                type: StringConstructor;
            };
            contentType: {
                type: StringConstructor;
            };
            fileName: {
                type: StringConstructor;
            };
            fileExtension: {
                type: StringConstructor;
            };
            includeTimeStamp: {
                type: BooleanConstructor;
            };
            defaultErrorText: {
                type: StringConstructor;
            };
        };
        logbookName: string;
        dateTimeLocale: string;
        formatDate: string;
        formatTime: string;
        severityLocalizableTexts: string;
        layerLocalizableTexts: string;
        targetGroupLocalizableTexts: string;
        componentTypeLocalizableTexts: string;
        columnSeperator: string;
        newLineSeperator: string;
        contentType: string;
        fileName: string;
        fileExtension: string;
        includeTimeStamp: boolean;
        defaultErrorText: string;
        private _triggerControl;
        private _languageService;
        private _logbookService;
        private _logbookHelper;
        private _logbook;
        private _logbookEnabled;
        private _logbookRequestBusy;
        private _logbookId;
        private _logbookCSVColumns;
        constructor();
        execute(value: any, element: VWElement, triggerData: any): Promise<any>;
        init(element: any, triggerData: any): void;
        getInitialValue(element: any, triggerData: any): void;
        private _getColumnsCSVRow;
        /**
         * Maps the LogbookResponse to a single CSV row
         * @param logbookEntry The logbook entry to map
         * @returns A char seperated string which represents the logbookEntry
         */
        private _getLogbookCSVRow;
    }
}
//# sourceMappingURL=export-logbook.action.d.ts.map
/// <reference types="visiwin" />
declare module Lenze.Actions {
    class RefreshLogbookAction extends Lenze.Actions.ActionBase {
        static actionName: string;
        static propertyList: {
            targetSelector: {
                type: StringConstructor;
            };
            logbookName: {
                type: StringConstructor;
            };
        };
        logbookName: string;
        private _logbookControl;
        constructor();
        execute(value: any, element: VWElement, triggerData: any): Promise<any>;
        init(element: any, triggerData: any): void;
        getInitialValue(element: any, triggerData: any): void;
    }
}
//# sourceMappingURL=refresh-logbook.action.d.ts.map
/// <reference types="visiwin" />
declare module Lenze.Actions {
    class UpdateLogbookAction extends Lenze.Actions.ActionBase {
        static actionName: string;
        static propertyList: {
            targetSelector: {
                type: StringConstructor;
            };
            logbookName: {
                type: StringConstructor;
            };
        };
        logbookName: string;
        private _logbookControl;
        private _updateLogbookVariable;
        private _updateVariableChangeHandler;
        private _eventSubscribed;
        private _variableService;
        constructor();
        execute(value: any, element: VWElement, triggerData: any): Promise<any>;
        init(element: any, triggerData: any): void;
        getInitialValue(element: any, triggerData: any): void;
        private _onUpdateVariableChangeAsync;
    }
}
//# sourceMappingURL=update-logbook.action.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.Actions {
    class RefreshUserManagementDataAction extends Lenze.Actions.ActionBase {
        static actionName: string;
        static propertyList: {
            targetSelector: {
                type: StringConstructor;
            };
        };
        constructor();
        execute(value: any, element: VWElement, triggerData: any): Promise<any>;
        init(element: any, triggerData: any): void;
        getInitialValue(element: any, triggerData: any): void;
    }
}
//# sourceMappingURL=refresh-user-management-data.action.d.ts.map
declare namespace Lenze.Models {
    enum StrokeLineCapEnum {
        Butt = "butt",
        Round = "round",
        Square = "square"
    }
}
//# sourceMappingURL=stroke-line-cap.enum.d.ts.map
declare namespace Lenze.Models {
    enum StrokeLineJoinEnum {
        Arcs = "arcs",
        Bevel = "bevel",
        Miter = "miter",
        MiterClip = "miter-clip",
        Round = "round"
    }
}
//# sourceMappingURL=stroke-line-join.enum.d.ts.map
declare namespace Lenze.Models {
    enum StrokeStyleEnum {
        Solid = "solid",
        Dashed = "dashed"
    }
}
//# sourceMappingURL=stroke-style.enum.d.ts.map
declare namespace Lenze.Models {
    enum XYCurveEnum {
        Basis = "basis",
        BasisClosed = "basisClosed",
        BasisOpen = "basisOpen",
        Bundle = "bundle",
        Cardinal = "cardinal",
        CardinalClosed = "cardinalClosed",
        CardinalOpen = "cardinalOpen",
        CatmullRom = "catmullRom",
        CatmullRomClosed = "catmullRomClosed",
        CatmullRomOpen = "catmullRomOpen",
        Linear = "linear",
        LinearClosed = "linearClosed",
        MonotoneX = "monotoneX",
        MonotoneY = "monotoneY",
        Natural = "natural",
        Step = "step",
        StepAfter = "stepAfter",
        StepBefore = "stepBefore"
    }
}
//# sourceMappingURL=xy-curve.enum.d.ts.map
declare namespace Lenze.Models {
    interface XYDataObjectMember {
        x: number | Date;
        y: number;
    }
}
//# sourceMappingURL=xy-data-object-member.model.d.ts.map
declare namespace Lenze.Models {
    interface XYDataObject {
        XYMembers: XYDataObjectMember[][];
    }
}
//# sourceMappingURL=xy-data-object.model.d.ts.map
declare namespace Lenze.Models {
    interface AlertDialogInformation {
        titleText: string;
        titleLocalizableText: string;
        contentText: string;
        contentLocalizableText: string;
        button1Text: string;
        button1LocalizableText: string;
        button2Text: string;
        button2LocalizableText: string;
        showButton1: boolean;
        showButton2: boolean;
    }
}
//# sourceMappingURL=alert-dialog.model.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.Models {
    interface IConfirmationInput {
        variableName: string;
        variable: VisiWin.System.DataAccess.IVariable | null;
        element: HTMLDivElement;
        control: VisiWin.UI.VariableBase;
        isValid: boolean;
        isEdited: boolean;
        getValue(): any;
        clearValueAsync(): Promise<void>;
        initAsync(element: HTMLDivElement): Promise<void>;
        attachAsync(): Promise<void>;
        detachAsync(): Promise<void>;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions | undefined): void;
        removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions | undefined): void;
    }
    class ConfirmationInput implements IConfirmationInput {
        static valueChangedEventName: string;
        private _variable;
        get variable(): VisiWin.System.DataAccess.IVariable | null;
        get variableName(): string;
        private _element;
        get element(): HTMLDivElement;
        get control(): VisiWin.UI.VariableBase;
        private _isValid;
        get isValid(): boolean;
        private _isEdited;
        get isEdited(): boolean;
        private _eventTarget;
        private _variableService;
        private _variableValueChangedHandler;
        private _inputValueChangedHandler;
        constructor(variableService: VisiWin.System.DataAccess.IVariableService);
        getValue(): any;
        clearValueAsync(): Promise<void>;
        initAsync(element: HTMLDivElement): Promise<void>;
        attachAsync(): Promise<void>;
        detachAsync(): Promise<void>;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions | undefined): void;
        removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions | undefined): void;
        private _onVariableValueChangedAsync;
        private _onInputValueChangedAsync;
        private _writeValueToInputAsync;
        private _dispatchEvent;
        private _validateIfValid;
    }
}
//# sourceMappingURL=confirmation-input.model.d.ts.map
declare namespace Lenze.Models {
    interface KeyboardAlphaLayout {
        alphaNormal: string[];
        alphaShift: string[];
    }
}
//# sourceMappingURL=keyboard-alpha-layout.model.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.Models {
    interface KeyboardDialog {
        keyboardType: KeyboardTypeEnum;
        light: boolean;
        value: string;
        decimalPlaces: number;
        unit: VisiWin.System.DataAccess.IUnit | null;
        headerText: string;
        headerLocalizableText: string;
        inputType: string;
        limitCheckEnabled: boolean;
        limitMin: number;
        limitMinVariableName: string;
        limitMinText: string;
        limitMinLocalText: string;
        limitMax: number;
        limitMaxVariableName: string;
        limitMaxText: string;
        limitMaxLocalText: string;
    }
}
//# sourceMappingURL=keyboard-dialog.model.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.Models {
    interface KeyboardInputElement {
        inputElement: VisiWin.UI.VariableBase;
        keyboardType: Lenze.Models.KeyboardTypeEnum;
        id: string;
    }
}
//# sourceMappingURL=keyboard-input-element.model.d.ts.map
declare namespace Lenze.Models {
    interface KeyboardLayout extends KeyboardAlphaLayout {
        numeric: string[];
    }
}
//# sourceMappingURL=keyboard-layout.model.d.ts.map
declare namespace Lenze.Models {
    interface KeyboardResource {
        default: string;
        numeric: string[];
        languages: {
            [key: string]: KeyboardAlphaLayout | string;
        };
    }
}
//# sourceMappingURL=keyboard-resource.model.d.ts.map
declare namespace Lenze.Models {
    enum KeyboardTypeEnum {
        Alphabetical = 0,
        Numeric = 1
    }
}
//# sourceMappingURL=keyboard-type.enum.d.ts.map
declare namespace Lenze.Models {
    enum ViewBoxStretchEnum {
        None = "None",
        Uniform = "Uniform",
        UniformToFill = "UniformToFill",
        Fill = "Fill"
    }
}
//# sourceMappingURL=viewbox-stretch.enum.d.ts.map
declare module Lenze.Models {
    interface IListBodyItem {
        text1: ListText;
        text2: ListText;
        text2DetailsAvailable: boolean;
        text2DetailsHeader: ListText;
        text2DetailsBody: ListText;
        text3: ListText;
    }
    class ListBodyItem implements IListBodyItem {
        private _text1;
        get text1(): ListText;
        set text1(value: ListText);
        private _text2;
        get text2(): ListText;
        set text2(value: ListText);
        private _text2DetailsAvailable;
        get text2DetailsAvailable(): boolean;
        set text2DetailsAvailable(value: boolean);
        private _text2DetailsHeader;
        get text2DetailsHeader(): ListText;
        set text2DetailsHeader(value: ListText);
        private _text2DetailsBody;
        get text2DetailsBody(): ListText;
        set text2DetailsBody(value: ListText);
        private _text3;
        get text3(): ListText;
        set text3(value: ListText);
        constructor(params?: Partial<IListBodyItem>);
    }
}
//# sourceMappingURL=list-body-item.model.d.ts.map
declare module Lenze.Models {
    interface IListHeader {
        text1: ListText;
        text2: ListText;
        text3: ListText;
        symbol: string;
        symbolIconFont: string;
        contentSymbol: string;
        contentSymbolIconFont: string;
    }
    class ListHeader implements IListHeader {
        private _text1;
        get text1(): ListText;
        private _text2;
        get text2(): ListText;
        private _text3;
        get text3(): ListText;
        private _symbol;
        get symbol(): string;
        private _symbolIconFont;
        get symbolIconFont(): string;
        private _contentSymbol;
        get contentSymbol(): string;
        private _contentSymbolIconFont;
        get contentSymbolIconFont(): string;
        constructor(params?: Partial<IListHeader>);
    }
}
//# sourceMappingURL=list-header.model.d.ts.map
declare module Lenze.Models {
    interface IListItem {
        header: ListHeader;
        bodyItems: ListBodyItem[];
    }
    class ListItem implements IListItem {
        private _header;
        get header(): ListHeader;
        private _bodyItems;
        get bodyItems(): ListBodyItem[];
        constructor(params?: Partial<IListItem>);
    }
}
//# sourceMappingURL=list-item.model.d.ts.map
declare module Lenze.Models {
    interface IListText {
        text: string;
        isLocalizable: boolean;
        fontWeight: string;
        textList: string;
        suffix: string;
        designTimeText: string;
    }
    class ListText implements IListText {
        private _text;
        get text(): string;
        set text(value: string);
        private _isLocalizable;
        get isLocalizable(): boolean;
        set isLocalizable(value: boolean);
        private _fontWeight;
        get fontWeight(): string;
        set fontWeight(value: string);
        private _textList;
        get textList(): string;
        set textList(value: string);
        private _suffix;
        get suffix(): string;
        set suffix(value: string);
        private _designTimeText;
        get designTimeText(): string;
        set designTimeText(value: string);
        constructor(params?: Partial<IListText>);
    }
}
//# sourceMappingURL=list-text.model.d.ts.map
declare module Lenze.Models {
    class MachineDrawingItem {
        private _isActive;
        get isActive(): boolean;
        private _x;
        get x(): number;
        private _y;
        get y(): number;
        private _height;
        get height(): number;
        private _width;
        get width(): number;
        private _layer;
        get layer(): number;
        private _backgroundColor;
        get backgroundColor(): string;
        private _foregroundColor;
        get foregroundColor(): string;
        private _borderColor;
        get borderColor(): string;
        private _text;
        get text(): string;
        constructor();
        init(data: string): void;
        static fromJS(data: string): MachineDrawingItem;
    }
}
//# sourceMappingURL=machine-drawing-item.model.d.ts.map
/// <reference types="visiwin" />
declare module Lenze.Models {
    class ControlInfo<T> {
        controlType: {
            new (element: VWElement, options: any): T;
        };
        options: any;
        classNames: string[];
        constructor(controlType: {
            new (element: VWElement, options: any): T;
        }, options?: any, classNames?: string[]);
    }
}
//# sourceMappingURL=control-info.model.d.ts.map
declare module Lenze.Models {
    interface IOrderBy {
        fieldName: string;
        descending: boolean;
    }
}
//# sourceMappingURL=order-by.model.d.ts.map
declare module Lenze.Models {
    interface IPagedResponse<T> {
        data: T[] | null;
        pageNumber: number | null;
        pageSize: number | null;
        orderBy: IOrderBy[] | null;
    }
}
//# sourceMappingURL=paged-response.model.d.ts.map
declare module Lenze {
    class Arrays {
        /**
         * Supporting method for sorting date fields within an object.
         * @param value1 First date value to compare.
         * @param value2 Second date value to compare.
         * @param descendValue Set 1 for descending, -1 for ascending.
         * @param fieldName Fieldname from within the generic object.
         * @returns 1, -1 or 0 depending on the parameters set.
         */
        static sortDateField<T>(value1: T, value2: T, descending: boolean, fieldName: string | string[]): number;
        /**
         * Supporting method for sorting fields within an object.
         * @param value1 First value to compare.
         * @param value2 Second value to compare.
         * @param descendValue Set 1 for descending, -1 for ascending.
         * @param fieldName Fieldname from within the generic object. Can be nested seperated with '.';
         * @returns 1, -1 or 0 depending on the parameters set.
         */
        static sortField<T>(value1: T, value2: T, descending: boolean, fieldName: string | string[]): number;
        /**
         * Get the correct value for descending or ascending in sort functions.
         * @param descending True when sorting needs to be descending.
         * @returns 1 if true, -1 otherwise.
         */
        static getDescendValue(descending: boolean): number;
    }
}
//# sourceMappingURL=arrays.helper.d.ts.map
declare module Lenze.Helpers {
    class LicenseHelper {
        static SetNeededExceededStyle(available: number, needed: number, valueElement: HTMLDivElement, symbolElement: HTMLDivElement): void;
    }
}
//# sourceMappingURL=license.helper.d.ts.map
/// <reference types="visiwin" />
declare module Lenze.Helpers {
    class LogbookHelper {
        private _languageService;
        private _mapInformationModel;
        private _isLocaleAvailable;
        constructor(languageService: VisiWin.System.Language.ILanguageService, mapInformationModel: Models.ILogbookMapInformationModel);
        createFilterOptions(pageNumber?: number, pageSize?: number, severities?: number[], componentNames?: string[], componentTypes?: number[], layers?: number[], targetGroups?: number[], orderBy?: Models.IOrderBy[]): Models.LogbookFilterOptions;
        resolveFieldValuesAsync(value: Models.LogbookResponse, fieldName: string): Promise<any>;
        private _toLogbookOrderBy;
        private _toISOString;
    }
}
//# sourceMappingURL=logbook.helper.d.ts.map
/// <reference types="visiwin" />
declare module Lenze {
    class Inputs {
        /**
         * Updates the visual indication. Call after manually changing the limits value
         * @param inputElement The input element
         */
        static revalidateLimits(inputElement: VisiWin.UI.VariableBase): void;
    }
}
//# sourceMappingURL=inputs.helper.d.ts.map
/// <reference types="visiwin" />
declare module Lenze {
    class Lists {
        static setTextAsync(languageService: VisiWin.System.Language.ILanguageService, element: HTMLDivElement, textItem: Models.ListText): Promise<void>;
        static getTextAsync(languageService: VisiWin.System.Language.ILanguageService, textItem: Models.ListText): Promise<string>;
    }
}
//# sourceMappingURL=lists.helper.d.ts.map
/// <reference types="visiwin" />
declare module Lenze {
    class Controls {
        /**
         * Creates a control of a specified type.
         * If wished to create a control and automatically append it to an existing HTMLElement, use @see Lenze.Dom.createControl instead.
         * @param controlType The specific control type, used like VisiWin.UI.Button.
         * @param classNames Optionally the classnames which need to be set on the controls.
         * @returns The created control.
         */
        static createControl<T extends VisiWin.UI.ControlBase>(controlType: {
            new (element: VWElement, options: any): T;
        }, classNames?: string[], options?: any): T;
        /**
         * Retrieves the control name including namespace and returns it as a string.
         * @param value The control.
         * @returns The control name and namespace in "Namespace.Name" format.
         */
        static getType(value: any): string;
        /**
        * Get the parent control if it is defined in the list
        * Developed for Lenze.UI.PanoramaView
        * @param targetElement HTMLElement
        * @param listOfControls Array of strings with control names like 'VisiWin.UI.Slider'
        * @returns
        */
        static getParentControl(targetElement: HTMLElement, listOfControls: string[]): any;
    }
}
//# sourceMappingURL=control.helper.d.ts.map
declare module Lenze {
    class Dates {
        /**
         * Returns the date value converted to UTC 0.
         * @param date The date value with the local timezone.
         * @returns UTC 0 version of the date.
         * @throws Error when parameter date is null or undefined.
         */
        static convertLocalToUTC(date: Date): Date;
        /**
         * Returns the date value converted to local timezone.
         * @param date The date value with the timezone UTC0.
         * @returns Local timezone version of the date.
         * @throws Error when parameter date is null or undefined.
         */
        static convertUTCToLocal(date: Date): Date;
        /**
         * Returns the amount of days from the time value. Use date.GetTime() function to retrieve it.
         * @param time Time value as number.
         * @returns Amount of days.
         */
        static getDays(time: number): number;
        /**
         * Returns the amount of hours from the time value. Use date.GetTime() function to retrieve it.
         * @param time Time value as number.
         * @returns Amount of hours.
         */
        static getHours(time: number): number;
        /**
         * Returns the amount of minutes from the time value. Use date.GetTime() function to retrieve it.
         * @param time Time value as number.
         * @returns Amount of minutes.
         */
        static getMinutes(time: number): number;
        /**
         * Returns the amount of seconds from the time value. Use date.GetTime() function to retrieve it.
         * @param time Time value as number.
         * @returns Amount of seconds.
         */
        static getSeconds(time: number): number;
        /**
         * Calculates the difference between the given dates (`d2` - `d1`)
         * @param d1 Start date
         * @param d2 End date
         * @returns Time difference in milliseconds
         */
        static getDateDiffInMilliSeconds(d1: Date, d2: Date): number;
        /**
         * Calculates the difference between the given dates (`d2` - `d1`)
         *
         * Calculation basis: 1 second = 1000 milliseconds
         * @param d1 Start date
         * @param d2 End date
         * @returns Time difference in seconds. The result can be a decimal number like 0.005
         */
        static getDateDiffInSeconds(d1: Date, d2: Date): number;
        /**
         * Calculates the difference between the given dates (`d2` - `d1`)
         *
         * Calculation basis: 1 minute = 60.000 milliseconds
         * @param d1 Start date
         * @param d2 End date
         * @returns Time difference in minutes. The result can be a decimal number like 0.005
         */
        static getDateDiffInMinutes(d1: Date, d2: Date): number;
        /**
         * Calculates the difference between the given dates (`d2` - `d1`)
         *
         * Calculation basis: 1 hour = 3.600.000 milliseconds
         * @param d1 Start date
         * @param d2 End date
         * @returns Time difference in hours. The result can be a decimal number like 0.005
         */
        static getDateDiffInHours(d1: Date, d2: Date): number;
        /**
         * Calculates the difference between the given dates (`d2` - `d1`)
         *
         * Calculation basis: 1 day = 86.400.000 milliseconds
         * @param d1 Start date
         * @param d2 End date
         * @returns Time difference in days. The result can be a decimal number like 0.005
         */
        static getDateDiffInDays(d1: Date, d2: Date): number;
        /**
         * Calculates the difference between the given dates (`d2` - `d1`)
         *
         * Calculation basis: 1 week = 604.800.000 milliseconds
         * @param d1 Start date
         * @param d2 End date
         * @returns Time difference in weeks. The result can be a decimal number like 0.005
         */
        static getDateDiffInWeeks(d1: Date, d2: Date): number;
        /**
         * Calculates the difference between the given dates (`d2` - `d1`)
         * @param d1 Start date
         * @param d2 End date
         * @returns Time difference in months. The result is always an integer
         */
        static getDateDiffInMonths(d1: Date, d2: Date): number;
        /**
         * Calculates the difference between the given dates (`d2` - `d1`)
         * @param d1 Start date
         * @param d2 End date
         * @returns Time difference in years. The result is always an integer
         */
        static getDateDiffInYears(d1: Date, d2: Date): number;
        static dateToUtcString(d: Date): string;
    }
}
//# sourceMappingURL=dates.helper.d.ts.map
/// <reference types="visiwin" />
declare module Lenze {
    class Dom {
        /**
         * Retrieves a control from the DOM.
         * @param id The id of the control.
         * @param expectedTypes The expected type of the control. @see Lenze.Controls.getType can be used here like Lenze.Controls.getType(VisiWin.UI.Button). Leaving this empty means that control type validation is skipped.
         * @returns The control when successful, null otherwise.
         */
        static getControl<T extends VisiWin.UI.ControlBase>(id: string, expectedTypes: null | string[] | string): T;
        /**
         * Creates a control of specified type and adds to an existing HTMLElement.
         * If wished to create a control only without automatically appending, use @see Lenze.Controls.createControl instead.
         * @param controlType The specific control type, used like VisiWin.UI.Button.
         * @param parent The HTML parent element to which this control will be appended to.
         * @param classNames Optionally the classnames which need to be set on the controls.
         * @returns The created control.
         */
        static createControl<T extends VisiWin.UI.ControlBase>(controlType: {
            new (element: VWElement, options: any): T;
        }, parent: HTMLElement, classNames?: string[], options?: any): T;
    }
}
//# sourceMappingURL=dom.helper.d.ts.map
declare module Lenze {
    class Functions {
        /**
         * Returns the largest number of a property from an array of objects
         * @param array The array of objects
         * @param callbackfn The property of the object
         */
        static getLargestValue<T>(array: T[], callbackfn: (value: T, index: number, array: T[]) => number): number;
        /**
         * Returns the field value from an object.
         * @param path Path to the (nested) field.
         * @param obj The object.
         * @param separator If using nested fields, the seperator character. Default '.'
         * @returns The field value.
         */
        static getFieldValue<T>(obj: T, path: string | string[], separator?: string): string;
    }
}
//# sourceMappingURL=functions.helper.d.ts.map
declare module Lenze {
    class Certificates {
        static jsonToCertificateListAsync(jsonString: string): Promise<[Date, Models.CertificateDetails[]]>;
        /**
         * Calculates the ValidityState of a certificate based on the `validFrom` and `validTo` dates
         * @param validFrom Certificate validFrom date
         * @param validTo Certificate validTo date
         * @param currentDate Current date to perform the calculation
         * @param expiresSoonLimit Limit in days; Only positive numbers allowed
         * @returns `Models.CertificateValidityStateEnum`
         */
        static getCertificateValidityStateAsync(validFrom: Date, validTo: Date, currentDate: Date, expiresSoonLimit: number): Promise<Models.CertificateValidityStateEnum>;
    }
}
//# sourceMappingURL=certificates.helper.d.ts.map
declare module Lenze {
    class Css {
        /**
         * Returns the correct css value based on the AlignItems VisiWin enum value
         * @param inputElement The input element
         */
        static getCssAlignItems(value: string): "center" | "flex-start" | "flex-end" | "baseline" | "stretch";
    }
}
//# sourceMappingURL=css.helper.d.ts.map
declare module Lenze {
    class Style {
        /**
         * Sets the width property of the element
         * @param element The HTML Element
         * @param value Numeric value in pixels, -1 for auto
         */
        static setWidth(element: HTMLElement, value: number): void;
    }
}
//# sourceMappingURL=style.helper.d.ts.map
declare module Lenze {
    class Strings {
        /**
         * Verifies the name of the object
         * @param name propertyName
         */
        static nameof: <T>(name: Extract<keyof T, string>) => string;
        /**
         * Indicates whether a specified string is null, empty, or consists only of white-space characters.
         * @see VisiWin.isNullOrEmpty for null and empty string.
         * @see VisiWin.isNullOrUndefined for null and undefined.
         * @param value The string value to be validated.
         * @returns true if value is not null, not undefined and not an empty string, false otherwise.
         */
        static isNullOrWhiteSpace(value: string | null | undefined): boolean;
        /**
         * Formats the template string with the arguments.
         * @param value The template string.
         * @param args The arguments to be put in the template string.
         * @returns The formatted string or the same string when null or empty.
         */
        static format(value: string, ...args: any[]): string;
        /**
         * Capitalizes the first letter.
         * @param value String to capitalize.
         * @returns Capitalized string.
         */
        static capitalize(value: string): string;
        /**
         * Checks if a string is a valid json object.
         * @param value json string
         * @returns If string is valid json, returns json as an object
         * If string is invalid returns an error
         */
        static isJsonAsync(value: string): Promise<Object>;
    }
}
//# sourceMappingURL=strings.helper.d.ts.map
/// <reference types="visiwin" />
declare module Lenze {
    class Texts {
        /**
         * Returns the translated text from a text list
         * @param service VisiWin language service
         * @param textList Text list containing the translations of the values
         * @param value Value to be translated, can be either a number or a string
         */
        static getTextFromValueAsync(service: VisiWin.System.Language.ILanguageService, textList: string, value: string | number): Promise<string>;
    }
}
//# sourceMappingURL=texts.helper.d.ts.map
/// <reference types="visiwin" />
declare module Lenze {
    class Users {
        /**
         * Determines wheter the current user has the specific right. When the right parameter is empty, result will be true.
         * @param userService The VisiWin UserManagement service, @see VisiWin.System.UserManagement.IUserManagementService.
         * @param right The right to validate on the current user.
         * @returns True if @param right is empty or the current user has that right, false otherwise.
         */
        static isAuthorized(userService: VisiWin.System.UserManagement.IUserManagementService, right: string): boolean;
    }
}
//# sourceMappingURL=Users.helper.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.UI {
    class AlarmList extends Lenze.UI.VirtualizingTableBase<VisiWin.System.Alarm.IAlarmItemBase> {
        private readonly _symbolAlarmClass;
        private readonly _refreshChangeWindow;
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue_DM: string;
            };
            registerTargetId: {
                propertyType: string;
                defaultValue: string;
            };
            headerPadding: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            headerBorderWidthTop: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            headerBorderWidthSides: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            headerBorderWidthBottom: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            headerBorderStyle: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            headerFontClass: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            headerFontSize: {
                propertyType: string;
                type: string;
            };
            headerFontWeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            headerUpperCase: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            bodyPadding: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            bodyBorderWidthSides: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            bodyBorderWidthBottom: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            bodyBorderStyle: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            bodyFontClass: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            bodyFontSize: {
                propertyType: string;
                type: string;
            };
            bodyFontWeight: {
                propertyType: string;
                type: string;
            };
            activeAlarmsOnly: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            dateTimeLocale: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            formatDate: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            formatTime: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            showErrors: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            errorAlarmClasses: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            errorShowSymbol: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            errorIconFont: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            errorSymbol: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            errorSymbolType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            errorSymbolSize: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            errorBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSelectedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorResolvedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorResolvedSelectedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorResolvedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSelectedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorResolvedSelectedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolResolvedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolSelectedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolResolvedSelectedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolResolvedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolSelectedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolResolvedSelectedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            showWarnings: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            warningAlarmClasses: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            warningShowSymbol: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            warningIconFont: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            warningSymbol: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            warningSymbolType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            warningSymbolSize: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            warningBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            warningSelectedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            warningResolvedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            warningResolvedSelectedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            warningForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            warningResolvedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            warningSelectedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            warningResolvedSelectedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            warningSymbolBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            warningSymbolResolvedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            warningSymbolSelectedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            warningSymbolResolvedSelectedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            warningSymbolForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            warningSymbolResolvedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            warningSymbolSelectedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            warningSymbolResolvedSelectedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            showInfos: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            infoAlarmClasses: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            infoShowSymbol: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            infoIconFont: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            infoSymbol: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            infoSymbolType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            infoSymbolSize: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            infoBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            infoSelectedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            infoResolvedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            infoResolvedSelectedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            infoForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            infoSelectedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            infoResolvedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            infoResolvedSelectedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            infoSymbolBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            infoSymbolResolvedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            infoSymbolSelectedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            infoSymbolResolvedSelectedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            infoSymbolForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            infoSymbolResolvedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            infoSymbolSelectedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            infoSymbolResolvedSelectedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            resolvedShowSymbol: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            resolvedIconFont: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            resolvedSymbolTrue: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            resolvedSymbolFalse: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            resolvedSymbolType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            resolvedSymbolSize: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            resolvedSymbolBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            resolvedSymbolForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            pageSize: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            maxAmountOfPages: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            loadNextTriggerValue: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            columns: {
                propertyType: string;
                type: string;
            };
            disableMultiSort: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            foregroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            borderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            headerBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            headerForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            headerBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            headerSymbolBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            headerSymbolActiveForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            headerSymbolInactiveForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            bodyBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            bodyForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            bodyBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            bodySelectedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            bodySelectedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            bodySelectedBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            selectedchanged: {
                propertyType: string;
                group: string;
                triggerDataName: string;
            };
        };
        activeAlarmsOnly: boolean;
        dateTimeLocale: string;
        formatDate: string;
        formatTime: string;
        showErrors: boolean;
        errorAlarmClasses: string;
        errorShowSymbol: boolean;
        errorIconFont: string;
        errorSymbol: string;
        errorSymbolType: string;
        errorSymbolSize: string;
        errorBackgroundColor: string;
        errorSelectedBackgroundColor: string;
        errorResolvedBackgroundColor: string;
        errorResolvedSelectedBackgroundColor: string;
        errorForegroundColor: string;
        errorSelectedForegroundColor: string;
        errorResolvedForegroundColor: string;
        errorResolvedSelectedForegroundColor: string;
        errorSymbolBackgroundColor: string;
        errorSymbolResolvedBackgroundColor: string;
        errorSymbolSelectedBackgroundColor: string;
        errorSymbolResolvedSelectedBackgroundColor: string;
        errorSymbolForegroundColor: string;
        errorSymbolResolvedForegroundColor: string;
        errorSymbolSelectedForegroundColor: string;
        errorSymbolResolvedSelectedForegroundColor: string;
        showWarnings: boolean;
        warningAlarmClasses: string;
        warningShowSymbol: boolean;
        warningIconFont: string;
        warningSymbol: string;
        warningSymbolType: string;
        warningSymbolSize: string;
        warningBackgroundColor: string;
        warningSelectedBackgroundColor: string;
        warningResolvedBackgroundColor: string;
        warningResolvedSelectedBackgroundColor: string;
        warningForegroundColor: string;
        warningSelectedForegroundColor: string;
        warningResolvedForegroundColor: string;
        warningResolvedSelectedForegroundColor: string;
        warningSymbolBackgroundColor: string;
        warningSymbolResolvedBackgroundColor: string;
        warningSymbolSelectedBackgroundColor: string;
        warningSymbolResolvedSelectedBackgroundColor: string;
        warningSymbolForegroundColor: string;
        warningSymbolResolvedForegroundColor: string;
        warningSymbolSelectedForegroundColor: string;
        warningSymbolResolvedSelectedForegroundColor: string;
        showInfos: boolean;
        infoAlarmClasses: string;
        infoShowSymbol: boolean;
        infoIconFont: string;
        infoSymbol: string;
        infoSymbolType: string;
        infoSymbolSize: string;
        infoBackgroundColor: string;
        infoSelectedBackgroundColor: string;
        infoResolvedBackgroundColor: string;
        infoResolvedSelectedBackgroundColor: string;
        infoForegroundColor: string;
        infoSelectedForegroundColor: string;
        infoResolvedForegroundColor: string;
        infoResolvedSelectedForegroundColor: string;
        infoSymbolBackgroundColor: string;
        infoSymbolResolvedBackgroundColor: string;
        infoSymbolSelectedBackgroundColor: string;
        infoSymbolResolvedSelectedBackgroundColor: string;
        infoSymbolForegroundColor: string;
        infoSymbolResolvedForegroundColor: string;
        infoSymbolSelectedForegroundColor: string;
        infoSymbolResolvedSelectedForegroundColor: string;
        resolvedShowSymbol: boolean;
        resolvedIconFont: string;
        resolvedSymbolTrue: string;
        resolvedSymbolFalse: string;
        resolvedSymbolType: string;
        resolvedSymbolSize: string;
        resolvedSymbolBackgroundColor: string;
        resolvedSymbolForegroundColor: string;
        protected _tableClassName: string;
        protected _headerClassName: string;
        protected _headerRowClassName: string;
        protected _headerCellClassName: string;
        protected _bodyClassName: string;
        protected _bodyRowClassName: string;
        protected _bodyCellClassName: string;
        private _previousLocale;
        private _seperatorFirst;
        private _seperatorValue;
        private _errorClasses;
        private _warningClasses;
        private _infoClasses;
        private _timerId;
        private _customSortMethods;
        private _customSortFields;
        private _resolvedStates;
        private _componentsToFilter;
        private _moduleService;
        private _alarmService;
        private _languageService;
        private _projectService;
        private _stateChangedHandler;
        private _languageChangedHandler;
        constructor(element: any, options: any);
        afterInit(): void;
        _updateLayout(changes: any): void;
        detach(): Promise<void>;
        dispose(): boolean;
        protected _onIsBusyChanged(isFinished: boolean): void;
        protected _isSameItem(item1: VisiWin.System.Alarm.IAlarmItemBase, item2: VisiWin.System.Alarm.IAlarmItemBase): boolean;
        protected _getValuesAsync(pageNumber: number, pageSize: number, orderBy: Models.IOrderBy[]): Promise<Models.IPagedResponse<VisiWin.System.Alarm.IAlarmItemBase>>;
        protected _resolveValueAsync(value: VisiWin.System.Alarm.IAlarmItemBase, fieldName: string): Promise<any>;
        protected _setBodyCellColors(cell: HTMLTableCellElement, firstCell: boolean, column: VirtualizingTableColumn): void;
        protected _setBodyCellLayout(cell: HTMLTableCellElement, firstCell: boolean, column: VirtualizingTableColumn): void;
        private _getActualAlarmsAsync;
        private _getHistoricalAlarmsAsync;
        private _getFilteredAlarmClasses;
        private _setAlarmClassArrays;
        private _getAlarmArray;
        private _onAlarmsChangedAsync;
        private _onLanguageChangedAsync;
        private _setRefreshTimer;
        private _refreshAlarmsAsync;
        private _getColor;
        private _getAlarmColors;
        private _getLocale;
        private _getSeperator;
        private _createSymbol;
        private _sortAlarmClass;
        private _sortState;
        private _sortTime;
        private _sortByStringField;
        private _getAlarmClassLevel;
        private _isInFilter;
    }
}
//# sourceMappingURL=alarm-list.control.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.UI {
    class AlarmLineCollection extends Lenze.UI.ControlBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            registerTargetId: {
                propertyType: string;
                defaultValue: string;
            };
            alarmLineItems: {
                propertyType: string;
                type: string;
            };
            showAlarmParam1: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            showAlarmGroup: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            newestAlarmOnTop: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            disableGrowOnClick: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            dropDownEnabled: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            dateTimeMode: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            formatDate: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            formatTime: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            inactiveBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownCloseButtonWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonMinWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonMaxWidth: {
                propertyType: string;
                type: string;
            };
            dropDownCloseButtonHeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonMinHeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonMaxHeight: {
                propertyType: string;
                type: string;
            };
            dropDownCloseButtonMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonPadding: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonFlexShrink: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            dropDownCloseButtonFlexGrow: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            dropDownCloseButtonBorderWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonBorderStyle: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonBorderRadius: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonOpacity: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            dropDownCloseButtonVisibility: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonShadow: {
                propertyType: string;
                type: string;
            };
            dropDownCloseButtonPressedShadow: {
                propertyType: string;
                type: string;
            };
            dropDownCloseButtonTransition: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonBackground: {
                propertyType: string;
                type: string;
            };
            dropDownCloseButtonDisabled: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            dropDownCloseButtonShowSymbol: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            dropDownCloseButtonIconFont: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonSymbol: {
                propertyType: string;
                type: string;
            };
            dropDownCloseButtonSymbolPressed: {
                propertyType: string;
                type: string;
            };
            dropDownCloseButtonSymbolType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonSymbolSize: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonSymbolMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonSymbolPosition: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonShowText: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            dropDownCloseButtonTextWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonTextHeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonTextMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonTextPadding: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonLocalizableText: {
                propertyType: string;
                type: string;
            };
            dropDownCloseButtonTextAlignment: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonLineClamp: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            dropDownCloseButtonTextWrapping: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonTextTrimming: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonFontClass: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonFontSize: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonFontWeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonLineHeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonTextContrast: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            dropDownCloseButtonUppercase: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            dropDownCloseButtonTextPosition: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCloseButtonBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownCloseButtonHoverBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownCloseButtonPressedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownCloseButtonDisabledBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownCloseButtonForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownCloseButtonPressedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownCloseButtonAuthSymbolForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownCloseButtonDisabledForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownCloseButtonBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownCloseButtonHoverBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownCloseButtonDisabledBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownAcknowledgeButtonWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonMinWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonMaxWidth: {
                propertyType: string;
                type: string;
            };
            dropDownAcknowledgeButtonHeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonMinHeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonMaxHeight: {
                propertyType: string;
                type: string;
            };
            dropDownAcknowledgeButtonMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonPadding: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonFlexShrink: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            dropDownAcknowledgeButtonFlexGrow: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            dropDownAcknowledgeButtonBorderWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonBorderStyle: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonBorderRadius: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonOpacity: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            dropDownAcknowledgeButtonVisibility: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonShadow: {
                propertyType: string;
                type: string;
            };
            dropDownAcknowledgeButtonPressedShadow: {
                propertyType: string;
                type: string;
            };
            dropDownAcknowledgeButtonTransition: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonBackground: {
                propertyType: string;
                type: string;
            };
            dropDownAcknowledgeButtonDisabled: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            dropDownAcknowledgeButtonShowSymbol: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            dropDownAcknowledgeButtonIconFont: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonSymbol: {
                propertyType: string;
                type: string;
            };
            dropDownAcknowledgeButtonSymbolPressed: {
                propertyType: string;
                type: string;
            };
            dropDownAcknowledgeButtonSymbolType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonSymbolSize: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonSymbolMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonSymbolPosition: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonShowText: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            dropDownAcknowledgeButtonTextWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonTextHeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonTextMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonTextPadding: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonLocalizableText: {
                propertyType: string;
                type: string;
            };
            dropDownAcknowledgeButtonTextAlignment: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonLineClamp: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            dropDownAcknowledgeButtonTextWrapping: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonTextTrimming: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonFontClass: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonFontSize: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonFontWeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonLineHeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonTextContrast: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            dropDownAcknowledgeButtonUppercase: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            dropDownAcknowledgeButtonTextPosition: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownAcknowledgeButtonHoverBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownAcknowledgeButtonPressedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownAcknowledgeButtonDisabledBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownAcknowledgeButtonForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownAcknowledgeButtonPressedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownAcknowledgeButtonAuthSymbolForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownAcknowledgeButtonDisabledForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownAcknowledgeButtonBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownAcknowledgeButtonHoverBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownAcknowledgeButtonDisabledBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownCustomButtonWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonMinWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonMaxWidth: {
                propertyType: string;
                type: string;
            };
            dropDownCustomButtonHeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonMinHeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonMaxHeight: {
                propertyType: string;
                type: string;
            };
            dropDownCustomButtonMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonPadding: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonFlexShrink: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            dropDownCustomButtonFlexGrow: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            dropDownCustomButtonBorderWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonBorderStyle: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonBorderRadius: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonOpacity: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            dropDownCustomButtonVisibility: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonShadow: {
                propertyType: string;
                type: string;
            };
            dropDownCustomButtonPressedShadow: {
                propertyType: string;
                type: string;
            };
            dropDownCustomButtonTransition: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonBackground: {
                propertyType: string;
                type: string;
            };
            dropDownCustomButtonDisabled: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            dropDownCustomButtonShowSymbol: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            dropDownCustomButtonIconFont: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonSymbol: {
                propertyType: string;
                type: string;
            };
            dropDownCustomButtonSymbolPressed: {
                propertyType: string;
                type: string;
            };
            dropDownCustomButtonSymbolType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonSymbolSize: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonSymbolMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonSymbolPosition: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonShowText: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            dropDownCustomButtonTextWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonTextHeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonTextMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonTextPadding: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonLocalizableText: {
                propertyType: string;
                type: string;
            };
            dropDownCustomButtonTextAlignment: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonLineClamp: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            dropDownCustomButtonTextWrapping: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonTextTrimming: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonFontClass: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonFontSize: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonFontWeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonLineHeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonTextContrast: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            dropDownCustomButtonUppercase: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            dropDownCustomButtonTextPosition: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownCustomButtonBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownCustomButtonHoverBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownCustomButtonPressedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownCustomButtonDisabledBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownCustomButtonForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownCustomButtonPressedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownCustomButtonAuthSymbolForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownCustomButtonDisabledForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownCustomButtonBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownCustomButtonHoverBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownCustomButtonDisabledBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            buttonclick: {
                propertyType: string;
                group: string;
            };
            customclick: {
                propertyType: string;
                group: string;
            };
            acknowledgeclick: {
                propertyType: string;
                group: string;
            };
        };
        alarmLineItems: string;
        showAlarmParam1: boolean;
        showAlarmGroup: boolean;
        newestAlarmOnTop: boolean;
        disableGrowOnClick: boolean;
        dropDownEnabled: boolean;
        dateTimeMode: string;
        formatDate: string;
        formatTime: string;
        inactiveBackgroundColor: string;
        dropDownCloseButtonWidth: string;
        dropDownCloseButtonMinWidth: string;
        dropDownCloseButtonMaxWidth: string;
        dropDownCloseButtonHeight: string;
        dropDownCloseButtonMinHeight: string;
        dropDownCloseButtonMaxHeight: string;
        dropDownCloseButtonMargin: string;
        dropDownCloseButtonPadding: string;
        dropDownCloseButtonFlexShrink: number;
        dropDownCloseButtonFlexGrow: number;
        dropDownCloseButtonBorderWidth: string;
        dropDownCloseButtonBorderStyle: string;
        dropDownCloseButtonBorderRadius: string;
        dropDownCloseButtonOpacity: number;
        dropDownCloseButtonVisibility: string;
        dropDownCloseButtonShadow: string;
        dropDownCloseButtonPressedShadow: string;
        dropDownCloseButtonTransition: string;
        dropDownCloseButtonBackground: string;
        dropDownCloseButtonDisabled: boolean;
        dropDownCloseButtonShowSymbol: boolean;
        dropDownCloseButtonIconFont: string;
        dropDownCloseButtonSymbol: string;
        dropDownCloseButtonSymbolPressed: string;
        dropDownCloseButtonSymbolType: string;
        dropDownCloseButtonSymbolSize: string;
        dropDownCloseButtonSymbolMargin: string;
        dropDownCloseButtonSymbolPosition: string;
        dropDownCloseButtonShowText: boolean;
        dropDownCloseButtonTextWidth: string;
        dropDownCloseButtonTextHeight: string;
        dropDownCloseButtonTextMargin: string;
        dropDownCloseButtonTextPadding: string;
        dropDownCloseButtonText: string;
        dropDownCloseButtonLocalizableText: string;
        dropDownCloseButtonTextAlignment: string;
        dropDownCloseButtonLineClamp: number;
        dropDownCloseButtonTextWrapping: string;
        dropDownCloseButtonTextTrimming: string;
        dropDownCloseButtonFontClass: string;
        dropDownCloseButtonFontSize: string;
        dropDownCloseButtonFontWeight: string;
        dropDownCloseButtonLineHeight: string;
        dropDownCloseButtonTextContrast: number;
        dropDownCloseButtonUppercase: boolean;
        dropDownCloseButtonTextPosition: string;
        dropDownCloseButtonBackgroundColor: string;
        dropDownCloseButtonHoverBackgroundColor: string;
        dropDownCloseButtonPressedBackgroundColor: string;
        dropDownCloseButtonDisabledBackgroundColor: string;
        dropDownCloseButtonForegroundColor: string;
        dropDownCloseButtonPressedForegroundColor: string;
        dropDownCloseButtonAuthSymbolForegroundColor: string;
        dropDownCloseButtonDisabledForegroundColor: string;
        dropDownCloseButtonBorderColor: string;
        dropDownCloseButtonHoverBorderColor: string;
        dropDownCloseButtonDisabledBorderColor: string;
        dropDownAcknowledgeButtonWidth: string;
        dropDownAcknowledgeButtonMinWidth: string;
        dropDownAcknowledgeButtonMaxWidth: string;
        dropDownAcknowledgeButtonHeight: string;
        dropDownAcknowledgeButtonMinHeight: string;
        dropDownAcknowledgeButtonMaxHeight: string;
        dropDownAcknowledgeButtonMargin: string;
        dropDownAcknowledgeButtonPadding: string;
        dropDownAcknowledgeButtonFlexShrink: number;
        dropDownAcknowledgeButtonFlexGrow: number;
        dropDownAcknowledgeButtonBorderWidth: string;
        dropDownAcknowledgeButtonBorderStyle: string;
        dropDownAcknowledgeButtonBorderRadius: string;
        dropDownAcknowledgeButtonOpacity: number;
        dropDownAcknowledgeButtonVisibility: string;
        dropDownAcknowledgeButtonShadow: string;
        dropDownAcknowledgeButtonPressedShadow: string;
        dropDownAcknowledgeButtonTransition: string;
        dropDownAcknowledgeButtonBackground: string;
        dropDownAcknowledgeButtonDisabled: boolean;
        dropDownAcknowledgeButtonShowSymbol: boolean;
        dropDownAcknowledgeButtonIconFont: string;
        dropDownAcknowledgeButtonSymbol: string;
        dropDownAcknowledgeButtonSymbolPressed: string;
        dropDownAcknowledgeButtonSymbolType: string;
        dropDownAcknowledgeButtonSymbolSize: string;
        dropDownAcknowledgeButtonSymbolMargin: string;
        dropDownAcknowledgeButtonSymbolPosition: string;
        dropDownAcknowledgeButtonShowText: boolean;
        dropDownAcknowledgeButtonTextWidth: string;
        dropDownAcknowledgeButtonTextHeight: string;
        dropDownAcknowledgeButtonTextMargin: string;
        dropDownAcknowledgeButtonTextPadding: string;
        dropDownAcknowledgeButtonText: string;
        dropDownAcknowledgeButtonLocalizableText: string;
        dropDownAcknowledgeButtonTextAlignment: string;
        dropDownAcknowledgeButtonLineClamp: number;
        dropDownAcknowledgeButtonTextWrapping: string;
        dropDownAcknowledgeButtonTextTrimming: string;
        dropDownAcknowledgeButtonFontClass: string;
        dropDownAcknowledgeButtonFontSize: string;
        dropDownAcknowledgeButtonFontWeight: string;
        dropDownAcknowledgeButtonLineHeight: string;
        dropDownAcknowledgeButtonTextContrast: number;
        dropDownAcknowledgeButtonUppercase: boolean;
        dropDownAcknowledgeButtonTextPosition: string;
        dropDownAcknowledgeButtonBackgroundColor: string;
        dropDownAcknowledgeButtonHoverBackgroundColor: string;
        dropDownAcknowledgeButtonPressedBackgroundColor: string;
        dropDownAcknowledgeButtonDisabledBackgroundColor: string;
        dropDownAcknowledgeButtonForegroundColor: string;
        dropDownAcknowledgeButtonPressedForegroundColor: string;
        dropDownAcknowledgeButtonAuthSymbolForegroundColor: string;
        dropDownAcknowledgeButtonDisabledForegroundColor: string;
        dropDownAcknowledgeButtonBorderColor: string;
        dropDownAcknowledgeButtonHoverBorderColor: string;
        dropDownAcknowledgeButtonDisabledBorderColor: string;
        dropDownCustomButtonWidth: string;
        dropDownCustomButtonMinWidth: string;
        dropDownCustomButtonMaxWidth: string;
        dropDownCustomButtonHeight: string;
        dropDownCustomButtonMinHeight: string;
        dropDownCustomButtonMaxHeight: string;
        dropDownCustomButtonMargin: string;
        dropDownCustomButtonPadding: string;
        dropDownCustomButtonFlexShrink: number;
        dropDownCustomButtonFlexGrow: number;
        dropDownCustomButtonBorderWidth: string;
        dropDownCustomButtonBorderStyle: string;
        dropDownCustomButtonBorderRadius: string;
        dropDownCustomButtonOpacity: number;
        dropDownCustomButtonVisibility: string;
        dropDownCustomButtonShadow: string;
        dropDownCustomButtonPressedShadow: string;
        dropDownCustomButtonTransition: string;
        dropDownCustomButtonBackground: string;
        dropDownCustomButtonDisabled: boolean;
        dropDownCustomButtonShowSymbol: boolean;
        dropDownCustomButtonIconFont: string;
        dropDownCustomButtonSymbol: string;
        dropDownCustomButtonSymbolPressed: string;
        dropDownCustomButtonSymbolType: string;
        dropDownCustomButtonSymbolSize: string;
        dropDownCustomButtonSymbolMargin: string;
        dropDownCustomButtonSymbolPosition: string;
        dropDownCustomButtonShowText: boolean;
        dropDownCustomButtonTextWidth: string;
        dropDownCustomButtonTextHeight: string;
        dropDownCustomButtonTextMargin: string;
        dropDownCustomButtonTextPadding: string;
        dropDownCustomButtonText: string;
        dropDownCustomButtonLocalizableText: string;
        dropDownCustomButtonTextAlignment: string;
        dropDownCustomButtonLineClamp: number;
        dropDownCustomButtonTextWrapping: string;
        dropDownCustomButtonTextTrimming: string;
        dropDownCustomButtonFontClass: string;
        dropDownCustomButtonFontSize: string;
        dropDownCustomButtonFontWeight: string;
        dropDownCustomButtonLineHeight: string;
        dropDownCustomButtonTextContrast: number;
        dropDownCustomButtonUppercase: boolean;
        dropDownCustomButtonTextPosition: string;
        dropDownCustomButtonBackgroundColor: string;
        dropDownCustomButtonHoverBackgroundColor: string;
        dropDownCustomButtonPressedBackgroundColor: string;
        dropDownCustomButtonDisabledBackgroundColor: string;
        dropDownCustomButtonForegroundColor: string;
        dropDownCustomButtonPressedForegroundColor: string;
        dropDownCustomButtonAuthSymbolForegroundColor: string;
        dropDownCustomButtonDisabledForegroundColor: string;
        dropDownCustomButtonBorderColor: string;
        dropDownCustomButtonHoverBorderColor: string;
        dropDownCustomButtonDisabledBorderColor: string;
        private _firstAttached;
        private get _isFirstAttached();
        private _alarmLineItemsCollection;
        private _clickHandler;
        private _alarmLineItemClickHandler;
        private _alarmLineItemCustomClickHandler;
        private _alarmLineItemAcknowledgeClickHandler;
        private _alarmsChangedHandler;
        constructor(element: any, options: any);
        registerChild(controlType: string, action: string, element: VWElement, options: any): any;
        createTemplate(): any;
        afterInit(): void;
        _updateColors(changes: any): void;
        _updateLayout(changes: any): void;
        attach(): Promise<any>;
        detach(): Promise<any>;
        dispose(): boolean;
        private _updateAlarmItemsSize;
        private _onChangeAlarms;
        private _onClick;
        private _onCustomClick;
        private _onAcknowledgeClick;
        private _onAlarmLineItemClick;
    }
}
//# sourceMappingURL=alarmline-collection.control.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.UI {
    class AlarmLineDropDownItem extends Lenze.UI.ControlBase {
        static onClickEventName: string;
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            iconFont: {
                propertyType: string;
                type: string;
                child: string;
                defaultValue: string;
            };
            symbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            symbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            countElementWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmClassWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmGroupWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmIdWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            textWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            fontClass: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            textWrapping: {
                propertyType: string;
                type: string;
                child: string;
                defaultValue: string;
            };
            dateTimeMode: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            formatDate: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            formatTime: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            showAlarmParam1: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            showAlarmGroup: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            actBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            actTextColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            actSymbolColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            actBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inactBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inactTextColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inactSymbolColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inactBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            actAckBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            actAckTextColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            actAckSymbolColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            actAckBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inactAckBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inactAckTextColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inactAckSymbolColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inactAckBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            buttonclick: {
                propertyType: string;
                group: string;
            };
        };
        iconFont: string;
        symbolType: string;
        symbol: string;
        countElementWidth: string;
        alarmClassWidth: string;
        alarmGroupWidth: string;
        alarmIdWidth: string;
        textWidth: string;
        fontClass: string;
        textWrapping: string;
        dateTimeMode: string;
        formatDate: string;
        formatTime: string;
        showAlarmParam1: boolean;
        showAlarmGroup: boolean;
        actBackgroundColor: string;
        actTextColor: string;
        actSymbolColor: string;
        actBorderColor: string;
        inactBackgroundColor: string;
        inactTextColor: string;
        inactSymbolColor: string;
        inactBorderColor: string;
        actAckBackgroundColor: string;
        actAckTextColor: string;
        actAckSymbolColor: string;
        actAckBorderColor: string;
        inactAckBackgroundColor: string;
        inactAckTextColor: string;
        inactAckSymbolColor: string;
        inactAckBorderColor: string;
        private _subElement;
        private _iconElement;
        private _countElement;
        private _alarmClassElement;
        private _classDividerElement;
        private _alarmGroupElement;
        private _groupDividerElement;
        private _alarmIdElement;
        private _idDividerElement;
        private _textElement;
        private _dateTimeElement;
        private _activeAlarm;
        private _elementClickHandler;
        constructor(element: any, options: any);
        createTemplate(): any;
        _updateColors(changes: any): void;
        _updateLayout(changes: any): void;
        attach(): Promise<any>;
        detach(): Promise<any>;
        dispose(): boolean;
        updateAlarm(alarm: VisiWin.System.Alarm.IAlarmItem | null): void;
        private _onElementClick;
        private getColors;
        private getAlarmColors;
    }
}
//# sourceMappingURL=alarmline-dropdown-item.control.d.ts.map
declare namespace Lenze.UI {
    class AlarmLineItem extends Lenze.UI.ControlBase {
        static alarmsChangedEventName: string;
        static onClickEventName: string;
        static onCustomClickEventName: string;
        static onAcknowledgeClickEventName: string;
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            registerSourceId: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            iconFont: {
                propertyType: string;
                type: string;
                child: string;
                defaultValue: string;
            };
            symbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            symbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            desiredAlarmClasses: {
                propertyType: string;
                type: string;
            };
            showDetails: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            fontClass: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            alarmClassWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            alarmClassMaxWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            alarmClassTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            alarmClassLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            alarmGroupWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            alarmGroupMaxWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            alarmGroupTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            alarmGroupLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            alarmIdWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            alarmIdMaxWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            alarmIdTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            alarmIdLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            alarmTextWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            alarmTextMaxWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            alarmTextTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            alarmTextLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            clip: {
                propertyType: string;
                type: string;
                child: string;
                defaultValue: string;
            };
            showAlarmParam1: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            showAlarmGroup: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            newestAlarmOnTop: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            dropDownEnabled: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            dateTimeMode: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            formatDate: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            formatTime: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            actBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            actTextColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            actSymbolColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            actBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inactBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inactTextColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inactSymbolColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inactBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            actAckBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            actAckTextColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            actAckSymbolColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            actAckBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inactAckBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inactAckTextColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inactAckSymbolColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inactAckBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownPadding: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownBorderRadius: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownBorderStyle: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownBorderWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownIconFont: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownSymbolType: {
                propertyType: string;
                type: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownSymbol: {
                propertyType: string;
                type: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownFontClass: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownTextWrapping: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dropDownBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownActBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownActTextColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownActSymbolColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownActBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownInactBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownInactTextColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownInactSymbolColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownInactBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownActAckBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownActAckTextColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownActAckSymbolColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownActAckBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownInactAckBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownInactAckTextColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownInactAckSymbolColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownInactAckBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dropDownCloseButtonWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonMinWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonMaxWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dropDownCloseButtonHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonMinHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonMaxHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dropDownCloseButtonMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonPadding: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonFlexShrink: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: number;
            };
            dropDownCloseButtonFlexGrow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: number;
            };
            dropDownCloseButtonBorderWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonBorderStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonBorderRadius: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonOpacity: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: number;
            };
            dropDownCloseButtonVisibility: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dropDownCloseButtonPressedShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dropDownCloseButtonTransition: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonBackground: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dropDownCloseButtonDisabled: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            dropDownCloseButtonShowSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            dropDownCloseButtonIconFont: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dropDownCloseButtonSymbolPressed: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dropDownCloseButtonSymbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonSymbolSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonSymbolMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonSymbolPosition: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonShowText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            dropDownCloseButtonTextWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonTextHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonTextMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonTextPadding: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonLocalizableText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dropDownCloseButtonTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: number;
            };
            dropDownCloseButtonTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: number;
            };
            dropDownCloseButtonUppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            dropDownCloseButtonTextPosition: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonHoverBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonPressedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonDisabledBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonPressedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonAuthSymbolForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonDisabledForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonHoverBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCloseButtonDisabledBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonMinWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonMaxWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dropDownAcknowledgeButtonHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonMinHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonMaxHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dropDownAcknowledgeButtonMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonPadding: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonFlexShrink: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: number;
            };
            dropDownAcknowledgeButtonFlexGrow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: number;
            };
            dropDownAcknowledgeButtonBorderWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonBorderStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonBorderRadius: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonOpacity: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: number;
            };
            dropDownAcknowledgeButtonVisibility: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dropDownAcknowledgeButtonPressedShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dropDownAcknowledgeButtonTransition: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonBackground: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dropDownAcknowledgeButtonDisabled: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            dropDownAcknowledgeButtonShowSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            dropDownAcknowledgeButtonIconFont: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dropDownAcknowledgeButtonSymbolPressed: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dropDownAcknowledgeButtonSymbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonSymbolSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonSymbolMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonSymbolPosition: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonShowText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            dropDownAcknowledgeButtonTextWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonTextHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonTextMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonTextPadding: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonLocalizableText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dropDownAcknowledgeButtonTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: number;
            };
            dropDownAcknowledgeButtonTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: number;
            };
            dropDownAcknowledgeButtonUppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            dropDownAcknowledgeButtonTextPosition: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonHoverBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonPressedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonDisabledBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonPressedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonAuthSymbolForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonDisabledForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonHoverBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownAcknowledgeButtonDisabledBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonMinWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonMaxWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dropDownCustomButtonHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonMinHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonMaxHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dropDownCustomButtonMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonPadding: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonFlexShrink: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: number;
            };
            dropDownCustomButtonFlexGrow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: number;
            };
            dropDownCustomButtonBorderWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonBorderStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonBorderRadius: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonOpacity: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: number;
            };
            dropDownCustomButtonVisibility: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dropDownCustomButtonPressedShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dropDownCustomButtonTransition: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonBackground: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dropDownCustomButtonDisabled: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            dropDownCustomButtonShowSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            dropDownCustomButtonIconFont: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonSymbolPressed: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dropDownCustomButtonSymbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonSymbolSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonSymbolMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonSymbolPosition: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonShowText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            dropDownCustomButtonTextWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonTextHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonTextMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonTextPadding: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonLocalizableText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dropDownCustomButtonTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: number;
            };
            dropDownCustomButtonTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: number;
            };
            dropDownCustomButtonUppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            dropDownCustomButtonTextPosition: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonHoverBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonPressedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonDisabledBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonPressedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonAuthSymbolForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonDisabledForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonHoverBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            dropDownCustomButtonDisabledBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            alarmschanged: {
                propertyType: string;
                group: string;
            };
            buttonclick: {
                propertyType: string;
                group: string;
            };
            customclick: {
                propertyType: string;
                group: string;
            };
            acknowledgeclick: {
                propertyType: string;
                group: string;
            };
        };
        iconFont: string;
        symbolType: string;
        symbol: string;
        desiredAlarmClasses: string;
        showDetails: boolean;
        fontClass: string;
        textWrapping: string;
        clip: string;
        lineClamp: string;
        get hasActiveAlarm(): boolean;
        showAlarmParam1: boolean;
        showAlarmGroup: boolean;
        newestAlarmOnTop: boolean;
        dropDownEnabled: boolean;
        dateTimeMode: string;
        formatDate: string;
        formatTime: string;
        actBackgroundColor: string;
        actTextColor: string;
        actSymbolColor: string;
        actBorderColor: string;
        inactBackgroundColor: string;
        inactTextColor: string;
        inactSymbolColor: string;
        inactBorderColor: string;
        actAckBackgroundColor: string;
        actAckTextColor: string;
        actAckSymbolColor: string;
        actAckBorderColor: string;
        inactAckBackgroundColor: string;
        inactAckTextColor: string;
        inactAckSymbolColor: string;
        inactAckBorderColor: string;
        dropDownMargin: string;
        dropDownPadding: string;
        dropDownBorderRadius: string;
        dropDownBorderStyle: string;
        dropDownBorderWidth: string;
        dropDownIconFont: string;
        dropDownSymbolType: string;
        dropDownSymbol: string;
        dropDownFontClass: string;
        dropDownTextWrapping: string;
        dropDownBackgroundColor: string;
        dropDownBorderColor: string;
        dropDownActBackgroundColor: string;
        dropDownActTextColor: string;
        dropDownActSymbolColor: string;
        dropDownActBorderColor: string;
        dropDownInactBackgroundColor: string;
        dropDownInactTextColor: string;
        dropDownInactSymbolColor: string;
        dropDownInactBorderColor: string;
        dropDownActAckBackgroundColor: string;
        dropDownActAckTextColor: string;
        dropDownActAckSymbolColor: string;
        dropDownActAckBorderColor: string;
        dropDownInactAckBackgroundColor: string;
        dropDownInactAckTextColor: string;
        dropDownInactAckSymbolColor: string;
        dropDownInactAckBorderColor: string;
        dropDownCloseButtonWidth: string;
        dropDownCloseButtonMinWidth: string;
        dropDownCloseButtonMaxWidth: string;
        dropDownCloseButtonHeight: string;
        dropDownCloseButtonMinHeight: string;
        dropDownCloseButtonMaxHeight: string;
        dropDownCloseButtonMargin: string;
        dropDownCloseButtonPadding: string;
        dropDownCloseButtonFlexShrink: number;
        dropDownCloseButtonFlexGrow: number;
        dropDownCloseButtonBorderWidth: string;
        dropDownCloseButtonBorderStyle: string;
        dropDownCloseButtonBorderRadius: string;
        dropDownCloseButtonOpacity: number;
        dropDownCloseButtonVisibility: string;
        dropDownCloseButtonShadow: string;
        dropDownCloseButtonPressedShadow: string;
        dropDownCloseButtonTransition: string;
        dropDownCloseButtonBackground: string;
        dropDownCloseButtonDisabled: boolean;
        dropDownCloseButtonShowSymbol: boolean;
        dropDownCloseButtonIconFont: string;
        dropDownCloseButtonSymbol: string;
        dropDownCloseButtonSymbolPressed: string;
        dropDownCloseButtonSymbolType: string;
        dropDownCloseButtonSymbolSize: string;
        dropDownCloseButtonSymbolMargin: string;
        dropDownCloseButtonSymbolPosition: string;
        dropDownCloseButtonShowText: boolean;
        dropDownCloseButtonTextWidth: string;
        dropDownCloseButtonTextHeight: string;
        dropDownCloseButtonTextMargin: string;
        dropDownCloseButtonTextPadding: string;
        dropDownCloseButtonText: string;
        dropDownCloseButtonLocalizableText: string;
        dropDownCloseButtonTextAlignment: string;
        dropDownCloseButtonLineClamp: number;
        dropDownCloseButtonTextWrapping: string;
        dropDownCloseButtonTextTrimming: string;
        dropDownCloseButtonFontClass: string;
        dropDownCloseButtonFontSize: string;
        dropDownCloseButtonFontWeight: string;
        dropDownCloseButtonLineHeight: string;
        dropDownCloseButtonTextContrast: number;
        dropDownCloseButtonUppercase: boolean;
        dropDownCloseButtonTextPosition: string;
        dropDownCloseButtonBackgroundColor: string;
        dropDownCloseButtonHoverBackgroundColor: string;
        dropDownCloseButtonPressedBackgroundColor: string;
        dropDownCloseButtonDisabledBackgroundColor: string;
        dropDownCloseButtonForegroundColor: string;
        dropDownCloseButtonPressedForegroundColor: string;
        dropDownCloseButtonAuthSymbolForegroundColor: string;
        dropDownCloseButtonDisabledForegroundColor: string;
        dropDownCloseButtonBorderColor: string;
        dropDownCloseButtonHoverBorderColor: string;
        dropDownCloseButtonDisabledBorderColor: string;
        dropDownAcknowledgeButtonWidth: string;
        dropDownAcknowledgeButtonMinWidth: string;
        dropDownAcknowledgeButtonMaxWidth: string;
        dropDownAcknowledgeButtonHeight: string;
        dropDownAcknowledgeButtonMinHeight: string;
        dropDownAcknowledgeButtonMaxHeight: string;
        dropDownAcknowledgeButtonMargin: string;
        dropDownAcknowledgeButtonPadding: string;
        dropDownAcknowledgeButtonFlexShrink: number;
        dropDownAcknowledgeButtonFlexGrow: number;
        dropDownAcknowledgeButtonBorderWidth: string;
        dropDownAcknowledgeButtonBorderStyle: string;
        dropDownAcknowledgeButtonBorderRadius: string;
        dropDownAcknowledgeButtonOpacity: number;
        dropDownAcknowledgeButtonVisibility: string;
        dropDownAcknowledgeButtonShadow: string;
        dropDownAcknowledgeButtonPressedShadow: string;
        dropDownAcknowledgeButtonTransition: string;
        dropDownAcknowledgeButtonBackground: string;
        dropDownAcknowledgeButtonDisabled: boolean;
        dropDownAcknowledgeButtonShowSymbol: boolean;
        dropDownAcknowledgeButtonIconFont: string;
        dropDownAcknowledgeButtonSymbol: string;
        dropDownAcknowledgeButtonSymbolPressed: string;
        dropDownAcknowledgeButtonSymbolType: string;
        dropDownAcknowledgeButtonSymbolSize: string;
        dropDownAcknowledgeButtonSymbolMargin: string;
        dropDownAcknowledgeButtonSymbolPosition: string;
        dropDownAcknowledgeButtonShowText: boolean;
        dropDownAcknowledgeButtonTextWidth: string;
        dropDownAcknowledgeButtonTextHeight: string;
        dropDownAcknowledgeButtonTextMargin: string;
        dropDownAcknowledgeButtonTextPadding: string;
        dropDownAcknowledgeButtonText: string;
        dropDownAcknowledgeButtonLocalizableText: string;
        dropDownAcknowledgeButtonTextAlignment: string;
        dropDownAcknowledgeButtonLineClamp: number;
        dropDownAcknowledgeButtonTextWrapping: string;
        dropDownAcknowledgeButtonTextTrimming: string;
        dropDownAcknowledgeButtonFontClass: string;
        dropDownAcknowledgeButtonFontSize: string;
        dropDownAcknowledgeButtonFontWeight: string;
        dropDownAcknowledgeButtonLineHeight: string;
        dropDownAcknowledgeButtonTextContrast: number;
        dropDownAcknowledgeButtonUppercase: boolean;
        dropDownAcknowledgeButtonTextPosition: string;
        dropDownAcknowledgeButtonBackgroundColor: string;
        dropDownAcknowledgeButtonHoverBackgroundColor: string;
        dropDownAcknowledgeButtonPressedBackgroundColor: string;
        dropDownAcknowledgeButtonDisabledBackgroundColor: string;
        dropDownAcknowledgeButtonForegroundColor: string;
        dropDownAcknowledgeButtonPressedForegroundColor: string;
        dropDownAcknowledgeButtonAuthSymbolForegroundColor: string;
        dropDownAcknowledgeButtonDisabledForegroundColor: string;
        dropDownAcknowledgeButtonBorderColor: string;
        dropDownAcknowledgeButtonHoverBorderColor: string;
        dropDownAcknowledgeButtonDisabledBorderColor: string;
        dropDownCustomButtonWidth: string;
        dropDownCustomButtonMinWidth: string;
        dropDownCustomButtonMaxWidth: string;
        dropDownCustomButtonHeight: string;
        dropDownCustomButtonMinHeight: string;
        dropDownCustomButtonMaxHeight: string;
        dropDownCustomButtonMargin: string;
        dropDownCustomButtonPadding: string;
        dropDownCustomButtonFlexShrink: number;
        dropDownCustomButtonFlexGrow: number;
        dropDownCustomButtonBorderWidth: string;
        dropDownCustomButtonBorderStyle: string;
        dropDownCustomButtonBorderRadius: string;
        dropDownCustomButtonOpacity: number;
        dropDownCustomButtonVisibility: string;
        dropDownCustomButtonShadow: string;
        dropDownCustomButtonPressedShadow: string;
        dropDownCustomButtonTransition: string;
        dropDownCustomButtonBackground: string;
        dropDownCustomButtonDisabled: boolean;
        dropDownCustomButtonShowSymbol: boolean;
        dropDownCustomButtonIconFont: string;
        dropDownCustomButtonSymbol: string;
        dropDownCustomButtonSymbolPressed: string;
        dropDownCustomButtonSymbolType: string;
        dropDownCustomButtonSymbolSize: string;
        dropDownCustomButtonSymbolMargin: string;
        dropDownCustomButtonSymbolPosition: string;
        dropDownCustomButtonShowText: boolean;
        dropDownCustomButtonTextWidth: string;
        dropDownCustomButtonTextHeight: string;
        dropDownCustomButtonTextMargin: string;
        dropDownCustomButtonTextPadding: string;
        dropDownCustomButtonText: string;
        dropDownCustomButtonLocalizableText: string;
        dropDownCustomButtonTextAlignment: string;
        dropDownCustomButtonLineClamp: number;
        dropDownCustomButtonTextWrapping: string;
        dropDownCustomButtonTextTrimming: string;
        dropDownCustomButtonFontClass: string;
        dropDownCustomButtonFontSize: string;
        dropDownCustomButtonFontWeight: string;
        dropDownCustomButtonLineHeight: string;
        dropDownCustomButtonTextContrast: number;
        dropDownCustomButtonUppercase: boolean;
        dropDownCustomButtonTextPosition: string;
        dropDownCustomButtonBackgroundColor: string;
        dropDownCustomButtonHoverBackgroundColor: string;
        dropDownCustomButtonPressedBackgroundColor: string;
        dropDownCustomButtonDisabledBackgroundColor: string;
        dropDownCustomButtonForegroundColor: string;
        dropDownCustomButtonPressedForegroundColor: string;
        dropDownCustomButtonAuthSymbolForegroundColor: string;
        dropDownCustomButtonDisabledForegroundColor: string;
        dropDownCustomButtonBorderColor: string;
        dropDownCustomButtonHoverBorderColor: string;
        dropDownCustomButtonDisabledBorderColor: string;
        private _itemElement;
        private _dropDownIconElement;
        private _containerElement;
        private _iconElement;
        private _countElement;
        private _growIconElement;
        private _detailsElement;
        private _alarmClassElement;
        private _alarmGroupElement;
        private _classDividerElement;
        private _groupDividerElement;
        private _alarmIdElement;
        private _idDividerElement;
        private _textElement;
        private _dateTimeElement;
        private _dropDownContainerElement;
        private _dropDownAlarmsContainerElement;
        private _dropDownAlarmElements;
        private _dropDownButtonsContainerElement;
        private _dropDownCustomButtonElement;
        private _dropDownActionButtonsContainerElement;
        private _dropDownCloseButtonElement;
        private _dropDownAcknowledgeButtonElement;
        private _alarmService;
        private _currentAlarms;
        private _activeAlarm;
        private _hasActiveAlarm;
        private _desiredAlarms;
        private _oldElementHeight;
        private _stateValues;
        private _elementClickHandler;
        private _closeButtonClickHandler;
        private _customButtonClickHandler;
        private _acknowledgeClickHandler;
        private _initAlarmHandler;
        private _newAlarmHandler;
        private _changeAlarmHandler;
        private _clearAlarmHandler;
        constructor(element: any, options: any);
        createTemplate(): any;
        afterInit(): void;
        _updateColors(changes: any): void;
        _updateLayout(changes: any): void;
        attach(): Promise<any>;
        detach(): Promise<any>;
        dispose(): boolean;
        resizeHandler(): void;
        private _onInitAlarm;
        private _onNewAlarm;
        private _onChangeAlarm;
        private _onClearAlarm;
        private _onElementClick;
        private _onCloseButtonClick;
        private _onCustomButtonClick;
        private _onAcknowledgeButtonClick;
        private _updateDropDown;
        private _updateAlarmState;
        private getColors;
        private getAlarmColors;
    }
}
//# sourceMappingURL=alarmline-item.control.d.ts.map
declare namespace Lenze.UI {
    class CognexCamera extends Lenze.UI.ControlBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            isHttps: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            ipAddress: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            port: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
        };
        isHttps: boolean;
        ipAddress: string;
        port: number;
        private readonly _ipAddressRegex;
        private _webPageElement;
        private get _webPageControl();
        constructor(element: any, options: any);
        createTemplate(): Promise<any> | null;
        _updateLayout(changes: any): void;
        private _validIpAddress;
        private _createUrl;
    }
}
//# sourceMappingURL=cognex-camera.control.d.ts.map
declare namespace Lenze.UI {
    class ImageRefresher extends Lenze.UI.ControlBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            source: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            altText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            refreshRate: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
        };
        source: string;
        altText: string;
        refreshRate: number;
        backgroundColor: string;
        private _imageElement;
        private _intervalId;
        private _intervalHandler;
        constructor(element: any, options: any);
        createTemplate(): Promise<any> | null;
        createHandler(): void;
        _updateColors(changes: any): void;
        _updateLayout(changes: any): void;
        attach(): Promise<any>;
        detach(): Promise<any>;
        dispose(): boolean;
        private _startInterval;
        private _stopInterval;
        private _onInterval;
    }
}
//# sourceMappingURL=image-refresher.control.d.ts.map
declare namespace Lenze.UI {
    class WebPage extends Lenze.UI.ControlBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            source: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
        };
        source: string;
        private _iframeElement;
        constructor(element: any, options: any);
        _updateLayout(changes: any): void;
        attach(): Promise<any>;
        detach(): Promise<any>;
        dispose(): boolean;
        private _createIFrameElement;
        private _destroyIFrameElement;
    }
}
//# sourceMappingURL=web-page.control.d.ts.map
declare namespace Lenze.UI {
    class SegmentBar extends Lenze.UI.VariableBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            disabled: {
                propertyType: string;
                type: string;
            };
            headerLabelContainerWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            headerLabelContainerHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            headerLabelContainerMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            headerLabelContainerPadding: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            headerShowLabel: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            headerLabelWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            headerLabelHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            headerLabelMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            headerLabelPadding: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            headerLabelText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            headerLocalizableLabelText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            headerLabelTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            headerLabelLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            headerLabelTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            headerLabelTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            headerLabelFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            headerLabelFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            headerLabelFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            headerLabelLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            headerLabelTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            headerLabelUppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            headerLabelShowSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            headerLabelIconFont: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            headerLabelSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            headerLabelSymbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            headerLabelSymbolSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            headerLabelSymbolMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            headerLabelSymbolPosition: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            variableName: {
                propertyType: string;
                type: string;
            };
            value: {
                propertyType: string;
                type: string;
            };
            roundMode: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            minValue: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            maxValue: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            barsPadding: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            barsAmount: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            barsSpaceBetween: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            barsBorderRadius: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            footerValueContainerWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerValueContainerHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerValueContainerMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            footerValueContainerPadding: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            showFooterValue: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerValueWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerValueHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerValueMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            footerValuePadding: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            footerValue: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerValueTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            footerValueLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerValueTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerValueTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerValueFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerValueFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerValueFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerValueLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerValueTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            showFooterUnit: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerUnitWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            footerUnitHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerUnitMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            footerUnitPadding: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            useVariableFooterUnitText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerUnitText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            localizableFooterUnitText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerUnitTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerUnitLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerUnitTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerUnitTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerUnitFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerUnitFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerUnitFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerUnitLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerUnitTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            footerUnitPosition: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            barActiveColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            barInactiveColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            borderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            bodyForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            headerLabelForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            headerSymbolForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            footerValueForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            footerUnitForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            disabledBarActiveColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            disabledBarInactiveColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            disabledBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            disabledBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            disabledForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
        };
        headerLabelContainerWidth: string;
        headerLabelContainerHeight: string;
        headerLabelContainerMargin: string;
        headerLabelContainerPadding: string;
        headerShowLabel: boolean;
        headerLabelWidth: string;
        headerLabelHeight: string;
        headerLabelMargin: string;
        headerLabelPadding: string;
        headerLabelText: string;
        headerLocalizableLabelText: string;
        headerLabelTextAlignment: string;
        headerLabelLineClamp: number;
        headerLabelTextWrapping: string;
        headerLabelTextTrimming: string;
        headerLabelFontClass: string;
        headerLabelFontSize: string;
        headerLabelFontWeight: string;
        headerLabelLineHeight: string;
        headerLabelTextContrast: number;
        headerLabelUppercase: boolean;
        headerLabelShowSymbol: boolean;
        headerLabelIconFont: string;
        headerLabelSymbol: string;
        headerLabelSymbolType: string;
        headerLabelSymbolSize: string;
        headerLabelSymbolMargin: string;
        headerLabelSymbolPosition: string;
        roundMode: string;
        minValue: number;
        maxValue: number;
        barsPadding: string;
        barsAmount: number;
        barsSpaceBetween: string;
        barsBorderRadius: string;
        footerValueContainerWidth: string;
        footerValueContainerHeight: string;
        footerValueContainerMargin: string;
        footerValueContainerPadding: string;
        showFooterValue: boolean;
        footerValueWidth: string;
        footerValueHeight: string;
        footerValueMargin: string;
        footerValuePadding: string;
        footerValue: number;
        footerValueTextAlignment: string;
        footerValueLineClamp: number;
        footerValueTextWrapping: string;
        footerValueTextTrimming: string;
        footerValueFontClass: string;
        footerValueFontSize: string;
        footerValueFontWeight: string;
        footerValueLineHeight: string;
        footerValueTextContrast: number;
        showFooterUnit: boolean;
        footerUnitWidth: string;
        footerUnitHeight: string;
        footerUnitMargin: string;
        footerUnitPadding: string;
        useVariableFooterUnitText: boolean;
        footerUnitText: string;
        localizableFooterUnitText: string;
        footerUnitTextAlignment: string;
        footerUnitLineClamp: number;
        footerUnitTextWrapping: string;
        footerUnitTextTrimming: string;
        footerUnitFontClass: string;
        footerUnitFontSize: string;
        footerUnitFontWeight: string;
        footerUnitLineHeight: string;
        footerUnitTextContrast: number;
        footerUnitPosition: string;
        barActiveColor: string;
        barInactiveColor: string;
        backgroundColor: string;
        borderColor: string;
        bodyForegroundColor: string;
        headerLabelForegroundColor: string;
        headerSymbolForegroundColor: string;
        footerValueForegroundColor: string;
        footerUnitForegroundColor: string;
        disabledBarActiveColor: string;
        disabledBarInactiveColor: string;
        disabledBackgroundColor: string;
        disabledBorderColor: string;
        disabledForegroundColor: string;
        private _headerElement;
        private _headerLabelElement;
        private _bodyElement;
        private _bodyValuesElement;
        private _bodyMinValueElement;
        private _bodyMiddleValueElement;
        private _bodyMaxValueElement;
        private _bodyBarsElement;
        private _bodyBars;
        private _footerElement;
        private _footerValueElement;
        private readonly _barClass;
        private readonly _activeBarClass;
        private readonly _roundMethods;
        constructor(element: any, options: any);
        createTemplate(): Promise<any> | null;
        _updateColors(changes: any): void;
        _updateLayout(changes: any): void;
        private _setBarsColor;
        private _setBodyColor;
        private _setBodyBars;
        private _updateBarClasses;
    }
}
//# sourceMappingURL=segment-bar.control.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.UI {
    interface CurveRecordObject {
        d3Method: any;
        curveValueMethod: any | undefined;
    }
    class XYChartLine extends Lenze.UI.ControlBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            registerSourceId: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dataArrayXVariableName: {
                propertyType: string;
                type: string;
            };
            dataArrayYVariableName: {
                propertyType: string;
                type: string;
            };
            nullValue: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            transitionTime: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            strokeWidth: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            strokeLineJoin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            strokeLineCap: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            strokeColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            strokeStyle: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            strokeDash: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            enableDots: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            dotsFillColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dotsRadius: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            curve: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            curveValue: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
        };
        dataArrayXVariableName: string;
        dataArrayYVariableName: string;
        nullValue: number;
        transitionTime: number;
        strokeWidth: number;
        strokeLineJoin: string;
        strokeLineCap: string;
        strokeColor: string;
        strokeStyle: string;
        strokeDash: string;
        enableDots: boolean;
        dotsFillColor: string;
        dotsRadius: number;
        curve: string;
        curveValue: number;
        dataChanged: VisiWin.Internal.System.Events.TypedEvent<any, any>;
        private _attachVariablesPromise;
        private _variableService;
        private _xArrayVariable;
        private _yArrayVariable;
        private _variableChangedHandler;
        private _curveMethods;
        private _designTimeArrayX;
        private _designTimeArrayY;
        constructor(element: any, options: any);
        createHandler(): void;
        afterInit(): void;
        _updateColors(changes: any): void;
        _updateLayout(changes: any): void;
        getDataAsync(isXAxisDate: boolean): Promise<Models.XYDataObjectMember[]>;
        addToSvg(svg: any, data: Models.XYDataObjectMember[], x: any, y: any, lineNumber: number): void;
        attach(): Promise<any>;
        detach(): Promise<any>;
        dispose(): boolean;
        private _getVariable;
        private _onVariableChange;
        private _isVariableValid;
        private _getColor;
        private _createLine;
        private _createDots;
        private _applyCurveMethod;
        private _canApplyCurveValue;
        private _randomInt;
    }
}
//# sourceMappingURL=xy-chart-line.control.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.UI {
    class XYChart extends Lenze.UI.ControlBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            registerTargetId: {
                propertyType: string;
                defaultValue: string;
            };
            transitionTime: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            chartWidth: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            chartHeight: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            chartMarginTop: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            chartMarginRight: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            chartMarginBottom: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            chartMarginLeft: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            yAxisMinOffset: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            yAxisMaxOffset: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            yAxisMinValueDynamic: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            xAxisDateTime: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            chartElements: {
                propertyType: string;
                type: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
        };
        transitionTime: number;
        chartWidth: number;
        chartHeight: number;
        chartMarginTop: number;
        chartMarginRight: number;
        chartMarginBottom: number;
        chartMarginLeft: number;
        yAxisMinOffset: number;
        yAxisMaxOffset: number;
        yAxisMinValueDynamic: boolean;
        xAxisDateTime: boolean;
        backgroundColor: string;
        chartElements: string;
        private _firstAttached;
        private get _isFirstAttached();
        private _chartElementsCollection;
        private _svgContainer;
        private _svg;
        private _clip;
        private _x;
        private _y;
        private _xAxis;
        private _yAxis;
        private _brush;
        private _xyChartLineDataChanged;
        private _isBusyDrawing;
        private _isInitialized;
        constructor(element: any, options: any);
        createTemplate(): any;
        createHandler(): void;
        dispose(): boolean;
        registerChild(controlType: string, action: string, element: VWElement, options: any): any;
        _updateColors(changes: any): void;
        _updateLayout(changes: any): void;
        private _resetChartAsync;
        private _createChart;
        private _updateChartAsync;
        private _onXYChartLineDataChangedAsync;
    }
}
//# sourceMappingURL=xy-chart.control.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.UI {
    class AlarmLineBase extends VisiWin.UI.ControlBase {
        static namespace: string;
        static controlName: string;
        static className: string;
        static propertyList: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            iconFont: {
                propertyType: string;
                type: string;
                child: string;
                defaultValue: string;
            };
            symbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            symbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            desiredAlarmClasses: {
                propertyType: string;
                type: string;
            };
            showDetails: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            fontClass: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            textWrapping: {
                propertyType: string;
                type: string;
                child: string;
                defaultValue: string;
            };
            dateFormat: {
                propertyType: string;
                type: string;
                child: string;
            };
            timeFormat: {
                propertyType: string;
                type: string;
                child: string;
            };
            actBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            actTextColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            actSymbolColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            actBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inactBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inactTextColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inactSymbolColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inactBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            actAckBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            actAckTextColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            actAckSymbolColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            actAckBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inactAckBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inactAckTextColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inactAckSymbolColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inactAckBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
        };
        iconFont: string;
        symbolType: string;
        symbol: string;
        desiredAlarmClasses: string;
        showDetails: boolean;
        fontClass: string;
        textWrapping: string;
        hasActiveAlarm: boolean;
        alarmsChanged: VisiWin.Internal.System.Events.TypedEvent<any, any>;
        dateFormat: string;
        timeFormat: string;
        actBackgroundColor: string;
        actTextColor: string;
        actSymbolColor: string;
        actBorderColor: string;
        inactBackgroundColor: string;
        inactTextColor: string;
        inactSymbolColor: string;
        inactBorderColor: string;
        actAckBackgroundColor: string;
        actAckTextColor: string;
        actAckSymbolColor: string;
        actAckBorderColor: string;
        inactAckBackgroundColor: string;
        inactAckTextColor: string;
        inactAckSymbolColor: string;
        inactAckBorderColor: string;
        private _containerElement;
        private _iconElement;
        private _countElement;
        private _detailsElement;
        private _alarmClassElement;
        private _classDividerElement;
        private _alarmIdElement;
        private _idDividerElement;
        private _textElement;
        private _dateTimeElement;
        private _alarmService;
        private _currentAlarms;
        private _activeAlarm?;
        private _isInDesignMode;
        private _desiredAlarms;
        constructor(element: any, options: any);
        createTemplate(): any;
        private onInitAlarm;
        private onNewAlarm;
        private onChangeAlarm;
        private onClearAlarm;
        private updateAlarmState;
        private getColors;
        _updateColors(changes: any): void;
        _updateLayout(changes: any): void;
        afterInit(): void;
        dispose(): boolean;
    }
}
//# sourceMappingURL=alarm-line-base.control.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.UI {
    class AlarmLine extends VisiWin.UI.ControlBase {
        static namespace: string;
        static controlName: string;
        static className: string;
        static propertyList: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            inactiveBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dateFormat: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            timeFormat: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            alarmOnePadding: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmOneFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmOneTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmOneIconFont: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmOneSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmOneSymbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmOneDesiredClasses: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmOneBorderWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmOneActBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmOneActTextColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmOneActSymbolColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmOneActBorderColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmOneInactBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmOneInactTextColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmOneInactSymbolColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmOneInactBorderColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmOneActAckBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmOneActAckTextColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmOneActAckSymbolColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmOneActAckBorderColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmOneInactAckBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmOneInactAckTextColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmOneInactAckSymbolColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmOneInactAckBorderColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmTwoPadding: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmTwoFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmTwoTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmTwoIconFont: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmTwoSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmTwoSymbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmTwoDesiredClasses: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmTwoBorderWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmTwoActBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmTwoActTextColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmTwoActSymbolColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmTwoActBorderColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmTwoInactBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmTwoInactTextColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmTwoInactSymbolColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmTwoInactBorderColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmTwoActAckBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmTwoActAckTextColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmTwoActAckSymbolColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmTwoActAckBorderColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmTwoInactAckBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmTwoInactAckTextColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmTwoInactAckSymbolColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmTwoInactAckBorderColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmThreePadding: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmThreeFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmThreeTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmThreeIconFont: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmThreeSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmThreeSymbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmThreeDesiredClasses: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmThreeBorderWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            alarmThreeActBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmThreeActTextColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmThreeActSymbolColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmThreeActBorderColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmThreeInactBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmThreeInactTextColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmThreeInactSymbolColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmThreeInactBorderColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmThreeActAckBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmThreeActAckTextColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmThreeActAckSymbolColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmThreeActAckBorderColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmThreeInactAckBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmThreeInactAckTextColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmThreeInactAckSymbolColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
            alarmThreeInactAckBorderColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
            };
        };
        inactiveBackgroundColor: string;
        dateFormat: string;
        timeFormat: string;
        alarmOnePadding: string;
        alarmOneFontClass: string;
        alarmOneTextWrapping: string;
        alarmOneIconFont: string;
        alarmOneSymbol: string;
        alarmOneSymbolType: string;
        alarmOneDesiredClasses: string;
        alarmOneBorderWidth: string;
        alarmOneActBackgroundColor: string;
        alarmOneActTextColor: string;
        alarmOneActSymbolColor: string;
        alarmOneActBorderColor: string;
        alarmOneInactBackgroundColor: string;
        alarmOneInactTextColor: string;
        alarmOneInactSymbolColor: string;
        alarmOneInactBorderColor: string;
        alarmOneActAckBackgroundColor: string;
        alarmOneActAckTextColor: string;
        alarmOneActAckSymbolColor: string;
        alarmOneActAckBorderColor: string;
        alarmOneInactAckBackgroundColor: string;
        alarmOneInactAckTextColor: string;
        alarmOneInactAckSymbolColor: string;
        alarmOneInactAckBorderColor: string;
        alarmTwoPadding: string;
        alarmTwoFontClass: string;
        alarmTwoTextWrapping: string;
        alarmTwoIconFont: string;
        alarmTwoSymbol: string;
        alarmTwoSymbolType: string;
        alarmTwoDesiredClasses: string;
        alarmTwoBorderWidth: string;
        alarmTwoActBackgroundColor: string;
        alarmTwoActTextColor: string;
        alarmTwoActSymbolColor: string;
        alarmTwoActBorderColor: string;
        alarmTwoInactBackgroundColor: string;
        alarmTwoInactTextColor: string;
        alarmTwoInactSymbolColor: string;
        alarmTwoInactBorderColor: string;
        alarmTwoActAckBackgroundColor: string;
        alarmTwoActAckTextColor: string;
        alarmTwoActAckSymbolColor: string;
        alarmTwoActAckBorderColor: string;
        alarmTwoInactAckBackgroundColor: string;
        alarmTwoInactAckTextColor: string;
        alarmTwoInactAckSymbolColor: string;
        alarmTwoInactAckBorderColor: string;
        alarmThreePadding: string;
        alarmThreeFontClass: string;
        alarmThreeTextWrapping: string;
        alarmThreeIconFont: string;
        alarmThreeSymbol: string;
        alarmThreeSymbolType: string;
        alarmThreeDesiredClasses: string;
        alarmThreeBorderWidth: string;
        alarmThreeActBackgroundColor: string;
        alarmThreeActTextColor: string;
        alarmThreeActSymbolColor: string;
        alarmThreeActBorderColor: string;
        alarmThreeInactBackgroundColor: string;
        alarmThreeInactTextColor: string;
        alarmThreeInactSymbolColor: string;
        alarmThreeInactBorderColor: string;
        alarmThreeActAckBackgroundColor: string;
        alarmThreeActAckTextColor: string;
        alarmThreeActAckSymbolColor: string;
        alarmThreeActAckBorderColor: string;
        alarmThreeInactAckBackgroundColor: string;
        alarmThreeInactAckTextColor: string;
        alarmThreeInactAckSymbolColor: string;
        alarmThreeInactAckBorderColor: string;
        private _alarmLineBase1;
        private _alarmLineBase2;
        private _alarmLineBase3;
        private _alarmLineBases;
        constructor(element: any, options: any);
        createTemplate(): any;
        private onChangeAlarms;
        _updateColors(changes: any): void;
        _updateLayout(changes: any): void;
        afterInit(): void;
        dispose(): boolean;
    }
}
//# sourceMappingURL=alarm-line.control.d.ts.map
declare namespace Lenze.UI {
    class DateTimePresenter extends Lenze.UI.VariableBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dateMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            datePadding: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dateBorderWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dateBorderStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dateBorderRadius: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dateOpacity: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dateTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dateLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dateFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dateFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dateFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dateLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dateTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dateShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dateUppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            timeMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            timePadding: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            timeBorderWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            timeBorderStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            timeBorderRadius: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            timeOpacity: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            timeTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            timeLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            timeFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            timeFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            timeFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            timeLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            timeTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            timeShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            timeUppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dateLocale: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            timeLocale: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            displayHorizontal: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            dateFirst: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            showDate: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            showTime: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            variableName: {
                propertyType: string;
                type: string;
            };
            value: {
                propertyType: string;
                type: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dateBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dateForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dateBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            timeBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            timeForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            timeBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
        };
        dateMargin: string;
        datePadding: string;
        dateBorderWidth: string;
        dateBorderStyle: string;
        dateBorderRadius: string;
        dateOpacity: number;
        dateTextAlignment: string;
        dateLineClamp: number;
        dateFontClass: string;
        dateFontSize: string;
        dateFontWeight: string;
        dateLineHeight: string;
        dateTextContrast: number;
        dateShadow: string;
        dateUppercase: boolean;
        timeMargin: string;
        timePadding: string;
        timeBorderWidth: string;
        timeBorderStyle: string;
        timeBorderRadius: string;
        timeOpacity: number;
        timeTextAlignment: string;
        timeLineClamp: number;
        timeFontClass: string;
        timeFontSize: string;
        timeFontWeight: string;
        timeLineHeight: string;
        timeTextContrast: number;
        timeShadow: string;
        timeUppercase: boolean;
        dateLocale: string;
        timeLocale: string;
        displayHorizontal: boolean;
        dateFirst: boolean;
        showDate: boolean;
        showTime: boolean;
        backgroundColor: string;
        dateBackgroundColor: string;
        dateForegroundColor: string;
        dateBorderColor: string;
        timeBackgroundColor: string;
        timeForegroundColor: string;
        timeBorderColor: string;
        private readonly _interval;
        private _intervalHandle;
        private _lastDate;
        private _lastTime;
        private _dateTextBlock;
        private _timeTextBlock;
        constructor(element: any, options: any);
        createTemplate(): any;
        afterInit(): void;
        _updateColors(changes: any): void;
        _updateLayout(changes: any): void;
        attach(): Promise<any>;
        detach(): Promise<any>;
        private _updateTime;
        private _handleIncorrectDate;
        private _getDisplay;
        private get _isTimerRunning();
        private get _hasVariableOrValue();
        private _startInterval;
        private _stopInterval;
    }
}
//# sourceMappingURL=datetime-presenter.control.d.ts.map
declare namespace Lenze.UI {
    class LanguageSelector extends Lenze.UI.ControlBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            menuWidth: {
                propertyType: string;
                type: string;
                child: string;
            };
            menuHeight: {
                propertyType: string;
                type: string;
                child: string;
            };
            menuMargin: {
                propertyType: string;
                type: string;
                child: string;
            };
            menuPadding: {
                propertyType: string;
                type: string;
                child: string;
            };
            menuBorderWidth: {
                propertyType: string;
                type: string;
                child: string;
            };
            menuBorderStyle: {
                propertyType: string;
                type: string;
                child: string;
            };
            menuBorderRadius: {
                propertyType: string;
                type: string;
                child: string;
            };
            menuShadow: {
                propertyType: string;
                type: string;
                child: string;
            };
            menuPlacement: {
                propertyType: string;
                type: string;
                child: string;
            };
            menuItemsLocalTextList: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            inputContainerWidth: {
                propertyType: string;
                type: string;
                child: string;
            };
            InputContainerHeight: {
                propertyType: string;
                type: string;
                child: string;
            };
            inputContainerMargin: {
                propertyType: string;
                type: string;
                child: string;
            };
            inputContainerPadding: {
                propertyType: string;
                type: string;
                child: string;
            };
            inputBorderWidth: {
                propertyType: string;
                type: string;
                child: string;
            };
            inputBorderStyle: {
                propertyType: string;
                type: string;
                child: string;
            };
            inputBorderRadius: {
                propertyType: string;
                type: string;
                child: string;
            };
            inputWidth: {
                propertyType: string;
                type: string;
                child: string;
            };
            inputHeight: {
                propertyType: string;
                type: string;
                child: string;
            };
            inputMargin: {
                propertyType: string;
                type: string;
                child: string;
            };
            inputPadding: {
                propertyType: string;
                type: string;
                child: string;
            };
            inputText: {
                propertyType: string;
                type: string;
                child: string;
            };
            localizableInputText: {
                propertyType: string;
                type: string;
                child: string;
            };
            inputTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
            };
            inputLineClamp: {
                propertyType: string;
                type: string;
                child: string;
            };
            inputTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
            };
            inputTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
            };
            inputFontClass: {
                propertyType: string;
                type: string;
                child: string;
            };
            inputFontSize: {
                propertyType: string;
                type: string;
                child: string;
            };
            inputFontWeight: {
                propertyType: string;
                type: string;
                child: string;
            };
            inputLineHeight: {
                propertyType: string;
                type: string;
                child: string;
            };
            inputTextContrast: {
                propertyType: string;
                type: string;
                child: string;
            };
            inputUppercase: {
                propertyType: string;
                type: string;
                child: string;
            };
            outlined: {
                propertyType: string;
                type: string;
                child: string;
            };
            inputFieldMargin: {
                propertyType: string;
                type: string;
                child: string;
            };
            showSymbol: {
                propertyType: string;
                type: string;
                child: string;
            };
            iconFont: {
                propertyType: string;
                type: string;
                child: string;
            };
            symbol: {
                propertyType: string;
                type: string;
                child: string;
            };
            symbolType: {
                propertyType: string;
                type: string;
                child: string;
            };
            symbolSize: {
                propertyType: string;
                type: string;
                child: string;
            };
            symbolMargin: {
                propertyType: string;
                type: string;
                child: string;
            };
            symbolPosition: {
                propertyType: string;
                type: string;
                child: string;
            };
            labelContainerWidth: {
                propertyType: string;
                type: string;
                child: string;
            };
            labelContainerHeight: {
                propertyType: string;
                type: string;
                child: string;
            };
            labelContainerMargin: {
                propertyType: string;
                type: string;
                child: string;
            };
            labelContainerPadding: {
                propertyType: string;
                type: string;
                child: string;
            };
            showLabel: {
                propertyType: string;
                type: string;
                child: string;
            };
            labelWidth: {
                propertyType: string;
                type: string;
                child: string;
            };
            labelHeight: {
                propertyType: string;
                type: string;
                child: string;
            };
            labelMargin: {
                propertyType: string;
                type: string;
                child: string;
            };
            labelPadding: {
                propertyType: string;
                type: string;
                child: string;
            };
            labelText: {
                propertyType: string;
                type: string;
                child: string;
                defaultValue: string;
            };
            localizableLabelText: {
                propertyType: string;
                type: string;
                child: string;
            };
            labelTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
            };
            labelLineClamp: {
                propertyType: string;
                type: string;
                child: string;
            };
            labelTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
            };
            labelTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
            };
            labelFontClass: {
                propertyType: string;
                type: string;
                child: string;
            };
            labelFontSize: {
                propertyType: string;
                type: string;
                child: string;
                defaultValue: string;
            };
            labelFontWeight: {
                propertyType: string;
                type: string;
                child: string;
            };
            labelLineHeight: {
                propertyType: string;
                type: string;
                child: string;
            };
            labelTextContrast: {
                propertyType: string;
                type: string;
                child: string;
            };
            labelUppercase: {
                propertyType: string;
                type: string;
                child: string;
            };
            labelPosition: {
                propertyType: string;
                type: string;
                child: string;
            };
            showLeadingSymbol: {
                propertyType: string;
                type: string;
                child: string;
                defaultValue: boolean;
            };
            leadingIconFont: {
                propertyType: string;
                type: string;
                child: string;
            };
            leadingSymbol: {
                propertyType: string;
                type: string;
                child: string;
            };
            leadingSymbolType: {
                propertyType: string;
                type: string;
                child: string;
            };
            leadingSymbolSize: {
                propertyType: string;
                type: string;
                child: string;
            };
            leadingSymbolMargin: {
                propertyType: string;
                type: string;
                child: string;
            };
            showFloatingLabel: {
                propertyType: string;
                type: string;
                child: string;
            };
            floatingLabelWidth: {
                propertyType: string;
                type: string;
                child: string;
            };
            floatingLabelHeight: {
                propertyType: string;
                type: string;
                child: string;
            };
            floatingLabelMargin: {
                propertyType: string;
                type: string;
                child: string;
            };
            floatingLabelPadding: {
                propertyType: string;
                type: string;
                child: string;
            };
            floatingLabelText: {
                propertyType: string;
                type: string;
                child: string;
                defaultValue: string;
            };
            localizableFloatingLabelText: {
                propertyType: string;
                type: string;
                child: string;
            };
            floatingLabelTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
            };
            floatingLabelLineClamp: {
                propertyType: string;
                type: string;
                child: string;
            };
            floatingLabelTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
            };
            floatingLabelTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
            };
            floatingLabelFontClass: {
                propertyType: string;
                type: string;
                child: string;
            };
            floatingLabelFontSize: {
                propertyType: string;
                type: string;
                child: string;
                defaultValue: string;
            };
            floatingLabelFontWeight: {
                propertyType: string;
                type: string;
                child: string;
            };
            floatingLabelLineHeight: {
                propertyType: string;
                type: string;
                child: string;
            };
            floatingLabelTextContrast: {
                propertyType: string;
                type: string;
                child: string;
            };
            floatingLabelUppercase: {
                propertyType: string;
                type: string;
                child: string;
            };
            floatingLabelTransition: {
                propertyType: string;
                type: string;
                child: string;
            };
            floatingLabelOutlineWidth: {
                propertyType: string;
                type: string;
                child: string;
            };
            floatingLabelOutlineStyle: {
                propertyType: string;
                type: string;
                child: string;
            };
            showTrailingSymbol: {
                propertyType: string;
                type: string;
                child: string;
            };
            trailingIconFont: {
                propertyType: string;
                type: string;
                child: string;
            };
            trailingSymbol: {
                propertyType: string;
                type: string;
                child: string;
            };
            trailingSymbolType: {
                propertyType: string;
                type: string;
                child: string;
            };
            trailingSymbolSize: {
                propertyType: string;
                type: string;
                child: string;
            };
            trailingSymbolMargin: {
                propertyType: string;
                type: string;
                child: string;
            };
            showUnderline: {
                propertyType: string;
                type: string;
                child: string;
            };
            underlineHeight: {
                propertyType: string;
                type: string;
                child: string;
            };
            underlineTransition: {
                propertyType: string;
                type: string;
                child: string;
            };
            authorizationMode: {
                propertyType: string;
                type: string;
                child: string;
            };
            authorizationRight: {
                propertyType: string;
                type: string;
                child: string;
            };
            hover: {
                propertyType: string;
                type: string;
                child: string;
            };
            checked: {
                propertyType: string;
                type: string;
                child: string;
            };
            open: {
                propertyType: string;
                type: string;
                child: string;
            };
            languageFilter: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            borderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            menuBackgroundColor: {
                propertyType: string;
                child: string;
                type: string;
                resourceValue: string[];
            };
            menuBorderColor: {
                propertyType: string;
                child: string;
                type: string;
                resourceValue: string[];
            };
            dropDownBoxBackgroundColor: {
                propertyType: string;
                child: string;
                childProperty: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            inputBackgroundColor: {
                propertyType: string;
                child: string;
                type: string;
                resourceValue: string[];
            };
            hoverInputBackgroundColor: {
                propertyType: string;
                child: string;
                type: string;
                resourceValue: string[];
            };
            checkedInputBackgroundColor: {
                propertyType: string;
                child: string;
                type: string;
                resourceValue: string[];
            };
            floatingLabelBackgroundColor: {
                propertyType: string;
                child: string;
                type: string;
                resourceValue: string[];
            };
            underlineColor: {
                propertyType: string;
                child: string;
                type: string;
                resourceValue: string[];
            };
            checkedUnderlineColor: {
                propertyType: string;
                child: string;
                type: string;
                resourceValue: string[];
            };
            symbolForegroundColor: {
                propertyType: string;
                child: string;
                type: string;
                resourceValue: string[];
            };
            labelForegroundColor: {
                propertyType: string;
                child: string;
                type: string;
                resourceValue: string[];
            };
            inputForegroundColor: {
                propertyType: string;
                child: string;
                type: string;
                resourceValue: string[];
            };
            leadingSymbolForegroundColor: {
                propertyType: string;
                child: string;
                type: string;
                resourceValue: string[];
            };
            floatingLabelForegroundColor: {
                propertyType: string;
                child: string;
                type: string;
                resourceValue: string[];
            };
            checkedFloatingLabelForegroundColor: {
                propertyType: string;
                child: string;
                type: string;
                resourceValue: string[];
            };
            trailingSymbolForegroundColor: {
                propertyType: string;
                child: string;
                type: string;
                resourceValue: string[];
            };
            dropDownBoxBorderColor: {
                propertyType: string;
                child: string;
                childProperty: string;
                type: string;
                resourceValue: string[];
            };
            inputBorderColor: {
                propertyType: string;
                child: string;
                type: string;
                resourceValue: string[];
            };
            hoverInputBorderColor: {
                propertyType: string;
                child: string;
                type: string;
                resourceValue: string[];
            };
            checkedInputBorderColor: {
                propertyType: string;
                child: string;
                type: string;
                resourceValue: string[];
            };
            floatingLabelOutlineColor: {
                propertyType: string;
                child: string;
                type: string;
                resourceValue: string[];
            };
            disabledBackgroundColor: {
                propertyType: string;
                child: string;
                type: string;
                resourceValue: string[];
            };
            disabledForegroundColor: {
                propertyType: string;
                child: string;
                type: string;
                resourceValue: string[];
            };
            disabledBorderColor: {
                propertyType: string;
                child: string;
                type: string;
                resourceValue: string[];
            };
            disabledFloatingLabelOutlineColor: {
                propertyType: string;
                child: string;
                type: string;
                resourceValue: string[];
            };
        };
        menuWidth: string;
        menuHeight: string;
        menuMargin: string;
        menuPadding: string;
        menuBorderWidth: string;
        menuBorderStyle: string;
        menuBorderRadius: string;
        menuShadow: string;
        menuPlacement: string;
        menuItemsLocalTextList: string;
        inputContainerWidth: string;
        InputContainerHeight: string;
        inputContainerMargin: string;
        inputContainerPadding: string;
        inputBorderWidth: string;
        inputBorderStyle: string;
        inputBorderRadius: string;
        inputWidth: string;
        inputHeight: string;
        inputMargin: string;
        inputPadding: string;
        inputText: string;
        localizableInputText: string;
        inputTextAlignment: string;
        inputLineClamp: number;
        inputTextWrapping: string;
        inputTextTrimming: string;
        inputFontClass: string;
        inputFontSize: string;
        inputFontWeight: string;
        inputLineHeight: string;
        inputTextContrast: number;
        inputUppercase: boolean;
        outlined: boolean;
        inputFieldMargin: string;
        showSymbol: boolean;
        iconFont: string;
        symbol: string;
        symbolType: string;
        symbolSize: string;
        symbolMargin: string;
        symbolPosition: string;
        labelContainerWidth: string;
        labelContainerHeight: string;
        labelContainerMargin: string;
        labelContainerPadding: string;
        showLabel: boolean;
        labelWidth: string;
        labelHeight: string;
        labelMargin: string;
        labelPadding: string;
        labelText: string;
        localizableLabelText: string;
        labelTextAlignment: string;
        labelLineClamp: number;
        labelTextWrapping: string;
        labelTextTrimming: string;
        labelFontClass: string;
        labelFontSize: string;
        labelFontWeight: string;
        labelLineHeight: string;
        labelTextContrast: number;
        labelUppercase: boolean;
        labelPosition: string;
        showLeadingSymbol: boolean;
        leadingIconFont: string;
        leadingSymbol: string;
        leadingSymbolType: string;
        leadingSymbolSize: string;
        leadingSymbolMargin: string;
        showFloatingLabel: boolean;
        floatingLabelWidth: string;
        floatingLabelHeight: string;
        floatingLabelMargin: string;
        floatingLabelPadding: string;
        floatingLabelText: string;
        localizableFloatingLabelText: string;
        floatingLabelTextAlignment: string;
        floatingLabelLineClamp: number;
        floatingLabelTextWrapping: string;
        floatingLabelTextTrimming: string;
        floatingLabelFontClass: string;
        floatingLabelFontSize: string;
        floatingLabelFontWeight: string;
        floatingLabelLineHeight: string;
        floatingLabelTextContrast: number;
        floatingLabelUppercase: boolean;
        floatingLabelTransition: string;
        floatingLabelOutlineWidth: string;
        floatingLabelOutlineStyle: string;
        showTrailingSymbol: boolean;
        trailingIconFont: string;
        trailingSymbol: string;
        trailingSymbolType: string;
        trailingSymbolSize: string;
        trailingSymbolMargin: string;
        showUnderline: boolean;
        underlineHeight: string;
        underlineTransition: string;
        checked: boolean;
        open: boolean;
        languageFilter: string;
        backgroundColor: string;
        borderColor: string;
        menuBackgroundColor: string;
        menuBorderColor: string;
        dropDownBoxBackgroundColor: string;
        inputBackgroundColor: string;
        hoverInputBackgroundColor: string;
        checkedInputBackgroundColor: string;
        floatingLabelBackgroundColor: string;
        underlineColor: string;
        checkedUnderlineColor: string;
        symbolForegroundColor: string;
        labelForegroundColor: string;
        inputForegroundColor: string;
        leadingSymbolForegroundColor: string;
        floatingLabelForegroundColor: string;
        checkedFloatingLabelForegroundColor: string;
        trailingSymbolForegroundColor: string;
        dropDownBoxBorderColor: string;
        inputBorderColor: string;
        hoverInputBorderColor: string;
        checkedInputBorderColor: string;
        floatingLabelOutlineColor: string;
        disabledBackgroundColor: string;
        disabledForegroundColor: string;
        disabledBorderColor: string;
        disabledFloatingLabelOutlineColor: string;
        private _allLanguages;
        private _languages;
        private _isUpdatingLanguage;
        private _selectedLanguageChangedHandler;
        private _currentLanguageChangedHandler;
        private _lcidToIETF;
        private _dropDownBox;
        private _dropDownBoxItems;
        constructor(element: any, options: any);
        createTemplate(): Promise<any>;
        _updateColors(changes: any): void;
        afterInit(): void;
        attach(): Promise<any>;
        createHandler(): void;
        dispose(): boolean;
        private _updateLanguageAsync;
        private _isCurrentLanguage;
        private _updateSelectedLanguage;
        private _writeLanguageToCache;
        private _onSelectedLanguageChanged;
        private _onCurrentLanguageChanged;
    }
}
//# sourceMappingURL=language-selector.control.d.ts.map
declare namespace Lenze.UI {
    class LimitControl extends Lenze.UI.VariableBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            inputHeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            inputWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            fontClass: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            fontSize: {
                propertyType: string;
                type: string;
            };
            fontWeight: {
                propertyType: string;
                type: string;
            };
            showUnit: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            localizableUnitText: {
                propertyType: string;
                type: string;
            };
            isLimitCheckEnabled: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            limitWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            limitMin: {
                propertyType: string;
                type: string;
            };
            limitMinVariableName: {
                propertyType: string;
                type: string;
            };
            limitMax: {
                propertyType: string;
                type: string;
            };
            limitMaxVariableName: {
                propertyType: string;
                type: string;
            };
            variableName: {
                propertyType: string;
                type: string;
            };
            decimalPlaces: {
                propertyType: string;
                type: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            foregroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            varInBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            varInBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
        };
        inputHeight: string;
        inputWidth: string;
        fontSize: string;
        showUnit: boolean;
        isLimitCheckEnabled: boolean;
        limitWidth: string;
        limitMin: number;
        limitMinVariableName: string;
        limitMax: number;
        limitMaxVariableName: string;
        backgroundColor: string;
        foregroundColor: string;
        varInBorderColor: string;
        varInBackgroundColor: string;
        private _minElement;
        private _varInElement;
        private _varInCoreElement;
        private _maxElement;
        private _variableService;
        private _limitMinVariable;
        private _limitMaxVariable;
        private _limitMinEventHander;
        private _limitMaxEventHander;
        constructor(element: any, options: any);
        afterInit(): Promise<void>;
        createTemplate(): any;
        _updateColors(changes: any): void;
        _updateLayout(changes: any): Promise<void>;
        attach(): Promise<any>;
        detach(): Promise<any>;
        private _setFontProperties;
        private _getVariable;
        private _onVariableChange;
        private _setLimitOnLabel;
        private _getLimit;
        private _setBasePropertiesVarIn;
        private _setBasePropertiesLimit;
        private _showIsValueValid;
    }
}
//# sourceMappingURL=limit-varin.control.d.ts.map
declare namespace Lenze.UI {
    class VirtualKeyboardDialog extends Lenze.UI.ControlBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            openWithEmptyValue: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            headerLabelName: {
                propertyType: string;
                type: string;
            };
            varInName: {
                propertyType: string;
                type: string;
            };
            varOutName: {
                propertyType: string;
                type: string;
            };
            minLimitLabelName: {
                propertyType: string;
                type: string;
            };
            minLimitLayoutName: {
                propertyType: string;
                type: string;
            };
            maxLimitLabelName: {
                propertyType: string;
                type: string;
            };
            maxLimitLayoutName: {
                propertyType: string;
                type: string;
            };
            keyboardName: {
                propertyType: string;
                type: string;
            };
        };
        openWithEmptyValue: boolean;
        headerLabelName: string;
        varInName: string;
        varOutName: string;
        minLimitLabelName: string;
        minLimitLayoutName: string;
        maxLimitLabelName: string;
        maxLimitLayoutName: string;
        keyboardName: string;
        private _headerLabel;
        private _varIn;
        private _varOut;
        private _minLimitLabel;
        private _minLimitLayout;
        private _maxLimitLabel;
        private _maxLimitLayout;
        private _virtualKeyboard;
        private _keyboardService;
        private _dialogService;
        private _variableService;
        private _inputId;
        private _dialogInformation;
        private _castedVariable;
        private _minLimitVariable;
        private _maxLimitVariable;
        private get _getKeyboardType();
        private _keyboardEnterHandler;
        private _limitVariableChangeHandler;
        constructor(element: any, options: any);
        createTemplate(): Promise<any> | null;
        createHandler(): void;
        dispose(): boolean;
        _updateLayout(changes: any): void;
        private _retrieveAndSetControls;
        private _makeVarInActive;
        private _setLimits;
        private _getLimitValue;
        private _getLimitText;
        private _roundLimit;
        private _getLimitVariable;
        private _resetLimitVariable;
        private _calculateUnitValue;
        private _onKeyboardEnter;
        private _onLimitVariableChange;
    }
}
//# sourceMappingURL=virtual-keyboard-dialog.control.d.ts.map
declare namespace Lenze.UI {
    class VirtualKeyboard extends Lenze.UI.ControlBase {
        static enterKeyEventName: string;
        private readonly _shiftActiveClassName;
        private readonly _capsActiveClassName;
        private readonly _enterKeyName;
        private readonly _spaceKeyName;
        private readonly _backspaceKeyName;
        private readonly _capslockKeyName;
        private readonly _shiftKeyName;
        private readonly _clearKeyName;
        private readonly _decimalKeyName;
        private readonly _negPosKeyName;
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            numeric: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            keyBorderWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            keyBorderStyle: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            keyBorderRadius: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            enterKeyBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            enterKeyForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            enterKeyBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            enterKeyActiveBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            enterKeyActiveForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            enterKeyActiveBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            spaceKeyBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            spaceKeyForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            spaceKeyBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            spaceKeyActiveBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            spaceKeyActiveForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            spaceKeyActiveBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            specialKeysBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            specialKeysForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            specialKeysBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            specialKeysActiveBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            specialKeysActiveForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            specialKeysActiveBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            borderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            keyBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            keyForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            keyBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            keyActiveBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            keyActiveForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            keyActiveBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            onEnterKey: {
                propertyType: string;
                group: string;
            };
        };
        numeric: boolean;
        keyBorderWidth: string;
        keyBorderStyle: string;
        keyBorderRadius: string;
        enterKeyBackgroundColor: string;
        enterKeyForegroundColor: string;
        enterKeyBorderColor: string;
        enterKeyActiveBackgroundColor: string;
        enterKeyActiveForegroundColor: string;
        enterKeyActiveBorderColor: string;
        spaceKeyBackgroundColor: string;
        spaceKeyForegroundColor: string;
        spaceKeyBorderColor: string;
        spaceKeyActiveBackgroundColor: string;
        spaceKeyActiveForegroundColor: string;
        spaceKeyActiveBorderColor: string;
        specialKeysBackgroundColor: string;
        specialKeysForegroundColor: string;
        specialKeysBorderColor: string;
        specialKeysActiveBackgroundColor: string;
        specialKeysActiveForegroundColor: string;
        specialKeysActiveBorderColor: string;
        backgroundColor: string;
        borderColor: string;
        keyBackgroundColor: string;
        keyForegroundColor: string;
        keyBorderColor: string;
        keyActiveBackgroundColor: string;
        keyActiveForegroundColor: string;
        keyActiveBorderColor: string;
        private _keyboardElement;
        private _keyboard;
        private _keyboardKeyHandlers;
        private _physicalKeyMapping;
        private _inputElements;
        private _shiftActive;
        private _capsActive;
        private _isUpdatingKeyboardLayoutOptions;
        private _activeIndex;
        private _limitsEnabled;
        private _limitMin;
        private _limitMax;
        private _keyboardService;
        private _keyboardValueChangeHandler;
        private _keyReleasedHandler;
        private _physicalKeyReleasedHandler;
        private _languageChangedHandler;
        constructor(element: any, options: any);
        createTemplate(): Promise<any> | null;
        createHandler(): void;
        afterInit(): void;
        dispose(): boolean;
        _updateColors(changes: any): void;
        _updateLayout(changes: any): void;
        registerInputElement(keyboardInputElement: Lenze.Models.KeyboardInputElement): void;
        deregisterInputElement(id: string): void;
        setActiveInputElement(id: string, limitMin?: number, limitMax?: number): void;
        updateLimits(limitsEnabled: boolean, limitMin: number, limitMax: number): void;
        private _updateKeyboardLayoutOptionsAsync;
        private _updateKeyboardLayoutAsync;
        private _writeValueToInput;
        private _parseNumber;
        private _updateShiftCapsActiveClasses;
        private _getDisplayData;
        private _isValueWithinLimits;
        private _showIsValueValid;
        private _setLimits;
        private get _getAlphabeticalName();
        private get _currentInputNameValid();
        private get _inputId();
        private get _keyboardInputElement();
        private get _numericValue();
        private get _isKeyboardNumeric();
        private get _currentDecimalPlaces();
        private _onKeyboardValueChange;
        private _onKeyReleased;
        private _onPhysicalKeyReleased;
        private _onEnterKeyHandler;
        private _onShiftKeyHandler;
        private _onCapsKeyHandler;
        private _onClearKeyHandler;
        private _onDecimalKeyHandler;
        private _onNegPosKeyHandler;
        private _onLanguageChanged;
    }
}
//# sourceMappingURL=virtual-keyboard.control.d.ts.map
declare namespace Lenze.UI {
    abstract class ListBase extends Lenze.UI.ControlBase {
        detailsAuthorizationRight: string;
        backgroundColor: string;
        borderColor: string;
        foregroundColor: string;
        protected _itemControls: ListItem[];
        protected abstract _notEnabledText: string;
        createTemplate(): Promise<any> | null;
        _updateLayout(changes: any): void;
        _updateColors(changes: any): void;
        attach(): Promise<void>;
        protected _renewListAsync(): Promise<void>;
        protected _createListItem(): ListItem;
        protected abstract _isEnabledAsync(): Promise<boolean>;
        protected abstract _fillListAsync(): Promise<void>;
    }
}
//# sourceMappingURL=list-base.base.d.ts.map
declare namespace Lenze.UI {
    class ListBodyItem extends Lenze.UI.ControlBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            text1Alignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text1LineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text1TextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text1TextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            text1TextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text1Uppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            text1TextDecoration: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text1TextShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text1FontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            text1FontFamily: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text1FontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text1FontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            text1LineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text1FontStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text1LetterSpacing: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text2Alignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text2LineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text2TextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text2TextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            text2TextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text2Uppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            text2TextDecoration: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text2TextShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text2FontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            text2FontFamily: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text2FontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text2FontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text2LineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text2FontStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text2LetterSpacing: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text3Alignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text3LineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text3TextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text3TextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            text3TextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text3Uppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            text3TextDecoration: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text3TextShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text3FontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            text3FontFamily: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text3FontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text3FontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text3LineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text3FontStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text3LetterSpacing: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            detailsAuthorizationRight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dialogShowButton1: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            dialogButton1Text: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dialogButton1LocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dialogShowButton2: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            dialogButton2Text: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dialogButton2LocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            borderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            foregroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            text1BackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            text1ForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            text2BackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            text2ForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            text3BackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            text3ForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
        };
        text1Alignment: string;
        text1LineClamp: number;
        text1TextWrapping: string;
        text1TextTrimming: string;
        text1TextContrast: number;
        text1Uppercase: boolean;
        text1TextDecoration: string;
        text1TextShadow: string;
        text1FontClass: string;
        text1FontFamily: string;
        text1FontSize: string;
        text1FontWeight: string;
        text1LineHeight: string;
        text1FontStyle: string;
        text1LetterSpacing: string;
        text2Alignment: string;
        text2LineClamp: number;
        text2TextWrapping: string;
        text2TextTrimming: string;
        text2TextContrast: number;
        text2Uppercase: boolean;
        text2TextDecoration: string;
        text2TextShadow: string;
        text2FontClass: string;
        text2FontFamily: string;
        text2FontSize: string;
        text2FontWeight: string;
        text2LineHeight: string;
        text2FontStyle: string;
        text2LetterSpacing: string;
        text3Alignment: string;
        text3LineClamp: number;
        text3TextWrapping: string;
        text3TextTrimming: string;
        text3TextContrast: number;
        text3Uppercase: boolean;
        text3TextDecoration: string;
        text3TextShadow: string;
        text3FontClass: string;
        text3FontFamily: string;
        text3FontSize: string;
        text3FontWeight: string;
        text3LineHeight: string;
        text3FontStyle: string;
        text3LetterSpacing: string;
        detailsAuthorizationRight: string;
        dialogShowButton1: boolean;
        dialogButton1Text: string;
        dialogButton1LocalizableText: string;
        dialogShowButton2: boolean;
        dialogButton2Text: string;
        dialogButton2LocalizableText: string;
        backgroundColor: string;
        borderColor: string;
        foregroundColor: string;
        text1BackgroundColor: string;
        text1ForegroundColor: string;
        text2BackgroundColor: string;
        text2ForegroundColor: string;
        text3BackgroundColor: string;
        text3ForegroundColor: string;
        get bodyItem(): Models.ListBodyItem | null;
        get text1Width(): number;
        set text1Width(value: number);
        get text2Width(): number;
        set text2Width(value: number);
        get text3Width(): number;
        set text3Width(value: number);
        private _text1Element;
        private _text2Element;
        private _text3Element;
        private _bodyItem;
        private _languageService;
        private _userService;
        private _dialogService;
        private _languageChangeHandler;
        private _userChangeHandler;
        private _text2ClickHandler;
        constructor(element: any, options: any);
        createTemplate(): Promise<any> | null;
        afterInit(): void;
        _updateLayout(changes: any): void;
        _updateColors(changes: any): void;
        dispose(): boolean;
        setBodyItemAsync(value: Models.ListBodyItem): Promise<void>;
        setText1Visibility(value: boolean): void;
        private _setTextsAsync;
        private _setLocalTextsAsync;
        private _updateText2Clickable;
        private _onLanguageChangeAsync;
        private _onUserChangeAsync;
        private _onText2ClickAsync;
    }
}
//# sourceMappingURL=list-body-item.control.d.ts.map
declare namespace Lenze.UI {
    class ListHeader extends Lenze.UI.ButtonBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            text1Alignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text1LineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text1TextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text1TextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            text1TextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text1Uppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            text1TextDecoration: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text1TextShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text1FontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            text1FontFamily: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text1FontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text1FontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            text1LineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text1FontStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text1LetterSpacing: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text2Alignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text2LineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text2TextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text2TextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            text2TextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text2Uppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            text2TextDecoration: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text2TextShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text2FontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            text2FontFamily: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text2FontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text2FontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text2LineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text2FontStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text2LetterSpacing: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text3Alignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text3LineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text3Wrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text3Trimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            text3Contrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text3Uppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            text3Decoration: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text3Shadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text3FontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            text3FontFamily: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text3FontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text3FontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text3LineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text3FontStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            text3LetterSpacing: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            contentIconFont: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            contentSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            contentSymbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            contentSymbolSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            showExpandSymbol: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            expandSymbolHeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            expandSymbolWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            expandIconFont: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            expandSymbolOpen: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            expandSymbolClose: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            expandSymbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            expandSymbolSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            borderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            foregroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            text1BackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            text1ForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            text2BackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            text2ForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            text3BackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            text3ForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            contentSymbolBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            contentSymbolForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            expandSymbolBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            expandSymbolForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
        };
        text1Alignment: string;
        text1LineClamp: number;
        text1TextWrapping: string;
        text1TextTrimming: string;
        text1TextContrast: number;
        text1Uppercase: boolean;
        text1TextDecoration: string;
        text1TextShadow: string;
        text1FontClass: string;
        text1FontFamily: string;
        text1FontSize: string;
        text1FontWeight: string;
        text1LineHeight: string;
        text1FontStyle: string;
        text1LetterSpacing: string;
        text2Alignment: string;
        text2LineClamp: number;
        text2TextWrapping: string;
        text2TextTrimming: string;
        text2TextContrast: number;
        text2Uppercase: boolean;
        text2TextDecoration: string;
        text2TextShadow: string;
        text2FontClass: string;
        text2FontFamily: string;
        text2FontSize: string;
        text2FontWeight: string;
        text2LineHeight: string;
        text2FontStyle: string;
        text2LetterSpacing: string;
        text3Alignment: string;
        text3LineClamp: number;
        text3Wrapping: string;
        text3Trimming: string;
        text3Contrast: number;
        text3Uppercase: boolean;
        text3Decoration: string;
        text3Shadow: string;
        text3FontClass: string;
        text3FontFamily: string;
        text3FontSize: string;
        text3FontWeight: string;
        text3LineHeight: string;
        text3FontStyle: string;
        text3LetterSpacing: string;
        contentIconFont: string;
        contentSymbol: string;
        contentSymbolType: string;
        contentSymbolSize: string;
        showExpandSymbol: boolean;
        expandSymbolHeight: string;
        expandSymbolWidth: string;
        expandIconFont: string;
        expandSymbolOpen: string;
        expandSymbolClose: string;
        expandSymbolType: string;
        expandSymbolSize: string;
        backgroundColor: string;
        borderColor: string;
        foregroundColor: string;
        text1BackgroundColor: string;
        text1ForegroundColor: string;
        text2BackgroundColor: string;
        text2ForegroundColor: string;
        text3BackgroundColor: string;
        text3ForegroundColor: string;
        contentSymbolBackgroundColor: string;
        contentSymbolForegroundColor: string;
        expandSymbolBackgroundColor: string;
        expandSymbolForegroundColor: string;
        get listHeader(): Models.ListHeader | null;
        get text1Width(): number;
        set text1Width(value: number);
        set text1Visible(value: boolean);
        get text2Width(): number;
        set text2Width(value: number);
        set text2Visible(value: boolean);
        get text3Width(): number;
        set text3Width(value: number);
        set text3Visible(value: boolean);
        set expandSymbol(value: string);
        private _symbolElement;
        private _text1Element;
        private _text2Element;
        private _text3Element;
        private _contentSymbolElement;
        private _expandSymbolElement;
        private _listHeader;
        private _languageService;
        constructor(element: any, options: any);
        createTemplate(): Promise<any> | null;
        afterInit(): void;
        _updateLayout(changes: any): void;
        _updateColors(changes: any): void;
        setListHeaderAsync(listHeader: Models.ListHeader): Promise<void>;
        private _setTextsAsync;
    }
}
//# sourceMappingURL=list-header.control.d.ts.map
declare namespace Lenze.UI {
    class ListItem extends Lenze.UI.ControlBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            noteText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            noteLocalizableText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            noteTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            noteTextLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            noteTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            noteTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            noteTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            noteTextUppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            noteTextDecoration: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            noteTextShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            noteTextFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            noteTextFontFamily: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            noteTextFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            noteTextFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            noteTextLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            noteTextFontStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            noteTextLetterSpacing: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            dividerEnabled: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            detailsAuthorizationRight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            borderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            foregroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            contentBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dividerColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            noteBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            noteForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
        };
        noteText: string;
        noteLocalizableText: string;
        noteTextAlignment: string;
        noteTextLineClamp: number;
        noteTextWrapping: string;
        noteTextTrimming: string;
        noteTextContrast: number;
        noteTextUppercase: boolean;
        noteTextDecoration: string;
        noteTextShadow: string;
        noteTextFontClass: string;
        noteTextFontFamily: string;
        noteTextFontSize: string;
        noteTextFontWeight: string;
        noteTextLineHeight: string;
        noteTextFontStyle: string;
        noteTextLetterSpacing: string;
        dividerEnabled: boolean;
        detailsAuthorizationRight: string;
        backgroundColor: string;
        borderColor: string;
        foregroundColor: string;
        contentBackgroundColor: string;
        dividerColor: string;
        noteBackgroundColor: string;
        noteForegroundColor: string;
        get listItem(): Models.ListItem | null;
        get headerText1Width(): number;
        set headerText1Width(value: number);
        get headerText2Width(): number;
        set headerText2Width(value: number);
        get headerText3Width(): number;
        set headerText3Width(value: number);
        get bodyText1Width(): number;
        set bodyText1Width(value: number);
        get bodyText2Width(): number;
        set bodyText2Width(value: number);
        get bodyText3Width(): number;
        set bodyText3Width(value: number);
        get isSlidedIn(): boolean;
        set isSlidedIn(value: boolean);
        private _listHeaderElement;
        private get _listHeaderControl();
        private _listBodyElement;
        private _noteElement;
        private _contentElement;
        private _contentControls;
        private _isSlidedIn;
        private _listItem;
        private _headerClickHandler;
        constructor(element: any, options: any);
        createTemplate(): Promise<any> | null;
        afterInit(): void;
        _updateLayout(changes: any): void;
        _updateColors(changes: any): void;
        dispose(): boolean;
        setListItemAsync(value: Models.ListItem): Promise<void>;
        private _setContentAsync;
        private _setHeaderHeight;
        private _onHeaderClick;
    }
}
//# sourceMappingURL=list-item.control.d.ts.map
declare namespace Lenze.UI {
    class PdfViewer extends Lenze.UI.ControlBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            disabled: {
                propertyType: string;
                type: string;
            };
            source: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
        };
        source: string;
        backgroundColor: string;
        private _embedElement;
        constructor(element: any, options: any);
        createTemplate(): Promise<any> | null;
        _updateColors(changes: any): void;
        _updateLayout(changes: any): void;
        private _setSrcOnEmbed;
        private _resetSrcOnEmbed;
    }
}
//# sourceMappingURL=pdf-viewer.control.d.ts.map
declare namespace Lenze.UI {
    class VideoPlayer extends Lenze.UI.ControlBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            disabled: {
                propertyType: string;
                type: string;
            };
            source: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
        };
        source: string;
        backgroundColor: string;
        private _videoElement;
        private _sourceElement;
        constructor(element: any, options: any);
        createTemplate(): Promise<any> | null;
        _updateColors(changes: any): void;
        _updateLayout(changes: any): void;
        private _createVideo;
        private _removeVideo;
        private _removeChildNodesRecursive;
    }
}
//# sourceMappingURL=video-player.control.d.ts.map
declare namespace Lenze.UI {
    class YouTubePlayer extends Lenze.UI.ControlBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            disabled: {
                propertyType: string;
                type: string;
            };
            watchCode: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
        };
        watchCode: string;
        backgroundColor: string;
        private _iframeElement;
        constructor(element: any, options: any);
        createTemplate(): Promise<any> | null;
        _updateColors(changes: any): void;
        _updateLayout(changes: any): void;
        detach(): Promise<any>;
        private _createIFrame;
        private _removeIFrame;
    }
}
//# sourceMappingURL=youtube-player.control.d.ts.map
declare namespace Lenze.UI {
    class PanoramaViewItem extends Lenze.UI.ControlBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            registerSourceId: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            view: {
                propertyType: string;
                type: string;
            };
            indicatorText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorSymbol: {
                propertyType: string;
                type: string;
            };
            indicatorIconFont: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorSymbolType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            authorizationRight: {
                propertyType: string;
                type: string;
            };
            viewVisible: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
        };
        view: string;
        indicatorText: string;
        indicatorLocalizableText: string;
        indicatorSymbol: string;
        indicatorIconFont: string;
        indicatorSymbolType: string;
        private _viewVisible;
        get viewVisible(): boolean;
        set viewVisible(value: boolean);
        constructor(element: any, options: any);
    }
}
//# sourceMappingURL=panorama-view-item.control.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.UI {
    class PanoramaView extends Lenze.UI.VariableBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            registerTargetId: {
                propertyType: string;
                defaultValue: string;
            };
            alignArrows: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            leftIconFont: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            leftSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            leftSymbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            leftSymbolSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            leftSymbolMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            rightIconFont: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            rightSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            rightSymbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            rightSymbolSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            rightSymbolMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            alignIndicators: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorContainerHeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorContainerWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorContainerMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorContainerPadding: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorContainerBorderWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorContainerBorderStyle: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorContainerBorderRadius: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorHeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorPadding: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorBorderWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorBorderStyle: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorBorderRadius: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorShowText: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            indicatorTextFontClass: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorTextFontSize: {
                propertyType: string;
                type: string;
            };
            indicatorTextFontWeight: {
                propertyType: string;
                type: string;
            };
            indicatorTextLineClamp: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            indicatorTextLineHeight: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            indicatorTextAlignment: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorTextContrast: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            indicatorTextHeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorTextWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorTextMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorTextPadding: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorTextWrapping: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorTextTrimming: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorTextUppercase: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            indicatorShowSymbol: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            indicatorSymbolMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorSymbolPosition: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorSymbolSize: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            views: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            swipeEnabled: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            arrowsEnabled: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            arrowsVisible: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            viewIndicatorsEnabled: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            viewIndicatorsVisible: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            carouselEnabled: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            transitionDuration: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            detachInactiveView: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            arrowColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            disabledArrowColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            indicatorContainerBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            indicatorContainerBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            indicatorUnselectedColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            indicatorSelectedColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            indicatorUnselectedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            indicatorSelectedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            indicatorUnselectedSymbolColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            indicatorSelectedSymbolColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            indicatorBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            borderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
        };
        views: string;
        transitionDuration: number;
        swipeEnabled: boolean;
        arrowsEnabled: boolean;
        arrowsVisible: boolean;
        viewIndicatorsEnabled: boolean;
        viewIndicatorsVisible: boolean;
        carouselEnabled: boolean;
        detachInactiveView: boolean;
        alignArrows: string;
        leftIconFont: string;
        leftSymbolMargin: string;
        leftSymbolType: string;
        leftSymbolSize: string;
        leftSymbol: string;
        rightIconFont: string;
        rightSymbolMargin: string;
        rightSymbolType: string;
        rightSymbolSize: string;
        rightSymbol: string;
        alignIndicators: string;
        indicatorContainerHeight: string;
        indicatorContainerWidth: string;
        indicatorContainerMargin: string;
        indicatorContainerPadding: string;
        indicatorContainerBorderWidth: string;
        indicatorContainerBorderStyle: string;
        indicatorContainerBorderRadius: string;
        indicatorHeight: string;
        indicatorWidth: string;
        indicatorMargin: string;
        indicatorPadding: string;
        indicatorBorderWidth: string;
        indicatorBorderStyle: string;
        indicatorBorderRadius: string;
        indicatorShowText: boolean;
        indicatorTextFontClass: string;
        indicatorTextFontSize: string;
        indicatorTextFontWeight: string;
        indicatorTextLineClamp: number;
        indicatorTextLineHeight: number;
        indicatorTextAlignment: string;
        indicatorTextContrast: number;
        indicatorTextHeight: string;
        indicatorTextWidth: string;
        indicatorTextMargin: string;
        indicatorTextPadding: string;
        indicatorTextWrapping: string;
        indicatorTextTrimming: string;
        indicatorTextUppercase: boolean;
        indicatorShowSymbol: boolean;
        indicatorSymbolMargin: string;
        indicatorSymbolPosition: string;
        indicatorSymbolSize: string;
        arrowColor: string;
        disabledArrowColor: string;
        indicatorContainerBackgroundColor: string;
        indicatorContainerBorderColor: string;
        indicatorUnselectedColor: string;
        indicatorSelectedColor: string;
        indicatorUnselectedForegroundColor: string;
        indicatorSelectedForegroundColor: string;
        indicatorUnselectedSymbolColor: string;
        indicatorSelectedSymbolColor: string;
        indicatorBorderColor: string;
        backgroundColor: string;
        borderColor: string;
        private _variableService;
        private _userService;
        private _allViewItems;
        private _currentViewItems;
        private _body;
        private _region1Element;
        private _region2Element;
        private _controls;
        private _controlsArrowLeft;
        private _controlsArrowLeftIcon;
        private _controlsViewIndicators;
        private _controlsArrowRight;
        private _controlsArrowRightIcon;
        private _hammer;
        private _hammerSwipe;
        private _viewIndex;
        private _oldIndex;
        private _lastVarIndex;
        private _animationBusy;
        private _firstViewCurrent;
        private _swipeInvalid;
        private _navigationService;
        private _preloadingChangedHandler;
        private _animationEndHandler;
        private _shiftRightBound;
        private _shiftLeftBound;
        private _hammerInputHandler;
        private _childPropertyChangeHandler;
        private _userChangeHandler;
        private readonly _viewClass;
        private readonly _shrinkClass;
        private readonly _shrinkClassLeft;
        private readonly _shrinkClassRight;
        private readonly _growClassLeft;
        private readonly _growClassRight;
        private readonly _indicatorClass;
        private readonly _cursorDisabledClass;
        constructor(element: any, options: any);
        registerChild(controlType: string, action: string, element: VWElement, options: any): any;
        createTemplate(): any;
        createHandler(): void;
        dispose(): boolean;
        _updateColors(changes: any): void;
        _updateLayout(changes: any): void;
        shiftRight(modifier?: number | string | null): void;
        shiftLeft(modifier?: number | string | null): void;
        get canUpdateIndex(): boolean;
        private _onPreloadingChanged;
        private _shiftRight;
        private _shiftLeft;
        private _startedOnValidElement;
        private _modifyIndexBy;
        private _hasViews;
        private get _carouselMinReached();
        private get _carouselMaxReached();
        private _indexInBounds;
        private set _setIndex(value);
        private _movePanorama;
        private _movePanoramaEnd;
        private _removeShrinkedRegion;
        private _insertRegion;
        private _shrinkRegion;
        private _updateVariableWithIndexAsync;
        private _newRegion;
        private _updateCurrentViewsAsync;
        private _updateControlArrows;
        private _updateControlArrowsCursor;
        private _setDisabledOnArrowIcon;
        private _updateSwipeEvent;
        private _updateIndicators;
        private _onHammerInput;
        private _onChildItemPropertyChangeAsync;
        private _onUserChangeAsync;
    }
}
//# sourceMappingURL=panorama-view.control.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.UI {
    class ViewBox extends VisiWin.UI.LayoutBase {
        properties: {
            designerType: {
                propertyType: string;
                defaultValue: string;
            };
            overflow: {
                propertyType: string;
                type: string;
            };
            removeMargins: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            borderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            stretchingMode: {
                propertyType: string;
                type: string;
                defaultValue: Models.ViewBoxStretchEnum;
            };
            scalingHeight: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            scalingWidth: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
        };
        overflow: string;
        removeMargins: boolean;
        backgroundColor: string;
        borderColor: string;
        stretchingMode: String;
        private _scalingHeight;
        private _scalingWidth;
        private _pageWidth;
        private _pageHeight;
        private _innerStretchDiv;
        private _resizeHandler;
        constructor(element: VWElement, options: any);
        ready(): void;
        resizeHandler(args: any): void;
        private _adjustLayout;
        private _setViewBoxPosition;
        private _createViewBoxInnerDiv;
        private _prepareViewBoxContent;
        private _setStretchValues;
        private _setStretch;
        private _viewBoxCentered;
    }
}
//# sourceMappingURL=viewbox.control.d.ts.map
declare namespace Lenze.UI {
    class MachineDrawing extends Lenze.UI.VariableBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue_DM: string;
            };
            transitionDuration: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            variableName: {
                propertyType: string;
                type: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            borderColor: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
        };
        transitionDuration: number;
        backgroundColor: string;
        borderColor: string;
        private _drawingItems;
        private _layoutElement;
        private _drawnElements;
        constructor(element: any, options: any);
        createTemplate(): Promise<any> | null;
        _updateColors(changes: any): void;
        _updateLayout(changes: any): void;
        private _parseValueAndRender;
        private _createDrawings;
        private _updateDrawings;
        private _createDrawingElement;
        private _setPropertiesOnDrawingElement;
    }
}
//# sourceMappingURL=machine-drawing.control.d.ts.map
declare namespace Lenze.UI {
    class Scrollbar extends Lenze.UI.ControlBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            scrollbarEnabled: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            scrollbarHeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            scrollbarWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            scrollbarBorderWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            scrollbarBorderRadius: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            scrollbarBorderStyle: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            scrollbarBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            scrollbarBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            trackBorderWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            trackBorderRadius: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            trackBorderStyle: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            trackBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            trackBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            thumbBorderWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            thumbBorderRadius: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            thumbBorderStyle: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            thumbBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            thumbBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
        };
        scrollbarEnabled: boolean;
        scrollbarHeight: string;
        scrollbarWidth: string;
        scrollbarBorderWidth: string;
        scrollbarBorderRadius: string;
        scrollbarBorderStyle: string;
        scrollbarBackgroundColor: string;
        scrollbarBorderColor: string;
        trackBorderWidth: string;
        trackBorderRadius: string;
        trackBorderStyle: string;
        trackBackgroundColor: string;
        trackBorderColor: string;
        thumbBorderWidth: string;
        thumbBorderRadius: string;
        thumbBorderStyle: string;
        thumbBackgroundColor: string;
        thumbBorderColor: string;
        constructor(element: any, options: any);
        createTemplate(): Promise<any> | null;
        _updateLayout(changes: any): void;
        _updateColors(changes: any): void;
    }
}
//# sourceMappingURL=scrollbar.control.d.ts.map
declare namespace Lenze.UI {
    class RecipesControl extends Lenze.UI.ControlBase {
        private readonly _recipeClassName;
        private readonly _recipeNameClassName;
        private readonly _recipeIndicatorClassName;
        private readonly _activeRecipeClassName;
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            recipeListVariableName: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            recipeNameVariableName: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            activeRecipeVariableName: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            filterTextVarInName: {
                propertyType: string;
                type: string;
            };
            showIndicator: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            listItemMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            listItemPadding: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            listItemFontClass: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            listItemFontSize: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            listItemFontWeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            listItemLineHeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            listItemBorderRadius: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            listItemBorderStyle: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            listItemBorderWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorHeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorBorderWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorBorderStyle: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indicatorBorderRadius: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            borderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            listItemBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            listItemBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            listItemForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            listItemActiveBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            listItemActiveBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            listItemActiveForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            indicatorBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            indicatorBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
        };
        recipeListVariableName: string;
        recipeNameVariableName: string;
        activeRecipeVariableName: string;
        filterTextVarInName: string;
        listItemMargin: string;
        listItemPadding: string;
        listItemFontClass: string;
        listItemFontSize: string;
        listItemFontWeight: string;
        listItemLineHeight: string;
        listItemBorderRadius: string;
        listItemBorderStyle: string;
        listItemBorderWidth: string;
        showIndicator: boolean;
        indicatorHeight: string;
        indicatorWidth: string;
        indicatorMargin: string;
        indicatorBorderWidth: string;
        indicatorBorderStyle: string;
        indicatorBorderRadius: string;
        backgroundColor: string;
        borderColor: string;
        listItemBackgroundColor: string;
        listItemBorderColor: string;
        listItemForegroundColor: string;
        listItemActiveBackgroundColor: string;
        listItemActiveBorderColor: string;
        listItemActiveForegroundColor: string;
        indicatorBackgroundColor: string;
        indicatorBorderColor: string;
        private _variableService;
        private _recipeListVariable;
        private _recipeNameVariable;
        private _activeRecipeVariable;
        private _oldFontClass;
        private _recipeListChangeHandler;
        private _activeRecipeChangeHandler;
        private _filterTextVarIn;
        private _filterValueChangedHandler;
        private _recipes;
        private _recipeElements;
        private _recipeClickHandler;
        constructor(element: any, options: any);
        createTemplate(): any;
        afterInit(): void;
        _updateColors(changes: any): void;
        _updateLayout(changes: any): void;
        attach(): Promise<any>;
        dispose(): boolean;
        private _addRecipesOnPage;
        private _clearRecipesOnPage;
        private _getCurrentRecipes;
        private _setSelectedRecipe;
        private _canIncludeRecipe;
        private _sortAlphabetically;
        private _updateRecipeListItemsLayout;
        private _updateRecipeListItemsColors;
        private _onRecipeListChange;
        private _onActiveRecipeChange;
        private _onRecipeElementClick;
        private _onFilterValueChanged;
    }
}
//# sourceMappingURL=recipes-list.control.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.UI {
    class VirtualizingTableColumn extends Lenze.UI.ControlBase {
        static visibilityChangedEventName: string;
        private readonly _descSymbolClassname;
        private readonly _ascSymbolClassname;
        private readonly _disabledClassname;
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            registerSourceId: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            localizableText: {
                propertyType: string;
                type: string;
            };
            defaultText: {
                propertyType: string;
                type: string;
            };
            textAlignment: {
                propertyType: string;
                child: string;
                type: string;
                defaultValue: string;
            };
            lineClamp: {
                propertyType: string;
                child: string;
                type: string;
            };
            textWrapping: {
                propertyType: string;
                child: string;
                type: string;
            };
            textTrimming: {
                propertyType: string;
                child: string;
                type: string;
            };
            iconFont: {
                propertyType: string;
                child: string;
                type: string;
                defaultValue: string;
            };
            symbol: {
                propertyType: string;
                child: string;
                type: string;
                defaultValue: string;
            };
            symbolType: {
                propertyType: string;
                child: string;
                type: string;
                defaultValue: string;
            };
            symbolSize: {
                propertyType: string;
                child: string;
                type: string;
                defaultValue: string;
            };
            symbolActiveForegroundColor: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            symbolInactiveForegroundColor: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            symbolBackgroundColor: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            visible: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            minViewBoxWidth: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            fieldName: {
                propertyType: string;
                type: string;
            };
            orderByEnabled: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            visibilitychanged: {
                propertyType: string;
                Group: string;
            };
        };
        localizableText: string;
        defaultText: string;
        textAlignment: string;
        lineClamp: number;
        textWrapping: string;
        textTrimming: string;
        iconFont: string;
        symbol: string;
        symbolType: string;
        symbolSize: string;
        symbolActiveForegroundColor: string;
        symbolInactiveForegroundColor: string;
        symbolBackgroundColor: string;
        set visible(value: boolean | string);
        get visible(): boolean;
        minViewBoxWidth: number;
        fieldName: string;
        get orderByEnabled(): boolean;
        set orderByEnabled(value: boolean);
        get headerTextBlock(): VisiWin.UI.TextBlock;
        get headerSymbol(): VisiWin.UI.Symbol;
        get orderByDesc(): boolean | null;
        set orderByDesc(value: boolean | null);
        private _headerTextBlock;
        private _headerSymbol;
        private _orderByEnabled;
        private _visible;
        private _orderByDesc;
        private _withinScreenLimit;
        private _resizeTimeoutId;
        private _resizeHandler;
        constructor(element: any, options: any);
        createTemplate(): any;
        afterInit(): void;
        attach(): Promise<any> | null;
        detach(): Promise<any> | null;
        _updateLayout(changes: any): void;
        _updateColors(changes: any): void;
        private _onResize;
        private _onResizeEnd;
        private _isScreenSizeOk;
        private _onVisibilityChange;
    }
}
//# sourceMappingURL=virtualizing-table-column.control.d.ts.map
/// <reference types="visiwin" />
declare namespace Lenze.UI {
    abstract class VirtualizingTableBase<T> extends Lenze.UI.ControlBase {
        static onSelectedEventName: string;
        protected readonly _selectedTrClassName = "lenze-virtualizingtable__table-selected";
        headerPadding: string;
        headerBorderWidthTop: string;
        headerBorderWidthSides: string;
        headerBorderWidthBottom: string;
        headerBorderStyle: string;
        headerFontClass: string;
        headerFontSize: string;
        headerFontWeight: string;
        headerUpperCase: boolean;
        bodyPadding: string;
        bodyBorderWidthSides: string;
        bodyBorderWidthBottom: string;
        bodyBorderStyle: string;
        bodyFontClass: string;
        bodyFontSize: string;
        bodyFontWeight: string;
        pageSize: number;
        maxAmountOfPages: number;
        loadNextTriggerValue: number;
        columns: string;
        disableMultiSort: boolean;
        backgroundColor: string;
        foregroundColor: string;
        headerBackgroundColor: string;
        headerForegroundColor: string;
        headerBorderColor: string;
        headerSymbolBackgroundColor: string;
        headerSymbolActiveForegroundColor: string;
        headerSymbolInactiveForegroundColor: string;
        bodyBackgroundColor: string;
        bodyForegroundColor: string;
        bodyBorderColor: string;
        bodySelectedBackgroundColor: string;
        bodySelectedForegroundColor: string;
        bodySelectedBorderColor: string;
        selectedObjectChanged: VisiWin.Internal.System.Events.TypedEvent<any, any>;
        protected _tableElement: HTMLTableElement;
        protected _headerElement: HTMLTableSectionElement;
        protected _headerRowElement: HTMLTableRowElement;
        protected _bodyElement: HTMLTableSectionElement;
        protected _currentObjects: T[];
        protected _selectedObject: T | null;
        protected _isBusy: boolean;
        protected _pageNumber: number;
        protected _pageSize: number;
        protected _canLoadNext: boolean;
        protected _canLoadPrevious: boolean;
        protected _elementScrollListener: any;
        protected _lastKnownPosY: number;
        protected _tableClickListener: any;
        protected get _mappedOrderedColumns(): Models.IOrderBy[];
        protected abstract readonly _tableClassName: string;
        protected abstract readonly _headerClassName: string;
        protected abstract readonly _headerRowClassName: string;
        protected abstract readonly _headerCellClassName: string;
        protected abstract readonly _bodyClassName: string;
        protected abstract readonly _bodyRowClassName: string;
        protected abstract readonly _bodyCellClassName: string;
        /**
         * This is created with wrong naming convention intentionally.
         * To pass the selected value when used inside the event trigger in _raiseSelectedChangeEvent, the variable value needs to be set.
         * As it's not meant to be used except by the event trigger handler within the VisiWin framework, the access modifier is set to private.
         */
        private value;
        private _isAttachedCalled;
        private _columnsCollection;
        private _orderedColumns;
        private _columnVisibilityChangedHandler;
        private _columnClickHandler;
        registerChild(controlType: string, action: string, element: VWElement, options: any): any;
        createTemplate(): any;
        getSelectedObject(): T | null;
        clearSelectedObject(): void;
        _updateColors(changes: any): void;
        _updateLayout(changes: any): void;
        afterInit(): void;
        attach(): Promise<void>;
        dispose(): boolean;
        protected abstract _onIsBusyChanged(isFinished: boolean): void;
        protected abstract _isSameItem(item1: T, item2: T): boolean;
        protected abstract _getValuesAsync(pageNumber: number, pageSize: number, orderBy: Models.IOrderBy[]): Promise<Lenze.Models.IPagedResponse<T>>;
        protected _refreshAsync(): Promise<void>;
        protected _resolveValueAsync(value: T, fieldName: string): Promise<any>;
        protected _setBodyCellLayout(cell: HTMLTableCellElement, firstCell: boolean, column: VirtualizingTableColumn): void;
        protected _setBodyCellColors(cell: HTMLTableCellElement, firstCell: boolean, column: VirtualizingTableColumn): void;
        protected _isCellSelected(cell: HTMLTableCellElement): boolean;
        private _createTable;
        private _resetVirtualization;
        private _getNewObjectsAsync;
        private _updateOrderedColumns;
        private _onElementScrollAsync;
        private _loadAsync;
        private _loadPreviousAsync;
        private _loadNextAsync;
        /**
         * Sets the isBusy, canLoadNext and canLoadPrevious flag.
         * Upon finishing it validates if the user is still in a position within the scrolling threshold and if so triggering the next load.
         * If the abstract function _onIsBusyChanged will be fired by the function with the value of isFinished.
         * @param isBusy Value to set on _isBusy (null writes no value).
         * @param canLoadNext Value to set on _canLoadNext (null writes no value).
         * @param canLoadPrevious Value to set on _canLoadPrevious (null writes no value).
         * @param isFinished Triggers the next loading and calls the _onIsBusyChanged function with the value of the parameter.
         */
        private _setIsBusy;
        private _addFromCurrentBodyValuesAsync;
        private _setHeaderCellsLayout;
        private _setHeaderCellsColors;
        private _setBodyCells;
        private _addToBodyAsync;
        private _createBodyTableRowAsync;
        private _setValueOnCell;
        private _createBodyCell;
        private _setCellVisibility;
        private _withinLoadNextMargin;
        private _withinLoadPreviousMargin;
        private _onTableClick;
        private _onColumnVisibilityChanged;
        private _onColumnClickAsync;
        private _getNewOrderByValue;
        private _parseVirtualizedIndex;
        private _raiseSelectedChangeEvent;
        /**
         * Function "borrowed" from textbase in bundled VisiWinJS
         */
        private _setTextTrimming;
        /**
         * Function "borrowed" from textbase in bundled VisiWinJS
         */
        private _setTextWrapping;
    }
}
//# sourceMappingURL=virtualizing-table.base.d.ts.map
declare namespace Lenze.UI {
    class RefreshControl extends Lenze.UI.VariableBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            variableName: {
                propertyType: string;
                type: string;
            };
        };
        private _languageService;
        private _oldVariableValue;
        private _oldLCID;
        private _languageChangedHandler;
        constructor(element: any, options: any);
        _updateColors(changes: any): void;
        _updateLayout(changes: any): void;
        afterInit(): void;
        attach(): Promise<any>;
        detach(): Promise<any>;
        private _onVariableChange;
        private _onLanguageChange;
        private _refresh;
    }
}
//# sourceMappingURL=refresh.control.d.ts.map
declare module Lenze.Models {
    class ApplicationCredit {
        private _assigned;
        get assigned(): number | null;
        private _activeNeeded;
        get activeNeeded(): number;
        private _maxNeeded;
        get maxNeeded(): number | null;
        private _worstCaseNeeded;
        get worstCaseNeeded(): number;
        private _borrowed;
        get borrowed(): number | null;
        constructor();
        init(data: any): void;
        static fromJS(data: any): ApplicationCredit;
    }
}
//# sourceMappingURL=application-credit.model.d.ts.map
declare module Lenze.Models {
    class Budget {
        private _budgetName;
        get budgetName(): string;
        private _applicationCredit;
        get applicationCredit(): ApplicationCredit;
        constructor();
        init(data: any): void;
        static fromJS(data: any): Budget;
    }
}
//# sourceMappingURL=budget.model.d.ts.map
declare module Lenze.Models {
    enum LicenseFieldNameEnum {
        totalApplicationCredit = "TAC",
        components = "C",
        budgets = "B",
        fastToolboxInfo = "FTBI",
        totalAvailable = "TA",
        totalActiveNeeded = "TAN",
        totalMaxNeeded = "TMN",
        totalWorstCaseNeeded = "TWCN",
        totalConfigured = "TC",
        configMode = "CM",
        name = "N",
        instancePath = "IP",
        instanceID = "IID",
        lenzeLicenseClass = "LLC",
        activated = "A",
        activationTime = "AT",
        budgetName = "BN",
        applicationCredit = "AC",
        assigned = "A",
        activeNeeded = "AN",
        maxNeeded = "MN",
        worstCaseNeeded = "WCN",
        borrowed = "B"
    }
}
//# sourceMappingURL=field-name.enum.d.ts.map
declare module Lenze.Models {
    class LicenseBodyItem {
        private _componentType;
        get componentType(): number;
        private _subComponentType;
        get componentSubType(): number;
        private _componentNames;
        get componentNames(): string[];
        get totalComponents(): number;
        private _totalCredits;
        get totalCredits(): number;
        set totalCredits(value: number);
        constructor(componentType: number, subComponentType: number, componentNames: string[], totalCredits: number);
    }
}
//# sourceMappingURL=license-body-item.model.d.ts.map
declare module Lenze.Models {
    class LicenseComponent {
        private _name;
        get name(): string;
        private _instancePath;
        get instancePath(): string;
        private _instanceID;
        get instanceID(): string;
        private _lenzeLicenseClass;
        get lenzeLicenseClass(): string;
        private _activated;
        get activated(): number;
        private _activationTime;
        get activationTime(): Date;
        private _budgetName;
        get budgetName(): string;
        private _applicationCredit;
        get applicationCredit(): ApplicationCredit;
        constructor();
        init(data: any): void;
        static fromJS(data: any): LicenseComponent;
    }
}
//# sourceMappingURL=license-component.model.d.ts.map
declare module Lenze.Models {
    class LicenseResponse {
        private _totalApplicationCredit;
        get totalApplicationCredit(): TotalApplicationCredit;
        private _fastToolboxInfo;
        get fastToolboxInfo(): FastToolboxInfo;
        private _components;
        get components(): LicenseComponent[];
        private _budgets;
        get budgets(): Budget[];
        constructor();
        init(data: any): void;
        static fromJS(data: any): LicenseResponse;
    }
}
//# sourceMappingURL=response.model.d.ts.map
declare module Lenze.Models {
    class TotalApplicationCredit {
        private _totalAvailable;
        get totalAvailable(): number;
        private _totalActiveNeeded;
        get totalActiveNeeded(): number;
        private _totalMaxNeeded;
        get totalMaxNeeded(): number;
        private _totalWorstCaseNeeded;
        get totalWorstCaseNeeded(): number;
        private _totalConfigured;
        get totalConfigured(): number;
        constructor();
        init(data: any): void;
        static fromJS(data: any): TotalApplicationCredit;
    }
    class FastToolboxInfo {
        private _configMode;
        get configMode(): number;
        constructor();
        init(data: any): void;
        static fromJS(data: any): FastToolboxInfo;
    }
}
//# sourceMappingURL=total-application-credits.model.d.ts.map
declare module Lenze.Models {
    enum LogbookFieldNameEnum {
        time = "T",
        number = "NR",
        counter = "C",
        severity = "S",
        eventId = "E",
        instanceId = "ID",
        errorText = "ET",
        layer = "L",
        targetGroup = "TG",
        priority = "P"
    }
}
//# sourceMappingURL=field-name.enum.d.ts.map
declare module Lenze.Models {
    interface LogbookFilterItem {
        displayName: string;
        displayNameLocalizable: boolean;
        value: string | number;
    }
}
//# sourceMappingURL=filter-item.model.d.ts.map
declare module Lenze.Models {
    interface LogbookFilterOptions {
        pageNumber: number;
        pageSize: number;
        lcid: number;
        instanceId: string;
        severities: number[];
        componentNames: string[];
        componentTypes: number[];
        layers: number[];
        targetGroups: number[];
        orderBy: LogbookOrderBy[];
    }
}
//# sourceMappingURL=filter-options.model.d.ts.map
declare module Lenze.Models {
    enum LogbookFilterEnum {
        severity = 0,
        layer = 1,
        componentName = 2,
        componentType = 3,
        targetGroup = 4
    }
}
//# sourceMappingURL=filter.enum.d.ts.map
declare module Lenze.Models {
    interface LogbookOrderBy {
        field: string;
        direction: number;
    }
}
//# sourceMappingURL=order-by.model.d.ts.map
declare module Lenze.Models {
    interface LogbookRequest {
        id: string;
        requestTime: string;
        filterOptions: LogbookFilterOptions;
    }
}
//# sourceMappingURL=request.model.d.ts.map
declare module Lenze.Models {
    interface ILogbookMapInformationModel {
        severityLocalizableTexts: string;
        layerLocalizableTexts: string;
        targetGroupLocalizableTexts: string;
        componentTypeLocalizableTexts: string;
        dateTimeLocale: string;
        formatDate: string;
        formatTime: string;
        defaultErrorText: string;
    }
}
//# sourceMappingURL=response-map.model.d.ts.map
declare module Lenze.Models {
    class LogbookResponse {
        private _time;
        get time(): Date;
        private _number;
        get number(): number;
        private _counter;
        get counter(): number;
        private _severity;
        get severity(): number;
        private _eventId;
        get eventId(): string;
        private _instanceId;
        get instanceId(): string;
        private _errorText;
        get errorText(): string;
        private _layer;
        get layer(): number;
        private _targetGroup;
        get targetGroup(): string;
        private _priority;
        get priority(): number;
        private _componentName;
        get componentName(): string;
        set componentName(value: string);
        private _componentType;
        get componentType(): number;
        set componentType(value: number);
        constructor();
        init(data: any): void;
        static fromJS(data: any): LogbookResponse;
    }
}
//# sourceMappingURL=response.model.d.ts.map
declare module Lenze.Models {
    class AlarmElement {
        private _name;
        get name(): string;
        private _instanceID;
        get instanceID(): string;
        private _layer;
        get layer(): number;
        private _textRefId;
        get textRefId(): string;
        private _eventId;
        get eventId(): string;
        private _eventTextRefId;
        get eventTextRefId(): string;
        private _eventTimeStampLow;
        get eventTimeStampLow(): string;
        private _eventTimeStampHigh;
        get eventTimeStampHigh(): string;
        private _actHighestSeverity;
        get actHighestSeverity(): number;
        private _cmpInfo;
        get cmpInfo(): string;
        private _entries;
        get entries(): AlarmEntry[];
        constructor();
        init(data: any): void;
        static fromJS(data: any): AlarmElement;
    }
}
//# sourceMappingURL=alarm-element.model.d.ts.map
declare module Lenze.Models {
    class AlarmEntry {
        private _eventId;
        get eventId(): string;
        private _eventTextRefId;
        get eventTextRefId(): number;
        private _eventState;
        get eventState(): number;
        private _severity;
        get severity(): number;
        private _targetGroup;
        get targetGroup(): number;
        private _priority;
        get priority(): number;
        private _control;
        get control(): number;
        constructor();
        init(data: any): void;
        static fromJS(data: any): AlarmEntry;
    }
}
//# sourceMappingURL=alarm-entry.model.d.ts.map
declare module Lenze.Models {
    enum AlarmIconsEnum {
        errorParent = "alert_active",
        errorChild = "alert_inactive",
        warningParent = "message_active",
        warningChild = "message_inactive",
        infoParent = "hint_active",
        infoChild = "hint_inactive"
    }
}
//# sourceMappingURL=alarm-icons.enum.d.ts.map
declare module Lenze.Models {
    interface AlarmSymbolColor {
        borderRadius: string;
        backgroundColor: string;
        foregroundColor: string;
        level: number;
    }
}
//# sourceMappingURL=alarm-symbol-color.model.d.ts.map
declare module Lenze.Models {
    class ApplicationViewElement {
        private _name;
        get name(): string;
        private _instanceID;
        get instanceID(): string;
        private _components;
        get components(): ApplicationViewElement[] | null;
        set components(value: ApplicationViewElement[] | null);
        constructor();
        init(data: any): void;
        private getFieldValue;
        static fromJS(data: any): ApplicationViewElement;
    }
}
//# sourceMappingURL=application-view-element.model.d.ts.map
declare module Lenze.Models {
    enum ApplicationViewFieldNameEnum {
        name = "N",
        instanceID = "IID",
        components = "C"
    }
}
//# sourceMappingURL=application-view-field-name.enum.d.ts.map
declare module Lenze.Models {
    enum ApplicationViewOldFieldNameEnum {
        name = "Name",
        instanceID = "InstanceID",
        components = "Component"
    }
}
//# sourceMappingURL=application-view-old-field-name.enum.d.ts.map
declare module Lenze.Models {
    interface IComponent {
        name: string;
        instanceID: string;
        componentType: number;
    }
}
//# sourceMappingURL=component-base.model.d.ts.map
declare module Lenze.Models {
    class ComponentElement implements IComponent {
        private _name;
        get name(): string;
        private _instancePath;
        get instancePath(): string;
        private _componentType;
        get componentType(): number;
        private _componentSubType;
        get componentSubType(): number;
        private _layer;
        get layer(): number;
        private _instanceID;
        get instanceID(): string;
        private _active;
        get active(): boolean;
        private _registrationTime;
        get registrationTime(): string;
        private _parentProcessPID;
        get parentProcessPID(): number;
        constructor();
        init(data: any): void;
        private getFieldValue;
        static fromJS(data: any): ComponentElement;
    }
}
//# sourceMappingURL=component-element.model.d.ts.map
declare module Lenze.Models {
    enum ComponentElementFieldNameEnum {
        name = "N",
        instancePath = "IP",
        componentType = "CT",
        componentSubType = "CST",
        layer = "L",
        instanceID = "IID",
        active = "A",
        registrationTime = "RT",
        parentProcessPID = "PPID"
    }
}
//# sourceMappingURL=component-field-name.enum.d.ts.map
declare module Lenze.Models {
    enum ComponentElementOldFieldNameEnum {
        name = "Name",
        instancePath = "InstancePath",
        componentType = "ComponentType",
        componentSubType = "ComponentSubtype",
        layer = "Layer",
        instanceID = "InstanceID",
        active = "Active",
        registrationTime = "RegistrationTime",
        parentProcessPID = "ParentProcessPID"
    }
}
//# sourceMappingURL=component-old-field-name.enum.d.ts.map
declare module Lenze.Models {
    enum ModuleFieldNameEnum {
        components = "C",
        applicationView = "AV",
        communicationView = "CV"
    }
}
//# sourceMappingURL=field-name.enum.d.ts.map
declare module Lenze.Models {
    enum FunctionTreeValueType {
        component = 0,
        asset = 1,
        currentAlarms = 2,
        logbook = 3,
        license = 4
    }
}
//# sourceMappingURL=function-tree-value-type.enum.d.ts.map
declare module Lenze.Models {
    enum LayerEnum {
        BaseSettings = 4,
        Communication = 5,
        Kinematics = 6,
        Motion = 7,
        TechApplication = 8,
        ProcessControl = 9
    }
}
//# sourceMappingURL=layer.enum.d.ts.map
declare module Lenze.Models {
    enum OldModuleFieldNameEnum {
        components = "Components",
        applicationView = "ApplicationView",
        communicationView = "CommunicationView"
    }
}
//# sourceMappingURL=old-field-name.enum.d.ts.map
declare module Lenze.Models {
    class ModuleResponse {
        private _components;
        get components(): ComponentElement[];
        private _applicationView;
        get applicationView(): ApplicationViewElement;
        private _communicationView;
        get communicationView(): ApplicationViewElement;
        constructor();
        init(data: any): void;
        private getFieldValue;
        private getComponentValue;
        static fromJS(data: any): ModuleResponse;
    }
}
//# sourceMappingURL=response.model.d.ts.map
declare module Lenze.Models {
    enum SeverityEnum {
        FaultCiA402 = 1,
        Warning = 2,
        Information = 11,
        WarningLock = 13,
        TroubleLog = 15,
        ToubleCinh = 16,
        FaultLog = 18,
        FaultQspAppl = 19,
        FaultQsp = 20,
        FaultQspCinh = 21,
        FaultCinh = 23,
        Fault = 30
    }
}
//# sourceMappingURL=severity.enum.d.ts.map
declare module Lenze.Models {
    enum TargetGroupEnum {
        Operator = 1,
        Setter = 2,
        ShiftLeader = 3,
        Maintainer = 4,
        Expert = 5
    }
}
//# sourceMappingURL=target-group.enum.d.ts.map
declare module Lenze.Models {
    enum TreeType {
        componentTree = 0,
        communicationTree = 1,
        assetTree = 2
    }
}
//# sourceMappingURL=tree-type.enum.d.ts.map
declare module Lenze.Models {
    enum TypeToGlyphEnum {
        Default = "&#xE077;",
        T0 = "&#xE077;",
        MachineAssetManager = "&#xE187;",
        T1801 = "&#xE16E;",
        T1601 = "&#xE16D;",
        T1501 = "&#xE16B;",
        T1201 = "&#xE176;",
        T1101 = "&#xE0DE;",
        T603 = "&#xE093;",
        T602 = "&#xE099;",
        T601 = "&#xE09A;",
        T552 = "&#xE09F;",
        T551 = "&#xE0A0;",
        T506 = "",
        T505 = "",
        T504 = "&#xE0A2;",
        T503 = "&#xE0A5;",
        T501 = "&#xE0A6;",
        T500 = "&#xF000;",
        T405 = "&#xE0A7;",
        T404 = "&#xE090;",
        T403 = "&#xE097;",
        T402 = "&#xE094;",
        T401 = "&#xE095;",
        T302 = "&#xE098;",
        T301 = "&#xE077;",
        T209 = "",
        T208 = "&#xE077;",
        T207 = "",
        T206 = "&#xF001;",
        T205 = "&#xE09E;",
        T204 = "&#xE0A3;",
        T203 = "&#xE0A4;",
        T202 = "&#xE0A3;",
        T201 = "&#xE0A4;",
        T105 = "&#xE0E1;",
        T104 = "&#xE092;",
        T103 = "&#xE092;",
        T102 = "&#xE091;",
        T101 = "&#xE09C;"
    }
}
//# sourceMappingURL=type-to-glyph.enum.d.ts.map
declare namespace Lenze.Models {
    interface ICertificateDetails {
        subjectCommonName: string;
        subjectOrganization: string;
        subjectOrganizationUnit: string;
        subjectLocality: string;
        subjectState: string;
        subjectCountry: string;
        subjectDomainComponent: string;
        issuerCommonName: string;
        issuerOrganization: string;
        issuerOrganizationUnit: string;
        issuerLocality: string;
        issuerState: string;
        issuerCountry: string;
        issuerDomainComponent: string;
        validFrom: Date;
        validTo: Date;
        serialNumber: string;
        signatureAlgorithm: string;
        signatureHashAlgorithm: string;
        cipherStrength: string;
        thumbprint: string;
        state: CertificateStateEnum;
    }
    class CertificateDetails implements ICertificateDetails {
        private _subjectCommonName;
        get subjectCommonName(): string;
        set subjectCommonName(value: string);
        private _subjectOrganization;
        get subjectOrganization(): string;
        set subjectOrganization(value: string);
        private _subjectOrganizationUnit;
        get subjectOrganizationUnit(): string;
        set subjectOrganizationUnit(value: string);
        private _subjectLocality;
        get subjectLocality(): string;
        set subjectLocality(value: string);
        private _subjectState;
        get subjectState(): string;
        set subjectState(value: string);
        private _subjectCountry;
        get subjectCountry(): string;
        set subjectCountry(value: string);
        private _subjectDomainComponent;
        get subjectDomainComponent(): string;
        set subjectDomainComponent(value: string);
        private _issuerCommonName;
        get issuerCommonName(): string;
        set issuerCommonName(value: string);
        private _issuerOrganization;
        get issuerOrganization(): string;
        set issuerOrganization(value: string);
        private _issuerOrganizationUnit;
        get issuerOrganizationUnit(): string;
        set issuerOrganizationUnit(value: string);
        private _issuerLocality;
        get issuerLocality(): string;
        set issuerLocality(value: string);
        private _issuerState;
        get issuerState(): string;
        set issuerState(value: string);
        private _issuerCountry;
        get issuerCountry(): string;
        set issuerCountry(value: string);
        private _issuerDomainComponent;
        get issuerDomainComponent(): string;
        set issuerDomainComponent(value: string);
        private _validFrom;
        get validFrom(): Date;
        set validFrom(value: Date);
        private _validTo;
        get validTo(): Date;
        set validTo(value: Date);
        private _serialNumber;
        get serialNumber(): string;
        set serialNumber(value: string);
        private _signatureAlgorithm;
        get signatureAlgorithm(): string;
        set signatureAlgorithm(value: string);
        private _signatureHashAlgorithm;
        get signatureHashAlgorithm(): string;
        set signatureHashAlgorithm(value: string);
        private _cipherStrength;
        get cipherStrength(): string;
        set cipherStrength(value: string);
        private _thumbprint;
        get thumbprint(): string;
        set thumbprint(value: string);
        private _state;
        get state(): CertificateStateEnum;
        set state(value: CertificateStateEnum);
        constructor(params?: Partial<ICertificateDetails>);
    }
}
//# sourceMappingURL=certificate-details.model.d.ts.map
declare module Lenze.Models {
    interface ICertificateListItemBody {
        details: CertificateDetails;
        validFromDataTextForegroundColor: string;
        validToDataTextForegroundColor: string;
    }
    class CertificateListItemBody implements ICertificateListItemBody {
        private _details;
        get details(): CertificateDetails;
        private _validFromDataTextForegroundColor;
        get validFromDataTextForegroundColor(): string;
        private _validToDataTextForegroundColor;
        get validToDataTextForegroundColor(): string;
        constructor(params?: Partial<ICertificateListItemBody>);
    }
}
//# sourceMappingURL=certificate-list-item-body.model.d.ts.map
declare module Lenze.Models {
    interface ICertificateListItemHeader {
        titleText: ListText;
        validitySymbolVisibility: string;
        validitySymbolIconFont: string;
        validitySymbolSymbolType: string;
        validitySymbolSymbol: string;
        validitySymbolForegroundColor: string;
        validityText1Visibility: string;
        validityText1: ListText;
        validityText2Visibility: string;
        validityText2: ListText;
        validityText3Visibility: string;
        validityText3: ListText;
    }
    class CertificateListItemHeader implements ICertificateListItemHeader {
        private _titleText;
        get titleText(): ListText;
        private _validitySymbolVisibility;
        get validitySymbolVisibility(): string;
        private _validitySymbolIconFont;
        get validitySymbolIconFont(): string;
        private _validitySymbolSymbolType;
        get validitySymbolSymbolType(): string;
        private _validitySymbolSymbol;
        get validitySymbolSymbol(): string;
        private _validitySymbolForegroundColor;
        get validitySymbolForegroundColor(): string;
        private _validityText1Visibility;
        get validityText1Visibility(): string;
        private _validityText1;
        get validityText1(): ListText;
        private _validityText2Visibility;
        get validityText2Visibility(): string;
        private _validityText2;
        get validityText2(): ListText;
        private _validityText3Visibility;
        get validityText3Visibility(): string;
        private _validityText3;
        get validityText3(): ListText;
        constructor(params?: Partial<ICertificateListItemHeader>);
    }
}
//# sourceMappingURL=certificate-list-item-header.model.d.ts.map
declare module Lenze.Models {
    interface ICertificateListItem {
        header: CertificateListItemHeader;
        body: CertificateListItemBody;
    }
    class CertificateListItem implements ICertificateListItem {
        private _header;
        get header(): CertificateListItemHeader;
        private _body;
        get body(): CertificateListItemBody;
        constructor(params?: Partial<ICertificateListItem>);
    }
}
//# sourceMappingURL=certificate-list-item.model.d.ts.map
declare namespace Lenze.Models {
    enum CertificateStateEnum {
        None = "None",
        Trusted = "Trusted",
        InQuarantine = "InQuarantine"
    }
    enum CertificateValidityStateEnum {
        Unknown = "Unknown",
        Expired = "Expired",
        ExpiresSoon = "ExpiresSoon",
        Valid = "Valid",
        ValidInFuture = "ValidInFuture"
    }
}
//# sourceMappingURL=certificate-state.enum.d.ts.map
declare namespace Lenze.UI {
    /**
     * These control represents a minimal example.
     * It shows the correctly implemented life cycle of linked server variables.
     * The value of of the variable is displayed within the html.
     */
    class VariablesExample extends Lenze.UI.ControlBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            variableAName: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
        };
        variableAName: string;
        private _variableService;
        private _variableAVariable;
        private _variableAChangeHandler;
        constructor(element: any, options: any);
        createTemplate(): Promise<any> | null;
        attach(): Promise<void>;
        afterInit(): void;
        dispose(): boolean;
        detach(): Promise<any> | null;
        private _variableAVariableChangeAsync;
        private _updateContent;
    }
}
//# sourceMappingURL=variables-example.control.d.ts.map
declare namespace Lenze.UI {
    class LicenseList extends Lenze.UI.ListBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            visualizationBudget: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            visualizationNoteText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            visualizationNoteLocalizableText: {
                propertyType: string;
                type: string;
            };
            slideOutAuthorizationRight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            detailsAuthorizationRight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            componentTypeLocalizableTexts: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            componentSubTypeLocalizableTexts: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            borderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            foregroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
        };
        visualizationBudget: string;
        visualizationNoteText: string;
        visualizationNoteLocalizableText: string;
        slideOutAuthorizationRight: string;
        componentTypeLocalizableTexts: string;
        componentSubTypeLocalizableTexts: string;
        protected _notEnabledText: string;
        private _budgets;
        private _licenseService;
        private _moduleService;
        private _userService;
        private _licenseChangedHandler;
        private _userChangedHandler;
        constructor(element: any, options: any);
        afterInit(): void;
        dispose(): boolean;
        protected _fillListAsync(): Promise<void>;
        protected _isEnabledAsync(): Promise<boolean>;
        private _onChangeAsync;
    }
}
//# sourceMappingURL=license-list.control.d.ts.map
declare namespace Lenze.UI {
    class LicenseTotal extends Lenze.UI.ControlBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            titleText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            titleLocalizableText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            titleTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            titleLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            titleTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            titleTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            titleTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            titleUppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            titleTextDecoration: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            titleTextShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            titleFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            titleFontFamily: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            titleFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            titleFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            titleLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            titleFontStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            titleLetterSpacing: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableNameText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            availableNameLocalizableText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableNameTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableNameLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableNameTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableNameTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableNameTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableNameUppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            availableNameTextDecoration: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableNameTextShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableNameFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            availableNameFontFamily: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableNameFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableNameFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableNameLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableNameFontStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableNameLetterSpacing: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableValueTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableValueLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableValueTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableValueTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableValueTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableValueUppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            availableValueTextDecoration: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableValueTextShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableValueFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            availableValueFontFamily: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableValueFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableValueFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableValueLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableValueFontStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableValueLetterSpacing: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableSymbolVisibility: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            availableSymbolIconFont: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            availableSymbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            availableSymbolSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingNameText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            remainingNameLocalizableText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingNameTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingNameLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingNameTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingNameTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingNameTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingNameUppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            remainingNameTextDecoration: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingNameTextShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingNameFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            remainingNameFontFamily: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingNameFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingNameFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingNameLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingNameFontStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingNameLetterSpacing: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingValueTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingValueLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingValueTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingValueTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingValueTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingValueUppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            remainingValueTextDecoration: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingValueTextShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingValueFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            remainingValueFontFamily: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingValueFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingValueFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingValueLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingValueFontStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingValueLetterSpacing: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingSymbolVisibility: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            remainingSymbolIconFont: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            remainingSymbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            remainingSymbolSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredNameText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            configuredNameLocalizableText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredNameTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredNameLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredNameTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredNameTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredNameTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredNameUppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            configuredNameTextDecoration: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredNameTextShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredNameFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            configuredNameFontFamily: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredNameFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredNameFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredNameLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredNameFontStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredNameLetterSpacing: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredValueTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredValueLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredValueTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredValueTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredValueTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredValueUppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            configuredValueTextDecoration: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredValueTextShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredValueFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            configuredValueFontFamily: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredValueFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredValueFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredValueLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredValueFontStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredValueLetterSpacing: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredSymbolVisibility: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            configuredSymbolIconFont: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            configuredSymbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configuredSymbolSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeNameText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            configModeNameLocalizableText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeNameTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeNameLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeNameTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeNameTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeNameTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeNameUppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            configModeNameTextDecoration: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeNameTextShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeNameFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            configModeNameFontFamily: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeNameFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeNameFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeNameLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeNameFontStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeNameLetterSpacing: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeValueTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeValueLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeValueTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeValueTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeValueTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeValueUppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            configModeValueTextDecoration: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeValueTextShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeValueFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            configModeValueFontFamily: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeValueFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeValueFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeValueLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeValueFontStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeValueLetterSpacing: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeSymbolVisibility: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            configModeSymbolIconFont: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            configModeSymbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            configModeSymbolSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededNameText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            neededNameLocalizableText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededNameTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededNameLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededNameTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededNameTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededNameTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededNameUppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            neededNameTextDecoration: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededNameTextShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededNameFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            neededNameFontFamily: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededNameFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededNameFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededNameLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededNameFontStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededNameLetterSpacing: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededValueTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededValueLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededValueTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededValueTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededValueTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededValueUppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            neededValueTextDecoration: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededValueTextShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededValueFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            neededValueFontFamily: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededValueFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededValueFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededValueLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededValueFontStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededValueLetterSpacing: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededSymbolVisibility: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            neededSymbolIconFont: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            neededSymbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            neededSymbolSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            linkSymbolIconFont: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            linkSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            linkSymbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            linkSymbolSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            linkText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            linkLocalizableText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            linkTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            linkLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            linkTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            linkTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            linkTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            linkUppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            linkTextDecoration: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            linkTextShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            linkFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            linkFontFamily: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            linkFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            linkFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            linkLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            linkFontStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            linkLetterSpacing: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            borderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            foregroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            titleBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            titleForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            availableNameBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            availableNameForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            availableValueBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            availableValueForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            availableSymbolBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            availableSymbolForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            remainingNameBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            remainingNameForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            remainingValueBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            remainingValueForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            remainingSymbolBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            remainingSymbolForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            configuredNameBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            configuredNameForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            configuredValueBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            configuredValueForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            configuredSymbolBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            configuredSymbolForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            configModeNameBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            configModeNameForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            configModeValueBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            configModeValueForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            configModeSymbolBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            configModeSymbolForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            neededNameBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            neededNameForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            neededValueBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            neededValueForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            neededSymbolBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            neededSymbolForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            linkSymbolBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            linkSymbolForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            linkTextBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            linkTextForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
        };
        titleText: string;
        titleLocalizableText: string;
        titleTextAlignment: string;
        titleLineClamp: number;
        titleTextWrapping: string;
        titleTextTrimming: string;
        titleTextContrast: number;
        titleUppercase: boolean;
        titleTextDecoration: string;
        titleTextShadow: string;
        titleFontClass: string;
        titleFontFamily: string;
        titleFontSize: string;
        titleFontWeight: string;
        titleLineHeight: string;
        titleFontStyle: string;
        titleLetterSpacing: string;
        availableNameText: string;
        availableNameLocalizableText: string;
        availableNameTextAlignment: string;
        availableNameLineClamp: number;
        availableNameTextWrapping: string;
        availableNameTextTrimming: string;
        availableNameTextContrast: number;
        availableNameUppercase: boolean;
        availableNameTextDecoration: string;
        availableNameTextShadow: string;
        availableNameFontClass: string;
        availableNameFontFamily: string;
        availableNameFontSize: string;
        availableNameFontWeight: string;
        availableNameLineHeight: string;
        availableNameFontStyle: string;
        availableNameLetterSpacing: string;
        availableValueText: string;
        availableValueLocalizableText: string;
        availableValueTextAlignment: string;
        availableValueLineClamp: number;
        availableValueTextWrapping: string;
        availableValueTextTrimming: string;
        availableValueTextContrast: number;
        availableValueUppercase: boolean;
        availableValueTextDecoration: string;
        availableValueTextShadow: string;
        availableValueFontClass: string;
        availableValueFontFamily: string;
        availableValueFontSize: string;
        availableValueFontWeight: string;
        availableValueLineHeight: string;
        availableValueFontStyle: string;
        availableValueLetterSpacing: string;
        availableSymbolVisibility: string;
        availableSymbolIconFont: string;
        availableSymbol: string;
        availableSymbolType: string;
        availableSymbolSize: string;
        remainingNameText: string;
        remainingNameLocalizableText: string;
        remainingNameTextAlignment: string;
        remainingNameLineClamp: number;
        remainingNameTextWrapping: string;
        remainingNameTextTrimming: string;
        remainingNameTextContrast: number;
        remainingNameUppercase: boolean;
        remainingNameTextDecoration: string;
        remainingNameTextShadow: string;
        remainingNameFontClass: string;
        remainingNameFontFamily: string;
        remainingNameFontSize: string;
        remainingNameFontWeight: string;
        remainingNameLineHeight: string;
        remainingNameFontStyle: string;
        remainingNameLetterSpacing: string;
        remainingValueText: string;
        remainingValueLocalizableText: string;
        remainingValueTextAlignment: string;
        remainingValueLineClamp: number;
        remainingValueTextWrapping: string;
        remainingValueTextTrimming: string;
        remainingValueTextContrast: number;
        remainingValueUppercase: boolean;
        remainingValueTextDecoration: string;
        remainingValueTextShadow: string;
        remainingValueFontClass: string;
        remainingValueFontFamily: string;
        remainingValueFontSize: string;
        remainingValueFontWeight: string;
        remainingValueLineHeight: string;
        remainingValueFontStyle: string;
        remainingValueLetterSpacing: string;
        remainingSymbolVisibility: string;
        remainingSymbolIconFont: string;
        remainingSymbol: string;
        remainingSymbolType: string;
        remainingSymbolSize: string;
        configuredNameText: string;
        configuredNameLocalizableText: string;
        configuredNameTextAlignment: string;
        configuredNameLineClamp: number;
        configuredNameTextWrapping: string;
        configuredNameTextTrimming: string;
        configuredNameTextContrast: number;
        configuredNameUppercase: boolean;
        configuredNameTextDecoration: string;
        configuredNameTextShadow: string;
        configuredNameFontClass: string;
        configuredNameFontFamily: string;
        configuredNameFontSize: string;
        configuredNameFontWeight: string;
        configuredNameLineHeight: string;
        configuredNameFontStyle: string;
        configuredNameLetterSpacing: string;
        configuredValueText: string;
        configuredValueLocalizableText: string;
        configuredValueTextAlignment: string;
        configuredValueLineClamp: number;
        configuredValueTextWrapping: string;
        configuredValueTextTrimming: string;
        configuredValueTextContrast: number;
        configuredValueUppercase: boolean;
        configuredValueTextDecoration: string;
        configuredValueTextShadow: string;
        configuredValueFontClass: string;
        configuredValueFontFamily: string;
        configuredValueFontSize: string;
        configuredValueFontWeight: string;
        configuredValueLineHeight: string;
        configuredValueFontStyle: string;
        configuredValueLetterSpacing: string;
        configuredSymbolVisibility: string;
        configuredSymbolIconFont: string;
        configuredSymbol: string;
        configuredSymbolType: string;
        configuredSymbolSize: string;
        configModeNameText: string;
        configModeNameLocalizableText: string;
        configModeNameTextAlignment: string;
        configModeNameLineClamp: number;
        configModeNameTextWrapping: string;
        configModeNameTextTrimming: string;
        configModeNameTextContrast: number;
        configModeNameUppercase: boolean;
        configModeNameTextDecoration: string;
        configModeNameTextShadow: string;
        configModeNameFontClass: string;
        configModeNameFontFamily: string;
        configModeNameFontSize: string;
        configModeNameFontWeight: string;
        configModeNameLineHeight: string;
        configModeNameFontStyle: string;
        configModeNameLetterSpacing: string;
        configModeValueText: string;
        configModeValueLocalizableText: string;
        configModeValueTextAlignment: string;
        configModeValueLineClamp: number;
        configModeValueTextWrapping: string;
        configModeValueTextTrimming: string;
        configModeValueTextContrast: number;
        configModeValueUppercase: boolean;
        configModeValueTextDecoration: string;
        configModeValueTextShadow: string;
        configModeValueFontClass: string;
        configModeValueFontFamily: string;
        configModeValueFontSize: string;
        configModeValueFontWeight: string;
        configModeValueLineHeight: string;
        configModeValueFontStyle: string;
        configModeValueLetterSpacing: string;
        configModeSymbolVisibility: string;
        configModeSymbolIconFont: string;
        configModeSymbol: string;
        configModeSymbolType: string;
        configModeSymbolSize: string;
        neededNameText: string;
        neededNameLocalizableText: string;
        neededNameTextAlignment: string;
        neededNameLineClamp: number;
        neededNameTextWrapping: string;
        neededNameTextTrimming: string;
        neededNameTextContrast: number;
        neededNameUppercase: boolean;
        neededNameTextDecoration: string;
        neededNameTextShadow: string;
        neededNameFontClass: string;
        neededNameFontFamily: string;
        neededNameFontSize: string;
        neededNameFontWeight: string;
        neededNameLineHeight: string;
        neededNameFontStyle: string;
        neededNameLetterSpacing: string;
        neededValueText: string;
        neededValueLocalizableText: string;
        neededValueTextAlignment: string;
        neededValueLineClamp: number;
        neededValueTextWrapping: string;
        neededValueTextTrimming: string;
        neededValueTextContrast: number;
        neededValueUppercase: boolean;
        neededValueTextDecoration: string;
        neededValueTextShadow: string;
        neededValueFontClass: string;
        neededValueFontFamily: string;
        neededValueFontSize: string;
        neededValueFontWeight: string;
        neededValueLineHeight: string;
        neededValueFontStyle: string;
        neededValueLetterSpacing: string;
        neededSymbolVisibility: string;
        neededSymbolIconFont: string;
        neededSymbol: string;
        neededSymbolType: string;
        neededSymbolSize: string;
        linkSymbolIconFont: string;
        linkSymbol: string;
        linkSymbolType: string;
        linkSymbolSize: string;
        linkText: string;
        linkLocalizableText: string;
        linkTextAlignment: string;
        linkLineClamp: number;
        linkTextWrapping: string;
        linkTextTrimming: string;
        linkTextContrast: number;
        linkUppercase: boolean;
        linkTextDecoration: string;
        linkTextShadow: string;
        linkFontClass: string;
        linkFontFamily: string;
        linkFontSize: string;
        linkFontWeight: string;
        linkLineHeight: string;
        linkFontStyle: string;
        linkLetterSpacing: string;
        backgroundColor: string;
        borderColor: string;
        foregroundColor: string;
        titleBackgroundColor: string;
        titleForegroundColor: string;
        availableNameBackgroundColor: string;
        availableNameForegroundColor: string;
        availableValueBackgroundColor: string;
        availableValueForegroundColor: string;
        availableSymbolBackgroundColor: string;
        availableSymbolForegroundColor: string;
        remainingNameBackgroundColor: string;
        remainingNameForegroundColor: string;
        remainingValueBackgroundColor: string;
        remainingValueForegroundColor: string;
        remainingSymbolBackgroundColor: string;
        remainingSymbolForegroundColor: string;
        configuredNameBackgroundColor: string;
        configuredNameForegroundColor: string;
        configuredValueBackgroundColor: string;
        configuredValueForegroundColor: string;
        configuredSymbolBackgroundColor: string;
        configuredSymbolForegroundColor: string;
        configModeNameBackgroundColor: string;
        configModeNameForegroundColor: string;
        configModeValueBackgroundColor: string;
        configModeValueForegroundColor: string;
        configModeSymbolBackgroundColor: string;
        configModeSymbolForegroundColor: string;
        neededNameBackgroundColor: string;
        neededNameForegroundColor: string;
        neededValueBackgroundColor: string;
        neededValueForegroundColor: string;
        neededSymbolBackgroundColor: string;
        neededSymbolForegroundColor: string;
        linkSymbolBackgroundColor: string;
        linkSymbolForegroundColor: string;
        linkTextBackgroundColor: string;
        linkTextForegroundColor: string;
        private _titleElement;
        private _availableContainers;
        private _availableNameElement;
        private _availableValueElement;
        private _availableSymbolElement;
        private _remainingContainers;
        private _remainingNameElement;
        private _remainingValueElement;
        private _remainingSymbolElement;
        private _configuredContainers;
        private _configuredNameElement;
        private _configuredValueElement;
        private _configuredSymbolElement;
        private _configModeContainers;
        private _configModeNameElement;
        private _configModeValueElement;
        private _configModeSymbolElement;
        private _neededContainers;
        private _neededNameElement;
        private _neededValueElement;
        private _neededSymbolElement;
        private _linkSymbolElement;
        private _linkTextElement;
        private _licenseService;
        private _licenseChangedHandler;
        constructor(element: any, options: any);
        createTemplate(): Promise<any> | null;
        afterInit(): void;
        _updateLayout(changes: any): void;
        _updateColors(changes: any): void;
        attach(): Promise<any | null>;
        dispose(): boolean;
        private _setContainerHeights;
        private _setCreditValuesAsync;
        private _onLicenseChangedAsync;
    }
}
//# sourceMappingURL=license-total.control.d.ts.map
declare namespace Lenze.UI {
    class LogbookFilter extends Lenze.UI.ControlBase {
        private readonly _rowClassName;
        private readonly _selectedRowClassName;
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            filterOnChange: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            textVarInName: {
                propertyType: string;
                type: string;
            };
            severityLocalizableTexts: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            layerLocalizableTexts: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            targetGroupLocalizableTexts: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            componentTypeLocalizableTexts: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            foregroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            borderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            disabledBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            disabledForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            disabledBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            selectedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            selectedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            disabledSelectedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            disabledSelectedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            itemselected: {
                propertyType: string;
                group: string;
            };
        };
        filterOnChange: boolean;
        textVarInName: string;
        severityLocalizableTexts: string;
        layerLocalizableTexts: string;
        targetGroupLocalizableTexts: string;
        componentTypeLocalizableTexts: string;
        backgroundColor: string;
        foregroundColor: string;
        borderColor: string;
        disabledBackgroundColor: string;
        disabledForegroundColor: string;
        disabledBorderColor: string;
        selectedBackgroundColor: string;
        selectedForegroundColor: string;
        disabledSelectedBackgroundColor: string;
        disabledSelectedForegroundColor: string;
        get isInitialized(): boolean;
        private _isInitialized;
        private _isBusy;
        private _filterType;
        private _allFilterValues;
        private _filteredFilterValues;
        private _selectedFilterValues;
        private _setFilterValuesDictionary;
        private _textVarIn;
        private _prefilteredValues;
        private _moduleService;
        private _logbookService;
        private _languageService;
        private _rowSelectedHandler;
        private _filterButtonClickHandler;
        constructor(element: any, options: any);
        setFilterTypeAsync(filterType: Models.LogbookFilterEnum, prefilter?: (string | number)[]): Promise<void>;
        getFilteredValues(): any[];
        setIsBusy(value: boolean): void;
        clearAsync(): Promise<void>;
        createTemplate(): any;
        afterInit(): void;
        createHandler(): void;
        dispose(): boolean;
        _updateColors(changes: any): void;
        private _resetAllItemsAsync;
        private _setFilteredItems;
        private _setRows;
        private _getSeverityValuesAsync;
        private _getLayerValuesAsync;
        private _getComponentNameValuesAsync;
        private _getComponentTypeValuesAsync;
        private _getTargetGroupValuesAsync;
        private _getArrayFromEnum;
        private _onRowSelectedAsync;
    }
}
//# sourceMappingURL=logbook-filter.control.d.ts.map
declare namespace Lenze.UI {
    class Logbook extends Lenze.UI.VirtualizingTableBase<Models.LogbookResponse> {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            registerTargetId: {
                propertyType: string;
                defaultValue: string;
            };
            headerPadding: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            headerBorderWidthTop: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            headerBorderWidthSides: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            headerBorderWidthBottom: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            headerBorderStyle: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            headerFontClass: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            headerFontSize: {
                propertyType: string;
                type: string;
            };
            headerFontWeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            headerUpperCase: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            bodyPadding: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            bodyBorderWidthSides: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            bodyBorderWidthBottom: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            bodyBorderStyle: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            bodyFontClass: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            bodyFontSize: {
                propertyType: string;
                type: string;
            };
            bodyFontWeight: {
                propertyType: string;
                type: string;
            };
            dateTimeLocale: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            formatDate: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            formatTime: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            pageSize: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            maxAmountOfPages: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            loadNextTriggerValue: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            columns: {
                propertyType: string;
                type: string;
            };
            disableMultiSort: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            severityFilterTableName: {
                propertyType: string;
                type: string;
            };
            layerFilterTableName: {
                propertyType: string;
                type: string;
            };
            componentNameFilterTableName: {
                propertyType: string;
                type: string;
            };
            componentTypeFilterTableName: {
                propertyType: string;
                type: string;
            };
            targetGroupFilterTableName: {
                propertyType: string;
                type: string;
            };
            severityLocalizableTexts: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            layerLocalizableTexts: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            targetGroupLocalizableTexts: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            componentTypeLocalizableTexts: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            defaultErrorText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            foregroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            headerBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            headerForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            headerBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            headerSymbolBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            headerSymbolActiveForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            headerSymbolInactiveForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            bodyBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            bodyForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            bodyBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            bodySelectedBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            bodySelectedForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            bodySelectedBorderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            selectedchanged: {
                propertyType: string;
                group: string;
                triggerDataName: string;
            };
        };
        dateTimeLocale: string;
        formatDate: string;
        formatTime: string;
        severityFilterTableName: string;
        layerFilterTableName: string;
        componentNameFilterTableName: string;
        componentTypeFilterTableName: string;
        targetGroupFilterTableName: string;
        severityLocalizableTexts: string;
        layerLocalizableTexts: string;
        targetGroupLocalizableTexts: string;
        componentTypeLocalizableTexts: string;
        defaultErrorText: string;
        protected _tableClassName: string;
        protected _headerClassName: string;
        protected _headerRowClassName: string;
        protected _headerCellClassName: string;
        protected _bodyClassName: string;
        protected _bodyRowClassName: string;
        protected _bodyCellClassName: string;
        private _logbookHelper;
        private _id;
        private _logbookEnabled;
        private _severitiesFilter;
        private _layerFilter;
        private _componentNameFilter;
        private _componentTypeFilter;
        private _targetGroupFilter;
        private _componentNamesToFilter;
        private _logbookService;
        private _languageService;
        private _filterTableSelectedHandler;
        private _languageChangeHandler;
        constructor(element: any, options: any);
        refreshLogbookAsync(): Promise<void>;
        clearFiltersAsync(): Promise<void>;
        getFilterOptions(pageNumber: number, pageSize: number, orderBy?: Models.IOrderBy[] | null): Models.LogbookFilterOptions;
        /**
         * This function disables all appended controls to prevent user interaction.
         *
         * @remarks
         * Beware! There's no enable function, only use this if you're sure it's followed up by a call to clearFilters.
         * */
        disable(): void;
        afterInit(): void;
        dispose(): boolean;
        protected _getValuesAsync(pageNumber: number, pageSize: number, orderBy: Models.IOrderBy[]): Promise<Lenze.Models.IPagedResponse<Models.LogbookResponse>>;
        protected _isSameItem(item1: Models.LogbookResponse, item2: Models.LogbookResponse): boolean;
        protected _resolveValueAsync(value: Models.LogbookResponse, fieldName: string): Promise<any>;
        protected _onIsBusyChanged(isFinished: boolean): void;
        private _onFilterTableSelectedAsync;
        private _onLanguageChanged;
        private _updateDisabledChildControls;
    }
}
//# sourceMappingURL=logbook.control.d.ts.map
declare namespace Lenze.UI {
    class FunctionTree extends Lenze.UI.TreeBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indentationPadding: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            headerFontClass: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            headerFontSize: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            headerFontWeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            headerTextAlignment: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            headerBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            headerTextBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            headerTextForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            bodyCellFontSize: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            bodyCellFontWeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            bodyCellBorderWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            bodyCellBorderStyle: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            bodyCellBorderColor: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            arrowSymbol: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            arrowSymbolColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            componentSymbolContainerMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            componentSymbolIconFont: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            componentSymbolSize: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            componentSymbolWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            componentSymbolHeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            componentSymbolForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            componentDefaultType: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            errorSymbolIconFont: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            errorSymbolSize: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            errorSymbolBorderWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            errorSymbolBorderStyle: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            errorSymbolBorderColor: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            errorSymbolFaultBorderRadius: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolFaultForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolFaultBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolTroubleBorderRadius: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolTroubleForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolTroubleBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolWarningBorderRadius: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolWarningForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolWarningBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolInformationBorderRadius: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolInformationForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolInformationBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            logbookSymbol: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            logbookIconFont: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            logbookMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            logbookPadding: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            logbookForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            logbookBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            logbookDialogName: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            currentAlarmsIconFont: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            currentAlarmsMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            currentAlarmsPadding: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            currentAlarmsDialogName: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            licenseSymbol: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            licenseIconFont: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            licenseMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            licensePadding: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            licenseForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            licenseBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            licenseDialogName: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            licenseAuthorizationRight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            showAsset: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            assetSymbol: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            assetIconFont: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            assetMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            assetPadding: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            assetForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            assetBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            assetDialogName: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            assetAuthorizationRight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            deviceTreeVariableName: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            currentAlarmsVariableName: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            borderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
        };
        protected _treeType: Models.TreeType;
        constructor(element: any, options: any);
    }
}
//# sourceMappingURL=function-tree.control.d.ts.map
declare namespace Lenze.UI {
    class NetworkTree extends Lenze.UI.TreeBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            indentationPadding: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            headerFontClass: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            headerFontSize: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            headerFontWeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            headerTextAlignment: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            headerBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            headerTextBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            headerTextForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            bodyCellFontWeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            bodyCellFontSize: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            bodyCellBorderWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            bodyCellBorderStyle: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            bodyCellBorderColor: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            arrowSymbol: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            arrowSymbolColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            componentSymbolContainerMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            componentSymbolIconFont: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            componentSymbolSize: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            componentSymbolWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            componentSymbolHeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            componentSymbolForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            componentDefaultType: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            errorSymbolIconFont: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            errorSymbolSize: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            errorSymbolBorderWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            errorSymbolBorderStyle: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            errorSymbolBorderColor: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            errorSymbolFaultBorderRadius: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolFaultForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolFaultBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolTroubleBorderRadius: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolTroubleForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolTroubleBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolWarningBorderRadius: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolWarningForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolWarningBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolInformationBorderRadius: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolInformationForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            errorSymbolInformationBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            logbookSymbol: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            logbookIconFont: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            logbookMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            logbookPadding: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            logbookForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            logbookBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            logbookDialogName: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            currentAlarmsIconFont: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            currentAlarmsMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            currentAlarmsPadding: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            currentAlarmsDialogName: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            licenseSymbol: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            licenseIconFont: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            licenseMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            licensePadding: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            licenseForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            licenseBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            licenseDialogName: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            licenseAuthorizationRight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            showAsset: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            assetSymbol: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            assetIconFont: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            assetMargin: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            assetPadding: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            assetForegroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            assetBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            assetDialogName: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            assetAuthorizationRight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            deviceTreeVariableName: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            currentAlarmsVariableName: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            borderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
        };
        protected _treeType: Models.TreeType;
        constructor(element: any, options: any);
    }
}
//# sourceMappingURL=network-tree.control.d.ts.map
declare namespace Lenze.UI {
    abstract class TreeBase extends Lenze.UI.ControlBase {
        protected readonly _idAttributeName = "data-instance-id";
        protected readonly _severityLevelAttributeName = "data-severity-level";
        indentationPadding: number;
        headerFontClass: string;
        headerFontSize: string;
        headerFontWeight: string;
        headerTextAlignment: string;
        headerBackgroundColor: string;
        headerTextBackgroundColor: string;
        headerTextForegroundColor: string;
        bodyCellFontWeight: string;
        bodyCellFontSize: string;
        bodyCellBorderWidth: string;
        bodyCellBorderStyle: string;
        bodyCellBorderColor: string;
        arrowSymbol: string;
        arrowSymbolColor: string;
        componentSymbolContainerMargin: string;
        componentSymbolIconFont: string;
        componentSymbolSize: string;
        componentSymbolWidth: string;
        componentSymbolHeight: string;
        componentSymbolColor: string;
        componentDefaultType: number;
        errorSymbolIconFont: string;
        errorSymbolSize: string;
        errorSymbolBorderWidth: string;
        errorSymbolBorderStyle: string;
        errorSymbolBorderColor: string;
        errorSymbolFaultBorderRadius: string;
        errorSymbolFaultForegroundColor: string;
        errorSymbolFaultBackgroundColor: string;
        errorSymbolTroubleBorderRadius: string;
        errorSymbolTroubleForegroundColor: string;
        errorSymbolTroubleBackgroundColor: string;
        errorSymbolWarningBorderRadius: string;
        errorSymbolWarningForegroundColor: string;
        errorSymbolWarningBackgroundColor: string;
        errorSymbolInformationBorderRadius: string;
        errorSymbolInformationForegroundColor: string;
        errorSymbolInformationBackgroundColor: string;
        logbookSymbol: string;
        logbookIconFont: string;
        logbookMargin: string;
        logbookPadding: string;
        logbookForegroundColor: string;
        logbookBackgroundColor: string;
        logbookDialogName: string;
        currentAlarmsIconFont: string;
        currentAlarmsMargin: string;
        currentAlarmsPadding: string;
        currentAlarmsDialogName: string;
        licenseSymbol: string;
        licenseIconFont: string;
        licenseMargin: string;
        licensePadding: string;
        licenseForegroundColor: string;
        licenseBackgroundColor: string;
        licenseDialogName: string;
        licenseAuthorizationRight: string;
        showAsset: boolean;
        assetSymbol: string;
        assetIconFont: string;
        assetMargin: string;
        assetPadding: string;
        assetForegroundColor: string;
        assetBackgroundColor: string;
        assetDialogName: string;
        assetAuthorizationRight: string;
        deviceTreeVariableName: string;
        currentAlarmsVariableName: string;
        backgroundColor: string;
        borderColor: string;
        protected abstract _treeType: Models.TreeType;
        private _variableService;
        private _userService;
        private _dialogService;
        private _moduleService;
        private _logbookService;
        private _licenseService;
        private _tableElement;
        private _headerElement;
        private _headerRowElement;
        private _headerTextBlocks;
        private _headerToggleSymbols;
        private _bodyElement;
        private _bodyRowClickHandler;
        private _currentAlarmsVariable;
        private _currentAlarmsVariableChanged;
        private _userLoggedOnHandler;
        private _moduleValuesChangedHandler;
        private _toggleColumnClicked;
        private _applicationView;
        private _components;
        private _dynamicSymbols;
        private _initiallyAttached;
        private _isCreatingTable;
        private _setHeaderTextDictionary;
        private _setCellValueDictionary;
        private _errorParentIcons;
        private _errorChildIcons;
        createTemplate(): any;
        attach(): Promise<any>;
        detach(): Promise<any>;
        dispose(): boolean;
        _updateColors(changes: any): void;
        private _getComponentById;
        private _setHeaderTextBlocks;
        private _resetTable;
        private _clearTable;
        private _addComponentAndChildren;
        private _appendComponentToTable;
        private _getChildRows;
        private _toggleRowDisplay;
        private _setRowDisplay;
        private _hideAlarmIcons;
        private _showAlarmOnRows;
        private _setInfoOnSymbol;
        private _getIdFromRow;
        private _setComponentName;
        private _setComponentLogBook;
        private _setComponentCurrentAlarms;
        private _setLicense;
        private _setAsset;
        private _setValuesAndCreateTableAsync;
        private _getApplicationViewAsync;
        private _getComponentsAsync;
        private _updateAlarmsVisualAsync;
        private _onModulesValuesChangedAsync;
        private _onTableRowClicked;
        private _onLogbookClick;
        private _onAlarmsClick;
        private _onLicenseClick;
        private _onAssetClick;
        private _onCurrentAlarmsChanged;
        private _onUserLoggedOn;
        private _onToggleColumnClicked;
        private _getErrorSymbolColors;
        private _hideColumn;
        private _hideCellFromRow;
        private _areEqualObjects;
        private _getPath;
        private _getChildComponents;
    }
}
//# sourceMappingURL=tree.base.d.ts.map
declare namespace Lenze.UI {
    class CertificateDetails extends Lenze.UI.ControlBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            detailsAuthorizationRight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            borderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            foregroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            validFromTextFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            validFromTextForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            validFromDataFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            validFromDataForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            validToTextFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            validToTextForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            validToDataFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            validToDataForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            subjectLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            subjectCommonNameAbbreviationLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            subjectCommonNameLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            subjectOrganizationAbbreviationLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            subjectOrganizationLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            subjectOrganizationUnitAbbreviationLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            subjectOrganizationUnitLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            subjectLocalityAbbreviationLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            subjectLocalityLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            subjectStateAbbreviationLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            subjectStateLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            subjectCountryAbbreviationLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            subjectCountryLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            subjectDomainComponentLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            issuerLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            issuerCommonNameAbbreviationLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            issuerCommonNameLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            issuerOrganizationAbbreviationLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            issuerOrganizationLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            issuerOrganizationUnitAbbreviationLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            issuerOrganizationUnitLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            issuerLocalityAbbreviationLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            issuerLocalityLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            issuerStateAbbreviationLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            issuerStateLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            issuerCountryAbbreviationLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            issuerCountryLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            issuerDomainComponentLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            validityLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            validFromLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            validToLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            infoLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            serialNumberLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            signatureAlgorithmLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            signatureHashAlgorithmLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            cipherStrengthLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            thumbprintLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            globalFontClass: {
                propertyType: string;
                type: string;
                child: string[];
                childProperty: string;
                defaultValue: string;
            };
        };
        detailsAuthorizationRight: string;
        backgroundColor: string;
        borderColor: string;
        foregroundColor: string;
        validFromTextFontWeight: string;
        validFromTextForegroundColor: string;
        validFromDataFontWeight: string;
        validFromDataForegroundColor: string;
        validToTextFontWeight: string;
        validToTextForegroundColor: string;
        validToDataFontWeight: string;
        validToDataForegroundColor: string;
        subjectLocalizableText: string;
        subjectCommonNameAbbreviationLocalizableText: string;
        subjectCommonNameLocalizableText: string;
        subjectOrganizationAbbreviationLocalizableText: string;
        subjectOrganizationLocalizableText: string;
        subjectOrganizationUnitAbbreviationLocalizableText: string;
        subjectOrganizationUnitLocalizableText: string;
        subjectLocalityAbbreviationLocalizableText: string;
        subjectLocalityLocalizableText: string;
        subjectStateAbbreviationLocalizableText: string;
        subjectStateLocalizableText: string;
        subjectCountryAbbreviationLocalizableText: string;
        subjectCountryLocalizableText: string;
        subjectDomainComponentLocalizableText: string;
        issuerLocalizableText: string;
        issuerCommonNameAbbreviationLocalizableText: string;
        issuerCommonNameLocalizableText: string;
        issuerOrganizationAbbreviationLocalizableText: string;
        issuerOrganizationLocalizableText: string;
        issuerOrganizationUnitAbbreviationLocalizableText: string;
        issuerOrganizationUnitLocalizableText: string;
        issuerLocalityAbbreviationLocalizableText: string;
        issuerLocalityLocalizableText: string;
        issuerStateAbbreviationLocalizableText: string;
        issuerStateLocalizableText: string;
        issuerCountryAbbreviationLocalizableText: string;
        issuerCountryLocalizableText: string;
        issuerDomainComponentLocalizableText: string;
        validityLocalizableText: string;
        validFromLocalizableText: string;
        validToLocalizableText: string;
        infoLocalizableText: string;
        serialNumberLocalizableText: string;
        signatureAlgorithmLocalizableText: string;
        signatureHashAlgorithmLocalizableText: string;
        cipherStrengthLocalizableText: string;
        thumbprintLocalizableText: string;
        globalFontClass: string;
        get certificateDetails(): Models.CertificateDetails | null;
        private _subjectLabelElement;
        private _subjectCommonNameAbbreviationTextBlockElement;
        private _subjectCommonNameTextTextBlockElement;
        private _subjectCommonNameDataTextBlockElement;
        private _subjectOrganizationAbbreviationTextBlockElement;
        private _subjectOrganizationTextTextBlockElement;
        private _subjectOrganizationDataTextBlockElement;
        private _subjectOrganizationUnitAbbreviationTextBlockElement;
        private _subjectOrganizationUnitTextTextBlockElement;
        private _subjectOrganizationUnitDataTextBlockElement;
        private _subjectLocalityAbbreviationTextBlockElement;
        private _subjectLocalityTextTextBlockElement;
        private _subjectLocalityDataTextBlockElement;
        private _subjectStateAbbreviationTextBlockElement;
        private _subjectStateTextTextBlockElement;
        private _subjectStateDataTextBlockElement;
        private _subjectCountryAbbreviationTextBlockElement;
        private _subjectCountryTextTextBlockElement;
        private _subjectCountryDataTextBlockElement;
        private _subjectDomainComponentTextTextBlockElement;
        private _subjectDomainComponentDataTextBlockElement;
        private _issuerLabelElement;
        private _issuerCommonNameAbbreviationTextBlockElement;
        private _issuerCommonNameTextTextBlockElement;
        private _issuerCommonNameDataTextBlockElement;
        private _issuerOrganizationAbbreviationTextBlockElement;
        private _issuerOrganizationTextTextBlockElement;
        private _issuerOrganizationDataTextBlockElement;
        private _issuerOrganizationUnitAbbreviationTextBlockElement;
        private _issuerOrganizationUnitTextTextBlockElement;
        private _issuerOrganizationUnitDataTextBlockElement;
        private _issuerLocalityAbbreviationTextBlockElement;
        private _issuerLocalityTextTextBlockElement;
        private _issuerLocalityDataTextBlockElement;
        private _issuerStateAbbreviationTextBlockElement;
        private _issuerStateTextTextBlockElement;
        private _issuerStateDataTextBlockElement;
        private _issuerCountryAbbreviationTextBlockElement;
        private _issuerCountryTextTextBlockElement;
        private _issuerCountryDataTextBlockElement;
        private _issuerDomainComponentTextTextBlockElement;
        private _issuerDomainComponentDataTextBlockElement;
        private _validityLabelElement;
        private _validFromTextTextBlockElement;
        private _validFromDataTextBlockElement;
        private _validToTextTextBlockElement;
        private _validToDataTextBlockElement;
        private _infoLabelElement;
        private _serialNumberTextTextBlockElement;
        private _serialNumberDataTextBlockElement;
        private _signatureAlgorithmTextTextBlockElement;
        private _signatureAlgorithmDataTextBlockElement;
        private _signatureHashAlgorithmTextTextBlockElement;
        private _signatureHashAlgorithmDataTextBlockElement;
        private _cipherStrengthTextTextBlockElement;
        private _cipherStrengthDataTextBlockElement;
        private _thumbprintTextTextBlockElement;
        private _thumbprintDataTextBlockElement;
        private _certificateDetails;
        private _languageService;
        private _userService;
        private _languageChangeHandler;
        private _userChangeHandler;
        constructor(element: any, options: any);
        createTemplate(): Promise<any> | null;
        afterInit(): void;
        _updateColors(changes: any): void;
        _updateLayout(changes: any): void;
        dispose(): boolean;
        setDetailsAsync(value: Models.CertificateListItemBody): Promise<void>;
        private _setLocalTextsAsync;
        private _onLanguageChangeAsync;
        private _onUserChangeAsync;
    }
}
//# sourceMappingURL=certificate-details.control.d.ts.map
declare namespace Lenze.UI {
    class CertificateListHeader extends Lenze.UI.ButtonBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            titleTextMaxWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            titleTextFlexGrow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            titleTextFlexShrink: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            titleTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            titleTextLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            titleTextTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            titleTextTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            titleTextTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            titleTextUppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            titleTextTextDecoration: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            titleTextTextShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            titleTextFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            titleTextFontFamily: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            titleTextFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            titleTextFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            titleTextLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            titleTextFontStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            titleTextLetterSpacing: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            titleTextBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            titleTextForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            validityText1Visibility: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText1Alignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText1LineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText1TextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText1TextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            validityText1TextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText1Uppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            validityText1TextDecoration: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText1TextShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText1FontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            validityText1FontFamily: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText1FontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText1FontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText1LineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText1FontStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText1LetterSpacing: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText1BackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            validityText1ForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            validityText2Visibility: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText2Margin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            validityText2Alignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText2LineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText2TextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText2TextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            validityText2TextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText2Uppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            validityText2TextDecoration: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText2TextShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText2FontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            validityText2FontFamily: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText2FontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText2FontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText2LineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText2FontStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText2LetterSpacing: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText2BackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            validityText2ForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            validityText3Visibility: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText3Margin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            validityText3Alignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText3LineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText3TextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText3TextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            validityText3TextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText3Uppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            validityText3TextDecoration: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText3TextShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText3FontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            validityText3FontFamily: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText3FontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText3FontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText3LineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText3FontStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText3LetterSpacing: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validityText3BackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            validityText3ForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            validitySymbolVisibility: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validitySymbolSymbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validitySymbolIconFont: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validitySymbolSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            validitySymbolSymbolSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            validitySymbolBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            validitySymbolForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            showExpandSymbol: {
                propertyType: string;
                type: string;
                defaultValue: boolean;
            };
            expandSymbolHeight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            expandSymbolWidth: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            expandIconFont: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            expandSymbolOpen: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            expandSymbolClose: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            expandSymbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            expandSymbolSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            expandSymbolBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            expandSymbolForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            borderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            foregroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
        };
        titleTextMaxWidth: string;
        titleTextFlexGrow: string;
        titleTextFlexShrink: string;
        titleTextAlignment: string;
        titleTextLineClamp: string;
        titleTextTextWrapping: string;
        titleTextTextTrimming: string;
        titleTextTextContrast: string;
        titleTextUppercase: boolean;
        titleTextTextDecoration: string;
        titleTextTextShadow: string;
        titleTextFontClass: string;
        titleTextFontFamily: string;
        titleTextFontSize: string;
        titleTextFontWeight: string;
        titleTextLineHeight: string;
        titleTextFontStyle: string;
        titleTextLetterSpacing: string;
        titleTextBackgroundColor: string;
        titleTextForegroundColor: string;
        validityText1Visibility: string;
        validityText1Alignment: string;
        validityText1LineClamp: string;
        validityText1TextWrapping: string;
        validityText1TextTrimming: string;
        validityText1TextContrast: string;
        validityText1Uppercase: boolean;
        validityText1TextDecoration: string;
        validityText1TextShadow: string;
        validityText1FontClass: string;
        validityText1FontFamily: string;
        validityText1FontSize: string;
        validityText1FontWeight: string;
        validityText1LineHeight: string;
        validityText1FontStyle: string;
        validityText1LetterSpacing: string;
        validityText1BackgroundColor: string;
        validityText1ForegroundColor: string;
        validityText2Visibility: string;
        validityText2Margin: string;
        validityText2Alignment: string;
        validityText2LineClamp: string;
        validityText2TextWrapping: string;
        validityText2TextTrimming: string;
        validityText2TextContrast: string;
        validityText2Uppercase: boolean;
        validityText2TextDecoration: string;
        validityText2TextShadow: string;
        validityText2FontClass: string;
        validityText2FontFamily: string;
        validityText2FontSize: string;
        validityText2FontWeight: string;
        validityText2LineHeight: string;
        validityText2FontStyle: string;
        validityText2LetterSpacing: string;
        validityText2BackgroundColor: string;
        validityText2ForegroundColor: string;
        validityText3Visibility: string;
        validityText3Margin: string;
        validityText3Alignment: string;
        validityText3LineClamp: string;
        validityText3TextWrapping: string;
        validityText3TextTrimming: string;
        validityText3TextContrast: string;
        validityText3Uppercase: boolean;
        validityText3TextDecoration: string;
        validityText3TextShadow: string;
        validityText3FontClass: string;
        validityText3FontFamily: string;
        validityText3FontSize: string;
        validityText3FontWeight: string;
        validityText3LineHeight: string;
        validityText3FontStyle: string;
        validityText3LetterSpacing: string;
        validityText3BackgroundColor: string;
        validityText3ForegroundColor: string;
        validitySymbolVisibility: string;
        validitySymbolSymbolType: string;
        validitySymbolIconFont: string;
        validitySymbolSymbol: string;
        validitySymbolSymbolSize: string;
        validitySymbolBackgroundColor: string;
        validitySymbolForegroundColor: string;
        showExpandSymbol: boolean;
        expandSymbolHeight: string;
        expandSymbolWidth: string;
        expandIconFont: string;
        expandSymbolOpen: string;
        expandSymbolClose: string;
        expandSymbolType: string;
        expandSymbolSize: string;
        expandSymbolBackgroundColor: string;
        expandSymbolForegroundColor: string;
        backgroundColor: string;
        borderColor: string;
        foregroundColor: string;
        get listHeader(): Models.CertificateListItemHeader | null;
        set expandSymbol(value: string);
        get titleTextWidth(): number;
        set titleTextWidth(value: number);
        get validityGroupWidth(): number;
        set validityGroupWidth(value: number);
        get validityText1Width(): number;
        set validityText1Width(value: number);
        private _contentElement;
        private _titleTextElement;
        private _validityGroupElement;
        private _validitySymbolElement;
        private _validityText1Element;
        private _validityText2Element;
        private _validityText3Element;
        private _expandSymbolElement;
        private _listHeader;
        private _languageService;
        private _languageChangeHandler;
        constructor(element: any, options: any);
        createTemplate(): Promise<any> | null;
        afterInit(): void;
        _updateLayout(changes: any): void;
        _updateColors(changes: any): void;
        dispose(): boolean;
        setListHeaderAsync(listHeader: Models.CertificateListItemHeader): Promise<void>;
        private _setTextsAsync;
        private _onLanguageChangeAsync;
    }
}
//# sourceMappingURL=certificate-list-header.control.d.ts.map
declare namespace Lenze.UI {
    class CertificateListItem extends Lenze.UI.ControlBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            detailsHeadingLocalizableText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            detailsHeadingMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toQuarantineButtonWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toQuarantineButtonMinWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toQuarantineButtonMaxWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toQuarantineButtonHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toQuarantineButtonMinHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toQuarantineButtonMaxHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toQuarantineButtonPadding: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toQuarantineButtonBorderWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toQuarantineButtonBorderStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toQuarantineButtonBorderRadius: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toQuarantineButtonOpacity: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toQuarantineButtonVisibility: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toQuarantineButtonShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toQuarantineButtonPressedShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toQuarantineButtonTransition: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toQuarantineButtonBackground: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toQuarantineButtonShowSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            toQuarantineButtonIconFont: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toQuarantineButtonSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toQuarantineButtonSymbolPressed: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toQuarantineButtonSymbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toQuarantineButtonSymbolSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toQuarantineButtonSymbolMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toQuarantineButtonSymbolPosition: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toQuarantineButtonShowText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            toQuarantineButtonTextWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toQuarantineButtonTextHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toQuarantineButtonTextMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toQuarantineButtonTextPadding: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toQuarantineButtonText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toQuarantineButtonLocalizableText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toQuarantineButtonTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toQuarantineButtonLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toQuarantineButtonTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toQuarantineButtonTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toQuarantineButtonFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toQuarantineButtonFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toQuarantineButtonFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toQuarantineButtonLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toQuarantineButtonTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toQuarantineButtonUppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toQuarantineButtonTextPosition: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toQuarantineButtonBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            toQuarantineButtonHoverBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            toQuarantineButtonPressedBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            toQuarantineButtonDisabledBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            toQuarantineButtonForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            toQuarantineButtonPressedForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            toQuarantineButtonDisabledForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            toQuarantineButtonBorderColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            toQuarantineButtonHoverBorderColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            toQuarantineButtonDisabledBorderColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            toTrustedButtonWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toTrustedButtonMinWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toTrustedButtonMaxWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toTrustedButtonHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toTrustedButtonMinHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toTrustedButtonMaxHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toTrustedButtonPadding: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toTrustedButtonBorderWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toTrustedButtonBorderStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toTrustedButtonBorderRadius: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toTrustedButtonOpacity: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toTrustedButtonVisibility: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toTrustedButtonShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toTrustedButtonPressedShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toTrustedButtonTransition: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toTrustedButtonBackground: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toTrustedButtonShowSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            toTrustedButtonIconFont: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toTrustedButtonSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toTrustedButtonSymbolPressed: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toTrustedButtonSymbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toTrustedButtonSymbolSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toTrustedButtonSymbolMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toTrustedButtonSymbolPosition: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toTrustedButtonShowText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            toTrustedButtonTextWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toTrustedButtonTextHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toTrustedButtonTextMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toTrustedButtonTextPadding: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toTrustedButtonText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toTrustedButtonLocalizableText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toTrustedButtonTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toTrustedButtonLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toTrustedButtonTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toTrustedButtonTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toTrustedButtonFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            toTrustedButtonFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toTrustedButtonFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toTrustedButtonLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toTrustedButtonTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toTrustedButtonUppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toTrustedButtonTextPosition: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            toTrustedButtonBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            toTrustedButtonHoverBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            toTrustedButtonPressedBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            toTrustedButtonDisabledBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            toTrustedButtonForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            toTrustedButtonPressedForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            toTrustedButtonDisabledForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            toTrustedButtonBorderColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            toTrustedButtonHoverBorderColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            toTrustedButtonDisabledBorderColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            deleteButtonWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            deleteButtonMinWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            deleteButtonMaxWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            deleteButtonHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            deleteButtonMinHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            deleteButtonMaxHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            deleteButtonPadding: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            deleteButtonBorderWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            deleteButtonBorderStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            deleteButtonBorderRadius: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            deleteButtonOpacity: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            deleteButtonVisibility: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            deleteButtonShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            deleteButtonPressedShadow: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            deleteButtonTransition: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            deleteButtonBackground: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            deleteButtonShowSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            deleteButtonIconFont: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            deleteButtonSymbol: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            deleteButtonSymbolPressed: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            deleteButtonSymbolType: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            deleteButtonSymbolSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            deleteButtonSymbolMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            deleteButtonSymbolPosition: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            deleteButtonShowText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: boolean;
            };
            deleteButtonTextWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            deleteButtonTextHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            deleteButtonTextMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            deleteButtonTextPadding: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            deleteButtonText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            deleteButtonLocalizableText: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            deleteButtonTextAlignment: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            deleteButtonLineClamp: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            deleteButtonTextWrapping: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            deleteButtonTextTrimming: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            deleteButtonFontClass: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            deleteButtonFontSize: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            deleteButtonFontWeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            deleteButtonLineHeight: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            deleteButtonTextContrast: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            deleteButtonUppercase: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            deleteButtonTextPosition: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
            };
            deleteButtonBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            deleteButtonHoverBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            deleteButtonPressedBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            deleteButtonDisabledBackgroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            deleteButtonForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            deleteButtonPressedForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            deleteButtonDisabledForegroundColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            deleteButtonBorderColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            deleteButtonHoverBorderColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            deleteButtonDisabledBorderColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            detailsBorderColor: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                resourceValue: string[];
                defaultValue: string;
            };
            detailsBorderStyle: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            detailsBorderWidth: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            detailsMargin: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            detailsPadding: {
                propertyType: string;
                type: string;
                child: string;
                childProperty: string;
                defaultValue: string;
            };
            detailsAuthorizationRight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            selectedCertificateThumbprintVariableName: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            selectedCertificateNameVariableName: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            borderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            foregroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            contentBackgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            dividerColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            moveToQuarantineDialogName: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            trustCertificateDialogName: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            deleteCertificateDialogName: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
        };
        deleteCertificateDialogName: string;
        moveToQuarantineDialogName: string;
        trustCertificateDialogName: string;
        detailsAuthorizationRight: string;
        selectedCertificateThumbprintVariableName: string;
        selectedCertificateNameVariableName: string;
        backgroundColor: string;
        borderColor: string;
        foregroundColor: string;
        contentBackgroundColor: string;
        dividerColor: string;
        noteBackgroundColor: string;
        noteForegroundColor: string;
        get listItem(): Models.CertificateListItem | null;
        get titleTextWidth(): number;
        set titleTextWidth(value: number);
        get validityGroupWidth(): number;
        set validityGroupWidth(value: number);
        get validityText1Width(): number;
        set validityText1Width(value: number);
        get isSlidedIn(): boolean;
        set isSlidedIn(value: boolean);
        private _listHeaderElement;
        private get _listHeaderControl();
        private get _CertificateDetailsControl();
        private _bodyElement;
        private _bodyHeaderElement;
        private _detailsHeadingLabelElement;
        private _toQuarantineButtonElement;
        private _toTrustedButtonElement;
        private _deleteButtonElement;
        private _detailsElement;
        private _variableService;
        private _dialogService;
        private _isSlidedIn;
        private _listItem;
        private _headerClickHandler;
        private _toQuarantineClickHandler;
        private _toTrustedClickHandler;
        private _deleteClickHandler;
        private _selectedCertificateThumbprintVariable;
        private _selectedCertificateThumbprintChangeHandler;
        private _selectedCertificateNameVariable;
        private _selectedCertificateNameChangeHandler;
        constructor(element: any, options: any);
        createTemplate(): Promise<any> | null;
        afterInit(): Promise<void>;
        _updateLayout(changes: any): void;
        _updateColors(changes: any): void;
        dispose(): boolean;
        detach(): Promise<any> | null;
        setListItemAsync(value: Models.CertificateListItem): Promise<void>;
        private _setContentAsync;
        private _setHeaderHeight;
        /**
         * Set the visibility of the buttons according to the state of the certificate
         */
        private _setVisibilityOfButtons;
        private _onHeaderClick;
        private _onToQuarantineClick;
        private _onToTrustedClick;
        private _onDeleteClick;
        private _onSelectedCertificateThumbprintChangeAsync;
    }
}
//# sourceMappingURL=certificate-list-item.control.d.ts.map
declare namespace Lenze.UI {
    class CertificateList extends Lenze.UI.ControlBase {
        properties: {
            designerType: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            certificateDetailsLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            moveToQuarantineLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            trustCertificateLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            deleteCertificateLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            placeholderEmptyTrustedListLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            placeholderEmptyQuarantineListLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            placeholderEmptyListLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            placeholderListIsLoadingLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            placeholderUserNotAuthorizedLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            placeholderErrorProcessingListLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            unknownLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            expiredSinceLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            expiresInLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            validLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            validInLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            dayLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            daysLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            weekLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            weeksLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            monthLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            monthsLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            yearLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            yearsLocalizableText: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            certificateListVariableName: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            selectedCertificateThumbprintVariableName: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            selectedCertificateNameVariableName: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            certificateFilter: {
                propertyType: string;
                type: string;
                defaultValue: Models.CertificateStateEnum;
            };
            expiresSoonLimit: {
                propertyType: string;
                type: string;
                defaultValue: number;
            };
            validitySymbolSymbolStateUnknown: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            validitySymbolForegroundColorStateUnknown: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            validitySymbolSymbolStateExpired: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            validitySymbolForegroundColorStateExpired: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            validitySymbolSymbolStateExpiresSoon: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            validitySymbolForegroundColorStateExpiresSoon: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            validitySymbolSymbolStateValid: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            validitySymbolForegroundColorStateValid: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            validitySymbolSymbolStateValidInFuture: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            validitySymbolForegroundColorStateValidInFuture: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            detailsAuthorizationRight: {
                propertyType: string;
                type: string;
                defaultValue: string;
            };
            backgroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            borderColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
            foregroundColor: {
                propertyType: string;
                type: string;
                resourceValue: string[];
                defaultValue: string;
            };
        };
        certificateDetailsLocalizableText: string;
        moveToQuarantineLocalizableText: string;
        trustCertificateLocalizableText: string;
        deleteCertificateLocalizableText: string;
        placeholderEmptyTrustedListLocalizableText: string;
        placeholderEmptyQuarantineListLocalizableText: string;
        placeholderEmptyListLocalizableText: string;
        placeholderListIsLoadingLocalizableText: string;
        placeholderUserNotAuthorizedLocalizableText: string;
        placeholderErrorProcessingListLocalizableText: string;
        unknownLocalizableText: string;
        expiredSinceLocalizableText: string;
        expiresInLocalizableText: string;
        validLocalizableText: string;
        validInLocalizableText: string;
        dayLocalizableText: string;
        daysLocalizableText: string;
        weekLocalizableText: string;
        weeksLocalizableText: string;
        monthLocalizableText: string;
        monthsLocalizableText: string;
        yearLocalizableText: string;
        yearsLocalizableText: string;
        certificateListVariableName: string;
        selectedCertificateThumbprintVariableName: string;
        selectedCertificateNameVariableName: string;
        certificateFilter: Models.CertificateStateEnum;
        expiresSoonLimit: number;
        validitySymbolSymbolStateUnknown: string;
        validitySymbolForegroundColorStateUnknown: string;
        validitySymbolSymbolStateExpired: string;
        validitySymbolForegroundColorStateExpired: string;
        validitySymbolSymbolStateExpiresSoon: string;
        validitySymbolForegroundColorStateExpiresSoon: string;
        validitySymbolSymbolStateValid: string;
        validitySymbolForegroundColorStateValid: string;
        validitySymbolSymbolStateValidInFuture: string;
        validitySymbolForegroundColorStateValidInFuture: string;
        detailsAuthorizationRight: string;
        backgroundColor: string;
        borderColor: string;
        foregroundColor: string;
        protected _itemControls: CertificateListItem[];
        private _placeholderTextElement;
        private _variableService;
        private _userService;
        private _certificateListVariable;
        private _certificateListChangeHandler;
        private _userChangedHandler;
        constructor(element: any, options: any);
        createTemplate(): Promise<any> | null;
        _updateLayout(changes: any): void;
        _updateColors(changes: any): void;
        attach(): Promise<void>;
        afterInit(): Promise<void>;
        dispose(): boolean;
        detach(): Promise<any> | null;
        protected _renewListAsync(): Promise<void>;
        protected _createCertificateListItem(): CertificateListItem;
        protected _fillListAsync(): Promise<void>;
        private _showPlaceholderAsync;
        private _onCertificateListChangeAsync;
        private _onUserChangeAsync;
        private _getRemainingValidityTimeAsync;
    }
}
//# sourceMappingURL=certificate-list.control.d.ts.map