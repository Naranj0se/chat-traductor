import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import "./ChatInput.css"

function ChatInput() {

  return (
    <div className="message-input">
      <TextareaAutosize maxRows={10}/>
      {/* <button>Enviar</button> */}
      <button>
        <span class="material-symbols-outlined material-symbols-outlined-send">
        send
        </span>
      </button>
    </div>
  );
};

export { ChatInput };