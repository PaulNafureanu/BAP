import { HomePageObject } from "../../abstractions/pages/homePageObject";
import { AccountMenuComponent } from "../components/accountMenuComponent";
import { MastheadMenuComponent } from "../components/mastheadMenuComponent";

export class YoutubeHomePage extends HomePageObject {
  public accountMenu() {
    return new AccountMenuComponent(this.webDriver);
  }
  public mastheadMenu() {
    return new MastheadMenuComponent(this.webDriver);
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
