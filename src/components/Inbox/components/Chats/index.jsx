import React from "react";
import "./Chats.css"

function Chats({ username, summary, count, avatarURL }) {

    return (
        <li className="chat-card">
          <img src={avatarURL} alt="Avatar" className="avatar" />
          <div className="chat-info">
            <h3 className="chat-name">{username}</h3>
            <p className="chat-summary">{summary}</p>
          </div>
          {count === 0 ? null : (<div className="unread-count">{count}</div>)}
        </li>
    );
  }
  
export { Chats }