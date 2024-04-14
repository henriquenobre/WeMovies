import { Header } from "../../components/Header";
import { formatPrice } from "../../utils/format";
import {
  AmountContainer,
  Container,
  DescriptionContainer,
  DescriptionHeaderContainer,
  IconImage,
  ItensContainer,
  SubContainer,
  TiTleContainer,
  TotalContainer,
} from "./style";
import TrashIcon from "../../assets/Trash.svg";
import MinusIcon from "../../assets/minus.svg";
import PlusIcon from "../../assets/plus.svg";
import { Button } from "../../components/Button";
import { useCart } from "../../context/CartContext";
import { Feedback } from "../../components/Feedback";
import { MovieProps } from "../Home";
import { useState } from "react";

interface MovieItem extends MovieProps {
  quantity: number;
}

export const Cart = () => {
  const {
    cart,
    totalPrice,
    removeFromCart,
    removeQuantityFromCart,
    addToCart,
  } = useCart();

  const [orderFinish, setOrderFinish] = useState(false);

  return (
    <Container>
      <Header />
      {!orderFinish ? (
        <>
          {cart.length ? (
            <ItensContainer>
              <DescriptionHeaderContainer>
                <h2>PRODUTO</h2>
                <h2>QTD</h2>
                <h2>SUBTOTAL</h2>
              </DescriptionHeaderContainer>
              {cart.map((movie: MovieItem) => {
                return (
                  <SubContainer key={movie.id}>
                    <img src={movie.image} alt="" />
                    <DescriptionContainer>
                      <TiTleContainer>
                        <h2>{movie.title}</h2>
                        <span>{formatPrice(movie.price)}</span>
                        <img
                          src={TrashIcon}
                          alt=""
                          onClick={() => removeFromCart(movie.id)}
                        />
                      </TiTleContainer>
                      <AmountContainer>
                        <img
                          src={MinusIcon}
                          alt=""
                          onClick={() => removeQuantityFromCart(movie.id)}
                        />
                        <span>{movie.quantity}</span>
                        <img
                          src={PlusIcon}
                          alt=""
                          onClick={() => addToCart(movie)}
                        />
                        <div>
                          <h2>SUBTOTAL</h2>
                          <p>{formatPrice(movie.quantity * movie.price)}</p>
                        </div>
                      </AmountContainer>
                    </DescriptionContainer>
                    <IconImage
                      src={TrashIcon}
                      alt=""
                      onClick={() => removeFromCart(movie.id)}
                    />
                  </SubContainer>
                );
              })}
              <TotalContainer>
                <div>
                  <h2>TOTAL</h2>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <Button
                  color="blue"
                  onClick={() => {
                    setOrderFinish(true);
                  }}
                  text="FINALIZAR PEDIDO"
                />
              </TotalContainer>
            </ItensContainer>
          ) : (
            <Feedback action="empty" />
          )}
        </>
      ) : (
        <Feedback action="success" />
      )}
    </Container>
  );
};
