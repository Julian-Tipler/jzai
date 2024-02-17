import { MessageType } from "../types/MessageType";

export const Message = ({ message }: { message: MessageType }) => {
  const text = message.text;
  return message.speaker === "user" ? (
    <div className="m-2 flex flex-col items-end">
      <div className=" w-3/4 self-end rounded-lg rounded-bl-lg rounded-br-none rounded-tl-lg rounded-tr-lg bg-brand-blue p-2 text-left text-white">
        {text}
      </div>
      <SmallText speaker="You" time="1:45 pm" />
    </div>
  ) : (
    <div className="m-2 flex flex-col items-start">
      <div className=" w-3/4 self-start rounded-bl-none rounded-br-lg rounded-tl-lg rounded-tr-lg bg-slate-300 p-2 text-left text-black">
        {text}
      </div>
      <SmallText speaker="Chatbot" time="1:50 pm" />
    </div>
  );
};

const SmallText = ({ speaker, time }: { speaker: string; time: string }) => {
  return (
    <div className=" mt-1 text-xs text-slate-400">
      {speaker} * {time}
    </div>
  );
};
