// Implementations for all the calls for the rss endpoints.
import Api from "../services/Api";
import Parser from "rss-parser";

const cryptoastULR = "https://cryptoast.fr/feed/";

// Method to get a list of all Pokemon
export const getCryptoast = async () => {
  try {
    //const response = await Api.get(cryptoastULR);
    //return response.results;

    let parser = new Parser();
    let data = await parser.parseURL(cryptoastULR);
    let rssTitle = data.title;
    let rssItems = [];

    data.items.map((item) => {
      rssItems.push({ title: item.title, link: item.link });
    });

    rss = { title: rssTitle, posts: rssItems };
    console.log("rss", rss);
  } catch (error) {
    console.error(error);
  }
};

/*import { onMount } from "svelte";
  import Parser from "rss-parser";

  onMount(async () => {
    let url = "https://cryptoast.fr/feed/";
    let parser = new Parser();
    let data = await parser.parseURL(url);
    let rssTitle = data.title;
    let rssItems = [];

    data.items.map((item) => {
      rssItems.push({ title: item.title, link: item.link });
    });

    rss = { title: rssTitle, posts: rssItems };
    console.log("rss", rss);
  })();*/
