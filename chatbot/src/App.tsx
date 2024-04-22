import { IFrame } from "./IFrame";
import { ChatWindow } from "./components/Window";
import { PromptProvider } from "./contexts/PromptContext";
import styles from "./index.css?inline";

function App() {
  return (
    <div className="fixed bottom-0 right-0 z-10000 m-4 h-128 w-128 flex flex-col justify-end">
      <IFrame
        styles={`${styles}`}
        className="h-128 w-128 rounded-lg bg-white shadow-lg"
      >
        <PromptProvider>
          <ChatWindow />
        </PromptProvider>
      </IFrame>
      <button className="shrink">Copilot</button>
    </div>
  );
}

export default App;
