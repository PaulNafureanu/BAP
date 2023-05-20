"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const video_1 = require("../browserController/websites/youtube/others/video");
const youtubeWebSite_1 = require("../browserController/websites/youtube/youtubeWebSite");
const path = require("node:path");
async function init() {
    // General demonstration of the websiteobject class:
    const ytWebSite = new youtubeWebSite_1.YoutubeWebSite();
    const ytStudio = await ytWebSite.loadYoutubeStudio();
    const videoFilePath = path.join(__dirname, "../../ts/windowsController/resources/upload/sample.mp4");
    await ytStudio.uploadVideo(new video_1.Video(videoFilePath));
    ytWebSite.quitAfter(10000);
}
init();
//# sourceMappingURL=init.js.map