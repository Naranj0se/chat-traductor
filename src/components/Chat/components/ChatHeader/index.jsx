import React from "react";
import "./ChatHeader.css"
import ChatContext from "../../../../context/chatContext/ChatContext";
import { useContext } from "react";

function ChatHeader() {

  const { currentChat: { displayName } } = useContext(ChatContext)

  return (
    <div className="chat-header">
      <h2>{displayName ? displayName : ""}</h2>
    </div>
  );
};

export { ChatHeader };
