"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeStudio = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const pageObject_1 = require("../../abstractions/pageObject");
const webElementObject_1 = require("../../abstractions/webElementObject");
class YoutubeStudio extends pageObject_1.PageObject {
    static uploadButton = {
        IDLocator: "#upload-button",
        CSSLocator: "ytcp-button.ytcp-upload-video-button",
        CSSLocator2: "#align-experimental-badge .main-container ytcp-upload-video-button ytcp-button",
        CSSLocator3: ".main-container ytcp-upload-video-button ytcp-button",
        XPath: "/html/body/ytcp-app/ytcp-entity-page/div/div/main/div/ytcp-animatable[3]/ytcd-channel-dashboard/div[1]/div/ytcd-card-column[1]/ytcd-card/div/ytcd-basic-card/ytcd-item/ytcd-entity-snapshot-item/ytcd-video-snapshot-upload/div/div[3]/ytcp-upload-video-button/ytcp-button",
    };
    static selectFiles = {
        IDLocator: "#select-files-button div",
        CSSLocator: "#content ytcp-button > div",
        CSSLocator2: "#content .ytcp-uploads-file-picker > div",
        CSSLocator3: "#content #animation #circle",
        XPath: "/html/body/ytcp-uploads-dialog/tp-yt-paper-dialog/div/ytcp-uploads-file-picker/div/ytcp-button/div",
    };
    async uploadVideo(video) {
        await new webElementObject_1.WebElementObject(this.webDriver, YoutubeStudio.uploadButton).click();
        let elems = await this.webDriver.findElements(selenium_webdriver_1.By.css("#content #animation #circle"));
        let elem = await this.webDriver.waitForElement(selenium_webdriver_1.until.elementIsVisible(elems[0]), 5000);
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
exports.YoutubeStudio = YoutubeStudio;
//# sourceMappingURL=youtubeStudio.js.map