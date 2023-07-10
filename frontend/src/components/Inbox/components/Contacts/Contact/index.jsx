import React from "react";
import "./Contact.css"

export default function Contact({ displayName, username, photo_url }) {

    return (
        <li className="contact-card chat-card">
          <img src={photo_url} alt="Avatar" className="avatar" />
          <div className="chat-info">
            <h3 className="chat-name">{displayName}</h3>
            <p className="chat-summary">@{username}</p>
          </div>
        </li>
    );
  }
