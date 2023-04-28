import { WebDriverObject } from "./webDriverObject";

/**
 * Defines the options type for the constructor of the WebSiteObject class.
 */
export interface WebSiteOptions {
  webDriver: WebDriverObject;
  implicitWait: number;
}

/**
 * It creates WebSite Objects that will contain the general representation of websites, the navigation and their page objects.
 */
export class WebSiteObject {
  // Default website options for all website classes and objects
  protected static defaultWebSiteOptions: WebSiteOptions = {
    webDriver: new WebDriverObject(),
    implicitWait: 0,
  };

  // Current website options. May default to the above options.
  protected static url = "";
  protected webDriver: WebDriverObject;

  /**
   * Construct and return a WebSite object to navigate within.
   * @param     {string}           url         Set the static url for the website class.
   * @param     {WebSiteObject}    options     Give external options for the session and the construction of website object.
   */
  constructor(options: WebSiteOptions, url: string) {
    WebSiteObject.url = url;
    this.webDriver = options.webDriver;
  }
  /**
   * Schedules a command to navigate to the url of the website.
   * @return A promise that will be resolved when the document has finished loading.
   */
  protected async loadWebSite() {
    const { implicitWait } = WebSiteObject.defaultWebSiteOptions;
    await this.webDriver.get(WebSiteObject.url);
    await this.webDriver.setImplicitWait(implicitWait);
  }

  /**
   * Schedules a command to test if the website loaded correctly.
   * @return A promise that will be resolved when the document has finished loading.
   * It throws an error and quits the session if the website is not loaded correctly.
   */
  protected async isWebSiteLoaded() {
    // Check if the url of the loaded page is the same as the defined url of the website.
    let currentUrl = await this.webDriver.getCurrentUrl();
    if (WebSiteObject.url !== currentUrl) {
      this.quit();
      throw new Error(
        "Not on the entry page of the website '" +
          WebSiteObject.url +
          "'. Current page is: '" +
          currentUrl +
          "'"
      );
    }
  }

  /**
   * Schedules a command to load the website.
   * @return A promise that will be resolved when the document has finished loading.
   * It throws an error and quits the session if the website is not loaded correctly.
   */
  public async load() {
    await this.loadWebSite();
    await this.isWebSiteLoaded();
    // TODO: return an empty page object. For a specific site, it should return the home page of the website
  }

  /**
   * Schedules a command to quit the current session of the website. After calling quit,
   * this instance will be invalidated and may no longer be used to issue commands against the website.
   * @return A promise that will be resolved when the command has completed.
   */
  public quit() {
    return this.webDriver.quit();
  }

  /**
   * Schedules a command to quit the current session of the website after a number of milliseconds. After calling quit,
   * this instance will be invalidated and may no longer be used to issue commands against the website.
   * @param {number} ms the timeout in ms.
   * @return A promise that will be resolved when the command has completed.
   */
  public quitAfter(ms: number) {
    this.webDriver.quitAfter(ms);
  }
}
