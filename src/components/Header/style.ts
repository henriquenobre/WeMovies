import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 88px;
  padding: 0 16px 0 16px;
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.font.title.size};
  font-weight: ${(props) => props.theme.font.title.weight};
  color: ${(props) => props.theme.color.white};
`;

export const ContainerCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90px;
  span {
    font-size: ${(props) => props.theme.font.itens.size};
    font-weight: ${(props) => props.theme.font.itens.weight};
    color: ${(props) => props.theme.color.gray};
  }
`;
