import { useState, useEffect } from "react";

import { Title, Screen, Flex } from "./styles";
import Pokebola from "./assets/pokebola.png";
import { Search } from "./components/search";
import { List } from "./components/list";
import { Api } from "./service/actions";

function App() {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [namePokemon, setNamePokemon] = useState("");

  useEffect(() => {
    const getPokemons = async () => {
      const data = await Api.getPokemons();
      setPokemonsList(data);
    };
    getPokemons();
  }, []);

  const handleSearch = (value) => {
    setNamePokemon(value);
  };

  const pokemonsFilterList = () => {
    return pokemonsList.filter(({ name }) => {
      return name?.includes(namePokemon.toLowerCase());
    });
  };

  const filteredPokemonsList = pokemonsFilterList();

  return (
    <Screen>
      <Flex align="self-start" justify="start">
        <img src={Pokebola} alt="Pokebola" />
        <Title>Pokédex</Title>
      </Flex>
      <Search onChange={(value) => handleSearch(value)} />

      <List pokemonsList={filteredPokemonsList} />
    </Screen>
  );
}

export default App;
