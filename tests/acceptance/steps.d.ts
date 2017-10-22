// tslint:disable
type ICodeceptCallback = (i: CodeceptJS.I) => void;

declare const actor: () => CodeceptJS.I;
declare const Feature: (string: string) => void;
declare const Scenario: (string: string, callback: ICodeceptCallback) => void;
declare const Before: (callback: ICodeceptCallback) => void;
declare const After: (callback: ICodeceptCallback) => void;
declare const within: (selector: string, callback: Function) => void;

declare namespace CodeceptJS {
  export interface I {
    defineTimeout: (timeouts) => any; 
    amOnPage: (amOnPage) => any; 
    click: (click) => any; 
    doubleClick: (doubleClick) => any; 
    rightClick: (rightClick) => any; 
    fillField: (fillField, text) => any;
    appendField: (appendField) => any; 
    selectOption: (selectOption) => any; 
    attachFile: (attachFile) => any; 
    checkOption: (checkOption) => any; 
    grabTextFrom: (grabTextFrom) => any; 
    grabHTMLFrom: (locator) => any; 
    grabValueFrom: (grabValueFrom) => any; 
    grabCssPropertyFrom: (grabCssPropertyFrom) => any;
    grabAttributeFrom: (grabAttributeFrom) => any; 
    seeInTitle: (seeInTitle) => any; 
    seeTitleEquals: (seeTitleEquals) => any; 
    dontSeeInTitle: (dontSeeInTitle) => any; 
    grabTitle: (grabTitle) => any; 
    see: (text, context?) => any;
    seeTextEquals: (text, context?) => any;
    dontSee: (text, context?) => any;
    seeInField: (field, value) => any; 
    dontSeeInField: (field, value) => any; 
    seeCheckboxIsChecked: (field) => any; 
    dontSeeCheckboxIsChecked: (field) => any; 
    seeElement: (seeElement) => any; 
    dontSeeElement: (dontSeeElement) => any; 
    seeElementInDOM: (locator) => any; 
    dontSeeElementInDOM: (locator) => any; 
    seeInSource: (seeInSource) => any; 
    grabSource: () => any; 
    grabBrowserLogs: (grabBrowserLogs) => any; 
    dontSeeInSource: (dontSeeInSource) => any; 
    seeNumberOfElements: (selector, num) => any; 
    seeNumberOfVisibleElements: (locator, num) => any; 
    seeCssPropertiesOnElements: (locator, cssProperties) => any;
    seeAttributesOnElements: (seeAttributesOnElements) => any; 
    grabNumberOfVisibleElements: (grabNumberOfVisibleElements) => any; 
    seeInCurrentUrl: (url) => any; 
    dontSeeInCurrentUrl: (url) => any; 
    seeCurrentUrlEquals: (seeCurrentUrlEquals) => any; 
    dontSeeCurrentUrlEquals: (dontSeeCurrentUrlEquals) => any; 
    executeScript: (executeScript) => any; 
    executeAsyncScript: (executeAsyncScript) => any; 
    scrollTo: (locator, offsetX?, offsetY?) => any;
    moveCursorTo: (moveCursorTo) => any; 
    saveScreenshot: (saveScreenshot) => any; 
    setCookie: (cookie) => any; 
    clearCookie: (cookie) => any; 
    clearField: (clearField) => any; 
    seeCookie: (name) => any; 
    dontSeeCookie: (name) => any; 
    grabCookie: (name) => any; 
    acceptPopup: () => any; 
    cancelPopup: () => any; 
    seeInPopup: (text) => any; 
    pressKey: (key) => any; 
    resizeWindow: (width: number, height: number) => any;
    dragAndDrop: (srcElement, destElement) => any; 
    closeOtherTabs: (closeOtherTabs) => any; 
    wait: (sec) => any; 
    waitForEnabled: (waitForEnabled) => any; 
    waitForElement: (locator, sec?) => any;
    waitInUrl: (waitInUrl) => any; 
    waitUrlEquals: (waitUrlEquals) => any; 
    waitForText: (waitForText) => any; 
    waitForValue: (waitForValue) => any; 
    waitForVisible: (waitForVisible, sec?) => any;
    waitNumberOfVisibleElements: (waitNumberOfVisibleElements) => any; 
    waitForInvisible: (waitForInvisible) => any; 
    waitToHide: (locator, sec?) => any;
    waitForStalenessOf: (locator, sec?) => any;
    waitUntil: (fn, sec?, timeoutMsg?) => any;
    switchTo: (switchTo) => any; 
    switchToNextTab: (num?, sec?) => any;
    switchToPreviousTab: (num?, sec?) => any;
    closeCurrentTab: () => any; 
    openNewTab: () => any; 
    refreshPage: () => any; 
    scrollPageToTop: () => any; 
    scrollPageToBottom: () => any; 
    debug: (msg) => any; 
    debugSection: (section, msg) => any; 
    say: (msg) => any;
  }
}

declare module "codeceptjs" {
    export = CodeceptJS;
}
