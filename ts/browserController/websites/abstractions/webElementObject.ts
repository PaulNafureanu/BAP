import { By, WebElement, until } from "selenium-webdriver";
import { WebDriverObject } from "./webDriverObject";

export interface WebLocator {
  IDLocator?: string;
  CSSLocator: string;
  CSSLocator2: string;
  CSSLocator3?: string;
  XPath: string;
}

/**
 * It creates WebElement objects to control specific web elements - the most basic subdivision of a website.
 */
export class WebElementObject {
  // Static fields for the class
  private static defaultWaitTime: number = 200;

  // Main states of the web element object
  private webLocator: WebLocator;
  private webDriver: WebDriverObject;

  /* States of an web element:
   * (WebElement) - there is a defined web element on the webpage.
   * (undefined) - there was no check done yet to test if there is such a web element.
   * (null) - there is no defined web element on the webpage, throw error.
   */
  protected webElement: WebElement | undefined;

  constructor(webDriver: WebDriverObject, webLocator: WebLocator) {
    this.webDriver = webDriver;
    this.webLocator = webLocator;
  }

  /**
   * Schedule a command to search for the web element defined by its web locator on the current webpage.
   * @param timeout How long to wait to find the element for each locator in ms.
   * The total wait time is the number of locators checked multiplied by the timeout number in ms.
   * @returns  A promise that will resolve to an WebElement if found or
   * throws error if such element does not exist.
   */
  private async findWebElement(timeout: number) {
    let webElements: WebElement[] = [];

    if (this.webLocator.IDLocator) {
      try {
        webElements = await this.webDriver.waitForElements(
          until.elementsLocated(By.id(this.webLocator.IDLocator)),
          timeout
        );

        if (webElements.length > 0) {
          this.webElement = webElements[0];
          return webElements[0];
        }
      } catch (error) {}
    }

    try {
      webElements = await this.webDriver.waitForElements(
        until.elementsLocated(By.css(this.webLocator.CSSLocator)),
        timeout
      );
      if (webElements.length > 0) {
        this.webElement = webElements[0];
        return webElements[0];
      }
    } catch (error) {}

    try {
      webElements = await this.webDriver.waitForElements(
        until.elementsLocated(By.css(this.webLocator.CSSLocator2)),
        timeout
      );
      if (webElements.length > 0) {
        this.webElement = webElements[0];
        return webElements[0];
      }
    } catch (error) {}

    if (this.webLocator.CSSLocator3) {
      try {
        webElements = await this.webDriver.waitForElements(
          until.elementsLocated(By.css(this.webLocator.CSSLocator3)),
          timeout
        );
        if (webElements.length > 0) {
          this.webElement = webElements[0];
          return webElements[0];
        }
      } catch (error) {}
    }

    try {
      webElements = await this.webDriver.waitForElements(
        until.elementsLocated(By.xpath(this.webLocator.XPath)),
        timeout
      );
      if (webElements.length > 0) {
        this.webElement = webElements[0];
        return webElements[0];
      }
    } catch (error) {
      throw new Error(
        "There is no such web element with this web locator on the current webpage."
      );
    }
  }

  //TODO: To put an explicit wait condition using until for elementEnable, elementVisible, so on, for each of the below methods:

  public async click(timeout: number = WebElementObject.defaultWaitTime) {
    let webElement = this.webElement;
    if (!webElement) webElement = await this.findWebElement(timeout);
    await webElement?.click();
  }
  public async getText(timeout: number = WebElementObject.defaultWaitTime) {
    let webElement = this.webElement;
    if (!webElement) webElement = await this.findWebElement(timeout);
    await webElement?.getText();
  }
  public async clear(timeout: number = WebElementObject.defaultWaitTime) {
    let webElement = this.webElement;
    if (!webElement) webElement = await this.findWebElement(timeout);
    await webElement?.clear();
  }
  public async clearAndSendKeys(
    str: string,
    timeout: number = WebElementObject.defaultWaitTime
  ) {
    let webElement = this.webElement;
    if (!webElement) webElement = await this.findWebElement(timeout);
    await webElement?.clear();
    await webElement?.sendKeys(str);
  }
  public async sendKeys(
    str: string,
    timeout: number = WebElementObject.defaultWaitTime
  ) {
    let webElement = this.webElement;
    if (!webElement) webElement = await this.findWebElement(timeout);
    await webElement?.sendKeys(str);
  }
  public async submit(timeout: number = WebElementObject.defaultWaitTime) {
    let webElement = this.webElement;
    if (!webElement) webElement = await this.findWebElement(timeout);
    await webElement?.submit();
  }
  public async isDisplayed(timeout: number = WebElementObject.defaultWaitTime) {
    let webElement = this.webElement;
    if (!webElement) webElement = await this.findWebElement(timeout);
    return await webElement?.isDisplayed();
  }
  public async isEnabled(timeout: number = WebElementObject.defaultWaitTime) {
    let webElement = this.webElement;
    if (!webElement) webElement = await this.findWebElement(timeout);
    return await webElement?.isEnabled();
  }
  public async isSelected(timeout: number = WebElementObject.defaultWaitTime) {
    let webElement = this.webElement;
    if (!webElement) webElement = await this.findWebElement(timeout);
    return await webElement?.isSelected();
  }
  public async takeScreenshot(
    timeout: number = WebElementObject.defaultWaitTime
  ) {
    let webElement = this.webElement;
    if (!webElement) webElement = await this.findWebElement(timeout);
    return await webElement?.takeScreenshot();
  }
}
