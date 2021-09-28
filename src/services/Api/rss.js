// pokemon.js
// Implementations for all the calls for the pokemon endpoints.
import Api from "./api";

// Method to get a list of all Pokemon
export const getPokemonList = async () => {
  try {
    const response = await Api.get("/coins/markets?vs_currency=usd&per_page=20&page=1");
    await console.log(response)
    return response;
  } catch (error) {
    console.error(error);
  }
};

// Get a pokemon details by name
export const getPokemonByName = async (name) => {
  try {
    const response = await Api.get(`/pokemon/${name}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
