import React from "react";
import "./OtherMessage.css"

function OtherMessage({ message, sender }) {
    return (
      <div className="other-message">
        <div className="other-message-sender">{sender}</div>
        <div className="other-message-content">{message}</div>
      </div>
    );
  }

export { OtherMessage };