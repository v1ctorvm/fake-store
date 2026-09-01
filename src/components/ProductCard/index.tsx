import { ImageSourcePropType } from "react-native";
import {
  Container,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductRating,
  ProductTitle,
} from "./styles";

interface ProductCardProps {
  title: string;
  price: number;
  rate: number;
  count: number;
  imageSource: ImageSourcePropType;
  onPress?: () => void;
}

export function ProductCard({
  title,
  price,
  rate,
  count,
  imageSource,
  onPress,
}: ProductCardProps) {
  return (
    <Container onPress={onPress}>
      <ProductImage source={imageSource} resizeMode="contain" />

      <ProductInfo>
        <ProductTitle numberOfLines={2}>{title}</ProductTitle>
        <ProductPrice>{`R$ ${price.toFixed(2).replace(".", ",")}`}</ProductPrice>
        <ProductRating>{`★ ${rate} (${count})`}</ProductRating>
      </ProductInfo>
    </Container>
  );
}
