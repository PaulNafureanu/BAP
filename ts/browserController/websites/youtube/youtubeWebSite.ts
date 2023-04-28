import { PageObject } from "../abstractions/pageObject";
import { HomePageObject } from "../abstractions/pages/homePageObject";
import { WebSiteObject, WebSiteOptions } from "../abstractions/webSiteObject";
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
    HomePage: new YoutubeHomePage(this.URLs.website),
    ChannelDashboard: new PageObject(this.URLs.channelDashboard),
  };

  /**
   * Construct and return a Youtube WebSite object to navigate within.
   * @param     {WebSiteObject}    options     Give external options for the session and the construction of the youtube website object.
   */
  constructor(options?: WebSiteOptions) {
    if (!options) options = YoutubeWebSite.defaultWebSiteOptions;
    super(options);
  }

  public loadPage(page?: keyof typeof this.pages) {
    if (!page) page = "HomePage";
    return this.load(this.pages[page]);
  }
}
