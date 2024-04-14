import { ThemeProvider } from "styled-components";
import Theme from "./styles/theme";
import { Routers } from "./routes";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CartProvider>
        <Routers />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
