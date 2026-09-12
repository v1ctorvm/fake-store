import {
  BackButton,
  CartItem,
  ItemImage,
  ItemTitle,
  ScreenContainer,
  ScreenTitle,
  TopBar,
} from "./styles";

const imageSource =
  "https://upload.wikimedia.org/wikipedia/pt/4/47/MISS%C3%83O_logo.png";

export function CartScreen() {
  return (
    <ScreenContainer>
      <TopBar>
        <BackButton>
          <ScreenTitle> ← Carrinho</ScreenTitle>
        </BackButton>
      </TopBar>

      <CartItem>
        <ItemImage source={{ uri: imageSource }} />
        <ItemTitle>Teste Carrinho</ItemTitle>
      </CartItem>
    </ScreenContainer>
  );
}
