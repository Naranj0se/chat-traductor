import React from "react";
import "./OwnMessage.css"

function OwnMessage({ message }) {
    return (
      <div className="own-message">
        <div className="own-message-content">{message}</div>
      </div>
    );
  }

export { OwnMessage };