import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import Auction from "./components/Auction";
import Products from "./components/Products";
import "./App.css";
import theme from "./theme.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ margnTop: "6rem", mx: "15rem" }}>
        <Header />
        <Auction />
        <Products />
      </div>
    </ThemeProvider>
  );
}

export default App;
