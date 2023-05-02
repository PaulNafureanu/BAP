"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeHomePage = void 0;
const homePageObject_1 = require("../../abstractions/pages/homePageObject");
const accountMenuComponent_1 = require("../components/accountMenuComponent");
const mastheadMenuComponent_1 = require("../components/mastheadMenuComponent");
class YoutubeHomePage extends homePageObject_1.HomePageObject {
    getAccountMenu() {
        return new accountMenuComponent_1.YoutubeAccountMenuComponent(this.webDriver);
    }
    getMastheadMenu() {
        return new mastheadMenuComponent_1.YoutubeMastheadMenuComponent(this.webDriver);
    }
}
exports.YoutubeHomePage = YoutubeHomePage;
//
/**
 * get youtube account menu (component) (the right menu):
 * - click on Youtube studio
 * - click on Your Channel
 * - click on Change Account
 * - click on Sign out
 *
 * get youtube master head menu (component) (the left menu):
 * - click on Home
 * - click on Shorts
 * - click on Subscriptions
 * - click on Library
 */
//# sourceMappingURL=youtubeHomePage.js.map