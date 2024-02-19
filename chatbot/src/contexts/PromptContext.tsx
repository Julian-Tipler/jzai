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
    content:
      "Hi there! I am a helpful chatbot. Can I get you started down the right path?",
    selectablePrompts: hardCodedPropmts,
  },
] as MessageType[];

type PromptContextValue = {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  submitPrompt: (selectablePrompt?: string) => void;
  messages: MessageType[];
  setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PromptContext = React.createContext<PromptContextValue>(
  {} as PromptContextValue,
);

export function PromptProvider({ children }: { children: React.ReactNode }) {
  const [prompt, setPrompt] = React.useState<string>("");
  const [messages, setMessages] = React.useState<MessageType[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  useEffect(() => {
    mockGetAPI();
  }, []);

  const mockGetAPI = async () => {
    setMessages([...testMessages]);
  };

  const submitPrompt = async (selectablePrompt?: string) => {
    if (loading) return;
    const newPrompt = selectablePrompt || prompt;
    const newMessage: MessageType = {
      role: "user",
      content: newPrompt,
    };
    // First update, adding the new user message.
    setMessages((messages) => [...messages, newMessage]);
    setLoading(true);
    try {
      const response = await postConversation(newPrompt);
      // Second update, using a functional update to ensure we're working with the latest state.
      setMessages((messages) => [...messages, response]);
    } catch (error) {
      console.error("Failed to post prompt:", error);
      // Handle error (e.g., show an error message to the user)
    }
    setLoading(false);
    setPrompt("");
  };

  const postConversation = async (prompt: string) => {
    const url =
      import.meta.env.VITE_SUPABASE_FUNCTIONS_URL + "/conversations?userId=1";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_SUPABASE_ANON_KEY,
      },
      body: JSON.stringify({ content: prompt }),
    })
      .then((response) => response.json())
      .then((data: MessageType) => {
        console.log("Success:", data);
        return data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const value = {
    prompt,
    setPrompt,
    submitPrompt,
    messages,
    setMessages,
    loading,
    setLoading,
  };
  return (
    <PromptContext.Provider value={value}>{children}</PromptContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePromptContext = () => useContext(PromptContext);
