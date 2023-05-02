import { ComponentObject } from "../../abstractions/componentObject";
import {
  WebElementObject,
  WebLocator,
} from "../../abstractions/webElementObject";

export class YoutubeAccountMenuComponent extends ComponentObject {
  // Web locators for the composing web elements of the account menu component:
  private static studioWebLocator: WebLocator = {
    IDLocator: "avatar-btn",
    CSSLocator: "",
    CSSLocator2: "",
    CSSLocator3: "",
    XPath: "",
  };

  private static channelWebLocator: WebLocator = {
    IDLocator: "",
    CSSLocator: "",
    CSSLocator2: "",
    CSSLocator3: "",
    XPath: "",
  };

  private static accountWebLocator: WebLocator = {
    IDLocator: "",
    CSSLocator: "",
    CSSLocator2: "",
    CSSLocator3: "",
    XPath: "",
  };

  private static signOutWebLocator: WebLocator = {
    IDLocator: "",
    CSSLocator: "",
    CSSLocator2: "",
    CSSLocator3: "",
    XPath: "",
  };

  private static signInWebLocator: WebLocator = {
    IDLocator: "",
    CSSLocator: "",
    CSSLocator2: "",
    CSSLocator3: "",
    XPath: "",
  };

  // Methods and behaviors of the account menu component:
  public async openStudioPage() {
    const webLocator = YoutubeAccountMenuComponent.studioWebLocator;
    await new WebElementObject(this.webDriver, webLocator).click();
  }
  public async openChannelDashboardPage() {
    const webLocator = YoutubeAccountMenuComponent.channelWebLocator;
    await new WebElementObject(this.webDriver, webLocator).click();
  }
  public async changeAccount() {
    const webLocator = YoutubeAccountMenuComponent.accountWebLocator;
    await new WebElementObject(this.webDriver, webLocator).click();
  }
  public async signOut() {
    const webLocator = YoutubeAccountMenuComponent.signOutWebLocator;
    await new WebElementObject(this.webDriver, webLocator).click();
  }
  public async signIn() {
    const webLocator = YoutubeAccountMenuComponent.signInWebLocator;
    await new WebElementObject(this.webDriver, webLocator).click();
  }
}
