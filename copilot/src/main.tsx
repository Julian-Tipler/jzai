import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { JZAI_ID, CONTAINER_CLASS } from "./helpers/constants.ts";
import "./index.css";

const init = () => {
  const container = document.createElement("div");

  container.id = JZAI_ID;
  container.className = CONTAINER_CLASS;

  document.body.appendChild(container);

  ReactDOM.createRoot(document.getElementById(JZAI_ID)!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
};

init();
