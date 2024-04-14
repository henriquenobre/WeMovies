import { Button } from "../Button";
import { Container, Title } from "./style";
import RechargeImage from "../../assets/Recharge.svg";
import SucceessImage from "../../assets/success.svg";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

interface FeedbackProps {
  action: "recharge" | "empty" | "success";
}

export const Feedback = ({ action }: FeedbackProps) => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const handleClickButton = () => {
    action === "recharge" ? window.location.reload() : navigate("/");
    clearCart();
  };

  return (
    <Container>
      <Title>
        {action === "success"
          ? "Compra realizada com sucesso!"
          : "Parece que não há nada por aqui :("}
      </Title>
      <img src={action === "success" ? SucceessImage : RechargeImage} alt="" />
      <div></div>
      <Button
        text={action === "recharge" ? "Recarregar página" : "VOLTAR"}
        onClick={handleClickButton}
        color="blue"
        width="sm"
      />
    </Container>
  );
};
