import { usePromptContext } from "../contexts/PromptContext";

export const Header = () => {
  console.log("HEADER")
  const { setModalOpen } = usePromptContext();
  return (
    <div className="border-b-1 flex justify-between p-4">
      <div className="text-lg font-bold text-black">Chatbot</div>
      <button className="px-2"onClick={() => setModalOpen(false)}>
        <i className="fas fa-times text-gray-500"></i>
      </button>
    </div>
  );
};
