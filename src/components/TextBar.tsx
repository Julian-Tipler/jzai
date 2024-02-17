export const TextBar = ({
  message,
  setMessage,
}: {
  message: string;
  setMessage: (message: string) => void;
}) => {
  return (
    <form onSubmit={sendMessage} className="flex p-3">
      <input
        type="text"
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
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

const sendMessage = () => {
  console.log("message sent");
};
