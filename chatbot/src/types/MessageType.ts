// Should arrive from the backend in the correct format
export type MessageType = {
  role: "user" | "assistant";
  type: "TEXT"
  content: string;
  selectablePrompts?: string[];
};
