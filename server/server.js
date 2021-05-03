const http = require("http");
const express = require("express");
let Parser = require("rss-parser");

async function getFeed(url) {
  let parser = new Parser();
  let data = await parser.parseURL(url);
  let rssTitle = data.title;
  let rssItems = [];

  data.items.forEach((item) => {
    rssItems.push({ title: item.title, link: item.link });
  });
  return { title: rssTitle, posts: rssItems };
}

async function getFeeds() {
  const feeds = [
    "https://cryptoast.fr/feed/",
    "https://journalducoin.com/feed/",
  ];

  let rss = feeds.map((feed) => {
    getFeed(feed).then((results) => {
      return results;
    });
  });
  console.log("rss", rss);
  return rss;
}

// Create Express app
const app = express();

// A sample route
app.get("/", (req, res) => res.send("Hello World!"));

app.get("/cryptoast", (req, res) => {
  (async () => {
    let url = "https://cryptoast.fr/feed/";
    let parser = new Parser();
    let data = await parser.parseURL(url);
    let rssTitle = data.title;
    let rssItems = [];

    data.items.map((item) => {
      rssItems.push({ title: item.title, link: item.link });
    });

    let rss = { title: rssTitle, posts: rssItems };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(rss));
    res.end();
  })();
});

app.get("/feed", (req, res) => {
  console.log("server response");

  const rss = getFeeds();

  console.log("feed", rss);
  res.writeHead(200, { "Content-Type": "application/json" });
  //res.write(JSON.stringify(rss));
  res.end();
});

// Start the Express server
app.listen(3000, () => console.log("Server running on port 3000!"));
