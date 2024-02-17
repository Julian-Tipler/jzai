import React, { useContext, useEffect } from "react";
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
] as MessageType[];

type PromptContextValue = {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  submitPrompt: (selectablePrompt?: string) => void;
  messages: MessageType[];
  setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>;
};

export const PromptContext = React.createContext<PromptContextValue>(
  {} as PromptContextValue,
);

export function PromptProvider({ children }: { children: React.ReactNode }) {
  const [prompt, setPrompt] = React.useState<string>("");
  const [messages, setMessages] = React.useState<MessageType[]>([]);

  useEffect(() => {
    mockGetAPI();
  }, []);

  const submitPrompt = async (selectablePrompt?: string) => {
    const newPrompt = selectablePrompt || prompt;
    const newMessage: MessageType = {
      role: "user",
      text: newPrompt,
    };
    // First update, adding the new user message.
    setMessages((messages) => [...messages, newMessage]);

    try {
      const response = await mockPostAPI(newPrompt);
      // Second update, using a functional update to ensure we're working with the latest state.
      setMessages((messages) => [...messages, response]);
    } catch (error) {
      console.error("Failed to post prompt:", error);
      // Handle error (e.g., show an error message to the user)
    }

    setPrompt("");
  };

  const mockGetAPI = async () => {
    setMessages([...testMessages]);
  };

  const mockPostAPI = async (prompt: string) => {
    console.log("sending this prompy to the backend:", prompt);
    const newMessage: MessageType = {
      role: "assistant",
      text: "Here is an answer to that question: because of science",
    };
    return newMessage;
  };

  const value = { prompt, setPrompt, submitPrompt, messages, setMessages };
  return (
    <PromptContext.Provider value={value}>{children}</PromptContext.Provider>
  );
}

export const usePromptContext = () => useContext(PromptContext);
