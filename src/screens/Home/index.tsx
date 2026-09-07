import { useEffect, useState } from "react";
import { Text } from "react-native";
import {
  BottomBar,
  BottomBarButton,
  CategoryChip,
  CategoryList,
  CategoryText,
  Header,
  ProductCard,
  ProductGrid,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductRating,
  ProductTitle,
  ScreenContainer,
  ScreenTitle,
  SearchInput,
} from "./styles";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    async function loadProducts() {
      await fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }

    loadProducts();
  }, []);

  useEffect(() => {
    async function loadCategories() {
      await fetch("https://fakestoreapi.com/products/categories")
        .then((response) => response.json())
        .then((data) => setCategories(["Todos", ...data]));
    }

    loadCategories();
  }, []);

  return (
    <ScreenContainer edges={["top"]}>
      <Header>
        <ScreenTitle>The Utimate Fake Store</ScreenTitle>
        <SearchInput placeholder="Buscar Produtos..." />
        <CategoryList
          horizontal
          data={categories}
          renderItem={({ item }: { item: string }) => (
            <CategoryChip>
              <CategoryText>{item}</CategoryText>
            </CategoryChip>
          )}
        />
      </Header>
      <ProductGrid
        data={products}
        renderItem={({ item }: { item: Product }) => (
          <ProductCard>
            <ProductImage source={{ uri: item.image }} resizeMode="contain" />
            <ProductInfo>
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>R$ {item.price}</ProductPrice>
              <ProductRating>
                {item.rating.rate} ({item.rating.count})
              </ProductRating>
            </ProductInfo>
          </ProductCard>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />

      <BottomBar>
        <BottomBarButton>
          <Text>Inicio</Text>
        </BottomBarButton>
        <BottomBarButton>
          <Text>Buscar</Text>
        </BottomBarButton>
        <BottomBarButton>
          <Text>Carrinho</Text>
        </BottomBarButton>
        <BottomBarButton>
          <Text>Perfil</Text>
        </BottomBarButton>
      </BottomBar>
    </ScreenContainer>
  );
}
