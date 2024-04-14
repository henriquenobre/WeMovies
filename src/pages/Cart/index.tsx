import { Header } from "../../components/Header";
import { formatPrice } from "../../utils/format";
import {
  AmountContainer,
  Container,
  DescriptionContainer,
  DescriptionHeaderContainer,
  IconImage,
  ItensContainer,
  SubContainer,
  TiTleContainer,
  TotalContainer,
} from "./style";
import TrashIcon from "../../assets/Trash.svg";
import MinusIcon from "../../assets/minus.svg";
import PlusIcon from "../../assets/plus.svg";
import { Button } from "../../components/Button";

export const Cart = () => {
  return (
    <Container>
      <Header />
      <ItensContainer>
        <DescriptionHeaderContainer>
          <h2>PRODUTO</h2>
          <h2>QTD</h2>
          <h2>SUBTOTAL</h2>
        </DescriptionHeaderContainer>
        <SubContainer>
          <img
            src="https://wefit-react-web-test.s3.amazonaws.com/spider-man.png"
            alt=""
          />
          <DescriptionContainer>
            <TiTleContainer>
              <h2>Homem Aranha</h2>
              <span>{formatPrice(29.99)}</span>
              <img src={TrashIcon} alt="" />
            </TiTleContainer>
            <AmountContainer>
              <img src={MinusIcon} alt="" />
              <span>1</span>
              <img src={PlusIcon} alt="" />
              <div>
                <h2>SUBTOTAL</h2>
                <p>{formatPrice(29.99)}</p>
              </div>
            </AmountContainer>
          </DescriptionContainer>
          <IconImage src={TrashIcon} alt="" />
        </SubContainer>
        <TotalContainer>
          <div>
            <h2>TOTAL</h2>
            <span>{formatPrice(29.99)}</span>
          </div>
          <Button color="blue" onClick={() => {}} text="FINALIZAR PEDIDO" />
        </TotalContainer>
      </ItensContainer>
    </Container>
  );
};
