import { TextBar } from "./TextBar";
import { MessageContainer } from "./MessageContainer";
import { Header } from "./Header";

export const ChatWindow = () => {

  return (
    <div className="flex h-full flex-col bg-white">
      <Header />
      <MessageContainer />
      <TextBar />
    </div>
  );
};
