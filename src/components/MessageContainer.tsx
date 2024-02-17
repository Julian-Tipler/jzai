import { Message } from "./Message";
import { usePromptContext } from "../contexts/PromptContext";
import { MessageType } from "../types/MessageType";
import { useEffect, useRef } from "react";
import LoadingAnimation from "./LoadingAnimation";

export const MessageContainer = () => {
  const { messages, loading } = usePromptContext();
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Scroll the dummy div into view whenever messages change
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!messages) return "loading...";
  return (
    <div className="flex flex-1 flex-col overflow-y-scroll bg-slate-200">
      {messages.map((message: MessageType, i: number) => {
        return <Message message={message} key={`message-${i}`} />;
      })}
      {loading && <LoadingAnimation />}
      <div ref={endOfMessagesRef} />
    </div>
  );
};
