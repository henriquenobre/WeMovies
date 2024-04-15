import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`;

export const ItensContainer = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 16px;
`;

export const DescriptionHeaderContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  display: none;
  h2 {
    font-size: ${(props) => props.theme.font.cart.size};
    font-weight: ${(props) => props.theme.font.cart.weight};
    color: ${(props) => props.theme.color.gray};
  }
  @media screen and (min-width: 715px) {
    display: flex;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.color.gray};
  margin-bottom: 10px;
  img {
    height: 82px;
    width: 64px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 715px) {
    padding-bottom: 20px;
    img {
      margin-bottom: 0px;
    }
  }
  @media screen and (max-width: 250px) {
    flex-direction: column;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  @media screen and (min-width: 715px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
  }
`;

export const TiTleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: ${(props) => props.theme.font.cart.size};
    font-weight: ${(props) => props.theme.font.cart.weight};
    color: ${(props) => props.theme.color.dark};
    width: 50px;
    margin-right: 75px;
  }
  span {
    font-size: ${(props) => props.theme.font.currency.size};
    font-weight: ${(props) => props.theme.font.currency.weight};
    color: ${(props) => props.theme.color.dark};
    margin-right: 15px;
  }
  img {
    height: auto;
    width: auto;
    margin-bottom: 0px;
    cursor: pointer;
  }
  @media screen and (min-width: 715px) {
    flex-direction: column;
    align-items: start;
    h2 {
      width: 105px;
      margin-right: 0px;
      text-align: start;
    }
    img {
      display: none;
    }
  }
  @media screen and (max-width: 344px) {
    h2 {
      width: 100%;
      margin-right: 0px;
      text-align: start;
    }
  }
  @media screen and (max-width: 259px) {
    flex-direction: column;
  }
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  img {
    height: auto;
    width: auto;
    margin-bottom: 0px;
    cursor: pointer;
  }
  span {
    height: 26px;
    width: 59px;
    border-radius: 4px;
    padding-top: 4px;
    border: 1px solid ${(props) => props.theme.color.gray};
    text-align: center;
  }
  h2 {
    font-size: ${(props) => props.theme.font.button.size};
    font-weight: ${(props) => props.theme.font.button.weight};
    color: ${(props) => props.theme.color.gray};
  }
  p {
    font-size: ${(props) => props.theme.font.currency.size};
    font-weight: ${(props) => props.theme.font.currency.weight};
    color: ${(props) => props.theme.color.dark};
  }
  @media screen and (max-width: 337px) {
    flex-direction: column;
  }
  @media screen and (min-width: 716px) and (max-width: 1200px) {
    margin-top: 0px;
    margin-left: 45px;
    div {
      margin-left: 44px;
    }
    h2 {
      display: none;
    }
  }
  @media screen and (min-width: 1201px) {
    margin-top: 0px;
    margin-left: 175px;
    div {
      margin-left: 175px;
    }
    h2 {
      display: none;
    }
  }
`;

export const IconImage = styled.img`
  display: none;
  width: auto !important;
  height: auto !important;
  cursor: pointer;
  @media screen and (min-width: 715px) {
    display: flex;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 21px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  h2 {
    font-size: ${(props) => props.theme.font.cart.size};
    font-weight: ${(props) => props.theme.font.cart.weight};
    color: ${(props) => props.theme.color.gray};
  }
  span {
    font-size: ${(props) => props.theme.font.cartTotal.size};
    font-weight: ${(props) => props.theme.font.cartTotal.weight};
    color: ${(props) => props.theme.color.dark};
  }
  @media screen and (min-width: 715px) {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;
    div {
      display: flex;
      gap: 10px;
      margin-bottom: 0px;
    }
  }
`;
