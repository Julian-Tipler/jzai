import React, { useContext, useRef } from "react";

type PromptContextValue = {
  prompt: string;
  setPrompt: (prompt: string) => void;
  submitPrompt: () => void;
  formRef: React.RefObject<HTMLFormElement>;
};

export const PromptContext = React.createContext<PromptContextValue>(
  {} as PromptContextValue,
);

export function PromptProvider({ children }: { children: React.ReactNode }) {
  const [prompt, setPrompt] = React.useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  const submitPrompt = (e:) => {
    e.preventDefault();
    console.log("Call /message");
  };

  const value = { prompt, setPrompt, submitPrompt, formRef };
  return (
    <PromptContext.Provider value={value}>{children}</PromptContext.Provider>
  );
}

export const usePromptContext = () => useContext(PromptContext);
