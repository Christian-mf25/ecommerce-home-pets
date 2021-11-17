import { BrowserRouter } from "react-router-dom";
import Providers from "./Providers";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
