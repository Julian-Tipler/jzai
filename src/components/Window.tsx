import { useState } from "react";
import { TextBar } from "./TextBar";
import { MessageContainer } from "./MessageContainer";

export const ChatWindow = () => {
  const [message, setMessage] = useState<string>("");
  return (
    <div className="w-128 fixed bottom-0 right-0 m-4 flex  h-128 flex-col overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="bg-brand-blue p-3 text-lg text-white">Chatbot</div>
      <MessageContainer />
      <TextBar message={message} setMessage={setMessage} />
    </div>
  );
};
