import { FormEvent } from "react";
import { usePromptContext } from "../contexts/PromptContext";
import SendIcon from "../icons/SendIcon";

export const TextBar = () => {
  const { prompt, setPrompt, submitPrompt } = usePromptContext();
  
  const handlePromptSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitPrompt();
  };

  return (
    <form onSubmit={handlePromptSubmission} className="m-0 flex p-3">
      <input
        type="text"
        placeholder="Type your message here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="flex-1 rounded-lg border-1 border-gray-200 bg-white p-1 text-xs text-black focus:border-brand-blue focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Send message"
        className="hover:bg-brand-blue-dark ml-2 rounded-lg bg-brand-blue p-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-opacity-50"
      >
        <SendIcon />
      </button>
    </form>
  );
};
