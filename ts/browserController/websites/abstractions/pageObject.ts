import { WebDriverObject } from "./webDriverObject";

/**
 * It creates Page objects to control specific pages of a website.
 */
export class PageObject {
  public url: string;
  protected webDriver: WebDriverObject;

  /**
   * It creates Page Objects that will contain the general representation of a website's page with all their page components.
   */
  constructor(url: string, webDriver: WebDriverObject) {
    this.url = url;
    this.webDriver = webDriver;
  }
}
