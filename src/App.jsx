import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "./theme.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ margnTop: "6rem" }}>
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
