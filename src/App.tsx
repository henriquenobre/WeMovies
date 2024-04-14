import { ThemeProvider } from "styled-components";
import Theme from "./styles/theme";
import { Routers } from "./routes";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Routers />
    </ThemeProvider>
  );
}

export default App;
