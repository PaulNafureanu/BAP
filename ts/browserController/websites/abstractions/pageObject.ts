import { WebDriverObject } from "./webDriverObject";

export class PageObject {
  public url: string;
  constructor(url: string) {
    this.url = url;
  }
  public back() {}
  public forward() {}
  public refresh() {}
}
