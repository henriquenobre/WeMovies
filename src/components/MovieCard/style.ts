import styled from "styled-components";

export const Container = styled.div`
  height: 324px;
  width: 338px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  img {
    height: 188px;
    width: 147px;
  }
  p {
    font-size: ${(props) => props.theme.font.cart.size};
    font-weight: ${(props) => props.theme.font.cart.weight};
    color: ${(props) => props.theme.color.dark};
  }
  span {
    font-size: ${(props) => props.theme.font.currency.size};
    font-weight: ${(props) => props.theme.font.currency.weight};
    color: ${(props) => props.theme.color.dark};
  }
`;
