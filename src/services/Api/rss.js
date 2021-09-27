// Implementations for all the calls for the rss endpoints.
import Api from "./api";
//import Parser from "rss-parser";

/*const cryptoastULR = "https://cryptoast.fr/feed/";

// Method to get a list of all Pokemon
export const getCryptoast = async () => {
  try {
    const response = await Api.get(cryptoastULR);
    return response.results;

    /*let parser = new Parser();
    let data = await parser.parseURL(cryptoastULR);
    let rssTitle = data.title;
    let rssItems = [];

    data.items.map((item) => {
      rssItems.push({ title: item.title, link: item.link });
    });

    rss = { title: rssTitle, posts: rssItems };
    console.log("rss", rss);*/
  /*} catch (error) {
    console.error(error);
  }
};*/

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


  // pokemon.js
// Implementations for all the calls for the pokemon endpoints.


// Method to get a list of all Pokemon
export const getPokemonList = async () => {
    try {
      const response = await Api.get("/pokemon?limit=500");
      return response.results;
    } catch (error) {
      console.error(error);
    }
};

// Get a pokemon details by name
export const getPokemonByName = async(name) => {
    try {
      const response = await Api.get(`/pokemon/${name}`);
      return response;
    } catch (error) {
      console.error(error);
    }
};