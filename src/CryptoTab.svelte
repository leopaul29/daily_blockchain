<script>
  import { onMount } from "svelte";
  import { getTop20Marketcap } from "./services/Api/coingecko";

  // Get the data from the api, after the page is mounted.
  export let top20Marketcap = [];
  onMount(async () => {
    const res = await getTop20Marketcap();
    top20Marketcap = res;
  });
</script>

<table class="tab">
  <thead class="header">
    <tr class="row">
      <td class="col index">#</td>
      <td class="col">Symbol</td>
      <td class="col number">Price</td>
      <td class="col number">% Change 24h</td>
      <td class="col number">Market cap</td>
      <td class="col number">ATH</td>
      <td class="col number">% to reach ATH</td>
    </tr>
  </thead>
  <tbody>
    {#each top20Marketcap as item (item.id)}
      <tr class="row">
        <td class="col">{item.market_cap_rank}</td>
        <td class="col symbol">
          <div class="coin_image">
            <img class="image" src={item.image} alt={item.symbol} />
          </div>
          <div class="coin_symbol">
            {item.symbol}
          </div>
        </td>
        <td class="col number">${item.current_price}</td>
        <td
          class="col number"
          class:red={item.price_change_percentage_24h < 0}
          class:green={item.price_change_percentage_24h > 0}
          >{item.price_change_percentage_24h}%</td
        >
        <td class="col number">${item.market_cap}</td>
        <td class="col number">${item.ath}</td>
        <td class="col number">{item.ath_change_percentage}%</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  .tab {
    min-width: 800px;
    margin: auto;
  }
  .row {
    border-bottom: 1px solid #e0e0e0;
    height: 50px;
  }
  .col {
    margin: auto;
  }
  .index {
    width: 50px;
  }
  .number {
    text-align: right;
  }
  .header {
    font-weight: bold;
    font-size: larger;
  }
  .symbol {
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
    height: 50px;
  }
  .coin_symbol{
      text-transform: uppercase;
  }
  .image {
    height: 25px;
  }
  .green {
    color: green;
  }
  .red {
    color: red;
  }
</style>
