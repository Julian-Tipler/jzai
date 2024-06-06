import ChatIcon from "../icons/ChatIcon";

export const Header = () => {
  return (
    <div className="flex justify-between border-b-1 p-2">
      <div className="flex flex-row items-center justify-center gap-1 text-sm font-semibold text-black">
        <ChatIcon /> Copilot
      </div>
    </div>
  );
};
