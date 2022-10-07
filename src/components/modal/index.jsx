import {
  Container,
  ContainerDescription,
  ContainerName,
  Number,
  Type,
} from "./style";
import { AiOutlineArrowLeft } from "react-icons/ai";

import Pokemon from "../../assets/pokemon.png";
import Pokebola from "../../assets/pokebola.svg";

export const Modal = ({}) => {
  const types = ["Grass", "Poison"];

  return (
    <Container>
      <ContainerName>
        <div className="container-name">
          <AiOutlineArrowLeft />
          <p>Bulbasaur</p>
        </div>

        <Number>#001</Number>
      </ContainerName>
      <img className="z-index" src={Pokemon} alt="Pokemon" />
      <img className="pokebola" src={Pokebola} alt="Pokebola" />
      <ContainerDescription>
        <div className="container-types">
          {types.map((type) => (
            <Type>{type}</Type>
          ))}
        </div>

        <p className="about">About</p>

        <div>
         <div>
         <div>
          <FaWeight/>
          <p>6,9 kg</p>
          </div>
          <p>Weight</p>
         </div>
        </div>
      </ContainerDescription>
    </Container>
  );
};
