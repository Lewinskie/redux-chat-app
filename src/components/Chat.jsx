import React from "react";
import "./chat.css";
import { Typography } from "@mui/material";

const Chat = ({ chat }) => {
  const { text, is_user_msg } = chat;

  return (
    <div className="chat">
      {is_user_msg ? (
        <div className="rightBubble">
          <Typography
            variant="body"
            style={{ wordWrap: "break-word", width: "100%" }}
          >
            {text}
          </Typography>
        </div>
      ) : (
        <div className="leftBubble">
          <Typography
            variant="body"
            style={{ wordWrap: "break-word", width: "100%" }}
          >
            {text}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Chat;
