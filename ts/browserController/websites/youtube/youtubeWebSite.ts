import { WebDriverObject } from "../abstractions/webDriverObject";
import { WebSiteObject, WebSiteOptions } from "../abstractions/webSiteObject";

/**
 * It creates Youtube WebSite Objects that will contain the general representation of the youtube websites,
 * the navigation within with its page and components objects.
 */
export class YoutubeWebSite extends WebSiteObject {
  protected static url: string = "https://www.youtube.com/";
  protected webDriver: WebDriverObject;

  /**
   * Construct and return a Youtube WebSite object to navigate within.
   * @param     {WebSiteObject}    options     Give external options for the session and the construction of the youtube website object.
   */
  constructor(options?: WebSiteOptions) {
    if (!options) options = YoutubeWebSite.defaultWebSiteOptions;
    super(options, YoutubeWebSite.url);
    this.webDriver = options.webDriver;
  }
}
