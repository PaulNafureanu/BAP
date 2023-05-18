import { WebSiteObject, WebSiteOptions } from "../abstractions/webSiteObject";
import { YoutubeHomePage } from "./pages/youtubeHomePage";
import { YoutubeChannelDashboardPage } from "./pages/channelDashboardPage";
import { YoutubeStudio } from "./pages/youtubeStudio";

/**
 * It creates Youtube WebSite Objects that will contain the general representation of the youtube websites,
 * the navigation within with its page and components objects.
 */
export class YoutubeWebSite extends WebSiteObject {
  protected webSiteURL = "https://www.youtube.com/";

  protected URLs = {
    HomePage: this.webSiteURL,
    ChannelDashboard:
      "https://studio.youtube.com/channel/UCopd8ft4OZRkVa2nG7ZA4HQ",
    YoutubeStudio:
      "https://studio.youtube.com/channel/UCopd8ft4OZRkVa2nG7ZA4HQ",
  };

  protected pages = {
    HomePage: new YoutubeHomePage(
      this.webSiteURL,
      this.webDriverState.webDriver
    ),
    ChannelDashboard: new YoutubeChannelDashboardPage(
      this.URLs.ChannelDashboard,
      this.webDriverState.webDriver
    ),
    YoutubeStudio: new YoutubeStudio(
      this.URLs.YoutubeStudio,
      this.webDriverState.webDriver
    ),
  };

  /**
   * Construct and return a Youtube WebSite object to navigate within.
   * @param     {WebSiteObject}    options     Give external options for the session and the construction of the youtube website object.
   */
  constructor(options?: WebSiteOptions) {
    super(options);
  }

  /**
   * Schedules a command to load the youtube home page object.
   * @return A promise that will be resolved when the page object has finished loading.
   * It throws an error and quits the session if the page object is not loaded correctly.
   */
  public async loadHomePage() {
    const page = this.pages["HomePage"];
    await this.loadPage(page);
    return page;
  }

  /**
   * Schedules a command to load the channel dashboard page object.
   * @return A promise that will be resolved when the page object has finished loading.
   * It throws an error and quits the session if the page object is not loaded correctly.
   */
  public async loadChannelDashboard() {
    const page = this.pages["ChannelDashboard"];
    await this.loadPage(page);
    return page;
  }

  /**
   * Schedules a command to load the channel's youtube studio page object.
   * @return A promise that will be resolved when the page object has finished loading.
   * It throws an error and quits the session if the page object is not loaded correctly.
   */
  public async loadYoutubeStudio() {
    const page = this.pages["YoutubeStudio"];
    await this.loadPage(page);
    return page;
  }

  /**
   *  Loads and returns a youtube specific page object using a page key.
   * @param { keyof typeof this.pages} pageKey  The page key that identifies the page object in the website. Defaults to 'HomePage'.
   * @returns A promise that will be resolved after loading the document containing the specified page object.
   * It throws an error and quits the session if the page object is not loaded correctly.
   */
  public loadYoutubePage(pageKey?: keyof typeof this.pages) {
    if (!pageKey) pageKey = "HomePage";
    return this.loadPage(this.pages[pageKey]);
  }
}
