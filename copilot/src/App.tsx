import { useState } from "react";
import { IFrame } from "./IFrame";
import { ChatWindow } from "./components/Window";
import { PromptProvider } from "./contexts/PromptContext";
import styles from "./copilot.module.css?inline";
import ChatIcon from "./icons/ChatIcon";

function App() {
  const [open, setOpen] = useState(true);

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
        <ChatIcon />
      </button>
    </>
  );
}

export default App;
