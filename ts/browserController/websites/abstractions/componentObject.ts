import { WebDriverObject } from "./webDriverObject";

export class ComponentObject {
  protected webDriver: WebDriverObject;

  constructor(webDriver: WebDriverObject) {
    this.webDriver = webDriver;
  }
}
