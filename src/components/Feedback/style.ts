import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 516px;
  background-color: ${(props) => props.theme.color.white};
  border-radius: 4px;
  img {
    margin-top: 24px;
  }
  div {
    width: 447px;
    height: 1px;
    background-color: ${(props) => props.theme.color.dark};
  }
  button {
    margin-top: 24px;
  }
  @media screen and (max-width: 715px) {
    div {
      width: 178px;
      height: 1px;
      background-color: ${(props) => props.theme.color.dark};
    }
  }
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.font.title.size};
  font-weight: ${(props) => props.theme.font.title.weight};
  color: ${(props) => props.theme.color.dark};
  @media screen and (max-width: 715px) {
    max-width: 200px;
  }
`;
