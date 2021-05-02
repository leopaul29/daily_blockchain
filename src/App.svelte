<script>
  import { onMount } from "svelte";
  const jdcFeed = "https://journalducoin.com/feed/";

  // let rss;
  // onMount(async () => {
  //   const response = await fetch(cryptoasFeed);
  //   const data = response.json();

  //   rss = data;
  // });
  // // import {Parser} from "rss-parser";

  // const cryptoasFeed = "https://cryptoast.fr/feed/";
  // const jdcFeed = "https://journalducoin.com/feed/";

  // // let parser = new Parser();
  // let rssBody = (async () => {
  //   let feed = await fetch(cryptoasFeed); //parser.parseURL(cryptoasFeed);

  //   let rssTemp = [];
  //   let rssTitle = feed.title;

  //   feed.items.forEach((item) => {
  //     rssTemp.push(item.title);
  //   });

  //   let rss = { title: rssTitle, posts: rssTemp };
  //   rssBody = { ...rssBody, rss };
  // })();

  let users;

  onMount(async () => {
    const res = await fetch(jdcFeed, { mode: "no-cors" });
    users = await res.xml();
    console.log("res ", users)
    // fetch(jdcFeed, { mode: "no-cors" })
    // .then((response)=> console.log(response))
  });
  export let name;
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
  <p>test for a build</p>
  {users}
</main>
<footer>
  <div>
    Icons made by <a
      href="https://www.flaticon.com/authors/good-ware"
      title="Good Ware">Good Ware</a
    >
    from
    <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
  </div>
</footer>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
