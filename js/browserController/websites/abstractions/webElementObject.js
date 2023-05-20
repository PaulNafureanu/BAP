"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebElementObject = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
/**
 * It creates WebElement objects to control specific web elements - the most basic subdivision of a website.
 */
class WebElementObject {
    // Static fields for the class
    static defaultWaitTime = 200;
    // Main states of the web element object
    webLocator;
    webDriver;
    /* States of an web element:
     * (WebElement) - there is a defined web element on the webpage.
     * (undefined) - there was no check done yet to test if there is such a web element.
     * (null) - there is no defined web element on the webpage, throw error.
     */
    webElement;
    constructor(webDriver, webLocator) {
        this.webDriver = webDriver;
        this.webLocator = webLocator;
    }
    /**
     * Schedule a command to search for the web element defined by its web locator on the current webpage.
     * @param timeout How long to wait to find the element for each locator in ms.
     * The total wait time is the number of locators checked multiplied by the timeout number in ms.
     * @returns  A promise that will resolve to an WebElement if found or
     * throws error if such element does not exist.
     */
    async findWebElement(timeout) {
        let webElements = [];
        if (this.webLocator.IDLocator) {
            try {
                webElements = await this.webDriver.waitForElements(selenium_webdriver_1.until.elementsLocated(selenium_webdriver_1.By.id(this.webLocator.IDLocator)), timeout);
                if (webElements.length > 0) {
                    this.webElement = webElements[0];
                    return webElements[0];
                }
            }
            catch (error) { }
        }
        try {
            webElements = await this.webDriver.waitForElements(selenium_webdriver_1.until.elementsLocated(selenium_webdriver_1.By.css(this.webLocator.CSSLocator)), timeout);
            if (webElements.length > 0) {
                this.webElement = webElements[0];
                return webElements[0];
            }
        }
        catch (error) { }
        try {
            webElements = await this.webDriver.waitForElements(selenium_webdriver_1.until.elementsLocated(selenium_webdriver_1.By.css(this.webLocator.CSSLocator2)), timeout);
            if (webElements.length > 0) {
                this.webElement = webElements[0];
                return webElements[0];
            }
        }
        catch (error) { }
        if (this.webLocator.CSSLocator3) {
            try {
                webElements = await this.webDriver.waitForElements(selenium_webdriver_1.until.elementsLocated(selenium_webdriver_1.By.css(this.webLocator.CSSLocator3)), timeout);
                if (webElements.length > 0) {
                    this.webElement = webElements[0];
                    return webElements[0];
                }
            }
            catch (error) { }
        }
        try {
            webElements = await this.webDriver.waitForElements(selenium_webdriver_1.until.elementsLocated(selenium_webdriver_1.By.xpath(this.webLocator.XPath)), timeout);
            if (webElements.length > 0) {
                this.webElement = webElements[0];
                return webElements[0];
            }
        }
        catch (error) {
            throw new Error("There is no such web element with this web locator on the current webpage.");
        }
    }
    //TODO: To put an explicit wait condition using until for elementEnable, elementVisible, so on, for each of the below methods:
    async click(timeout = WebElementObject.defaultWaitTime) {
        let webElement = this.webElement;
        if (!webElement)
            webElement = await this.findWebElement(timeout);
        await webElement?.click();
    }
    async getText(timeout = WebElementObject.defaultWaitTime) {
        let webElement = this.webElement;
        if (!webElement)
            webElement = await this.findWebElement(timeout);
        await webElement?.getText();
    }
    async clear(timeout = WebElementObject.defaultWaitTime) {
        let webElement = this.webElement;
        if (!webElement)
            webElement = await this.findWebElement(timeout);
        await webElement?.clear();
    }
    async clearAndSendKeys(str, timeout = WebElementObject.defaultWaitTime) {
        let webElement = this.webElement;
        if (!webElement)
            webElement = await this.findWebElement(timeout);
        await webElement?.clear();
        await webElement?.sendKeys(str);
    }
    async sendKeys(str, timeout = WebElementObject.defaultWaitTime) {
        let webElement = this.webElement;
        if (!webElement)
            webElement = await this.findWebElement(timeout);
        await webElement?.sendKeys(str);
    }
    async submit(timeout = WebElementObject.defaultWaitTime) {
        let webElement = this.webElement;
        if (!webElement)
            webElement = await this.findWebElement(timeout);
        await webElement?.submit();
    }
    async isDisplayed(timeout = WebElementObject.defaultWaitTime) {
        let webElement = this.webElement;
        if (!webElement)
            webElement = await this.findWebElement(timeout);
        return await webElement?.isDisplayed();
    }
    async isEnabled(timeout = WebElementObject.defaultWaitTime) {
        let webElement = this.webElement;
        if (!webElement)
            webElement = await this.findWebElement(timeout);
        return await webElement?.isEnabled();
    }
    async isSelected(timeout = WebElementObject.defaultWaitTime) {
        let webElement = this.webElement;
        if (!webElement)
            webElement = await this.findWebElement(timeout);
        return await webElement?.isSelected();
    }
    async takeScreenshot(timeout = WebElementObject.defaultWaitTime) {
        let webElement = this.webElement;
        if (!webElement)
            webElement = await this.findWebElement(timeout);
        return await webElement?.takeScreenshot();
    }
}
exports.WebElementObject = WebElementObject;
//# sourceMappingURL=webElementObject.js.map