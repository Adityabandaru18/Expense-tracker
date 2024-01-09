import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import ContextProvider from "./context/context.js";

const root = document.getElementById("root");
ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  root
);
