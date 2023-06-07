import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import "./ChatInput.css"

function ChatInput() {

  return (
    <div className="message-input">
      <TextareaAutosize maxRows={10}/>
      <button>Enviar</button>
    </div>
  );
};

export { ChatInput };
