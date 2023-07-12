import "./Contact.css"

import { useContext } from "react";
import socket from "../../../../../helpers/socket"

import { UserContext } from "../../../../../store/context/user/UserContext"
import { InboxContext, InboxDispatchContext } from "../../../../../store/context/inbox/inboxContext";

import { selectedInbox } from "../../../../../store/dispatch/InboxDispatch";

export default function Contact(props) {

  const { displayName, username, photo_url, id_room, toggleContacts } = props

  const { current_id_room } = useContext(InboxContext)
  const { user_data: { id }} = useContext(UserContext)
  
  const InboxDispatch = useContext(InboxDispatchContext)
  
  function handleClick() {
    if(!(current_id_room === id_room)) {
      selectedInbox(InboxDispatch, props)
    }

    toggleContacts()
  }


    return (
        <li className="contact-card chat-card" onClick={handleClick}>
          <img src={photo_url} alt="Avatar" className="avatar" />
          <div className="chat-info">
            <h3 className="chat-name">{displayName}</h3>
            <p className="chat-summary">@{username}</p>
          </div>
        </li>
    );
  }
