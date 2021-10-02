// coingecko.js
// Implementations for all the calls for the coingecko endpoints.
import Api from "./api";

// Method to get a list of top 20 crypto marketcap
export const getTop20Marketcap = async () => {
  try {
    const response = await Api.get(
      "/coins/markets?vs_currency=usd&per_page=20&page=1"
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

// Get a pokemon details by name
export const getCoinById = async (id) => {
  try {
    const response = await Api.get(`/coins/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
