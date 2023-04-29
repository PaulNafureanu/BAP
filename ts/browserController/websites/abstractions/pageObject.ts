import { WebDriverObject } from "./webDriverObject";

export class PageObject {
  public url: string;
  protected webDriver: WebDriverObject;
  constructor(url: string, webDriver: WebDriverObject) {
    this.url = url;
    this.webDriver = webDriver;
  }
}
