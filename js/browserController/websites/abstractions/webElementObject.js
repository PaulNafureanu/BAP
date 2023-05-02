"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebElementObject = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
/**
 * It creates WebElement objects to control specific web elements - the most basic subdivision of a website.
 */
class WebElementObject {
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
     * @returns  A promise that will resolve to an WebElement if found or
     * throws error if such element does not exist.
     */
    async findWebElement() {
        let webElements;
        if (this.webLocator.IDLocator) {
            webElements = await this.webDriver.findElements(selenium_webdriver_1.By.id(this.webLocator.IDLocator));
            if (webElements.length > 0) {
                this.webElement = webElements[0];
                return webElements[0];
            }
        }
        webElements = await this.webDriver.findElements(selenium_webdriver_1.By.css(this.webLocator.CSSLocator));
        if (webElements.length > 0) {
            this.webElement = webElements[0];
            return webElements[0];
        }
        webElements = await this.webDriver.findElements(selenium_webdriver_1.By.css(this.webLocator.CSSLocator2));
        if (webElements.length > 0) {
            this.webElement = webElements[0];
            return webElements[0];
        }
        if (this.webLocator.CSSLocator3) {
            webElements = await this.webDriver.findElements(selenium_webdriver_1.By.css(this.webLocator.CSSLocator3));
            if (webElements.length > 0) {
                this.webElement = webElements[0];
                return webElements[0];
            }
        }
        webElements = await this.webDriver.findElements(selenium_webdriver_1.By.xpath(this.webLocator.XPath));
        if (webElements.length > 0) {
            this.webElement = webElements[0];
            return webElements[0];
        }
        throw new Error("There is no such web element with this web locator on the current webpage.");
    }
    async click() {
        let webElement = this.webElement;
        if (!webElement)
            webElement = await this.findWebElement();
        await webElement.click();
    }
    async getText() {
        let webElement = this.webElement;
        if (!webElement)
            webElement = await this.findWebElement();
        await webElement.getText();
    }
    async clear() {
        let webElement = this.webElement;
        if (!webElement)
            webElement = await this.findWebElement();
        await webElement.clear();
    }
    async clearAndSendKeys(str) {
        let webElement = this.webElement;
        if (!webElement)
            webElement = await this.findWebElement();
        await webElement.clear();
        await webElement.sendKeys(str);
    }
    async sendKeys(str) {
        let webElement = this.webElement;
        if (!webElement)
            webElement = await this.findWebElement();
        await webElement.sendKeys(str);
    }
    async submit() {
        let webElement = this.webElement;
        if (!webElement)
            webElement = await this.findWebElement();
        await webElement.submit();
    }
    async isDisplayed() {
        let webElement = this.webElement;
        if (!webElement)
            webElement = await this.findWebElement();
        return await webElement.isDisplayed();
    }
    async isEnabled() {
        let webElement = this.webElement;
        if (!webElement)
            webElement = await this.findWebElement();
        return await webElement.isEnabled();
    }
    async isSelected() {
        let webElement = this.webElement;
        if (!webElement)
            webElement = await this.findWebElement();
        return await webElement.isSelected();
    }
    async takeScreenshot() {
        let webElement = this.webElement;
        if (!webElement)
            webElement = await this.findWebElement();
        return await webElement.takeScreenshot();
    }
}
exports.WebElementObject = WebElementObject;
//# sourceMappingURL=webElementObject.js.map