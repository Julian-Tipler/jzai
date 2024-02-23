import { TextBar } from "./TextBar";
import { MessageContainer } from "./MessageContainer";
import { Header } from "./Header";
import { usePromptContext } from "../contexts/PromptContext";
import { Meatball } from "./Meatball";

export const ChatWindow = () => {
  const { modalOpen } = usePromptContext();
  if (!modalOpen) return <Meatball />;
  return (
    <div className="fixed bottom-0 right-0 m-4 flex h-128 w-128 flex-col overflow-hidden rounded-lg bg-white shadow-lg">
      <Header />
      <MessageContainer />
      <TextBar />
    </div>
  );
};
