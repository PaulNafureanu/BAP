import { By, until } from "selenium-webdriver";
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

  private static selectFiles: WebLocator = {
    IDLocator: "#select-files-button div",
    CSSLocator: "#content ytcp-button > div",
    CSSLocator2: "#content .ytcp-uploads-file-picker > div",
    CSSLocator3: "#content #animation #circle",
    XPath:
      "/html/body/ytcp-uploads-dialog/tp-yt-paper-dialog/div/ytcp-uploads-file-picker/div/ytcp-button/div",
  };

  public async uploadVideo(video: Video) {
    await new WebElementObject(
      this.webDriver,
      YoutubeStudio.uploadButton
    ).click();

    let elems = await this.webDriver.findElements(
      By.css("#content #animation #circle")
    );

    let elem = await this.webDriver.waitForElement(
      until.elementIsVisible(elems[0]),
      5000
    );

    console.log("Element is visible");

    elem.click();

    // await elem.sendKeys(
    //   "C:\\Users\\leopa\\Desktop\\Projects\\BAP\\ts\\windowsController\\resources\\upload\\sample.mp4"
    // );

    // let inputFiles = new WebElementObject(
    //   this.webDriver,
    //   YoutubeStudio.selectFiles
    // );

    // await inputFiles.sendKeys(
    //   "C:\\Users\\leopa\\Desktop\\Projects\\BAP\\ts\\windowsController\\resources\\upload\\sample.mp4"
    // );
  }
}
