import React from "react";
import "./Chats.css"

function Chats() {
    return (
        <li className="chat-card">
          <img src="./logo192.png" alt="Avatar" className="avatar" />
          <div className="chat-info">
            <h3 className="chat-name">Nombre del Usuario</h3>
            <p className="chat-summary">Resumen del último mensaje</p>
          </div>
          <div className="unread-count">3</div>
        </li>
    );
  }
  
export { Chats }