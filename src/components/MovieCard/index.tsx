import { formatPrice } from "../../utils/format";
import { Button } from "../Button";
import { Container } from "./style";

interface MovieCardProps {
  image: string;
  text: string;
  amount: number;
}

export const MovieCard = ({ image, text, amount }: MovieCardProps) => {
  return (
    <Container>
      <img src={image} alt="" />
      <p>{text}</p>
      <span>{formatPrice(amount)}</span>
      <Button onClick={() => {}} text="ADICIONAR AO CARRINHO" />
    </Container>
  );
};
