import { useEffect, useRef, ReactNode } from "react";
import ReactDOM from "react-dom/client";

export function IFrame({
  styles,
  children,
  ...remainingProps
}: {
  styles: string;
  children: ReactNode;
  [key: string]: string | ReactNode | undefined;
}) {
  const containerEl = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (containerEl.current) {
      const doc = containerEl.current.contentDocument;
      doc!.open();
      doc!.close();

      const style = doc!.createElement("style");
      style.textContent = styles;
      doc!.head.appendChild(style);

      ReactDOM.createRoot(doc!.body).render(children);
    }
  }, [styles, children]);

  return <iframe {...remainingProps} ref={containerEl} />;
}
