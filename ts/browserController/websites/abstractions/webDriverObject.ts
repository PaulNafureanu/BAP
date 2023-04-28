import { Builder, ThenableWebDriver } from "selenium-webdriver";

/**
 * Defines the options type for the constructor of the WebDriverObject class.
 */
export interface WebDriverOptions {}

/**
 * It creates Chrome WebDriver objects to control the Chrome browser.
 */
export class WebDriverObject {
  private static defaultWebDriverOptions: WebDriverOptions = {};
  private chromeWebDriver: ThenableWebDriver;

  /**
   * Construct and return a Chrome WebDriver object to start a session with a Chrome browser and control it.
   * @param     {WebDriverOptions}    options     Give options to the chrome webdriver.
   * @return                                      Returns a chrome thenable web driver instance.
   */
  constructor(options?: WebDriverOptions) {
    // Set default options if they are not given.
    if (!options) options = WebDriverObject.defaultWebDriverOptions;

    // Create a chrome web driver
    this.chromeWebDriver = new Builder().forBrowser("chrome").build();
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
   * Set an implicit wait for the session of this web driver.
   * Warning: Do not mix implicit and explicit waits.
   * @param     {number}     ms    the timeout in ms.
   * @returns                      A promise that will be resolved when the command has completed.
   */
  public setImplicitWait(ms: number) {
    return this.chromeWebDriver.manage().setTimeouts({ implicit: ms });
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
