import { Container, ContainerCart, Title } from "./style";
import Basket from "../../assets/basket.svg";

export const Header = () => {
  return (
    <Container>
      <Title>WeMovies</Title>
      <ContainerCart>
        <span>0 itens</span>
        <img src={Basket} alt="" />
      </ContainerCart>
    </Container>
  );
};
