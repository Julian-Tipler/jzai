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

type PostConversationResponse = {
  conversationId: string;
  message: string;
};

type PromptContextValue = {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  submitPrompt: (selectablePrompt?: string) => void;
  messages: MessageType[];
  setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PromptContext = React.createContext<PromptContextValue>(
  {} as PromptContextValue,
);

export function PromptProvider({ children }: { children: React.ReactNode }) {
  const [prompt, setPrompt] = React.useState<string>("");
  const [messages, setMessages] = React.useState<MessageType[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [conversationId, setConversationId] = React.useState<string | null>(
    null,
  );
  const [modalOpen, setModalOpen] = React.useState<boolean>(true);

  useEffect(() => {
    mockGetAPI();
  }, []);

  const mockGetAPI = async () => {
    setMessages([...testMessages]);
  };

  const submitPrompt = async (selectablePrompt?: string) => {
    if (loading || (prompt.length === 0 && !selectablePrompt)) return;
    const newPrompt = selectablePrompt || prompt;
    const newMessage: MessageType = {
      role: "user",
      content: newPrompt,
    };
    // First update, adding the new user message.
    setMessages((messages) => [...messages, newMessage]);
    setLoading(true);
    try {
      const data = await postConversation({
        prompt: newPrompt,
        conversationId,
      });

      if (data?.conversationId) {
        setConversationId(conversationId);
      }

      if (data?.message) {
        const newResponseMesage: MessageType = {
          role: "assistant",
          content: data.message,
        };
        setMessages((messages) => [...messages, newResponseMesage]);
      }
      // Second update, using a functional update to ensure we're working with the latest state.
    } catch (error) {
      const errorMessage =
        "Sorry, we are experiencing technical difficulties. Please try again later.";
      const errorResponseMesage: MessageType = {
        role: "assistant",
        content: errorMessage,
      };
      setMessages((messages) => [...messages, errorResponseMesage]);

      return null;
    } finally {
      setLoading(false);
    }
  };

  const postConversation = async ({
    prompt,
    conversationId,
  }: {
    prompt: string;
    conversationId: string | null;
  }) => {
    setPrompt("");
    const url =
      import.meta.env.VITE_SUPABASE_FUNCTIONS_URL +
      `/conversations?companyId=${import.meta.env.VITE_TEST_COMPANY_ID}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_SUPABASE_ANON_KEY,
      },
      body: JSON.stringify({
        content: prompt,
        conversationId: conversationId,
      }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: PostConversationResponse = await response.json();
    return data;
  };

  const value = {
    prompt,
    setPrompt,
    submitPrompt,
    messages,
    setMessages,
    loading,
    setLoading,
    modalOpen,
    setModalOpen,
  };
  return (
    <PromptContext.Provider value={value}>{children}</PromptContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePromptContext = () => useContext(PromptContext);
