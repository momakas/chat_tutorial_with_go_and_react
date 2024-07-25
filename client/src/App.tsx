import { MessageInput } from "./components/MessageInput";
import { MessageList } from "./components/MessageList";

import './App.css'

export const App = () => {
  return (
    <div>
      <h1>Simple Chat</h1>
      <div id="chat_area">
        <div id="disp_area">
          <MessageList />
        </div>
        <div id="input_area">
          <MessageInput />
        </div>
      </div>
    </div>
  );
};
