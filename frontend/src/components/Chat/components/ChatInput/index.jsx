import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import "./ChatInput.css"
import socket from "../../../../helpers/socket";
import { useContext } from "react";
import ChatContext from "../../../../context/chatContext/ChatContext";
import UserContext from "../../../../context/userContext/UserContext";

function ChatInput({setMessages}) {

  const { currentChat: { id_room } } = useContext(ChatContext)
  const { user: { user_data: { id } } } = useContext(UserContext)

  const [message, setMessage] = useState("")

  const handleChange = e => setMessage(e.target.value) 

  function handleSubmit() {
    const body = {
      id_room,
      message,
      id_user: id
    }

    const newMessage = { message, id_room, id_user: id }

    setMessages(messages => [...messages, newMessage])

    socket.emit("client_message", body)
    setMessage("")
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
  );
};

export { ChatInput };
