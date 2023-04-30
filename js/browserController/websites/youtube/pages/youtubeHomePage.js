"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeHomePage = void 0;
const homePageObject_1 = require("../../abstractions/pages/homePageObject");
class YoutubeHomePage extends homePageObject_1.HomePageObject {
    openStudio() { }
    openChannel() { }
    changeAccount() { }
    signOut() { }
    signIn() { }
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