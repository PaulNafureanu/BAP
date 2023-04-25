"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
async function init() {
    let driver = await new selenium_webdriver_1.Builder().forBrowser("chrome").build();
    await driver.get("https://www.google.com/");
    await driver.manage().setTimeouts({ implicit: 500 });
    await driver.quit();
}
init();
//# sourceMappingURL=init.js.map