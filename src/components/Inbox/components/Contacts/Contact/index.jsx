import React from "react";
import "./Contact.css"

export default function Contact({ name, username, avatarURL }) {

    return (
        <li className="contact-card chat-card">
          <img src={avatarURL} alt="Avatar" className="avatar" />
          <div className="chat-info">
            <h3 className="chat-name">{name}</h3>
            <p className="chat-summary">@{username}</p>
          </div>
        </li>
    );
  }
