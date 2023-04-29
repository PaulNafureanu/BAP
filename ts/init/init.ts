import { YoutubeWebSite } from "../browserController/websites/youtube/youtubeWebSite";

async function init() {
  // General demonstration of the websiteobject class:
  const ytWebSite = new YoutubeWebSite();
  const ytHomePage = await ytWebSite.load();
  ytWebSite.quitAfter(3000);
}

init();
