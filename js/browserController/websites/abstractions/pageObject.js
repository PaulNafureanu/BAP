"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageObject = void 0;
/**
 * It creates Page objects to control specific pages of a website.
 */
class PageObject {
    url;
    webDriver;
    /**
     * It creates Page Objects that will contain the general representation of a website's page with all their page components.
     */
    constructor(url, webDriver) {
        this.url = url;
        this.webDriver = webDriver;
    }
}
exports.PageObject = PageObject;
//# sourceMappingURL=pageObject.js.map