"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeWebSite = void 0;
const pageObject_1 = require("../abstractions/pageObject");
const webSiteObject_1 = require("../abstractions/webSiteObject");
const youtubeHomePage_1 = require("./pages/youtubeHomePage");
/**
 * It creates Youtube WebSite Objects that will contain the general representation of the youtube websites,
 * the navigation within with its page and components objects.
 */
class YoutubeWebSite extends webSiteObject_1.WebSiteObject {
    URLs = {
        website: "https://www.youtube.com/",
        channelDashboard: "https://studio.youtube.com/channel/UCopd8ft4OZRkVa2nG7ZA4HQ",
    };
    pages = {
        HomePage: new youtubeHomePage_1.YoutubeHomePage(this.URLs.website),
        ChannelDashboard: new pageObject_1.PageObject(this.URLs.channelDashboard),
    };
    /**
     * Construct and return a Youtube WebSite object to navigate within.
     * @param     {WebSiteObject}    options     Give external options for the session and the construction of the youtube website object.
     */
    constructor(options) {
        if (!options)
            options = YoutubeWebSite.defaultWebSiteOptions;
        super(options);
    }
    loadPage(page) {
        if (!page)
            page = "HomePage";
        return this.load(this.pages[page]);
    }
}
exports.YoutubeWebSite = YoutubeWebSite;
//# sourceMappingURL=youtubeWebSite.js.map