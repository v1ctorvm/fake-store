import {
  BackButton,
  CartItem,
  CartList,
  CartSummary,
  CheckoutButton,
  CheckoutText,
  ItemImage,
  ItemInfo,
  ItemPrice,
  ItemTitle,
  QuantityButton,
  QuantityStepper,
  QuantityText,
  ScreenContainer,
  ScreenTitle,
  SummaryContainer,
  SummaryLabel,
  SummaryValue,
  TopBar,
} from "./styles";

export type ProductItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type ProductItemProps = {
  items: ProductItem[];
  onBack: () => void;
  onChangeQuantity: (id: number, newQuantity: number) => void;
};

export function CartScreen({
  items,
  onBack,
  onChangeQuantity,
}: ProductItemProps) {
  let subTotal = 0;

  items.forEach((item) => {
    subTotal += item.price * item.quantity;
  });

  const frete = subTotal * 0.12;
  const total = subTotal + frete;

  return (
    <ScreenContainer>
      <TopBar>
        <BackButton onPress={onBack}>
          <ScreenTitle>← Carrinho</ScreenTitle>
        </BackButton>
      </TopBar>

      <CartList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CartItem>
            <ItemImage source={{ uri: item.image }} />

            <ItemInfo>
              <ItemTitle>{item.title}</ItemTitle>

              <ItemPrice>R$ {item.price.toFixed(2)}</ItemPrice>
            </ItemInfo>

            <QuantityStepper>
              <QuantityButton
                onPress={() => onChangeQuantity(item.id, item.quantity - 1)}
              >
                <QuantityText>−</QuantityText>
              </QuantityButton>

              <QuantityText>{item.quantity}</QuantityText>

              <QuantityButton
                onPress={() => onChangeQuantity(item.id, item.quantity + 1)}
              >
                <QuantityText>+</QuantityText>
              </QuantityButton>
            </QuantityStepper>
          </CartItem>
        )}
      />

      <CartSummary>
        <SummaryContainer>
          <SummaryLabel>Subtotal</SummaryLabel>

          <SummaryValue>R$ {subTotal.toFixed(2)}</SummaryValue>
        </SummaryContainer>

        <SummaryContainer>
          <SummaryLabel>Frete</SummaryLabel>

          <SummaryValue>R$ {frete.toFixed(2)}</SummaryValue>
        </SummaryContainer>

        <SummaryContainer>
          <SummaryLabel>Total</SummaryLabel>

          <SummaryValue>R$ {total.toFixed(2)}</SummaryValue>
        </SummaryContainer>
      </CartSummary>

      <CheckoutButton>
        <CheckoutText>Finalizar Compra</CheckoutText>
      </CheckoutButton>
    </ScreenContainer>
  );
}
