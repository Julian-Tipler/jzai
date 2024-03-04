import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const init = () => {
  const appDiv = document.createElement("div");
  appDiv.id = "chatbot-app";
  document.body.appendChild(appDiv);
  ReactDOM.createRoot(document.getElementById("chatbot-app")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
};

init();
