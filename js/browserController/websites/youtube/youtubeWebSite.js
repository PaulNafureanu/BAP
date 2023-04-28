"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeWebSite = void 0;
const webSiteObject_1 = require("../abstractions/webSiteObject");
/**
 * It creates Youtube WebSite Objects that will contain the general representation of the youtube websites,
 * the navigation within with its page and components objects.
 */
class YoutubeWebSite extends webSiteObject_1.WebSiteObject {
    static url = "https://www.youtube.com/";
    webDriver;
    /**
     * Construct and return a Youtube WebSite object to navigate within.
     * @param     {WebSiteObject}    options     Give external options for the session and the construction of the youtube website object.
     */
    constructor(options) {
        if (!options)
            options = YoutubeWebSite.defaultWebSiteOptions;
        super(options, YoutubeWebSite.url);
        this.webDriver = options.webDriver;
    }
}
exports.YoutubeWebSite = YoutubeWebSite;
//# sourceMappingURL=youtubeWebSite.js.map