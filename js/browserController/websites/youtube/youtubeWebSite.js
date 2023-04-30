"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeWebSite = void 0;
const webSiteObject_1 = require("../abstractions/webSiteObject");
const youtubeHomePage_1 = require("./pages/youtubeHomePage");
const channelDashboardPage_1 = require("./pages/channelDashboardPage");
/**
 * It creates Youtube WebSite Objects that will contain the general representation of the youtube websites,
 * the navigation within with its page and components objects.
 */
class YoutubeWebSite extends webSiteObject_1.WebSiteObject {
    webSiteURL = "https://www.youtube.com/";
    URLs = {
        HomePage: this.webSiteURL,
        ChannelDashboard: "https://studio.youtube.com/channel/UCopd8ft4OZRkVa2nG7ZA4HQ",
    };
    pages = {
        HomePage: new youtubeHomePage_1.YoutubeHomePage(this.webSiteURL, this.webDriverState.webDriver),
        ChannelDashboard: new channelDashboardPage_1.ChannelDashboardPage(this.URLs.ChannelDashboard, this.webDriverState.webDriver),
    };
    /**
     * Construct and return a Youtube WebSite object to navigate within.
     * @param     {WebSiteObject}    options     Give external options for the session and the construction of the youtube website object.
     */
    constructor(options) {
        super(options);
    }
    async loadHomePage() {
        const page = this.pages["HomePage"];
        await this.loadPage(page);
        return page;
    }
    async loadChannelDashboard() {
        const page = this.pages["ChannelDashboard"];
        await this.loadPage(page);
        return page;
    }
    /**
     *  Loads and returns a youtube specific page object using a page key.
     * @param { keyof typeof this.pages} pageKey  The page key that identifies the page object in the website. Defaults to 'HomePage'.
     * @returns A promise that will be resolved after loading the document containing the specified page object.
     * It throws an error and quits the session if the page object is not loaded correctly.
     */
    loadYoutubePage(pageKey) {
        if (!pageKey)
            pageKey = "HomePage";
        return this.loadPage(this.pages[pageKey]);
    }
}
exports.YoutubeWebSite = YoutubeWebSite;
//# sourceMappingURL=youtubeWebSite.js.map