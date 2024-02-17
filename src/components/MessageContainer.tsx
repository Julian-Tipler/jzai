import { useEffect, useState } from "react";
import { Message } from "./Message";
import { MessageType } from "../types/MessageType";
const testMessages = [
  { speaker: "user", text: "hello" },
  { speaker: "bot", text: "hi" },
] as MessageType[];

export const MessageContainer = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  useEffect(() => {
    setMessages(testMessages);
  }, []);
  return (
    <div className="flex flex-1 flex-col bg-slate-200">
      {messages.map((message, i) => {
        return <Message message={message} key={`message-${i}`} />;
      })}
    </div>
  );
};
