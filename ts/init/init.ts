import { YoutubeWebSite } from "../browserController/websites/youtube/youtubeWebSite";

async function init() {
  // General demonstration of the websiteobject class:
  const ytWebSite = new YoutubeWebSite();
  const ytHomepage = await ytWebSite.loadHomePage();
  const ytAccountMenu = ytHomepage.accountMenu();
  ytWebSite.quitAfter(3000);
}

init();
