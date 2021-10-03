<script>
  import { onMount } from "svelte";
import CryptoRow from "./CryptoRow.svelte";
  import { getTop20Marketcap, getSearchTrend } from "./services/Api/coingecko";

  // Get the data from the api, after the page is mounted.
  let top20Marketcap = [];
  onMount(async () => {
    const res = await getTop20Marketcap();
    top20Marketcap = res;
  });
</script>

<div class="tab">
  {#each top20Marketcap as item (item.id)}
    <div class="tab-item">
        <CryptoRow item={item}/>
    </div>
  {/each}
</div>

<style>
  .tab {
    display: flex;
    flex-direction: column;
  }
  .tab-item {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
</style>
