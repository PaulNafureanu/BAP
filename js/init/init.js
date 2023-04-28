"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webDriverObject_1 = require("../browserController/websites/abstractions/webDriverObject");
async function init() {
    let chromeWebDriver = new webDriverObject_1.WebDriverObject();
    await chromeWebDriver.get();
    await chromeWebDriver.setImplicitWait(5000);
    await chromeWebDriver.quit();
    chromeWebDriver.quitAfter(10);
}
init();
//# sourceMappingURL=init.js.map