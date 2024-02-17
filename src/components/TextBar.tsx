import { usePromptContext } from "../contexts/PromptContext";

export const TextBar = () => {
  const { prompt, setPrompt, submitPrompt } = usePromptContext();
  const handlePromptSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitPrompt();
  };
  return (
    <form onSubmit={handlePromptSubmission} className="flex p-3">
      <input
        type="text"
        placeholder="Type your message here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="flex-1 rounded-lg border-2 border-gray-200 bg-slate-200 p-2 text-sm text-black focus:border-brand-blue focus:outline-none"
      />
      <button
        type="submit"
        className="hover:bg-brand-blue-dark ml-2 rounded-lg bg-brand-blue px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-opacity-50"
      >
        Send
      </button>
    </form>
  );
};
