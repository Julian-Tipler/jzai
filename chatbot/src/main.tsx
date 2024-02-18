import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PromptProvider } from "./contexts/PromptContext.tsx";

const init = () => {
  const appDiv = document.createElement("div");
  appDiv.id = "chatbot";
  document.body.appendChild(appDiv);

  ReactDOM.createRoot(document.getElementById("chatbot")!).render(
    <React.StrictMode>
      <PromptProvider>
        <App />
      </PromptProvider>
    </React.StrictMode>,
  );
};

init();
