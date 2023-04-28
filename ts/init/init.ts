import { WebDriverObject } from "../browserController/websites/abstractions/webDriverObject";
import { YoutubeWebSite } from "../browserController/websites/youtube/youtubeWebSite";

async function init() {
  // General demonstration of the webdriverobject class:
  // const chromeWebDriver = new WebDriverObject();
  // await chromeWebDriver.get();
  // await chromeWebDriver.setImplicitWait(5000);
  // await chromeWebDriver.quit();
  // chromeWebDriver.quitAfter(10);

  // General demonstration of the websiteobject class:
  const ytwebsite = new YoutubeWebSite();
  await ytwebsite.load();
  await ytwebsite.quit();
}

init();
