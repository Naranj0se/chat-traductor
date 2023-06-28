import React from "react";
import "./Chats.css"
import { useContext } from "react";
import ChatContext from "../../../../context/chatContext/ChatContext";
import UserContext from '../../../../context/userContext/UserContext'

import Socket from '../../../../helpers/socket' 

export default function Inbox({ username, id_room, counter, photo_url, displayName, message, id_message, updatedCounted }) {

    const { setCurrentChat } = useContext(ChatContext)
    const { user: {user_data: {id}}} = useContext(UserContext)  

    function handleClick() {
      setCurrentChat({
        pointer: true,
        displayName,
        id_room,
        username,
        photo_url
      })

      if(counter) {
        const body = {id_message, id_user: id, id_room}
        Socket.emit('message:read', body)
        updatedCounted(id_room)
      }

    }

    return (
        <li className="chat-card" onClick={e => handleClick(id_room)}>
          <img src={photo_url} alt="Avatar" className="avatar" />
          <div className="chat-info">
            <h3 className="chat-name">{displayName}</h3>
            <p className="chat-summary">{message}</p>
          </div>
          {counter === 0 ? null : (<div className="unread-count">{counter}</div>)}
        </li>
    );
  }
