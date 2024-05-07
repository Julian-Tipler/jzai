import { linkify } from "../helpers/linkify";
import { MessageType } from "../types/MessageType";
import classNames from "classnames";

export const Message = ({ message }: { message: MessageType }) => {
  const richContent = linkify(message.content);
  const isUser = message.role === "user";

  return (
    <div
      className={classNames("flex flex-col text-xs", {
        "items-end": isUser,
        "items-start": !isUser,
      })}
    >
      <div className="mb-1 text-xs text-slate-400">
        {isUser ? "You" : "Bot"}
      </div>
      <div
        className={classNames(
          "w-3/4 rounded-lg rounded-tl-lg rounded-tr-lg p-2 text-left",
          {
            "self-end rounded-bl-lg rounded-br-none bg-brand-blue text-white":
              isUser,
            "rounded-br-rounded-bl-none self-start bg-slate-100 text-black ":
              !isUser,
          },
        )}
        dangerouslySetInnerHTML={{ __html: richContent }}
      />
    </div>
  );
};
