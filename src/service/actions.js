import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/pokemon";

export const Api = {
  loadingUrl: () => {
    const allUrl = [];
    for (let i = 1; i <= 50; i++) {
      allUrl.push(`${baseURL}/${i}`);
    }
    return allUrl;
  },

  getPokemons: async () => {
    return await axios.all(
      Api.loadingUrl().map((url) => axios.get(url).then(({ data }) => data))
    );
  },
};
