import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import PlyaerContextProvider from "./context/PlyaerContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PlyaerContextProvider>
        <App />
      </PlyaerContextProvider>
    </BrowserRouter>
  </StrictMode>
);
