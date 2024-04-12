import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import Theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
