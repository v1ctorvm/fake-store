import { SafeAreaProvider } from "react-native-safe-area-context";
import { Home } from "./src/screens/home";

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#000" }}>
      <Home />
    </SafeAreaProvider>
  );
}
