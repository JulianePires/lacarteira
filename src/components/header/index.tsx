import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionalModal: () => void;
}

export function Header({ onOpenNewTransactionalModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="la carteira" />
        <button type="button" onClick={onOpenNewTransactionalModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
