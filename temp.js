import Parser from "rss-parser";

const cryptoasFeed = "https://cryptoast.fr/feed/";
const jdcFeed = "https://journalducoin.com/feed/";

let parser = new Parser();
let rssBody = {}(async () => {
  let feed = await parser.parseURL(cryptoasFeed);

  let rssTemp = [];
  let rssTitle = feed.title;

  feed.items.forEach((item) => {
    rssTemp.push(item.title);
  });

  let rss = { title: rssTitle, posts: rssTemp };
  rssBody = { ...rssBody, rss };
})();
