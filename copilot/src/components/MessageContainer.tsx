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
    <section
      id="message-container"
      aria-live="polite"
      tabIndex={0}
      aria-label="Conversation"
      className="flex flex-1 flex-col justify-start overflow-y-scroll border-b-1 p-2"
      ref={scrollableContainerRef}
    >
      {messages.map((message: MessageType, i: number) => (
        <Message message={message} key={`message-${i}`} />
      ))}
      <div className="mt-4 flex w-full flex-col">
        {loading && <LoadingAnimation />}
        <div id="scroll-to" ref={endOfMessagesRef} />
      </div>
    </section>
  );
};
