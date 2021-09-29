<script>
  import { onMount } from "svelte";
  import { getTop20Marketcap, getSearchTrend } from "./services/Api/coingecko";

  // Get the data from the api, after the page is mounted.
  let top20Marketcap = [];
  onMount(async () => {
    const res = await getTop20Marketcap();
    top20Marketcap = res;
  });

  // Get the data from the api, after the page is mounted.
  let searchTrend = [];
  onMount(async () => {
    const res = await getSearchTrend();
    searchTrend = res;
  });
</script>

<main>
  <h1>Crypto trend</h1>
  <div class="tab">
    {#each top20Marketcap as item (item.id)}
      <div class="tab-item">
        <div class="coin">{item.symbol}</div>
        <div class="price">{item.current_price}</div>
      </div>
    {/each}
  </div>
</main>

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

  .tab {
    display: flex;
    flex-direction: column;
  }
  .tab-item {
    display: flex;
    flex-direction: row;
    gap: 10px;

  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
