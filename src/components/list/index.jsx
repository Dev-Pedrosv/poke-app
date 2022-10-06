import { Container, Description, Item, Number } from "./style";
import Pokemon from "../../assets/Image.png";

export const List = ({ pokemonsList }) => {
  const formattedNumber = (number) => {
    return "#" + String(number)?.padStart(3, "0");
  };

  return (
    <Container>
      {pokemonsList.map((pokemons) => {
        return (
          <Item>
            <img src={pokemons?.sprites?.front_default} alt={pokemons?.name} />
            <Description>{pokemons?.name}</Description>
            <Number>{formattedNumber(pokemons?.id)}</Number>
          </Item>
        );
      })}
    </Container>
  );
};
