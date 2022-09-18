import App from "./App";
import React from "react";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "tw-elements";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
