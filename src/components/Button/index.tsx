import { MouseEventHandler } from "react";
import { StyledButton } from "./style";

export interface ButtonProps {
  text?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  width?: "sm" | "lg";
  color?: string;
}

export const Button = ({ text, onClick, color }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} color={color}>
      {text}
    </StyledButton>
  );
};
