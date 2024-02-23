import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PromptProvider } from "./contexts/PromptContext.tsx";

const init = () => {
  // function initChatbot() {
  //   const appDiv = document.createElement("div");
  //   appDiv.id = "chatbot-container";
  //   document.body.appendChild(appDiv);

  //   const iframe = document.createElement("iframe");
  //   iframe.style.width = "100%"; // Set width
  //   iframe.style.height = "400px"; // Set height, adjust as necessary
  //   iframe.style.border = "none"; // Remove border

  //   // Construct the HTML content for the iframe using a data URI
  //   const iframeContent = `
  //     <!DOCTYPE html>
  //     <html lang="en">
  //     <head>
  //       <meta charset="UTF-8">
  //       <title>Chatbot</title>
  //       <style>
  //         body { margin: 0; overflow: hidden; }
  //         /* Add more styles if necessary */
  //       </style>
  //     </head>
  //     <body>
  //       <div id="chatbot"></div>
  //       <script type="module" src="./chatbot.js"></script>
  //       <!-- The script src path must be accessible from the location of the iframe -->
  //     </body>
  //     </html>
  //   `;

  //   // Encode the HTML content and set it as the iframe's src using a data URI
  //   iframe.src = "data:text/html;charset=utf-8," + encodeURI(iframeContent);

  //   // Identify the target element where the chatbot iframe will be appended
  //   const targetElement = document.getElementById("chatbot-container"); // Ensure you have this element in your main app

  //   if (targetElement) {
  //     targetElement.appendChild(iframe);
  //   } else {
  //     console.error("Chatbot container element not found.");
  //   }
  // }

  // if (document.readyState === "loading") {
  //   // Loading hasn't finished yet
  //   document.addEventListener("DOMContentLoaded", initChatbot);
  // } else {
  //   // `DOMContentLoaded` has already fired
  //   initChatbot();
  // })

  ReactDOM.createRoot(document.getElementById("chatbot")!).render(
    <React.StrictMode>
      <PromptProvider>
        <App />
      </PromptProvider>
    </React.StrictMode>,
  );
};

init();
