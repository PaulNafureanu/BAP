"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const youtubeWebSite_1 = require("../browserController/websites/youtube/youtubeWebSite");
async function init() {
    // General demonstration of the websiteobject class:
    const ytWebSite = new youtubeWebSite_1.YoutubeWebSite();
    const ytHomepage = await ytWebSite.loadHomePage();
    const ytAccountMenu = ytHomepage.getAccountMenu();
    ytWebSite.quitAfter(3000);
}
init();
//# sourceMappingURL=init.js.map