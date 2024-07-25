import { useMessageList } from "../hooks/use-message-list";

export const MessageList = () => {
  const messageList = useMessageList();

  return (
    <ul>
      {messageList.map((m, i) => (
        <li className="message" key={i}>{m.content}</li>
      ))}
    </ul>
  );
};