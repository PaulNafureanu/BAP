import { HomePageObject } from "../../abstractions/pages/homePageObject";
import { YoutubeAccountMenuComponent } from "../components/accountMenuComponent";
import { YoutubeMastheadMenuComponent } from "../components/mastheadMenuComponent";

export class YoutubeHomePage extends HomePageObject {
  public getAccountMenu() {
    return new YoutubeAccountMenuComponent(this.webDriver);
  }
  public getMastheadMenu() {
    return new YoutubeMastheadMenuComponent(this.webDriver);
  }
}

//
/**
 * get youtube account menu (component) (the right menu):
 * - click on Youtube studio
 * - click on Your Channel
 * - click on Change Account
 * - click on Sign out
 *
 * get youtube master head menu (component) (the left menu):
 * - click on Home
 * - click on Shorts
 * - click on Subscriptions
 * - click on Library
 */
