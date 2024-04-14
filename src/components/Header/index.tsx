import { Container, ContainerCart, Title } from "./style";
import Basket from "../../assets/basket.svg";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export const Header = () => {
  const navigate = useNavigate();
  const { totalItems } = useCart();

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
        <div>
          <h2>Meu Carrinho</h2>
          <span>
            {totalItems} {totalItems === 1 ? "item" : "itens"}
          </span>
        </div>
        <img src={Basket} alt="" />
      </ContainerCart>
    </Container>
  );
};
