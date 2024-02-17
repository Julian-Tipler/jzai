import { useEffect, useState } from "react";
import { Message } from "./Message";
import { MessageType } from "../types/MessageType";

const hardCodedPropmts: string[] = [
  "I have a question",
  "I want to know more about skincare",
  "I have a complaint",
  "I have a question for my doctor",
];
const testMessages = [
  {
    role: "assistant",
    text: "Hi there! I am a helpful chatbot. Can I get you started down the right path?",
    selectablePrompts: hardCodedPropmts,
  },
  { role: "user", text: "hello" },
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
