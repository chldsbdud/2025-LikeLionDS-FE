import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import * as C from "./styles/CommonStyle.js";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <C.Page>
        <App />
      </C.Page>
    </Router>
  </StrictMode>,
);
