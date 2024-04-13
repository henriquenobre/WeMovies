import { styled } from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.color.dark};
`;

export const MovieContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;
