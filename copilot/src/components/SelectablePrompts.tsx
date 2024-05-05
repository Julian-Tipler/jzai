import { usePromptContext } from "../contexts/PromptContext";

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
    e: React.MouseEvent<HTMLButtonElement>;
    selectablePrompt: string;
  }) => {
    e.preventDefault();
    submitPrompt(selectablePrompt);
  };

  return (
    <div
      className={`4border-1 m-auto mt-2 flex flex-col rounded-lg border-1 border-solid border-gray-300 bg-slate-100`}
    >
      {selectablePrompts.map((selectablePrompt, i) => (
        <button
          key={`prompt-${i}`}
          className={`p-2 text-left text-black ${i !== selectablePrompts.length - 1 && "border-b-1 border-solid border-gray-300"} hover:bg-slate-300`}
          onClick={(e) => handlePromptSubmission({ e, selectablePrompt })}
        >
          {selectablePrompt}
        </button>
      ))}
    </div>
  );
};
