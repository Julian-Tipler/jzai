import { Message } from "./Message";
import { usePromptContext } from "../contexts/PromptContext";
import { MessageType } from "../types/MessageType";
import { useEffect, useRef } from "react";
import LoadingAnimation from "./LoadingAnimation";

export const MessageContainer = () => {
  const { messages, loading } = usePromptContext();

  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const scrollableContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (endOfMessagesRef.current && scrollableContainerRef.current) {
      scrollableContainerRef.current.scrollTop =
        endOfMessagesRef.current.offsetTop;
    }
  }, [messages]);

  if (!messages) return "loading...";

  return (
    <div
      ref={scrollableContainerRef}
      id="message-container"
      className="flex flex-1 flex-col overflow-y-scroll border-b-1 p-2 justify-start"
    >
      {messages.map((message: MessageType, i: number) => (
        <Message message={message} key={`message-${i}`} />
      ))}
      <div className="flex flex-col w-full mt-4">
        {loading && <LoadingAnimation />}
        <div id="scroll-to" ref={endOfMessagesRef} />
      </div>
    </div>
  );
};
