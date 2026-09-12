import { SafeAreaProvider } from "react-native-safe-area-context";
import { CartScreen } from "./src/screens/CartScreen";

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#000" }}>
      <CartScreen />
    </SafeAreaProvider>
  );
}
