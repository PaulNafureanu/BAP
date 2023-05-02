import { By, WebElement } from "selenium-webdriver";
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
   * @returns  A promise that will resolve to an WebElement if found or
   * throws error if such element does not exist.
   */
  private async findWebElement() {
    let webElements: WebElement[];

    if (this.webLocator.IDLocator) {
      webElements = await this.webDriver.findElements(
        By.id(this.webLocator.IDLocator)
      );
      if (webElements.length > 0) {
        this.webElement = webElements[0];
        return webElements[0];
      }
    }

    webElements = await this.webDriver.findElements(
      By.css(this.webLocator.CSSLocator)
    );
    if (webElements.length > 0) {
      this.webElement = webElements[0];
      return webElements[0];
    }

    webElements = await this.webDriver.findElements(
      By.css(this.webLocator.CSSLocator2)
    );
    if (webElements.length > 0) {
      this.webElement = webElements[0];
      return webElements[0];
    }

    if (this.webLocator.CSSLocator3) {
      webElements = await this.webDriver.findElements(
        By.css(this.webLocator.CSSLocator3)
      );
      if (webElements.length > 0) {
        this.webElement = webElements[0];
        return webElements[0];
      }
    }

    webElements = await this.webDriver.findElements(
      By.xpath(this.webLocator.XPath)
    );
    if (webElements.length > 0) {
      this.webElement = webElements[0];
      return webElements[0];
    }

    throw new Error(
      "There is no such web element with this web locator on the current webpage."
    );
  }

  public async click() {
    let webElement = this.webElement;
    if (!webElement) webElement = await this.findWebElement();
    await webElement.click();
  }
  public async getText() {
    let webElement = this.webElement;
    if (!webElement) webElement = await this.findWebElement();
    await webElement.getText();
  }
  public async clear() {
    let webElement = this.webElement;
    if (!webElement) webElement = await this.findWebElement();
    await webElement.clear();
  }
  public async clearAndSendKeys(str: string) {
    let webElement = this.webElement;
    if (!webElement) webElement = await this.findWebElement();
    await webElement.clear();
    await webElement.sendKeys(str);
  }
  public async sendKeys(str: string) {
    let webElement = this.webElement;
    if (!webElement) webElement = await this.findWebElement();
    await webElement.sendKeys(str);
  }
  public async submit() {
    let webElement = this.webElement;
    if (!webElement) webElement = await this.findWebElement();
    await webElement.submit();
  }
  public async isDisplayed() {
    let webElement = this.webElement;
    if (!webElement) webElement = await this.findWebElement();
    return await webElement.isDisplayed();
  }
  public async isEnabled() {
    let webElement = this.webElement;
    if (!webElement) webElement = await this.findWebElement();
    return await webElement.isEnabled();
  }
  public async isSelected() {
    let webElement = this.webElement;
    if (!webElement) webElement = await this.findWebElement();
    return await webElement.isSelected();
  }
  public async takeScreenshot() {
    let webElement = this.webElement;
    if (!webElement) webElement = await this.findWebElement();
    return await webElement.takeScreenshot();
  }
}
