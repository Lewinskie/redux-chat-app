import { Typography } from "@mui/material";
import React from "react";
import Chat from "./Chat";
import "./chatMessages.css";

const ChatMessages = ({ activeUserChats }) => {
  return (
    <div className="messages">
      {!activeUserChats ? (
        <div className="noMessages">
          <Typography>No messages here yet...</Typography>
        </div>
      ) : (
        activeUserChats.map((chat, index) => <Chat key={index} chat={chat} />)
      )}
    </div>
  );
};

export default ChatMessages;
