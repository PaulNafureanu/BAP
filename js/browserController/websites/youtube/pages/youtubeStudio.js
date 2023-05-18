"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeStudio = void 0;
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
    async uploadVideo(video) {
        const webLocator = YoutubeStudio.uploadButton;
        await new webElementObject_1.WebElementObject(this.webDriver, webLocator).click();
    }
}
exports.YoutubeStudio = YoutubeStudio;
//# sourceMappingURL=youtubeStudio.js.map