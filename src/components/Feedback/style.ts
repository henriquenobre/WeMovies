import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 516px;
  background-color: ${(props) => props.theme.color.white};
  gap: 24px;
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.font.title.size};
  font-weight: ${(props) => props.theme.font.title.weight};
  color: ${(props) => props.theme.color.dark};
`;
