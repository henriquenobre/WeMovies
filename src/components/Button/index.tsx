import { MouseEventHandler } from "react";
import { StyledButton } from "./style";
import AddIcon from "../../assets/addCart.svg";

export interface ButtonProps {
  text?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  width?: "sm" | "lg";
  color?: "blue" | "green";
  icon?: boolean;
  amount?: number;
}

export const Button = ({ text, onClick, color, icon, amount }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} color={color} amount={amount}>
      {icon && <img src={AddIcon} />}
      <span id="amountButton">{amount}</span>
      {<p id="textButton">{text}</p>}
    </StyledButton>
  );
};
