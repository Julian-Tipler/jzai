import { usePromptContext } from "../contexts/PromptContext";
import { MouseEvent } from "react";

export const SelectablePrompts = ({
  selectablePrompts,
}: {
  selectablePrompts: string[];
}) => {
  const { submitPrompt } = usePromptContext();

  const handlePromptSubmission = ({
    e,
    selectablePrompt,
  }: {
    e: MouseEvent<HTMLButtonElement>;
    selectablePrompt: string;
  }) => {
    e.preventDefault();
    submitPrompt(selectablePrompt);
  };

  return (
    <div className="flex flex-0 flex-col rounded-lg gap-1 w-fit self-end">
      {selectablePrompts.map((selectablePrompt, i) => (
        <button
          key={`prompt-${i}`}
          className="rounded-md self-end w-fit text-left p-2 text-xs bg-slate-100 hover:bg-black hover:text-white"
          onClick={(e) => handlePromptSubmission({ e, selectablePrompt })}
        >
          {selectablePrompt}
        </button>
      ))}
    </div>
  );
};
