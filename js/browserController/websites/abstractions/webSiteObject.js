"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSiteObject = void 0;
const webDriverObject_1 = require("./webDriverObject");
const homePageObject_1 = require("./pages/homePageObject");
/**
 * It creates WebSite Objects that will contain the general representation of websites, the navigation and their page objects.
 */
class WebSiteObject {
    // The states and defaults of the website object
    // The url of our website object
    webSiteURL = "";
    // Web Driver State used for this browser session and website object
    webDriverState = {
        webDriver: new webDriverObject_1.WebDriverObject(),
        webDriverOptions: { implicitWait: 0 },
    };
    // Web Site State (urls and pages) used for this website object
    URLs = {
        HomePage: this.webSiteURL,
    };
    pages = {
        HomePage: new homePageObject_1.HomePageObject(this.webSiteURL, this.webDriverState.webDriver),
    };
    /**
     * Construct and return a WebSite object to navigate within.
     * @param     {WebSiteObject}    options     Give external options for the session and the construction of website object.
     */
    constructor(options) {
        if (options) {
            this.webDriverState = options.webDriverState;
        }
    }
    /**
     * Schedules a command to navigate to the url of the website.
     * @return A promise that will be resolved when the document has finished loading.
     */
    async loadWebSite(targetUrl) {
        const { implicitWait } = this.webDriverState.webDriverOptions;
        const { webDriver } = this.webDriverState;
        await webDriver.get(targetUrl);
        await webDriver.setImplicitWait(implicitWait);
    }
    /**
     * Schedules a command to test if the website loaded correctly.
     * @return A promise that will be resolved when the document has finished loading.
     * It throws an error and quits the session if the website is not loaded correctly.
     */
    async isWebSiteLoaded(targetUrl) {
        // Check if the url of the loaded page is the same as the defined url of the website.
        const { webDriver } = this.webDriverState;
        const currentUrl = await webDriver.getCurrentUrl();
        if (targetUrl !== currentUrl) {
            await this.quit();
            throw new Error("Not on the specified page of the website '" +
                targetUrl +
                "'. Current page is: '" +
                currentUrl +
                "'");
        }
    }
    async loadPage(page) {
        const { webDriver } = this.webDriverState;
        await webDriver.windowMinMax("maximize");
        await this.loadWebSite(page.url);
        await this.isWebSiteLoaded(page.url);
        if (page === this.pages.HomePage)
            this.pages.HomePage.acceptCookiesIfTheyExists(); //TODO: see if you need await after implementation
        return page;
    }
    /**
     * Schedules a command to return the current page object using the current url.
     * @returns A promise that contains the current page object or undefined.
     */
    async getCurrentPageByPageKey() {
        const { webDriver } = this.webDriverState;
        const { pages } = this;
        const currentUrl = await webDriver.getCurrentUrl();
        let pageKey;
        for (pageKey in pages) {
            if (pages[pageKey].url === currentUrl) {
                return pages[pageKey];
            }
        }
    }
    /**
     * Schedules a command to load the website.
     * @return A promise that will be resolved when the document has finished loading.
     * It throws an error and quits the session if the website is not loaded correctly.
     */
    async load() {
        const { webDriver } = this.webDriverState;
        const homepage = this.pages.HomePage;
        await webDriver.windowMinMax("maximize");
        await this.loadWebSite(homepage.url);
        await this.isWebSiteLoaded(homepage.url);
        homepage.acceptCookiesIfTheyExists(); //TODO: see if you need await after implementation
        return homepage;
    }
    /**
     * Schedules a command to move backwards in the chrome browser history.
     * @return A promise that will be resolved when the navigation event has completed.
     * It contains the previous page object in browser history or undefined if the page is not recognized in the website.
     */
    async back() {
        const { webDriver } = this.webDriverState;
        await webDriver.back();
        return await this.getCurrentPageByPageKey();
    }
    /**
     * Schedules a command to move forwards in the chrome browser history.
     * @return A promise that will be resolved when the navigation event has completed.
     * It contains the next page object in browser history or undefined if the page is not recognized in the website.
     */
    async forward() {
        const { webDriver } = this.webDriverState;
        await webDriver.forward();
        return await this.getCurrentPageByPageKey();
    }
    /**
     * Schedules a command to refresh the current page.
     * @return A promise that will be resolved when the navigation event has completed.
     * It contains the current page object in browser history or undefined if the page is not recognized in the website.
     */
    async refresh() {
        const { webDriver } = this.webDriverState;
        await webDriver.refresh();
        return await this.getCurrentPageByPageKey();
    }
    /**
     * Schedules a command to quit the current session of the website. After calling quit,
     * this instance will be invalidated and may no longer be used to issue commands against the website.
     * @return A promise that will be resolved when the command has completed.
     */
    quit() {
        const { webDriver } = this.webDriverState;
        return webDriver.quit();
    }
    /**
     * Schedules a command to quit the current session of the website after a number of milliseconds. After calling quit,
     * this instance will be invalidated and may no longer be used to issue commands against the website.
     * @param {number} ms the timeout in ms.
     * @return A promise that will be resolved when the command has completed.
     */
    quitAfter(ms) {
        const { webDriver } = this.webDriverState;
        webDriver.quitAfter(ms);
    }
}
exports.WebSiteObject = WebSiteObject;
//# sourceMappingURL=webSiteObject.js.map