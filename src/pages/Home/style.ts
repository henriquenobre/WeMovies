import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.font.title.size};
`;
