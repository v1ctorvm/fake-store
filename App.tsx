import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CartScreen, ProductItem } from "./src/screens/CartScreen";
import { ProductDetail } from "./src/screens/ProductDetailsScreen";
import { Home, Product } from "./src/screens/home";

type ScreenName = "home" | "detail" | "cart";

export default function App() {
  const [screen, setScreen] = useState<ScreenName>("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<ProductItem[]>([]);

  function openProductDetail(product: Product) {
    setSelectedProduct(product);
    setScreen("detail");
  }

  function addToCart(product: Product, quantity: number) {
    setCartItems((currentItems) => {
      const productAlreadyInCart = currentItems.find(
        (item) => item.id === product.id,
      );

      if (productAlreadyInCart) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [
        ...currentItems,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity,
        },
      ];
    });

    setScreen("cart");
  }

  function changeCartQuantity(id: number, newQuantity: number) {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item,
      ),
    );
  }

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#000" }}>
      {screen === "home" && (
        <Home
          onOpenCart={() => setScreen("cart")}
          onSelectProduct={openProductDetail}
        />
      )}

      {screen === "detail" && selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onAddToCart={addToCart}
          onBack={() => setScreen("home")}
        />
      )}

      {screen === "cart" && (
        <CartScreen
          items={cartItems}
          onBack={() => setScreen("home")}
          onChangeQuantity={changeCartQuantity}
        />
      )}
    </SafeAreaProvider>
  );
}
