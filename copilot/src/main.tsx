import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { JZAI_ID, CONTAINER_CLASS } from "./helpers/constants.ts";
import "./index.css";

/**
 * Initialize the app by creating a root element and rendering the app.
 */
const init = () => {
  // Check if the container already exists.
  const existingContainer = document.getElementById(JZAI_ID);

  // If the container does not exist, create it.
  if (!existingContainer) {
    const container = document.createElement("div");

    container.id = JZAI_ID;
    container.className = CONTAINER_CLASS;

    document.body.appendChild(container);
  } else {
    existingContainer.className = `${CONTAINER_CLASS}--embedded`;
  }

  ReactDOM.createRoot(document.getElementById(JZAI_ID)!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
};

setTimeout(() => init(), 500);
