import { useState, useContext } from "react";
import TextareaAutosize from "react-textarea-autosize"

import socket from "../../../../helpers/socket"
import { InboxContext } from "../../../../store/context/inbox/inboxContext"
import { UserContext } from "../../../../store/context/user/UserContext"

import "./ChatInput.css"

function ChatInput() {

  const initialValue = ''
  const [message, setMessage] = useState(initialValue)

  const { current_id_room } = useContext(InboxContext)
  const { user_data: { id } } = useContext(UserContext)

  const handleChange = e => setMessage(e.target.value) 
  
  function handleSubmit() {
    const body = {
      id_room: current_id_room,
      message,
      id_user: id
    }

    socket.emit("messages:clientSendMessage", body)
    setMessage(initialValue)
  }

  return (
    <div className="message-input">
      <TextareaAutosize maxRows={10} value={message} onChange={handleChange} />
      {/* <button>Enviar</button> */}
      <button className="hvr-shrink" onClick={handleSubmit}>
        <span className="material-symbols-outlined material-symbols-outlined-send">
        send
        </span>
      </button>
    </div>
  )
}

export { ChatInput };
