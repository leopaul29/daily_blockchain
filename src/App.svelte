<script>
  import { onMount } from "svelte";
  import { getPokemonList, getPokemonByName } from "./services/Api/rss";

  // Get the data from the api, after the page is mounted.
  let pokemonList = [];
  onMount(async () => {
    const res = await getPokemonList();
    pokemonList = res;
  });
</script>

<main>
  <h1>Crypto marketcap</h1>
  <ul>
    {#each pokemonList as item, i (item.id)}
      <li>{item.id} : {item.symbol} - {item.current_price}</li>
    {/each}
  </ul>
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

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
