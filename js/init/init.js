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
    const ytWebSite = new youtubeWebSite_1.YoutubeWebSite();
    const ytHomePage = await ytWebSite.load();
    await ytWebSite.quit();
}
/**
 * let ytHomePage = await ytWebSite.load(); //loads implicitly the home page of the website and returns the youtubehomepage object
 * let ytHomePage = await ytWebSite.load("HomePage") // loads explicitly the home page of the website and returns the youtubehompage object
 * let ytChannelDashboard = await ytWebSite.load("ChannelDashboard") //loads a page object and returns the page object / component object associated with it. E.g: "ChannelDashboad"
 * The page url / link could be broken, so we need to have another way to access it (indirect clicks from home page to the page / component object)
 */
init();
//# sourceMappingURL=init.js.map