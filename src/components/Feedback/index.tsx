import { Button } from "../Button";
import { Container, Title } from "./style";
import Recharge from "../../assets/Recharge.svg";

interface FeedbackProps {
  text: string;
  action: string;
}

export const Feedback = ({ text, action }: FeedbackProps) => {
  return (
    <Container>
      <Title>{text}</Title>
      <img src={action === "recarregar" ? Recharge : Recharge} alt="" />
      <Button
        text={action === "recarregar" ? "Recarregar página" : "VOLTAR"}
        onClick={() => {}}
        color="blue"
        width="sm"
      />
    </Container>
  );
};
