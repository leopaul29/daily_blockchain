const http = require("http");
let Parser = require("rss-parser");
let parser = new Parser();

const jdcFeed = "https://journalducoin.com/feed/";

const app = http.createServer((req, response) => {
  const cryptoasFeed = "https://cryptoast.fr/feed/";
  const jdcFeed = "https://journalducoin.com/feed/";

  // let parser = new Parser();
  let rssBody = (async () => {
    let feed = await fetch(cryptoasFeed); //parser.parseURL(cryptoasFeed);

    let rssTemp = [];
    let rssTitle = feed.title;

    feed.items.forEach((item) => {
      rssTemp.push(item.title);
    });

    let rss = { title: rssTitle, posts: rssTemp };
    rssBody = { ...rssBody, rss };

    response.end(rssBody);
  })();
});

app.listen(3000);
