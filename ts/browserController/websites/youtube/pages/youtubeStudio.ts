import { PageObject } from "../../abstractions/pageObject";
import {
  WebLocator,
  WebElementObject,
} from "../../abstractions/webElementObject";
import { Video } from "../others/video";

export class YoutubeStudio extends PageObject {
  private static uploadButton: WebLocator = {
    IDLocator: "#upload-button",
    CSSLocator: "ytcp-button.ytcp-upload-video-button",
    CSSLocator2:
      "#align-experimental-badge .main-container ytcp-upload-video-button ytcp-button",
    CSSLocator3: ".main-container ytcp-upload-video-button ytcp-button",
    XPath:
      "/html/body/ytcp-app/ytcp-entity-page/div/div/main/div/ytcp-animatable[3]/ytcd-channel-dashboard/div[1]/div/ytcd-card-column[1]/ytcd-card/div/ytcd-basic-card/ytcd-item/ytcd-entity-snapshot-item/ytcd-video-snapshot-upload/div/div[3]/ytcp-upload-video-button/ytcp-button",
  };
  public async uploadVideo(video: Video) {
    const webLocator = YoutubeStudio.uploadButton;
    await new WebElementObject(this.webDriver, webLocator).click();
  }
}
