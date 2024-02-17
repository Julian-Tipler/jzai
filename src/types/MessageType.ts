// Should arrive from the backend in the correct format
export type MessageType = {
  role: "user" | "assistant";
  text: string;
  selectablePrompts?: string[];
};
