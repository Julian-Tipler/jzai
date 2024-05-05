import { useState } from "react";
import { IFrame } from "./IFrame";
import { ChatWindow } from "./components/Window";
import { PromptProvider } from "./contexts/PromptContext";
import styles from "./copilot.module.css?inline";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="jzai-copilot-iframe-wrapper">
          <IFrame styles={styles} role="region" title="Copilot" tabindex="0">
            <PromptProvider>
              <ChatWindow />
            </PromptProvider>
          </IFrame>
        </div>
      )}
      <button
        className="jzai-copilot-trigger-button"
        onClick={() => setOpen(!open)}
        aria-label="Open Copilot"
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
          strokeWidth="1.5"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.25 5C2.25 3.48122 3.48122 2.25 5 2.25H19C20.5188 2.25 21.75 3.48122 21.75 5V15C21.75 16.5188 20.5188 17.75 19 17.75H7.96125C7.58154 17.75 7.2224 17.9226 6.98516 18.2191L4.65418 21.1328C3.85702 22.1293 2.25 21.5657 2.25 20.2895V5ZM6.25 12C6.25 11.5858 6.58579 11.25 7 11.25H17C17.4142 11.25 17.75 11.5858 17.75 12C17.75 12.4142 17.4142 12.75 17 12.75H7C6.58579 12.75 6.25 12.4142 6.25 12ZM7 7.25C6.58579 7.25 6.25 7.58579 6.25 8C6.25 8.41421 6.58579 8.75 7 8.75H13C13.4142 8.75 13.75 8.41421 13.75 8C13.75 7.58579 13.4142 7.25 13 7.25H7Z"
            fill="#000000"
          ></path>
        </svg>
      </button>
    </>
  );
}

export default App;
