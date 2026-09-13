import { useState } from "react";
import { Product } from "../home";
import {
  AddToCardText,
  AddToCartBar,
  AddToCartButton,
  BackButton,
  CategoryLabel,
  DetailContent,
  DetailDescription,
  DetailImage,
  DetailPrice,
  DetailTitle,
  PriceRow,
  QuantityStepper,
  QuantityText,
  QuantityValue,
  RatingText,
  ScreenContainer,
  ScreenTitle,
  StepperButton,
  StepperText,
  TopBar,
} from "./sytles";

type ProductDetailProps = {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
};

export function ProductDetail({
  product,
  onBack,
  onAddToCart,
}: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <ScreenContainer>
      <TopBar>
        <BackButton onPress={onBack}>
          <ScreenTitle>← Detalhe</ScreenTitle>
        </BackButton>
      </TopBar>

      <DetailImage
        source={{
          uri: product.image,
        }}
        resizeMode="contain"
      />

      <DetailContent>
        <CategoryLabel>{product.category}</CategoryLabel>

        <DetailTitle>{product.title}</DetailTitle>

        <PriceRow>
          <DetailPrice>R$ {product.price.toFixed(2)}</DetailPrice>
          <RatingText>
            {product.rating.rate} ({product.rating.count})
          </RatingText>
        </PriceRow>

        <DetailDescription>{product.description}</DetailDescription>

        <QuantityText>Quantidade</QuantityText>

        <QuantityStepper>
          <StepperButton
            onPress={() => setQuantity((current) => Math.max(1, current - 1))}
          >
            <StepperText>-</StepperText>
          </StepperButton>

          <QuantityValue>{quantity}</QuantityValue>

          <StepperButton onPress={() => setQuantity((current) => current + 1)}>
            <StepperText>+</StepperText>
          </StepperButton>
        </QuantityStepper>
      </DetailContent>

      <AddToCartBar>
        <AddToCartButton onPress={() => onAddToCart(product, quantity)}>
          <AddToCardText>Adicionar ao carrinho</AddToCardText>
        </AddToCartButton>
      </AddToCartBar>
    </ScreenContainer>
  );
}
