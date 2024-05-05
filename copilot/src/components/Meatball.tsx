import { usePromptContext } from "../contexts/PromptContext";

export const Meatball = () => {
  const { setModalOpen } = usePromptContext();
  
  return (
    <button
      className="fixed bottom-0 right-0 m-4 rounded-lg bg-white p-3 text-black shadow-lg"
      onClick={() => setModalOpen(true)}
    >
      <i className="fas fa-comments fa-2x"></i>
    </button>
  );
};
