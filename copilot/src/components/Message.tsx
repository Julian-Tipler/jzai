import { linkify } from "../helpers/linkify";
import { MessageType } from "../types/MessageType";
import classNames from "classnames";

export const Message = ({ message }: { message: MessageType }) => {
  const richContent = linkify(message.content);
  const isUser = message.role === "user";
  const timeString = new Date(message.created).toLocaleTimeString();

  return (
    <section
      aria-label={timeString}
      className={classNames("flex flex-col text-xs", {
        "items-end": isUser,
        "items-start": !isUser,
      })}
    >
      <div className="mb-1 text-xs text-slate-500">
        {isUser ? "You" : "Copilot"}
      </div>
      <div
        className={classNames(
          "break-words w-3/4 rounded-lg rounded-tl-lg rounded-tr-lg p-2 text-left",
          {
            "self-end rounded-bl-lg rounded-br-none bg-brand-blue text-white":
              isUser,
            "self-start rounded-bl-none rounded-br bg-slate-100 text-black ":
              !isUser,
          },
        )}
        dangerouslySetInnerHTML={{ __html: richContent }}
      />
    </section>
  );
};
