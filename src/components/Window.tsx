import { TextBar } from "./TextBar";
import { MessageContainer } from "./MessageContainer";

export const ChatWindow = () => {
  return (
    <div className="fixed bottom-0 right-0 m-4 flex h-128  w-128 flex-col overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="bg-brand-blue p-3 text-lg text-white">Chatbot</div>
      <MessageContainer />
      <TextBar />
    </div>
  );
};
