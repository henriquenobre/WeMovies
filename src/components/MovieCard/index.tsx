import { useState } from "react";
import { formatPrice } from "../../utils/format";
import { Button } from "../Button";
import { Container } from "./style";
import { Loading } from "../Loading";

interface MovieCardProps {
  image: string;
  text: string;
  amount: number;
}

export const MovieCard = ({ image, text, amount }: MovieCardProps) => {
  const [loading, setLoading] = useState(false);
  const handleImageLoad = () => {
    console.log("entrou");

    setLoading(false);
  };
  return (
    <Container>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <img
          src={image}
          alt=""
          onLoad={() => handleImageLoad}
          onLoadedData={handleImageLoad}
        />
      )}

      <p>{text}</p>
      <span>{formatPrice(amount)}</span>
      <Button onClick={() => {}} text="ADICIONAR AO CARRINHO" color="blue" />
    </Container>
  );
};
