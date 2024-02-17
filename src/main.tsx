import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PromptProvider } from "./contexts/PromptContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PromptProvider>
      <App />
    </PromptProvider>
  </React.StrictMode>,
);
