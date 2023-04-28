"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebDriverObject = void 0;
const path = require("node:path");
const selenium_webdriver_1 = require("selenium-webdriver");
const chrome_1 = require("selenium-webdriver/chrome");
/**
 * It creates Chrome WebDriver objects to control the Chrome browser.
 */
class WebDriverObject {
    static defaultWebDriverOptions = {
        profile: "Default",
        downloadDirectory: "",
    };
    static downloadRelDir = "./../../../../ts/windowsController/resources/download";
    static userdataRelDir = "./../../../../ts/browserController/userdata";
    chromeWebDriver;
    /**
     * Construct and return a Chrome WebDriver object to start a session with a Chrome browser and control it.
     * @param     {WebDriverOptions}    options     Give options to the chrome webdriver.
     * @return                                      Returns a chrome thenable web driver instance.
     */
    constructor(options) {
        // Set default options if they are not given.
        if (!options)
            options = WebDriverObject.defaultWebDriverOptions;
        // Create a builder for chrome web driver
        const builder = new selenium_webdriver_1.Builder().forBrowser("chrome");
        // Define the path to download and userdata directories
        const downloadDir = path.join(__dirname, WebDriverObject.downloadRelDir);
        const userPreferences = {
            "download.default_directory": downloadDir + options.downloadDirectory,
        };
        const userdataDir = path.join(__dirname, WebDriverObject.userdataRelDir);
        // Define and set chrome builder options
        const chromeOptions = new chrome_1.Options()
            .setUserPreferences(userPreferences)
            .addArguments(`user-data-dir=${userdataDir}`)
            .addArguments(`profile-directory=${options.profile}`);
        builder.setChromeOptions(chromeOptions);
        //Create the chrome web driver in fullscreen
        this.chromeWebDriver = builder.build();
    }
    /**
     *  Enlarge or hide the browser's window.
     * @param   {"maximize" | "minimize"}    operation  Set the operation for the window: maximize or minimize.
     */
    async windowMinMax(operation) {
        if (operation === "maximize")
            await this.chromeWebDriver.manage().window().maximize();
        else
            await this.chromeWebDriver.manage().window().minimize();
    }
    /**
     * Schedules a command to navigate to the given URL.
     * @param     {string}    url     The fully qualified URL to open. Defaults to google.com.
     * @return                        A promise that will be resolved when the document has finished loading.
     */
    get(url) {
        if (!url)
            url = "https://www.google.com/";
        return this.chromeWebDriver.get(url);
    }
    /**
     * Schedules a command to retrieve the URL of the current page.
     * @return A promise that will be resolved with the current URL.
     */
    getCurrentUrl() {
        return this.chromeWebDriver.getCurrentUrl();
    }
    /**
     * Set an implicit wait for the session of this web driver.
     * Warning: Do not mix implicit and explicit waits.
     * @param     {number}     ms    the timeout in ms.
     * @returns                      A promise that will be resolved when the command has completed.
     */
    setImplicitWait(ms) {
        return this.chromeWebDriver.manage().setTimeouts({ implicit: ms });
    }
    /**
     * Schedules a command to quit the current session. After calling quit,
     * this instance will be invalidated and may no longer be used to issue commands against the browser.
     * @return A promise that will be resolved when the command has completed.
     */
    quit() {
        return this.chromeWebDriver.quit();
    }
    /**
     * Schedules a command to quit the current session after a number of milliseconds. After calling quit,
     * this instance will be invalidated and may no longer be used to issue commands against the browser.
     * @param     {number}    ms  the timeout in ms.
     * @return                    A promise that will be resolved when the command has completed.
     */
    quitAfter(ms) {
        setTimeout(async () => {
            await this.chromeWebDriver.quit();
        }, ms);
    }
}
exports.WebDriverObject = WebDriverObject;
//# sourceMappingURL=webDriverObject.js.map