import { YoutubeWebSite } from "../browserController/websites/youtube/youtubeWebSite";

async function init() {
  // General demonstration of the websiteobject class:
  const ytWebSite = new YoutubeWebSite();
  const ytHomePage = await ytWebSite.load();
  console.log(ytHomePage.url);
  const cd = await ytWebSite.loadPage("ChannelDashboard");
  console.log(cd.url);
  await ytWebSite.forward();
  await ytWebSite.forward();
  await ytWebSite.back();
  const bk = await ytWebSite.back();
  console.log(bk?.url);
  ytWebSite.refresh();
  ytWebSite.refresh();
  ytWebSite.quitAfter(3000);
}

init();
