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

export function ProductDetail() {
  return (
    <ScreenContainer>
      <TopBar>
        <BackButton>
          <ScreenTitle>← Detalhe</ScreenTitle>
        </BackButton>
      </TopBar>

      <DetailImage
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/pt/4/47/MISS%C3%83O_logo.png",
        }}
      />

      <DetailContent>
        <CategoryLabel>Teste</CategoryLabel>

        <DetailTitle>Mens Casual Premium Slim Fit T-Shirts</DetailTitle>

        <PriceRow>
          <DetailPrice>$59,99</DetailPrice>
          <RatingText>3.9 (120)</RatingText>
        </PriceRow>

        <DetailDescription>
          Esta é a descrição de teste do produto. Esta é a descrição de teste do
          produto. Esta é a descrição de teste do produto.
        </DetailDescription>

        <QuantityText>Quantidade</QuantityText>

        <QuantityStepper>
          <StepperButton>
            <StepperText>-</StepperText>
          </StepperButton>

          <QuantityValue>1</QuantityValue>

          <StepperButton>
            <StepperText>+</StepperText>
          </StepperButton>
        </QuantityStepper>
      </DetailContent>

      <AddToCartBar>
        <AddToCartButton>
          <AddToCardText>Adicionar ao carrinho</AddToCardText>
        </AddToCartButton>
      </AddToCartBar>
    </ScreenContainer>
  );
}
