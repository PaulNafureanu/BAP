import { Video } from "../browserController/websites/youtube/others/video";
import { YoutubeWebSite } from "../browserController/websites/youtube/youtubeWebSite";
import path = require("node:path");

async function init() {
  // General demonstration of the websiteobject class:
  const ytWebSite = new YoutubeWebSite();
  const ytStudio = await ytWebSite.loadYoutubeStudio();
  const videoFilePath = path.join(
    __dirname,
    "../../ts/windowsController/resources/upload/sample.mp4"
  );
  await ytStudio.uploadVideo(new Video(videoFilePath));
  ytWebSite.quitAfter(10000);
}

init();
