import styled from "styled-components";
import { ButtonProps } from "./index";

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border: none;
  border-radius: 4px;
  width: ${(props) => (props.width === "sm" ? "173px" : "296px")};
  background-color: ${(props) =>
    props.color === "blue" ? props.theme.color.blue : props.theme.color.green};
  font-size: ${(props) => props.theme.font.button.size};
  font-weight: ${(props) => props.theme.font.button.weight};
  color: ${(props) => props.theme.color.white};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.color === "blue"
        ? props.theme.color.darkBlue
        : props.theme.color.green};
  }

  &:focus {
    outline: none;
  }

  img {
    height: 12px !important;
    width: 12px !important;
  }

  span {
    display: ${(props) => (props.amount === undefined ? "none" : "flex")};
  }

  #amountButton {
    margin: 0 12px 0 4px;
    font-size: ${(props) => props.theme.font.button.size};
    font-weight: ${(props) => props.theme.font.button.weight};
    color: ${(props) => props.theme.color.white};
  }

  #textButton {
    font-size: ${(props) => props.theme.font.button.size};
    font-weight: ${(props) => props.theme.font.button.weight};
    color: ${(props) => props.theme.color.white};
  }

  @media screen and (max-width: 344px) {
    width: 100%;
  }
`;
