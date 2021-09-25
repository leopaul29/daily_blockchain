<script>
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

  export let name;
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
  <p>test for a build</p>
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
