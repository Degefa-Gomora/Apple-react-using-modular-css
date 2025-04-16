import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../src/assets/js/bootstrap.js"
import "../src/assets/js/custom.js"


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
