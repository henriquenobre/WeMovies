import styled from "styled-components";

export const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 16px;
`;

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 5px;
  font-size: ${(props) => props.theme.font.input.size};
  font-weight: ${(props) => props.theme.font.input.weight};
  color: ${(props) => props.theme.color.dark};
`;
