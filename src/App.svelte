<script>
  import CryptoTab from "./CryptoTab.svelte";
</script>

<main>
  <h1>Crypto TOP20 Marketcap</h1>
  <CryptoTab />
</main>

<style>
  main {
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    text-align: center;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
