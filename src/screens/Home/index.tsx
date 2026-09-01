import { useEffect, useState } from "react";
import { BottomBar } from "../../components/BottomBar";
import { CategoryChip } from "../../components/CategoryChip";
import { ProductCard } from "../../components/ProductCard";
import {
  CategoryList,
  EmptyText,
  Header,
  ProductGrid,
  ScreenContainer,
  ScreenTitle,
  SearchInput,
} from "./styles";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>(["Todos"]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState("Inicio");

  useEffect(() => {
    async function loadProducts() {
      await fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }

    async function loadCategories() {
      await fetch("https://fakestoreapi.com/products/categories")
        .then((response) => response.json())
        .then((data) => setCategories(["Todos", ...data]));
    }

    loadProducts();
    loadCategories();
  }, []);

  function handleSelectCategory(category: string) {
    setSelectedCategory(category);
  }

  function handleSelectProduct(product: Product) {
    setSelectedProduct(product);
    console.log("Produto selecionado:", product.title);
  }

  function handleChangeTab(tab: string) {
    setActiveTab(tab);
  }

  const visibleProducts = products.filter((product) => {
    const term = search.toLowerCase();

    const sameCategory =
      selectedCategory === "Todos" || product.category === selectedCategory;
    const sameSearch = product.title.toLowerCase().includes(term);

    return sameCategory && sameSearch;
  });

  return (
    <ScreenContainer>
      <Header>
        <ScreenTitle>Loja</ScreenTitle>

        <SearchInput
          placeholder="Buscar produtos"
          value={search}
          onChangeText={setSearch}
        />

        <CategoryList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <CategoryChip
              name={item}
              active={item === selectedCategory}
              onPress={() => handleSelectCategory(item)}
            />
          )}
        />
      </Header>

      <ProductGrid
        data={visibleProducts}
        numColumns={2}
        columnWrapperStyle={{ gap: 14 }}
        contentContainerStyle={{ padding: 20, gap: 14 }}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => {
          const imageSource = { uri: item.image };

          return (
            <ProductCard
              title={item.title}
              price={item.price}
              rate={item.rating.rate}
              count={item.rating.count}
              imageSource={imageSource}
              onPress={() => handleSelectProduct(item)}
            />
          );
        }}
        ListEmptyComponent={() => (
          <EmptyText>Nenhum produto encontrado</EmptyText>
        )}
      />

      <BottomBar activeTab={activeTab} onChangeTab={handleChangeTab} />
    </ScreenContainer>
  );
}
