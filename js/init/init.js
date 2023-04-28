"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const youtubeWebSite_1 = require("../browserController/websites/youtube/youtubeWebSite");
async function init() {
    // General demonstration of the webdriverobject class:
    // const chromeWebDriver = new WebDriverObject();
    // await chromeWebDriver.get();
    // await chromeWebDriver.setImplicitWait(5000);
    // await chromeWebDriver.quit();
    // chromeWebDriver.quitAfter(10);
    // General demonstration of the websiteobject class:
    const ytwebsite = new youtubeWebSite_1.YoutubeWebSite();
    await ytwebsite.load();
    await ytwebsite.quit();
}
init();
//# sourceMappingURL=init.js.map