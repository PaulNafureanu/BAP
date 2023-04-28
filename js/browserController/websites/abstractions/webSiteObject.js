"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSiteObject = void 0;
const homePageObject_1 = require("./pages/homePageObject");
const webDriverObject_1 = require("./webDriverObject");
/**
 * It creates WebSite Objects that will contain the general representation of websites, the navigation and their page objects.
 */
class WebSiteObject {
    // Default website options for all website classes and objects
    static defaultWebSiteOptions = {
        webDriver: new webDriverObject_1.WebDriverObject(),
        implicitWait: 0,
    };
    // Current website options. May default to the above options.
    webDriver;
    pages = { HomePage: new homePageObject_1.HomePageObject("") };
    /**
     * Construct and return a WebSite object to navigate within.
     * @param     {WebSiteObject}    options     Give external options for the session and the construction of website object.
     */
    constructor(options) {
        this.webDriver = options.webDriver;
    }
    /**
     * Schedules a command to navigate to the url of the website.
     * @return A promise that will be resolved when the document has finished loading.
     */
    async loadWebSite(targetUrl) {
        const { implicitWait } = WebSiteObject.defaultWebSiteOptions;
        await this.webDriver.get(targetUrl);
        await this.webDriver.setImplicitWait(implicitWait);
    }
    /**
     * Schedules a command to test if the website loaded correctly.
     * @return A promise that will be resolved when the document has finished loading.
     * It throws an error and quits the session if the website is not loaded correctly.
     */
    async isWebSiteLoaded(targetUrl) {
        // Check if the url of the loaded page is the same as the defined url of the website.
        let currentUrl = await this.webDriver.getCurrentUrl();
        if (targetUrl !== currentUrl) {
            await this.quit();
            throw new Error("Not on the specified page of the website '" +
                targetUrl +
                "'. Current page is: '" +
                currentUrl +
                "'");
        }
    }
    /**
     * Schedules a command to load the website.
     * @return A promise that will be resolved when the document has finished loading.
     * It throws an error and quits the session if the website is not loaded correctly.
     */
    async load(page) {
        if (!page)
            page = this.pages.HomePage;
        await this.loadWebSite(page.url);
        await this.isWebSiteLoaded(page.url);
        if (page === this.pages.HomePage)
            this.pages.HomePage.acceptCookiesIfTheyExists(); //TODO: see if you need await after implementation
        return page;
    }
    /**
     * Schedules a command to quit the current session of the website. After calling quit,
     * this instance will be invalidated and may no longer be used to issue commands against the website.
     * @return A promise that will be resolved when the command has completed.
     */
    quit() {
        return this.webDriver.quit();
    }
    /**
     * Schedules a command to quit the current session of the website after a number of milliseconds. After calling quit,
     * this instance will be invalidated and may no longer be used to issue commands against the website.
     * @param {number} ms the timeout in ms.
     * @return A promise that will be resolved when the command has completed.
     */
    quitAfter(ms) {
        this.webDriver.quitAfter(ms);
    }
}
exports.WebSiteObject = WebSiteObject;
//# sourceMappingURL=webSiteObject.js.map