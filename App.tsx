import { SafeAreaProvider } from "react-native-safe-area-context";
import { ProductDetail } from "./src/screens/ProductDetail";

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#000" }}>
      <ProductDetail />
    </SafeAreaProvider>
  );
}
