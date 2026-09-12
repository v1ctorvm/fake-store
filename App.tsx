import { SafeAreaProvider } from "react-native-safe-area-context";
import { CartScreen } from "./src/screens/CartScreen";

const ProductItem = [
  {
    id: 1,
    title: "Mochila Fjallraven",
    price: 109.95,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7xpUYExTJNViqhmWukzR3bc0vahG4qKViQcyhl1KM-Q&s",
    quantity: 1,
  },
  {
    id: 2,
    title: "Camiseta masculina",
    price: 22.3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7xpUYExTJNViqhmWukzR3bc0vahG4qKViQcyhl1KM-Q&s",
    quantity: 1,
  },
  {
    id: 3,
    title: "Camiseta masculina",
    price: 22.3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7xpUYExTJNViqhmWukzR3bc0vahG4qKViQcyhl1KM-Q&s",
    quantity: 1,
  },
  {
    id: 4,
    title: "Camiseta masculina",
    price: 22.3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7xpUYExTJNViqhmWukzR3bc0vahG4qKViQcyhl1KM-Q&s",
    quantity: 1,
  },
];

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#000" }}>
      <CartScreen items={ProductItem} />
    </SafeAreaProvider>
  );
}
