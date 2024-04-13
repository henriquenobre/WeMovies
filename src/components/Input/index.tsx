import { StyledInput, StyledInputContainer } from "./style";
import SearchIcon from "../../assets/search.svg";

export const Input = () => {
  return (
    <StyledInputContainer>
      <StyledInput placeholder="Buscar filme pelo nome" />
      <img src={SearchIcon} />
    </StyledInputContainer>
  );
};
