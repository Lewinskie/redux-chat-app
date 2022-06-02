import React from "react";
import { useSelector } from "react-redux";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import "./chatWindow.css";
import Message from "./Message";

const ChatWindow = ({ activeUserId, user }) => {
  const state = useSelector((state) => state.contacts);

  const activeUser = state.filter((item) => item.userId === activeUserId);

  console.log(activeUserId);

  const messages = useSelector((state) => state.messages);
  const activeUserChats = messages[activeUserId];
  const value = useSelector((state) => state.typing);

  return (
    <div className="chatWindow">
      <ChatHeader activeUser={activeUser} />
      <div className="chatMessagesWrapper">
        <ChatMessages activeUserChats={activeUserChats} />
      </div>
      <Message value={value} user={user} />
    </div>
  );
};

export default ChatWindow;
