import { TextBar } from "./TextBar";
import { MessageContainer } from "./MessageContainer";
import { Header } from "./Header";
import { usePromptContext } from "../contexts/PromptContext";
import { Meatball } from "./Meatball";

export const ChatWindow = () => {
  const { modalOpen } = usePromptContext();

  if (!modalOpen) return <Meatball />;
  return (
    <div className="flex h-full flex-col">
      <Header />
      <MessageContainer />
      <TextBar />
    </div>
  );
};
