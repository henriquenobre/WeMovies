import { formatPrice } from "../../utils/format";
import { Button } from "../Button";
import { Container } from "./style";
import { MovieProps } from "../../pages/Home";
import { useCart } from "../../context/CartContext";

interface MovieCardProps {
  movie: MovieProps;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { addToCart, getTotalItemsOfMovie } = useCart();

  const handleClickAdd = () => {
    addToCart(movie);
  };

  const amountAdded = getTotalItemsOfMovie(movie.id);

  return (
    <Container>
      <img src={movie.image} alt="" />
      <p>{movie.title}</p>
      <span>{formatPrice(movie.price)}</span>
      <Button
        onClick={handleClickAdd}
        text="ADICIONAR AO CARRINHO"
        color={amountAdded === 0 ? "blue" : "green"}
        icon
        amount={amountAdded}
      />
    </Container>
  );
};
