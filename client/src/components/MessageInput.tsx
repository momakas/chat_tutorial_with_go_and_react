import { useSendMessage } from "../hooks/use-send-message";

export const MessageInput = () => {
  const { input, setInput, send } = useSendMessage();

  return (
    <div>
      <textarea
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="new message"
        id="input_message"
      />
      <button id="send_btn" onClick={send}>Send</button>
    </div>
  );
};