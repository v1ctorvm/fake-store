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

type HomeProps = {
  onOpenCart: () => void;
  onSelectProduct: (product: Product) => void;
};

export function Home({ onOpenCart, onSelectProduct }: HomeProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts = products
    .filter(
      (product) =>
        selectedCategory === "Todos" || product.category === selectedCategory,
    )
    .filter((product) =>
      product.title.toLowerCase().includes(search.trim().toLowerCase()),
    );

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
        <SearchInput
          placeholder="Buscar Produtos..."
          value={search}
          onChangeText={setSearch}
        />
        <CategoryList
          horizontal
          data={categories}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <CategoryChip onPress={() => setSelectedCategory(item)}>
              <CategoryText selected={selectedCategory === item}>
                {item}
              </CategoryText>
            </CategoryChip>
          )}
        />
      </Header>
      <ProductGrid
        data={filteredProducts}
        renderItem={({ item }) => (
          <ProductCard onPress={() => onSelectProduct(item)}>
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
        <BottomBarButton onPress={onOpenCart}>
          <Text>Carrinho</Text>
        </BottomBarButton>
        <BottomBarButton>
          <Text>Perfil</Text>
        </BottomBarButton>
      </BottomBar>
    </ScreenContainer>
  );
}
