// This will be

import { usePromptContext } from "../contexts/PromptContext";

export const SelectablePrompts = ({
  selectablePrompts,
}: {
  selectablePrompts: string[];
}) => {
  const { submitPrompt } = usePromptContext();
  return (
    <div className="4border-1 m-auto mt-2 flex flex-col rounded-lg border-2 border-solid border-gray-300 bg-slate-200">
      {selectablePrompts.map((selectablePrompt, i) => (
        <button
          key={`prompt-${i}`}
          className={`p-2 text-left text-black ${i !== selectablePrompts.length - 1 && "border-b-2 border-solid border-gray-300"} hover:bg-slate-300`}
          onClick={(e) => {
            e.preventDefault();
            submitPrompt();
          }}
        >
          {selectablePrompt}
        </button>
      ))}
    </div>
  );
};
