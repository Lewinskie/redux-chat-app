import React from "react";
import Empty from "./Empty";
import ChatWindow from "./ChatWindow";
import { useSelector } from "react-redux";
import "./main.css";

const Main = () => {
  const activeUserId = useSelector((state) => state.activeUserId);
  const user = useSelector((state) => state.user);

  return (
    <div className="main">
      {activeUserId === null ? (
        <Empty user={user} />
      ) : (
        <ChatWindow activeUserId={activeUserId} user={user} />
      )}
    </div>
  );
};

export default Main;
