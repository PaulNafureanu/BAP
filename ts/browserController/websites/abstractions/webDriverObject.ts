import path = require("node:path");
import {
  Builder,
  Condition,
  Locator,
  ThenableWebDriver,
  WebDriver,
  WebElement,
  WebElementCondition,
} from "selenium-webdriver";
import { Options as ChromeOptions } from "selenium-webdriver/chrome";

/**
 * Defines the options type for the constructor of the WebDriverObject class.
 */
export interface WebDriverOptions {
  profile: string;
  downloadDirectory: string;
}

/**
 * It creates Chrome WebDriver objects to control the Chrome browser.
 */
export class WebDriverObject {
  static readonly defaultWebDriverOptions: WebDriverOptions = {
    profile: "Default",
    downloadDirectory: "",
  };
  private static downloadRelDir =
    "./../../../../ts/windowsController/resources/download";
  private static userdataRelDir = "./../../../../ts/browserController/userdata";
  private chromeWebDriver: ThenableWebDriver;

  /**
   * Construct and return a Chrome WebDriver object to start a session with a Chrome browser and control it.
   * @param     {WebDriverOptions}    options     Give options to the chrome webdriver.
   * @return                                      Returns a chrome thenable web driver instance.
   */
  constructor(options?: WebDriverOptions) {
    // Set default options if they are not given.
    if (!options) options = WebDriverObject.defaultWebDriverOptions;

    // Create a builder for chrome web driver
    const builder = new Builder().forBrowser("chrome");

    // Define the path to download and userdata directories
    const downloadDir = path.join(__dirname, WebDriverObject.downloadRelDir);
    const userPreferences = {
      "download.default_directory": downloadDir + options.downloadDirectory,
    };
    const userdataDir = path.join(__dirname, WebDriverObject.userdataRelDir);

    // Define and set chrome builder options
    const chromeOptions = new ChromeOptions()
      .setUserPreferences(userPreferences)
      .addArguments(`user-data-dir=${userdataDir}`)
      .addArguments(`profile-directory=${options.profile}`)
      .excludeSwitches("enable-logging");
    builder.setChromeOptions(chromeOptions);

    //Create the chrome web driver in fullscreen
    this.chromeWebDriver = builder.build();
  }

  /**
   *  Enlarge or hide the browser's window.
   * @param   {"maximize" | "minimize"}    operation  Set the operation for the window: maximize or minimize.
   */
  public async windowMinMax(operation: "maximize" | "minimize") {
    if (operation === "maximize")
      await this.chromeWebDriver.manage().window().maximize();
    else await this.chromeWebDriver.manage().window().minimize();
  }

  /**
   * Schedules a command to navigate to the given URL.
   * @param     {string}    url     The fully qualified URL to open. Defaults to google.com.
   * @return                        A promise that will be resolved when the document has finished loading.
   */
  public get(url?: string) {
    if (!url) url = "https://www.google.com/";
    return this.chromeWebDriver.get(url);
  }

  /**
   * Schedules a command to retrieve the URL of the current page.
   * @return A promise that will be resolved with the current URL.
   */
  public getCurrentUrl() {
    return this.chromeWebDriver.getCurrentUrl();
  }

  /**
   * Schedule a command to find an element on the page.
   * If the element cannot be found, a bot.ErrorCode.NO_SUCH_ELEMENT result will be returned by the driver.
   * @param locator a locator object that identifies the web element.
   * @returns A promise that will resolve to an web element if found on the webpage.
   */
  public findElement(locator: Locator) {
    return this.chromeWebDriver.findElement(locator);
  }

  /**
   * Schedule a command to search for multiple web elements on the webpage.
   * @param locator a locator object that identifies the web elements.
   * @returns A promise that will resolve to an array of WebElements.
   */
  public findElements(locator: Locator) {
    return this.chromeWebDriver.findElements(locator);
  }

  /**
   * Set an implicit wait for the session of this web driver.
   * Warning: Do not mix implicit and explicit waits.
   * @param     {number}     ms    the timeout in ms.
   * @returns                      A promise that will be resolved when the command has completed.
   */
  public setImplicitWait(ms: number) {
    return this.chromeWebDriver.manage().setTimeouts({ implicit: ms });
  }

  /**
   * Schedules a command to move backwards in the chrome browser history.
   * @returns A promise that will be resolved when the navigation event has completed.
   */
  public back() {
    return this.chromeWebDriver.navigate().back();
  }

  /**
   * Schedules a command to move forwards in the chrome browser history.
   * @returns A promise that will be resolved when the navigation event has completed.
   */
  public forward() {
    return this.chromeWebDriver.navigate().forward();
  }

  /**
   * Schedules a command to refresh the current page.
   * @returns A promise that will be resolved when the navigation event has completed.
   */
  public refresh() {
    return this.chromeWebDriver.navigate().refresh();
  }

  /**
   * Schedules a command to wait for a condition to hold for a single web element.
   * @param condition A condition that will repeatedly be evaluated until it returns a truthy value.
   * It is defined as a promise, condition object, or a function to evaluate as a condition.
   * @param timeout How long to wait for the condition to be true
   * @returns A promise that will be fulfilled with the first truthy value returned by the condition function, or rejected if the condition times out.
   */
  public waitForElement(condition: WebElementCondition, timeout: number) {
    return this.chromeWebDriver.wait(condition, timeout);
  }

  /**
   * Schedules a command to wait for a condition to hold for a multiple web elements.
   * @param condition A condition that will repeatedly be evaluated until it returns a truthy value.
   * It is defined as a promise, condition object, or a function to evaluate as a condition.
   * @param timeout How long to wait for the condition to be true
   * @returns A promise that will be fulfilled with the first truthy value returned by the condition function, or rejected if the condition times out.
   */
  public waitForElements(
    condition:
      | Function
      | Condition<WebElement[]>
      | PromiseLike<WebElement[]>
      | ((driver: WebDriver) => WebElement[]),
    timeout: number
  ) {
    return this.chromeWebDriver.wait(condition, timeout);
  }

  /**
   * Schedules a command to quit the current session. After calling quit,
   * this instance will be invalidated and may no longer be used to issue commands against the browser.
   * @return A promise that will be resolved when the command has completed.
   */
  public quit() {
    return this.chromeWebDriver.quit();
  }

  /**
   * Schedules a command to quit the current session after a number of milliseconds. After calling quit,
   * this instance will be invalidated and may no longer be used to issue commands against the browser.
   * @param     {number}    ms  the timeout in ms.
   * @return                    A promise that will be resolved when the command has completed.
   */
  public quitAfter(ms: number) {
    setTimeout(async () => {
      await this.chromeWebDriver.quit();
    }, ms);
  }
}
