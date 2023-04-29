import { WebSiteObject, WebSiteOptions } from "../abstractions/webSiteObject";
import { PageObject } from "../abstractions/pageObject";
import { YoutubeHomePage } from "./pages/youtubeHomePage";

/**
 * It creates Youtube WebSite Objects that will contain the general representation of the youtube websites,
 * the navigation within with its page and components objects.
 */
export class YoutubeWebSite extends WebSiteObject {
  protected URLs = {
    website: "https://www.youtube.com/",
    channelDashboard:
      "https://studio.youtube.com/channel/UCopd8ft4OZRkVa2nG7ZA4HQ",
  };
  protected pages = {
    HomePage: new YoutubeHomePage(this.URLs.website, this.webDriver),
    ChannelDashboard: new PageObject(
      this.URLs.channelDashboard,
      this.webDriver
    ),
  };

  /**
   * Construct and return a Youtube WebSite object to navigate within.
   * @param     {WebSiteObject}    options     Give external options for the session and the construction of the youtube website object.
   */
  constructor(options?: WebSiteOptions) {
    if (!options) options = YoutubeWebSite.defaultWebSiteOptions;
    super(options);
  }

  /**
   *  Loads and returns a specific page object using a page key.
   * @param { keyof typeof this.pages} pageKey  The page key that identifies the page object in the website. Defaults to 'HomePage'.
   * @returns A promise that will be resolved after loading the document containing the specified page object.
   * It throws an error and quits the session if the page object is not loaded correctly.
   */
  public loadPage(pageKey?: keyof typeof this.pages) {
    if (!pageKey) pageKey = "HomePage";
    return this.load(this.pages[pageKey]);
  }
}
