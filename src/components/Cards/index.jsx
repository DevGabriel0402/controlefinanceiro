import { CardItem } from "./CardItem";
import { Container } from "./style";

export const Resume = ({ entrada, saida, total }) => {
  return (
    <Container>
      <CardItem
        propriedade="Entrada"
        bg="#fafafa"
        icon="caret-up-circle"
        iconColor="blueviolet"
        value={entrada.replace(".", ",")}
      />
      <CardItem
        propriedade="Saída"
        bg="#fafafa"
        icon="caret-down-circle"
        iconColor="blueviolet"
        value={saida.replace(".", ",")}
      />
      <CardItem
        propriedade="Saldo"
        bg="#fafafa"
        icon="wallet-alt"
        iconColor="blueviolet"
        value={total.replace(".", ",")}
      />
    </Container>
  );
};
