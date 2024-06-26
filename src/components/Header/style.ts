import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 88px;
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.font.title.size};
  font-weight: ${(props) => props.theme.font.title.weight};
  color: ${(props) => props.theme.color.white};
  cursor: pointer;
`;

export const ContainerCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90px;
  div {
    text-align: right;
  }
  h2 {
    display: none;
    font-size: ${(props) => props.theme.font.header.size};
    font-weight: ${(props) => props.theme.font.header.weight};
    color: ${(props) => props.theme.color.white};
  }
  @media screen and (min-width: 716px) {
    width: auto;
    h2 {
      display: block;
    }
  }
  span {
    font-size: ${(props) => props.theme.font.itens.size};
    font-weight: ${(props) => props.theme.font.itens.weight};
    color: ${(props) => props.theme.color.gray};
  }
  cursor: pointer;
`;
