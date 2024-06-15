// Should arrive from the backend in the correct format
export type MessageType = {
  role: "user" | "assistant";
  content: string;
  created: string;
};

export type SelectablePrompts = string[];
