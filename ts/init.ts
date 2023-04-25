import { By, Builder, Browser } from "selenium-webdriver";

async function init() {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://www.google.com/");
  await driver.manage().setTimeouts({ implicit: 500 });
  await driver.quit();
}

init();
