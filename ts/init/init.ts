import { WebDriverObject } from "../browserController/websites/abstractions/webDriverObject";

async function init() {
  let chromeWebDriver = new WebDriverObject();
  await chromeWebDriver.get();
  await chromeWebDriver.setImplicitWait(5000);
  await chromeWebDriver.quit();
  chromeWebDriver.quitAfter(10);
}

init();
