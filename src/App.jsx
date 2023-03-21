import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import Auction from "./components/Auction";
import "./App.css";
import theme from "./theme.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ margnTop: "6rem", px: "10rem" }}>
        <Header />
        <Auction />
      </div>
    </ThemeProvider>
  );
}

export default App;
