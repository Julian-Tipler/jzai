import { linkify } from "../helpers/linkify";
import { MessageType } from "../types/MessageType";
import { SelectablePrompts } from "./SelectablePrompts";

export const Message = ({ message }: { message: MessageType }) => {
  const richContent = linkify(message.content);
  const selectablePrompts = message.selectablePrompts;
  return message.role === "user" ? (
    <div className="m-2 flex flex-col items-end">
      <div className="mb-2 text-sm text-slate-400">You</div>
      <div
        className=" w-3/4 self-end rounded-lg rounded-bl-lg rounded-br-none rounded-tl-lg rounded-tr-lg bg-brand-blue p-2 text-left text-white"
        dangerouslySetInnerHTML={{ __html: richContent }}
      />
      {/* <SmallText role="You" time="1:45 pm" /> */}
    </div>
  ) : (
    <div className="m-2 flex flex-col items-start">
      <div className="mb-2 text-sm text-slate-400">Bot</div>
      <div
        className=" w-3/4 self-start break-words rounded-bl-none rounded-br-lg rounded-tl-lg rounded-tr-lg bg-slate-100 p-2 text-left text-black"
        dangerouslySetInnerHTML={{ __html: richContent }}
      />
      {/* <SmallText role="Chatbot" time="1:50 pm" /> */}
      {selectablePrompts && (
        <SelectablePrompts selectablePrompts={selectablePrompts} />
      )}
    </div>
  );
};

// const SmallText = ({ role, time }: { role: string; time: string }) => {
//   return (
//     <div className=" mt-1 text-xs text-slate-400">
//       {role} * {time}
//     </div>
//   );
// };
