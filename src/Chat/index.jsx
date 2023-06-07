import React from "react";
import "./Chat.css"

function Chat(props){
  return (
    <div className="chat">
        {props.children}
    </div>
  );
};

export { Chat };
