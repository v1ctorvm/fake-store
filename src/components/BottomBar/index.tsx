import { BottomBarButton, Container, Label } from "./styles";

const TABS = ["Inicio", "Buscar", "Carrinho", "Perfil"];

interface BottomBarProps {
  activeTab: string;
  onChangeTab?: (tab: string) => void;
}

export function BottomBar({ activeTab, onChangeTab }: BottomBarProps) {
  return (
    <Container>
      {TABS.map((tab) => (
        <BottomBarButton key={tab} onPress={() => onChangeTab?.(tab)}>
          <Label active={tab === activeTab}>{tab}</Label>
        </BottomBarButton>
      ))}
    </Container>
  );
}
