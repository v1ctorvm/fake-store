import { useState } from "react";

import {
  BackButton,
  CartItem,
  CartList,
  CartSummary,
  CheckoutButton,
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
};

export function CartScreen({ items }: ProductItemProps) {
  const [cartItems, setCartItems] = useState(items);

  function changeQuantity(id: number, newQuantity: number) {
    setCartItems((currentItems) =>
      currentItems.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: Math.max(1, newQuantity),
            }
          : product,
      ),
    );
  }

  let subTotal = 0;

  cartItems.forEach((item) => {
    subTotal += item.price * item.quantity;
  });

  const frete = subTotal * 0.1;
  const total = subTotal + frete;

  return (
    <ScreenContainer>
      <TopBar>
        <BackButton>
          <ScreenTitle>← Carrinho</ScreenTitle>
        </BackButton>
      </TopBar>

      <CartList
        data={cartItems}
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
                onPress={() => changeQuantity(item.id, item.quantity - 1)}
              >
                <QuantityText>−</QuantityText>
              </QuantityButton>

              <QuantityText>{item.quantity}</QuantityText>

              <QuantityButton
                onPress={() => changeQuantity(item.id, item.quantity + 1)}
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

      <CheckoutButton />
    </ScreenContainer>
  );
}
