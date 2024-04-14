import { Container, ContainerCart, Title } from "./style";
import Basket from "../../assets/basket.svg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };

  const handleClickCart = () => {
    navigate("/cart");
  };

  return (
    <Container>
      <Title onClick={handleClickHome}>WeMovies</Title>
      <ContainerCart onClick={handleClickCart}>
        <span>0 itens</span>
        <img src={Basket} alt="" />
      </ContainerCart>
    </Container>
  );
};
