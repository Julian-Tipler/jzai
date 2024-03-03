import { IFrame } from "./IFrame";
import { ChatWindow } from "./components/Window";
import { PromptProvider } from "./contexts/PromptContext";
import styles from "./index.css?inline";

function App() {
  return (
    <IFrame
      styles={`${styles}`}
      className="fixed bottom-0 right-0 m-4 h-128 w-128 rounded-lg bg-white shadow-lg"
    >
      <PromptProvider>
        <ChatWindow />
      </PromptProvider>
    </IFrame>
  );
}

export default App;
