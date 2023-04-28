import { Builder, ThenableWebDriver } from "selenium-webdriver";

/**
 * Defines the options type for the constructor of the WebDriverObject class.
 */
export interface WebDriverObjectOptions {}

/**
 * It creates Chrome WebDriver objects to control the Chrome browser.
 */
export class WebDriverObject {
  #chromeWebDriver: ThenableWebDriver;
  /**
   * Construct and return a Chrome WebDriver object to start a session with a Chrome browser and control it.
   * @param     {WebDriverObjectOptions}    options     Give options to the chrome webdriver.
   * @return                                            Returns a chrome thenable web driver instance.
   */
  constructor(options?: WebDriverObjectOptions) {
    // Create a chrome web driver
    this.#chromeWebDriver = new Builder().forBrowser("chrome").build();

    // Return the web driver
    return this;
  }

  /**
   * Schedules a command to navigate to the given URL.
   * @param     url     The fully qualified URL to open. Defaults to google.com.
   * @return            A promise that will be resolved when the document has finished loading.
   */
  get(url: string = "https://www.google.com/") {
    return this.#chromeWebDriver.get(url);
  }

  /**
   * Set an implicit wait for the session of this web driver.
   * Warning: Do not mix implicit and explicit waits.
   * @param     {number}     ms    the timeout in ms.
   * @returns                      A promise that will be resolved when the command has completed.
   */
  setImplicitWait(ms: number) {
    return this.#chromeWebDriver.manage().setTimeouts({ implicit: ms });
  }

  /**
   * Schedules a command to quit the current session. After calling quit,
   * this instance will be invalidated and may no longer be used to issue commands against the browser.
   * @return A promise that will be resolved when the command has completed.
   */
  quit() {
    return this.#chromeWebDriver.quit();
  }

  /**
   * Schedules a command to quit the current session after a number of milliseconds. After calling quit,
   * this instance will be invalidated and may no longer be used to issue commands against the browser.
   * @param     {number}    ms  the timeout in ms.
   * @return                    A promise that will be resolved when the command has completed.
   */
  quitAfter(ms: number) {
    setTimeout(async () => {
      await this.#chromeWebDriver.quit();
    }, ms);
  }
}