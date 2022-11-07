export interface Message {
  text: string;
}

export interface MessageResponse {
  message: Message;
}

export function getMessage(): MessageResponse {
  return { message: { text: "Hello World" } };
}
