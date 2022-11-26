import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { colors } from "./styles/theme";
import TodoListContextProvider from "./context/todoListContext";
import GlobalStyle from "./styles/GlobalStyle";
import { AlertModalProvider } from "./context/alertModalContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={colors}>
      <TodoListContextProvider>
        <AlertModalProvider>
          <GlobalStyle />
          <App />
        </AlertModalProvider>
      </TodoListContextProvider>
    </ThemeProvider>
  </BrowserRouter>
);
